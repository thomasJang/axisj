/* AXISJ Javascript UI Framework */
/* http://www.axisj.com, license : http://www.axisj.com/license */

/**
 * AXTree
 * @class AXTree
 * @extends AXJ
 * @version v1.56
 * @author tom@axisj.com
 * @logs
 "2013-02-14 오후 2:36:35",
 "2013-04-19 ajax setList 버그픽스 - tom",
 "2013-06-02 updateList 버그픽스 - tom",
 "2013-06-04 오전 11:26:31 headCheck 버그픽스 - tom",
 "2013-06-20 오전 12:49:55 control method 수정 및 버그 픽스 - tom",
 "2013-06-21 오전 10:41:47 fitToWidth 속성 추가 - tom",
 "2013-07-04 오후 1:12:05 tooltip 속성 추가 - tom",
 "2013-07-08 오전 9:13:19 스크롤 버그 / appendTree 버그픽스 - tom",
 "2013-07-14 오전 1:53:59 appenTree 기능 개선 - tom ",
 "2013-07-15 오전 10:36:15 contentScrollScrollWheel 버그 픽스 - tom",
 "2013-08-29 오후 2:35:13 width : auto 지원",
 "2013-09-02 오후 2:03:10 scroll 중 마우스 오버 아웃 버그 픽스 - tom ",
 "2013-09-04 오후 2:49:54 AXConfig에서 설정값 바인딩 구조로 변경 처리 - tom",
 "2013-09-04 오후 9:46:17 checkboxRelationFixed 속성 추가 / 체크 박스 부모자식 관계 처리 - tom ",
 "2013-10-03 오후 9:24:42 AXTreeSplit 속성 추가 ui 클래스 포함 - tom",
 "2013-10-18 오전 8:30:50 dblclick 이벤트 개선 / click(index) 메서드 추가 - tom",
 "2013-11-26 오후 1:48:19 tom : appendTree 버그픽스",
 "2013-11-26 오후 2:07:40 tom : body.oncontract 기능 추가",
 "2014-02-06 오후 8:43:42 tom : jQuery 독립을 위한 문자열 변경",
 "2014-05-02 tom : colGroup width * 지원",
 "2014-05-12 tom : item nodeName 에 formatter 를 이용하여 <span> 태그를 삽입 했을 때 click 이벤트가 발생하도록 픽스",
 "2014-05 25 tom : resetHeight 함수 개선, emptyListMSG 설정 기능 추가"
 "2014-05-27 tom : ajax 옵션 추가 확장 지원 "
 "2014-06-02 tom : change ajax data protocol check result or error key in data"
 "2014-06-10 tom : bugfix, method:clearFocus"
 "2014-06-11 tom : bugfix, method:removeTree - remove child node then parent node not update"
 "2014-06-13 tom : bugfix, method:updateTree sync data list & tree"
 "2014-07-04 tom : bugfix, parentKey value is not '0' display error"
 "2010-07-14 tom : bugfix, reserveKeys.subTree not match code"
 "2014-08-04 tom : 'modify add' relationFixedSync arguments define"
 "2014-08-13 tom : window.resize 이벤트시 selectedRow 유지, expandAll 메소드 뎁스 아규먼트 추가"
 "2014-09-01 tom : tree key event로 커서 이동 밑 트리 열기 닫기 지원"
 *
 * @description
 *
 ```js
 var myTree = new AXTree();
 myTree.setConfig(classConfig:JSObject);
 ```
 */

var AXTree = Class.create(AXJ, {
	initialize: function (AXJ_super) {
		AXJ_super();
		this.Observer = null;
		this.tree = [];
		this.list = [];

		this.pageActive = false;
		this.page = {}; /*{pageNo:0, pageSize:100, pageCount:"", listCount:0};*/

		this.moveSens = 0;

		this.config.moveSens = 1;
		this.config.formPaddingRight = "11px";
		this.config.sort = true;
		this.config.xscroll = true;
		this.config.showConnectionLine = false;
		this.config.iconWidth = 23;
		this.config.indentWidth = 20;
		this.config.indentRatio = 1;

		this.config.fitToWidth = (AXConfig.AXTree.fitToWidth || false);
		this.config.fitToWidthRightMargin = (AXConfig.AXTree.fitToWidthRightMargin || 10);
		this.config.checkboxRelationFixed = true;

		this.selectedCells = [];
		this.selectedRow = [];
		this.config.hashDigit = 3;

		this.isMobile = AXUtil.browser.mobile;
	},
	/* 공통 영역 */
	defineConfig: function (rewrite) {
		var cfg = this.config;
		if (cfg.colGroup.length == 0) {
			trace("colGrpup is empty)");
			return;
		}

		/* col너비 합계 구하기 */
		var colWidth = 0;
		var hasHiddenCell = false;
		var showColLen = 0;
		if (!rewrite) this.fixedColSeq = cfg.fixedColSeq;
		var bodyWidth = this.body.width();
		var astricCount = 0;

		for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
			if (CG.colSeq == undefined) CG.colSeq = cidx;
			if (CG.display == undefined) CG.display = true;
			if (CG.display) {
				if (!rewrite) {
					if (CG.width == "*") {
						CG.width = 0;
						CG.widthAstric = true;
						astricCount++;
					}
					CG._owidth = CG.width;
					/* 최초의 너비값 기억 하기 */
				} else {
					if (CG.widthAstric) {
						CG.width = 0;
						CG._owidth = CG.width;
						astricCount++;
					}
				}

				colWidth += (CG._owidth || 0).number();
				showColLen += 1;
			} else {
				hasHiddenCell = true;
			}
		}
		if (!cfg.fitToWidth) {
			/* width * 예외처리 구문 ------------ s */
			if ((bodyWidth - cfg.fitToWidthRightMargin) > (colWidth + 100 * astricCount)) {
				var remainsWidth = (bodyWidth - cfg.fitToWidthRightMargin) - colWidth;
				for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
					if (CG.display && CG.widthAstric) {
						CG._owidth = (remainsWidth / astricCount).ceil();
						CG.width = CG._owidth;
						colWidth += (CG._owidth || 0).number();
					}
				}
			} else {
				for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
					if (CG.display && CG.widthAstric) {
						CG._owidth = 100;
						CG.width = 100;
						colWidth += (CG._owidth || 0).number();
					}
				}
			}
			/* width * 예외처리 구문 ------------ e */
		} else {
			for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
				if (CG.display && CG.widthAstric) {
					CG.width = 100;
					CG._owidth = 100;
					colWidth += (CG._owidth || 0).number();
				}
			}
		}
		this.colWidth = colWidth;

		if (cfg.fitToWidth) { /*너비 자동 맞춤버전의 경우 */
			if (bodyWidth > this.colWidth) {
				var _bodyWidth = bodyWidth - cfg.fitToWidthRightMargin;
				var zoomRatio = bodyWidth / this.colWidth;
				colWidth = 0;
				for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
					CG.width = (CG._owidth * zoomRatio).ceil();
					if (_bodyWidth > CG.width) _bodyWidth -= CG.width;
					else CG.width = _bodyWidth;
					if (CG.display) colWidth += CG.width.number();
				}
				this.colWidth = colWidth;
			} else {
				colWidth = 0;
				for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
					if (CG._owidth == undefined) CG._owidth = (CG.width || 0).number();
					CG.width = CG._owidth.number();
					if (CG.display) colWidth += CG.width.number();
				}
				this.colWidth = colWidth;
			}
		}

		this.showColLen = showColLen;
		/* col너비 합계 구하기 ~~~~~~~~~~~~~~ 구해진 너비합은 그리드 head, body 의 너비로 지정됨. */

		if (!cfg.colHead) cfg.colHead = { display: false };
		if (!cfg.body) cfg.body = {};

		if (cfg.colHead.rowsEmpty) cfg.colHead.rows = undefined;
		if (cfg.body.rowsEmpty) cfg.body.rows = undefined;

		// colHead rows -----------------------------------------------------------------------------------------------------
		if (cfg.colHead.rows) {
			// colHeadRow 정해진 경우
			cfg.colHead._maps = new Array(cfg.colHead.rows.length);
			var colMaxLen = 0;
			for (var r = 0; r < cfg.colHead.rows.length; r++) {
				var colLen = 0;
				axf.each(cfg.colHead.rows[r], function (CHidx, CH) {
					if (CH.rowspan == undefined || CH.rowspan == null) CH.rowspan = 1;
					if (CH.colspan == undefined || CH.colspan == null) {
						CH.colspan = 1;
						CH._colspan = 1;
					} else {
						if (!rewrite) {
							CH._colspan = CH.colspan;
						} else {
							CH.colspan = CH._colspan;
						}
					}
					if (CH.valign == undefined || CH.valign == null) CH.valign = "bottom";
					if (cfg.colHeadAlign) CH.align = "center";
					colLen += CH.colspan.number();
				});
				if (colMaxLen < colLen) colMaxLen = colLen;
			}
			for (var _m = 0; _m < cfg.colHead._maps.length; _m++) { cfg.colHead._maps[_m] = new Array(colMaxLen); }
			// colEndPosition 관련 처리 함수
			var appendPosToColHeadMap = function (r, c, posR, position) { //
				var nC = position.c; //시작 컬럼 위치
				for (var rr = posR; rr < (posR + r) ; rr++) {
					var tC = c; //컬럼 루프횟수
					var isWhile = true; // 루프유지변수
					while (isWhile) {
						try {
							if (tC == 0) {
								isWhile = false;
							} else {
								if (!cfg.colHead._maps[rr][nC]) {
									cfg.colHead._maps[rr][nC] = position;
									tC--;
								} else {
									nC++;
								}
							}
						} catch (e) {
							isWhile = false;
						}
					}
				}
			}
			for (var r = 0; r < cfg.colHead.rows.length; r++) {
				axf.each(cfg.colHead.rows[r], function (CHidx, CH) {
					if (CH.colSeq != undefined) {
						var myCG = cfg.colGroup.getToSeq(CH.colSeq);
					} else {
						var myCG = cfg.colGroup.searchObject(function () {
							return this.item.key == CH.key;
						}).first();
					}
					if (myCG != null) {
						if (rewrite) AXUtil.overwriteObject(CH, myCG, true);
						else AXUtil.overwriteObject(CH, myCG, false);
					} else {
						AXUtil.overwriteObject(CH, { align: "left", valign: "bottom", display: true, rowspan: 1, colspan: 1 }, false);
					}
					appendPosToColHeadMap(CH.rowspan, CH.colspan, r, { r: r, c: CHidx });
				});
			}
			//colHead._maps 마지막 줄에 해당하는 cfg.colHead.rows 에 속성부여
			axf.each(cfg.colHead._maps.last(), function (midx, m) {
				if (m) cfg.colHead.rows[m.r][m.c].isLastCell = true;
			});

			if (hasHiddenCell) { // colGroup 중에 숨겨진 col 이 존재하는 경우
				// colspan 감소 시키기
				axf.each(cfg.colGroup, function (cidx, CG) {
					if (!CG.display) {
						for (var a = 0; a < cfg.colHead._maps.length; a++) {
							var rowPosition = cfg.colHead._maps[a][cidx];
							cfg.colHead.rows[rowPosition.r][rowPosition.c].colspan--;
						}
					}
				});
			}
			//trace(cfg.colHead._maps); _maps check

			// colHeadRow 정해진 경우 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		} else {
			// colHeadRow 정해지지 않은 경우
			cfg.colHead._maps = [[]];
			var colHeadRows = [[]];
			axf.each(cfg.colGroup, function (cidx, CG) {
				var adder = {
					key: CG.key,
					colSeq: CG.colSeq,
					label: CG.label,
					align: (CG.align || (cfg.colHeadAlign || "left")), rowspan: 1, colspan: 1,
					valign: "bottom", isLastCell: true, display: CG.display, formatter: CG.formatter, checked: CG.checked,
					sort: CG.sort,
					tooltip: CG.tooltip
				};
				colHeadRows[0].push(adder);
				cfg.colHead._maps[0].push({ r: 0, c: cidx });
			});
			cfg.colHead.rows = colHeadRows;
			cfg.colHead.rowsEmpty = true;
			// colHeadRow 정해지지 않은 경우 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		}
		// colHead rows -----------------------------------------------------------------------------------------------------

		// body rows -----------------------------------------------------------------------------------------------------
		if (cfg.body.rows) {
			// bodyRow 정해진 경우

			cfg.body._maps = new Array(cfg.body.rows.length);
			var colMaxLen = 0;
			for (var r = 0; r < cfg.body.rows.length; r++) {
				var colLen = 0;
				axf.each(cfg.body.rows[r], function (CHidx, CH) {
					if (CH.colspan == undefined || CH.colspan == null) {
						CH.colspan = 1;
						CH._colspan = 1;
					} else {
						if (!rewrite) CH._colspan = CH.colspan;
						else CH.colspan = CH._colspan;
					}
					if (CH.rowspan == undefined || CH.rowspan == null) CH.rowspan = 1;
					if (CH.valign == undefined || CH.valign == null) CH.valign = "middle";
					//if(CH.align == undefined || CH.align == null) CH.align = "left";
					colLen += CH.colspan.number();
				});
				if (colMaxLen < colLen) colMaxLen = colLen;
			}
			for (var _m = 0; _m < cfg.body._maps.length; _m++) { cfg.body._maps[_m] = new Array(colMaxLen); }
			// colEndPosition 관련 처리 함수
			var appendPosToBodyMap = function (r, c, posR, position) {
				var nC = position.c; //시작 컬럼 위치
				for (var rr = posR; rr < (posR + r) ; rr++) {
					var tC = c; //컬럼 루프횟수
					var isWhile = true; // 루프유지변수
					while (isWhile) {
						try {
							if (tC == 0) { isWhile = false; } else {
								if (!cfg.body._maps[rr][nC]) {
									cfg.body._maps[rr][nC] = position;
									tC--;
								} else {
									nC++;
								}
							}
						} catch (e) { isWhile = false; }
					}
				}
			};
			for (var r = 0; r < cfg.body.rows.length; r++) {
				axf.each(cfg.body.rows[r], function (CHidx, CH) {
					if (CH.colSeq != undefined) {
						var myCG = cfg.colGroup.getToSeq(CH.colSeq);
					} else {
						var myCG = cfg.colGroup.searchObject(function () {
							return this.item.key == CH.key;
						}).first();
					}
					if (myCG != null) {
						if (rewrite) AXUtil.overwriteObject(CH, myCG, true);
						else AXUtil.overwriteObject(CH, myCG, false);
					} else {
						AXUtil.overwriteObject(CH, { align: "left", valign: "bottom", display: true, rowspan: 1, colspan: 1 }, false);
					}
					appendPosToBodyMap(CH.rowspan, CH.colspan, r, { r: r, c: CHidx });
				});
			}
			//body._maps 마지막 줄에 해당하는 cfg.body.rows 에 속성부여
			axf.each(cfg.body._maps.last(), function (midx, m) {
				if (m) cfg.body.rows[m.r][m.c].isLastCell = true;
			});

			if (hasHiddenCell) { // colGroup 중에 숨겨진 col 이 존재하는 경우
				// colspan 감소 시키기
				axf.each(cfg.colGroup, function (cidx, CG) {
					if (!CG.display) {
						for (var a = 0; a < cfg.body._maps.length; a++) {
							var rowPosition = cfg.body._maps[a][cidx];
							cfg.body.rows[rowPosition.r][rowPosition.c].colspan--;
						}
					}
				});
			}

			// bodyRow 정해진 경우 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		} else {
			// bodyRow 정해지지 않은 경우
			cfg.body._maps = [[]];
			var bodyRows = [[]];
			axf.each(cfg.colGroup, function (cidx, CG) {
				var adder = {
					key: CG.key, colSeq: CG.colSeq, label: CG.label, align: (CG.align || "left"), rowspan: 1, colspan: 1, valign: "middle", isLastCell: true,
					display: CG.display, formatter: CG.formatter, checked: CG.checked, disabled: CG.disabled, indent: CG.indent, getIconClass: CG.getIconClass,
					tooltip: CG.tooltip
				};
				bodyRows[0].push(adder);
				cfg.body._maps[0].push({ r: 0, c: cidx });
			});
			cfg.body.rows = bodyRows;
			cfg.body.rowsEmpty = true;
			// bodyRow 정해지지 않은 경우 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		}
		// body rows -----------------------------------------------------------------------------------------------------

		//marker 관련 데이터 정리
		if (cfg.body.marker) {
			if (cfg.body.marker.rows) {
				this.bodyHasMarker = true;
				cfg.body.marker._maps = new Array(cfg.body.marker.rows.length);
				colMaxLen = 0;
				for (var r = 0; r < cfg.body.marker.rows.length; r++) {
					var colLen = 0;
					axf.each(cfg.body.marker.rows[r], function (CHidx, CH) {
						if (CH.rowspan == undefined || CH.rowspan == null) CH.rowspan = 1;
						if (CH.colspan == undefined || CH.colspan == null) {
							CH.colspan = 1;
							CH._colspan = 1;
						} else {
							if (!rewrite) CH._colspan = CH.colspan;
							else CH.colspan = CH._colspan;
						}
						if (CH.valign == undefined || CH.valign == null) CH.valign = "bottom";
						colLen += CH.colspan.number();
					});
					if (colMaxLen < colLen) colMaxLen = colLen;
				}
				for (var _m = 0; _m < cfg.body.marker._maps.length; _m++) { cfg.body.marker._maps[_m] = new Array(colMaxLen); }
				// colEndPosition 관련 처리 함수
				var appendPosToEditorMap = function (r, c, posR, position) { //
					var nC = position.c; //시작 컬럼 위치
					for (var rr = posR; rr < (posR + r) ; rr++) {
						var tC = c; //컬럼 루프횟수
						var isWhile = true; // 루프유지변수
						while (isWhile) {
							try {
								if (tC == 0) {
									isWhile = false;
								} else {
									if (!cfg.body.marker._maps[rr][nC]) {
										cfg.body.marker._maps[rr][nC] = position;
										tC--;
									} else { nC++; }
								}
							} catch (e) { isWhile = false; }
						}
					}
				};
				for (var r = 0; r < cfg.body.marker.rows.length; r++) {
					axf.each(cfg.body.marker.rows[r], function (CHidx, CH) {
						if (CH.colSeq != undefined) {
							var myCG = cfg.colGroup.getToSeq(CH.colSeq);
						} else {
							var myCG = cfg.colGroup.searchObject(function () {
								return this.item.key == CH.key;
							}).first();
						}
						if (myCG != null) AXUtil.overwriteObject(CH, myCG, false);
						else AXUtil.overwriteObject(CH, { align: "left", valign: "bottom", display: true, rowspan: 1, colspan: 1 }, false);
						appendPosToEditorMap(CH.rowspan, CH.colspan, r, { r: r, c: CHidx });
					});
				}
				//colHead._maps 마지막 줄에 해당하는 cfg.colHead.rows 에 속성부여
				axf.each(cfg.body.marker._maps.last(), function (midx, m) {
					if (m) cfg.body.marker.rows[m.r][m.c].isLastCell = true;
				});

				if (hasHiddenCell) { // colGroup 중에 숨겨진 col 이 존재하는 경우
					// colspan 감소 시키기
					axf.each(cfg.colGroup, function (cidx, CG) {
						if (!CG.display) {
							for (var a = 0; a < cfg.body.marker._maps.length; a++) {
								var rowPosition = cfg.body.marker._maps[a][cidx];
								cfg.body.marker.rows[rowPosition.r][rowPosition.c].colspan--;
							}
						}
					});
				}
			}
		}
		//marker 관련 데이터 정리 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


		//head 관련 데이터 정리
		if (cfg.head) {
			cfg.head._maps = new Array(cfg.head.rows.length);
			colMaxLen = 0;
			for (var r = 0; r < cfg.head.rows.length; r++) {
				var colLen = 0;
				axf.each(cfg.head.rows[r], function (CHidx, CH) {
					if (CH.rowspan == undefined || CH.rowspan == null) CH.rowspan = 1;
					if (CH.colspan == undefined || CH.colspan == null) {
						CH.colspan = 1;
						CH._colspan = 1;
					} else {
						if (!rewrite) CH._colspan = CH.colspan;
						else CH.colspan = CH._colspan;
					}
					if (CH.valign == undefined || CH.valign == null) CH.valign = "bottom";
					//if(CH.align == undefined || CH.align == null) CH.align = "left";
					colLen += CH.colspan.number();
				});
				if (colMaxLen < colLen) colMaxLen = colLen;
			}
			for (var _m = 0; _m < cfg.head._maps.length; _m++) { cfg.head._maps[_m] = new Array(colMaxLen); }
			// colEndPosition 관련 처리 함수
			var appendPosToHeadMap = function (r, c, posR, position) { //
				var nC = position.c; //시작 컬럼 위치
				for (var rr = posR; rr < (posR + r) ; rr++) {
					var tC = c; //컬럼 루프횟수
					var isWhile = true; // 루프유지변수
					while (isWhile) {
						try {
							if (tC == 0) {
								isWhile = false;
							} else {
								if (!cfg.head._maps[rr][nC]) {
									cfg.head._maps[rr][nC] = position;
									tC--;
								} else {
									nC++;
								}
							}
						} catch (e) {
							isWhile = false;
						}
					}
				}
			};
			for (var r = 0; r < cfg.head.rows.length; r++) {
				axf.each(cfg.head.rows[r], function (CHidx, CH) {
					if (CH.colSeq != undefined) {
						var myCG = cfg.colGroup.getToSeq(CH.colSeq);
					} else {
						var myCG = cfg.colGroup.searchObject(function () {
							return this.item.key == CH.key;
						}).first();
					}
					if (myCG != null) AXUtil.overwriteObject(CH, myCG, false);
					else AXUtil.overwriteObject(CH, { align: "left", valign: "bottom", display: true, rowspan: 1, colspan: 1 }, false);
					appendPosToHeadMap(CH.rowspan, CH.colspan, r, { r: r, c: CHidx });
				});
			}

			//colHead._maps 마지막 줄에 해당하는 cfg.colHead.rows 에 속성부여
			axf.each(cfg.head._maps.last(), function (midx, m) {
				if (m) cfg.head.rows[m.r][m.c].isLastCell = true;
			});

			if (hasHiddenCell) { // colGroup 중에 숨겨진 col 이 존재하는 경우
				// colspan 감소 시키기
				axf.each(cfg.colGroup, function (cidx, CG) {
					if (!CG.display) {
						for (var a = 0; a < cfg.head._maps.length; a++) {
							var rowPosition = cfg.head._maps[a][cidx];
							cfg.head.rows[rowPosition.r][rowPosition.c].colspan--;
						}
					}
				});
			}
		}
		//head 관련 데이터 정리 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

		//foot 관련 데이터 정리
		if (cfg.foot) {
			cfg.foot._maps = new Array(cfg.foot.rows.length);
			colMaxLen = 0;
			for (var r = 0; r < cfg.foot.rows.length; r++) {
				var colLen = 0;
				axf.each(cfg.foot.rows[r], function (CHidx, CH) {
					if (CH.rowspan == undefined || CH.rowspan == null) CH.rowspan = 1;
					if (CH.colspan == undefined || CH.colspan == null) {
						CH.colspan = 1;
						CH._colspan = 1;
					} else {
						if (!rewrite) CH._colspan = CH.colspan;
						else CH.colspan = CH._colspan;
					}
					if (CH.valign == undefined || CH.valign == null) CH.valign = "bottom";
					colLen += CH.colspan.number();
				});
				if (colMaxLen < colLen) colMaxLen = colLen;
			}
			for (var _m = 0; _m < cfg.foot._maps.length; _m++) { cfg.foot._maps[_m] = new Array(colMaxLen); }
			// colEndPosition 관련 처리 함수
			var appendPosToFootMap = function (r, c, posR, position) { //
				var nC = position.c; //시작 컬럼 위치
				for (var rr = posR; rr < (posR + r) ; rr++) {
					var tC = c; //컬럼 루프횟수
					var isWhile = true; // 루프유지변수
					while (isWhile) {
						try {
							if (tC == 0) {
								isWhile = false;
							} else {
								if (!cfg.foot._maps[rr][nC]) {
									cfg.foot._maps[rr][nC] = position;
									tC--;
								} else {
									nC++;
								}
							}
						} catch (e) {
							isWhile = false;
						}
					}
				}
			};
			for (var r = 0; r < cfg.foot.rows.length; r++) {
				axf.each(cfg.foot.rows[r], function (CHidx, CH) {
					if (CH.colSeq != undefined) {
						var myCG = cfg.colGroup.getToSeq(CH.colSeq);
					} else {
						var myCG = cfg.colGroup.searchObject(function () {
							return this.item.key == CH.key;
						}).first();
					}
					if (myCG != null) AXUtil.overwriteObject(CH, myCG, false);
					else AXUtil.overwriteObject(CH, { align: "left", valign: "bottom", display: true, rowspan: 1, colspan: 1 }, false);
					appendPosToFootMap(CH.rowspan, CH.colspan, r, { r: r, c: CHidx });
				});
			}
			//colHead._maps 마지막 줄에 해당하는 cfg.colHead.rows 에 속성부여
			axf.each(cfg.foot._maps.last(), function (midx, m) {
				if (m) cfg.foot.rows[m.r][m.c].isLastCell = true;
			});

			if (hasHiddenCell) { // colGroup 중에 숨겨진 col 이 존재하는 경우
				// colspan 감소 시키기
				axf.each(cfg.colGroup, function (cidx, CG) {
					if (!CG.display) {
						for (var a = 0; a < cfg.foot._maps.length; a++) {
							var rowPosition = cfg.foot._maps[a][cidx];
							cfg.foot.rows[rowPosition.r][rowPosition.c].colspan--;
						}
					}
				});
			}
		}
		//foot 관련 데이터 정리 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

		//editor 관련 데이터 정리
		if (cfg.editor) {
			if (cfg.editor.rows) {
				this.hasEditor = true;
				cfg.editor._maps = new Array(cfg.editor.rows.length);
				colMaxLen = 0;
				for (var r = 0; r < cfg.editor.rows.length; r++) {
					var colLen = 0;
					axf.each(cfg.editor.rows[r], function (CHidx, CH) {
						if (CH.rowspan == undefined || CH.rowspan == null) CH.rowspan = 1;
						if (CH.colspan == undefined || CH.colspan == null) {
							CH.colspan = 1;
							CH._colspan = 1;
						} else {
							if (!rewrite) CH._colspan = CH.colspan;
							else CH.colspan = CH._colspan;
						}
						if (CH.valign == undefined || CH.valign == null) CH.valign = "bottom";
						colLen += CH.colspan.number();
					});
					if (colMaxLen < colLen) colMaxLen = colLen;
				}
				for (var _m = 0; _m < cfg.editor._maps.length; _m++) { cfg.editor._maps[_m] = new Array(colMaxLen); }
				// colEndPosition 관련 처리 함수
				var appendPosToEditorMap = function (r, c, posR, position) { //
					var nC = position.c; //시작 컬럼 위치
					for (var rr = posR; rr < (posR + r) ; rr++) {
						var tC = c; //컬럼 루프횟수
						var isWhile = true; // 루프유지변수
						while (isWhile) {
							try {
								if (tC == 0) {
									isWhile = false;
								} else {
									if (!cfg.editor._maps[rr][nC]) {
										cfg.editor._maps[rr][nC] = position;
										tC--;
									} else { nC++; }
								}
							} catch (e) { isWhile = false; }
						}
					}
				};
				for (var r = 0; r < cfg.editor.rows.length; r++) {
					axf.each(cfg.editor.rows[r], function (CHidx, CH) {
						if (CH.colSeq != undefined) {
							var myCG = cfg.colGroup.getToSeq(CH.colSeq);
						} else {
							var myCG = cfg.colGroup.searchObject(function () {
								return this.item.key == CH.key;
							}).first();
						}
						if (myCG != null) AXUtil.overwriteObject(CH, myCG, false);
						else AXUtil.overwriteObject(CH, { align: "left", valign: "bottom", display: true, rowspan: 1, colspan: 1 }, false);
						appendPosToEditorMap(CH.rowspan, CH.colspan, r, { r: r, c: CHidx });
					});
				}
				//colHead._maps 마지막 줄에 해당하는 cfg.colHead.rows 에 속성부여
				axf.each(cfg.editor._maps.last(), function (midx, m) {
					if (m) cfg.editor.rows[m.r][m.c].isLastCell = true;
				});

				if (hasHiddenCell) { // colGroup 중에 숨겨진 col 이 존재하는 경우
					// colspan 감소 시키기
					axf.each(cfg.colGroup, function (cidx, CG) {
						if (!CG.display) {
							for (var a = 0; a < cfg.editor._maps.length; a++) {
								var rowPosition = cfg.editor._maps[a][cidx];
								cfg.editor.rows[rowPosition.r][rowPosition.c].colspan--;
							}
						}
					});
				}
			}
		}
		//editor 관련 데이터 정리 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

		//fixedColSeq가 설정된 경우
		if (cfg.fixedColSeq != undefined && cfg.fixedColSeq != null) {

			var fixedColSeq = this.fixedColSeq;
			axf.each(cfg.colHead._maps, function (midx, m) {
				axf.each(m, function (cidx, c) {
					if (c) {
						if ((fixedColSeq + 1) > cidx) cfg.colHead.rows[c.r][c.c].isFixedCell = true;
					}
				});
			});
			axf.each(cfg.body._maps, function (midx, m) {
				axf.each(m, function (cidx, c) {
					if (c) {
						if (fixedColSeq == cidx) cfg.body.rows[c.r][c.c].isFixedEndCell = true;
						if ((fixedColSeq + 1) > cidx) cfg.body.rows[c.r][c.c].isFixedCell = true;
					}
				});
			});
			if (cfg.head) {
				axf.each(cfg.head._maps, function (midx, m) {
					axf.each(m, function (cidx, c) {
						if (c) {
							if (fixedColSeq == cidx) cfg.head.rows[c.r][c.c].isFixedEndCell = true;
							if ((fixedColSeq + 1) > cidx) cfg.head.rows[c.r][c.c].isFixedCell = true;
						}
					});
				});
			}
			if (cfg.foot) {
				axf.each(cfg.foot._maps, function (midx, m) {
					axf.each(m, function (cidx, c) {
						if (c) {
							if (fixedColSeq == cidx) cfg.foot.rows[c.r][c.c].isFixedEndCell = true;
							if ((fixedColSeq + 1) > cidx) cfg.foot.rows[c.r][c.c].isFixedCell = true;
						}
					});
				});
			}

			if (cfg.body.marker) {
				if (cfg.body.marker.rows) {
					axf.each(cfg.body.marker._maps, function (midx, m) {
						axf.each(m, function (cidx, c) {
							if (c) {
								if (fixedColSeq == cidx) cfg.body.marker.rows[c.r][c.c].isFixedEndCell = true;
								if ((fixedColSeq + 1) > cidx) cfg.body.marker.rows[c.r][c.c].isFixedCell = true;
							}
						});
					});
				}
			}

			if (cfg.editor) {
				if (cfg.editor.rows) {
					axf.each(cfg.editor._maps, function (midx, m) {
						axf.each(m, function (cidx, c) {
							if (c) {
								if (fixedColSeq == cidx) cfg.editor.rows[c.r][c.c].isFixedEndCell = true;
								if ((fixedColSeq + 1) > cidx) cfg.editor.rows[c.r][c.c].isFixedCell = true;
							}
						});
					});
				}
			}
			this.hasFixed = true;
			if (hasHiddenCell) {
				var minusFixedCol = 0;
				var fixedColSeq = this.fixedColSeq;
				axf.each(cfg.colGroup, function (cidx, CG) {
					if (!CG.display) {
						if ((fixedColSeq + 1) > cidx) minusFixedCol++;
					}
				});
				cfg.fixedColSeq = this.fixedColSeq - minusFixedCol;
			} else {
				cfg.fixedColSeq = this.fixedColSeq;
			}

			if (cfg.fixedColSeq == -1) {
				//fixed 제거
				this.hasFixed = false;
			}

			var fixedColSeq = this.fixedColSeq;
			fixedColWidth = 0;
			axf.each(cfg.colGroup, function (cidx, CG) {
				if (CG.display && cidx < (fixedColSeq + 1)) {
					fixedColWidth += CG.width.number();
				}
			});
			this.fixedColWidth = fixedColWidth;
		}


	},
	init: function () {
		var cfg = this.config;

		if (Object.isUndefined(cfg.targetID)) {
			trace("need targetID - setConfig({targetID:''})");
			return;
		}
		if (!cfg.colGroup) {
			trace("need colGroup - setConfig({colGroup:[]})");
			return;
		}

		cfg.emptyListMSG = cfg.emptyListMSG || AXConfig.AXTree.emptyListMSG;

		var reserveKeys = {
			parentHashKey: "pHash", // 부모 트리 포지션
			hashKey: "hash", // 트리 포지션
			openKey: "open", // 확장여부
			subTree: "subTree", // 자식개체키
			displayKey: "display" // 표시여부
		};
		var relation = {
			parentKey: "pno",
			childKey: "no"
		}
		if (cfg.reserveKeys) {
			AXUtil.overwriteObject(reserveKeys, cfg.reserveKeys, true);
		} else {
			cfg.reserveKeys = reserveKeys;
		}
		if (cfg.relation) {
			AXUtil.overwriteObject(relation, cfg.relation, true);
		} else {
			cfg.relation = relation;
		}

		var targetInnerHeight = axdom("#" + cfg.targetID).innerHeight();
		if (targetInnerHeight == 0) targetInnerHeight = 400;
		this.theme = (cfg.theme) ? cfg.theme : "AXTree"; // 테마기본값 지정
		cfg.height = (cfg.height) ? cfg.height : targetInnerHeight + "px"; // 그리드 높이 지정

		this.target = axdom("#" + cfg.targetID);
		var theme = this.theme;
		var treeCss = [];

		if (cfg.width) treeCss.push("width:" + cfg.width + ";");
		if (cfg.height) treeCss.push("height:" + cfg.height + ";");

		// tree 뼈대 그리기 -----------------------------------------------------------------------------------------------------
		var ol = [];
		ol.push("<a id=\"" + cfg.targetID + "_AX_tree_focus\" href=\"#axtree\" ></a>")
		ol.push("<div class=\"" + theme + "\" id=\"" + cfg.targetID + "_AX_tree\" style=\"" + treeCss.join('') + "\">");
		ol.push("	<div class=\"AXTreeScrollBody\" id=\"" + cfg.targetID + "_AX_treeScrollBody\" style=\"z-index:2;\">");
		ol.push("		<div class=\"AXTreeColHead AXUserSelectNone\" id=\"" + cfg.targetID + "_AX_treeColHead\" onselectstart=\"return false;\"></div>");
		ol.push("		<div class=\"AXTreeBody\" id=\"" + cfg.targetID + "_AX_treeBody\"></div>");
		ol.push("		<div class=\"AXTreeEditor\" id=\"" + cfg.targetID + "_AX_treeEditor\"></div>");
		ol.push("	</div>");
		ol.push("</div>");
		this.target.html(ol.join(''));
		// tree 뼈대 그리기 -----------------------------------------------------------------------------------------------------

		// 주요 타깃 설정
		this.gridBody = axdom("#" + cfg.targetID + "_AX_tree");
		this.scrollBody = axdom("#" + cfg.targetID + "_AX_treeScrollBody");
		this.colHead = axdom("#" + cfg.targetID + "_AX_treeColHead");
		this.body = axdom("#" + cfg.targetID + "_AX_treeBody");
		this.editor = axdom("#" + cfg.targetID + "_AX_treeEditor");

		/// define part -----------------------------------------------------------------------------------------------------
		this.defineConfig(); // config object define
		/// define part -----------------------------------------------------------------------------------------------------

		if (cfg.colHead.display) {
			//colHead setting
			this.setColHead();
		} else {
			this.colHead.hide();
		}

		//body setting
		this.setBody();

		//editor setting
		this.editor.hide();

		this.treeTargetSetSize();

		/* body event bind */
		if (cfg.height != "auto") {

			var contentScrollTouchstart = this.contentScrollTouchstart.bind(this);
			this.contentScrollTouchstartBind = function (event) {
				contentScrollTouchstart(event);
			};


			var contentScrollScrollWheel = this.contentScrollScrollWheel.bind(this);
			this.contentScrollScrollWheelBind = function (event) {
				contentScrollScrollWheel(event);
			};

			var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";
			if (document.attachEvent) { //if IE (and Opera depending on user setting)
				//axf.getId(cfg.targetID+"_AX_treeBody").detachEvent("on"+mousewheelevt, this.contentScrollScrollWheelBind);
				if (axf.getId(cfg.targetID + "_AX_treeBody")) axf.getId(cfg.targetID + "_AX_treeBody").attachEvent("on" + mousewheelevt, contentScrollScrollWheel);
			} else if (document.addEventListener) { //WC3 browsers
				///axf.getId(cfg.targetID+"_AX_treeBody").removeEventListener(mousewheelevt, this.contentScrollScrollWheelBind, false);
				if (axf.getId(cfg.targetID + "_AX_treeBody")) axf.getId(cfg.targetID + "_AX_treeBody").addEventListener(mousewheelevt, contentScrollScrollWheel, false);
			}

			if (document.addEventListener) {
				//axf.getId(cfg.targetID+"_AX_treeBody").removeEventListener("touchstart", this.contentScrollTouchstartBind, false);
				if (axf.getId(cfg.targetID + "_AX_treeBody")) axf.getId(cfg.targetID + "_AX_treeBody").addEventListener("touchstart", contentScrollTouchstart, false);
			}
		}

		axdom("#" + cfg.targetID).bind("click", function(event){
			axdom("#" + cfg.targetID + "_AX_tree_focus").focus();
		});
		axdom("#" + cfg.targetID + "_AX_tree_focus").bind("keyup.axtree", this.onKeydown.bind(this));

		//TODO : 포커스인 상태인지 파악이 필요..

		if (cfg.contextMenu) {
			AXContextMenu.bind({
				id: cfg.targetID + "ContextMenu",
				theme: cfg.contextMenu.theme, // 선택항목
				width: cfg.contextMenu.width, // 선택항목
				menu: cfg.contextMenu.menu
			});
			axdom("#" + cfg.targetID).bind("contextmenu", this.onContextmenu.bind(this));
		}
		/* body event bind */
		axdom(window).bind("resize", this.windowResize.bind(this));
	},
	windowResize: function () {
		var windowResizeApply = this.windowResizeApply.bind(this);
		if (this.windowResizeObserver) clearTimeout(this.windowResizeObserver);
		this.windowResizeObserver = setTimeout(function () {
			windowResizeApply();
		}, 100);
	},
	windowResizeApply: function () {
		var cfg = this.config;

		if (cfg.mediaQuery) {
			var _viewMode = "", clientWidth = axf.clientWidth();
			axf.each(cfg.mediaQuery, function (k, v) {
				if (Object.isObject(v)) {

					if(v.min != undefined && v.max != undefined){
						if (v.min <= clientWidth && clientWidth <= v.max) {
							_viewMode = (k == "dx") ? "grid" : "mobile";
							return false;
						}
					}else{
						if (v.min <= clientWidth) {
							_viewMode = (k == "dx") ? "grid" : "mobile";
							return false;
						}
					}
				}
			});
			if (_viewMode != "") {
				cfg.viewMode = _viewMode;
			}
		}

		this.redrawGrid();
	},
	treeTargetSetSize: function (react) {
		var cfg = this.config;
		//cfg.height
		if (cfg.height == "auto") {
			this.target.css({ height: "auto", "max-height": "auto" });
			var colHeadHeight = this.colHead.outerHeight();
			var scrollBodyHeight = axdom("#" + cfg.targetID + "_AX_scrollContent").height();
			this.scrollBody.css({ height: scrollBodyHeight + colHeadHeight }); //colhead + body height
			this.body.css({ top: colHeadHeight, height: (scrollBodyHeight) }); // body Height
		} else {
			var colHeadHeight = (cfg.colHead.display) ? this.colHead.outerHeight() : 0;
			var scrollBodyHeight = cfg.height.number();
			//trace({top:colHeadHeight, scrollBodyHeight:scrollBodyHeight});
			this.scrollBody.css({ height: scrollBodyHeight }); //colhead + body height
			this.body.css({ top: colHeadHeight, height: (scrollBodyHeight - colHeadHeight) }); // body Height
		}
		if (!react) axdom(window).bind("resize", this.contentScrollResize.bind(this));
	},
	resetHeight: function () {
		var cfg = this.config;

		var targetInnerHeight = axdom("#" + cfg.targetID).innerHeight();
		if (targetInnerHeight == 0) targetInnerHeight = 400;
		cfg.height = targetInnerHeight + "px"; // 그리드 높이 지정

		this.redrawGrid("");
	},
	getColGroup: function (suffix) {
		var cfg = this.config;
		var fixedColSeq = this.fixedColSeq;
		//{colID:0, key:"no", label:"번호", width:"100", align:"left", addClassNames:"", style:"", display:true, sort:null}
		var po = [];
		po.push("<colgroup>");
		if (suffix != "FC" && suffix != "FB" && suffix != "FE") {
			axf.each(cfg.colGroup, function (cidx, CG) {
				if (CG.display) {
					if (cfg.width == "auto" || cfg.width == "*") {
						po.push("<col style=\"\" id=\"" + cfg.targetID + "_AX_col_AX_" + CG.colSeq + "_AX_" + suffix + "\" />");
					} else {
						po.push("<col width=\"" + (CG.width || "") + "\" style=\"\" id=\"" + cfg.targetID + "_AX_col_AX_" + CG.colSeq + "_AX_" + suffix + "\" />");
					}
				}
			});
			po.push("<col />");
			//if (suffix == "CB") po.push("<col />");
		} else {
			//fixedCol 존재
			axf.each(cfg.colGroup, function (cidx, CG) {
				if (CG.display && cidx < (fixedColSeq + 1)) {
					if (cfg.width == "auto" || cfg.width == "*") {
						po.push("<col style=\"\" id=\"" + cfg.targetID + "_AX_col_AX_" + CG.colSeq + "_AX_" + suffix + "\" />");
					} else {
						po.push("<col width=\"" + (CG.width || "") + "\" style=\"\" id=\"" + cfg.targetID + "_AX_col_AX_" + CG.colSeq + "_AX_" + suffix + "\" />");
					}
				}
			});
		}
		po.push("</colgroup>");
		return po.join('');
	},
	getColSeqToHead: function (r, c) {
		//trace("getColSeqToHead:"+r+","+c);
		var cfg = this.config;
		var colSeq = null;
		for (var a = cfg.colHead._maps[r].length - 1; a > -1; a--) {
			if (cfg.colHead._maps[r][a].r == r && cfg.colHead._maps[r][a].c == c) {
				colSeq = a;
				break;
			}
		}
		return colSeq;
	},
	redrawGrid: function () {
		var cfg = this.config;
		this.defineConfig(true);
		if (cfg.colHead.display) this.setColHead();
		this.setBody();

		if (cfg.head) this.printHead();
		if (cfg.foot) this.printFoot();

		this.treeTargetSetSize(true);
		this.contentScrollResize();
		//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 바디 재구성 기능 포함
	},
	checkedColSeq: function (colSeq, checked) {
		var cfg = this.config;

		this.colHead.find(".treeCheckBox_colHead_colSeq" + colSeq).each(function () {
			this.checked = checked;
		});
		axdom("#" + cfg.targetID + "_AX_fixedColHead").find(".treeCheckBox_colHead_colSeq" + colSeq).each(function () {
			this.checked = checked;
		});
		this.body.find(".treeCheckBox_body_colSeq" + colSeq).each(function () {
			this.checked = checked;
		});
	},
	getCheckedList: function (colSeq) {
		var cfg = this.config;
		var collect = [];
		var list = this.list;
		this.body.find(".treeCheckBox_body_colSeq" + colSeq).each(function () {
			if (this.checked) {
				var itemIndex = this.id.split(/_AX_/g).last();
				collect.push(list[itemIndex]);
			}
		});
		return collect;
	},
	onKeydown: function (event) {
		if (event.keyCode == 67 && event.ctrlKey) {
			//this.copyData();
		}
		//TODO 키보드 컨트롤 시작

		if(this.selectedRow.length > 0) {
			var rIndex = this.selectedRow.first().number();
			if (event.keyCode == axf.Event.KEY_UP) {
				rIndex -= 1;
				while ( this.list[rIndex] && this.list[rIndex].AXTreeSplit ) {
					rIndex -= 1;
				}
				this.setFocus( rIndex );
			}
			else if (event.keyCode == axf.Event.KEY_DOWN) {
				rIndex += 1;
				while ( this.list[rIndex] && this.list[rIndex].AXTreeSplit ) {
					rIndex += 1;
				}
				this.setFocus( rIndex );
			}
			else if (event.keyCode == axf.Event.KEY_LEFT) {
				this.expandToggleList(rIndex, this.list[rIndex]);
				this.setFocus( rIndex );
			}
			else if (event.keyCode == axf.Event.KEY_RIGHT) {
				this.expandToggleList(rIndex, this.list[rIndex]);
				this.setFocus( rIndex );
			}
		}
	},
	onBodyKeydown: function (event) {
		//this.readyMoved = true;
		//this.moveTarget = {itemIndex:itemIndex};
		if (event.keyCode == AXUtil.Event.KEY_ESC) {
			if (this.readyMoved) {
				this.cancelMove();
			}
		}
	},
	onContextmenu: function (event) {
		var cfg = this.config;

		if (this.readyMoved) return false;

		// event target search -
		if(event.target.id == "") return;
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;
		if (eventTarget.tagName.toLowerCase() == "input") return; //input 인 경우 제외
		var myTarget = this.getEventTarget({
			evt: eventTarget, evtIDs: eid,
			until: function (evt, evtIDs) { return (axdom(evt.parentNode).hasClass("gridBodyTr")) ? true : false; },
			find: function (evt, evtIDs) { return (axdom(evt).hasClass("bodyTd") || axdom(evt).hasClass("bodyNodeIndent")) ? true : false; }
		});
		// event target search ------------------------

		if (myTarget) {
			//colHeadTool ready
			var targetID = myTarget.id;
			var itemIndex = targetID.split(/_AX_/g).last();
			var ids = targetID.split(/_AX_/g);

			if (this.selectedCells.length > 0) {
				axf.each(this.selectedCells, function () {
					axdom("#" + this).removeClass("selected");
				});
				this.selectedCells.clear();
			}
			if (this.selectedRow.length > 0) {
				var body = this.body;
				axf.each(this.selectedRow, function () {
					body.find(".gridBodyTr_" + this).removeClass("selected");
				});
			}

			this.selectedRow.clear();
			this.body.find(".gridBodyTr_" + itemIndex).addClass("selected");
			this.selectedRow.push(itemIndex);

			var item = this.list[itemIndex];
			AXContextMenu.open({ id: cfg.targetID + "ContextMenu", filter: cfg.contextMenu.filter, sendObj: item }, event); // event 직접 연결 방식
		}
		return false;
	},
	copyData: function () {
		var cfg = this.config;
		var copyOut = [];
		axf.each(this.selectedCells, function (index, n) {
			var html = axdom("#" + n).find(".bodyNode").html();
			copyOut.push(html + '\t');
		});

		if (window.clipboardData) {
			window.clipboardData.setData('Text', copyOut.join(''));
			toast.push("데이터가 복사되었습니다. 원하시는 곳에 붙여넣기 하세요.");
		} else {
			dialog.push({ title: "Copy Data", body: copyOut.join(''), type: "alert" });
		}
	},
	/* 공통 영역 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	/* colHead 영역  */
	getHeadMousePosition: function (event) {
		var pos = this.colHead.offset();
		var x = (event.pageX - pos.left);
		var y = (event.pageY - pos.top);
		return { x: x, y: y };
	},
	getColHeadTd: function (arg) {
		var cfg = this.config;
		var po = [];

		if (arg.ghost) {
			po.push("<td" + arg.valign + arg.rowspan + arg.colspan + " class=\"colHeadTd" + arg.bottomClass + "\">");
			po.push("<div class=\"tdRelBlock\">");
			po.push("<div class=\"colHeadNode colHeadTdText\">&nbsp;</div>");
			po.push("</div>");
			po.push("</td>");
		} else {

			var colHeadTdText = " colHeadTdText";
			var toolUse = true;

			if (arg.formatter == "html" || arg.formatter == "checkbox" || arg.formatter == "radio") {
				colHeadTdText = " colHeadTdHtml";
				toolUse = false;
				if (arg.formatter == "checkbox") {
					colHeadTdText = " colHeadTdCheck";
					arg.tdHtml = "<input type=\"checkbox\" name=\"checkAll\" class=\"gridCheckBox gridCheckBox_colHead_colSeq" + arg.colSeq + "\" id=\"" + cfg.targetID + "_AX_checkAll_AX_" + arg.r + "_AX_" + arg.CHidx + "\" />";
				}
			}

			var sortClass = ""; if (arg.sort) sortClass = (arg.sort == "desc") ? " sortDesc" : " sortAsc";

			po.push("<td" + arg.valign + arg.rowspan + arg.colspan + " id=\"" + cfg.targetID + "_AX_colHead_AX_" + arg.r + "_AX_" + arg.CHidx + "\" class=\"colHeadTd" + arg.bottomClass + sortClass + "\">");
			po.push("<div class=\"tdRelBlock\">");
			po.push("<div class=\"colHeadNode" + colHeadTdText + "\" align=\"" + arg.align + "\" id=\"" + cfg.targetID + "_AX_colHeadText_AX_" + arg.r + "_AX_" + arg.CHidx + "\">");
			po.push(arg.tdHtml);
			po.push("</div>");
			if (toolUse && arg.colSeq != null && arg.colSeq != undefined) po.push("<a href=\"#AXexec\" class=\"colHeadTool\" id=\"" + cfg.targetID + "_AX_colHeadTool_AX_" + arg.r + "_AX_" + arg.CHidx + "\">T</a>");
			po.push("<div class=\"colHeadResizer\" id=\"" + cfg.targetID + "_AX_colHeadResizer_AX_" + arg.r + "_AX_" + arg.CHidx + "\"></div>");
			po.push("</div>");
			po.push("</td>");

			if (arg.sort) {
				var myColHead = cfg.colHead.rows[arg.r][arg.CHidx];
				var tdID = cfg.targetID + "_AX_colHead_AX_" + arg.r + "_AX_" + arg.CHidx;

				this.nowSortHeadID = tdID;
				this.nowSortHeadObj = myColHead;
			}

		}
		return po.join('');
	},
	setColHead: function () {
		var cfg = this.config;
		var po = [];

		//trace("fixedCol : " +  cfg.fixedColSeq);

		var getColHeadTd = this.getColHeadTd.bind(this);
		if (!this.hasFixed) {  ////////////////////////////////////////////////////////////////////////////////////////////// 일반 colHead 구현

			po.push("<table cellpadding=\"0\" cellspacing=\"0\" class=\"colHeadTable\" style=\"width:" + this.colWidth + "px;\">");
			po.push(this.getColGroup("CH")); //colGroup 삽입
			po.push("<tbody>");
			for (var r = 0; r < cfg.colHead.rows.length; r++) {
				var isLastTR = (cfg.colHead.rows.length - 1 == r);
				po.push("<tr>");
				axf.each(cfg.colHead.rows[r], function (CHidx, CH) {
					if (CH.display && CH.colspan > 0) {
						//radio, check exception
						var tdHtml = CH.label || "untitle";
						var rowspan = (CH.rowspan > 1) ? " rowspan=\"" + CH.rowspan + "\"" : "";
						var colspan = (CH.colspan > 1) ? " colspan=\"" + CH.colspan + "\"" : "";
						var valign = " valign=\"" + CH.valign + "\"";
						var bottomClass = (CH.isLastCell) ? "" : " colHeadBottomBorder";

						po.push(getColHeadTd({
							valign: valign, rowspan: rowspan, colspan: colspan, bottomClass: bottomClass, r: r, CHidx: CHidx,
							align: CH.align, colSeq: CH.colSeq, formatter: CH.formatter, sort: CH.sort, tdHtml: tdHtml,
							ghost: false
						}));
					}
				});
				po.push("</tr>");
			}
			po.push("</tbody>");
			po.push("</table>");

		} else { ////////////////////////////////////////////////////////////////////////////////////////////// fixedCol 구현

			po.push("<table cellpadding=\"0\" cellspacing=\"0\" class=\"colHeadTable\" style=\"width:" + this.colWidth + "px;\">");
			po.push(this.getColGroup("CH")); //colGroup 삽입
			po.push("<tbody>");
			for (var r = 0; r < cfg.colHead.rows.length; r++) {
				var isLastTR = (cfg.colHead.rows.length - 1 == r);
				po.push("<tr>");
				var colCount = 0;
				axf.each(cfg.colHead.rows[r], function (CHidx, CH) {
					if (CH.display && CH.colspan > 0) {
						//radio, check exception
						var tdHtml = CH.label || "untitle";
						var rowspan = (CH.rowspan > 1) ? " rowspan=\"" + CH.rowspan + "\"" : "";
						var colspan = (CH.colspan > 1) ? " colspan=\"" + CH.colspan + "\"" : "";
						var valign = " valign=\"" + CH.valign + "\"";
						var bottomClass = (CH.isLastCell) ? "" : " colHeadBottomBorder";

						po.push(getColHeadTd({
							valign: valign, rowspan: rowspan, colspan: colspan, bottomClass: bottomClass, r: r, CHidx: CHidx,
							align: CH.align, colSeq: CH.colSeq, formatter: CH.formatter, sort: CH.sort, tdHtml: tdHtml,
							ghost: (colCount < (cfg.fixedColSeq + 1))
						}));

						colCount += CH.colspan;
					}
				});
				po.push("</tr>");
			}
			po.push("</tbody>");
			po.push("</table>");

			var fpo = [];
			fpo.push("<div class=\"AXGridColHead fixedColHead\" id=\"" + cfg.targetID + "_AX_fixedColHead\" style=\"width:" + this.fixedColWidth + "px;\">");
			fpo.push("<table cellpadding=\"0\" cellspacing=\"0\" class=\"colHeadTable\" style=\"width:" + this.fixedColWidth + "px;\">");
			fpo.push(this.getColGroup("FC")); //colGroup 삽입
			fpo.push("<tbody>");
			for (var r = 0; r < cfg.colHead.rows.length; r++) {
				var isLastTR = (cfg.colHead.rows.length - 1 == r);
				fpo.push("<tr>");
				var colCount = 0;
				axf.each(cfg.colHead.rows[r], function (CHidx, CH) {
					if (CH.display && CH.isFixedCell && CH.colspan > 0) {
						//trace({CHidx:CHidx, fixedColSeq:(cfg.fixedColSeq+1)});
						//radio, check exception
						var tdHtml = CH.label || "untitle";
						var rowspan = (CH.rowspan > 1) ? " rowspan=\"" + CH.rowspan + "\"" : "";
						var colspan = (CH.colspan > 1) ? " colspan=\"" + CH.colspan + "\"" : "";
						var valign = " valign=\"" + CH.valign + "\"";
						var bottomClass = (CH.isLastCell) ? "" : " colHeadBottomBorder";

						fpo.push(getColHeadTd({
							valign: valign, rowspan: rowspan, colspan: colspan, bottomClass: bottomClass, r: r, CHidx: CHidx,
							align: CH.align, colSeq: CH.colSeq, formatter: CH.formatter, sort: CH.sort, tdHtml: tdHtml,
							ghost: false
						}));
					}
					colCount += CH.colspan;
				});
				fpo.push("</tr>");
			}
			fpo.push("</tbody>");
			fpo.push("</table>");
			fpo.push("</div>");
		}
		////////////////////////////////////////////////////////////////////////////////////////////// fixedCol 구현

		this.colHead.html(po.join(''));
		axdom("#" + cfg.targetID + "_AX_fixedColHead").remove();
		if (fpo) this.colHead.after(fpo.join(''));

		//resizer 를 찾아 resizer의 부모와 같은 높이값을 가지도록 변경 합니다.
		//또 그와 관련된 개체의 높이와 패딩을 지정합니다.
		this.colHead.find(".colHeadResizer").each(function () {
			var resizerID = this.id;
			var tdID = resizerID.replace("colHeadResizer", "colHead");
			var txtID = resizerID.replace("colHeadResizer", "colHeadText");
			var toolID = resizerID.replace("colHeadResizer", "colHeadTool");
			var rowspan = axdom("#" + tdID).attr("rowspan");
			var valign = axdom("#" + tdID).attr("valign");
			if (!rowspan) rowspan = 1;
			var tdHeight = axdom("#" + tdID).height();
			axdom(this).css({ height: tdHeight });
			axdom(this).parent().css({ height: tdHeight });
			if (rowspan > 1) {
				var cellMarginTop = 0;
				if (valign == "bottom") cellMarginTop = (tdHeight - axdom("#" + txtID).outerHeight()) + 5;
				if (valign == "middle") cellMarginTop = (tdHeight - axdom("#" + txtID).outerHeight()) / 2 + 5;
				axdom("#" + txtID).css({ "padding-top": cellMarginTop + "px" });
				axdom("#" + toolID).css({ "top": (cellMarginTop - 5) + "px" });
			}
		});

		this.colHead.bind("mouseover", this.colHeadMouseOver.bind(this));
		this.colHead.bind("mouseout", this.colHeadMouseOut.bind(this));
		this.colHead.find(".colHeadNode").bind("click", this.colHeadNodeClick.bind(this));
		this.colHead.find(".colHeadTool").bind("click", this.colHeadToolClick.bind(this));
		this.colHead.find(".colHeadResizer").bind("mousedown", this.colHeadResizerMouseDown.bind(this));
		this.colHead.find(".gridCheckBox").bind("click", this.colHeadCheckBoxClick.bind(this));

		if (this.hasFixed) { //fixedColHead에 대한 바인딩 및 처리
			this.fixedColHead = axdom("#" + cfg.targetID + "_AX_fixedColHead");

			this.fixedColHead.find(".colHeadResizer").each(function () {
				var resizerID = this.id;
				var tdID = resizerID.replace("colHeadResizer", "colHead");
				var txtID = resizerID.replace("colHeadResizer", "colHeadText");
				var toolID = resizerID.replace("colHeadResizer", "colHeadTool");
				var rowspan = axdom("#" + tdID).attr("rowspan");
				var valign = axdom("#" + tdID).attr("valign");
				if (!rowspan) rowspan = 1;
				var tdHeight = axdom("#" + tdID).height();
				axdom(this).css({ height: tdHeight });
				axdom(this).parent().css({ height: tdHeight });
				if (rowspan > 1) {
					var cellMarginTop = 0;
					if (valign == "bottom") cellMarginTop = (tdHeight - axdom("#" + txtID).outerHeight()) + 5;
					if (valign == "middle") cellMarginTop = (tdHeight - axdom("#" + txtID).outerHeight()) / 2 + 5;
					axdom("#" + txtID).css({ "padding-top": cellMarginTop + "px" });
					axdom("#" + toolID).css({ "top": (cellMarginTop - 5) + "px" });
				}
			});

			this.fixedColHead.bind("mouseover", this.colHeadMouseOver.bind(this));
			this.fixedColHead.bind("mouseout", this.colHeadMouseOut.bind(this));
			this.fixedColHead.find(".colHeadNode").bind("click", this.colHeadNodeClick.bind(this));
			this.fixedColHead.find(".colHeadTool").bind("click", this.colHeadToolClick.bind(this));
			this.fixedColHead.find(".colHeadResizer").bind("mousedown", this.colHeadResizerMouseDown.bind(this));
			this.fixedColHead.find(".gridCheckBox").bind("click", this.colHeadCheckBoxClick.bind(this));
		}
	},
	/* colHead events */
	colHeadMouseOver: function (event) {
		var cfg = this.config;
		// event target search -
		if(event.target.id == "") return;
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;
		var myTarget = this.getEventTarget({
			evt: eventTarget, evtIDs: eid,
			until: function (evt, evtIDs) { return (axdom(evt.parentNode).hasClass("AXGridColHead")) ? true : false; },
			find: function (evt, evtIDs) { return (axdom(evt).hasClass("colHeadTd")) ? true : false; }
		});
		// event target search ------------------------

		if (myTarget) {
			//colHeadTool ready
			var targetID = myTarget.id;
			var toolID = targetID.replace("colHead", "colHeadTool");
			axdom("#" + toolID).addClass("readyTool");
		}
	},
	colHeadMouseOut: function (event) {
		var cfg = this.config;
		// event target search -
		if(event.target.id == "") return;
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;
		var myTarget = this.getEventTarget({
			evt: eventTarget, evtIDs: eid,
			until: function (evt, evtIDs) { return (axdom(evt.parentNode).hasClass("AXGridColHead")) ? true : false; },
			find: function (evt, evtIDs) { return (axdom(evt).hasClass("colHeadTd")) ? true : false; }
		});
		// event target search ------------------------

		if (myTarget) {
			//colHeadTool unready
			var targetID = myTarget.id;
			var toolID = targetID.replace("colHead", "colHeadTool");
			axdom("#" + toolID).removeClass("readyTool");
		}
	},
	colHeadResizerMouseDown: function (event) {
		var cfg = this.config;
		if(event.target.id == "") return;
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;
		var lastIdx = eid.length - 1;
		var colHeadR = eid[lastIdx - 1];
		var colHeadC = eid[lastIdx];
		var colSeq = this.getColSeqToHead(colHeadR, colHeadC);
		if (colSeq == null) return; // 예상할 수 없는 오류
		//resize 상태 해제
		if (this.colResizing) {
			this.colHeadResizerEnd();
		}
		var offset = axdom("#" + cfg.targetID + "_AX_colHead_AX_" + colHeadR + "_AX_" + colHeadC).find(".tdRelBlock").position();
		var relBlockWidth = axdom("#" + cfg.targetID + "_AX_colHead_AX_" + colHeadR + "_AX_" + colHeadC).find(".tdRelBlock").width();
		var rightPosition = offset.left.number() + relBlockWidth.number();
		var blockWidth = axdom("#" + cfg.targetID + "_AX_col_AX_" + colSeq + "_AX_CH").attr("width");
		this.colResizeTarget = { colSeq: colSeq, leftPosition: (rightPosition - blockWidth), blockWidth: blockWidth, newWidth: blockWidth };
		//trace(this.colResizeTarget);

		/* resize event bind */
		var colHeadResizerMouseMove = this.colHeadResizerMouseMove.bind(this);
		this.colHeadResizerMouseMoveBind = function (event) {
			colHeadResizerMouseMove(event);
		}
		var colHeadResizerMouseUp = this.colHeadResizerMouseUp.bind(this);
		this.colHeadResizerMouseUpBind = function (event) {
			colHeadResizerMouseUp(event);
		}
		axdom(document.body).bind("mousemove.AXTree", this.colHeadResizerMouseMoveBind);
		axdom(document.body).bind("mouseup.AXTree", this.colHeadResizerMouseUpBind);
		axdom(document.body).bind("mouseleave.AXTree", this.colHeadResizerMouseUpBind);
		axdom("iframe").bind("mouseover.AXTree", this.colHeadResizerMouseUpBind);

		axdom(document.body).attr("onselectstart", "return false");
		axdom(document.body).addClass("AXUserSelectNone");
		/* resize event bind ~~~~~~~~~~~~~~~~~~~ */
	},
	colHeadResizerMouseMove: function (event) {
		if (!event.pageX) return;
		//드래그 감도 적용
		if (this.config.moveSens > this.moveSens) this.moveSens++;
		if (this.moveSens == this.config.moveSens) this.colHeadResizerMove(event);
	},
	colHeadResizerMove: function (event) {
		var cfg = this.config;
		var mouse = this.getHeadMousePosition(event);
		var newWidth = (this.colResizeTarget.leftPosition - mouse.x).abs();
		if (newWidth < 31) return;
		/* colHead/colBody colGroup width 조정 */
		axdom("#" + cfg.targetID + "_AX_col_AX_" + this.colResizeTarget.colSeq + "_AX_CH").attr("width", newWidth);
		axdom("#" + cfg.targetID + "_AX_col_AX_" + this.colResizeTarget.colSeq + "_AX_CB").attr("width", newWidth);
		axdom("#" + cfg.targetID + "_AX_col_AX_" + this.colResizeTarget.colSeq + "_AX_EB").attr("width", newWidth);

		cfg.colGroup[this.colResizeTarget.colSeq].width = newWidth;

		if (this.hasFixed) {
			var fixedColSeq = this.fixedColSeq;

			axdom("#" + cfg.targetID + "_AX_col_AX_" + this.colResizeTarget.colSeq + "_AX_FC").attr("width", newWidth);
			axdom("#" + cfg.targetID + "_AX_col_AX_" + this.colResizeTarget.colSeq + "_AX_FB").attr("width", newWidth);
			axdom("#" + cfg.targetID + "_AX_col_AX_" + this.colResizeTarget.colSeq + "_AX_FE").attr("width", newWidth);

			//if(this.colResizeTarget.colSeq < fixedColSeq+1){

			var fixedColWidth = 0;
			axf.each(cfg.colGroup, function (cidx, CG) {
				if (CG.display && cidx < (fixedColSeq + 1)) {
					fixedColWidth += CG.width.number();
				}
			});
			this.fixedColWidth = fixedColWidth;

			axdom("#" + cfg.targetID + "_AX_fixedColHead").css({ width: fixedColWidth });
			axdom("#" + cfg.targetID + "_AX_fixedColHead").find(".colHeadTable").css({ width: fixedColWidth });
			axdom("#" + cfg.targetID + "_AX_fixedScrollContent").css({ width: fixedColWidth });
			axdom("#" + cfg.targetID + "_AX_fixedScrollContent").find(".gridFixedBodyTable").css({ width: fixedColWidth });
			axdom("#" + cfg.targetID + "_AX_fixedEditorContent").css({ width: fixedColWidth });
			axdom("#" + cfg.targetID + "_AX_fixedEditorContent").find(".gridFixedBodyTable").css({ width: fixedColWidth });
			//}

		}

		if (this.editorOpend) {
			var colSeq = this.colResizeTarget.colSeq;
			//
			for (var _m = 0; _m < cfg.editor._maps.length; _m++) {
				var rc = cfg.editor._maps[_m][colSeq];
				var CH = cfg.editor.rows[rc.r][rc.c];
				var formID = (CH.form.id) ? CH.form.id : cfg.targetID + "_AX_" + CH.key + "_AX_" + rc.r + "_AX_" + rc.c;
				//trace(formID);
				if (axf.getId(formID)) if (axf.getId(formID).tagName == "INPUT") AXInput.alignAnchor(formID);
			}
		}


		/* colHead colGroup width 조정 ------------------------------ */
		this.colResizeTarget.newWidth = newWidth;
		var newColWidth = this.colWidth - (this.colResizeTarget.blockWidth - this.colResizeTarget.newWidth);
		this.colHead.find(".colHeadTable").css({ "width": newColWidth + "px" });
		//this.body.find(".gridBodyTable").css({"width":newColWidth+"px"});
	},
	colHeadResizerMouseUp: function (event) {
		if (this.colResizeTarget.blockWidth != this.colResizeTarget.newWidth) {
			this.colWidth = this.colWidth - (this.colResizeTarget.blockWidth - this.colResizeTarget.newWidth);
		}
		this.colHeadResizerEnd();
		this.contentScrollResize(false);
	},
	colHeadResizerEnd: function () {
		this.moveSens = 0;
		this.colResizing = false;
		axdom(document.body).unbind("mousemove.AXTree");
		axdom(document.body).unbind("mouseup.AXTree");
		axdom(document.body).unbind("mouseleave.AXTree");
		axdom("iframe").unbind("mouseover.AXTree");

		axdom(document.body).removeAttr("onselectstart");
		axdom(document.body).removeClass("AXUserSelectNone");
	},
	colHeadNodeClick: function (event) {
		var cfg = this.config;
		if(event.target.id == "") return;
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;

		if (this.editorOpend) {
			toast.push("Editor 활성화 상태에서는 기능을 사용할 수 없습니다.");
			return; // 에디터가 오픈된 상태이면 비활성화
		}

		if (axdom(eventTarget).hasClass("colHeadTdCheck")) {
			this.colHeadCheckBoxClick(event);
			return; // checkbox block click
		}
		if (axdom(eventTarget).hasClass("gridCheckBox")) return; // checkbox click

		var lastIdx = eid.length - 1;
		var colHeadR = eid[lastIdx - 1];
		var colHeadC = eid[lastIdx];
		var myColHead = cfg.colHead.rows[colHeadR][colHeadC];
		var tdID = cfg.targetID + "_AX_colHead_AX_" + colHeadR + "_AX_" + colHeadC;
		//trace(myColHead);

		if (myColHead.colSeq == undefined || myColHead.colSeq == null) {
			trace("정렬할 수 없는 컬럼 입니다.");
		} else {
			/* -- 현재 기술로는 정렬 지원 어려움
			 if(this.nowSortHeadID){
			 if(this.nowSortHeadID != tdID){
			 axdom("#"+this.nowSortHeadID).removeClass("sortDesc");
			 axdom("#"+this.nowSortHeadID).removeClass("sortAsc");
			 this.nowSortHeadObj.sort = undefined;
			 }
			 }
			 //trace(myColHead);
			 if(cfg.colHead.rows[colHeadR][colHeadC].sort == "desc") axdom("#"+tdID).removeClass("sortDesc");
			 else axdom("#"+tdID).removeClass("sortAsc");

			 var nsort = "";
			 if(myColHead.sort == "desc") nsort = "asc";
			 else nsort = "desc";
			 cfg.colHead.rows[colHeadR][colHeadC].sort = nsort;

			 //sort 처리하기
			 if(nsort == "desc"){
			 axdom("#"+tdID).addClass("sortDesc");
			 }else{
			 axdom("#"+tdID).addClass("sortAsc");
			 }

			 this.list = this.sortList(nsort, myColHead, this.list);
			 this.printList();

			 this.nowSortHeadID = tdID;
			 this.nowSortHeadObj = myColHead;
			 */
		}

		if (cfg.colHead.onclick) { // onclick bind
			var sendObj = {
				index: null,
				r: colHeadR,
				c: colHeadC,
				list: this.list,
				colHead: myColHead,
				page: this.page
			}
			cfg.colHead.onclick.call(sendObj);
		}

	},
	colHeadToolClick: function (event) {
		var cfg = this.config;
		if(event.target.id == "") return;
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;

		if (this.editorOpend) {
			toast.push("Editor 활성화 상태에서는 기능을 사용할 수 없습니다.");
			return; // 에디터가 오픈된 상태이면 비활성화
		}

		var lastIdx = eid.length - 1;
		var colHeadR = eid[lastIdx - 1];
		var colHeadC = eid[lastIdx];
		var myColHead = cfg.colHead.rows[colHeadR][colHeadC];
		//toast.push("클릭된 colGroup seq : " + myColHead.colSeq);

		axdom("#" + cfg.targetID + "_AX_colHeadMenu").remove();

		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_colHeadMenu\" class=\"AXTreeColGroupListBox\">");
		axf.each(cfg.colGroup, function (cidx, CG) {
			var addClass = (CG.display) ? " on" : "";
			var lastClass = (cidx == cfg.colGroup.length - 1) ? " last" : "";
			po.push("<a href=\"#AXexec\" class=\"AXTreeColGroupListBoxItem" + addClass + lastClass + "\" id=\"" + cfg.targetID + "_AX_colHeadMenu_AX_" + CG.colSeq + "\">");
			po.push(CG.label);
			po.push("</a>");
		});
		po.push("</div>");
		axdom(document.body).append(po.join(''));

		var offset = axdom(eventTarget).offset();
		var css = {};
		css.top = offset.top - 5;
		css.left = offset.left - 20;
		axdom("#" + cfg.targetID + "_AX_colHeadMenu").css(css);

		/* colGroup click event bind */
		var colGroupListClick = this.colGroupListClick.bind(this);
		this.colGroupListClickBind = function (event) {
			colGroupListClick(event);
		}
		axdom(document).bind("click", this.colGroupListClickBind);
		axdom(document).bind("keydown", this.colGroupListClickBind);
		/* colGroup click bind ~~~~~~~~~~~~~~~~~~~ */
	},
	colGroupListClick: function (event) {
		var cfg = this.config;

		if (event.keyCode == AXUtil.Event.KEY_ESC) {
			axdom("#" + cfg.targetID + "_AX_colHeadMenu").remove();
			axdom(document).unbind("keydown", this.colGroupListClickBind);
			axdom(document).unbind("click", this.colGroupListClickBind);
			return;
		}

		// event target search -
		if(event.target.id == "") return;
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;
		var myTarget = this.getEventTarget({
			evt: eventTarget, evtIDs: eid,
			find: function (evt, evtIDs) { return (axdom(evt).hasClass("AXTreeColGroupListBoxItem") || axdom(evt).hasClass("colHeadTool")) ? true : false; }
		});
		// event target search ------------------------

		if (myTarget) {
			if (axdom(myTarget).hasClass("colHeadTool")) return;
			//colHeadTool ready
			var targetID = myTarget.id;
			var colSeq = targetID.split(/_AX_/g).last();
			//trace(cfg.colGroup[colSeq]);
			if (cfg.colGroup[colSeq].display) {
				cfg.colGroup[colSeq].display = false;
				axdom("#" + targetID).removeClass("on");
			} else {
				cfg.colGroup[colSeq].display = true;
				axdom("#" + targetID).addClass("on");
			}
			//redraw grid
			this.redrawGrid();
		} else {
			axdom("#" + cfg.targetID + "_AX_colHeadMenu").remove();
			axdom(document).unbind("keydown", this.colGroupListClickBind);
			axdom(document).unbind("click", this.colGroupListClickBind);
		}
	},
	colHeadCheckBoxClick: function (event) {
		var cfg = this.config;
		if(event.target.id == "") return;
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;

		if (axdom(eventTarget).hasClass("colHeadTdCheck")) {
			eventTarget = axdom(eventTarget).find("input").get(0);
			eventTarget.checked = !eventTarget.checked;
		}
		var lastIdx = eid.length - 1;
		var colHeadR = eid[lastIdx - 1];
		var colHeadC = eid[lastIdx];
		var myColHead = cfg.colHead.rows[colHeadR][colHeadC];

		this.checkedColSeq(myColHead.colSeq, eventTarget.checked);
	},
	/* colHead events ~~~~~~~~~~~~~~~~~*/
	/* colHead 영역  ~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

	/* body */
	sortList: function (nsort, myColHead, list) {
		var cfg = this.config;

		var getValueForSort = function (item, itemIndex) {
			if (myColHead.formatter) {
				var result;
				if (myColHead.formatter == "money") {
					result = item[myColHead.key];
				} else if (myColHead.formatter == "dec") {
					result = item[myColHead.key].dec();
				} else if (myColHead.formatter == "html") {
					result = item[myColHead.key];
				} else if (myColHead.formatter == "checkbox") {
					result = item[myColHead.key];
				} else {
					var sendObj = {
						index: itemIndex,
						list: list,
						item: item,
						page: this.page
					}
					result = myColHead.formatter.call(sendObj);
					//result 값이 money 형식인지 체크 합니다.
					var moneyCheck = result.replace(/,/g, "");
					if (axdom.isNumeric(moneyCheck)) result = result.number();
				}
				return result;
			} else {
				return item[myColHead.key];
			}
		};

		if (nsort == "desc") {
			var listIndex = 0;
			list = list.sort(function (prevItem, nowItem) {
				if (prevItem[cfg.reserveKeys.hashKey].length == nowItem[cfg.reserveKeys.hashKey].length) {
					var v1 = getValueForSort(prevItem, listIndex);
					var v2 = getValueForSort(nowItem, listIndex);
					listIndex++;
					if (v1 < v2) return 1;
					else if (v1 > v2) return -1;
					else if (v1 == v2) return 0;
				} else {
					return 0;
				}
			});
		} else {
			var listIndex = 0;
			list = list.sort(function (prevItem, nowItem) {
				if (prevItem[cfg.reserveKeys.hashKey].length == nowItem[cfg.reserveKeys.hashKey].length) {
					var v1 = getValueForSort(prevItem, listIndex);
					var v2 = getValueForSort(nowItem, listIndex);
					listIndex++;
					if (v1 < v2) return -1;
					else if (v1 > v2) return 1;
					else if (v1 == v2) return 0;
				} else {
					return 0;
				}
			});
		}

		return list;
	},
	setBody: function (list) {
		var cfg = this.config;
		if (list) {
			this.list = list;
		}

		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_scrollContent\" class=\"treeScrollContent\">");
		po.push("<table cellpadding=\"0\" cellspacing=\"0\" class=\"treeBodyTable\" style=\"\">");
		po.push(this.getColGroup("CB")); //colGroup 삽입
		po.push("<thead id=\"" + cfg.targetID + "_AX_thead\"></thead>");
		po.push("<tbody id=\"" + cfg.targetID + "_AX_tbody\">");
		po.push("<tr class=\"noListTr\">");
		po.push("<td colspan=\"" + (this.showColLen) + "\">");
		po.push("<div class=\"tdRelBlock\">");
		po.push("<div class=\"bodyNode bodyTdText\" align=\"center\">");
		po.push(cfg.emptyListMSG);
		po.push("</div>");
		po.push("</div>");
		po.push("</td>");
		po.push("<td class=\"bodyNullTd\"><div class=\"tdRelBlock\">&nbsp;</div></td>");
		po.push("</tr>");
		po.push("</tbody>");
		po.push("<tfoot id=\"" + cfg.targetID + "_AX_tfoot\"></tfoot>");
		po.push("</table>");
		po.push("</div>");
		if (this.hasFixed) {
			po.push("<div id=\"" + cfg.targetID + "_AX_fixedScrollContent\" class=\"treeFixedScrollContent\" style=\"width:" + this.fixedColWidth + "px;\">");
			po.push("<table cellpadding=\"0\" cellspacing=\"0\" class=\"treeFixedBodyTable\" style=\"width:" + this.fixedColWidth + "px;\">");
			po.push(this.getColGroup("FB")); //colGroup 삽입
			po.push("<thead id=\"" + cfg.targetID + "_AX_fixedThead\"></thead>");
			po.push("<tbody id=\"" + cfg.targetID + "_AX_fixedTbody\">");
			po.push("<tr class=\"noListTr\">");
			po.push("<td colspan=\"" + (this.showColLen) + "\">");
			po.push("</td>");
			po.push("</tr>");
			po.push("</tbody>");
			po.push("<tfoot id=\"" + cfg.targetID + "_AX_fixedTfoot\"></tfoot>");
			po.push("</table>");
			po.push("</div>");
		}
		//po.push("<div id=\"" + cfg.targetID + "_AX_scrollTrackXY\" class=\"treeScrollTrackXY\"></div>");
		po.push("<div id=\"" + cfg.targetID + "_AX_scrollTrackY\" class=\"treeScrollTrackY\"><div id=\"" + cfg.targetID + "_AX_scrollYHandle\" class=\"treeScrollHandle\"></div></div>");
		po.push("<div id=\"" + cfg.targetID + "_AX_scrollTrackX\" class=\"treeScrollTrackX\"><div id=\"" + cfg.targetID + "_AX_scrollXHandle\" class=\"treeScrollHandle\"></div></div>");
		po.push("<div style=\"display:none;\">");
		po.push("<div id=\"" + cfg.targetID + "_AX_Selector\" class=\"AXtreeSelector\"></div>");
		po.push("</div>");
		this.body.html(po.join(''));

		if (this.list.length > 0) {
			this.setList(this.list, false);
		}

		// scroll event bind
		axdom("#" + cfg.targetID + "_AX_scrollYHandle").bind("mousedown", this.contentScrollScrollReady.bind(this));
		axdom("#" + cfg.targetID + "_AX_scrollXHandle").bind("mousedown", this.contentScrollScrollReady.bind(this));
		// scroll event bind ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	},
	listLoadingDisplay: function () {
		var cfg = this.config;
		var po = [];
		po.push("<tr class=\"noListTr\">");
		po.push("<td colspan=\"" + (this.showColLen) + "\">");
		po.push("<div class=\"tdRelBlock\">");
		po.push("<div class=\"bodyNode bodyTdText\" align=\"center\">");
		po.push("	<div class=\"AXLoading\"></div>");
		po.push("</div>");
		po.push("</div>");
		po.push("</td>");
		po.push("<td class=\"bodyNullTd\"><div class=\"tdRelBlock\">&nbsp;</div></td>");
		po.push("</tr>");
		axdom("#" + cfg.targetID + "_AX_tbody").html(po.join(''));

		po = [];
		po.push("<tr class=\"noListTr\">");
		po.push("<td colspan=\"" + (this.showColLen) + "\">");
		po.push("</td>");
		po.push("</tr>");
		axdom("#" + cfg.targetID + "_AX_fixedTbody").html(po.join(''));
	},
	getAXTreeSplit: function(isFix){
		var cfg = this.config;
		var po = [];
		if(isFix == "n"){
			po.push("<tr class=\"AXTreeSplit\">");
			po.push("<td colspan=\"" + (this.showColLen) + "\">");
			po.push("</td>");
			po.push("<td class=\"bodyNullTd\"><div class=\"tdRelBlock\">&nbsp;</div></td>");
			po.push("</tr>");
		}else{
			po.push("<tr class=\"AXTreeSplit\">");
			po.push("<td colspan=\"" + (this.showColLen) + "\">");
			po.push("</td>");
			po.push("</tr>");
		}
		return po.join('');
	},
	setList: function (obj, positioning) {
		var cfg = this.config;
		var nowSortHeadID = this.nowSortHeadID;
		var nowSortHeadObj = this.nowSortHeadObj;

		this.listLoadingDisplay();

		axdom("#" + cfg.targetID + "_AX_scrollContent").css({ width: "auto" });

		if (obj.ajaxUrl) {
			this.ajaxInfo = obj;
			this.ajax_sortDisable = positioning;
			var sortDisable = positioning;
			this.pageActive = true;

			var url = obj.ajaxUrl;
			var appendPars = [
					"pageNo=" + this.page.pageNo,
					"pageSize=" + this.page.pageSize
			];
			var pars = (obj.ajaxPars) ? obj.ajaxPars + "&" + appendPars.join('&') : appendPars.join('&');

			var _method = "post";
			var _contentType = AXConfig.AXReq.contentType;
			var _headers = {};
			var _responseType = AXConfig.AXReq.responseType;
			var _dataType = AXConfig.AXReq.dataType;

			if (obj.method) _method = obj.method;
			if (obj.contentType) _contentType = obj.contentType;
			if (obj.headers) _headers = obj.headers;

			var ajaxGetList = this.ajaxGetList.bind(this);
			new AXReq(url, {
				type: _method,
				contentType: _contentType,
				responseType: _responseType,
				dataType: _dataType,
				headers: _headers,
				debug: obj.debug,
				pars: pars,
				debug: false, pars: pars, onsucc: function (res) {
					if (res.result == AXConfig.AXReq.okCode) {
						res._sortDisable = sortDisable;
						if (obj.response) {
							obj.response.call(res);
						} else {
							ajaxGetList(res, positioning);
						}
						if (obj.onLoad) obj.onLoad.call(res);
					} else {
						AXUtil.alert(res);
					}
				}
			});

		} else {

			this.ajaxInfo = null;
			if (axdom.isArray(obj)) {
				if (obj.length == 0) {

					/*
					 var po = [];
					 po.push("<div class=\"bodyNode bodyTdText\" align=\"center\">");
					 po.push("목록이 없습니다.");
					 po.push("</div>");
					 axdom("#" + cfg.targetID + "_AX_tbody").html(po.join(''));
					 */
					//return;
				}

				if (positioning == undefined) {
					try{
						this.list = this.positioningHashList(obj);
						this.list = this.list.sort(function (prevItem, nowItem) {
							var v1 = prevItem[cfg.reserveKeys.hashKey];
							var v2 = nowItem[cfg.reserveKeys.hashKey];
							if (v1 < v2) return -1;
							else if (v1 > v2) return 1;
							else if (v1 == v2) return 0;
						});
					}catch(e){
						trace(e);
					}
				} else {
					this.list = obj;
				}

				this.printList();
				this.pageActive = false;
			}
		}
	},
	reloadList: function () {
		var cfg = this.config;
		var nowSortHeadID = this.nowSortHeadID;
		var nowSortHeadObj = this.nowSortHeadObj;

		if (this.ajaxInfo) {
			var obj = this.ajaxInfo;
			var sortDisable = this.ajax_sortDisable;
			this.pageActive = true;

			this.listLoadingDisplay();

			var url = obj.ajaxUrl;
			var appendPars = [
					"pageNo=" + this.page.pageNo,
					"pageSize=" + this.page.pageSize
			];
			var pars = (obj.ajaxPars) ? obj.ajaxPars + "&" + appendPars.join('&') : appendPars.join('&');

			var ajaxGetList = this.ajaxGetList.bind(this);
			new AXReq(url, {
				debug: false, pars: pars, onsucc: function (res) {
					if (res.result == AXConfig.AXReq.okCode) {
						res._sortDisable = sortDisable;
						if (obj.response) {
							obj.response.call(res);
						} else {
							ajaxGetList(res);
						}
					} else {
						AXUtil.alert(res);
					}
				}
			});

		}
	},
	ajaxGetList: function (res, positioning) {
		var cfg = this.config;
		var nowSortHeadID = this.nowSortHeadID;
		var nowSortHeadObj = this.nowSortHeadObj;

		if (res._sortDisable || !cfg.sort) {
			this.list = res[AXConfig.AXTree.keyList];
		} else {
			if (nowSortHeadID) {
				this.list = this.sortList(nowSortHeadObj.sort, nowSortHeadObj, res[AXConfig.AXTree.keyList]);
			} else {
				this.list = res[AXConfig.AXTree.keyList];
			}
		}
		//trace(this.list);
		if (positioning == undefined) {
			this.list = this.positioningHashList(this.list);
		} else {
			//this.list = obj;
		}

		//AXUtil.overwriteObject(this.page, res.page, true);
		this.printList();
	},
	getFormatterValue: function (formatter, item, itemIndex, value, key, CH) {
		var cfg = this.config;
		var result;
		if (formatter == "money") {
			if (value == "" || value == "null") {
				result = "";
			} else {
				result = value.number().money();
			}
		} else if (formatter == "dec") {
			result = value.dec();
		} else if (formatter == "html") {
			result = value;
		} else if (formatter == "checkbox") {
			var checked = "";
			var disabled = "";
			var sendObj = {
				index: itemIndex,
				list: this.list,
				item: item
			}
			if (CH.checked) {
				var callCheckedResult = CH.checked.call(sendObj);
				if (callCheckedResult) {
					checked = " checked=\"checked\" ";
					this.list[itemIndex].__checked = true;
				} else {
					this.list[itemIndex].__checked = false;
				}
			}
			if (CH.disabled) {
				var callDisabledResult = CH.disabled.call(sendObj);
				if (callDisabledResult) {
					disabled = " disabled=\"disabled\" ";
				}
			}
			result = "<input type=\"checkbox\" name=\"" + CH.label + "\" class=\"treeCheckBox_body treeCheckBox_body_colSeq" + CH.colSeq + "\" id=\"" + cfg.targetID + "_AX_checkboxItem_AX_" + CH.colSeq + "_AX_" + itemIndex + "\" value=\"" + value + "\" " + checked + disabled + " />";
		} else {
			var sendObj = {
				index: itemIndex,
				list: this.list,
				item: item,
				page: this.page
			};
			result = formatter.call(sendObj);
		}
		return result;
	},
	getIconClassValue: function (getIconClass, item, itemIndex, value, key, CH) {
		var cfg = this.config;
		var iconClass;
		var sendObj = {
			index: itemIndex,
			list: this.list,
			item: item,
			page: this.page
		}
		iconClass = getIconClass.call(sendObj, itemIndex, item);
		return iconClass;
	},
	getTooltipValue: function (formatter, item, itemIndex, value, key, CH) {
		var cfg = this.config;
		var result;
		if (formatter == "money") {
			if (value == "" || value == "null") {
				result = "";
			} else {
				result = value.number().money();
			}
		} else if (formatter == "dec") {
			result = value.dec();
		} else if (formatter == "html") {
			result = value;
		} else if (formatter == "checkbox") {
			var checked = "";
			var disabled = "";

			var sendObj = {
				index: itemIndex,
				list: this.list,
				item: item
			}

			if (CH.checked) {
				var callCheckedResult = CH.checked.call(sendObj);
				if (callCheckedResult) {
					checked = " checked=\"checked\" ";
				}
			}

			if (CH.disabled) {
				var callDisabledResult = CH.disabled.call(sendObj);
				if (callDisabledResult) {
					disabled = " disable=\"disable\" ";
				}
			}
			result = "<input type=\"checkbox\" name=\"" + CH.label + "\" class=\"treeCheckBox_body_colSeq" + CH.colSeq + "\" id=\"" + cfg.targetID + "_AX_checkboxItem_AX_" + itemIndex + "\" value=\"" + value + "\" " + checked + disabled + " />";
		} else {
			var sendObj = {
				index: itemIndex,
				list: this.list,
				item: item,
				page: this.page
			}
			result = formatter.call(sendObj);
		}
		return result;
	},
	getItem: function (itemIndex, item, isfix, hasTr) {
		var cfg = this.config;
		var reserveKeys = cfg.reserveKeys;
		var tpo = [];
		var evenClassName = "line" + (itemIndex % 2);
		var hashClassName = "parentHash" + item[cfg.reserveKeys.parentHashKey];

		var getFormatterValue = this.getFormatterValue.bind(this);
		var getTooltipValue = this.getTooltipValue.bind(this);
		var getIconClassValue = this.getIconClassValue.bind(this);
		var hasFixed = this.hasFixed;
		var hasTrValue = (hasTr == undefined) ? true : false;
		var trAddClass = "";
		if (cfg.body.addClass) {
			try {
				trAddClass = cfg.body.addClass.call({
					index: itemIndex,
					item: item,
					list: this.list
				});
			} catch (e) {
				trace(e);
			}
		}
		var trStyles = [];
		var isDisplay = item[reserveKeys.displayKey];
		if (!isDisplay) trStyles.push("display:none;");

		var _tree = this.tree;

		for (var r = 0; r < cfg.body.rows.length; r++) {
			var isLastTR = (cfg.body.rows.length - 1 == r);
			if (hasTrValue) tpo.push("<tr class=\"gridBodyTr gridBodyTr_" + itemIndex + " " + evenClassName + " " + hashClassName + " " + trAddClass + "\" id=\"" + cfg.targetID + "_AX_tr_" + r + "_AX_" + (isfix || "n") + "_AX_" + itemIndex + "\" style=\"" + trStyles.join('') + "\">");
			var colCount = 0;
			axf.each(cfg.body.rows[r], function (CHidx, CH) {
				if (CH.display && CH.colspan > 0) {

					if (isfix == "n" || (isfix != undefined && colCount < (cfg.fixedColSeq + 1))) {

						colCount += CH.colspan;

						//radio, check exception
						var rowspan = (CH.rowspan > 1) ? " rowspan=\"" + CH.rowspan + "\"" : "";
						var colspan = (CH.colspan > 1) ? " colspan=\"" + CH.colspan + "\"" : "";
						var valign = " valign=\"" + CH.valign + "\" style=\"vertical-align:" + CH.valign + ";\"";
						var bottomClass = (CH.isLastCell) ? "" : " bodyBottomBorder";
						var fixedClass = (CH.isFixedEndCell) ? " fixedLine" : "";
						var bodyNodeStyles = [];
						var indentWidth = 0;
						var iconWidth = 0;
						if (CH.indent) {
							var hash = item[cfg.reserveKeys.hashKey];
							var re = new RegExp(cfg.hashSpliter, "g");
							indentWidth = ((hash.split(re).length - 1) * cfg.indentWidth) + 3;

							if (indentWidth > (cfg.indentWidth.number() + 3)) {
								indentWidth = indentWidth * cfg.indentRatio;
							}

							if (CH.getIconClass) {
								iconWidth = cfg.iconWidth;
							}
							if (CH.align == "left") {
								bodyNodeStyles.push("padding-left:" + (indentWidth + iconWidth) + "px;");
							} else {
								bodyNodeStyles.push("padding-right:" + (indentWidth + iconWidth) + "px;text-align:right;");
							}
						}
						/*trace({r:r, CHidx:CHifixedColSeq:cfg.fixedColSeq, colCount:colCount});*/

						var bodyNodeClass = "";
						if (CH.formatter == "checkbox") bodyNodeClass = " bodyTdCheckBox";
						else if (CH.formatter == "html") bodyNodeClass = " bodyTdHtml";

						var expandNodeClass = "";
						if (item[cfg.reserveKeys.openKey]) expandNodeClass = " expand";

						var iconClass = "";
						var tooltipValue = "";
						if (CH.tooltip) {
							tooltipValue = getTooltipValue(CH.tooltip, item, itemIndex, item[CH.key], CH.key, CH);
						}
						tpo.push("<td" + valign + rowspan + colspan + " id=\"" + cfg.targetID + "_AX_" + (isfix || "n") + "body_AX_" + r + "_AX_" + CHidx + "_AX_" + itemIndex + "\" class=\"bodyTd" + bottomClass + fixedClass + "\">");
						tpo.push("<div class=\"tdRelBlock\" title=\"" + tooltipValue + "\">");
						tpo.push("<div class=\"bodyNode bodyTdText" + bodyNodeClass + "\" style=\"" + bodyNodeStyles.join(";") + "\" align=\"" + CH.align + "\" id=\"" + cfg.targetID + "_AX_bodyText_AX_" + r + "_AX_" + CHidx + "_AX_" + itemIndex + "\">");

						if (CH.indent) {

							/*CH.align : left*/
							/*indentWidth : left position;*/
							if(cfg.showConnectionLine){
								/* line 표시 박스 구현	*/
								tpo.push("<span class=\"connectionLineContainer\">");
								var hashPosition = item[cfg.reserveKeys.hashKey].split(/_/g);
								for(var hp=2;hp<hashPosition.length;hp++){
									var hpLeft = ((hp - 2) * cfg.indentWidth) + 3;

									var hpIndentWidth = cfg.indentWidth * cfg.indentRatio;
									var connectionLineClass = [];
									var subTreeStr = "";
									if(hp < (hashPosition.length-1)){
										for (var i = 1; i < hp+1; i++) {
											if (i == 1) {
												subTreeStr += "[" + hashPosition[i].number() + "]";
											} else {
												subTreeStr += "[reserveKeys.subTree][" + hashPosition[i].number() + "]";
											}
										}
										var parentTree = null;
										try{
											eval("parentTree = _tree" + subTreeStr);
											if(parentTree.__isLastChild){
												connectionLineClass.push("isParentOutside");
											}else{
												connectionLineClass.push("isParentInside");
											}
										}catch(e){
											trace(e);
										}
									}else if(item.__isLastChild && hp == (hashPosition.length-1)){
										connectionLineClass.push("isLastChild");
									}
									tpo.push("<span class=\"connectionLine " + connectionLineClass.join(" ") + "\" style=\"" + CH.align + ":"+hpLeft+"px;width:" + hpIndentWidth + "px;\"></span>");
								}
								tpo.push("</span>");

								if (item.__subTreeLength == 0){
									expandNodeClass += " noChild";
								}

								tpo.push("<a class=\"bodyNodeIndent" + expandNodeClass + "\" id=\"" + cfg.targetID + "_AX_bodyNodeIndent_AX_" + r + "_AX_" + CHidx + "_AX_" + itemIndex + "\" style=\"" + CH.align + ":" + (indentWidth - 20) + "px;");
								//if (item.__subTreeLength == 0) tpo.push("display:none;");
								tpo.push("\"></a>");
							}else{
								tpo.push("<a class=\"bodyNodeIndent" + expandNodeClass + "\" id=\"" + cfg.targetID + "_AX_bodyNodeIndent_AX_" + r + "_AX_" + CHidx + "_AX_" + itemIndex + "\" style=\"" + CH.align + ":" + (indentWidth - 20) + "px;");
								if (item.__subTreeLength == 0) tpo.push("display:none;");
								tpo.push("\"></a>");
							}
						}
						if (CH.getIconClass) {
							iconClass = getIconClassValue(CH.getIconClass, item, itemIndex, item[CH.key], CH.key, CH);
							if(Object.isString(iconClass)){
								tpo.push("<a class=\"bodyNodeIcon " + iconClass + "\" id=\"" + cfg.targetID + "_AX_bodyNodeIcon_AX_" + r + "_AX_" + CHidx + "_AX_" + itemIndex + "\" style=\"" + CH.align + ":" + (indentWidth) + "px;\"></a>");
							}else{
								tpo.push("<a class=\"bodyNodeIcon " + iconClass.addClass + "\" id=\"" + cfg.targetID + "_AX_bodyNodeIcon_AX_" + r + "_AX_" + CHidx + "_AX_" + itemIndex + "\" style=\"" + CH.align + ":" + (indentWidth) + "px;\">"+ iconClass.html +"</a>");
							}
						}

						if ((hasFixed && !CH.isFixedCell) || !hasFixed || isfix != undefined) {
							if (CH.formatter) {
								tpo.push(getFormatterValue(CH.formatter, item, itemIndex, item[CH.key], CH.key, CH));
							} else {
								tpo.push(item[CH.key]);
							}
						} else {
							tpo.push("&nbsp;");
						}

						tpo.push("</div>");
						tpo.push("</div>");
						tpo.push("</td>");
					}
				}
			});
			if (r == 0 && isfix == "n") {
				tpo.push("<td class=\"bodyNullTd\" id=\"" + cfg.targetID + "_AX_null_AX_" + itemIndex + "\" rowspan=\"" + cfg.body.rows.length + "\"><div class=\"tdRelBlock\" id=\"" + cfg.targetID + "_AX_tdRelBlock_AX_" + itemIndex + "\">&nbsp;</div></td>");
			}
			if (hasTrValue) tpo.push("</tr>");
		}
		return tpo.join('');
	},
	getItemMarker: function (itemIndex, item, isfix) {
		var cfg = this.config;
		var tpo = [];
		var evenClassName = "gridBodyMarker";
		var getFormatterValue = this.getFormatterValue.bind(this);
		var hasFixed = this.hasFixed;

		for (var r = 0; r < cfg.body.marker.rows.length; r++) {
			var isLastTR = (cfg.body.marker.rows.length - 1 == r);
			tpo.push("<tr class=\"gridBodyTr gridBodyMarkerTr_" + itemIndex + " " + evenClassName + "\" id=\"" + cfg.targetID + "_AX_marker_" + r + "_AX_" + (isfix || "n") + "_AX_" + itemIndex + "\">");
			var colCount = 0;
			axf.each(cfg.body.marker.rows[r], function (CHidx, CH) {
				if (CH.display && CH.colspan > 0) {

					if (isfix == "n" || (isfix != undefined && colCount < (cfg.fixedColSeq + 1))) {

						colCount += CH.colspan;

						//radio, check exception
						var rowspan = (CH.rowspan > 1) ? " rowspan=\"" + CH.rowspan + "\"" : "";
						var colspan = (CH.colspan > 1) ? " colspan=\"" + CH.colspan + "\"" : "";
						var valign = " valign=\"" + CH.valign + "\" style=\"vertical-align:" + CH.valign + ";\"";
						var bottomClass = (CH.isLastCell) ? "" : " bodyBottomBorder";
						var fixedClass = (CH.isFixedEndCell) ? " fixedLine" : "";

						//trace({r:r, CHidx:CHifixedColSeq:cfg.fixedColSeq, colCount:colCount});

						var bodyNodeClass = "";
						if (CH.formatter == "checkbox") bodyNodeClass = " bodyTdCheckBox";
						else if (CH.formatter == "html") bodyNodeClass = " bodyTdHtml";

						tpo.push("<td" + valign + rowspan + colspan + " id=\"" + cfg.targetID + "_AX_" + (isfix || "n") + "bodyMarker_AX_" + r + "_AX_" + CHidx + "_AX_" + itemIndex + "\" class=\"bodyTd" + bottomClass + fixedClass + "\">");
						tpo.push("<div class=\"tdRelBlock\">");
						tpo.push("<div class=\"bodyNode bodyTdText" + bodyNodeClass + "\" align=\"" + CH.align + "\" id=\"" + cfg.targetID + "_AX_bodyMarkerText_AX_" + r + "_AX_" + CHidx + "_AX_" + itemIndex + "\">");
						if ((hasFixed && !CH.isFixedCell) || !hasFixed || isfix != undefined) {
							if (CH.formatter) {
								tpo.push(getFormatterValue(CH.formatter, item, itemIndex, item[CH.key], CH.key, CH));
							} else {
								tpo.push(item[CH.key]);
							}
						} else {
							tpo.push("&nbsp;");
						}
						tpo.push("</div>");
						tpo.push("</div>");
						tpo.push("</td>");
					}
				}
			});
			if (r == 0 && isfix == "n") {
				tpo.push("<td class=\"bodyNullTd\" id=\"" + cfg.targetID + "_AX_nullMarker_AX_" + itemIndex + "\" rowspan=\"" + cfg.body.rows.length + "\"><div class=\"tdRelBlock\" id=\"" + cfg.targetID + "_AX_tdRelBlockMarker_AX_" + itemIndex + "\">&nbsp;</div></td>");
			}
			tpo.push("</tr>");
		}
		return tpo.join('');
	},
	getMarkerDisplay: function (itemIndex, item) {
		var cfg = this.config;
		var bodyHasMarker = this.bodyHasMarker;

		if (!bodyHasMarker) return false;
		var sendObj = {
			index: itemIndex,
			list: this.list,
			item: item,
			page: this.page
		}
		var markerDisplay = cfg.body.marker.display.call(sendObj);
		return markerDisplay;
	},
	printList: function () {
		var cfg = this.config;
		var reserveKeys = cfg.reserveKeys;
		var bodyHasMarker = this.bodyHasMarker;
		var getItem = this.getItem.bind(this);
		var getItemMarker = this.getItemMarker.bind(this);
		var getMarkerDisplay = this.getMarkerDisplay.bind(this);

		this.gridBodyOverBind = this.gridBodyOver.bind(this);
		this.gridBodyOutBind = this.gridBodyOut.bind(this);
		this.gridBodyClickBind = this.gridBodyClick.bind(this);
		this.gridBodyDBLClickBind = this.gridBodyDBLClick.bind(this);

		var getAXTreeSplit = this.getAXTreeSplit.bind(this);

		var po = [];
		axf.each(this.list, function (itemIndex, item) {
			if (!item.isRoot && !item._isDel) {
				if(item.AXTreeSplit){
					po.push(getAXTreeSplit("n"));
				}else{
					po.push(getItem(itemIndex, item, "n"));
					if (bodyHasMarker && getMarkerDisplay(itemIndex, item)) {
						po.push(getItemMarker(itemIndex, item, "n"));
					}
				}
			}
		});
		axdom("#" + cfg.targetID + "_AX_tbody").empty();
		axdom("#" + cfg.targetID + "_AX_tbody").append(po.join(''));

		if (this.hasFixed) {
			po = [];
			axf.each(this.list, function (itemIndex, item) {
				if (!item.isRoot && item[cfg.reserveKeys.displayKey] && !item._isDel) {
					if(item.AXTreeSplit){
						po.push(getAXTreeSplit("fix"));
					}else{
						po.push(getItem(itemIndex, item, "fix"));
						if (bodyHasMarker && getMarkerDisplay(itemIndex, item)) {
							po.push(getItemMarker(itemIndex, item, "fix"));
						}
					}
				}
			});
			axdom("#" + cfg.targetID + "_AX_fixedTbody").empty();
			axdom("#" + cfg.targetID + "_AX_fixedTbody").append(po.join(''));
		}

		this.selectedCells.clear(); // selectedCells clear

		//trace(this.list);
		//trace(this.tree);

		var _tree = this.tree;
		var list_pointer = {};
		axf.each(this.list, function (lidx, L) {
			list_pointer[L.hash] = lidx;
		});
		//trace(list_pointer);

		var _list = this.list;
		axf.each(this.list, function (lidx, L) {
			if(L.__checked){
				var hashs = L.hash.split(/_/g);
				hashs.shift();
				//trace(hashs);
				for (var l = hashs.length - 1; l > -1; l--) {
					//trace(l);
					var subTreeStr = "";
					var checkHash = [];

					for (var i = 0; i < l + 1; i++) {
						checkHash.push(hashs[i]);
						if (i == 0) {
							subTreeStr += "[" + hashs[i].number() + "]";
						} else {
							subTreeStr += "[reserveKeys.subTree][" + hashs[i].number() + "]";
						}
					}
					//trace(checkHash);
					//trace(checkHash.join("_"));
					//trace(subTreeStr);
					var myTree = null;
					try{
						eval("myTree = _tree" + subTreeStr);
					}catch(e){

					}

					if(myTree != null){
						myTree.__checked = true;
						var findHash = "0".setDigit(cfg.hashDigit)+"_"+checkHash.join("_");
						//trace(findHash);
						if(list_pointer[findHash] != undefined){
							_list[list_pointer[findHash]].__checked = true;
						}
					}

				};
			}
		});

		/**
		 * AXGrid
		 * @class AXGrid
		 * @extends AXJ
		 * @version v1.97
		 * @author tom@axisj.com
		 * @logs
		 "2012-12-24 오전 11:51:26",
		 "2013-01-08 오전 10:53:46 50% 진행중 - tom",
		 "2013-01-22 오후 10:20:01 99% 완료 - tom",
		 "2013-02-11 오후 12:21:55 editor value function 구문 적용 - tom",
		 "2013-02-15 오후 7:04:03 list length 가 1일때 setEditor 버그 수정 - tom",
		 "2013-02-16 오후 1:12:17 휠 스크롤 제어 예외 처리 - tom",
		 "2013-02-16 오후 10:37:55 reloadList 추가 - tom",
		 "2013-04-08 오후 9:48:53 getCheckedListWithIndex 추가 - tom",
		 "2013-05-09 오후 1:56:53 setFocus 추가 - tom",
		 "2013-06-17 오후 12:52:04 setFocus 스크롤 자동이동 기능 보강 /  focusMove 추가 - tom ",
		 "2013-06-21 오전 10:34:04 fitToWidth 속성 추가 & marker bugfix - tom",
		 "2013-06-25 오후 5:23:29 getSelectedItem 추가 / 버그픽스 - tom",
		 "2013-06-28 오전 11:32:33 wheel 버그픽스 - tom",
		 "2013-07-04 오후 1:12:34 tooltip 속성 추가 - tom",
		 "2013-07-17 오후 4:27:34 페이지 변경시 서버 2중 호출 버그 픽스",
		 "2013-07-21 오후 10:15:09 wheel 버그픽스 - tom",
		 "2013-07-24 오전 10:17:05 page 선언안함 버그픽스 - tom",
		 "2013-09-04 오후 2:49:54 AXConfig에서 설정값 바인딩 구조로 변경 처리 - tom",
		 "2013-09-23 오후 4:07:58 printList에서 리스트가 없을때 this.redrawGrid() 호출 추가 - root",
		 "2013-09-24 오전 12:49:34 setList 선언전에 append 안되는 문제와 목록없음 표시 처리 문제 보강 / body > onscrollend 함수 지원 - tom",
		 "2013-09-29 오전 12:41:29 colGroup width:'*' 옵션추가 / colHeadAlign 우선순위 조정 - tom",
		 "2013-09-30 오전 1:40:22 colMap 함수정리 - tom",
		 "2013-10-18 오전 8:30:50 dblclick 이벤트 개선 / click(index) 메서드 추가 - tom",
		 "2013-10-23 오후 2:48:24 formatter radio 지원 - tom",
		 "2013-10-24 오후 10:01:27 colGroup formatter - displayLabel:true 옵션추가 - tom",
		 "2013-10-28 오전 9:37:26 page count 버그 픽스 / $ 키워드 제거 - tom",
		 "2013-11-13 오전 10:09:14 tom : fitToWidth 창 최대화 최소화 버그 픽스",
		 "2013-11-18 오후 1:34:35 tom : grid owidth 버그 픽스",
		 "2013-12-09 오후 4:26:45 tom : setList 후 그리드 스크롤포지션 문제 해결",
		 "2013-12-11 오후 9:31:45 tom : ajax setList 그리드 스크롤포지션 문제 해결",
		 "2013-12-19 오후 3:30 tom : height=auto 일 경우 scrollTop 되는 현상 해결",
		 "2013-12-24 오후 2:30:25 tom : 버그픽스",
		 "2013-12-27 오전 11:56:44 tom marker bugfix",
		 "2013-12-30 오후 11:00:00 tom : colGroup sort:false 기능 추가 및 버그 픽스",
		 "2014-01-01 오후 8:55:17 tom : editor validate 액션버그 픽스",
		 "2014-01-03 오후 3:31:09 tom : gridBodyClick 이벤트함수 수정",
		 "2014-01-10 오후 5:08:30 tom : listCountMSG 설정 기능 추가",
		 "2014-02-04 오전 10:13:38 tom : setList 메소드 호출 할 때 pageNo : 1 로 변경 기능 추가",
		 "2014-02-06 오후 7:59:54 tom : jQuery 독립 우회 코드 변경",
		 "2014-02-12 오전 11:31:41 tom : 불필요한 node 제거, * 설정시 헤드 너비 오차 문제 해결",
		 "2014-02-14 오전 11:10:45 tom : setEditor 후 selector 키컨트롤 이벤트 방지, editor 안에 onkeyup 메소드 추가",
		 "2014-02-14 오후 12:42:32 tom : appendList메소드 index를 지정 하지 않으면 맨 마지막으로 추가 되도록 변경",
		 "2014-02-25 오전 11:24:29 tom : formatter 함수 this에 .value, .key 속성 추가",
		 "2014-03-05 오후 12:17:26 tom : editor.response 에서 validate 후 editor 사라지도록 기능 변경, editorForm Item 중복되지 않도록 수정",
		 "2014-03-05 오후 5:13:45 tom : 열 리사이즈했을 때 스크롤 위치 버그픽스",
		 "2014-03-06 오후 8:22:00 tom : 열 리사이즈 후 컬럼 숨기기 표시 하시 액션 너비 변경 버그픽스",
		 "2014-03-12 오후 3:04:11 root : 그리드 헤드 체크 박스 클릭시 disable 된 row 는 체크 하지않도록 변경",
		 "2014-03-20 오전 11:16:51 tom : printList 실행 할 때 editor 활성화 되었으면 에디터 비 활성화",
		 "2014-03-28 오전 8:18:54 tom : click 메소드 호출시 callBack 버그 픽스",
		 "2014-03-31 오전 2:07:24 tom : init 에서 printList 호출 제거 / body.marker.addClass 속성 추가",
		 "2014-03-31 오후 4:14:34 tom : scroll 영역 조정 ",
		 "2014-04-01 오후 7:10:34 tom : .each for 로 변경/ changeGridView 메소드 추가",
		 "2014-04-20 tom : listLoadingDisplay 실행할 때 가능하면 스크롤바의 위치를 맨위로 이동 시키기",
		 "2014-04-22 tom : setList 호출시 onError 속성 추가",
		 "2014-04-25 tom : setData 메소드 추가",
		 "2014-04-28 tom : mobile 에서 터치무브 버그 픽스",
		 "2014-04-28 tom : config.emptyListMSG 에서 설정가능",
		 "2014-04-29 tom : AXConfig.AXGrid.pageCountMsg 설정기능 추가",
		 "2014-05-14 tom : 스크롤 바의 위치 이동 방식 개선 pixel 에서 percent 로 연산방식 변경",
		 "2014-05-15 tom : 대용량 데이터 출력 지원",
		 "2014-05-16 tom : 대용량 데이터 출력 지원에 따른 printList 출력방식 변경에 따른 구조변경/ setStatus 리사이즈후 문구 픽스",
		 "2014-05-17 tom : 대용량 데이터 처리 후 모바일 터치 버그 픽스",
		 "2014-05-18 tom : 스크롤바 마우스 클릭이동 액션 핸들이동 완료후 컨텐츠 이동 하도록 변경",
		 "2014-05-18 tom : 세로축 스크롤바 이동시 위치 정보 표시 추가",
		 "2014-05-19 tom : list empty bug fix",
		 "2014-05-20 tom : grid body click 후 virtualScroll 포지션 이상 작동 문제 해결"
		 "2014-05-22 tom : bigData 지원 후 checkedColSeq 버그픽스",
		 "2014-05-25 tom : resetHeight 메소드 추가",
		 "2014-05-26 tom : [add] method:fetchList",
		 "2014-05-27 tom : ajax 옵션 추가 확장 지원 "
		 "2014-05-29 tom : focus 된 상태에서 스크롤 안되는 버그 픽스"
		 "2014-05-29 tom : setList 된 상태에서 다음번 setList 데이터가 없을 때 스크롤 사이즈 버그 픽스"
		 "2014-06-02 tom : change ajax data protocol check result or error key in data"
		 "2014-06-09 tom : setFocus method bugFix "
		 "2014-06-15 tom : [fix] the sorting initialisation issue while running the method:redrawGrid was fixed"
		 "2014-06-17 tom : [fix] incorrect scrollHeight size issue while running the method:changeView was fixed"
		 "2014-06-20 tom : [fix] checked function not working "
		 "2014-06-23 tom : [fix] Not remember checked items "
		 "2014-06-30 tom : [improve] add margin to content height "
		 "2014-07-05 tom : add "event body.onchangeScroll"
		 "2014-07-07 tom : [fix] checked function update "
		 "2014-07-07 tom : [fix] not send value key when run sort "
		 "2014-07-08 tom : [fix] adjust height when set height:'auto'"
		 "2014-07-10 tom : [fix] AJAX without result key error"
		 "2014-07-11 tom : [fix] checked error when change mobile view"
		 "2014-07-15 tom : [improve] add config mergeCells "
		 "2014-07-17 tom : [fix] editor top position bug"
		 "2014-07-31 tom : [fix] formatter validate function"
		 "2014-08-01 tom : [fix] issue#238"
		 "2014-08-01 tom : [fix] issue#242 sync fixedTrHeight with trHeight, colGroup have checked then user checked not saved, 'method setFocus' fixed "
		 "2014-08-04 tom : [improve] add options colGroup formatterLabel"
		 "2014-08-04 tom : [fix] editorButtonPosition default value 'bottom'"
		 "2014-08-13 tom : [fix] setList({}, "sortDisable") 설정 후 페이지 체인지될 때 sortDisable 유지토록 수정"
		 * @description
		 * axisj grid
		 * @example
		 ```js
		 var myGrid = new AXGrid();
		 myGrid.setConfig(classConfig:JSObject);
		 ```
		 *
		 */

		var AXGrid = Class.create(AXJ, {
			initialize: function (AXJ_super) {
				AXJ_super();
				this.Observer = null;
				this.list = [];
				this.removedList = [];
				this.pageActive = false;
				this.page = { pageNo: 0, pageSize: 100, pageCount: "", listCount: 0 };

				this.moveSens = 0;
				this.config.viewMode = "grid"; // icon, mobile
				this.config.moveSens = 1;
				this.config.formPaddingRight = "11px";
				this.config.sort = true;
				this.config.xscroll = true;
				this.config.fitToWidth = (AXConfig.AXGrid.fitToWidth || false);
				this.config.fitToWidthRightMargin = (AXConfig.AXGrid.fitToWidthRightMargin || 10);
				this.config.passiveMode = AXConfig.AXGrid.passiveMode;
				this.config.passiveRemoveHide = AXConfig.AXGrid.passiveRemoveHide;
				this.config.scrollContentBottomMargin = "10";
				//TODO mergeCells 기능구현
				this.config.mergeCells = false; // cells merge option
				this.selectedCells = [];
				this.selectedRow = [];

				this.isMobile = AXUtil.browser.mobile;
				this.cachedDom = {};
				this.virtualScroll = {
					startIndex : 0,
					endIndex : 0,
					itemTrHeight: 0,
					printListCount: 0,
					scrollTop: 0
				};
			},
			/* 공통 영역 */
			defineConfig: function (rewrite) {
				var cfg = this.config;
				if (cfg.colGroup.length == 0) {
					trace("colGrpup is empty)");
					return;
				}

				/* col너비 합계 구하기 */
				var colWidth = 0;
				var hasHiddenCell = false;
				var showColLen = 0;
				if (!rewrite) this.fixedColSeq = cfg.fixedColSeq;
				var bodyWidth = this.body.width();
				var astricCount = 0;

				for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
					if (CG.colSeq == undefined) CG.colSeq = cidx;
					if (CG.display == undefined) CG.display = true;
					if (CG.display) {
						if (!rewrite) {
							if (CG.width == "*") {
								CG.width = 0;
								CG.widthAstric = true;
								astricCount++;
							}
							CG._owidth = CG.width;
							/* 최초의 너비값 기억 하기 */
						} else {
							if (CG.widthAstric) {
								CG.width = 0;
								CG._owidth = CG.width;
								astricCount++;
							}
						}

						colWidth += (CG._owidth || 0).number();
						showColLen += 1;
					} else {
						hasHiddenCell = true;
					}
				}

				if (!cfg.fitToWidth) {
					/* width * 예외처리 구문 ------------ s */
					if ((bodyWidth - cfg.fitToWidthRightMargin) > (colWidth + 100 * astricCount)) {
						var remainsWidth = (bodyWidth - cfg.fitToWidthRightMargin) - colWidth;
						for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
							if (CG.display && CG.widthAstric) {
								CG._owidth = (remainsWidth / astricCount).ceil();
								CG.width = CG._owidth;
								colWidth += (CG._owidth || 0).number();
							}
						}
					} else {
						for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
							if (CG.display && CG.widthAstric) {
								CG._owidth = 100;
								CG.width = 100;
								colWidth += (CG._owidth || 0).number();
							}
						}
					}
					/* width * 예외처리 구문 ------------ e */
				} else {
					for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
						if (CG.display && CG.widthAstric) {
							CG.width = 100;
							CG._owidth = 100;
							colWidth += (CG._owidth || 0).number();
						}
					}
				}
				this.colWidth = colWidth;

				if (cfg.fitToWidth) { /*너비 자동 맞춤버전의 경우 */
					if (bodyWidth > this.colWidth) {
						var _bodyWidth = bodyWidth - cfg.fitToWidthRightMargin;
						var zoomRatio = bodyWidth / this.colWidth;
						colWidth = 0;
						for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
							CG.width = (CG._owidth * zoomRatio).ceil();
							if (_bodyWidth > CG.width) _bodyWidth -= CG.width;
							else CG.width = _bodyWidth;
							if (CG.display) colWidth += CG.width.number();
						}
						this.colWidth = colWidth;
					} else {
						colWidth = 0;
						for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
							if (CG._owidth == undefined) CG._owidth = (CG.width || 0).number();
							CG.width = CG._owidth.number();
							if (CG.display) colWidth += CG.width.number();
						}
						this.colWidth = colWidth;
					}
				}

				this.showColLen = showColLen;
				/* col너비 합계 구하기 ~~~~~~~~~~~~~~ 구해진 너비합은 그리드 head, body 의 너비로 지정됨. */

				if(rewrite && cfg.colHead.rows) cfg._colHead_rows = axf.copyObject(cfg.colHead.rows);

				if (!cfg.colHead) cfg.colHead = {};
				if (!cfg.body) cfg.body = {};
				if (!cfg.page) cfg.page = { display: false, paging: false, status: { formatter: null } };
				if (cfg.colHead.rowsEmpty) cfg.colHead.rows = undefined;
				if (cfg.body.rowsEmpty) cfg.body.rows = undefined;

				/* colHead rows ----------------------------------------------------------------------------------------------------- */
				if (cfg.colHead.rows) {
					/* colHeadRow 정해진 경우 */
					cfg.colHead._maps = new Array(cfg.colHead.rows.length);
					var colMaxLen = 0;
					for (var r = 0; r < cfg.colHead.rows.length; r++) {
						var colLen = 0;
						for (var CH, CHidx = 0, __arr = cfg.colHead.rows[r]; (CHidx < __arr.length && (CH = __arr[CHidx])); CHidx++) {
							if (CH.rowspan == undefined || CH.rowspan == null) CH.rowspan = 1;
							if (CH.colspan == undefined || CH.colspan == null) {
								CH.colspan = 1;
								CH._colspan = 1;
							} else {
								if (!rewrite) {
									CH._colspan = CH.colspan;
								} else {
									CH.colspan = CH._colspan;
								}
							}
							if (CH.valign == undefined || CH.valign == null) CH.valign = "bottom";
							if (cfg.colHeadAlign) CH.align = "center";
							colLen += (CH.colspan||0).number();
						}
						if (colMaxLen < colLen) colMaxLen = colLen;
					}
					for (var _m = 0; _m < cfg.colHead._maps.length; _m++) {
						cfg.colHead._maps[_m] = new Array(colMaxLen);
					}
					/* colEndPosition 관련 처리 함수 */
					var appendPosToColHeadMap = function (r, c, posR, position) {
						var nC = position.c;
						/*시작 컬럼 위치 */
						var startPosition = null;
						for (var rr = posR; rr < (posR + r); rr++) {
							if (r > 1) if (rr > 0 && startPosition != null) nC = startPosition;
							var tC = c;
							/*컬럼 루프횟수 */
							var isWhile = true;
							/* 루프유지변수 */
							while (isWhile) {
								try {
									if (tC == 0) {
										isWhile = false;
									} else {
										if (cfg.colHead._maps[rr][nC] == undefined) {
											cfg.colHead._maps[rr][nC] = position;
											if (startPosition == null) startPosition = nC;
											tC--;
										} else {
											nC++;
										}
									}
								} catch (e) {
									isWhile = false;
								}
							}
						}
						return startPosition;
					};
					for (var r = 0; r < cfg.colHead.rows.length; r++) {
						//var startPosition = null;
						//var isMultiRow = false;
						for (var CH, CHidx = 0, __arr = cfg.colHead.rows[r]; (CHidx < __arr.length && (CH = __arr[CHidx])); CHidx++) {
							if (CH.colSeq != undefined) {
								var myCG = cfg.colGroup.getToSeq(CH.colSeq);
							} else {
								var myCG = cfg.colGroup.searchObject(function () {
									return CH.key == this.item.key;
								}).first();
							}
							if (myCG != null) {
								if(CH.sort != myCG.sort){
									trace(CH, myCG);
								}
								if (rewrite) AXUtil.overwriteObject(CH, myCG, true);
								else AXUtil.overwriteObject(CH, myCG, false);
							} else {
								AXUtil.overwriteObject(CH, { align: "left", valign: "bottom", display: true, rowspan: 1, colspan: 1 }, false);
							}
							appendPosToColHeadMap(CH.rowspan, CH.colspan, r, { r: r, c: CHidx });
						}
					}
					/*colHead._maps 마지막 줄에 해당하는 cfg.colHead.rows 에 속성부여 */
					for (var m, midx = 0, __arr = cfg.colHead._maps.last(); (midx < __arr.length && (m = __arr[midx])); midx++) {
						if (m) cfg.colHead.rows[m.r][m.c].isLastCell = true;
					}

					if (hasHiddenCell) { /* colGroup 중에 숨겨진 col 이 존재하는 경우 */
						/* colspan 감소 시키기 */
						for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
							if (!CG.display) {
								var rowPosition = null;
								for (var a = 0; a < cfg.colHead._maps.length; a++) {
									if (rowPosition != cfg.colHead._maps[a][cidx]) {
										rowPosition = cfg.colHead._maps[a][cidx];
										cfg.colHead.rows[rowPosition.r][rowPosition.c].colspan--;
									}
								}
							}
						}
					}
					/*trace(cfg.colHead._maps);  //_maps check */

					/* colHeadRow 정해진 경우 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
				} else {
					/* colHeadRow 정해지지 않은 경우 */

					cfg.colHead._maps = [
						[]
					];
					var colHeadRows = [
						[]
					];

					for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
						var adder = {
							key: CG.key,
							colSeq: CG.colSeq,
							label: CG.label,
							align: (cfg.colHeadAlign || CG.align || "left"),
							rowspan: 1, colspan: 1,
							valign: "bottom", isLastCell: true, display: CG.display, formatter: CG.formatter, formatterLabel:CG.formatterLabel, checked: CG.checked, disabled: CG.disabled,
							sort: CG.sort,
							tooltip: CG.tooltip,
							displayLabel: (CG.displayLabel || false)
						};
						if(cfg._colHead_rows) adder.sort = cfg._colHead_rows[0][cidx].sort; // redrawGrid 호출된 경우 예외처리
						colHeadRows[0].push(adder);
						cfg.colHead._maps[0].push({ r: 0, c: cidx });
					}
					cfg.colHead.rows = colHeadRows;
					cfg.colHead.rowsEmpty = true;
					/* colHeadRow 정해지지 않은 경우 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
				}
				/* colHead rows ----------------------------------------------------------------------------------------------------- */

				/* body rows ------------------------------------------------------------------------------------------------------- */
				if (cfg.body.rows) {
					/* bodyRow 정해진 경우 */
					cfg.body._maps = new Array(cfg.body.rows.length);
					var colMaxLen = 0;
					for (var r = 0; r < cfg.body.rows.length; r++) {
						var colLen = 0;
						for (var CH, CHidx = 0, __arr = cfg.body.rows[r]; (CHidx < __arr.length && (CH = __arr[CHidx])); CHidx++) {
							if (CH.colspan == undefined || CH.colspan == null) {
								CH.colspan = 1;
								CH._colspan = 1;
							} else {
								if (!rewrite) CH._colspan = CH.colspan;
								else CH.colspan = CH._colspan;
							}
							if (CH.rowspan == undefined || CH.rowspan == null) CH.rowspan = 1;
							if (CH.valign == undefined || CH.valign == null) CH.valign = "middle";
							/* if(CH.align == undefined || CH.align == null) CH.align = "left"; */
							colLen += CH.colspan.number();
						}
						if (colMaxLen < colLen) colMaxLen = colLen;
					}
					for (var _m = 0; _m < cfg.body._maps.length; _m++) {
						cfg.body._maps[_m] = new Array(colMaxLen);
					}
					/* colEndPosition 관련 처리 함수 */
					var appendPosToBodyMap = function (r, c, posR, position) {
						var nC = position.c;
						/*시작 컬럼 위치 */
						var startPosition = null;
						for (var rr = posR; rr < (posR + r); rr++) {
							if (r > 1) if (rr > 0 && startPosition != null) nC = startPosition;
							var tC = c;
							/*컬럼 루프횟수 */
							var isWhile = true;
							/* 루프유지변수 */
							while (isWhile) {
								try {
									if (tC == 0) {
										isWhile = false;
									} else {
										if (cfg.body._maps[rr][nC] == undefined) {
											cfg.body._maps[rr][nC] = position;
											if (startPosition == null) startPosition = nC;
											tC--;
										} else {
											nC++;
										}
									}
								} catch (e) {
									isWhile = false;
								}
							}
						}
					};
					for (var r = 0; r < cfg.body.rows.length; r++) {
						for (var CH, CHidx = 0, __arr = cfg.body.rows[r]; (CHidx < __arr.length && (CH = __arr[CHidx])); CHidx++) {
							if (CH.colSeq != undefined) {
								var myCG = cfg.colGroup.getToSeq(CH.colSeq);
							} else {
								var myCG = cfg.colGroup.searchObject(function () {
									return this.item.key == CH.key;
								}).first();
							}

							if (myCG != null) {
								AXUtil.overwriteObject(CH, myCG, false);
							} else {
								AXUtil.overwriteObject(CH, { align: "left", valign: "bottom", display: true, rowspan: 1, colspan: 1 }, false);
							}
							appendPosToBodyMap(CH.rowspan, CH.colspan, r, { r: r, c: CHidx });
						}
					}
					/*body._maps 마지막 줄에 해당하는 cfg.body.rows 에 속성부여 */
					for (var m, midx = 0, __arr = cfg.body._maps.last(); (midx < __arr.length && (m = __arr[midx])); midx++) {
						if (m) cfg.body.rows[m.r][m.c].isLastCell = true;
					}

					if (hasHiddenCell) { /* colGroup 중에 숨겨진 col 이 존재하는 경우 */
						/* colspan 감소 시키기 */
						for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
							if (!CG.display) {
								for (var a = 0; a < cfg.body._maps.length; a++) {
									var rowPosition = cfg.body._maps[a][cidx];
									cfg.body.rows[rowPosition.r][rowPosition.c].colspan--;
								}
							}
						}
					}

					/* bodyRow 정해진 경우 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
				} else {
					/* bodyRow 정해지지 않은 경우 */
					cfg.body._maps = [
						[]
					];
					var bodyRows = [
						[]
					];
					for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
						var adder = {
							key: CG.key, colSeq: CG.colSeq, label: CG.label, align: (CG.align || "left"), rowspan: 1, colspan: 1, valign: "middle", isLastCell: true,
							display: CG.display, checked: CG.checked, disabled: CG.disabled, formatter: CG.formatter, formatterLabel:CG.formatterLabel,
							tooltip: CG.tooltip
						};
						bodyRows[0].push(adder);
						cfg.body._maps[0].push({ r: 0, c: cidx });
					}
					cfg.body.rows = bodyRows;
					cfg.body.rowsEmpty = true;
					/* bodyRow 정해지지 않은 경우 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
				}
				/* body rows ------------------------------------------------------------------------------------------------------- */

				/*marker 관련 데이터 정리 */
				if (cfg.body.marker) {
					if (cfg.body.marker.rows) {
						this.bodyHasMarker = true;
						cfg.body.marker._maps = new Array(cfg.body.marker.rows.length);
						colMaxLen = 0;
						for (var r = 0; r < cfg.body.marker.rows.length; r++) {
							var colLen = 0;
							for (var CH, CHidx = 0, __arr = cfg.body.marker.rows[r]; (CHidx < __arr.length && (CH = __arr[CHidx])); CHidx++) {
								if (CH.rowspan == undefined || CH.rowspan == null) CH.rowspan = 1;
								if (CH.colspan == undefined || CH.colspan == null) {
									CH.colspan = 1;
									CH._colspan = 1;
								} else {
									if (!rewrite) CH._colspan = CH.colspan;
									else CH.colspan = CH._colspan;
								}
								if (CH.valign == undefined || CH.valign == null) CH.valign = "bottom";
								colLen += CH.colspan.number();
							}
							if (colMaxLen < colLen) colMaxLen = colLen;
						}
						for (var _m = 0; _m < cfg.body.marker._maps.length; _m++) {
							cfg.body.marker._maps[_m] = new Array(colMaxLen);
						}
						/* colEndPosition 관련 처리 함수 */
						var appendPosToMarkerMap = function (r, c, posR, position) {
							var nC = position.c;
							/*시작 컬럼 위치 */
							var startPosition = null;
							for (var rr = posR; rr < (posR + r); rr++) {
								if (r > 1) if (rr > 0 && startPosition != null) nC = startPosition;
								var tC = c;
								/*컬럼 루프횟수 */
								var isWhile = true;
								/* 루프유지변수 */
								while (isWhile) {
									try {
										if (tC == 0) {
											isWhile = false;
										} else {
											if (cfg.body.marker._maps[rr][nC] == undefined) {
												cfg.body.marker._maps[rr][nC] = position;
												if (startPosition == null) startPosition = nC;
												tC--;
											} else {
												nC++;
											}
										}
									} catch (e) {
										isWhile = false;
									}
								}
							}
						};
						for (var r = 0; r < cfg.body.marker.rows.length; r++) {
							for (var CH, CHidx = 0, __arr = cfg.body.marker.rows[r]; (CHidx < __arr.length && (CH = __arr[CHidx])); CHidx++) {
								if (CH.colSeq != undefined) {
									var myCG = cfg.colGroup.getToSeq(CH.colSeq);
								} else {
									var myCG = cfg.colGroup.searchObject(function () {
										return this.item.key == CH.key;
									}).first();
								}

								if (myCG != null) {
									AXUtil.overwriteObject(CH, myCG, false);
								} else {
									AXUtil.overwriteObject(CH, { align: "left", valign: "bottom", display: true, rowspan: 1, colspan: 1 }, false);
								}
								appendPosToMarkerMap(CH.rowspan, CH.colspan, r, { r: r, c: CHidx });
							}

						}
						/*colHead._maps 마지막 줄에 해당하는 cfg.colHead.rows 에 속성부여 */
						for (var m, midx = 0, __arr = cfg.body.marker._maps.last(); (midx < __arr.length && (m = __arr[midx])); midx++) {
							if (m) cfg.body.marker.rows[m.r][m.c].isLastCell = true;
						}


						if (hasHiddenCell) { /* colGroup 중에 숨겨진 col 이 존재하는 경우 */
							/* colspan 감소 시키기 */
							for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
								if (!CG.display) {
									for (var a = 0; a < cfg.body.marker._maps.length; a++) {
										var rowPosition = cfg.body.marker._maps[a][cidx];
										cfg.body.marker.rows[rowPosition.r][rowPosition.c].colspan--;
									}
								}
							}

						}
					}
				}
				/*marker 관련 데이터 정리 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


				/*head 관련 데이터 정리 */
				if (cfg.head) {
					cfg.head._maps = new Array(cfg.head.rows.length);
					colMaxLen = 0;
					for (var r = 0; r < cfg.head.rows.length; r++) {
						var colLen = 0;
						for (var CH, CHidx = 0, __arr = cfg.head.rows[r]; (CHidx < __arr.length && (CH = __arr[CHidx])); CHidx++) {
							if (CH.rowspan == undefined || CH.rowspan == null) CH.rowspan = 1;
							if (CH.colspan == undefined || CH.colspan == null) {
								CH.colspan = 1;
								CH._colspan = 1;
							} else {
								if (!rewrite) CH._colspan = CH.colspan;
								else CH.colspan = CH._colspan;
							}
							if (CH.valign == undefined || CH.valign == null) CH.valign = "bottom";
							/*if(CH.align == undefined || CH.align == null) CH.align = "left"; */
							colLen += CH.colspan.number();
						}

						if (colMaxLen < colLen) colMaxLen = colLen;
					}
					for (var _m = 0; _m < cfg.head._maps.length; _m++) {
						cfg.head._maps[_m] = new Array(colMaxLen);
					}
					/* colEndPosition 관련 처리 함수 */
					var appendPosToHeadMap = function (r, c, posR, position) {
						var nC = position.c;
						/*시작 컬럼 위치 */
						var startPosition = null;
						for (var rr = posR; rr < (posR + r); rr++) {
							if (r > 1) if (rr > 0 && startPosition != null) nC = startPosition;
							var tC = c;
							/*컬럼 루프횟수 */
							var isWhile = true;
							/* 루프유지변수 */
							while (isWhile) {
								try {
									if (tC == 0) {
										isWhile = false;
									} else {
										if (cfg.head._maps[rr][nC] == undefined) {
											cfg.head._maps[rr][nC] = position;
											if (startPosition == null) startPosition = nC;
											tC--;
										} else {
											nC++;
										}
									}
								} catch (e) {
									isWhile = false;
								}
							}
						}
					};
					for (var r = 0; r < cfg.head.rows.length; r++) {
						for (var CH, CHidx = 0, __arr = cfg.head.rows[r]; (CHidx < __arr.length && (CH = __arr[CHidx])); CHidx++) {
							if (CH.colSeq != undefined) {
								var myCG = cfg.colGroup.getToSeq(CH.colSeq);
							} else {
								var myCG = cfg.colGroup.searchObject(function () {
									return this.item.key == CH.key;
								}).first();
							}

							if (myCG != null) {
								AXUtil.overwriteObject(CH, myCG, false);
							} else {
								AXUtil.overwriteObject(CH, { align: "left", valign: "bottom", display: true, rowspan: 1, colspan: 1 }, false);
							}
							appendPosToHeadMap(CH.rowspan, CH.colspan, r, { r: r, c: CHidx });
						}

					}

					/*colHead._maps 마지막 줄에 해당하는 cfg.colHead.rows 에 속성부여 */
					for (var m, midx = 0, __arr = cfg.head._maps.last(); (midx < __arr.length && (m = __arr[midx])); midx++) {
						if (m) cfg.head.rows[m.r][m.c].isLastCell = true;
					}


					if (hasHiddenCell) { /* colGroup 중에 숨겨진 col 이 존재하는 경우 */
						/* colspan 감소 시키기 */
						for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
							if (!CG.display) {
								for (var a = 0; a < cfg.head._maps.length; a++) {
									var rowPosition = cfg.head._maps[a][cidx];
									cfg.head.rows[rowPosition.r][rowPosition.c].colspan--;
								}
							}
						}
					}
				}
				/*head 관련 데이터 정리 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

				/*foot 관련 데이터 정리 */
				if (cfg.foot) {
					cfg.foot._maps = new Array(cfg.foot.rows.length);
					colMaxLen = 0;
					for (var r = 0; r < cfg.foot.rows.length; r++) {
						var colLen = 0;
						for (var CH, CHidx = 0, __arr = cfg.foot.rows[r]; (CHidx < __arr.length && (CH = __arr[CHidx])); CHidx++) {
							if (CH.rowspan == undefined || CH.rowspan == null) CH.rowspan = 1;
							if (CH.colspan == undefined || CH.colspan == null) {
								CH.colspan = 1;
								CH._colspan = 1;
							} else {
								if (!rewrite) CH._colspan = CH.colspan;
								else CH.colspan = CH._colspan;
							}
							if (CH.valign == undefined || CH.valign == null) CH.valign = "bottom";
							colLen += CH.colspan.number();
						}

						if (colMaxLen < colLen) colMaxLen = colLen;
					}
					for (var _m = 0; _m < cfg.foot._maps.length; _m++) {
						cfg.foot._maps[_m] = new Array(colMaxLen);
					}
					/* colEndPosition 관련 처리 함수 */
					var appendPosToFootMap = function (r, c, posR, position) {
						var nC = position.c;
						/*시작 컬럼 위치 */
						var startPosition = null;
						for (var rr = posR; rr < (posR + r); rr++) {
							if (r > 1) if (rr > 0 && startPosition != null) nC = startPosition;
							var tC = c;
							var isWhile = true;
							while (isWhile) {
								try {
									if (tC == 0) {
										isWhile = false;
									} else {
										if (cfg.foot._maps[rr][nC] == undefined) {
											cfg.foot._maps[rr][nC] = position;
											if (startPosition == null) startPosition = nC;
											tC--;
										} else {
											nC++;
										}
									}
								} catch (e) {
									isWhile = false;
								}
							}
						}
					};
					for (var r = 0; r < cfg.foot.rows.length; r++) {
						for (var CH, CHidx = 0, __arr = cfg.foot.rows[r]; (CHidx < __arr.length && (CH = __arr[CHidx])); CHidx++) {
							if (CH.colSeq != undefined) {
								var myCG = cfg.colGroup.getToSeq(CH.colSeq);
							} else {
								var myCG = cfg.colGroup.searchObject(function () {
									return this.item.key == CH.key;
								}).first();
							}

							if (myCG != null) {
								AXUtil.overwriteObject(CH, myCG, false);
							} else {
								AXUtil.overwriteObject(CH, { align: "left", valign: "bottom", display: true, rowspan: 1, colspan: 1 }, false);
							}
							appendPosToFootMap(CH.rowspan, CH.colspan, r, { r: r, c: CHidx });
						}

					}
					/*colHead._maps 마지막 줄에 해당하는 cfg.colHead.rows 에 속성부여 */
					for (var m, midx = 0, __arr = cfg.foot._maps.last(); (midx < __arr.length && (m = __arr[midx])); midx++) {
						if (m) cfg.foot.rows[m.r][m.c].isLastCell = true;
					}


					if (hasHiddenCell) { /* colGroup 중에 숨겨진 col 이 존재하는 경우 */
						for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
							if (!CG.display) {
								for (var a = 0; a < cfg.foot._maps.length; a++) {
									var rowPosition = cfg.foot._maps[a][cidx];
									cfg.foot.rows[rowPosition.r][rowPosition.c].colspan--;
								}
							}
						}

					}
				}
				/*foot 관련 데이터 정리 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

				/*editor 관련 데이터 정리 */
				if (cfg.editor) {
					if (cfg.editor.rows) {
						this.hasEditor = true;
						cfg.editor._maps = new Array(cfg.editor.rows.length);
						colMaxLen = 0;
						for (var r = 0; r < cfg.editor.rows.length; r++) {
							var colLen = 0;
							for (var CH, CHidx = 0, __arr = cfg.editor.rows[r]; (CHidx < __arr.length && (CH = __arr[CHidx])); CHidx++) {
								if (CH) {
									if (CH.rowspan == undefined || CH.rowspan == null) CH.rowspan = 1;
									if (CH.colspan == undefined || CH.colspan == null) {
										CH.colspan = 1;
										CH._colspan = 1;
									} else {
										if (!rewrite) CH._colspan = CH.colspan;
										else CH.colspan = CH._colspan;
									}
									if (CH.valign == undefined || CH.valign == null) CH.valign = "bottom";
									colLen += CH.colspan.number();
								}
							}

							if (colMaxLen < colLen) colMaxLen = colLen;
						}
						for (var _m = 0; _m < cfg.editor._maps.length; _m++) {
							cfg.editor._maps[_m] = new Array(colMaxLen);
						}
						/* colEndPosition 관련 처리 함수 */
						var appendPosToEditorMap = function (r, c, posR, position) {
							var nC = position.c;
							var startPosition = null;
							for (var rr = posR; rr < (posR + r); rr++) {
								var tC = c;
								var isWhile = true;
								while (isWhile) {
									try {
										if (tC == 0) {
											isWhile = false;
										} else {
											if (cfg.editor._maps[rr][nC] == undefined) {
												cfg.editor._maps[rr][nC] = position;
												if (startPosition == null) startPosition = nC;
												tC--;
											} else {
												nC++;
											}
										}
									} catch (e) {
										isWhile = false;
									}
								}
							}
						};
						for (var r = 0; r < cfg.editor.rows.length; r++) {
							for (var CH, CHidx = 0, __arr = cfg.editor.rows[r]; (CHidx < __arr.length && (CH = __arr[CHidx])); CHidx++) {
								if (CH) {
									if (CH.colSeq != undefined) {
										var myCG = cfg.colGroup.getToSeq(CH.colSeq);
									} else {
										var myCG = cfg.colGroup.searchObject(function () {
											return this.item.key == CH.key;
										}).first();
									}
									if (myCG != null) {
										AXUtil.overwriteObject(CH, myCG, false);
									} else {
										AXUtil.overwriteObject(CH, { align: "left", valign: "bottom", display: true, rowspan: 1, colspan: 1 }, false);
									}
									appendPosToEditorMap(CH.rowspan, CH.colspan, r, { r: r, c: CHidx });
								}
							}

						}

						for (var m, midx = 0, __arr = cfg.editor._maps.last(); (midx < __arr.length && (m = __arr[midx])); midx++) {
							if (m) cfg.editor.rows[m.r][m.c].isLastCell = true;
						}


						if (hasHiddenCell) {
							for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
								if (!CG.display) {
									for (var a = 0; a < cfg.editor._maps.length; a++) {
										var rowPosition = cfg.editor._maps[a][cidx];
										cfg.editor.rows[rowPosition.r][rowPosition.c].colspan--;
									}
								}
							}

						}
					}
				}

				/*editor 관련 데이터 정리 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

				/*fixedColSeq가 설정된 경우 */
				if (cfg.fixedColSeq != undefined && cfg.fixedColSeq != null) {

					var fixedColSeq = this.fixedColSeq;

					for (var m, midx = 0, __arr = cfg.colHead._maps; (midx < __arr.length && (m = __arr[midx])); midx++) {
						for (var c, cidx = 0, __arr2 = m; (cidx < __arr2.length && (c = __arr2[cidx])); cidx++) {
							if (c) {
								if ((fixedColSeq + 1) > cidx) cfg.colHead.rows[c.r][c.c].isFixedCell = true;
							}
						}

					}


					for (var m, midx = 0, __arr = cfg.body._maps; (midx < __arr.length && (m = __arr[midx])); midx++) {
						for (var c, cidx = 0, __arr2 = m; (cidx < __arr2.length && (c = __arr2[cidx])); cidx++) {
							if (c) {
								if (fixedColSeq == cidx) cfg.body.rows[c.r][c.c].isFixedEndCell = true;
								if ((fixedColSeq + 1) > cidx) cfg.body.rows[c.r][c.c].isFixedCell = true;
							}
						}

					}

					if (cfg.head) {
						for (var m, midx = 0, __arr = cfg.head._maps; (midx < __arr.length && (m = __arr[midx])); midx++) {
							for (var c, cidx = 0, __arr2 = m; (cidx < __arr2.length && (c = __arr2[cidx])); cidx++) {
								if (c) {
									if (fixedColSeq == cidx) cfg.head.rows[c.r][c.c].isFixedEndCell = true;
									if ((fixedColSeq + 1) > cidx) cfg.head.rows[c.r][c.c].isFixedCell = true;
								}
							}

						}

					}
					if (cfg.foot) {
						for (var m, midx = 0, __arr = cfg.foot._maps; (midx < __arr.length && (m = __arr[midx])); midx++) {
							for (var c, cidx = 0, __arr2 = m; (cidx < __arr2.length && (c = __arr2[cidx])); cidx++) {
								if (c) {
									if (fixedColSeq == cidx) cfg.foot.rows[c.r][c.c].isFixedEndCell = true;
									if ((fixedColSeq + 1) > cidx) cfg.foot.rows[c.r][c.c].isFixedCell = true;
								}
							}

						}

					}

					if (cfg.body.marker) {
						if (cfg.body.marker.rows) {
							for (var m, midx = 0, __arr = cfg.body.marker._maps; (midx < __arr.length && (m = __arr[midx])); midx++) {
								for (var c, cidx = 0, __arr2 = m; (cidx < __arr2.length && (c = __arr2[cidx])); cidx++) {
									if (c) {
										if (fixedColSeq == cidx) cfg.body.marker.rows[c.r][c.c].isFixedEndCell = true;
										if ((fixedColSeq + 1) > cidx) cfg.body.marker.rows[c.r][c.c].isFixedCell = true;
									}
								}

							}

						}
					}

					if (cfg.editor) {
						if (cfg.editor.rows) {
							for (var m, midx = 0, __arr = cfg.editor._maps; (midx < __arr.length && (m = __arr[midx])); midx++) {
								for (var c, cidx = 0, __arr2 = m; (cidx < __arr2.length && (c = __arr2[cidx])); cidx++) {
									if (c) {
										if (fixedColSeq == cidx) cfg.editor.rows[c.r][c.c].isFixedEndCell = true;
										if ((fixedColSeq + 1) > cidx) cfg.editor.rows[c.r][c.c].isFixedCell = true;
									}
								}

							}

						}
					}
					this.hasFixed = true;
					if (hasHiddenCell) {
						var minusFixedCol = 0;
						var fixedColSeq = this.fixedColSeq;
						for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
							if (!CG.display) {
								if ((fixedColSeq + 1) > cidx) minusFixedCol++;
							}
						}

						cfg.fixedColSeq = this.fixedColSeq - minusFixedCol;
					} else {
						cfg.fixedColSeq = this.fixedColSeq;
					}

					if (cfg.fixedColSeq == -1) {
						/*fixed 제거*/
						this.hasFixed = false;
					}

					var fixedColSeq = this.fixedColSeq, fixedColWidth = 0, fixedColLen = 0;
					for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
						if (CG.display && cidx < (fixedColSeq + 1)) {
							fixedColWidth += CG.width.number();
							fixedColLen++;
						}
					}
					this.showFixedColLen = fixedColLen;
					this.fixedColWidth = fixedColWidth;
				}
			},
			/**
			 * @method AXGrid.setConig
			 * @param config {JSObject} gridConfig
			 * @returns null
			 * @description
			 * 선언된 클래스를 사용하기 위해 속성을 정의합니다.
			 * @example
			 ```
			 {
	targetID : "AXGridTarget",
	colHeadAlign: "center", // 헤드의 기본 정렬 값
	mergeCells: true|false|Array -- 전체셀병합,병합안함,지정된 인덱스열만 병합
	colGroup : [
		{key:"no", label:"번호", width:"50", align:"right", sort:"asc"}
	],
	body: {
		onclick: function(){},
		ondblclick: function(){},
		addClass: function(){},
		oncheck: function(){},
		onchangeScroll: function(){}
	}
}
			 ```
			 */
			init: function () {
				var cfg = this.config;

				if (Object.isUndefined(cfg.targetID)) {
					trace("need targetID - setConfig({targetID:''})");
					return;
				}
				if (!cfg.colGroup) {
					trace("need colGroup - setConfig({colGroup:[]})");
					return;
				}

				cfg.emptyListMSG = cfg.emptyListMSG || AXConfig.AXGrid.emptyListMSG;
				cfg.listCountMSG = cfg.listCountMSG || AXConfig.AXGrid.listCountMSG || "전체 <b>{listCount}</b>개의 목록이 있습니다.";
				cfg.pageCountMSG = cfg.pageCountMSG || AXConfig.AXGrid.pageCountMSG;

				/*
				 cfg.viewMode 결정 구간.
				 */

				if (cfg.mediaQuery) {
					var _viewMode = "", clientWidth = axf.clientWidth();
					axf.each(cfg.mediaQuery, function (k, v) {
						if (Object.isObject(v)) {

							if(v.min != undefined && v.max != undefined){
								if (v.min <= clientWidth && clientWidth <= v.max) {
									_viewMode = (k == "dx") ? "grid" : "mobile";
									return false;
								}
							}else{
								if (v.min <= clientWidth) {
									_viewMode = (k == "dx") ? "grid" : "mobile";
									return false;
								}
							}
						}
					});
					if (_viewMode != "") {
						cfg.viewMode = _viewMode;
					}
				}


				if (Object.isObject(cfg.colGroup)) {
					var newColGroup = cfg.colGroup.concat();
					cfg.colGroup = newColGroup;
				}

				this.target = axdom("#" + cfg.targetID);

				var targetInnerHeight = this.target.innerHeight();
				if (targetInnerHeight == 0) targetInnerHeight = (AXConfig.AXGrid.pageHeight || 400);
				this.theme = (cfg.theme) ? cfg.theme : "AXGrid";
				/* 테마기본값 지정*/
				cfg.height = (cfg.height) ? cfg.height : targetInnerHeight + "px";
				/* 그리드 높이 지정 */

				var theme = this.theme;
				var gridCss = [];
				if (cfg.width) gridCss.push("width:" + cfg.width + ";");
				if (cfg.height) gridCss.push("height:" + cfg.height + ";");

				/* grid 뼈대 그리기 ----------------------------------------------------------------------------------------------------- */
				var ol = [];
				ol.push("<div class=\"" + theme + "\" id=\"" + cfg.targetID + "_AX_grid\" style=\"" + gridCss.join('') + "\">");
				ol.push("	<div class=\"AXgridScrollBody\" id=\"" + cfg.targetID + "_AX_gridScrollBody\" style=\"z-index:2;\">");
				ol.push("		<div class=\"AXGridColHead AXUserSelectNone\" id=\"" + cfg.targetID + "_AX_gridColHead\" onselectstart=\"return false;\"></div>");
				ol.push("		<div class=\"AXGridToolGroup top\" id=\"" + cfg.targetID + "_AX_gridToolGroupTop\"></div>");
				ol.push("		<div class=\"AXGridBody\" id=\"" + cfg.targetID + "_AX_gridBody\"></div>");
				ol.push("		<div class=\"AXGridToolGroup bottom\" id=\"" + cfg.targetID + "_AX_gridToolGroupBottom\"></div>");
				ol.push("		<div class=\"AXgridEditor\" id=\"" + cfg.targetID + "_AX_gridEditor\"></div>");
				ol.push("	</div>");
				ol.push("	<div class=\"AXgridPageBody\" id=\"" + cfg.targetID + "_AX_gridPageBody\" style=\"z-index:1;\">");
				ol.push("		<div class=\"AXgridPagingUnit\" id=\"" + cfg.targetID + "_AX_gridPagingUnit\">");
				ol.push("			<a class=\"AXgridPagingPrev\">PREV</a>");
				ol.push("			<div class=\"AXgridPageNumber\"><select id=\"" + cfg.targetID + "_AX_gridPageNo\" class=\"AXgridPageNo\"><option value=\"\">&nbsp;&nbsp;</option></select></div>");
				ol.push("			<div class=\"AXgridPageNumberCount\" id=\"" + cfg.targetID + "_AX_gridPageCount\">/ ...</div>");
				ol.push("			<a class=\"AXgridPagingNext\">NEXT</a>");
				ol.push("		</div>");
				ol.push("		<div class=\"AXgridStatus\" id=\"" + cfg.targetID + "_AX_gridStatus\">");
				ol.push("		" + cfg.listCountMSG.replace("{listCount}", "0"));
				ol.push("		</div>");
				ol.push("	</div>");
				ol.push("</div>");
				this.target.html(ol.join(''));
				/* grid 뼈대 그리기 ----------------------------------------------------------------------------------------------------- */

				/* 주요 타깃 설정 */
				this.gridBody = axdom("#" + cfg.targetID + "_AX_grid");
				this.scrollBody = axdom("#" + cfg.targetID + "_AX_gridScrollBody");
				this.colHead = axdom("#" + cfg.targetID + "_AX_gridColHead");
				this.body = axdom("#" + cfg.targetID + "_AX_gridBody");
				this.editor = axdom("#" + cfg.targetID + "_AX_gridEditor");

				this.pageBody = axdom("#" + cfg.targetID + "_AX_gridPageBody");
				this.pageBody.data("display", "show");
				this.pagingUnit = axdom("#" + cfg.targetID + "_AX_gridPagingUnit");
				this.status = axdom("#" + cfg.targetID + "_AX_gridStatus");
				//this.scroller = axdom("#" + cfg.targetID + "_AX_gridScroller");

				/* define part --------------------------------- */
				this.defineConfig();
				/* config object define */
				/* define part --------------------------------- */

				if (cfg.page) {
					this.page.pageNo = (cfg.page.pageNo || 1);
					this.page.pageSize = (cfg.page.pageSize || (AXConfig.AXGrid.pageSize || 100));
					this.page.onchange = cfg.page.onchange || this.page.onChange;
				}

				/*colHead setting */
				this.setColHead();

				/*body setting */
				this.setBody();

				/*editor setting */
				this.editor.hide();

				this.gridTargetSetSize();

				this.contentScrollResize();

				/* body event bind */
				var contentScrollTouchstart = this.contentScrollTouchstart.bind(this);
				this.contentScrollTouchstartBind = function (event) {
					contentScrollTouchstart(event);
				};
				var contentScrollScrollWheel = this.contentScrollScrollWheel.bind(this);
				this.contentScrollScrollWheelBind = function (event) {
					contentScrollScrollWheel(event);
				};

				var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";
				if (document.attachEvent) { /*if IE (and Opera depending on user setting) */
					/*axf.getId(cfg.targetID+"_AX_gridBody").detachEvent("on"+mousewheelevt, this.contentScrollScrollWheelBind); */
					if (axf.getId(cfg.targetID + "_AX_gridBody")) axf.getId(cfg.targetID + "_AX_gridBody").attachEvent("on" + mousewheelevt, contentScrollScrollWheel);
				} else if (document.addEventListener) { /*WC3 browsers */
					/*axf.getId(cfg.targetID+"_AX_gridBody").removeEventListener(mousewheelevt, this.contentScrollScrollWheelBind, false); */
					if (axf.getId(cfg.targetID + "_AX_gridBody")) axf.getId(cfg.targetID + "_AX_gridBody").addEventListener(mousewheelevt, contentScrollScrollWheel, false);
				}

				if (document.addEventListener) {
					/*axf.getId(cfg.targetID+"_AX_gridBody").removeEventListener("touchstart", this.contentScrollTouchstartBind, false); */
					if (axf.getId(cfg.targetID + "_AX_gridBody")) axf.getId(cfg.targetID + "_AX_gridBody").addEventListener("touchstart", contentScrollTouchstart, false);
				}

				this.target.bind("keydown", this.onKeydown.bind(this));

				if (cfg.contextMenu) {
					AXContextMenu.bind({
						id: cfg.targetID + "ContextMenu",
						theme: cfg.contextMenu.theme,
						width: cfg.contextMenu.width,
						menu: cfg.contextMenu.menu
					});
					this.target.bind("contextmenu", this.onContextmenu.bind(this));
				}

				/* body event bind */

				/* page event bind */
				var goPageMove = this.goPageMove.bind(this);
				this.pagingUnit.find(".AXgridPagingPrev").bind("click", function (event) {
					goPageMove(-1);
				});
				this.pagingUnit.find(".AXgridPagingNext").bind("click", function (event) {
					goPageMove(1);
				});
				/* page event bind */

				axdom(window).bind("resize", this.windowResizeApply.bind(this));

				//this.printList();  printList는 setBody 에서 자동 실행 됨
			},
			windowResize: function () {
				var windowResizeApply = this.windowResizeApply.bind(this);
				if (this.windowResizeObserver) clearTimeout(this.windowResizeObserver);
				this.windowResizeObserver = setTimeout(function () {
					windowResizeApply();
				}, 100);
			},
			windowResizeApply: function () {
				var cfg = this.config;

				if (cfg.mediaQuery) {
					var _viewMode = "", clientWidth = axf.clientWidth();
					axf.each(cfg.mediaQuery, function (k, v) {
						if (Object.isObject(v)) {

							if(v.min != undefined && v.max != undefined){
								if (v.min <= clientWidth && clientWidth <= v.max) {
									_viewMode = (k == "dx") ? "grid" : "mobile";
									return false;
								}
							}else{
								if (v.min <= clientWidth) {
									_viewMode = (k == "dx") ? "grid" : "mobile";
									return false;
								}
							}
						}
					});
					if (_viewMode != "") {
						cfg.viewMode = _viewMode;
					}
				}

				this.redrawGrid("");
			},
			gridTargetSetSize: function (react) { /* AXgridScrollBody 안쪽의 높이와 관련된 요소 설정 */
				var cfg = this.config;
				/*cfg.height */

				if (cfg.viewMode == "mobile") {

					this.target.css({ height: "auto", "max-height": "auto" });
					this.gridBody.addClass("AXGridMobile");
					this.gridBody.css({height: "auto"});
					this.scrollBody.css({height: "auto"});
					this.body.css({top: "auto", height: "auto"});
					this.pageBody.hide();
					this.setPaging();

				} else {

					/*page setting */
					if (!cfg.page) {
						this.pageBody.hide();
						this.pageBody.data("display", "hide");
					} else {

						if (cfg.page.display == false) {
							this.pageBody.hide();
							this.pageBody.data("display", "hide");
						} else {
							this.pageBody.show();
							this.pageBody.data("display", "show");

							if (cfg.page.paging) {
								this.setPaging();
							} else {
								this.pagingUnit.hide();
							}
							if (cfg.page.status == false) {
								this.status.hide();
							}
						}
					}

					this.gridBody.removeClass("AXGridMobile");

					if (cfg.height == "auto") {
						var colHeadHeight = this.colHead.outerHeight();
						if (colHeadHeight == 1) colHeadHeight = 0;
						var scrollBodyHeight = this.scrollContent.height();
						this.scrollBody.css({ height: scrollBodyHeight + colHeadHeight });
						/*colhead + body height */
						this.body.css({ top: colHeadHeight, height: (scrollBodyHeight) });
						/* body Height */
					} else {

						if (cfg.height) this.gridBody.css({height: cfg.height});

						var pageBodyHeight = (this.pageBody.data("display") == "show") ? this.pageBody.outerHeight() : 0;
						if (cfg.page.display == false) pageBodyHeight = 0;
						var scrollBodyHeight = cfg.height.number() - pageBodyHeight - 2;
						this.scrollBody.css({ height: scrollBodyHeight });
						/*colhead + body height */
						var colHeadHeight = this.colHead.outerHeight();
						if (colHeadHeight == 1) colHeadHeight = 0;
						this.body.css({ top: colHeadHeight, height: (scrollBodyHeight - colHeadHeight) });
						/* body Height */
					}
					if (react) this.contentScrollResize(false);
				}
			},
			resetHeight: function () {
				var cfg = this.config;

				if (cfg.viewMode != "mobile") {
					var targetInnerHeight = axdom("#" + cfg.targetID).innerHeight();
					if (targetInnerHeight == 0) targetInnerHeight = 400;
					cfg.height = targetInnerHeight + "px"; // 그리드 높이 지정

					if (cfg.height) this.gridBody.css({height: cfg.height});
					this.redrawGrid("");

					/*
					 var pageBodyHeight = (this.pageBody.data("display") == "show") ? this.pageBody.outerHeight() : 0;
					 if (cfg.page.display == false) pageBodyHeight = 0;
					 var scrollBodyHeight = cfg.height.number() - pageBodyHeight - 2;
					 this.scrollBody.css({ height: scrollBodyHeight });
					 */

					/*
					 var colHeadHeight = this.colHead.outerHeight();
					 if (colHeadHeight == 1) colHeadHeight = 0;
					 this.body.css({ top: colHeadHeight, height: (scrollBodyHeight - colHeadHeight) });

					 this.contentScrollResize(false);
					 */
				}

			},
			getColGroup: function (suffix) {
				var cfg = this.config;
				var fixedColSeq = this.fixedColSeq;
				/*{colID:0, key:"no", label:"번호", width:"100", align:"left", addClassNames:"", style:"", display:true, sort:null} */
				var po = [];
				po.push("<colgroup>");
				if (suffix != "FC" && suffix != "FB" && suffix != "FE") {
					for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
						if (CG.display) {
							po.push("<col width=\"" + CG.width + "\" style=\"\" id=\"" + cfg.targetID + "_AX_col_AX_" + CG.colSeq + "_AX_" + suffix + "\" />");
						}
					}

					if (suffix == "CB") po.push("<col />");
				} else {
					/*fixedCol 존재 */
					for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
						if (CG.display && cidx < (fixedColSeq + 1)) {
							po.push("<col width=\"" + CG.width + "\" style=\"\" id=\"" + cfg.targetID + "_AX_col_AX_" + CG.colSeq + "_AX_" + suffix + "\" />");
						}
					}

				}
				po.push("</colgroup>");
				return po.join('');
			},
			getColSeqToHead: function (r, c) {
				/*trace("getColSeqToHead:"+r+","+c); */
				var cfg = this.config;
				var colSeq = null;
				for (var a = cfg.colHead._maps[r].length - 1; a > -1; a--) {
					if (cfg.colHead._maps[r][a].r == r && cfg.colHead._maps[r][a].c == c) {
						colSeq = a;
						break;
					}
				}
				return colSeq;
			},
			/**
			 * 그리드의 모든 요소를 재 정렬 해 줍니다.
			 * grid elements align
			 *
			 * @method AXGrid.redrawGrid
			 * @param changeGridView {string}
			 * @example
			 ```
			 var myGrid = new AXGrid();
			 ...
			 myGrid.redrawGrid();
			 ```
			 */
			redrawGrid: function (changeGridView) {
				var cfg = this.config, _this = this;
				/*
				 모바일 모드로 요청 하면 뼈대 변경.
				 */
				if (changeGridView) {
					if (cfg.viewMode == "grid") {
						this.pageBody.show();
						this.pageBody.data("display", "show");
					} else if (cfg.viewMode == "icon") {
						this.pageBody.show();
						this.pageBody.data("display", "show");
					} else if (cfg.viewMode == "mobile") {
						this.pageBody.hide();
						this.pageBody.data("display", "hide");
					}
				}

				this.defineConfig(true);
				this.setColHead();

				if (cfg.viewMode == "grid") {
					if (this.list.length > 0) {
						if (cfg.head) this.printHead();
						if (cfg.foot) this.printFoot();
					}
				}
				this.gridTargetSetSize(true);
				this.contentScrollResize();

				this.setBody(undefined, true);

				/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 바디 재구성 기능 포함 */
			},
			checkedColSeq: function (colSeq, checked, itemIndex) {
				var cfg = this.config, sendObj;
				var _list = this.list;
				if (itemIndex == undefined) {
					this.colHead.find(".gridCheckBox_colHead_colSeq" + colSeq).each(function () {
						this.checked = checked;
					});
					axdom("#" + cfg.targetID + "_AX_fixedColHead").find(".gridCheckBox_colHead_colSeq" + colSeq).each(function () {
						this.checked = checked;
					});
					this.body.find(".gridCheckBox_body_colSeq" + colSeq).each(function () {
						if (axdom("#" + this.id).attr("disabled") != "disabled") {
							this.checked = checked;
						}
					});
					for (var item, itemIndex = 0, __arr = this.list; (itemIndex < __arr.length && (item = __arr[itemIndex])); itemIndex++) {
						if(typeof item.___disabled == "undefined") item.___disabled = {};
						if(typeof item.___checked == "undefined") item.___checked = {};
						item.___checked[colSeq] = checked;
					}
					if (cfg.colGroup[colSeq].oncheck) {
						sendObj = {
							index: colSeq,
							list: _list
						};
						cfg.colGroup[colSeq].oncheck.call(sendObj, checked);
					}
					if(cfg.body.oncheck) {
						sendObj = {
							index  : itemIndex,
							checked: checked,
							r      : 0,
							c      : colSeq,
							list   : this.list,
							page   : this.page
						};
						cfg.body.oncheck.call(sendObj);
					}
				} else {
					this.body.find(".gridBodyTr_" + itemIndex + " .gridCheckBox_body_colSeq" + colSeq).each(function () {
						if (checked == null) {
							this.checked = !this.checked;
						} else {
							this.checked = checked;
						}
					});
					var item = this.list[itemIndex];
					if(typeof item.___disabled == "undefined") item.___disabled = {};
					if(typeof item.___checked == "undefined") item.___checked = {};
					if (checked == null) {
						item.___checked[colSeq] = !item.___checked[colSeq];
					}else{
						item.___checked[colSeq] = checked;
					}
					if (cfg.colGroup[colSeq].oncheck) {
						sendObj = {
							index: checkboxIndex,
							list: _list
						};
						cfg.colGroup[colSeq].oncheck.call(sendObj, checked);
					}
					if(cfg.body.oncheck) {
						sendObj = {
							index  : itemIndex,
							checked: checked,
							r      : 0,
							c      : colSeq,
							list   : this.list,
							item    : item,
							page   : this.page
						};
						cfg.body.oncheck.call(sendObj, itemIndex, item);
					}
				}
			},
			getCheckedList: function (colSeq) {
				var cfg = this.config;
				var collect = [];
				var list = this.list;

				for (var item, itemIndex = 0, __arr = this.list; (itemIndex < __arr.length && (item = __arr[itemIndex])); itemIndex++) {
					if(!item.___disabled) item.___disabled = {};
					if(!item.___checked) item.___checked = {};
					if (item.___disabled[colSeq] != true && item.___checked[colSeq] == true) {
						collect.push(item);
					}
				}

				return collect;
			},
			getCheckedListWithIndex: function (colSeq) {
				var cfg = this.config;
				var collect = [];
				var list = this.list;

				for (var item, itemIndex = 0, __arr = this.list; (itemIndex < __arr.length && (item = __arr[itemIndex])); itemIndex++) {
					if(!item.___disabled) item.___disabled = {};
					if(!item.___checked) item.___checked = {};
					if (item.___disabled[colSeq] != true && item.___checked[colSeq] == true) {
						collect.push({ index: itemIndex, item: item });
					}
				}
				return collect;
			},
			onKeydown: function (event) {
				if (event.keyCode == 67 && event.ctrlKey) {
					/*this.copyData(); */
				}
				if (this.editorOpend) return;

				//trace("onKeydown" + event.keyCode);

				if (event.keyCode == axf.Event.KEY_UP) { /* */
					this.focusMove(-1, event);
				} else if (event.keyCode == axf.Event.KEY_DOWN) { /* */
					this.focusMove(1, event);
				}
			},
			onContextmenu: function (event) {
				var cfg = this.config;

				if (this.readyMoved) return false;

				/* event target search - */
				if (event.target.id == "") return;
				var eid = event.target.id.split(/_AX_/g);
				var eventTarget = event.target;
				if (eventTarget.tagName.toLowerCase() == "input") return;
				/*input 인 경우 제외 */
				var myTarget = this.getEventTarget({
					evt: eventTarget, evtIDs: eid,
					until: function (evt, evtIDs) {
						return (axdom(evt.parentNode).hasClass("gridBodyTr")) ? true : false;
					},
					find: function (evt, evtIDs) {
						return (axdom(evt).hasClass("bodyTd") || axdom(evt).hasClass("bodyNodeIndent")) ? true : false;
					}
				});
				/* event target search ------------------------ */

				if (myTarget) {
					/*colHeadTool ready */
					var targetID = myTarget.id;
					var itemIndex = targetID.split(/_AX_/g).last();
					var ids = targetID.split(/_AX_/g);

					if (this.selectedCells.length > 0) {
						axf.each(this.selectedCells, function () {
							axdom("#" + this).removeClass("selected");
						});
						this.selectedCells.clear();
					}
					if (this.selectedRow.length > 0) {
						var body = this.body;
						axf.each(this.selectedRow, function () {
							body.find(".gridBodyTr_" + this).removeClass("selected");
						});
					}

					this.selectedRow.clear();
					this.body.find(".gridBodyTr_" + itemIndex).addClass("selected");
					this.selectedRow.push(itemIndex);

					var item = this.list[itemIndex];
					AXContextMenu.open({ id: cfg.targetID + "ContextMenu", filter: cfg.contextMenu.filter, sendObj: { item: item, index: itemIndex } }, event);
					/* event 직접 연결 방식 */
				} else {
					AXContextMenu.open({ id: cfg.targetID + "ContextMenu", filter: cfg.contextMenu.filter, sendObj: null }, event);
					/* event 직접 연결 방식 */
				}
				return false;
			},
			copyData: function () {
				var cfg = this.config;
				var copyOut = [];
				axf.each(this.selectedCells, function (index, n) {
					var html = axdom("#" + n).find(".bodyNode").html();
					copyOut.push(html + '\t');
				});

				if (window.clipboardData) {
					window.clipboardData.setData('Text', copyOut.join(''));
					toast.push("데이터가 복사되었습니다. 원하시는 곳에 붙여넣기 하세요.");
				} else {
					dialog.push({ title: "Copy Data", body: copyOut.join(''), type: "alert" });
				}
			},
			/* 공통 영역 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

			/* colHead 영역  */
			getHeadMousePosition: function (event) {
				var pos = this.colHead.offset();
				var x = (event.pageX - pos.left);
				var y = (event.pageY - pos.top);
				return { x: x, y: y };
			},
			getColHeadTd: function (arg) {
				var cfg = this.config;
				var po = [];

				if (arg.ghost) {
					po.push("<td" + arg.valign + arg.rowspan + arg.colspan + " class=\"colHeadTd" + arg.bottomClass + "\">");
					po.push("<div class=\"tdRelBlock\">");
					po.push("<div class=\"colHeadNode colHeadTdText\">&nbsp;</div>");
					po.push("</div>");
					po.push("</td>");
				} else {

					var colHeadTdText = " colHeadTdText";
					var toolUse = true;

					if (arg.formatter == "html" || arg.formatter == "checkbox") {
						if (!arg.displayLabel) {
							colHeadTdText = " colHeadTdHtml";
							toolUse = false;
							if (arg.formatter == "checkbox") {
								colHeadTdText = " colHeadTdCheck";
								arg.tdHtml = "<label>" +
									"<input type=\"checkbox\" name=\"checkAll\" class=\"gridCheckBox gridCheckBox_colHead_colSeq" + arg.colSeq + "\" id=\"" + cfg.targetID + "_AX_checkAll_AX_" + arg.r + "_AX_" + arg.CHidx + "\" />" +
									(arg.formatterLabel || "") +
									"</label>";
							}
						}
					}

					var sortClass = "";
					if (arg.sort) sortClass = (arg.sort == "desc") ? " sortDesc" : " sortAsc";

					po.push("<td" + arg.valign + arg.rowspan + arg.colspan + " id=\"" + cfg.targetID + "_AX_colHead_AX_" + arg.r + "_AX_" + arg.CHidx + "\" class=\"colHeadTd" + arg.bottomClass + sortClass + "\">");
					po.push("<div class=\"tdRelBlock\">");
					po.push("<div class=\"colHeadNode" + colHeadTdText + "\" align=\"" + arg.align + "\" id=\"" + cfg.targetID + "_AX_colHeadText_AX_" + arg.r + "_AX_" + arg.CHidx + "\">");
					po.push(arg.tdHtml);
					po.push("</div>");
					if (toolUse && arg.colSeq != null && arg.colSeq != undefined) po.push("<a href=\"#AXexec\" class=\"colHeadTool\" id=\"" + cfg.targetID + "_AX_colHeadTool_AX_" + arg.r + "_AX_" + arg.CHidx + "\">T</a>");
					po.push("<div class=\"colHeadResizer\" id=\"" + cfg.targetID + "_AX_colHeadResizer_AX_" + arg.r + "_AX_" + arg.CHidx + "\"></div>");
					po.push("</div>");
					po.push("</td>");

					if (arg.sort) {
						var myColHead = cfg.colHead.rows[arg.r][arg.CHidx];
						var tdID = cfg.targetID + "_AX_colHead_AX_" + arg.r + "_AX_" + arg.CHidx;

						this.nowSortHeadID = tdID;
						this.nowSortHeadObj = myColHead;
					}

				}
				return po.join('');
			},
			setColHead: function () {
				var cfg = this.config;
				var po = [];

				if (cfg.viewMode == "grid") {
					this.colHead.show();
					var getColHeadTd = this.getColHeadTd.bind(this);

					//trace(cfg.colHead.rows);

					if (!this.hasFixed) {  /* 일반 colHead 구현 */

						var tableWidth = this.colWidth;
						po.push("<table cellpadding=\"0\" cellspacing=\"0\" class=\"colHeadTable\" style=\"width:", tableWidth, "px;\">");
						po.push(this.getColGroup("CH"));
						/*colGroup 삽입 */
						po.push("<tbody>");
						for (var r = 0; r < cfg.colHead.rows.length; r++) {
							var isLastTR = (cfg.colHead.rows.length - 1 == r);
							po.push("<tr>");
							for (var CH, CHidx = 0, __arr = cfg.colHead.rows[r]; (CHidx < __arr.length && (CH = __arr[CHidx])); CHidx++) {
								if (CH.display && CH.colspan > 0) {
									/*radio, check exception */
									var tdHtml = CH.label || "untitle";
									var rowspan = (CH.rowspan > 1) ? " rowspan=\"" + CH.rowspan + "\"" : "";
									var colspan = (CH.colspan > 1) ? " colspan=\"" + CH.colspan + "\"" : "";
									var valign = " valign=\"" + CH.valign + "\"";
									var bottomClass = (CH.isLastCell) ? "" : " colHeadBottomBorder";

									po.push(getColHeadTd({
										valign: valign, rowspan: rowspan, colspan: colspan, bottomClass: bottomClass, r: r, CHidx: CHidx,
										align: CH.align, colSeq: CH.colSeq, formatter: CH.formatter, formatterLabel: CH.formatterLabel, sort: CH.sort, tdHtml: tdHtml,
										ghost: false, displayLabel: CH.displayLabel
									}));
								}
							}
							po.push("</tr>");
						}
						po.push("</tbody>");
						po.push("</table>");

					} else { /* fixedCol 구현 */

						po.push("<table cellpadding=\"0\" cellspacing=\"0\" class=\"colHeadTable\" style=\"width:" + this.colWidth + "px;\">");
						po.push(this.getColGroup("CH"));
						/*colGroup 삽입 */
						po.push("<tbody>");
						for (var r = 0; r < cfg.colHead.rows.length; r++) {
							var isLastTR = (cfg.colHead.rows.length - 1 == r);
							po.push("<tr>");
							var colCount = 0;
							axf.each(cfg.colHead.rows[r], function (CHidx, CH) {
								if (CH.display && CH.colspan > 0) {
									/*radio, check exception */
									var tdHtml = CH.label || "untitle";
									var rowspan = (CH.rowspan > 1) ? " rowspan=\"" + CH.rowspan + "\"" : "";
									var colspan = (CH.colspan > 1) ? " colspan=\"" + CH.colspan + "\"" : "";
									var valign = " valign=\"" + CH.valign + "\"";
									var bottomClass = (CH.isLastCell) ? "" : " colHeadBottomBorder";

									po.push(getColHeadTd({
										valign: valign, rowspan: rowspan, colspan: colspan, bottomClass: bottomClass, r: r, CHidx: CHidx,
										align: CH.align, colSeq: CH.colSeq, formatter: CH.formatter, sort: CH.sort, tdHtml: tdHtml,
										ghost: (colCount < (cfg.fixedColSeq + 1))
									}));

									colCount += CH.colspan;
								}
							});
							po.push("</tr>");
						}
						po.push("</tbody>");
						po.push("</table>");

						var fpo = [];
						fpo.push("<div class=\"AXGridColHead fixedColHead\" id=\"" + cfg.targetID + "_AX_fixedColHead\" style=\"width:" + this.fixedColWidth + "px;\">");
						fpo.push("<table cellpadding=\"0\" cellspacing=\"0\" class=\"colHeadTable\" style=\"width:" + this.fixedColWidth + "px;\">");
						fpo.push(this.getColGroup("FC"));
						/*colGroup 삽입 */
						fpo.push("<tbody>");
						for (var r = 0; r < cfg.colHead.rows.length; r++) {
							var isLastTR = (cfg.colHead.rows.length - 1 == r);
							fpo.push("<tr>");
							var colCount = 0;
							axf.each(cfg.colHead.rows[r], function (CHidx, CH) {
								if (CH.display && CH.isFixedCell && CH.colspan > 0) {
									/*trace({CHidx:CHidx, fixedColSeq:(cfg.fixedColSeq+1)}); */
									/*radio, check exception */
									var tdHtml = CH.label || "untitle";
									var rowspan = (CH.rowspan > 1) ? " rowspan=\"" + CH.rowspan + "\"" : "";
									var colspan = (CH.colspan > 1) ? " colspan=\"" + CH.colspan + "\"" : "";
									var valign = " valign=\"" + CH.valign + "\"";
									var bottomClass = (CH.isLastCell) ? "" : " colHeadBottomBorder";

									fpo.push(getColHeadTd({
										valign: valign, rowspan: rowspan, colspan: colspan, bottomClass: bottomClass, r: r, CHidx: CHidx,
										align: CH.align, colSeq: CH.colSeq, formatter: CH.formatter, formatterLabel: CH.formatterLabel, sort: CH.sort, tdHtml: tdHtml,
										ghost: false
									}));
								}
								colCount += CH.colspan;
							});
							fpo.push("</tr>");
						}
						fpo.push("</tbody>");
						fpo.push("</table>");
						fpo.push("</div>");
					}
					/* fixedCol 구현 */

					this.colHead.html(po.join(''));
					axdom("#" + cfg.targetID + "_AX_fixedColHead").remove();
					if (fpo) this.colHead.after(fpo.join(''));

					/*resizer 를 찾아 resizer의 부모와 같은 높이값을 가지도록 변경 합니다. */
					/*또 그와 관련된 개체의 높이와 패딩을 지정합니다. */
					this.colHead.find(".colHeadResizer").each(function () {
						var resizerID = this.id;
						var tdID = resizerID.replace("colHeadResizer", "colHead");
						var txtID = resizerID.replace("colHeadResizer", "colHeadText");
						var toolID = resizerID.replace("colHeadResizer", "colHeadTool");
						var rowspan = axdom("#" + tdID).attr("rowspan");
						var valign = axdom("#" + tdID).attr("valign");
						if (!rowspan) rowspan = 1;
						var tdHeight = axdom("#" + tdID).height();
						axdom(this).css({ height: tdHeight });
						axdom(this).parent().css({ height: tdHeight });
						if (rowspan > 1) {
							var cellMarginTop = 0;
							if (valign == "bottom") cellMarginTop = (tdHeight - axdom("#" + txtID).outerHeight()) + 5;
							if (valign == "middle") cellMarginTop = (tdHeight - axdom("#" + txtID).outerHeight()) / 2 + 5;
							axdom("#" + txtID).css({ "padding-top": cellMarginTop + "px" });
							axdom("#" + toolID).css({ "top": (cellMarginTop - 5) + "px" });
						}
					});

					this.colHead.bind("mouseover", this.colHeadMouseOver.bind(this));
					this.colHead.bind("mouseout", this.colHeadMouseOut.bind(this));
					this.colHead.find(".colHeadNode").bind("click", this.colHeadNodeClick.bind(this));
					this.colHead.find(".colHeadTool").bind("click", this.colHeadToolClick.bind(this));
					this.colHead.find(".colHeadResizer").bind("mousedown", this.colHeadResizerMouseDown.bind(this));
					this.colHead.find(".gridCheckBox").bind("click", this.colHeadCheckBoxClick.bind(this));

					if (this.hasFixed) { /*fixedColHead에 대한 바인딩 및 처리 */
						this.fixedColHead = axdom("#" + cfg.targetID + "_AX_fixedColHead");

						this.fixedColHead.find(".colHeadResizer").each(function () {
							var resizerID = this.id;
							var tdID = resizerID.replace("colHeadResizer", "colHead");
							var txtID = resizerID.replace("colHeadResizer", "colHeadText");
							var toolID = resizerID.replace("colHeadResizer", "colHeadTool");
							var rowspan = axdom("#" + tdID).attr("rowspan");
							var valign = axdom("#" + tdID).attr("valign");
							if (!rowspan) rowspan = 1;
							var tdHeight = axdom("#" + tdID).height();
							axdom(this).css({ height: tdHeight });
							axdom(this).parent().css({ height: tdHeight });
							if (rowspan > 1) {
								var cellMarginTop = 0;
								if (valign == "bottom") cellMarginTop = (tdHeight - axdom("#" + txtID).outerHeight()) + 5;
								if (valign == "middle") cellMarginTop = (tdHeight - axdom("#" + txtID).outerHeight()) / 2 + 5;
								axdom("#" + txtID).css({ "padding-top": cellMarginTop + "px" });
								axdom("#" + toolID).css({ "top": (cellMarginTop - 5) + "px" });
							}
						});

						this.fixedColHead.bind("mouseover", this.colHeadMouseOver.bind(this));
						this.fixedColHead.bind("mouseout", this.colHeadMouseOut.bind(this));
						this.fixedColHead.find(".colHeadNode").bind("click", this.colHeadNodeClick.bind(this));
						this.fixedColHead.find(".colHeadTool").bind("click", this.colHeadToolClick.bind(this));
						this.fixedColHead.find(".colHeadResizer").bind("mousedown", this.colHeadResizerMouseDown.bind(this));
						this.fixedColHead.find(".gridCheckBox").bind("click", this.colHeadCheckBoxClick.bind(this));
					}
				} else if (cfg.viewMode == "icon") {
					this.colHead.empty();
					this.colHead.hide();
				} else if (cfg.viewMode == "mobile") { /* 모바일에서는 헤드 제거 또는 모바일용 헤드 재구성 */
					this.colHead.empty();
					this.colHead.hide();
				}
			},
			/* colHead events */
			colHeadMouseOver: function (event) {
				var cfg = this.config;
				/* event target search - */
				if (event.target.id == "") return;
				var eid = event.target.id.split(/_AX_/g);
				var eventTarget = event.target;
				var myTarget = this.getEventTarget({
					evt: eventTarget, evtIDs: eid,
					until: function (evt, evtIDs) {
						return (axdom(evt.parentNode).hasClass("AXGridColHead")) ? true : false;
					},
					find: function (evt, evtIDs) {
						return (axdom(evt).hasClass("colHeadTd")) ? true : false;
					}
				});
				/* event target search ------------------------ */

				if (myTarget) {
					/*colHeadTool ready */
					var targetID = myTarget.id;
					var toolID = targetID.replace("colHead", "colHeadTool");
					axdom("#" + toolID).addClass("readyTool");
				}
			},
			colHeadMouseOut: function (event) {
				var cfg = this.config;
				/* event target search - */
				if (event.target.id == "") return;
				var eid = event.target.id.split(/_AX_/g);
				var eventTarget = event.target;
				var myTarget = this.getEventTarget({
					evt: eventTarget, evtIDs: eid,
					until: function (evt, evtIDs) {
						return (axdom(evt.parentNode).hasClass("AXGridColHead")) ? true : false;
					},
					find: function (evt, evtIDs) {
						return (axdom(evt).hasClass("colHeadTd")) ? true : false;
					}
				});
				/* event target search ------------------------ */

				if (myTarget) {
					/*colHeadTool unready */
					var targetID = myTarget.id;
					var toolID = targetID.replace("colHead", "colHeadTool");
					axdom("#" + toolID).removeClass("readyTool");
				}
			},
			colHeadResizerMouseDown: function (event) {
				var cfg = this.config;
				if (event.target.id == "") return;
				var eid = event.target.id.split(/_AX_/g);
				var eventTarget = event.target;
				var lastIdx = eid.length - 1;
				var colHeadR = eid[lastIdx - 1];
				var colHeadC = eid[lastIdx];

				/*trace({colHeadR:colHeadR, colHeadC:colHeadC}); */

				var colSeq = this.getColSeqToHead(colHeadR, colHeadC);
				if (colSeq == null) return;
				/* 예상할 수 없는 오류 */
				/*resize 상태 해제 */
				if (this.colResizing) {
					this.colHeadResizerEnd();
				}
				var offset = axdom("#" + cfg.targetID + "_AX_colHead_AX_" + colHeadR + "_AX_" + colHeadC).find(".tdRelBlock").position();
				var relBlockWidth = axdom("#" + cfg.targetID + "_AX_colHead_AX_" + colHeadR + "_AX_" + colHeadC).find(".tdRelBlock").width();
				var rightPosition = offset.left.number() + relBlockWidth.number();
				var blockWidth = axdom("#" + cfg.targetID + "_AX_col_AX_" + colSeq + "_AX_CH").attr("width");
				this.colResizeTarget = { colSeq: colSeq, leftPosition: (rightPosition - blockWidth), blockWidth: blockWidth, newWidth: blockWidth };
				/*trace(this.colResizeTarget); */

				/* resize event bind */
				var colHeadResizerMouseMove = this.colHeadResizerMouseMove.bind(this);
				this.colHeadResizerMouseMoveBind = function (event) {
					colHeadResizerMouseMove(event);
				};
				var colHeadResizerMouseUp = this.colHeadResizerMouseUp.bind(this);
				this.colHeadResizerMouseUpBind = function (event) {
					colHeadResizerMouseUp(event);
				};
				axdom(document.body).bind("mousemove.AXGrid", this.colHeadResizerMouseMoveBind);
				axdom(document.body).bind("mouseup.AXGrid", this.colHeadResizerMouseUpBind);
				axdom(document.body).bind("mouseleave.AXGrid", this.colHeadResizerMouseUpBind);

				axdom(document.body).attr("onselectstart", "return false");
				axdom(document.body).addClass("AXUserSelectNone");
				/* resize event bind ~~~~~~~~~~~~~~~~~~~ */
			},
			colHeadResizerMouseMove: function (event) {
				if (!event.pageX) return;
				/*드래그 감도 적용 */
				if (this.config.moveSens > this.moveSens) this.moveSens++;
				if (this.moveSens == this.config.moveSens) this.colHeadResizerMove(event);
			},
			colHeadResizerMove: function (event) {
				var cfg = this.config;
				var mouse = this.getHeadMousePosition(event);
				var newWidth = (this.colResizeTarget.leftPosition - mouse.x).abs();
				if (newWidth < 31) return;
				/* colHead/colBody colGroup width 조정 */
				axdom("#" + cfg.targetID + "_AX_col_AX_" + this.colResizeTarget.colSeq + "_AX_CH").attr("width", newWidth);
				axdom("#" + cfg.targetID + "_AX_col_AX_" + this.colResizeTarget.colSeq + "_AX_CB").attr("width", newWidth);
				axdom("#" + cfg.targetID + "_AX_col_AX_" + this.colResizeTarget.colSeq + "_AX_EB").attr("width", newWidth);

				cfg.colGroup[this.colResizeTarget.colSeq].width = newWidth;
				if (!cfg.colGroup[this.colResizeTarget.colSeq].widthAstric) {
					cfg.colGroup[this.colResizeTarget.colSeq]._owidth = newWidth;
				}

				if (this.hasFixed) {
					var fixedColSeq = this.fixedColSeq;

					axdom("#" + cfg.targetID + "_AX_col_AX_" + this.colResizeTarget.colSeq + "_AX_FC").attr("width", newWidth);
					axdom("#" + cfg.targetID + "_AX_col_AX_" + this.colResizeTarget.colSeq + "_AX_FB").attr("width", newWidth);
					axdom("#" + cfg.targetID + "_AX_col_AX_" + this.colResizeTarget.colSeq + "_AX_FE").attr("width", newWidth);

					/*if(this.colResizeTarget.colSeq < fixedColSeq+1){ */

					var fixedColWidth = 0;
					for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
						if (CG.display && cidx < (fixedColSeq + 1)) {
							fixedColWidth += CG.width.number();
						}
					}

					this.fixedColWidth = fixedColWidth;

					axdom("#" + cfg.targetID + "_AX_fixedColHead").css({ width: fixedColWidth });
					axdom("#" + cfg.targetID + "_AX_fixedColHead").find(".colHeadTable").css({ width: fixedColWidth });
					this.fixedScrollContent.css({ width: fixedColWidth });
					this.fixedScrollContent.find(".gridFixedBodyTable").css({ width: fixedColWidth });
					axdom("#" + cfg.targetID + "_AX_fixedEditorContent").css({ width: fixedColWidth });
					axdom("#" + cfg.targetID + "_AX_fixedEditorContent").find(".gridFixedBodyTable").css({ width: fixedColWidth });
					/*} */

				}

				if (this.editorOpend) {
					var colSeq = this.colResizeTarget.colSeq;
					/* */
					for (var _m = 0; _m < cfg.editor._maps.length; _m++) {
						var rc = cfg.editor._maps[_m][colSeq];
						var CH = cfg.editor.rows[rc.r][rc.c];
						var formID = (CH.form.id) ? CH.form.id : cfg.targetID + "_AX_" + CH.key + "_AX_" + rc.r + "_AX_" + rc.c;
						/*trace(formID); */
						if (axf.getId(formID)) if (axf.getId(formID).tagName == "INPUT") AXInput.alignAnchor(formID);
					}
				}


				/* colHead colGroup width 조정 ------------------------------ */
				this.colResizeTarget.newWidth = newWidth;
				var newColWidth = this.colWidth - (this.colResizeTarget.blockWidth - this.colResizeTarget.newWidth);
				this.colHead.find(".colHeadTable").css({ "width": newColWidth + "px" });
				/*this.body.find(".gridBodyTable").css({"width":newColWidth+"px"}); */
			},
			colHeadResizerMouseUp: function (event) {
				if (this.colResizeTarget.blockWidth != this.colResizeTarget.newWidth) {
					this.colWidth = this.colWidth - (this.colResizeTarget.blockWidth - this.colResizeTarget.newWidth);
				}
				this.colHeadResizerEnd();
				this.contentScrollResize(false);
			},
			colHeadResizerEnd: function () {
				this.moveSens = 0;
				this.colResizing = false;
				axdom(document.body).unbind("mousemove.AXGrid");
				axdom(document.body).unbind("mouseup.AXGrid");
				axdom(document.body).unbind("mouseleave.AXGrid");

				axdom(document.body).removeAttr("onselectstart");
				axdom(document.body).removeClass("AXUserSelectNone");
			},
			colHeadNodeClick: function (event) {
				var cfg = this.config;
				if (event.target.id == "") return;
				var eid = event.target.id.split(/_AX_/g);
				var eventTarget = event.target;

				if (this.editorOpend) {
					toast.push("Editor 활성화 상태에서는 기능을 사용할 수 없습니다.");
					return;
					/* 에디터가 오픈된 상태이면 비활성화 */
				}

				if (axdom(eventTarget).hasClass("colHeadTdCheck")) {
					this.colHeadCheckBoxClick(event);
					return;
					/* checkbox block click */
				}
				if (axdom(eventTarget).hasClass("gridCheckBox")) return;
				/* checkbox click */

				var lastIdx = eid.length - 1;
				var colHeadR = eid[lastIdx - 1];
				var colHeadC = eid[lastIdx];

				try {
					var myColHead = cfg.colHead.rows[colHeadR][colHeadC];
				} catch (e) {
					return;
				}

				if (myColHead.sort == false) {
					return;
				}

				var tdID = cfg.targetID + "_AX_colHead_AX_" + colHeadR + "_AX_" + colHeadC;

				if (myColHead.colSeq == undefined || myColHead.colSeq == null) {
					trace("정렬할 수 없는 컬럼 입니다.");
				} else {
					if (this.nowSortHeadID) {
						if (this.nowSortHeadID != tdID) {
							axdom("#" + this.nowSortHeadID).removeClass("sortDesc");
							axdom("#" + this.nowSortHeadID).removeClass("sortAsc");
							this.nowSortHeadObj.sort = undefined;
						}
					}
					if (cfg.colHead.rows[colHeadR][colHeadC].sort == "desc") axdom("#" + tdID).removeClass("sortDesc");
					else axdom("#" + tdID).removeClass("sortAsc");

					var nsort = "";
					if (myColHead.sort == "desc") nsort = "asc";
					else nsort = "desc";
					cfg.colHead.rows[colHeadR][colHeadC].sort = nsort;
					//trace(colHeadR, colHeadC,  cfg.colHead.rows[colHeadR][colHeadC].sort);
					//sort 처리하기
					if (nsort == "desc") {
						axdom("#" + tdID).addClass("sortDesc");
					} else {
						axdom("#" + tdID).addClass("sortAsc");
					}

					this.list = this.sortList(nsort, myColHead, this.list);
					this.printList();

					this.nowSortHeadID = tdID;
					this.nowSortHeadObj = myColHead;
				}

				if (cfg.colHead.onclick) { /* onclick bind */
					var sendObj = {
						index: null,
						r: colHeadR,
						c: colHeadC,
						list: this.list,
						colHead: myColHead,
						page: this.page
					};
					cfg.colHead.onclick.call(sendObj);
				}

			},
			colHeadToolClick: function (event) {
				var cfg = this.config;
				if (event.target.id == "") return;
				var eid = event.target.id.split(/_AX_/g);
				var eventTarget = event.target;

				if (this.editorOpend) {
					toast.push("Editor 활성화 상태에서는 기능을 사용할 수 없습니다.");
					return;
					//에디터가 오픈된 상태이면 비활성화
				}

				var lastIdx = eid.length - 1;
				var colHeadR = eid[lastIdx - 1];
				var colHeadC = eid[lastIdx];
				var myColHead = cfg.colHead.rows[colHeadR][colHeadC];

				axdom("#" + cfg.targetID + "_AX_colHeadMenu").remove();

				var po = [];
				po.push("<div id=\"" + cfg.targetID + "_AX_colHeadMenu\" class=\"AXGridColGroupListBox\">");
				for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
					var addClass = (CG.display) ? " on" : "";
					var lastClass = (cidx == cfg.colGroup.length - 1) ? " last" : "";
					po.push("<a href=\"#AXexec\" class=\"AXGridColGroupListBoxItem" + addClass + lastClass + "\" id=\"" + cfg.targetID + "_AX_colHeadMenu_AX_" + CG.colSeq + "\">");
					po.push(CG.label);
					po.push("</a>");
				}

				po.push("</div>");
				axdom(document.body).append(po.join(''));

				var offset = axdom(eventTarget).offset();
				var css = {};
				css.top = offset.top - 5;
				css.left = offset.left - 20;
				axdom("#" + cfg.targetID + "_AX_colHeadMenu").css(css);

				/* colGroup click event bind */
				var colGroupListClick = this.colGroupListClick.bind(this);
				this.colGroupListClickBind = function (event) {
					colGroupListClick(event);
				};
				axdom(document).bind("click", this.colGroupListClickBind);
				axdom(document).bind("keydown", this.colGroupListClickBind);
				/* colGroup click bind ~~~~~~~~~~~~~~~~~~~ */
			},
			colGroupListClick: function (event) {
				var cfg = this.config;

				if (event.keyCode == AXUtil.Event.KEY_ESC) {
					axdom("#" + cfg.targetID + "_AX_colHeadMenu").remove();
					axdom(document).unbind("keydown", this.colGroupListClickBind);
					axdom(document).unbind("click", this.colGroupListClickBind);
					return;
				}

				// event target search
				if (event.target.id == "") return;
				var eid = event.target.id.split(/_AX_/g);
				var eventTarget = event.target;
				var myTarget = this.getEventTarget({
					evt: eventTarget, evtIDs: eid,
					find: function (evt, evtIDs) {
						return (axdom(evt).hasClass("AXGridColGroupListBoxItem") || axdom(evt).hasClass("colHeadTool")) ? true : false;
					}
				});

				if (myTarget) {
					if (axdom(myTarget).hasClass("colHeadTool")) return;
					//colHeadTool ready
					var targetID = myTarget.id;
					var colSeq = targetID.split(/_AX_/g).last();
					if (cfg.colGroup[colSeq].display) {
						cfg.colGroup[colSeq].display = false;
						axdom("#" + targetID).removeClass("on");
					} else {
						cfg.colGroup[colSeq].display = true;
						axdom("#" + targetID).addClass("on");
					}
					//redraw grid
					this.redrawGrid("");

				} else {
					axdom("#" + cfg.targetID + "_AX_colHeadMenu").remove();
					axdom(document).unbind("keydown", this.colGroupListClickBind);
					axdom(document).unbind("click", this.colGroupListClickBind);
				}
			},
			colHeadCheckBoxClick: function (event) {
				var cfg = this.config;
				if (event.target.id == "") return;
				var eid = event.target.id.split(/_AX_/g);
				var eventTarget = event.target;

				if (axdom(eventTarget).hasClass("colHeadTdCheck")) {
					eventTarget = axdom(eventTarget).find("input").get(0);
					eventTarget.checked = !eventTarget.checked;
				}
				var lastIdx = eid.length - 1;
				var colHeadR = eid[lastIdx - 1];
				var colHeadC = eid[lastIdx];
				var myColHead = cfg.colHead.rows[colHeadR][colHeadC];

				this.checkedColSeq(myColHead.colSeq, eventTarget.checked);
			},
			/* colHead events ~~~~~~~~~~~~~~~~~*/
			/* colHead 영역  ~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

			/* body 영역 */
			needBindDBLClick: function () {
				return ((axf.browser.name == "ie") && (axf.docTD === "Q" || axf.browser.version < 9));
			},
			sortList: function (nsort, myColHead, list) {
				var cfg = this.config;
				var _this = this;
				var getValueForSort = function (item, itemIndex) {
					if (myColHead.formatter) {
						var result;
						if (myColHead.formatter == "money") {
							result = item[myColHead.key];
						} else if (myColHead.formatter == "dec") {
							result = (item[myColHead.key] == undefined) ? "" : item[myColHead.key].dec();
						} else if (myColHead.formatter == "html") {
							result = item[myColHead.key];
						} else if (myColHead.formatter == "checkbox" || myColHead.formatter == "radio") {
							result = item[myColHead.key];
						} else {
							var sendObj = {
								index: itemIndex,
								list: list,
								item: item,
								page: _this.page,
								value: item[myColHead.key]
							};
							result = myColHead.formatter.call(sendObj, itemIndex, item);
							//result 값이 money 형식인지 체크 합니다.
							var moneyCheck = (Object.isString(result)) ? result.replace(/,/g, "") : result;
							if (axdom.isNumeric(moneyCheck)) result = result.number();
						}
						return result;
					} else {
						return item[myColHead.key];
					}
				};

				if (nsort == "desc") {
					var listIndex = 0;
					list = list.sort(function (prevItem, nowItem) {
						var v1 = getValueForSort(prevItem, listIndex);
						var v2 = getValueForSort(nowItem, listIndex);
						listIndex++;
						if (v1 < v2) return 1;
						else if (v1 > v2) return -1;
						else if (v1 == v2) return 0;
					});
				} else {
					var listIndex = 0;
					list = list.sort(function (prevItem, nowItem) {
						var v1 = getValueForSort(prevItem, listIndex);
						var v2 = getValueForSort(nowItem, listIndex);
						listIndex++;
						if (v1 < v2) return -1;
						else if (v1 > v2) return 1;
						else if (v1 == v2) return 0;
					});
				}

				return list;
			},
			setBody: function (list, rewrite) {
				var cfg = this.config;
				if (list) {
					this.list = list;
				}
				var po = [];
				po.push("<div id=\"" + cfg.targetID + "_AX_scrollContent\" class=\"gridScrollContent\">");
				if (cfg.viewMode == "grid") {
					po.push("<table cellpadding=\"0\" cellspacing=\"0\" class=\"gridBodyTable\"  id=\"" + cfg.targetID + "_AX_gridBodyTable\">");
					po.push(this.getColGroup("CB"));
					/*colGroup 삽입 */
					po.push("<thead id=\"" + cfg.targetID + "_AX_thead\"></thead>");
					po.push("<tbody id=\"" + cfg.targetID + "_AX_hpadding\"><tr class='thpadding'><td colspan=\"" + (this.showColLen.number()+1) + "\"></td></tr></tbody>");
					po.push("<tbody id=\"" + cfg.targetID + "_AX_tbody\">");
					po.push("<tr class=\"noListTr\">");
					po.push("<td colspan=\"" + (this.showColLen) + "\">");
					po.push("<div class=\"tdRelBlock\">");
					po.push("<div class=\"bodyNode bodyTdText\" align=\"center\">");
					po.push(cfg.emptyListMSG);
					po.push("</div>");
					po.push("</div>");
					po.push("</td>");
					po.push("<td class=\"bodyNullTd\"><div class=\"tdRelBlock\">&nbsp;</div></td>");
					po.push("</tr>");
					po.push("</tbody>");
					po.push("<tbody id=\"" + cfg.targetID + "_AX_fpadding\"><tr class='tfpadding'><td colspan=\"" + (this.showColLen.number()+1) + "\"></td></tr></tbody>");
					po.push("<tfoot id=\"" + cfg.targetID + "_AX_tfoot\"></tfoot>");
					po.push("</table>");
				} else if (cfg.viewMode == "icon") {
					po.push("<div class=\"gridBodyDiv\" id=\"" + cfg.targetID + "_AX_gridBodyDiv\"></div>");
				} else if (cfg.viewMode == "mobile") {
					po.push("<div class=\"gridBodyDiv\" id=\"" + cfg.targetID + "_AX_gridBodyDiv\"></div>");
				}
				po.push("</div>");

				if (cfg.viewMode == "grid" && this.hasFixed && ((rewrite && this.list.length > 0) || !rewrite)) {
					po.push("<div id=\"" + cfg.targetID + "_AX_fixedScrollContent\" class=\"gridFixedScrollContent\" style=\"width:" + this.fixedColWidth + "px;\">");
					po.push("<table cellpadding=\"0\" cellspacing=\"0\" class=\"gridFixedBodyTable\" style=\"width:" + this.fixedColWidth + "px;\">");
					po.push(this.getColGroup("FB"));
					/*colGroup 삽입 */
					po.push("<thead id=\"" + cfg.targetID + "_AX_fixedThead\"></thead>");
					po.push("<tbody id=\"" + cfg.targetID + "_AX_fhpadding\"><tr class='thpadding'><td colspan=\"" + (this.showFixedColLen) + "\"></td></tr></tbody>");
					po.push("<tbody id=\"" + cfg.targetID + "_AX_fixedTbody\">");
					po.push("<tr class=\"noListTr\">");
					po.push("<td colspan=\"" + (this.showFixedColLen) + "\"></td>");
					po.push("</tr>");
					po.push("</tbody>");
					po.push("<tbody id=\"" + cfg.targetID + "_AX_ffpadding\"><tr class='tfpadding'><td colspan=\"" + (this.showFixedColLen) + "\"></td></tr></tbody>");
					po.push("<tfoot id=\"" + cfg.targetID + "_AX_fixedTfoot\"></tfoot>");
					po.push("</table>");
					po.push("</div>");
				}

				if (cfg.viewMode == "grid" || cfg.viewMode == "icon") {
					//po.push("<div id=\"" + cfg.targetID + "_AX_scrollTrackXY\" class=\"gridScrollTrackXY\"></div>");
					po.push("<div id=\"" + cfg.targetID + "_AX_scrollTrackY\" class=\"gridScrollTrackY\">");
					po.push("<div id=\"" + cfg.targetID + "_AX_scrollYHandle\" class=\"gridScrollHandle\"></div>");
					po.push("<div id=\"" + cfg.targetID + "_AX_scrollY_AX_tip\" class=\"gridScroll-tip\"><span></span></div>");
					po.push("</div>");
					po.push("<div id=\"" + cfg.targetID + "_AX_scrollTrackX\" class=\"gridScrollTrackX\"><div id=\"" + cfg.targetID + "_AX_scrollXHandle\" class=\"gridScrollHandle\"></div></div>");
				}
				this.body.html(po.join(''));

				this.scrollContent = axdom("#" + cfg.targetID + "_AX_scrollContent");

				// tbody, fixedTbody dom cached
				if(cfg.viewMode == "grid"){
					// TODO: this.cachedDom.tbody, this.cachedDom.fixed_tbody, this.cachedDom.thpadding, this.cachedDom.tfpadding 윗마진 아래마진
					this.cachedDom.tbody = axdom("#" + cfg.targetID + "_AX_tbody");
					if(this.hasFixed) this.cachedDom.fixed_tbody = axdom("#" + cfg.targetID + "_AX_fixedTbody");
					this.cachedDom.thpadding = axdom("#" + cfg.targetID + "_AX_hpadding").find("td");
					this.cachedDom.tfpadding = axdom("#" + cfg.targetID + "_AX_fpadding").find("td");
					if(this.hasFixed){
						this.cachedDom.fthpadding = axdom("#" + cfg.targetID + "_AX_fhpadding").find("td");
						this.cachedDom.ftfpadding = axdom("#" + cfg.targetID + "_AX_ffpadding").find("td");
					}
				}

				this.fixedScrollContent = axdom("#" + cfg.targetID + "_AX_fixedScrollContent");
				//this.scrollTrackXY = axdom("#" + cfg.targetID + "_AX_scrollTrackXY");
				this.scrollTrackY = axdom("#" + cfg.targetID + "_AX_scrollTrackY");
				this.scrollYHandle = axdom("#" + cfg.targetID + "_AX_scrollYHandle");
				this.scrollYTip = axdom("#" + cfg.targetID + "_AX_scrollY_AX_tip");
				this.scrollYTipSpan = axdom("#" + cfg.targetID + "_AX_scrollY_AX_tip").find("span");
				this.scrollTrackX = axdom("#" + cfg.targetID + "_AX_scrollTrackX");
				this.scrollXHandle = axdom("#" + cfg.targetID + "_AX_scrollXHandle");
				cfg.scrollContentBottomMargin = this.scrollTrackX.outerHeight() + 2;

				if (this.list.length > 0) {
					var _this = this;
					if(list == undefined){
						_this.setList(_this.list);
					}else{
						setTimeout(function(){
							_this.setList(_this.list);
						}, 100);
					}
				}

				if (cfg.viewMode == "grid" || cfg.viewMode == "icon") {
					/* scroll event bind */
					// TODO : bind scroll tip
					this.scrollYHandle.unbind("mouseover").bind("mouseover", this.contentScrollTipOver.bind(this));
					this.scrollYHandle.unbind("mousedown").bind("mousedown", this.contentScrollScrollReady.bind(this));
					this.scrollXHandle.unbind("mousedown").bind("mousedown", this.contentScrollScrollReady.bind(this));
					/* scroll event bind ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
				}
			},
			listLoadingDisplay: function () {
				var cfg = this.config;
				var po = [];

				if (cfg.viewMode != "mobile") {
					po.push("<tr class=\"noListTr\">");
					po.push("<td colspan=\"" + (this.showColLen) + "\">");
					po.push("<div class=\"tdRelBlock\">");
					po.push("<div class=\"bodyNode bodyTdText\" align=\"center\">");
					po.push("	<div class=\"AXLoading\"></div>");
					po.push("</div>");
					po.push("</div>");
					po.push("</td>");
					po.push("<td class=\"bodyNullTd\"><div class=\"tdRelBlock\">&nbsp;</div></td>");
					po.push("</tr>");
					axdom("#" + cfg.targetID + "_AX_tbody").html(po.join(''));
					po = [];
					po.push("<tr class=\"noListTr\">");
					po.push("<td colspan=\"" + (this.showColLen) + "\">");
					po.push("</td>");
					po.push("</tr>");
					axdom("#" + cfg.targetID + "_AX_fixedTbody").html(po.join(''));
				} else {
					if (cfg.viewMode == "grid") {
						this.scrollContent.css({ top: 0 });
						this.contentScrollContentSync({ top: 0 });
					}
					po.push("	<div class=\"AXLoading\"></div>");
					axdom("#" + cfg.targetID + "_AX_gridBodyDiv").empty();
					axdom("#" + cfg.targetID + "_AX_gridBodyDiv").append(po.join(''));
				}
			},
			/**
			 * @method AXGrid.setList
			 * @param obj {JSObject}
			 * @param sortDisable
			 * @param rewrite
			 * @param exts
			 * @returns null
			 * @description 그리드에 데이터를 선언하거나 AJAX url 속성을 정의합니다.
			 * @example
			 ```
			 // Array
			 myGrid.setList({Array});

			 // AJAX url 속성
			 myGrid.setList({
	//method :
	//contentType :
	//responseType :
	//dataType :
	//headers :
	//debug :
	//ajaxUrl :
	//ajaxPars :
	//onLoad :
	//onError :
    ajaxUrl:"loadGrid.php", ajaxPars:"param1=1&param2=2", onLoad:function(){

    }
});
			 ```
			 */
			setList: function (obj, sortDisable, rewrite, exts) {
				var cfg = this.config;
				var nowSortHeadID = this.nowSortHeadID;
				var nowSortHeadObj = this.nowSortHeadObj;

				this.listLoadingDisplay();

				/*this.selectedCells.clear(); */
				/*this.selectedRow.clear(); */

				if (obj.ajaxUrl) {
					/*trace("hear");	 */
					this.ajaxInfo = obj;
					this.ajax_sortDisable = sortDisable;
					this.pageActive = true;

					var url = obj.ajaxUrl;
					var appendPars = [
							"pageNo=" + ((exts == "paging") ? this.page.pageNo : 1),
							"pageSize=" + this.page.pageSize
					];

					var pars = (obj.ajaxPars) ? obj.ajaxPars + "&" + appendPars.join('&') : appendPars.join('&');

					var _method = "post";
					var _contentType = AXConfig.AXReq.contentType;
					var _headers = {};
					var _responseType = AXConfig.AXReq.responseType;
					var _dataType = AXConfig.AXReq.dataType;

					if (obj.method) _method = obj.method;
					if (obj.contentType) _contentType = obj.contentType;
					if (obj.headers) _headers = obj.headers;

					var ajaxGetList = this.ajaxGetList.bind(this);
					new AXReq(url, {
						type: _method,
						contentType: _contentType,
						responseType: _responseType,
						dataType: _dataType,
						headers: _headers,
						debug: obj.debug,
						pars: pars,
						onsucc: function (res) {
							if ((res.result && res.result == AXConfig.AXReq.okCode) || (res.result == undefined && !res.error)) {
								res._sortDisable = sortDisable;
								if (obj.response) {
									obj.response.call(res);
								} else {
									ajaxGetList(res);
								}
								if (obj.onLoad) obj.onLoad.call(res);
							} else {
								if(obj.onError) obj.onError.call(res);
								else AXUtil.alert(res);
							}
						}
					});

				} else {

					if (axdom.isArray(obj)) {
						if (sortDisable || !cfg.sort) {
							this.list = obj;
						} else {
							if (nowSortHeadID) {
								this.list = this.sortList(nowSortHeadObj.sort, nowSortHeadObj, obj);
							} else {
								this.list = obj;
							}
						}

						this.printList();
						this.scrollTop(0);

						if (!cfg.page.paging) {
							this.setStatus(this.list.length);
							this.pagingUnit.hide();
							this.pageActive = false;
						}

					}
				}
			},
			reloadList: function () {
				var cfg = this.config;
				var nowSortHeadID = this.nowSortHeadID;
				var nowSortHeadObj = this.nowSortHeadObj;

				this.selectedCells.clear();
				this.selectedRow.clear();

				if (this.ajaxInfo) {
					var obj = this.ajaxInfo;
					var sortDisable = this.ajax_sortDisable;
					this.pageActive = true;

					this.listLoadingDisplay();

					var url = obj.ajaxUrl;
					var appendPars = [
							"pageNo=" + this.page.pageNo,
							"pageSize=" + this.page.pageSize
					];
					var pars = (obj.ajaxPars) ? obj.ajaxPars + "&" + appendPars.join('&') : appendPars.join('&');

					var scrollTop = function () {
						this.scrollTop(0);
					};
					var scrollTopBind = scrollTop.bind(this);
					var ajaxGetList = this.ajaxGetList.bind(this);

					var userResponseSetPaging = function (res) {
						axf.overwriteObject(this.page, res.page, true);
						this.setPaging();
					};
					var userResponse = userResponseSetPaging.bind(this);

					new AXReq(url, {
						debug: false, pars: pars, onsucc: function (res) {
							//if (res.result == AXConfig.AXReq.okCode) {
							if ((res.result && res.result == AXConfig.AXReq.okCode) || (res.result == undefined && !res.error)) {
								res._sortDisable = sortDisable;
								if (obj.response) {
									obj.response.call(res);
									userResponse(res);
								} else {
									ajaxGetList(res);
								}
								scrollTopBind();
							} else {
								AXUtil.alert(res);
							}
						}
					});

				}
			},
			ajaxGetList: function (res) {
				var cfg = this.config;
				var nowSortHeadID = this.nowSortHeadID;
				var nowSortHeadObj = this.nowSortHeadObj;

				if (res._sortDisable || !cfg.sort) {
					this.list = res.list;
				} else {
					if (nowSortHeadID) {
						this.list = this.sortList(nowSortHeadObj.sort, nowSortHeadObj, res.list);
					} else {
						this.list = res.list;
					}
				}
				AXUtil.overwriteObject(this.page, res.page, true);

				this.printList();

				this.scrollTop(0);
				this.setPaging();
			},

			/**
			 * @method AXGrid.setData
			 * @param gridData {JSObject} object of grid
			 * @returns null
			 * @description <ko>그리드 데이터를 페이지까지 포함하여 정의해 줍니다. (ajax를 사용하지 않는 방법)</ko>
			 * @example
			 ```
			 var gridData = {
    list: _obj.document_list,
    page:{
        pageNo: _obj.page_navigation.cur_page,
        pageSize: 20,
        pageCount: _obj.page_navigation.page_count,
        listCount: _obj.page_navigation.total_count,
        onchange: function(pageNo){
            dialog.push(Object.toJSON(this));
            trace(this, pageNo);
        }
    }
};
			 myGrid.setData(gridData);
			 ```
			 */
			setData: function (res) {
				var cfg = this.config;
				var nowSortHeadID = this.nowSortHeadID;
				var nowSortHeadObj = this.nowSortHeadObj;

				if (res._sortDisable || !cfg.sort) {
					this.list = res.list;
				} else {
					if (nowSortHeadID) {
						this.list = this.sortList(nowSortHeadObj.sort, nowSortHeadObj, res.list);
					} else {
						this.list = res.list;
					}
				}
				if(!this.page.onchange) this.page.onchange = this.page.onChange;
				axf.overwriteObject(this.page, res.page, true);

				this.printList();
				this.scrollTop(0);
				this.setPaging();
			},
			getFormatterValue: function (formatter, item, itemIndex, value, key, CH, CHidx) {
				var cfg = this.config;
				var result;
				if (formatter == "money") {
					if (value == "" || value == "null" || value == null || value == undefined) {
						result = "0";
					} else {
						result = (value || 0).number().money();
					}
				} else if (formatter == "dec") {
					result = (value == undefined) ? "" : value.dec();
				} else if (formatter == "html") {
					result = value;
				} else if (formatter == "checkbox" || formatter == "radio") {
					var checkedStr = "";
					var disabled = "";
					var sendObj = {
						index: itemIndex,
						list: this.list,
						item: item,
						page: this.page,
						key: key,
						value: value
					};

					if(this.list[itemIndex].___checked){
						if(this.list[itemIndex].___checked[CHidx]) checkedStr = " checked=\"checked\" ";
						//if(itemIndex == 0) trace(this.list[itemIndex].___checked[CHidx], checkedStr);
					}else if (Object.isFunction(CH.checked)) {
						if (CH.checked.call(sendObj)) {
							checkedStr = " checked=\"checked\" ";
							if(!this.list[itemIndex].___checked) this.list[itemIndex].___checked = {};
							this.list[itemIndex].___checked[CHidx] = true;
						}
					}

					if (CH.disabled) {
						if (CH.disabled.call(sendObj)) {
							disabled = " disabled=\"disabled\" ";
							if(!this.list[itemIndex].___checked) this.list[itemIndex].___disabled = {};
							this.list[itemIndex].___disabled[CHidx] = true;
						}
					}
					result = "<label class=\"gridCheckboxLabel\">" +
						"<input type=\"" + formatter + "\" name=\"" + CH.label + "\" class=\"gridCheckBox_body_colSeq" + CH.colSeq + "\" id=\"" + cfg.targetID + "_AX_checkboxItem_AX_" + CH.colSeq + "_AX_" + itemIndex + "\" value=\"" + value + "\" " + checkedStr + disabled + " />" +
						"</label>";
				} else {
					if(Object.isFunction(formatter)){
						var sendObj = {
							index: itemIndex,
							list: this.list,
							item: item,
							page: this.page,
							key: key,
							value: value
						};
						result = formatter.call(sendObj, itemIndex, item);
					} else {
						result = value;
					}
				}
				return result;
			},
			getTooltipValue: function (formatter, item, itemIndex, value, key, CH) {
				var cfg = this.config;
				var result;
				if (formatter == "money") {
					if (value == "" || value == "null") {
						result = "0";
					} else {
						result = value.number().money();
					}
				} else if (formatter == "dec") {
					result = (value == undefined) ? "" : value.dec();
				} else if (formatter == "html") {
					result = value;
				} else if (formatter == "checkbox" || formatter == "radio") {
					var checked = "";
					if (CH.checked) {
						var sendObj = {
							index: itemIndex,
							list: this.list,
							item: item,
							page: this.page,
							key: key,
							value: value
						};
						var callResult = CH.checked.call(sendObj);
						if (callResult) {
							checked = " checked=\"checked\" ";
						}
					}
					result = "<input type=\"" + formatter + "\" name=\"" + CH.label + "\" class=\"gridCheckBox_body_colSeq" + CH.colSeq + "\" id=\"" + cfg.targetID + "_AX_checkboxItem_AX_" + CH.colSeq + "_AX_" + itemIndex + "\" value=\"" + value + "\" " + checked + " />";
				} else {
					if(Object.isFunction(formatter)){
						var sendObj = {
							index: itemIndex,
							list: this.list,
							item: item,
							page: this.page,
							key: key,
							value: value
						};
						result = formatter.call(sendObj, itemIndex, item);
					} else {
						result = value;
					}
				}
				return result;
			},
			getItem: function (itemIndex, item, isfix, hasTr) {
				var cfg = this.config;
				var tpo = [];
				var evenClassName = "line" + (itemIndex % 2);
				/*
				 if(cfg.mergeCells){
				 evenClassName = "line1"; // 줄무늬 기능 사용 안함.
				 }
				 */
				var getFormatterValue = this.getFormatterValue.bind(this);
				var getTooltipValue = this.getTooltipValue.bind(this);
				var hasFixed = this.hasFixed;
				var hasTrValue = (hasTr === undefined);
				var trAddClass = "";
				if (cfg.body.addClass) {
					try {
						trAddClass = cfg.body.addClass.call({
							index: itemIndex,
							item: item,
							list: this.list,
							page: this.page
						}) || "";
					} catch (e) {
						trace(e);
					}
				}

				for (var r = 0; r < cfg.body.rows.length; r++) {
					var isLastTR = (cfg.body.rows.length - 1 == r);
					var trHeight = 0;
					if (hasTrValue) {
						if(isfix == "fix"){
							trHeight = this.cachedDom.tbody.find("#" + cfg.targetID + "_AX_tr_" + r + "_AX_n_AX_" + itemIndex + " td").innerHeight();
							tpo.push("<tr class=\"gridBodyTr gridBodyTr_" + itemIndex + " " + evenClassName + " " + trAddClass + "\" " +
								"id=\"" + cfg.targetID + "_AX_tr_" + r + "_AX_fix_AX_" + itemIndex + "\">");
						}else{
							tpo.push("<tr class=\"gridBodyTr gridBodyTr_" + itemIndex + " " + evenClassName + " " + trAddClass + "\" " +
								"id=\"" + cfg.targetID + "_AX_tr_" + r + "_AX_n_AX_" + itemIndex + "\">");
						}

					}
					var colCount = 0;

					for (var CH, CHidx = 0; (CHidx < cfg.body.rows[r].length && (CH = cfg.body.rows[r][CHidx])); CHidx++) {
						if (CH.display && CH.colspan > 0) {
							var printOk = false;
							if (isfix == "n") printOk = true;
							if (isfix == "fix" && colCount < (cfg.fixedColSeq + 1)) printOk = true;
							if (printOk) {
								colCount += CH.colspan;
								//radio, check exception
								var rowspan = (CH.rowspan > 1) ? " rowspan=\"" + CH.rowspan + "\"" : "";
								var colspan = (CH.colspan > 1) ? " colspan=\"" + CH.colspan + "\"" : "";
								var valign = " valign=\"" + CH.valign + "\" ";
								var bottomClass = (CH.isLastCell) ? "" : " bodyBottomBorder";
								var fixedClass = (CH.isFixedEndCell) ? " fixedLine" : "";
								var styles = " style=\"vertical-align:" + CH.valign + ";\"";
								if(trHeight) styles = " style=\"vertical-align:" + CH.valign + ";height:"+trHeight+"px;\"";

								var bodyNodeClass = "";
								if (CH.formatter == "checkbox" || CH.formatter == "radio") bodyNodeClass = " bodyTdCheckBox";
								else if (CH.formatter == "html") bodyNodeClass = " bodyTdHtml";

								var tooltipValue = "";
								if (CH.tooltip) tooltipValue = getTooltipValue(CH.tooltip, item, itemIndex, item[CH.key], CH.key, CH);

								tpo.push("<td" + valign + rowspan + colspan + styles + " " +
									" id=\"" + cfg.targetID + "_AX_" + (isfix || "n") + "body_AX_" + r + "_AX_" + CHidx + "_AX_" + itemIndex + "\" " +
									" class=\"bodyTd" + bottomClass + fixedClass + "\">");
								tpo.push("<div class=\"bodyNode bodyTdText" + bodyNodeClass + "\" " +
									" align=\"" + CH.align + "\" " +
									" id=\"" + cfg.targetID + "_AX_bodyText_AX_" + r + "_AX_" + CHidx + "_AX_" + itemIndex + "\" " +
									" title=\"" + tooltipValue + "\" title=\"" + tooltipValue + "\">");
								if ((hasFixed && !CH.isFixedCell) || !hasFixed || isfix != undefined) {
									if (CH.formatter) {
										tpo.push(getFormatterValue(CH.formatter, item, itemIndex, item[CH.key], CH.key, CH, CHidx));
									} else {
										tpo.push(item[CH.key]);
									}
								} else {
									tpo.push("&nbsp;");
								}
								tpo.push("</div>");
								tpo.push("</td>");
							}
						}
					}

					if (r == 0 && isfix == "n") {
						tpo.push("<td class=\"bodyNullTd\" id=\"" + cfg.targetID + "_AX_null_AX_" + itemIndex + "\" rowspan=\"" + cfg.body.rows.length + "\">" +
							"<div class=\"tdRelBlock\" id=\"" + cfg.targetID + "_AX_tdRelBlock_AX_" + itemIndex + "\">&nbsp;</div>" +
							"</td>");
					}
					if (hasTrValue) tpo.push("</tr>");
				}
				return tpo.join('');
			},
			getIconItem: function (itemIndex, item, viewIconObj, cssObj) {
				var cfg = this.config;
				var tpo = [];
				var getFormatterValue = this.getFormatterValue.bind(this);
				var getTooltipValue = this.getTooltipValue.bind(this);

				var format;
				try {
					format = viewIconObj.format.call({ index: itemIndex, item: item });
				} catch (e) {
					trace(e);
				}
				tpo.push("<div class=\"viewIcon bodyViewIcon bodyViewIcon_" + itemIndex + " " + (viewIconObj.addClass || "") + "\" style=\"" + cssObj.box + ";\" id=\"" + cfg.targetID + "_AX_viewIcon_AX_" + itemIndex + "\">");

				if (format.imgsrc) {
					tpo.push("<img src=\"");
					tpo.push(format.imgsrc);
					tpo.push("\" align=\"middle\" alt=\"" + format.label + "\" style=\"" + cssObj.img + ";\" class=\"gridViewIconThumbnail\" />");
				}

				if (format.label) {
					tpo.push("<div style=\"" + cssObj.label + ";\" class=\"gridViewIconLabel\">");
					tpo.push(format.label);
					tpo.push("</div>");
				}

				if (format.description) {
					tpo.push("<div style=\"" + cssObj.description + ";\" class=\"gridViewIconDescription\">");
					tpo.push(format.description);
					tpo.push("</div>");
				}
				if (viewIconObj.buttons) {
					if (viewIconObj.buttons.items) {
						tpo.push("<div style=\"" + cssObj.buttons + ";\" class=\"gridViewIconbuttons\">");
						for (var B, bidx = 0; (bidx < viewIconObj.buttons.items.length && (B = viewIconObj.buttons.items[bidx])); bidx++) {
							tpo.push("<button type=\"button\" class=\"viewIconButtonsItem " + B.addClass + "\" id=\"" + cfg.targetID + "_AX_viewIcon_AX_" + itemIndex + "_AX_" + bidx + "\">");
							tpo.push(B.label);
							tpo.push("</button> ");
						}
						;
						tpo.push("</div>");
					}
				}

				tpo.push("</div>");

				return tpo.join('');
			},
			getMobileItem: function (itemIndex, item, mobileView) {
				var cfg = this.config;
				var tpo = [];
				var evenClassName = "line" + (itemIndex % 2);
				var getFormatterValue = this.getFormatterValue.bind(this);
				var getTooltipValue = this.getTooltipValue.bind(this);
				var trAddClass = "";
				if (cfg.body.addClass) {
					try {
						trAddClass = cfg.body.addClass.call({
							index: itemIndex,
							item: item,
							list: this.list,
							page: this.page
						}) || "";
					} catch (e) {
						trace(e);
					}
				}

				tpo.push("<section class=\"bodyViewMobile bodyViewMobile_" + itemIndex + " " + " " + evenClassName + " " + (mobileView.addClass || "") + "\" id=\"" + cfg.targetID + "_AX_viewMobile_AX_" + itemIndex + "\">");

				var __memoCol = null, displayColumnCount = 0;
				for (var CN, cidx = 0, __arr = mobileView.column; (cidx < __arr.length && (CN = __arr[cidx])); cidx++) {
					if (CN.display == true || CN.display == undefined) displayColumnCount++;
				}
				for (var CN, cidx = 0, __arr = mobileView.column; (cidx < __arr.length && (CN = __arr[cidx])); cidx++) {
					if (CN.display == true || CN.display == undefined) {
						var colClass = "", colAddClass = (CN.addClass || "");
						if(displayColumnCount === 1) colAddClass = ""; // show column 1
						if (CN.col) colClass = "col" + CN.col;
						else  colClass = "colNone";

						if (__memoCol != null && !CN.col) tpo.push("<div style='clear:both;'></div>");

						tpo.push("<div class='column " + colClass + " " + trAddClass + " " + colAddClass + "'>");
						if (mobileView.label != false) {
							tpo.push("<span class='label'>" + CN.label + "</span>");
							tpo.push("<span class='content'>");
						} else {
							tpo.push("<span class='content solid'>");
						}
						if (CN.formatter) {
							//formatter, item, itemIndex, value, key, CH, CHidx
							for(var colSeq=0;colSeq<cfg.colGroup.length;colSeq++){
								if(cfg.colGroup[colSeq].key == CN.key){
									CN.colSeq = colSeq;
									break;
								}
							}
							tpo.push(getFormatterValue(CN.formatter, item, itemIndex, item[CN.key], CN.key, CN));
						} else {
							tpo.push(item[CN.key]);
						}
						tpo.push("</span>");
						tpo.push("</div>");
						__memoCol = CN.col;
					}
				}

				tpo.push("<div class='columnClear'></div>");
				tpo.push("<div class='buttonGroup'>");
				if(mobileView.buttons){
					for (var B, bidx = 0, __arr = mobileView.buttons; (bidx < __arr.length && (B = __arr[bidx])); bidx++){
						tpo.push("<a class='buttonGroupItem "+ B.addClass +"' id='"+ cfg.targetID +"_AX_mobileViewButton_AX_"+ itemIndex +"_AX_"+ bidx +"'>");
						tpo.push("</a>");
					}
				}
				tpo.push("</div>");
				tpo.push("</section>");

				return tpo.join('');
			},
			getItemMarker: function (itemIndex, item, isfix) {
				var cfg = this.config;
				var tpo = [];
				var evenClassName = "gridBodyMarker";
				var getFormatterValue = this.getFormatterValue.bind(this);
				var hasFixed = this.hasFixed;
				var trAddClass = "";
				if (cfg.body.marker.addClass) {
					try {
						trAddClass = cfg.body.marker.addClass.call({
							index: itemIndex,
							item: item,
							list: this.list,
							page: this.page
						}) || "";
					} catch (e) {
						trace(e);
					}
				}
				for (var r = 0; r < cfg.body.marker.rows.length; r++) {
					var isLastTR = (cfg.body.marker.rows.length - 1 == r);
					tpo.push("<tr class=\"gridBodyTr gridBodyMarkerTr_" + itemIndex + " " + evenClassName + " " + trAddClass + "\" id=\"" + cfg.targetID + "_AX_marker_" + r + "_AX_" + (isfix || "n") + "_AX_" + itemIndex + "\">");
					var colCount = 0;
					for (var CH, CHidx = 0, __arr = cfg.body.marker.rows[r]; (CHidx < __arr.length && (CH = __arr[CHidx])); CHidx++) {
						if (CH.display && CH.colspan > 0) {

							if (isfix == "n" || (isfix != undefined && colCount < (cfg.fixedColSeq + 1))) {

								colCount += CH.colspan;

								/*radio, check exception */
								var rowspan = (CH.rowspan > 1) ? " rowspan=\"" + CH.rowspan + "\"" : "";
								var colspan = (CH.colspan > 1) ? " colspan=\"" + CH.colspan + "\"" : "";
								var valign = " valign=\"" + CH.valign + "\" style=\"vertical-align:" + CH.valign + ";\"";
								var bottomClass = (CH.isLastCell) ? "" : " bodyBottomBorder";
								var fixedClass = (CH.isFixedEndCell) ? " fixedLine" : "";

								/*trace({r:r, CHidx:CHifixedColSeq:cfg.fixedColSeq, colCount:colCount}); */

								var bodyNodeClass = "";
								if (CH.formatter == "checkbox" || CH.formatter == "radio") bodyNodeClass = " bodyTdCheckBox";
								else if (CH.formatter == "html") bodyNodeClass = " bodyTdHtml";

								tpo.push("<td" + valign + rowspan + colspan + " id=\"" + cfg.targetID + "_AX_" + (isfix || "n") + "bodyMarker_AX_" + r + "_AX_" + CHidx + "_AX_" + itemIndex + "\" class=\"bodyTd" + bottomClass + fixedClass + "\">");
								/*tpo.push("<div class=\"tdRelBlock\">");*/
								tpo.push("<div class=\"bodyNode bodyTdText" + bodyNodeClass + "\" align=\"" + CH.align + "\" id=\"" + cfg.targetID + "_AX_bodyMarkerText_AX_" + r + "_AX_" + CHidx + "_AX_" + itemIndex + "\">");
								if ((hasFixed && !CH.isFixedCell) || !hasFixed || isfix != undefined) {
									if (CH.formatter) {
										tpo.push(getFormatterValue(CH.formatter, item, itemIndex, item[CH.key], CH.key, CH));
									} else {
										tpo.push(item[CH.key]);
									}
								} else {
									tpo.push("&nbsp;");
								}
								tpo.push("</div>");
								/*tpo.push("</div>");*/
								tpo.push("</td>");
							}
						}
					}
					;
					if (r == 0 && isfix == "n") {
						tpo.push("<td class=\"bodyNullTd\" id=\"" + cfg.targetID + "_AX_nullMarker_AX_" + itemIndex + "\" rowspan=\"" + cfg.body.marker.rows.length + "\"><div class=\"tdRelBlock\" id=\"" + cfg.targetID + "_AX_tdRelBlockMarker_AX_" + itemIndex + "\">&nbsp;</div></td>");
					}
					tpo.push("</tr>");
				}
				return tpo.join('');
			},
			getMarkerDisplay: function (itemIndex, item) {
				var cfg = this.config;
				var bodyHasMarker = this.bodyHasMarker;

				if (!bodyHasMarker) return false;
				var sendObj = {
					index: itemIndex,
					list: this.list,
					item: item,
					page: this.page
				};

				var markerDisplay;
				try {
					markerDisplay = cfg.body.marker.display.call(sendObj, itemIndex, item);
				} catch (e) {
					trace(e);
				}
				return markerDisplay;
			},
			printList: function () {
				var cfg = this.config, _this = this;
				var bodyHasMarker = this.bodyHasMarker;
				var getItem = this.getItem.bind(this);
				var getItemMarker = this.getItemMarker.bind(this);
				var getMarkerDisplay = this.getMarkerDisplay.bind(this);

				if (this.editorOpend) this.cancelEditor();

				var getIconItem = this.getIconItem.bind(this);
				// --------------------------- icon view

				var getMobileItem = this.getMobileItem.bind(this);
				// --------------------------- mobile view

				var po = [];
				// view mode 가 grid 인경우만 유효
				if (cfg.viewMode == "grid") {
					if(cfg.height == "auto"){
						for (var item, itemIndex = 0, __arr = this.list; (itemIndex < __arr.length && (item = __arr[itemIndex])); itemIndex++) {
							po.push(getItem(itemIndex, item, "n"));
							if (bodyHasMarker && getMarkerDisplay(itemIndex, item)) {
								po.push(getItemMarker(itemIndex, item, "n"));
							}
						}
					}else{
						if (this.list.length > 0) {
							var firstItem = this.list[0];
							po.push(getItem(0, firstItem, "n"));
							/* firstItem 예외처리
							 if (bodyHasMarker && getMarkerDisplay(0, firstItem)) {
							 po.push(getItemMarker(0, firstItem, "n"));
							 }
							 */
						}
					}

					if (this.list.length == 0) { // empty list
						po.push("<tr class=\"noListTr\">");
						po.push("<td colspan=\"" + (this.showColLen) + "\">");
						po.push("<div class=\"tdRelBlock\">");
						po.push("<div class=\"bodyNode bodyTdText\" align=\"center\">");
						po.push(cfg.emptyListMSG);
						po.push("</div>");
						po.push("</div>");
						po.push("</td>");
						po.push("<td class=\"bodyNullTd\"><div class=\"tdRelBlock\">&nbsp;</div></td>");
						po.push("</tr>");
					}

					this.cachedDom.tbody.empty();
					this.cachedDom.tbody.append(po.join(''));


					if (this.hasFixed) {
						po = [];
						if(cfg.height == "auto") {
							for (var item, itemIndex = 0, __arr = this.list; (itemIndex < __arr.length && (item = __arr[itemIndex])); itemIndex++) {
								po.push(getItem(itemIndex, item, "fix"));
								if (bodyHasMarker && getMarkerDisplay(itemIndex, item)) {
									po.push(getItemMarker(itemIndex, item, "fix"));
								}
							}
						}else{
							if (this.list.length > 0) {
								po.push(getItem(0, firstItem, "fix"));
								/* firstItem 예외처리
								 if (bodyHasMarker && getMarkerDisplay(0, firstItem)) {
								 po.push(getItemMarker(itemIndex, firstItem, "fix"));
								 }
								 */
							}
						}

						this.cachedDom.fixed_tbody.empty();
						this.cachedDom.fixed_tbody.append(po.join(''));
						if (this.list.length == 0) {
							this.fixedScrollContent.hide();
						}else{
							this.fixedScrollContent.show();
						}
					}

					if(cfg.height != "auto" && this.list.length > 0) {

						//아이템 한줄의 높이는?
						var itemTrHeight = this.cachedDom.tbody.find("#" + cfg.targetID + "_AX_null_AX_0").outerHeight().number();
						this.scrollContent.css({"padding-bottom": itemTrHeight});
						// 추가로 출력할 목록 선정
						po = [];
						var printListCount = (this.body.height() / itemTrHeight).ceil();

						if (this.list.length > (printListCount + 10)) printListCount += 10;
						else printListCount = this.list.length;
						for (var item, itemIndex = 0, __arr = this.list; (itemIndex < printListCount && (item = __arr[itemIndex])); itemIndex++) {
							po.push(getItem(itemIndex, item, "n"));
							if (bodyHasMarker && getMarkerDisplay(itemIndex, item)) {
								po.push(getItemMarker(itemIndex, item, "n"));
							}
						}
						this.cachedDom.tbody.empty();
						this.cachedDom.tbody.append(po.join(''));
						// TODO : 출력된 테이블에 mergeCells 호출
						if (cfg.mergeCells) {
							this.mergeCells(this.cachedDom.tbody, "n");
						}

						if (this.hasFixed) {
							po = [];
							for (var item, itemIndex = 0, __arr = this.list; (itemIndex < printListCount && (item = __arr[itemIndex])); itemIndex++) {
								po.push(getItem(itemIndex, item, "fix"));
								if (bodyHasMarker && getMarkerDisplay(itemIndex, item)) {
									po.push(getItemMarker(itemIndex, item, "fix"));
								}
							}
							this.cachedDom.fixed_tbody.empty();
							this.cachedDom.fixed_tbody.append(po.join(''));
							if (cfg.mergeCells) {
								this.mergeCells(this.cachedDom.fixed_tbody, "f");
							}
						}

						// TODO : init virtualScroll & control height thpadding
						this.virtualScroll = {
							startIndex    : 0,
							endIndex      : printListCount - 1,
							itemTrHeight  : itemTrHeight,
							printListCount: printListCount,
							scrollTop     : 0
						};

						this.cachedDom.thpadding.css({ height: 0 });
						this.cachedDom.tfpadding.css({ height: cfg.scrollContentBottomMargin.number() + (this.list.length - printListCount - 1) * (itemTrHeight) });
						if (this.hasFixed) {
							this.cachedDom.fthpadding.css({ height: 0 });
							this.cachedDom.ftfpadding.css({ height: cfg.scrollContentBottomMargin.number() + (this.list.length - printListCount - 1) * (itemTrHeight) });
						}

						// 스크롤 y 포지션 초기화
						this.scrollContent.css({ top: 0 });
						this.contentScrollContentSync({ top: 0 });

					}else if(cfg.height == "auto" && this.list.length > 0) {

						this.virtualScroll = {
							startIndex : 0,
							endIndex : 0,
							itemTrHeight: 0,
							printListCount: 0,
							scrollTop: 0
						};
						this.cachedDom.thpadding.css({ height: 0 });
						this.cachedDom.tfpadding.css({ height: cfg.scrollContentBottomMargin.number() });
						if(this.hasFixed) {
							this.cachedDom.fthpadding.css({ height: 0 });
							this.cachedDom.ftfpadding.css({ height: cfg.scrollContentBottomMargin.number() });
						}

						if (cfg.mergeCells) {
							this.mergeCells(this.cachedDom.tbody, "n");
							if (this.hasFixed) {
								this.mergeCells(this.cachedDom.fixed_tbody, "f");
							}
						}

						this.scrollContent.css({ top: 0 });
						this.contentScrollContentSync({ top: 0 });

					}else{

						this.virtualScroll = {
							startIndex : 0,
							endIndex : 0,
							itemTrHeight: 0,
							printListCount: 0,
							scrollTop: 0
						};
						this.cachedDom.thpadding.css({ height: 0 });
						this.cachedDom.tfpadding.css({ height: cfg.scrollContentBottomMargin.number() });
						if(this.hasFixed) {
							this.cachedDom.fthpadding.css({ height: 0 });
							this.cachedDom.ftfpadding.css({ height: cfg.scrollContentBottomMargin.number() });
						}
						this.scrollContent.css({ top: 0 });
						this.contentScrollContentSync({ top: 0 });

					}

					this.body.find(".gridBodyTr").bind("mouseover", this.gridBodyOver.bind(this));
					this.body.find(".gridBodyTr").bind("mouseout", this.gridBodyOut.bind(this));
					this.body.find(".gridBodyTr").bind("click", this.gridBodyClick.bind(this));
					if (this.needBindDBLClick()) this.body.find(".gridBodyTr").bind("dblclick", this.gridBodyDBLClick.bind(this));

					if (this.selectedRow && this.selectedRow.length > 0) {
						for (var item, itemIndex = 0, __arr = this.selectedRow; (itemIndex < __arr.length && (item = __arr[itemIndex])); itemIndex++) {
							this.body.find(".gridBodyTr_" + item).addClass("selected");
						}
						var itemIndex = this.selectedRow.last();
						try {
							var trTop = this.body.find(".gridBodyTr_" + itemIndex).position().top;
							var scrollHeight = this.scrollContent.height();
							var bodyHeight = this.body.height();
							if (trTop.number() + trHeight.number() > bodyHeight) {
								var scrollTop = bodyHeight - (trTop.number() + itemTrHeight.number());
								this.scrollContent.css({ top: scrollTop });
								this.contentScrollContentSync({ top: scrollTop });
							} else {
								if (trTop.number() == 0) {
									var scrollTop = 0;
									this.scrollContent.css({ top: scrollTop });
									this.contentScrollContentSync({ top: scrollTop });
								}
							}
						} catch (e) {

						}
					}

					// TODO : printList then body.onchangeScroll
					if(cfg.body.onchangeScroll){
						var sendObj = axf.copyObject(this.virtualScroll);
						cfg.body.onchangeScroll.call(sendObj, sendObj);
					}

				} else if (cfg.viewMode == "icon") {

					var viewIconObj = cfg.view;

					var viewIconCss = [];
					viewIconCss.push("width:" + viewIconObj.width.number() + "px");
					viewIconCss.push("height:" + viewIconObj.height.number() + "px");
					if (viewIconObj.style) viewIconCss.push(viewIconObj.style);

					var viewIconImgCss = [];
					viewIconImgCss.push("left:" + viewIconObj.img.left.number() + "px");
					viewIconImgCss.push("top:" + viewIconObj.img.top.number() + "px");
					viewIconImgCss.push("width:" + viewIconObj.img.width.number() + "px");
					viewIconImgCss.push("height:" + viewIconObj.img.height.number() + "px");
					if (viewIconObj.img.style) viewIconImgCss.push(viewIconObj.img.style);

					var viewIconLabelCss = [];
					viewIconLabelCss.push("left:" + viewIconObj.label.left.number() + "px");
					viewIconLabelCss.push("top:" + viewIconObj.label.top.number() + "px");
					viewIconLabelCss.push("width:" + viewIconObj.label.width.number() + "px");
					viewIconLabelCss.push("height:" + viewIconObj.label.height.number() + "px");
					if (viewIconObj.label.style) viewIconLabelCss.push(viewIconObj.label.style);

					var viewIconDescriptionCss = [];
					viewIconDescriptionCss.push("left:" + viewIconObj.description.left.number() + "px");
					viewIconDescriptionCss.push("top:" + viewIconObj.description.top.number() + "px");
					viewIconDescriptionCss.push("width:" + viewIconObj.description.width.number() + "px");
					viewIconDescriptionCss.push("height:" + viewIconObj.description.height.number() + "px");
					if (viewIconObj.description.style) viewIconDescriptionCss.push(viewIconObj.description.style);

					var viewIconButtonsCss = [];
					if (viewIconObj.buttons) {
						viewIconButtonsCss.push("left:" + viewIconObj.buttons.left.number() + "px");
						viewIconButtonsCss.push("top:" + viewIconObj.buttons.top.number() + "px");
						viewIconButtonsCss.push("width:" + viewIconObj.buttons.width.number() + "px");
						viewIconButtonsCss.push("height:" + viewIconObj.buttons.height.number() + "px");
						if (viewIconObj.buttons.style) viewIconButtonsCss.push(viewIconObj.buttons.style);
					}

					var cssObj = {
						box: viewIconCss.join(";"),
						img: viewIconImgCss.join(";"),
						label: viewIconLabelCss.join(";"),
						description: viewIconDescriptionCss.join(";"),
						buttons: viewIconButtonsCss.join(";")
					};

					for (var item, itemIndex = 0, __arr = this.list; (itemIndex < __arr.length && (item = __arr[itemIndex])); itemIndex++) {
						po.push(getIconItem(itemIndex, item, viewIconObj, cssObj));
					}

					po.push("<div style='clear:both;'></div>");

					var gridBodyDiv = axdom("#" + cfg.targetID + "_AX_gridBodyDiv");
					gridBodyDiv.empty();
					gridBodyDiv.append(po.join(''));

					this.body.find(".bodyViewIcon").bind("click", this.gridBodyClick.bind(this));
					if (this.needBindDBLClick()) this.body.find(".bodyViewIcon").bind("dblclick", this.gridBodyDBLClick.bind(this));

					if (this.selectedRow && this.selectedRow.length > 0) {
						var body = this.body;
						for (var item, itemIndex = 0, __arr = this.selectedRow; (itemIndex < __arr.length && (item = __arr[itemIndex])); itemIndex++) {
							body.find(".bodyViewIcon_" + item).addClass("selected");
						}
					}

					var _list = this.list;
					var iconButtonClick = function (event) {
						var ids = event.target.id.split(/_AX_/g);
						var itemIndex = ids[ids.length - 2];
						var buttonIndex = ids[ids.length - 1];

						if (viewIconObj.buttons.items[buttonIndex].onclick) {
							viewIconObj.buttons.items[buttonIndex].onclick.call({
								index: itemIndex,
								list: _list,
								item: _list[itemIndex],
								buttonItem: viewIconObj.buttons.items[buttonIndex]
							});
						}
					};
					var iconButtonClickBind = iconButtonClick.bind(this);

					this.body.find(".bodyViewIcon .viewIconButtonsItem").bind("click", function (event) {
						iconButtonClickBind(event);
					});

				} else if (cfg.viewMode == "mobile") {

					var mobileView = cfg.view;
					if (mobileView == undefined) {
						var columns = [];
						for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
							var col = null, addClass = "";
							if (CG.widthAstric || CG.width.number() >= 200) {
								col = 4;
								addClass = "underLine";
							} else if (CG.width.number() >= 100) {
								col = 2;
							} else if (CG.width.number() >= 40) {
								//col = 1;
							}
							columns.push(
								{key: CG.key, label: CG.label, col: col, formatter: CG.formatter, addClass: addClass, sort: (CG.sort || ""), display: (CG.display || true)}
							);
						}
						columns = columns.sort(function (pItem, nItem) {
							var v1 = pItem.col;
							var v2 = nItem.col;
							if (v1 < v2) return 1;
							else if (v1 > v2) return -1;
							else if (v1 == v2) return 0;
						});
						mobileView = {
							labelView: true,
							column: columns
						};
					}

					for (var item, itemIndex = 0, __arr = this.list; (itemIndex < __arr.length && (item = __arr[itemIndex])); itemIndex++) {
						po.push(getMobileItem(itemIndex, item, mobileView));
					}

					if (this.list.length == 0) { /* empty tags */
						po.push("<div class=\"bodyViewMobile\" align=\"center\">");
						po.push(cfg.emptyListMSG);
						po.push("</div>");
					}

					axdom("#" + cfg.targetID + "_AX_gridBodyDiv").empty();
					axdom("#" + cfg.targetID + "_AX_gridBodyDiv").append(po.join(''));

					this.body.find(".bodyViewMobile").bind("click", this.gridBodyClick.bind(this));
					if (this.needBindDBLClick()) this.body.find(".bodyViewMobile").bind("dblclick", this.gridBodyDBLClick.bind(this));

					if (this.selectedRow && this.selectedRow.length > 0) {
						var body = this.body;
						for (var item, itemIndex = 0, __arr = this.selectedRow; (itemIndex < __arr.length && (item = __arr[itemIndex])); itemIndex++) {
							body.find(".bodyViewMobile_" + item).addClass("selected");
						}
					}

					var _list = this.list;
					var mobileButtonClick = function (event) {
						var ids = event.target.id.split(/_AX_/g);
						var itemIndex = ids[ids.length - 2];
						var buttonIndex = ids[ids.length - 1];

						if (mobileView.buttons[buttonIndex].onclick) {
							mobileView.buttons[buttonIndex].onclick.call({
								index: itemIndex,
								list: _list,
								item: _list[itemIndex],
								buttonItem: mobileView.buttons[buttonIndex]
							});
						}
					};
					var mobileButtonClickBind = mobileButtonClick.bind(this);

					this.body.find(".bodyViewMobile").find(".buttonGroupItem").bind("click", function (event) {
						mobileButtonClick(event);
					});
				}

				this.selectedCells.clear();
				// selectedCells clear
				this.contentScrollResize();

				this.contentScrollXAttr = null;
				this.contentScrollYAttr = null;
			},
			updateList: function (itemIndex, item) {
				var cfg = this.config;
				this.cancelEditor();

				if (item._CUD == "C") {

				} else if (item._CUD == "D") {
					toast.push("삭제된 아이템 입니다. 수정할 수 없습니다.");
					return;
					/*삭제된 개체 수정 금지 */
				} else {
					item._CUD = "U";
				}

				this.list[itemIndex] = item;

				var npo = this.getItem(itemIndex, item, "n", "notr");
				if (this.hasFixed) {
					var fpo = this.getItem(itemIndex, item, "fix", "notr");
				}

				axdom("#" + cfg.targetID + "_AX_tbody").find(".gridBodyTr_" + itemIndex).html(npo);
				if (this.hasFixed) {
					axdom("#" + cfg.targetID + "_AX_fixedTbody").find(".gridBodyTr_" + itemIndex).html(fpo);
				}

				var trAddClass = "";
				if (cfg.body.addClass) {
					try {
						trAddClass = cfg.body.addClass.call({
							index: itemIndex,
							item: item,
							list: this.list
						}) || "";
					} catch (e) {
						trace(e);
					}
				}

				axdom("#" + cfg.targetID + "_AX_tbody").find(".gridBodyTr_" + itemIndex).addClass(trAddClass);
				if (this.hasFixed) {
					axdom("#" + cfg.targetID + "_AX_fixedTbody").find(".gridBodyTr_" + itemIndex).addClass(trAddClass);
				}
				this.redrawDataSet();
			},
			pushList: function (pushItem, insertIndex) {
				var cfg = this.config;

				this.cancelEditor();

				pushItem._CUD = "C";
				if (insertIndex != null && insertIndex != undefined) {

					var itemIndex = insertIndex;
					var newList = [];
					for (var L, listIndex = 0, __arr = this.list; (listIndex < __arr.length && (L = __arr[listIndex])); listIndex++) {
						if (listIndex == itemIndex) {
							newList.push(pushItem);
						}
						newList.push(L);
					}
					;
					this.list = newList;
					var item = this.list[itemIndex];

					var npo = this.getItem(itemIndex, item, "n");
					if (this.hasFixed) {
						var fpo = this.getItem(itemIndex, item, "fix");
					}

					this.printList();
					this.contentScrollResize(false);
					this.setFocus(itemIndex);

				} else {

					var itemIndex = this.list.length;
					this.list.push(pushItem);

					this.printList();
					if (itemIndex > 0) this.setFocus(itemIndex);

					/*
					 if (itemIndex > 0) {
					 this.printList();
					 } else {

					 var item = this.list[itemIndex];
					 var npo = this.getItem(itemIndex, item, "n");
					 if (this.hasFixed) {
					 var fpo = this.getItem(itemIndex, item, "fix");
					 }

					 var trlen = axdom("#" + cfg.targetID + "_AX_tbody").find(".gridBodyTr_" + (itemIndex.number() - 1)).length - 1;
					 axdom("#" + cfg.targetID + "_AX_tbody").find(".gridBodyTr_" + (itemIndex.number() - 1)).each(function (idx, O) {
					 if (idx == trlen) axdom(this).after(npo);
					 });
					 if (this.hasFixed) {
					 axdom("#" + cfg.targetID + "_AX_fixedTbody").find(".gridBodyTr_" + (itemIndex - 1)).each(function (idx, O) {
					 if (idx == trlen) axdom(this).after(fpo);
					 });
					 }

					 axdom("#" + cfg.targetID + "_AX_tbody").find(".gridBodyTr_" + itemIndex).bind("mouseover", this.gridBodyOver.bind(this));
					 axdom("#" + cfg.targetID + "_AX_tbody").find(".gridBodyTr_" + itemIndex).bind("mouseout", this.gridBodyOut.bind(this));
					 axdom("#" + cfg.targetID + "_AX_tbody").find(".gridBodyTr_" + itemIndex).bind("click", this.gridBodyClick.bind(this));
					 if (this.needBindDBLClick()) axdom("#" + cfg.targetID + "_AX_tbody").find(".gridBodyTr_" + itemIndex).bind("dblclick", this.gridBodyDBLClick.bind(this));

					 if (this.hasFixed) {
					 axdom("#" + cfg.targetID + "_AX_fixedTbody").find(".gridBodyTr_" + itemIndex).bind("mouseover", this.gridBodyOver.bind(this));
					 axdom("#" + cfg.targetID + "_AX_fixedTbody").find(".gridBodyTr_" + itemIndex).bind("mouseout", this.gridBodyOut.bind(this));
					 axdom("#" + cfg.targetID + "_AX_fixedTbody").find(".gridBodyTr_" + itemIndex).bind("click", this.gridBodyClick.bind(this));
					 if (this.needBindDBLClick()) axdom("#" + cfg.targetID + "_AX_fixedTbody").find(".gridBodyTr_" + itemIndex).bind("dblclick", this.gridBodyDBLClick.bind(this));
					 }

					 this.contentScrollResize(false);
					 this.printList();
					 this.setFocus(itemIndex);
					 }
					 */
				}

				if (!this.pageActive) this.setStatus(this.list.length);
				this.redrawDataSet();
			},
			fetchList: function(list){
				var cfg = this.config, VS = this.virtualScroll;
				this.list = this.list.concat(list);

				this.cachedDom.tfpadding.css({ height: cfg.scrollContentBottomMargin.number() + (this.list.length - VS.startIndex - 1) * (VS.itemTrHeight) });
				if (this.hasFixed) {
					this.cachedDom.ftfpadding.css({ height: cfg.scrollContentBottomMargin.number() + (this.list.length - VS.endIndex - 1) * (VS.itemTrHeight) });
				}

				if (!cfg.page.paging) {
					this.setStatus(this.list.length);
				}
				this.contentScrollResize(false);
			},
			removeList: function (removeList) {
				var cfg = this.config;
				if (cfg.passiveMode) {

					var _list = this.list;
					var collect = [];
					axf.each(removeList, function (ridx, r) {
						axf.each(_list, function (lidx, l) {
							var isDel = false;
							axf.each(r, function (k, v) {
								if (l[k] == v) {
									isDel = true;
								} else {
									isDel = false;
									return false;
								}
							});
							if (isDel) {
								if (cfg.passiveRemoveHide) {
									l._isDel = true;
								}else{
									if (l._CUD != "C") {
										l._CUD = "D";
									}else{
										l._isDel = true;
									}
								}
								collect.push(l);
							} else {
								collect.push(l);
							}
						});
					});
					this.list = collect;
				} else {
					var collect = [];
					axf.each(this.list, function (lidx, l) {
						var isPush = true;
						axf.each(removeList, function (ridx, r) {
							axf.each(r, function (k, v) {
								if (l[k] == v) {
									isPush = false;
									return false;
								}
							});
							if (!isPush) return false;
						});
						if (isPush) collect.push(l);
					});

					this.list = collect;
				}

				this.printList();
				if (!this.pageActive) this.setStatus(this.list.length);
				this.redrawDataSet();
			},
			removeListIndex: function (removeList) {
				var cfg = this.config;

				var _list = this.list;

				if (cfg.passiveMode) {

					axf.each(removeList, function (ridx, r) {
						if(_list[r.index]){
							if (cfg.passiveRemoveHide) {
								_list[r.index]._isDel = true;
							} else {
								if (_list[r.index]._CUD != "C") {
									_list[r.index]._CUD = "D";
								} else {
									_list[r.index]._isDel = true;
								}
							}
						}
					});

					var collect = [];
					var removeCollect = this.removedList;
					axf.each(_list, function () {
						if (!this._isDel) collect.push(this);
						else {
							if (this._CUD != "C") {
								removeCollect.push(this);
							}
						}
					});
					this.list = collect;
					this.removedList = removeCollect;

				} else {

					var collect = [];
					axf.each(removeList, function (ridx, r) {
						if(_list[r.index]) {
							_list[r.index]._isDel = true;
						}
					});

					var collect = [];
					var removeCollect = this.removedList;
					axf.each(_list, function () {
						if (!this._isDel) collect.push(this);
						else removeCollect.push(this);
					});
					this.list = collect;
					this.removedList = removeCollect;

				}

				this.selectedCells.clear();
				this.selectedRow.clear();

				this.printList();
				if (!this.pageActive) this.setStatus(this.list.length);
				this.redrawDataSet();
			},
			restoreList: function (restoreList) {
				var cfg = this.config;
				var _list = this.list;
				var collect = [];
				axf.each(restoreList, function (ridx, r) {
					axf.each(_list, function (lidx, l) {
						var isDel = false;
						axf.each(r, function (k, v) {
							if (l[k] == v) {
								isDel = true;
							} else {
								isDel = false;
								return false;
							}
						});
						if (isDel) {
							if (l._CUD == "D") {
								l._CUD = "";
							}
							collect.push(l);
						} else {
							collect.push(l);
						}
					});
				});
				this.list = collect;
				this.printList();
				if (!this.pageActive) this.setStatus(this.list.length);
				this.redrawDataSet();
			},
			gridBodyOver: function (event) {
				var cfg = this.config;

				if (this.overedItemIndex) {
					this.body.find(".gridBodyTr_" + this.overedItemIndex).removeClass("hover");
				}
				var itemIndex = (event.target.id).split(/_AX_/g).last();
				if (itemIndex != "") {
					this.body.find(".gridBodyTr_" + itemIndex).addClass("hover");
					this.overedItemIndex = itemIndex;
				}

			},
			gridBodyOut: function (event) {
				var cfg = this.config;

				if (this.overedItemIndex) {
					this.body.find(".gridBodyTr_" + this.overedItemIndex).removeClass("hover");
				}

			},
			gridBodyClick: function (event) {
				var cfg = this.config;

				if (cfg.body.ondblclick) {
					if (this.needBindDBLClick()) {
						clearTimeout(this.bodyClickObserver);
						this.gridBodyClickAct(event);
					} else {
						if (this.bodyClickObserver) {
							clearTimeout(this.bodyClickObserver);
							this.gridBodyDBLClick(event);
							this.bodyClickObserver = null;
							return;
						}
						var gridBodyClickAct = this.gridBodyClickAct.bind(this);
						this.bodyClickObserver = setTimeout(function () {
							gridBodyClickAct(event);
						}, 400);
					}
				} else {
					this.gridBodyClickAct(event);
				}
			},
			gridBodyClickAct: function (event) {
				this.bodyClickObserver = null;
				var cfg = this.config;
				var eventTarget = event.target;

				if (event.target.id != "") {
					var eid = event.target.id.split(/_AX_/g);
					var isoncheck = false, checkedValue;

					// TODO : 체크박스인 셀의 클릭 이벤트 예외처리 필요
					if (eventTarget.tagName.toLowerCase() == "input") {
						if (eventTarget.type.toLowerCase() == "checkbox" || eventTarget.type.toLowerCase() == "radio") {

							isoncheck = true;
							checkedValue = eventTarget.checked;

							var ieid = event.target.id.split(/_AX_/g);
							var checkboxColSeq = ieid[ieid.length - 2];
							var checkboxIndex = ieid[ieid.length - 1];
							if (cfg.colGroup[checkboxColSeq].oncheck) {
								var sendObj = {
									index: checkboxIndex,
									list : this.list,
									item : this.list[checkboxIndex]
								};
								try {
									cfg.colGroup[checkboxColSeq].oncheck.call(sendObj, event.target.checked);
								} catch (e) {
									trace(e);
								}
							}


						}
						/*
						 if ((eventTarget.tagName.toLowerCase() == "input" || eventTarget.tagName.toLowerCase() == "button")) {
						 if (eventTarget.tagName.toLowerCase() == "input") {
						 if (eventTarget.type.toLowerCase() == "checkbox" || eventTarget.type.toLowerCase() == "radio") {


						 }
						 }
						 }
						 */
					}
				}

				if (isoncheck) { /*체크박스 구현 */
					var targetID = event.target.id;
					var itemIndex = targetID.split(/_AX_/g).last();
					var ids = targetID.split(/_AX_/g);
					var item = this.list[itemIndex];
					var r = ids[ids.length - 3];
					var c = ids[ids.length - 2];

					if(typeof this.list[itemIndex].___checked == "undefined") this.list[itemIndex].___checked = {};
					this.list[itemIndex].___checked[c] = checkedValue;
					//trace(this.list[itemIndex].___checked[c]);

					var target = event.target;
					var checked = event.target.checked;
					var sendObj = {
						index: itemIndex,
						target: event.target,
						checked: event.target.checked,
						r: r,
						c: c,
						list: this.list,
						item: item,
						page: this.page
					};
					try {
						if(cfg.body.oncheck) cfg.body.oncheck.call(sendObj, itemIndex, item);
					} catch (e) {
						trace(e);
					}
				} else{

					var myTarget = this.getEventTarget({
						evt: eventTarget, evtIDs: eid,
						until: function (evt, evtIDs) {
							var edom = axdom(evt);
							return (axdom(evt.parentNode).hasClass("AXGridBody") || edom.hasClass("buttonGroupItem"));
						},
						find: function (evt, evtIDs) {
							var edom = axdom(evt);
							return ((edom.hasClass("bodyTd") || edom.hasClass("bodyViewIcon") || edom.hasClass("bodyViewMobile")) && !edom.hasClass("buttonGroupItem"));
						}
					});
					/* event target search ------------------------ */

					if (cfg.viewMode == "grid") {
						if (myTarget) {
							var targetID = myTarget.id;
							var itemIndex = targetID.split(/_AX_/g).last();
							var ids = targetID.split(/_AX_/g);

							if (event.shiftKey) {

							} else if (event.metaKey || event.ctrlKey) {
								if (this.selectedRow.length > 0) {
									var body = this.body;
									axf.each(this.selectedRow, function () {
										body.find(".gridBodyTr_" + this).removeClass("selected");
									});
									this.selectedRow.clear();
								}

								var hasID = false;
								var collect = [];
								axf.each(this.selectedCells, function () {
									if (this == targetID) {
										hasID = true;
									} else {
										collect.push(this);
									}
								});
								if (hasID) {
									axdom("#" + targetID).removeClass("selected");
									this.selectedCells = collect;
								} else {
									axdom("#" + targetID).addClass("selected");
									this.selectedCells.push(targetID);
								}
							} else {
								if (this.selectedCells.length > 0) {
									axf.each(this.selectedCells, function () {
										axdom("#" + this).removeClass("selected");
									});
									this.selectedCells.clear();
								}
								if (this.selectedRow.length > 0) {
									var body = this.body;
									axf.each(this.selectedRow, function () {
										body.find(".gridBodyTr_" + this).removeClass("selected");
									});
								}

								this.selectedRow.clear();
								this.body.find(".gridBodyTr_" + itemIndex).addClass("selected");
								this.selectedRow.push(itemIndex);

								var item = this.list[itemIndex];

								if (cfg.body.onclick) {
									var r = ids[ids.length - 3];
									var c = ids[ids.length - 2];
									var sendObj = {
										index: itemIndex,
										r: r,
										c: c,
										list: this.list,
										item: item,
										page: this.page
									};
									try {
										cfg.body.onclick.call(sendObj, itemIndex, item);
									} catch (e) {
										trace(e);
									}
								}
								/*if(this.hasEditor) this.setEditor(item, itemIndex); */
							}
						}
					} else if (cfg.viewMode == "icon") {
						if (myTarget) {
							var targetID = myTarget.id;
							var itemIndex = targetID.split(/_AX_/g).last();

							if (event.shiftKey) {

							} else if (!(event.metaKey || event.ctrlKey)) {

								if (this.selectedRow.length > 0) {
									var body = this.body;
									axf.each(this.selectedRow, function () {
										body.find(".bodyViewIcon_" + this).removeClass("selected");
									});
								}

								this.selectedRow.clear();
								this.body.find(".bodyViewIcon_" + itemIndex).addClass("selected");
								this.selectedRow.push(itemIndex);

								var item = this.list[itemIndex];

								if (cfg.body.onclick) {
									var sendObj = {
										index: itemIndex,
										list: this.list,
										item: item,
										page: this.page
									};
									try {
										cfg.body.onclick.call(sendObj, itemIndex, item);
									} catch (e) {
										trace(e);
									}
								}
							}
						}
					} else if (cfg.viewMode == "mobile") {
						if (myTarget) {
							var targetID = myTarget.id;
							var itemIndex = targetID.split(/_AX_/g).last();

							if (event.shiftKey) {

							} else if (event.metaKey || event.ctrlKey) {

							} else {

								if (this.selectedRow.length > 0) {
									var body = this.body;
									axf.each(this.selectedRow, function () {
										body.find(".bodyViewMobile_" + this).removeClass("selected");
									});
								}

								this.selectedRow.clear();
								this.body.find(".bodyViewMobile_" + itemIndex).addClass("selected");
								this.selectedRow.push(itemIndex);

								var item = this.list[itemIndex];

								if (cfg.body.onclick) {
									var sendObj = {
										index: itemIndex,
										list: this.list,
										item: item,
										page: this.page
									};
									try {
										cfg.body.onclick.call(sendObj, itemIndex, item);
									} catch (e) {
										trace(e);
									}
								}
							}
						}
					}

				}

			},
			gridBodyDBLClick: function (event) {
				var cfg = this.config;
				if (event.target.id == "") return;
				var eid = event.target.id.split(/_AX_/g);
				var eventTarget = event.target;
				if (eventTarget.tagName.toLowerCase() == "input" || eventTarget.tagName.toLowerCase() == "button") return;
				/*input, button 인 경우 제외 */
				var myTarget = this.getEventTarget({
					evt: eventTarget, evtIDs: eid,
					until: function (evt, evtIDs) {
						return (axdom(evt.parentNode).hasClass("AXGridBody")) ? true : false;
					},
					find: function (evt, evtIDs) {
						return (axdom(evt).hasClass("bodyTd") || axdom(evt).hasClass("bodyViewIcon") || axdom(evt).hasClass("bodyViewMobile")) ? true : false;
					}
				});
				/* event target search ------------------------ */
				if (cfg.viewMode == "grid") {
					if (myTarget) {
						/*colHeadTool ready */
						/*trace({tagName:myTarget.tagName, id:myTarget.id}); */
						var targetID = myTarget.id;
						var itemIndex = targetID.split(/_AX_/g).last();
						var ids = targetID.split(/_AX_/g);

						if (this.selectedRow.length > 0) {
							var body = this.body;
							axf.each(this.selectedRow, function () {
								body.find(".gridBodyTr_" + this).removeClass("selected");
							});
						}
						this.selectedRow.clear();
						this.body.find(".gridBodyTr_" + itemIndex).addClass("selected");
						this.selectedRow.push(itemIndex);

						if (cfg.body.ondblclick) {
							var r = ids[ids.length - 3];
							var c = ids[ids.length - 2];
							var item = this.list[itemIndex];
							var sendObj = {
								index: itemIndex,
								r: r,
								c: c,
								list: this.list,
								item: item,
								page: this.page
							};
							try {
								cfg.body.ondblclick.call(sendObj, itemIndex, item);
							} catch (e) {
								trace(e);
							}
						}
					}
				} else if (cfg.viewMode == "icon") {
					if (myTarget) {
						/*colHeadTool ready */
						/*trace({tagName:myTarget.tagName, id:myTarget.id}); */
						var targetID = myTarget.id;
						var itemIndex = targetID.split(/_AX_/g).last();

						if (this.selectedRow.length > 0) {
							var body = this.body;
							axf.each(this.selectedRow, function () {
								body.find(".bodyViewIcon_" + this).removeClass("selected");
							});
						}
						this.selectedRow.clear();
						this.body.find(".bodyViewIcon_" + itemIndex).addClass("selected");
						this.selectedRow.push(itemIndex);

						if (cfg.body.ondblclick) {
							var item = this.list[itemIndex];
							var sendObj = {
								index: itemIndex,
								list: this.list,
								item: item,
								page: this.page
							};
							try {
								cfg.body.ondblclick.call(sendObj, itemIndex, item);
							} catch (e) {
								trace(e);
							}
						}
					}
				} else if (cfg.viewMode == "mobile") {
					if (myTarget) {
						/*colHeadTool ready */
						/*trace({tagName:myTarget.tagName, id:myTarget.id}); */
						var targetID = myTarget.id;
						var itemIndex = targetID.split(/_AX_/g).last();

						if (this.selectedRow.length > 0) {
							var body = this.body;
							axf.each(this.selectedRow, function () {
								body.find(".bodyViewMobile_" + this).removeClass("selected");
							});
						}
						this.selectedRow.clear();
						this.body.find(".bodyViewMobile_" + itemIndex).addClass("selected");
						this.selectedRow.push(itemIndex);

						if (cfg.body.ondblclick) {
							var item = this.list[itemIndex];
							var sendObj = {
								index: itemIndex,
								list: this.list,
								item: item,
								page: this.page
							};
							try {
								cfg.body.ondblclick.call(sendObj, itemIndex, item);
							} catch (e) {
								trace(e);
							}
						}
					}
				}

				this.stopEvent(event);
				this.clearRange();
			},
			contentScrollResize: function (resetLeft) {
				var cfg = this.config, _this = this;
				if (cfg.viewMode == "mobile") return; // 모바일이면 scroll이 없음.
				if (this.contentScrollResize_timer) clearTimeout(this.contentScrollResize_timer);
				this.contentScrollResize_timer = setTimeout(function () {
					//trace("contentScrollResize_timer");
					var bodyHeight = _this.body.height();
					var scrollHeight = _this.scrollContent.height();

					var bodyWidth = _this.body.width();
					var _colWidth = (_this.colWidth.number() + cfg.fitToWidthRightMargin);
					var scrollWidth = (_colWidth > bodyWidth) ? _colWidth : bodyWidth;

					_this.scrollContent.css({ width: scrollWidth });
					_this.colHead.css({ width: scrollWidth });
					/* colHead width 재정의 */

					if (_this.hasEditor) _this.editor.css({ width: scrollWidth });

					if (resetLeft != false) {
						_this.scrollContent.css({ left: 0 });
						axdom("#" + cfg.targetID + "_AX_gridColHead").css({ left: 0 });
						_this.scrollXHandle.css({ left: 0 });
						if (_this.hasEditor) axdom("#" + cfg.targetID + "_AX_editorContent").css({ left: 0 });
					} else {
						if ((_this.scrollContent.width() + _this.scrollContent.position().left) < _this.body.width()) {
							_this.scrollContent.css({ left: 0 });
							axdom("#" + cfg.targetID + "_AX_gridColHead").css({ left: 0 });
							_this.scrollXHandle.css({ left: 0 });
						}
					}

					if (bodyHeight < scrollHeight && cfg.height != "auto") {
						//_this.scrollTrackXY.show();
						_this.scrollTrackY.show();

						var scrollTrackYHeight = bodyHeight;
						_this.scrollTrackY.css({ height: scrollTrackYHeight });

						var scrollYHandleHeight = ((bodyHeight) * scrollTrackYHeight) / scrollHeight;
						// TODO : scrollYHandleHeight 최소 사이즈 예외 처리 최소 높이 = 30
						_this.scrollYHandle.data("height", scrollYHandleHeight);
						if(scrollYHandleHeight < 30) scrollYHandleHeight = 30;
						_this.scrollYHandle.css({ height: scrollYHandleHeight });
					} else {
						//_this.scrollTrackXY.hide();
						_this.scrollTrackY.hide();
					}

					if (scrollWidth > (bodyWidth+4) && cfg.xscroll) {
						_this.show_scrollTrackX = true;

						//_this.scrollTrackXY.show();
						_this.scrollTrackX.show();

						var scrollTrackXWidth = bodyWidth;
						_this.scrollTrackX.css({ width: scrollTrackXWidth });
						var scrollXHandleWidth = ((bodyWidth) * scrollTrackXWidth) / scrollWidth;
						_this.scrollXHandle.data("width", scrollXHandleWidth);
						if(scrollXHandleWidth < 30) scrollXHandleWidth = 30;
						_this.scrollXHandle.css({ width: scrollXHandleWidth });

						/* cfg.height == "auto" 길이 늘이기 */
						if (cfg.height == "auto") {
							var colHeadHeight = _this.colHead.outerHeight();
							var scrollBodyHeight = _this.scrollContent.height();
							//var scrollTrackXYHeight = _this.scrollTrackXY.outerHeight();
							_this.scrollBody.css({ height: (scrollBodyHeight + colHeadHeight) });
							_this.body.css({ top: colHeadHeight, height: (scrollBodyHeight) });
						}
					} else {
						_this.show_scrollTrackX = false;
						_this.scrollTrackX.hide();
						//if (cfg.height == "auto") _this.scrollTrackXY.hide();

						if (cfg.height == "auto") {
							var colHeadHeight = _this.colHead.outerHeight();
							var scrollBodyHeight = _this.scrollContent.height();
							_this.scrollBody.css({ height: (scrollBodyHeight + colHeadHeight) - cfg.scrollContentBottomMargin.number() });
							//colhead + body height
							_this.body.css({ top: colHeadHeight, height: (scrollBodyHeight) - cfg.scrollContentBottomMargin.number() });
							//body Height
						}
					}
				}, 10);
			},
			contentScrollScrollSync: function (pos) {
				var cfg = this.config;

				if (pos.left != undefined) {

					if (!this.contentScrollXAttr) {
						var scrollWidth = (this.colWidth > this.body.width()) ? this.colWidth : this.body.width();
						this.contentScrollXAttr = {
							bodyWidth: this.body.width(),
							scrollWidth: scrollWidth,
							scrollTrackXWidth: this.scrollTrackX.width(),
							scrollXHandleWidth: this.scrollXHandle.outerHeight()
						};
					}

					var L = (this.contentScrollXAttr.scrollWidth * (pos.left) / this.contentScrollXAttr.scrollTrackXWidth).round(0);
					this.scrollContent.css({ left: -L });
					axdom("#" + cfg.targetID + "_AX_gridColHead").css({ left: -L });
					if (this.hasEditor) axdom("#" + cfg.targetID + "_AX_editorContent").css({ left: -L });

				} else {
					if (cfg.height == "auto") return;
					if (!this.contentScrollYAttr) {
						this.contentScrollYAttr = {
							bodyHeight: this.body.height(),
							scrollHeight: this.scrollContent.outerHeight(),
							scrollTrackYHeight: this.scrollTrackY.height(),
							scrollYHandleHeight: this.scrollYHandle.outerHeight()
						};
					}else{
						// scrollContent height update
						this.contentScrollYAttr.scrollHeight = this.scrollContent.height();
					}


					//var T = (this.contentScrollYAttr.scrollHeight * (pos.top) / this.contentScrollYAttr.scrollTrackYHeight).floor();
					var T = (this.contentScrollYAttr.scrollHeight - this.contentScrollYAttr.bodyHeight) * ( (pos.top) / (this.contentScrollYAttr.scrollTrackYHeight - this.contentScrollYAttr.scrollYHandleHeight) ).number();
					this.scrollContent.css({ top: -T });
					if (axf.getId(cfg.targetID + "_AX_fixedScrollContent")) this.fixedScrollContent.css({ top: -T });
					if (this.editorOpend) {
						this.editor.css({ top: -T + this.editorOpenTop });
					}
					this.bigDataSync();
				}
			},
			contentScrollContentSync: function (pos, touch) {

				var cfg = this.config;
				if (pos.left != undefined) {

					if (!this.contentScrollXAttr) {
						var scrollWidth = (this.colWidth > this.body.width()) ? this.colWidth : this.body.width();
						this.contentScrollXAttr = {
							bodyWidth: this.body.width(),
							scrollWidth: this.scrollContent.width(),
							scrollTrackXWidth: this.scrollTrackX.width(),
							scrollXHandleWidth: this.scrollXHandle.outerWidth()
						};
					}

					var L = (this.contentScrollXAttr.scrollTrackXWidth - this.contentScrollXAttr.scrollXHandleWidth) * ((pos.left) / (this.contentScrollXAttr.scrollWidth - this.contentScrollXAttr.bodyWidth));
					this.scrollXHandle.css({ left: -L });
					axdom("#" + cfg.targetID + "_AX_gridColHead").css({ left: pos.left });
					if (this.hasEditor) axdom("#" + cfg.targetID + "_AX_editorContent").css({ left: pos.left });

				} else {

					if (cfg.height == "auto") return;
					if (!this.contentScrollYAttr) {
						this.contentScrollYAttr = {
							bodyHeight: this.body.height(),
							scrollHeight: this.scrollContent.height(),
							scrollTrackYHeight: this.scrollTrackY.height(),
							scrollYHandleHeight: this.scrollYHandle.outerHeight()
						};
					}else{
						// scrollContent height update
						this.contentScrollYAttr.scrollHeight = this.scrollContent.height();
						this.contentScrollYAttr.scrollTrackYHeight = this.scrollTrackY.height();
						this.contentScrollYAttr.scrollYHandleHeight = this.scrollYHandle.outerHeight();
					}

					var T = (this.contentScrollYAttr.scrollTrackYHeight - this.contentScrollYAttr.scrollYHandleHeight) * ((pos.top) / (this.contentScrollYAttr.scrollHeight - this.contentScrollYAttr.bodyHeight));
					this.scrollYHandle.css({ top: -T });
					if (axf.getId(cfg.targetID + "_AX_fixedScrollContent")) this.fixedScrollContent.css({ top: pos.top });
					if (this.editorOpend) {
						this.editor.css({ top: pos.top + this.editorOpenTop });
					}
				}

				if(touch == undefined) this.bigDataSync();
			},
			getMousePositionToContentScroll: function (event, contentScrollID) {
				var pos = axdom("#" + contentScrollID).offset();
				var x = (event.pageX - pos.left);
				var y = (event.pageY - pos.top);
				return { x: x, y: y };
			},
			getTouchPositionToContentScroll: function (event) {
				var cfg = this.config;
				var touch = event.touches[0], x, y;

				if (cfg.touchDirection) {
					x = touch.pageX.round(10);
					y = touch.pageY.round(10);
				} else {
					x = -touch.pageX.round(10);
					y = -touch.pageY.round(10);
				}
				/*
				 var pos = this.contentScrollIDOffset;
				 if (cfg.touchDirection) {
				 var x = (touch.pageX.round(1) - pos.left);
				 var y = (touch.pageY.round(1) - pos.top);
				 } else {
				 var x = (-touch.pageX.round(1) - pos.left);
				 var y = (-touch.pageY.round(1) - pos.top);
				 }
				 */
				return { x: x, y: y };
			},
			contentScrollScrollReady: function (event) {
				var cfg = this.config;
				var handleName = (event.target.id).split(/_AX_/).last();
				/*trace(handleName); */
				this.contentScrollAttrs = { handleName: handleName };
				this.contentScrollXAttr = null;
				this.contentScrollYAttr = null;

				if (handleName == "scrollYHandle") {
					this.contentScrollAttrs.scrollTrack = cfg.targetID + "_AX_scrollTrackY";
				} else {
					this.contentScrollAttrs.scrollTrack = cfg.targetID + "_AX_scrollTrackX";
				}
				axdom(event.target).addClass("hover");

				var pos = this.getMousePositionToContentScroll(event, this.contentScrollAttrs.scrollTrack);
				this.contentScrollAttrs.x               = axdom(event.target).position().left - pos.x;
				this.contentScrollAttrs.y               = axdom(event.target).position().top - pos.y;
				this.contentScrollAttrs.handleWidth     = axdom(event.target).outerWidth();
				this.contentScrollAttrs.handleHeight    = axdom(event.target).outerHeight();
				this.contentScrollAttrs.trackWidth      = this.scrollTrackX.width();
				this.contentScrollAttrs.trackHeight     = this.scrollTrackY.height();

				if (!this.contentScrollYAttr) {
					this.contentScrollYAttr = {
						bodyHeight: this.body.height(),
						scrollHeight: this.scrollContent.outerHeight(),
						scrollTrackYHeight: this.scrollTrackY.height(),
						scrollYHandleHeight: this.scrollYHandle.outerHeight()
					};
				}else{
					// scrollContent height update
					this.contentScrollYAttr.scrollHeight = this.scrollContent.height();
					this.contentScrollYAttr.scrollTrackYHeight = this.scrollTrackY.height();
					this.contentScrollYAttr.scrollYHandleHeight = this.scrollYHandle.outerHeight();
				}

				/* srcoll event bind */
				var contentScrollScrollMove = this.contentScrollScrollMove.bind(this);
				this.contentScrollScrollMoveBind = function (event) {
					contentScrollScrollMove(event);
				};
				var contentScrollScrollEnd = this.contentScrollScrollEnd.bind(this);
				this.contentScrollScrollEndBind = function (event) {
					contentScrollScrollEnd(event);
				};

				if (handleName == "scrollYHandle") {
					this.scrollYTip.show();
					this.contentScrollTipOverMove();
				}


				axdom(document.body).bind("mousemove.AXGrid", this.contentScrollScrollMoveBind);
				axdom(document.body).bind("mouseup.AXGrid", this.contentScrollScrollEndBind);
				axdom(document.body).bind("mouseleave.AXGrid", this.contentScrollScrollEndBind);

				axdom(document.body).attr("onselectstart", "return false");
				axdom(document.body).addClass("AXUserSelectNone");

				this.contentScrollScrolling = true;
				/* scroll event bind ~~~~~~~~~~~~~~~~~~~ */
			},
			contentScrollScrollMove: function (event) {
				var cfg = this.config;
				var pos = this.getMousePositionToContentScroll(event, this.contentScrollAttrs.scrollTrack);
				var handleName = this.contentScrollAttrs.handleName;
				/*trace(this.contentScrollAttrs); */
				var handleTop = 0;
				var handleLeft = 0;
				if (handleName == "scrollYHandle") {
					handleTop = (pos.y + this.contentScrollAttrs.y);
					if (handleTop < 0) handleTop = 0;
					if ((handleTop + this.contentScrollAttrs.handleHeight) > this.contentScrollAttrs.trackHeight) {
						handleTop = this.contentScrollAttrs.trackHeight - this.contentScrollAttrs.handleHeight;
					}
					this.scrollYHandle.css({ top: handleTop });
					this.scrollYHandle.data("top", handleTop);

					this.contentScrollTipOverMove(handleTop);
				} else {
					handleLeft = pos.x + this.contentScrollAttrs.x;
					if (handleLeft < 0) handleLeft = 0;
					if ((handleLeft + this.contentScrollAttrs.handleWidth) > this.contentScrollAttrs.trackWidth) handleLeft = this.contentScrollAttrs.trackWidth - this.contentScrollAttrs.handleWidth;
					this.scrollXHandle.css({ left: handleLeft });
				}
			},
			contentScrollScrollEnd: function (event) {
				var cfg = this.config;
				axdom(document.body).unbind("mousemove.AXGrid");
				axdom(document.body).unbind("mouseup.AXGrid");
				axdom(document.body).unbind("mouseleave.AXGrid");

				axdom(document.body).removeAttr("onselectstart");
				axdom(document.body).removeClass("AXUserSelectNone");
				axdom("#" + cfg.targetID + "_AX_" + this.contentScrollAttrs.handleName).removeClass("hover");
				this.contentScrollScrolling = false;

				if(this.contentScrollAttrs.handleName == "scrollYHandle"){
					this.contentScrollScrollSync({ top: this.scrollYHandle.position().top });

					if(this.contentScrollAttrs.trackHeight - this.contentScrollAttrs.handleHeight == this.scrollYHandle.data("top")){
						this.contentScrollEnd();
					}

					this.scrollYTip.hide();

				}else{
					this.contentScrollScrollSync({ left: this.scrollXHandle.position().left });
				}
			},
			contentScrollScrollWheel: function (e) {
				var cfg = this.config;

				if (cfg.height == "auto") return;

				if(!this.contentScrollAttrs){
					this.contentScrollYAttr = {
						bodyHeight: this.body.height(),
						scrollHeight: this.scrollContent.height(),
						scrollTrackYHeight: this.scrollTrackY.height(),
						scrollYHandleHeight: this.scrollYHandle.outerHeight()
					};
				}

				var event = window.event || e;
				var delta = event.detail ? event.detail * (-20) : event.wheelDelta / 2;
				/*check for detail first so Opera uses that instead of wheelDelta */

				var bodyHeight = this.body.height();
				var scrollTop = this.scrollContent.position().top;
				var scrollHeight = this.scrollContent.height();

				var handleHeight = this.scrollYHandle.outerHeight();
				var trackHeight = this.scrollTrackY.height();

				if (scrollHeight < bodyHeight) return;

				var eventCancle = false;
				scrollTop += delta;

				//trace(scrollTop.abs() + bodyHeight, scrollHeight);
				if (scrollTop > 0) {
					scrollTop = 0;
					eventCancle = true;
				} else if (scrollTop.abs() + bodyHeight > scrollHeight) {
					scrollTop = bodyHeight - scrollHeight;
					eventCancle = true;
				} else if (scrollTop == 0) {
					scrollTop = 0;
					eventCancle = true;
				}
				this.scrollContent.css({ top: scrollTop });
				this.contentScrollContentSync({ top: scrollTop });

				if (!eventCancle) {
					if (event.preventDefault) event.preventDefault();
					if (event.stopPropagation) event.stopPropagation();
					event.cancelBubble = true;
					return false;
				} else {
					if (scrollTop != 0) {
						var contentScrollEnd = this.contentScrollEnd.bind(this);
						if (this.contentScrollEndObserver) clearTimeout(this.contentScrollEndObserver);
						this.contentScrollEndObserver = setTimeout(function () {
							contentScrollEnd();
						}, 100);
					}
				}

			},
			contentScrollTouchstart: function (e) {
				var cfg = this.config;
				var event = window.event || e;

				if(cfg.viewMode == "mobile") return;

				this.contentScrollTouchMoved = true;
				this.contentScrollIDOffset = this.scrollContent.offset();
				this.contentScrollXAttr = null;
				this.contentScrollYAttr = null;

				var pos = this.getTouchPositionToContentScroll(event);

				this.scrollYHandle.addClass("hover");
				this.scrollXHandle.addClass("hover");

				this.scrollTouchAttr = {
					y: pos.y, h: this.body.outerHeight(), th: this.scrollContent.height(), nt:this.scrollContent.position().top,
					x: pos.x, w: this.body.outerWidth(), tw: this.scrollContent.width(), nl:this.scrollContent.position().left
				};

				var contentScrollTouchEnd = this.contentScrollTouchEnd.bind(this);
				this.contentScrollTouchEndBind = function () {
					contentScrollTouchEnd(event);
				};

				var contentScrollTouchMove = this.contentScrollTouchMove.bind(this);
				this.contentScrollTouchMoveBind = function () {
					contentScrollTouchMove(event);
				};

				if (document.addEventListener) {
					document.addEventListener("touchend", this.contentScrollTouchEndBind, false);
					document.addEventListener("touchmove", this.contentScrollTouchMoveBind, false);
				}
			},
			contentScrollTouchMove: function (e) {
				var cfg = this.config;
				var event = window.event || e;
				if (this.contentScrollTouchMoved) {

					var pos = this.getTouchPositionToContentScroll(event);
					var scrollTouchAttr = this.scrollTouchAttr;

					var eventCancle = false;

					if (scrollTouchAttr.th > scrollTouchAttr.h && cfg.height != "auto") {
						var scrollTop = scrollTouchAttr.nt - (pos.y - scrollTouchAttr.y);
						//trace(scrollTop);
						if (scrollTop > 0) {
							scrollTop = 0;
							eventCancle = true;
						} else if (scrollTop.abs() + scrollTouchAttr.h > scrollTouchAttr.th) {
							scrollTop = scrollTouchAttr.h - scrollTouchAttr.th;
							eventCancle = true;
						} else if (scrollTop == 0) {
							scrollTop = 0;
							eventCancle = true;
						}

						this.scrollContent.css({ top: scrollTop });
						this.contentScrollContentSync({ top: scrollTop }, "touch");
					}else{
						eventCancle = true;
					}

					if (this.show_scrollTrackX && (pos.x - scrollTouchAttr.x).abs() > 8) {
						eventCancle = false;
						var scrollLeft = scrollTouchAttr.nl - (pos.x - scrollTouchAttr.x);

						if (scrollLeft > 0) {
							scrollLeft = 0;
							eventCancle = true;
						} else if (scrollLeft.abs() + scrollTouchAttr.w > scrollTouchAttr.tw) {
							scrollLeft = scrollTouchAttr.w - scrollTouchAttr.tw;
							eventCancle = true;
						} else if (scrollLeft == 0) {
							scrollLeft = 0;
							eventCancle = true;
						}
						this.scrollContent.css({ left: scrollLeft });
						this.contentScrollContentSync({ left: scrollLeft }, "touch");
					}

					if (!eventCancle) {
						if (event.preventDefault) event.preventDefault();
						//if (event.stopPropagation) event.stopPropagation();
						//event.cancelBubble = true;
						//return false;
					} else {
						if (scrollTop != 0) {
							var contentScrollEnd = this.contentScrollEnd.bind(this);
							if (this.contentScrollEndObserver) clearTimeout(this.contentScrollEndObserver);
							this.contentScrollEndObserver = setTimeout(function () {
								contentScrollEnd();
							}, 100);
						}
					}
				}
			},
			contentScrollTouchEnd: function (e) {
				var cfg = this.config;
				var event = window.event || e;
				if (this.contentScrollTouchMoved) {

					if(cfg.height != "auto") this.bigDataSync();

					//TODO : 관성법칙 적용 해야함.
					this.scrollXHandle.removeClass("hover");
					this.scrollYHandle.removeClass("hover");

					if (document.removeEventListener) {
						document.removeEventListener("touchend", this.contentScrollTouchEndBind, false);
						document.removeEventListener("touchmove", this.contentScrollTouchMoveBind, false);
					}
					this.contentScrollTouchMoved = false;
				}
			},
			contentScrollEnd: function () {
				if (this.contentScrollEndObserver) clearTimeout(this.contentScrollEndObserver);
				var cfg = this.config;
				if (cfg.body.onscrollend) {
					try {
						cfg.body.onscrollend.call({ list: this.list, page: this.page });
					} catch (e) {
						trace(e);
					}
				}
			},

			contentScrollTipOver: function(event){
				// TODO : contentScrollTipOver
				/*
				 var cfg = this.config;
				 this.scrollYHandle.bind("mousemove");
				 this.scrollYHandle.bind("mouseout");
				 */
			},
			contentScrollTipOverMove: function(handleTop){
				var cfg = this.config;
				/*
				 if (!this.contentScrollYAttr) {
				 this.contentScrollYAttr = {
				 bodyHeight: this.body.height(),
				 scrollHeight: this.scrollContent.outerHeight(),
				 scrollTrackYHeight: this.scrollTrackY.height(),
				 scrollYHandleHeight: this.scrollYHandle.outerHeight()
				 };
				 }else{
				 // scrollContent height update
				 this.contentScrollYAttr.scrollHeight = this.scrollContent.height();
				 this.contentScrollYAttr.scrollTrackYHeight = this.scrollTrackY.height();
				 this.contentScrollYAttr.scrollYHandleHeight = this.scrollYHandle.outerHeight();
				 }
				 */
				var hTop = handleTop || this.scrollYHandle.position().top;
				var T = (this.contentScrollYAttr.scrollHeight - this.contentScrollYAttr.bodyHeight) * ( (hTop) / (this.contentScrollYAttr.scrollTrackYHeight - this.contentScrollYAttr.scrollYHandleHeight) ).number();
				this.scrollYTipSpan.empty();
				this.scrollYTipSpan.append( ((T.abs() / this.virtualScroll.itemTrHeight)).floor().money() + "/" + this.list.length.money() );
				this.scrollYTip.css({top:hTop});
			},
			contentScrollTipOverOut: function(event){
				var cfg = this.config;
				this.scrollYHandle.unbind("mousemove");
				this.scrollYHandle.unbind("mouseout");
				this.scrollYTip.hide();
			},

			bigDataSync: function(){
				var cfg = this.config;
				if(cfg.viewMode == "grid"){
					if(this.bigDataSyncObserver) clearTimeout(this.bigDataSyncObserver);
					this.bigDataSyncObserver = setTimeout(this.bigDataSyncApply.bind(this), 10);
				}
			},
			bigDataSyncApply: function(){
				var cfg = this.config;
				var bodyHasMarker = this.bodyHasMarker;
				var getItem = this.getItem.bind(this);
				var getItemMarker = this.getItemMarker.bind(this);
				var getMarkerDisplay = this.getMarkerDisplay.bind(this);
				// TODO : bigDataSyncApply
				var scrollContentScrollTop, VS = this.virtualScroll, po = [], item;
				if(VS.scrollTop != (scrollContentScrollTop = this.scrollContent.position().top)){
					var newStartIndex = (scrollContentScrollTop.abs() / VS.itemTrHeight).ceil() - 1;
					if(newStartIndex < 0) newStartIndex = 0;
					var newEndIndex = newStartIndex + VS.printListCount;
					if(newEndIndex > this.list.length) {
						newEndIndex = this.list.length;
						newStartIndex = newEndIndex - VS.printListCount;
					}
					if(VS.startIndex != newStartIndex) {
						//그리드 내용 다시 구성
						po = [];
						for (var itemIndex = newStartIndex; itemIndex < newEndIndex; itemIndex++) {
							item = this.list[itemIndex];
							po.push(getItem(itemIndex, item, "n"));
							if (bodyHasMarker && getMarkerDisplay(itemIndex, item)) {
								po.push(getItemMarker(itemIndex, item, "n"));
							}
						}
						this.cachedDom.tbody.empty();
						this.cachedDom.tbody.append(po.join(''));
						// 셀머지
						if (cfg.mergeCells) {
							this.mergeCells(this.cachedDom.tbody, "n");
						}

						if (this.hasFixed) {
							po = [];
							for (var itemIndex = newStartIndex; itemIndex < newEndIndex; itemIndex++) {
								item = this.list[itemIndex];
								po.push(getItem(itemIndex, item, "fix"));
								if (bodyHasMarker && getMarkerDisplay(itemIndex, item)) {
									po.push(getItemMarker(itemIndex, item, "fix"));
								}
							}
							this.cachedDom.fixed_tbody.empty();
							this.cachedDom.fixed_tbody.append(po.join(''));
							//셀머지
							if (cfg.mergeCells) {
								this.mergeCells(this.cachedDom.fixed_tbody, "f");
							}
						}

						this.cachedDom.thpadding.css({ height: (newStartIndex) * VS.itemTrHeight }); // 상단패딩증가

						var tfpaddingHeight = cfg.scrollContentBottomMargin.number() + (this.list.length - newEndIndex - 1) * (VS.itemTrHeight);
						if(tfpaddingHeight < cfg.scrollContentBottomMargin.number()) tfpaddingHeight = cfg.scrollContentBottomMargin.number();
						this.cachedDom.tfpadding.css({ height: tfpaddingHeight });
						if (this.hasFixed) {
							this.cachedDom.fthpadding.css({ height: (newStartIndex) * VS.itemTrHeight }); // 상단패딩증가
							this.cachedDom.ftfpadding.css({ height: tfpaddingHeight });
						}

						this.body.find(".gridBodyTr").bind("mouseover", this.gridBodyOver.bind(this));
						this.body.find(".gridBodyTr").bind("mouseout", this.gridBodyOut.bind(this));
						this.body.find(".gridBodyTr").bind("click", this.gridBodyClick.bind(this));
						if (this.needBindDBLClick()) this.body.find(".gridBodyTr").bind("dblclick", this.gridBodyDBLClick.bind(this));

						if (this.selectedRow != undefined && this.selectedRow.length > 0) {
							var body = this.body;
							for(var itemIndex = 0;itemIndex < this.selectedRow.length;itemIndex++){
								body.find(".gridBodyTr_" + this.selectedRow[itemIndex]).addClass("selected");
							}
						}

						VS.startIndex = newStartIndex;
						VS.endIndex = newEndIndex;
						VS.scrollTop = scrollContentScrollTop;

						//TODO : body.onchangeScroll
						if(cfg.body.onchangeScroll){
							var sendObj = axf.copyObject(this.virtualScroll);
							cfg.body.onchangeScroll.call(sendObj, sendObj);
						}
					}
				}
			},

			scrollTop: function (itemIndex) {
				var cfg = this.config;
				if (cfg.height == "auto") return;
				try {
					var trTop = this.body.find(".gridBodyTr_" + itemIndex).position().top;
					var trHeight = this.body.find(".gridBodyTr_" + itemIndex).height();

					var scrollHeight = this.scrollContent.height();
					var bodyHeight = this.body.height();
					var handleHeight = this.scrollYHandle.outerHeight();
					var trackHeight = this.scrollTrackY.height();

					if (trTop.number() + trHeight.number() > bodyHeight) {
						var scrollTop = bodyHeight - (trTop.number() + trHeight.number());
						if (this.body.height() < scrollHeight) {
							this.scrollContent.css({ top: scrollTop });
							this.contentScrollContentSync({ top: scrollTop });
						}
					} else {
						if (trTop.number() == 0) {
							var scrollTop = 0;
							this.scrollContent.css({ top: scrollTop });
							this.contentScrollContentSync({ top: scrollTop });
						}
					}
				} catch (e) {
					var scrollTop = 0;
					this.scrollContent.css({ top: scrollTop });
					this.contentScrollContentSync({ top: scrollTop });
				}
			},
			setFocus: function (itemIndex) {
				var cfg = this.config, _this = this;

				if (cfg.viewMode == "grid") {

					if (this.selectedCells.length > 0) {
						axf.each(this.selectedCells, function () {
							axdom("#" + this).removeClass("selected");
						});
						this.selectedCells.clear();
					}
					if (this.selectedRow.length > 0) {
						var body = this.body;
						axf.each(this.selectedRow, function () {
							body.find(".gridBodyTr_" + this).removeClass("selected");
						});
					}

					if(this.virtualScroll.startIndex > itemIndex || this.virtualScroll.endIndex < itemIndex){

						this.selectedRow.clear();
						this.selectedRow.push(itemIndex);

						var scrollHeight = this.scrollContent.height();
						var bodyHeight = this.body.height();
						var handleHeight = this.scrollYHandle.outerHeight();
						var trackHeight = this.scrollTrackY.height();

						//var scrollTop = bodyHeight - scrollHeight;
						// itemIndex 에 맞는 scrollTop 구하기
						var scrollTop = this.virtualScroll.itemTrHeight * itemIndex;

						//this.scrollContent.css({ top: scrollTop });
						//this.contentScrollContentSync({ top: scrollTop }, "manual");
						this.bigDataSyncApply();

						setTimeout(function(){
							if(_this.body.find(".gridBodyTr_" + itemIndex).get(0)) {
								var trTop = _this.body.find(".gridBodyTr_" + itemIndex).position().top;
								var trHeight = _this.body.find(".gridBodyTr_" + itemIndex).height();

								if (trTop.number() + trHeight.number() > bodyHeight) {
									scrollTop = bodyHeight - (trTop.number() + trHeight.number());
									_this.scrollContent.css({ top: scrollTop });
									_this.contentScrollContentSync({ top: scrollTop });
								} else {
									if (trTop.number() == 0) {
										scrollTop = 0;
										_this.scrollContent.css({ top: scrollTop });
										_this.contentScrollContentSync({ top: scrollTop });
									}
								}
							}
						}, 1);

					}else{

						this.selectedRow.clear();
						this.body.find(".gridBodyTr_" + itemIndex).addClass("selected");
						this.selectedRow.push(itemIndex);

						var trTop = this.body.find(".gridBodyTr_" + itemIndex).position().top;
						var trHeight = this.body.find(".gridBodyTr_" + itemIndex).height();

						var scrollHeight = this.scrollContent.height();
						var bodyHeight = this.body.height();
						var handleHeight = this.scrollYHandle.outerHeight();
						var trackHeight = this.scrollTrackY.height();


						if (trTop.number() + trHeight.number() > bodyHeight) {
							var scrollTop = bodyHeight - (trTop.number() + trHeight.number());
							this.scrollContent.css({ top: scrollTop });
							this.contentScrollContentSync({ top: scrollTop });
						} else {
							if (trTop.number() == 0) {
								var scrollTop = 0;
								this.scrollContent.css({ top: scrollTop });
								this.contentScrollContentSync({ top: scrollTop });
							}
						}
					}

				} else if (cfg.viewMode == "icon") {

				} else if (cfg.viewMode == "mobile") {

					if (this.selectedCells.length > 0) {
						axf.each(this.selectedCells, function () {
							axdom("#" + this).removeClass("selected");
						});
						this.selectedCells.clear();
					}
					if (this.selectedRow.length > 0) {
						var body = this.body;
						axf.each(this.selectedRow, function () {
							body.find(".bodyViewMobile_" + this).removeClass("selected");
						});
					}

					this.selectedRow.clear();
					this.body.find(".bodyViewMobile_" + itemIndex).addClass("selected");
					this.selectedRow.push(itemIndex);

					this.body.find(".bodyViewMobile_" + itemIndex).focus();
				}
			},
			focusMove: function (direction, event) {
				var cfg = this.config;
				var myIndex = this.selectedRow.first();
				var newIndex = myIndex.number() + direction;
				if (newIndex < 0) newIndex = this.list.length - 1;
				else if (newIndex > (this.list.length - 1)) newIndex = 0;
				this.setFocus(newIndex);

				if (event.preventDefault) event.preventDefault();
				if (event.stopPropagation) event.stopPropagation();
				event.cancelBubble = true;
				return false;
			},
			getSelectedItem: function () {
				var cfg = this.config;
				if (this.selectedRow != undefined && this.selectedRow != null && this.selectedRow.length > 0) {
					return { index: this.selectedRow.first(), item: this.list[this.selectedRow.first()] };
				} else {
					return { error: "noselected", description: "선택된 item이 없습니다." };
				}
			},
			click: function (itemIndex) {
				var cfg = this.config;
				this.setFocus(itemIndex);

				var item = this.list[itemIndex];

				if (cfg.body.onclick) {

					var sendObj = {
						index: itemIndex,
						list: this.list,
						item: item,
						page: this.page
					};

					try {
						cfg.body.onclick.call(sendObj, itemIndex, item);
					} catch (e) {
						trace(e);
					}
				}

				if (event.preventDefault) event.preventDefault();
				if (event.stopPropagation) event.stopPropagation();
				event.cancelBubble = true;
				return false;
			},
			// TODO : mergeCells
			mergeCells: function(tgDom, typ){
				var cfg = this.config;
				// 중복된 셀 머지 함수
				// 1 셀정보 수집
				var rows = [];
				tgDom.find("tr").each(function(tri, tr){
					var row = [];
					axdom(tr).find("td").each(function(tdi, td){
						var item = {
							tdom    : axdom(td),
							rowspan : 1
						};
						if(!item.tdom.hasClass("bodyNullTd")){
							item.html   = item.tdom.find("div.bodyNode").html();
							item.tri    = tri;
							item.tdi    = tdi;
							row.push(item);
						}
					});
					rows.push(row);
				});

				var _val = {};
				if(Object.isArray(cfg.mergeCells)){
					for(var tri = 0;tri < rows.length;tri++){
						for(var mci = 0;mci < cfg.mergeCells.length;mci++){
							var tdi;
							if( rows[tri][ (tdi = cfg.mergeCells[mci]) ]){
								if( _val["td_"+tdi] ) {
									if( _val["td_" + tdi].html == rows[tri][tdi].html ) {
										rows[ _val["td_" + tdi].tri ][tdi].rowspan++;
										rows[tri][tdi].rowspan = 0;
									}else {
										_val["td_" + tdi] = {
											tri    : tri,
											tdi    : tdi,
											rowspan: 1,
											html   : rows[tri][tdi].html
										};
									}
								}else {
									_val["td_" + tdi] = {
										tri    : tri,
										tdi    : tdi,
										rowspan: 1,
										html   : rows[tri][tdi].html
									};
								}
							}
						}
					}
				}else{
					for(var tri = 0;tri < rows.length;tri++){
						for(var tdi = 0;tdi < rows[tri].length;tdi++) {
							if( _val["td_"+tdi] ) {
								if( _val["td_" + tdi].html == rows[tri][tdi].html ) {
									rows[ _val["td_" + tdi].tri ][tdi].rowspan++;
									rows[tri][tdi].rowspan = 0;
								}else {
									_val["td_" + tdi] = {
										tri    : tri,
										tdi    : tdi,
										rowspan: 1,
										html   : rows[tri][tdi].html
									};
								}
							}else {
								_val["td_" + tdi] = {
									tri    : tri,
									tdi    : tdi,
									rowspan: 1,
									html   : rows[tri][tdi].html
								};
							}
						}
					}
				}
				_val = null;

				for(var tri = 0;tri < rows.length;tri++) {
					for(var tdi = 0;tdi < rows[tri].length;tdi++) {
						if(rows[tri][tdi].rowspan == 0) rows[tri][tdi].tdom.remove();
						else rows[tri][tdi].tdom.attr("rowspan", rows[tri][tdi].rowspan);
					}
				}
				rows = null;
			},
			// body 영역 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

			// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ head & foot 영역
			getDataSetFormatterValue: function (formatter, dataSet, value, key, CH) {
				var cfg = this.config;
				var result;
				if (formatter == "money") {
					if (value == "" || value == "null" || value == undefined) {
						result = "0";
					} else {
						result = value.number().money();
					}
				} else if (formatter == "dec") {
					result = (value == undefined) ? "" : value.dec();
				} else if (formatter == "html") {
					result = value;
				} else if (formatter == "checkbox" || formatter == "radio") {
					result = value;
				} else {
					var sendObj = {
						index: null,
						list: this.list,
						item: dataSet,
						dataSet: dataSet,
						page: this.page,
						key: key,
						value: value
					};
					try {
						result = formatter.call(sendObj);
					} catch (e) {
						trace(e);
					}
				}
				return result;
			},
			getHeadDataSet: function (dataSet, isfix) {
				var cfg = this.config;
				if (dataSet == undefined) return;
				var tpo = [];
				var getDataSetFormatterValue = this.getDataSetFormatterValue.bind(this);
				/*dataSet 빈 Key 채우기 */
				axf.each(cfg.colGroup, function () {
					if (dataSet[this.key] == undefined) dataSet[this.key] = "";
				});
				/*dataSet 빈 Key 채우기 ~~~~~~~~~~~~~~~~ */
				var hasFixed = this.hasFixed;

				for (var r = 0; r < cfg.head.rows.length; r++) {
					var isLastTR = (cfg.head.rows.length - 1 == r);
					tpo.push("<tr class=\"gridBodyTr gridBodyTr_foot\" id=\"" + cfg.targetID + "_AX_head_" + r + "_AX_" + (isfix || "n") + "\">");
					var colCount = 0;

					axf.each(cfg.head.rows[r], function (CHidx, CH) {
						if (CH.display && CH.colspan > 0) {

							if (isfix == undefined || (isfix != undefined && colCount < (cfg.fixedColSeq + 1))) {

								colCount += CH.colspan;

								/*radio, check exception */
								var rowspan = (CH.rowspan > 1) ? " rowspan=\"" + CH.rowspan + "\"" : "";
								var colspan = (CH.colspan > 1) ? " colspan=\"" + CH.colspan + "\"" : "";
								var valign = " valign=\"" + CH.valign + "\" style=\"vertical-align:" + CH.valign + ";\"";
								var bottomClass = (CH.isLastCell) ? "" : " bodyBottomBorder";
								var fixedClass = (CH.isFixedEndCell) ? " fixedLine" : "";

								/*trace({r:r, CHidx:CHifixedColSeq:cfg.fixedColSeq, colCount:colCount}); */

								var bodyNodeClass = "";
								if (CH.formatter == "checkbox" || CH.formatter == "radio") bodyNodeClass = " bodyTdCheckBox";
								else if (CH.formatter == "html") bodyNodeClass = " bodyTdHtml";

								tpo.push("<td" + valign + rowspan + colspan + " id=\"" + cfg.targetID + "_AX_" + (isfix || "n") + "head_AX_" + r + "_AX_" + CHidx + "\" class=\"bodyTd" + bottomClass + fixedClass + "\">");
								/*tpo.push("<div class=\"tdRelBlock\">");*/
								tpo.push("<div class=\"bodyNode bodyTdText" + bodyNodeClass + "\" align=\"" + CH.align + "\" id=\"" + cfg.targetID + "_AX_headText_AX_" + r + "_AX_" + CHidx + "\">");
								if ((hasFixed && !CH.isFixedCell) || !hasFixed || isfix != undefined) {
									if (CH.formatter) {
										tpo.push(getDataSetFormatterValue(CH.formatter, dataSet, dataSet[CH.key], CH.key, CH));
									} else {
										tpo.push(dataSet[CH.key]);
									}
								} else {
									tpo.push("&nbsp;");
								}
								tpo.push("</div>");
								/*tpo.push("</div>");*/
								tpo.push("</td>");
							}
						}
					});
					if (r == 0 && isfix == undefined) {
						tpo.push("<td class=\"bodyNullTd\" id=\"" + cfg.targetID + "_AX_headnull\" rowspan=\"" + cfg.head.rows.length + "\"><div class=\"tdRelBlock\">&nbsp;</div></td>");
					}
					tpo.push("</tr>");
				}
				return tpo.join('');
			},
			getFootDataSet: function (dataSet, isfix) {
				var cfg = this.config;
				if (dataSet == undefined) return;
				var tpo = [];
				var getDataSetFormatterValue = this.getDataSetFormatterValue.bind(this);
				/*dataSet 빈 Key 채우기 */
				axf.each(cfg.colGroup, function () {
					if (dataSet[this.key] == undefined) dataSet[this.key] = "";
				});
				/*dataSet 빈 Key 채우기 ~~~~~~~~~~~~~~~~ */
				var hasFixed = this.hasFixed;

				for (var r = 0; r < cfg.foot.rows.length; r++) {
					var isLastTR = (cfg.foot.rows.length - 1 == r);
					tpo.push("<tr class=\"gridBodyTr gridBodyTr_foot\" id=\"" + cfg.targetID + "_AX_foot_" + r + "_AX_" + (isfix || "n") + "\">");
					var colCount = 0;

					axf.each(cfg.foot.rows[r], function (CHidx, CH) {
						if (CH.display && CH.colspan > 0) {

							if (isfix == undefined || (isfix != undefined && colCount < (cfg.fixedColSeq + 1))) {

								colCount += CH.colspan;

								/*radio, check exception */
								var rowspan = (CH.rowspan > 1) ? " rowspan=\"" + CH.rowspan + "\"" : "";
								var colspan = (CH.colspan > 1) ? " colspan=\"" + CH.colspan + "\"" : "";
								var valign = " valign=\"" + CH.valign + "\" style=\"vertical-align:" + CH.valign + ";\"";
								var bottomClass = (CH.isLastCell) ? "" : " bodyBottomBorder";
								var fixedClass = (CH.isFixedEndCell) ? " fixedLine" : "";

								/*trace({r:r, CHidx:CHifixedColSeq:cfg.fixedColSeq, colCount:colCount}); */

								var bodyNodeClass = "";
								if (CH.formatter == "checkbox" || CH.formatter == "radio") bodyNodeClass = " bodyTdCheckBox";
								else if (CH.formatter == "html") bodyNodeClass = " bodyTdHtml";

								tpo.push("<td" + valign + rowspan + colspan + " id=\"" + cfg.targetID + "_AX_" + (isfix || "n") + "foot_AX_" + r + "_AX_" + CHidx + "\" class=\"bodyTd" + bottomClass + fixedClass + "\">");
								/*tpo.push("<div class=\"tdRelBlock\">");*/
								tpo.push("<div class=\"bodyNode bodyTdText" + bodyNodeClass + "\" align=\"" + CH.align + "\" id=\"" + cfg.targetID + "_AX_footText_AX_" + r + "_AX_" + CHidx + "\">");
								if ((hasFixed && !CH.isFixedCell) || !hasFixed || isfix != undefined) {
									if (CH.formatter) {
										tpo.push(getDataSetFormatterValue(CH.formatter, dataSet, dataSet[CH.key], CH.key, CH));
									} else {
										tpo.push(dataSet[CH.key]);
									}
								} else {
									tpo.push("&nbsp;");
								}
								tpo.push("</div>");
								/*tpo.push("</div>");*/
								tpo.push("</td>");
							}
						}
					});
					if (r == 0 && isfix == undefined) {
						tpo.push("<td class=\"bodyNullTd\" id=\"" + cfg.targetID + "_AX_footnull\" rowspan=\"" + cfg.foot.rows.length + "\"><div class=\"tdRelBlock\">&nbsp;</div></td>");
					}
					tpo.push("</tr>");
				}
				return tpo.join('');
			},
			setDataSet: function (obj) {
				var cfg = this.config;
				if (obj.ajaxUrl) {

				} else {
					if (axdom.isPlainObject(obj)) {
						this.dataSet = obj;
						if (cfg.head) this.printHead();
						if (cfg.foot) this.printFoot();
						this.contentScrollResize(false);
					}
				}
			},
			redrawDataSet: function () {
				var cfg = this.config;
				if (this.dataSet) {
					if (cfg.head) this.printHead();
					if (cfg.foot) this.printFoot();
				}
			},
			printHead: function () {
				var cfg = this.config;
				var getDataSet = this.getHeadDataSet.bind(this);
				var po = [];
				po.push(getDataSet(this.dataSet));
				axdom("#" + cfg.targetID + "_AX_thead").html(po.join(''));
				if (this.hasFixed) {
					po = [];
					po.push(getDataSet(this.dataSet, "fix"));
					axdom("#" + cfg.targetID + "_AX_fixedThead").html(po.join(''));
				}
			},
			printFoot: function () {
				var cfg = this.config;
				var getDataSet = this.getFootDataSet.bind(this);
				var po = [];
				po.push(getDataSet(this.dataSet));
				axdom("#" + cfg.targetID + "_AX_tfoot").html(po.join(''));
				if (this.hasFixed) {
					po = [];
					po.push(getDataSet(this.dataSet, "fix"));
					axdom("#" + cfg.targetID + "_AX_fixedTfoot").html(po.join(''));
				}
			},
			/* head & foot 영역 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

			/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ editor 영역  */
			getEditorFormatterValue: function (formatter, dataSet, value, key, CH, idAttr) {
				var cfg = this.config;
				var result;
				if (formatter == "money") {
					if (value == "" || value == "null" || value == undefined) {
						result = "0";
					} else {
						result = value.number().money();
					}
				} else if (formatter == "dec") {
					result = (value == undefined) ? "" : value.dec();
				} else if (formatter == "html") {
					result = value;
				} else if (formatter == "checkbox" || formatter == "radio") {
					result = value;
				} else {
					var sendObj = {
						index: null,
						list: this.list,
						item: dataSet,
						dataSet: dataSet,
						page: this.page,
						key: key,
						value: value
					};
					try {
						result = formatter.call(sendObj);
					} catch (e) {
						trace(e);
					}
				}

				var formID = cfg.targetID + "_AX_" + key + "_AX_" + idAttr;
				var inputHidden = "<input type=\"hidden\" id=\"" + formID + "\" name=\"" + key + "\" value=\"" + value + "\" />";

				return result + inputHidden;
			},
			getEditorFormValue: function (form, dataSet, value, key, CH, idAttr) {
				var cfg = this.config;
				var paddingRight = cfg.formPaddingRight;
				var result = [];

				var formClass = (form.addClass) ? " " + form.addClass : "";
				var formWidth = (form.width) ? "width:" + form.width + ";" : "width:100%;";
				var formHeight = (form.height) ? "height:" + form.height + ";" : "";
				var formStyle = (form.style) ? form.style : "";
				var formID = (form.id) ? form.id : cfg.targetID + "_AX_" + key + "_AX_" + idAttr;

				var getFormValue = function (formvalue, value) {
					if (formvalue == "itemValue" || formvalue == "itemText") {
						if (axdom.isArray(value)) {
							return value;
						} else {
							return (value || "").dec();
						}
					} else if (axdom.isFunction(formvalue)) {
						var sendObj = {
							key: key,
							value: value,
							list: this.list,
							page: this.page
						};
						return formvalue.call(sendObj, key, value);
					} else {
						return formvalue;
					}
				};

				if (form.type == "hidden") {
					/*result.push("<div style=\"padding-right:"+paddingRight+";\">"); */
					result.push("&nbsp;");
					result.push("<input type=\"hidden\" id=\"" + formID + "\" name=\"" + key + "\" value=\"" + getFormValue(form.value, dataSet[key]) + "\" class=\"AXInput" + formClass + "\" style=\"" + formWidth + formHeight + formStyle + "\" />");
					/*result.push("</div>"); */
				} else if (form.type == "text") {
					result.push("<div style=\"padding-right:" + paddingRight + ";\">");
					result.push("<input type=\"text\" id=\"" + formID + "\" name=\"" + key + "\" value=\"" + getFormValue(form.value, dataSet[key]) + "\" class=\"AXInput" + formClass + "\" style=\"" + formWidth + formHeight + formStyle + "\" />");
					result.push("</div>");
				} else if (form.type == "textarea") {
					result.push("<div style=\"padding-right:" + paddingRight + ";\">");
					result.push("<textarea id=\"" + formID + "\" name=\"" + key + "\" class=\"AXTextarea" + formClass + "\" style=\"" + formWidth + formHeight + formStyle + "\" >" + getFormValue(form.value, dataSet[key]) + "</textarea>");
					result.push("</div>");
				} else if (form.type == "select") {
					var formValue = getFormValue(form.value, dataSet[key]);
					/*trace({key:key, dataSet_key:dataSet[key], formValue:formValue}); */
					result.push("<div style=\"padding-right:1px;\">");
					result.push("<select id=\"" + formID + "\" name=\"" + key + "\" class=\"AXSelect" + formClass + "\" style=\"" + formWidth + formHeight + formStyle + "\" >");
					if (form.isspace) result.push("<option value=\"\">", (form.isspaceTitle || "").dec(), "</option>");
					axf.each(form.options, function () {
						result.push("<option value=\"" + (this.value || this.optionValue) + "\"");
						if (form.value == "itemText") {
							if (formValue == (this.text || this.optionText).dec()) result.push(" selected=\"selected\"");
						} else {
							if (formValue == (this.value || this.optionValue)) result.push(" selected=\"selected\"");
						}
						result.push(">" + (this.text || this.optionText).dec() + "</option>");
					});
					result.push("</select>");
					result.push("</div>");
				} else if (form.type == "radio") {
					var formValue = getFormValue(form.value, dataSet[key]);
					axf.each(form.options, function (oidx, opt) {
						result.push("<input type=\"radio\" id=\"" + formID + "_AX_" + oidx + "\" name=\"" + key + "\" value=\"" + this.value + "\"");
						if (formValue == this.value) result.push(" checked=\"checked\"");
						result.push("><label for=\"" + formID + "_AX_" + oidx + "\">" + this.text.dec() + "</label><br/>");
					});
				} else if (form.type == "checkbox") {
					var formValue = getFormValue(form.value, dataSet[key]);
					axf.each(form.options, function (oidx, opt) {
						result.push("<input type=\"checkbox\" id=\"" + formID + "_AX_" + oidx + "\" name=\"" + key + "\" value=\"" + this.value + "\"");
						if (axdom.isArray(formValue)) {
							var isChecked = false;
							var _value = this.value;
							axf.each(formValue, function () {
								if (this == _value) {
									isChecked = true;
									return false;
								}
							});
							if (isChecked) result.push(" checked=\"checked\"");
						} else {
							if (formValue == this.value) result.push(" checked=\"checked\"");
						}
						result.push("><label for=\"" + formID + "_AX_" + oidx + "\">" + this.text.dec() + "</label><br/>");
					});
				}
				return result.join('');
			},
			getEditorBody: function (dataSet, isfix) {
				var cfg = this.config;
				var getEditorFormatterValue = this.getEditorFormatterValue.bind(this);
				var getEditorFormValue = this.getEditorFormValue.bind(this);
				var tpo = [];
				var hasFixed = this.hasFixed;

				for (var r = 0; r < cfg.editor.rows.length; r++) {
					var isLastTR = (cfg.editor.rows.length - 1 == r);
					tpo.push("<tr class=\"gridBodyTr gridBodyTr_editor\" id=\"" + cfg.targetID + "_AX_editor_" + r + "_AX_" + (isfix || "n") + "\">");
					var colCount = 0;

					axf.each(cfg.editor.rows[r], function (CHidx, CH) {
						if (CH.display && CH.colspan > 0) {
							if (isfix == undefined || (isfix != undefined && colCount < (cfg.fixedColSeq + 1))) {
								colCount += CH.colspan;

								/*radio, check exception */
								var rowspan = (CH.rowspan > 1) ? " rowspan=\"" + CH.rowspan + "\"" : "";
								var colspan = (CH.colspan > 1) ? " colspan=\"" + CH.colspan + "\"" : "";
								var valign = " valign=\"" + CH.valign + "\" style=\"vertical-align:" + CH.valign + ";\"";
								var bottomClass = (CH.isLastCell) ? "" : " bodyBottomBorder";
								var fixedClass = (CH.isFixedEndCell) ? " fixedLine" : "";

								var bodyNodeClass = "";
								if (CH.formatter == "checkbox") bodyNodeClass = " bodyTdCheckBox";
								else if (CH.formatter == "html") bodyNodeClass = " bodyTdHtml";

								tpo.push("<td" + valign + rowspan + colspan + " id=\"" + cfg.targetID + "_AX_" + (isfix || "n") + "editor_AX_" + r + "_AX_" + CHidx + "\" class=\"bodyTd" + bottomClass + fixedClass + "\">");
								/*tpo.push("<div class=\"tdRelBlock\">");*/
								tpo.push("<div class=\"bodyNode bodyTdText" + bodyNodeClass + "\" align=\"" + CH.align + "\" id=\"" + cfg.targetID + "_AX_editorText_AX_" + r + "_AX_" + CHidx + "\">");
								if ((hasFixed && !CH.isFixedCell) || !hasFixed || isfix != undefined) {
									if (CH.form) {
										tpo.push(getEditorFormValue(CH.form, dataSet, dataSet[CH.key], CH.key, CH, r + "_AX_" + CHidx));
									} else if (CH.formatter) {
										tpo.push(getEditorFormatterValue(CH.formatter, dataSet, dataSet[CH.key], CH.key, CH, r + "_AX_" + CHidx, CH.form));
									} else {
										tpo.push(dataSet[CH.key]);
									}
								} else {
									tpo.push("&nbsp;");
								}
								tpo.push("</div>");
								/*tpo.push("</div>");*/
								tpo.push("</td>");
							}
						} else {
							tpo.push("<td style=\"display:none\">");
							if (CH.form) {
								tpo.push(getEditorFormValue(CH.form, dataSet, dataSet[CH.key], CH.key, CH, r + "_AX_" + CHidx));
							} else if (CH.formatter) {
								tpo.push(getEditorFormatterValue(CH.formatter, dataSet, dataSet[CH.key], CH.key, CH, r + "_AX_" + CHidx, CH.form));
							} else {
								tpo.push(dataSet[CH.key]);
							}
							tpo.push("</td>");
						}
					});
					if (r == 0 && isfix == undefined) {
						tpo.push("<td class=\"bodyNullTd\" id=\"" + cfg.targetID + "_AX_editornull\" rowspan=\"" + cfg.editor.rows.length + "\"><div class=\"tdRelBlock\">&nbsp;</div></td>");
					}
					tpo.push("</tr>");
				}
				return tpo.join('');
			},
			setEditor: function (item, itemIndex, insertIndex) {
				var cfg = this.config, _this = this, itemTrHeight;

				if (!this.hasEditor) {
					alert("setConfig 에 editor 가 설정 되지 않아 요청을 처리 할 수 없습니다.");
					return;
				}
				this.unbindAXbind();
				this.editorButtonPosition = "bottom";

				var dataSet = {};
				if (item) {
					dataSet = item;
				}
				/*dataSet 빈 Key 채우기 */
				axf.each(cfg.colGroup, function () {
					if (dataSet[this.key] == undefined) dataSet[this.key] = "";
				});
				/*dataSet 빈 Key 채우기 ~~~~~~~~~~~~~~~~ */

				/*setEditor */
				var po = [];
				po.push("<div id=\"" + cfg.targetID + "_AX_editorContent\" class=\"editorContent\">");
				po.push("<table cellpadding=\"0\" cellspacing=\"0\" class=\"gridBodyTable\" style=\"\">");
				po.push(this.getColGroup("EB"));
				/*colGroup 삽입 */
				po.push("<tbody id=\"" + cfg.targetID + "_AX_editor_AX_tbody\">");
				po.push(this.getEditorBody(dataSet));
				po.push("</tbody>");
				po.push("</table>");
				po.push("</div>");
				if (this.hasFixed) {
					po.push("<div id=\"" + cfg.targetID + "_AX_fixedEditorContent\" class=\"fixedEditorContent\" style=\"width:" + this.fixedColWidth + "px;\">");
					po.push("<table cellpadding=\"0\" cellspacing=\"0\" class=\"gridFixedBodyTable\" style=\"width:" + this.fixedColWidth + "px;\">");
					po.push(this.getColGroup("FE"));
					/*colGroup 삽입 */
					po.push("<tbody id=\"" + cfg.targetID + "_AX_editor__AX_fixedTbody\">");
					po.push(this.getEditorBody(dataSet, "fix"));
					po.push("</tbody>");
					po.push("</table>");
					po.push("</div>");
				}
				po.push("<div id=\"" + cfg.targetID + "_AX_editorButtons\" class=\"editorButtons\">");
				po.push("	<input type=\"button\" id=\"" + cfg.targetID + "_AX_editorButtons_AX_save\" value=\"Save\" class=\"AXButtonSmall Classic\" />");
				po.push("	<input type=\"button\" id=\"" + cfg.targetID + "_AX_editorButtons_AX_cancel\" value=\"Cancel\" class=\"AXButtonSmall\" />");
				po.push("</div>");
				this.editor.html(po.join(''));

				if (itemIndex != undefined) {

					var scrollTop = this.scrollContent.position().top, list = this.list;

					if(cfg.height == "auto"){
						var editorTop = axdom("#" + cfg.targetID + "_AX_tr_0_AX_n_AX_" + itemIndex).position().top;
						itemTrHeight = (function () {
							if (list.length == 0) {
								return 0;
							} else if (list.length == 1) {
								var p2 = axdom("#" + cfg.targetID + "_AX_tr_0_AX_n_AX_" + itemIndex).height();
								return p2;
							} else if ((list.length - 1) == itemIndex) {
								var p1 = axdom("#" + cfg.targetID + "_AX_tr_0_AX_n_AX_" + (itemIndex - 1)).position().top;
								var p2 = axdom("#" + cfg.targetID + "_AX_tr_0_AX_n_AX_" + itemIndex).position().top;
								return p2 - p1;
							} else {
								var p1 = axdom("#" + cfg.targetID + "_AX_tr_0_AX_n_AX_" + (itemIndex)).position().top;
								var p2 = axdom("#" + cfg.targetID + "_AX_tr_0_AX_n_AX_" + (itemIndex.number() + 1)).position().top;
								return p2 - p1;
							}
						})();
					}else{
						var editorTop = itemIndex * (itemTrHeight = this.virtualScroll.itemTrHeight);
					}

					this.editor.css({ top: editorTop + scrollTop });
					this.editorOpend = true;
					this.editorOpenTop = editorTop;
					this.editorItemIndex = itemIndex;
					this.editorButtonPosition = "bottom";

					var trTop = -editorTop;



					if (trTop.abs() + this.body.height() > this.scrollContent.height() && (this.scrollContent.height() > this.body.height())) {
						trTop = this.body.height() - this.scrollContent.height();
						// 에디터 위로 들기
						this.editorButtonPosition = "top";
					}

				} else if (insertIndex != undefined) {

					var scrollTop = this.scrollContent.position().top, list = this.list;;

					if(cfg.height == "auto") {
						var editorTop = axdom("#" + cfg.targetID + "_AX_tr_0_AX_n_AX_" + insertIndex).position().top;
						var trHeight = axdom("#" + cfg.targetID + "_AX_tr_0_AX_n_AX_" + insertIndex).outerHeight();
						itemTrHeight = (function () {
							if (list.length == 0) {
								return 0;
							} else if (list.length == 1) {
								var p2 = axdom("#" + cfg.targetID + "_AX_tr_0_AX_n_AX_" + insertIndex).height();
								return p2;
							} else if ((list.length - 1) == itemIndex) {
								var p1 = axdom("#" + cfg.targetID + "_AX_tr_0_AX_n_AX_" + (insertIndex - 1)).position().top;
								var p2 = axdom("#" + cfg.targetID + "_AX_tr_0_AX_n_AX_" + insertIndex).position().top;
								return p2 - p1;
							} else {
								var p1 = axdom("#" + cfg.targetID + "_AX_tr_0_AX_n_AX_" + (insertIndex)).position().top;
								var p2 = (axdom("#" + cfg.targetID + "_AX_tr_0_AX_n_AX_" + (insertIndex.number() + 1)).position() || 0).top;
								return p2 - p1;
							}
						})();
						editorTop += trHeight;
					}else{
						var editorTop = insertIndex * (itemTrHeight = this.virtualScroll.itemTrHeight);
					}

					this.editor.css({ top: editorTop });
					this.editorOpend = true;
					this.editorOpenTop = editorTop;
					this.editorInsertIndex = insertIndex;
					this.editorButtonPosition = "bottom";

					var trTop = -editorTop;

					if (trTop.abs() + this.body.height() > this.scrollContent.height()) {
						trTop = this.body.height() - this.scrollContent.height();
						// 에디터 위로 들기
						this.editorButtonPosition = "top";
					}

					if (this.body.height() < this.scrollContent.height()) {
						this.scrollContent.css({ top: trTop });
						this.contentScrollContentSync({ top: trTop });
					}

				} else {

					var editorTop = 0, itemTrHeight = this.virtualScroll.itemTrHeight;

					this.editor.css({ top: editorTop });
					this.editorOpend = true;
					this.editorOpenTop = editorTop;
					this.editorItemIndex = null;
					this.editorButtonPosition = "bottom";
					if (this.body.height() < this.scrollContent.height()) {
						this.scrollContent.css({ top: 0 });
						this.contentScrollContentSync({ top: 0 });
					}

				}

				this.scrollTrackY.before(this.editor);
				this.editor.show();
				this.editor.find("input[type=text],textarea").bind("mousedown.AXGrid", function () {
					this.focus();
				});

				if (cfg.editor.onkeyup) {
					this.editor.find("input[type=text],textarea").unbind("keyup.AXGrid").bind("keyup.AXGrid", function (event) {
						cfg.editor.onkeyup.call({
							list: _this.list,
							item: item,
							element: this
						}, event, this);
					});
				}

				/* form item bind AX */
				for (var r = 0; r < cfg.editor.rows.length; r++) {
					axf.each(cfg.editor.rows[r], function (CHidx, CH) {
						if (CH.display && CH.colspan > 0) {
							var formID = "";
							if (CH.AXBind) {
								formID = (CH.form.id) ? CH.form.id : cfg.targetID + "_AX_" + CH.key + "_AX_" + r + "_AX_" + CHidx;
								if (CH.AXBind.type == "number" && CH.form.type == "text") {
									/*axdom("#"+formID).unbindInput(); */
									axdom("#" + formID).bindNumber((CH.AXBind.config || {}));
								} else if (CH.AXBind.type == "money" && CH.form.type == "text") {
									/*axdom("#"+formID).unbindInput(); */
									axdom("#" + formID).bindMoney((CH.AXBind.config || {}));
								} else if (CH.AXBind.type == "selector" && CH.form.type == "text") {
									/*axdom("#"+formID).unbindInput(); */
									axdom("#" + formID).bindSelector((CH.AXBind.config || {}));
								} else if (CH.AXBind.type == "slider" && CH.form.type == "text") {
									/*axdom("#"+formID).unbindInput(); */
									axdom("#" + formID).bindSlider((CH.AXBind.config || {}));
								} else if (CH.AXBind.type == "slider" && CH.form.type == "text") {
									/*axdom("#"+formID).unbindInput(); */
									axdom("#" + formID).bindSlider((CH.AXBind.config || {}));
								} else if (CH.AXBind.type == "twinSlider" && CH.form.type == "text") {
									/*axdom("#"+formID).unbindInput(); */
									axdom("#" + formID).bindTwinSlider((CH.AXBind.config || {}));
								} else if (CH.AXBind.type == "date" && CH.form.type == "text") {
									/*axdom("#"+formID).unbindInput(); */
									axdom("#" + formID).bindDate((CH.AXBind.config || {}));
								} else if (CH.AXBind.type == "twinDate" && CH.form.type == "text") {
									/*axdom("#"+formID).unbindInput(); */
									axdom("#" + formID).bindTwinDate((CH.AXBind.config || {}));
								} else if (CH.AXBind.type == "dateTime" && CH.form.type == "text") {
									/*axdom("#"+formID).unbindInput(); */
									axdom("#" + formID).bindDateTime((CH.AXBind.config || {}));
								} else if (CH.AXBind.type == "switch" && CH.form.type == "text") {
									/*axdom("#"+formID).unbindInput(); */
									axdom("#" + formID).bindSwitch((CH.AXBind.config || {}));
								} else if (CH.AXBind.type == "select" && CH.form.type == "select") {
									/*axdom("#"+formID).unbindSelect(); */
									axdom("#" + formID).bindSelect((CH.AXBind.config || {}));
								}
							}
							if (CH.form) {
								formID = (CH.form.id) ? CH.form.id : cfg.targetID + "_AX_" + CH.key + "_AX_" + r + "_AX_" + CHidx;
								if (CH.form.onChange) {
									axdom("#" + formID).bind("change", function () {
										CH.form.onChange.call({
											key: CH.key,
											position: CHidx,
											value: axdom("#" + formID).val(),
											text: axf.getId(formID).options[axf.getId(formID).options.selectedIndex].text
										});
									});
								}
								if (CH.form.onClick) {
									axdom("#" + formID).bind("click", function () {
										CH.form.onClick.call({
											key: CH.key,
											position: CHidx,
											value: axdom("#" + formID).val()
										});
									});
								}
								if (CH.form.onBlur) {
									axdom("#" + formID).bind("blur", function () {
										CH.form.onBlur.call({
											key: CH.key,
											position: CHidx,
											value: axdom("#" + formID).val()
										});
									});
								}
								if (CH.form.onFocus) {
									axdom("#" + formID).bind("focus", function () {
										CH.form.onFocus.call({
											key: CH.key,
											position: CHidx,
											value: axdom("#" + formID).val()
										});
									});
								}
							}
						}
					});
				}

				var editorContent = axdom("#" + cfg.targetID + "_AX_editorContent"), fixedEditorContent = axdom("#" + cfg.targetID + "_AX_fixedEditorContent"), editorButtons = axdom("#" + cfg.targetID + "_AX_editorButtons");
				var editorContentHeight = editorContent.height();
				var fixedEditorContentHeight = fixedEditorContent.height();
				if (editorContentHeight < fixedEditorContentHeight) {
					editorContentHeight = fixedEditorContentHeight;
					editorContent.find(".gridBodyTable").css({ height: editorContentHeight });
				} else {
					fixedEditorContent.find(".gridFixedBodyTable").css({ height: editorContentHeight });
				}

				editorButtons.css({ top: editorContentHeight });
				var editorBoxHeight = editorContentHeight.number();

				if (itemTrHeight > editorContentHeight) {
					editorContentHeight = itemTrHeight;
					editorContent.find(".gridBodyTable").css({ height: editorContentHeight });
					fixedEditorContent.find(".gridFixedBodyTable").css({ height: editorContentHeight });
					this.editor.css({ height: (editorContentHeight.number()) });
					editorButtons.css({ top: editorContentHeight });
				}

				var scrollLeft = this.scrollContent.position().left;
				editorContent.css({ left: scrollLeft });

				if(this.editorButtonPosition == "top"){
					if(insertIndex != undefined) this.editor.css({top: this.editor.position().top - editorContentHeight });
					else this.editor.css({top: this.editor.position().top - editorContentHeight + itemTrHeight});
					editorButtons.addClass("top");
					editorButtons.css({ top: -editorButtons.outerHeight()+1 });
				}

				axdom("#" + cfg.targetID + "_AX_editorButtons_AX_save").bind("click", this.saveEditor.bind(this));
				axdom("#" + cfg.targetID + "_AX_editorButtons_AX_cancel").bind("click", this.cancelEditor.bind(this));
			},
			setEditorForm: function (obj) {
				var cfg = this.config;
				var formID = cfg.targetID + "_AX_" + obj.key + "_AX_" + obj.position.join("_AX_");
				if (!axf.getId(formID)) alert(formID + "로 Element를 찾을 수 없습니다.");
				axdom("#" + formID).val(obj.value);
			},
			focusEditorForm: function (key) { /* editor 활성화 된 폼의 특정 요소에 포커스 주기 */
				var cfg = this.config;
				this.editor.find("input[type=text],textarea").each(function () {
					if (this.name == key) {
						this.focus();
						return false;
					}
				});
			},
			saveEditor: function () {
				var cfg = this.config;

				var editorFormItem = {};
				if (this.editorItemIndex == null) {
					editorFormItem.requestType = "new";
				} else {
					editorFormItem.requestType = "edit";
				}

				var setEditorFormItemValue = function (k, v, type) {
					if (editorFormItem[k]) {
						if (type == "checkbox") {
							if (Object.isArray(editorFormItem[k])) {
								editorFormItem[k].push(v);
							} else {
								editorFormItem[k] = [editorFormItem[k]];
								editorFormItem[k].push(v);
							}
						} else {
							editorFormItem[k] = v;
						}
					} else {
						editorFormItem[k] = v;
					}
				};

				for (var r = 0; r < cfg.editor.rows.length; r++) {
					axf.each(cfg.editor.rows[r], function (CHidx, CH) {
						if (CH.form) {
							var formID = (CH.form.id) ? CH.form.id : cfg.targetID + "_AX_" + CH.key + "_AX_" + r + "_AX_" + CHidx;
							if (CH.form.type == "radio") {
								var checkedValue = [];
								axf.each(CH.form.options, function (oidx, opt) {
									var opt_formID = formID + "_AX_" + oidx;
									if (axdom("#" + opt_formID).get(0).checked) setEditorFormItemValue(CH.key, axdom("#" + opt_formID).val(), "radio");
									//editorFormItem.push(CH.key + "=" + axdom("#" + opt_formID).val().enc());
								});
							} else if (CH.form.type == "checkbox") {
								var checkedValue = [];
								axf.each(CH.form.options, function (oidx, opt) {
									var opt_formID = formID + "_AX_" + oidx;
									if (axdom("#" + opt_formID).get(0).checked) setEditorFormItemValue(CH.key, axdom("#" + opt_formID).val(), "checkbox");
									else setEditorFormItemValue(CH.key, "", "checkbox");
								});
							} else if (CH.form.type == "select") {
								if (CH.form.value == "itemText") {
									setEditorFormItemValue(CH.key, axf.getId(formID).options[axf.getId(formID).options.selectedIndex].text, "select");
								} else {
									setEditorFormItemValue(CH.key, axdom("#" + formID).val(), "select");
								}
							} else {
								setEditorFormItemValue(CH.key, axdom("#" + formID).val(), "text");
							}
						} else {
							var formID = cfg.targetID + "_AX_" + CH.key + "_AX_" + r + "_AX_" + CHidx;
							if (axf.getId(formID)) {
								setEditorFormItemValue(CH.key, axdom("#" + formID).val(), "text");
							}
						}
					});
				}

				/* form validate -- s */
				var validate = function (formID, CH) {
					var checkedValues = [];
					var value;

					if (CH.form.type == "radio") {
						axf.each(CH.form.options, function (oidx, opt) {
							var opt_formID = formID + "_AX_" + oidx;
							if (axdom("#" + opt_formID).get(0).checked) checkedValues.push(axdom("#" + opt_formID).val());
						});
						value = checkedValue.join(",");
					} else if (CH.form.type == "checkbox") {
						axf.each(CH.form.options, function (oidx, opt) {
							var opt_formID = formID + "_AX_" + oidx;
							if (axdom("#" + opt_formID).get(0).checked) checkedValues.push(axdom("#" + opt_formID).val());
							else checkedValues.push(CH.key + "=");
						});
						value = checkedValue.join(",");
					} else if (CH.form.type == "select") {
						if (CH.form.value == "itemText") {
							value = axf.getId(formID).options[axf.getId(formID).options.selectedIndex].text;
						} else {
							value = axdom("#" + formID).val();
						}
					} else {
						value = axdom("#" + formID).val().trim();
					}
					var sendObj = {
						formID: formID,
						value: value,
						checkedValues: checkedValues,
						form: CH.form
					};
					return CH.form.validate.call(sendObj, formID, value);
				};

				var validateError = false;
				for (var r = 0; r < cfg.editor.rows.length; r++) {
					/*trace(cfg.editor.rows[r]);*/
					axf.each(cfg.editor.rows[r], function (CHidx, CH) {
						if (CH.form) {
							if (CH.form.validate) {
								var formID = (CH.form.id) ? CH.form.id : cfg.targetID + "_AX_" + CH.key + "_AX_" + r + "_AX_" + CHidx;
								var result = validate(formID, CH);
								if (!result) {
									validateError = true;
									axdom("#" + formID).focus();
								}
							}
						}
					});
				}

				if (validateError) {
					return;
				}
				/* form validate -- e */

				if (cfg.editor.request) {
					this.unbindAXbind();

					var po = [];
					po.push("<div class=\"editorContent\" style=\"background:#fff;\">");
					po.push("<div class=\"AXLoading\"></div>");
					po.push("</div>");
					this.editor.html(po.join(''));

					var saveEditorRequest = this.saveEditorRequest.bind(this);
					var cancelEditor = this.cancelEditor.bind(this);
					var url = cfg.editor.request.ajaxUrl;
					var formPars = [];
					axf.each(editorFormItem, function (k, v) {
						formPars.push(k + "=" + v.enc());
					});
					var pars = (cfg.editor.request.ajaxPars) ? cfg.editor.request.ajaxPars + "&" + formPars.join('&') : formPars.join('&');

					new AXReq(url, {
						debug: false, pars: pars, onsucc: function (res) {
							//if (res.result == AXConfig.AXReq.okCode) {
							if ((res.result && res.result == AXConfig.AXReq.okCode) || (res.result == undefined && !res.error)) {
								saveEditorRequest(res);
							} else {
								toast.push({ body: res.msg.dec(), type: "Caution" });
								cancelEditor();
							}
						}
					});

					return true;

				} else {

					/*
					 var po = [];
					 po.push("<div class=\"editorContent\" id=\"\" style=\"background:#fff;\">");
					 po.push("<div class=\"editorContent AXLoading\"></div>");
					 po.push("</div>");
					 this.editor.append(po.join(''));
					 */

					// -------------- editor response 에서 return false 가 오는 상황을 고려 하면 사용
					//this.editor.hide();
					//this.editorOpend = false;

					var saveEditorRequest = this.saveEditorRequest.bind(this);
					var cancelEditor = this.cancelEditor.bind(this);
					saveEditorRequest({ item: editorFormItem });

				}
			},

			saveEditorRequest: function (res) {
				var cfg = this.config;

				if (this.editorOpend) {
					/*this.editorItemIndex */
					/* this.list[n] 에 서버로 부터 받은 값 덮어쓰기 */
					if (cfg.editor.response) { /*  */

						var sendObj = {
							res: res,
							index: this.editorItemIndex,
							insertIndex: this.editorInsertIndex,
							list: this.list,
							page: this.page
						};
						var callResult = cfg.editor.response.call(sendObj, this.editorItemIndex);

						/* 
						 // -------------- editor response 에서 return false 가 오는 상황을 고려 하면 사용
						 if(callResult === true){
						 this.editorOpend = false;
						 this.unbindAXbind();
						 }else{
						 this.editor.show();
						 this.editorOpend = true;
						 }
						 */

					} else {

						this.unbindAXbind();
						if (this.editorItemIndex != null && this.editorItemIndex != undefined) {
							AXUtil.overwriteObject(this.list[this.editorItemIndex], res.item, true);
							this.updateList(this.editorItemIndex, this.list[this.editorItemIndex]);
						} else if (this.editorInsertIndex != null && this.editorInsertIndex != undefined) {
							this.pushList(res.item, this.editorInsertIndex);
						} else {
							this.pushList(res.item);
						}
						this.editorItemIndex = null;
						this.editorInsertIndex = null;
						this.editor.hide();
						this.editorOpend = false;
					}

				}
			},
			cancelEditor: function () {
				this.editor.hide();
				this.editorOpend = false;
				this.unbindAXbind();
			},
			unbindAXbind: function () {
				var cfg = this.config;
				/* form item bind AX */

				try {
					for (var r = 0; r < cfg.editor.rows.length; r++) {
						axf.each(cfg.editor.rows[r], function (CHidx, CH) {
							if (CH.display && CH.colspan > 0) {

								if (CH.AXBind) {
									var formID = (CH.form.id) ? CH.form.id : cfg.targetID + "_AX_" + CH.key + "_AX_" + r + "_AX_" + CHidx;
									/*trace(formID); */
									if (CH.AXBind.type == "number" && CH.form.type == "text") {
										axdom("#" + formID).unbindInput();
									} else if (CH.AXBind.type == "money" && CH.form.type == "text") {
										axdom("#" + formID).unbindInput();
									} else if (CH.AXBind.type == "selector" && CH.form.type == "text") {
										axdom("#" + formID).unbindInput();
									} else if (CH.AXBind.type == "slider" && CH.form.type == "text") {
										axdom("#" + formID).unbindInput();
									} else if (CH.AXBind.type == "twinSlider" && CH.form.type == "text") {
										axdom("#" + formID).unbindInput();
									} else if (CH.AXBind.type == "date" && CH.form.type == "text") {
										axdom("#" + formID).unbindInput();
									} else if (CH.AXBind.type == "twinDate" && CH.form.type == "text") {
										axdom("#" + formID).unbindInput();
									} else if (CH.AXBind.type == "dateTime" && CH.form.type == "text") {
										axdom("#" + formID).unbindInput();
									} else if (CH.AXBind.type == "switch" && CH.form.type == "text") {
										axdom("#" + formID).unbindInput();
									} else if (CH.AXBind.type == "select" && CH.form.type == "select") {
										axdom("#" + formID).unbindSelect();
									}
								}
							}
						});
					}
				} catch (e) {
					trace(e);
				}
			},
			appendList: function (item, insertIndex) {
				this.setEditor(item, undefined, insertIndex);
			},
			/* editor 영역 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
			setMobileTool: function () {
				var cfg = this.config, _this = this;

				var toolGroupTop = axdom("#" + cfg.targetID + "_AX_gridToolGroupTop");
				var toolGroupBottom = axdom("#" + cfg.targetID + "_AX_gridToolGroupBottom");

				var po = [];
				po.push('<a name="' + cfg.targetID + '_AX_top"></a>');
				po.push('<a class="tool-config"><span class="displayNone">congif</span></a>');
				if (cfg.page) {
					if (cfg.page.paging) {
						po.push('<div class="tool-pageGroup">');
						po.push('<a class="tool-prevPage"><span class="displayNone">prev</span></a>');
						po.push('<div class="tool-pageNo"><span id="' + cfg.targetID + '_AX_gridToolTopPageNoDisplay"></span><select id="' + cfg.targetID + '_AX_gridToolTopPageNo"></select></div>');
						po.push('<a class="tool-nextPage"><span class="displayNone">next</span></a>');
						po.push('</div>');
					}
				}
				po.push('<a href="#' + cfg.targetID + '_AX_bottom" class="tool-gotoTop"><span class="displayNone">top</span></a>');
				toolGroupTop.empty();
				toolGroupTop.append(po.join(''));

				po = [];
				po.push('<a name="' + cfg.targetID + '_AX_bottom"></a>');
				po.push('<a class="tool-config"><span class="displayNone">congif</span></a>');
				if (cfg.page) {
					if (cfg.page.paging) {
						po.push('<div class="tool-pageGroup">');
						po.push('<a class="tool-prevPage"><span class="displayNone">prev</span></a>');
						po.push('<div class="tool-pageNo"><span id="' + cfg.targetID + '_AX_gridToolBottomPageNoDisplay"></span><select id="' + cfg.targetID + '_AX_gridToolBottomPageNo"></select></div>');
						po.push('<a class="tool-nextPage"><span class="displayNone">next</span></a>');
						po.push('</div>');
					}
				}
				po.push('<a href="#' + cfg.targetID + '_AX_top" class="tool-gotoBottom"><span class="displayNone">bottom</span></a>');
				toolGroupBottom.empty();
				toolGroupBottom.append(po.join(''));

				var pgCount = this.page.pageCount.number();
				var pageNo = this.page.pageNo.number();

				if (cfg.page) {
					if (cfg.page.paging) {
						if (pgCount == 0) {
							po = [];
							po.push("<option value=\"\">..</option>");
							axdom("#" + cfg.targetID + "_AX_gridToolTopPageNo").html(po.join(''));
							axdom("#" + cfg.targetID + "_AX_gridToolTopPageNoDisplay").html(po.join(''));
							axdom("#" + cfg.targetID + "_AX_gridToolBottomPageNo").html(po.join(''));
							axdom("#" + cfg.targetID + "_AX_gridToolBottomPageNoDisplay").html(po.join(''));
						} else {
							axdom("#" + cfg.targetID + "_AX_gridToolTopPageNo").html("");
							axdom("#" + cfg.targetID + "_AX_gridToolTopPageNoDisplay").html(pageNo);
							var mySelect = axf.getId(cfg.targetID + "_AX_gridToolTopPageNo");
							axdom("#" + cfg.targetID + "_AX_gridToolBottomPageNo").html("");
							axdom("#" + cfg.targetID + "_AX_gridToolBottomPageNoDisplay").html(pageNo);
							var mySelectBottom = axf.getId(cfg.targetID + "_AX_gridToolBottomPageNo");
							for (var p = 1; p < pgCount + 1; p++) {
								mySelect.options[p] = new Option(p, p.money());
								mySelectBottom.options[p] = new Option(p, p.money());
								if (pageNo == p) {
									mySelect.options[p].selected = true;
									mySelectBottom.options[p].selected = true;
								}
							}
						}

						axdom("#" + cfg.targetID + "_AX_gridToolTopPageNo").bind("change", this.onPageChange.bind(this));
						axdom("#" + cfg.targetID + "_AX_gridToolBottomPageNo").bind("change", this.onPageChange.bind(this));

						/* page event bind */

						var goPageMove = this.goPageMove.bind(this);
						toolGroupTop.find(".tool-prevPage").bind("click", function (event) {
							goPageMove(-1);
						});
						toolGroupBottom.find(".tool-prevPage").bind("click", function (event) {
							goPageMove(-1);
						});
						toolGroupTop.find(".tool-nextPage").bind("click", function (event) {
							goPageMove(1);
						});
						toolGroupBottom.find(".tool-nextPage").bind("click", function (event) {
							goPageMove(1);
						});

						/* page event bind */

					}

					var openMobileConfig = this.openMobileConfig.bind(this);
					toolGroupTop.find(".tool-config").bind("click", function (event) {
						openMobileConfig(event);
					});
					toolGroupBottom.find(".tool-config").bind("click", function (event) {
						openMobileConfig(event);
					});
				}
			},
			setPaging: function () {
				var cfg = this.config;
				if (cfg.viewMode == "mobile") {
					this.setMobileTool();
					return;
				}else{
					axdom("#" + cfg.targetID + "_AX_gridToolGroupTop").empty();
					axdom("#" + cfg.targetID + "_AX_gridToolGroupBottom").empty();
				}
				/* apply page vars */
				var pageNos = axf.getId(cfg.targetID + "_AX_gridPageNo");
				var pgCount = this.page.pageCount.number();
				var pageNo = this.page.pageNo.number();

				if (pgCount == 0) {
					var po = [];
					po.push("<option value=\"\">..</option>");
					axdom("#" + cfg.targetID + "_AX_gridPageNo").html(po.join(''));
				} else {
					axdom("#" + cfg.targetID + "_AX_gridPageNo").html("");
					var mySelect = axf.getId(cfg.targetID + "_AX_gridPageNo");
					if (pgCount > 1000) {
						var oi = 0;
						var pageStart = 1;
						var pageEnd = pageNo + 49;
						if (pageNo > 50) pageStart = pageNo - 50;
						if (pageEnd > pgCount) pageEnd = pgCount;
						for (var p = pageStart; p < pageEnd + 1; p++) {
							mySelect.options[oi] = new Option(p, p.money());
							if (pageNo == p) mySelect.options[oi].selected = true;
							oi++;
						}
					} else {
						for (var p = 1; p < pgCount + 1; p++) {
							mySelect.options[p] = new Option(p, p.money());
							if (pageNo == p) mySelect.options[p].selected = true;
						}
					}
					/*alert(axf.getId(cfg.targetID + "_AX_gridPageNo").options[axf.getId(cfg.targetID + "_AX_gridPageNo").options.selectedIndex].value); */
				}
				axdom("#" + cfg.targetID + "_AX_gridPageCount").html("/ " + pgCount.money() + " " + cfg.pageCountMSG);
				axdom("#" + cfg.targetID + "_AX_gridStatus").html(cfg.listCountMSG.replace("{listCount}", this.page.listCount.number().money()));


				if (this.isMobile) {
					axdom("#" + cfg.targetID + "_AX_gridPageNo").bind("change", this.onPageChange.bind(this));
				} else {
					var onPageChange = this.onPageChange.bind(this);
					axdom("#" + cfg.targetID + "_AX_gridPageNo").bindSelect({
						onchange: function (arg) {
							onPageChange();
						}
					});
				}
			},
			goPageMove: function (pageAdd) {
				var cfg = this.config;
				var pgCount = this.page.pageCount.number();
				var pageNo = this.page.pageNo.number();

				if (pageNo + pageAdd < 1) pageNo = 1;
				else if (pageNo + pageAdd > pgCount) pageNo = pgCount;
				else pageNo += pageAdd;

				if (cfg.viewMode == "mobile") {
					axdom("#" + cfg.targetID + "_AX_gridToolTopPageNo").val(pageNo);
					axdom("#" + cfg.targetID + "_AX_gridToolBottomPageNo").val(pageNo);
					this.onPageChange();
				} else {
					axdom("#" + cfg.targetID + "_AX_gridPageNo").setValueSelect(pageNo);
				}
				/*this.page.pageNo = pageNo; */
				/*this.onPageChange(); bindSelectSetValue 시 자동 호출되는 구조 */
			},
			onPageChange: function (e) {
				var cfg = this.config;
				var pgCount, pageNo, npageNo;
				pgCount = this.page.pageCount.number();
				pageNo = this.page.pageNo.number();

				if (cfg.viewMode == "mobile") {
					npageNo = (e) ? e.target.value : axdom("#" + cfg.targetID + "_AX_gridToolTopPageNo").val();
				} else {
					npageNo = axdom("#" + cfg.targetID + "_AX_gridPageNo").val();
				}
				this.page.pageNo = npageNo;

				if(this.page.onchange){
					this.page.onchange.call(this.page, npageNo);
				}else{

					/*스크롤 위치 변경 */
					if (cfg.viewMode != "mobile") {
						var scrollTop = 0;
						this.scrollContent.css({ top: scrollTop });
						this.contentScrollContentSync({ top: scrollTop });

						if (this.pageActive && this.ajaxInfo) {
							this.setList(this.ajaxInfo, this.ajax_sortDisable, null, "paging");
							this.contentScrollResize();
						}
					} else {
						if (this.pageActive && this.ajaxInfo) {
							this.setList(this.ajaxInfo, this.ajax_sortDisable, null, "paging");
						}
					}
				}
			},
			setStatus: function (listLength) {
				var cfg = this.config;
				var page;
				if (this.page) page = this.page;
				var listCount = (page.listCount || listLength);
				axdom("#" + cfg.targetID + "_AX_gridStatus").html(cfg.listCountMSG.replace("{listCount}", listCount.number().money()));
			},
			getSortParam: function (ty) {
				var cfg = this.config;
				var sortObj = this.nowSortHeadObj;
				if (sortObj) {
					if (ty == "one") {
						return "sortBy=" + sortObj.key + " " + sortObj.sort;
					} else {
						return axdom.param({ sortKey: sortObj.key, sortWay: sortObj.sort });
					}
				} else {
					return "";
				}
			},
			getExcelColHeadTd: function (arg) {
				var cfg = this.config;
				var po = [];

				if (arg.formatter == "html" || arg.formatter == "checkbox") {
					if (!arg.displayLabel) {
						colHeadTdText = " colHeadTdHtml";
						toolUse = false;
						if (arg.formatter == "checkbox") {
							colHeadTdText = " colHeadTdCheck";
							arg.tdHtml = "<input type=\"checkbox\" name=\"checkAll\" />";
						}
					}
				}

				po.push("<td" + arg.valign + arg.rowspan + arg.colspan + ">");
				po.push(arg.tdHtml);
				po.push("</td>");

				return po.join('');
			},
			getExcelItem: function (itemIndex, item) {
				var cfg = this.config;
				var tpo = [];
				var evenClassName = "line" + (itemIndex % 2);
				var getFormatterValue = this.getFormatterValue.bind(this);
				var getTooltipValue = this.getTooltipValue.bind(this);
				var trAddClass = "";

				for (var r = 0; r < cfg.body.rows.length; r++) {

					tpo.push("<tr>");
					var colCount = 0;
					axf.each(cfg.body.rows[r], function (CHidx, CH) {
						if (CH.display && CH.colspan > 0) {

							colCount += CH.colspan;
							/*radio, check exception */
							var rowspan = (CH.rowspan > 1) ? " rowspan=\"" + CH.rowspan + "\"" : "";
							var colspan = (CH.colspan > 1) ? " colspan=\"" + CH.colspan + "\"" : "";
							var valign = " valign=\"" + CH.valign + "\" style=\"vertical-align:" + CH.valign + ";\"";

							var bodyNodeClass = "";

							var tooltipValue = "";
							if (CH.tooltip) {
								tooltipValue = getTooltipValue(CH.tooltip, item, itemIndex, item[CH.key], CH.key, CH);
							}

							tpo.push("<td" + valign + rowspan + colspan + ">");
							if (CH.formatter) {
								tpo.push(getFormatterValue(CH.formatter, item, itemIndex, item[CH.key], CH.key, CH));
							} else {
								tpo.push(item[CH.key]);
							}
							tpo.push("</td>");
						}
					});
					tpo.push("</tr>");
				}
				return tpo.join('');
			},
			getExcelItemMarker: function (itemIndex, item, isfix) {
				var cfg = this.config;
				var tpo = [];
				var evenClassName = "gridBodyMarker";
				var getFormatterValue = this.getFormatterValue.bind(this);

				for (var r = 0; r < cfg.body.marker.rows.length; r++) {
					var isLastTR = (cfg.body.marker.rows.length - 1 == r);
					tpo.push("<tr>");
					var colCount = 0;
					axf.each(cfg.body.marker.rows[r], function (CHidx, CH) {
						if (CH.display && CH.colspan > 0) {

							colCount += CH.colspan;

							/*radio, check exception */
							var rowspan = (CH.rowspan > 1) ? " rowspan=\"" + CH.rowspan + "\"" : "";
							var colspan = (CH.colspan > 1) ? " colspan=\"" + CH.colspan + "\"" : "";
							var valign = " valign=\"" + CH.valign + "\" style=\"vertical-align:" + CH.valign + ";\"";

							tpo.push("<td" + valign + rowspan + colspan + ">");
							if (CH.formatter) {
								tpo.push(getFormatterValue(CH.formatter, item, itemIndex, item[CH.key], CH.key, CH));
							} else {
								tpo.push(item[CH.key]);
							}
							tpo.push("</td>");

						}
					});
					tpo.push("</tr>");
				}
				return tpo.join('');
			},
			getExcelHeadDataSet: function (dataSet, isfix) {
				var cfg = this.config;
				if (dataSet == undefined) return;
				var tpo = [];
				var getDataSetFormatterValue = this.getDataSetFormatterValue.bind(this);
				/*dataSet 빈 Key 채우기 */
				axf.each(cfg.colGroup, function () {
					if (dataSet[this.key] == undefined) dataSet[this.key] = "";
				});
				/*dataSet 빈 Key 채우기 ~~~~~~~~~~~~~~~~ */

				for (var r = 0; r < cfg.head.rows.length; r++) {
					var isLastTR = (cfg.head.rows.length - 1 == r);
					tpo.push("<tr>");
					var colCount = 0;

					axf.each(cfg.head.rows[r], function (CHidx, CH) {
						if (CH.display && CH.colspan > 0) {

							colCount += CH.colspan;

							/*radio, check exception */
							var rowspan = (CH.rowspan > 1) ? " rowspan=\"" + CH.rowspan + "\"" : "";
							var colspan = (CH.colspan > 1) ? " colspan=\"" + CH.colspan + "\"" : "";
							var valign = " valign=\"" + CH.valign + "\" style=\"vertical-align:" + CH.valign + ";\"";

							var bodyNodeClass = "";
							if (CH.formatter == "checkbox" || CH.formatter == "radio") bodyNodeClass = " bodyTdCheckBox";
							else if (CH.formatter == "html") bodyNodeClass = " bodyTdHtml";

							tpo.push("<td" + valign + rowspan + colspan + ">");
							if (CH.formatter) {
								tpo.push(getDataSetFormatterValue(CH.formatter, dataSet, dataSet[CH.key], CH.key, CH));
							} else {
								tpo.push(dataSet[CH.key]);
							}
							tpo.push("</td>");
						}
					});
					tpo.push("</tr>");
				}
				return tpo.join('');
			},
			getExcelFootDataSet: function (dataSet, isfix) {
				var cfg = this.config;
				if (dataSet == undefined) return;
				var tpo = [];
				var getDataSetFormatterValue = this.getDataSetFormatterValue.bind(this);
				/*dataSet 빈 Key 채우기 */
				axf.each(cfg.colGroup, function () {
					if (dataSet[this.key] == undefined) dataSet[this.key] = "";
				});
				/*dataSet 빈 Key 채우기 ~~~~~~~~~~~~~~~~ */
				var hasFixed = this.hasFixed;

				for (var r = 0; r < cfg.foot.rows.length; r++) {
					var isLastTR = (cfg.foot.rows.length - 1 == r);
					tpo.push("<tr>");
					var colCount = 0;

					axf.each(cfg.foot.rows[r], function (CHidx, CH) {
						if (CH.display && CH.colspan > 0) {
							colCount += CH.colspan;

							/*radio, check exception */
							var rowspan = (CH.rowspan > 1) ? " rowspan=\"" + CH.rowspan + "\"" : "";
							var colspan = (CH.colspan > 1) ? " colspan=\"" + CH.colspan + "\"" : "";
							var valign = " valign=\"" + CH.valign + "\" style=\"vertical-align:" + CH.valign + ";\"";
							var bottomClass = (CH.isLastCell) ? "" : " bodyBottomBorder";
							var fixedClass = (CH.isFixedEndCell) ? " fixedLine" : "";

							var bodyNodeClass = "";
							if (CH.formatter == "checkbox" || CH.formatter == "radio") bodyNodeClass = " bodyTdCheckBox";
							else if (CH.formatter == "html") bodyNodeClass = " bodyTdHtml";

							tpo.push("<td" + valign + rowspan + colspan + ">");
							if (CH.formatter) {
								tpo.push(getDataSetFormatterValue(CH.formatter, dataSet, dataSet[CH.key], CH.key, CH));
							} else {
								tpo.push(dataSet[CH.key]);
							}
							tpo.push("</td>");
						}
					});
					tpo.push("</tr>");
				}
				return tpo.join('');
			},
			getExcelFormat: function (format) {
				var cfg = this.config;
				var getExcelColHeadTd = this.getExcelColHeadTd.bind(this);

				var bodyHasMarker = this.bodyHasMarker;
				var getExcelItem = this.getExcelItem.bind(this);
				var getExcelItemMarker = this.getExcelItemMarker.bind(this);
				var getMarkerDisplay = this.getMarkerDisplay.bind(this);
				var getHeadDataSet = this.getExcelHeadDataSet.bind(this);
				var getFootDataSet = this.getExcelFootDataSet.bind(this);

				var po = [];

				if (format == "html") {

					po.push("<table border='1'>");
					po.push("	<thead>");
					for (var r = 0; r < cfg.colHead.rows.length; r++) {
						var isLastTR = (cfg.colHead.rows.length - 1 == r);
						po.push("<tr>");
						axf.each(cfg.colHead.rows[r], function (CHidx, CH) {
							if (CH.display && CH.colspan > 0) {
								var tdHtml = CH.label || "untitle";
								var rowspan = (CH.rowspan > 1) ? " rowspan=\"" + CH.rowspan + "\"" : "";
								var colspan = (CH.colspan > 1) ? " colspan=\"" + CH.colspan + "\"" : "";
								var valign = " valign=\"" + CH.valign + "\"";

								po.push(getExcelColHeadTd({
									valign: valign,
									rowspan: rowspan,
									colspan: colspan,
									align: CH.align,
									colSeq: CH.colSeq,
									formatter: CH.formatter,
									sort: CH.sort,
									tdHtml: tdHtml,
									displayLabel: CH.displayLabel
								}));
							}
						});
						po.push("</tr>");
					}
					po.push("	</thead>");
					po.push("	<tbody>");

					if (cfg.head) po.push(getHeadDataSet(this.dataSet));

					axf.each(this.list, function (itemIndex, item) {
						po.push(getExcelItem(itemIndex, item));
						if (bodyHasMarker && getMarkerDisplay(itemIndex, item)) {
							po.push(getExcelItemMarker(itemIndex, item));
						}
					});

					if (cfg.foot) po.push(getFootDataSet(this.dataSet));

					po.push("	</tbody>");
					po.push("</table>");

					return po.join('');

				} else if (format == "json") {
					return {
						colGroup: cfg.colGroup,
						list: this.list
					}
				}

			},

			/**
			 * 그리드의 뷰모드를 체인지 합니다.
			 * change viewMode
			 *
			 * @method AXGrid.changeGridView
			 * @param JSONObject {}
			 * @description
			 ```js
			 myGrid.changeGridView({
    viewMode:"grid"
});
			 myGrid.changeGridView({
    viewMode:"icon",
	view: {
		width:"200", // icon width
		height:"300", // icon height
		img: {left:"10", top:"10", width:"179", height:"180",style:"border:1px solid #ccc;"},
		label:{left:"10", top:"200", width:"180", height:"20"},
		description: {left:"10", top:"225", width:"180", height:"65", style:"color:#888;"},
		buttons: {
			left:"5", top:"5", width:"180", height:"20", style:"",
			items:[
				{label:"but1", style:"", addClass:"AXButton Green", onclick:function(){
					fnObj.otherFunction(this);
				}},
				{label:"but2", style:"", addClass:"AXButton", onclick:function(){
					fnObj.otherFunction(this);
				}}
			]
		},
		format: function(){
			return {
				imgsrc : this.item.img,
				label : this.item.title,
				description : this.item.writer+", "+this.item.no+" / " + (this.item.desc || "")
			}
		}
	}
});
			 myGrid.changeGridView({
    viewMode:"mobile"
});
			 ```
			 *
			 */
			changeGridView: function (JSObject) {
				var cfg = this.config;

				if (cfg.viewMode != JSObject.viewMode) {
					cfg.viewMode = JSObject.viewMode;
					if (JSObject.viewMode == "icon") {
						if (JSObject.view) cfg.view = JSObject.view;
						this.redrawGrid("changeGridView");
					} else if (JSObject.viewMode == "grid") {
						//if(JSObject.view) cfg.view = JSObject.view;
						this.redrawGrid("changeGridView");
					} else if (JSObject.viewMode == "mobile") {
						if (JSObject.view) cfg.view = JSObject.view;
						this.redrawGrid("changeGridView");

					}
				}
			},
			/**
			 * 모바일 툴바가 클릭되었을 때 이벤트 함수
			 * p[en mobile tool
			 *
			 * @method AXGrid.openMobileConfig
			 * @param event {event}
			 */
			openMobileConfig: function (event) {
				var cfg = this.config, _this = this;
				//trace(cfg.view.column);

				var mobileView = cfg.view;
				if (mobileView == undefined) {
					var columns = [];
					for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
						var col = null, addClass = "";
						if (CG.widthAstric || CG.width.number() >= 200) {
							col = 4;
							addClass = "underLine";
						} else if (CG.width.number() >= 100) {
							col = 2;
						} else if (CG.width.number() >= 40) {
							//col = 1;
						}
						columns.push(
							{key: CG.key, label: CG.label, col: col, formatter: CG.formatter, addClass: addClass, sort: (CG.sort || ""), display: (CG.display || true)}
						);
					}
					columns = columns.sort(function (pItem, nItem) {
						var v1 = pItem.col;
						var v2 = nItem.col;
						if (v1 < v2) return 1;
						else if (v1 > v2) return -1;
						else if (v1 == v2) return 0;
					});
					mobileView = {
						labelView: true,
						column: columns
					};
					cfg.view = mobileView;
				}

				for (var CN, cidx = 0, __arr = mobileView.column; (cidx < __arr.length && (CN = __arr[cidx])); cidx++) {
					if (CN.display == undefined || CN.display == true) {
						CN.display = true;
						CN.checked = true;
					}
				}

				var contextMenu = mobileView.column.concat();
				try{
					AXContextMenu.setConfig({responsiveMobile: cfg.mediaQuery.mx.max});
				}catch(e){
					AXContextMenu.setConfig({responsiveMobile: 640});
				}

				AXContextMenu.bind({
					id: cfg.targetID + "myContextMenu",
					theme: "AXContextMenu", // 선택항목
					width: "150", // 선택항목
					checkbox: "checkbox", // [checkbox|radio]
					sortbox: true,
					menu: contextMenu,
					onchange: function () { // 체크박스 선택값이 변경 된 경우 호출 됩니다.
						for (var CN, cidx = 0, __arr = this.menu; (cidx < __arr.length && (CN = __arr[cidx])); cidx++) {
							CN.display = CN.checked;
						}
						cfg.view.column = axf.copyObject(this.menu);
						_this.printList();
					},
					onsort: function () { // 정렬이 변경 된 경우 호출 됩니다.
						//trace(this.sortMenu);
						_this.list = _this.sortList(this.sortMenu.sort, this.sortMenu, _this.list);
						_this.printList();

						return true;// 메뉴 창이 닫히지 않게 합니다.
					}
				});
				AXContextMenu.open({id: cfg.targetID + "myContextMenu"}, event);
			}
		});

		for (var sr = 0; sr < this.selectedRow.length; sr++) {
			this.body.find(".gridBodyTr_" + this.selectedRow[sr]).addClass("selected");
		}
		this.body.find(".gridBodyTr").bind("mouseover", this.gridBodyOverBind);
		this.body.find(".gridBodyTr").bind("mouseout", this.gridBodyOutBind);
		this.body.find(".gridBodyTr").bind("click", this.gridBodyClickBind);
		if (AXUtil.browser.name == "ie" && AXUtil.browser.version == 8) this.body.find(".gridBodyTr").bind("dblclick", this.gridBodyDBLClickBind);
		this.contentScrollResize();

		this.contentScrollXAttr = null;
		this.contentScrollYAttr = null;
	},
	updateList: function (itemIndex, item) {
		var cfg = this.config;
		var npo = this.getItem(itemIndex, item, "n", "notr");
		if (this.hasFixed) {
			var fpo = this.getItem(itemIndex, item, "fix", "notr");
		}

		axdom("#" + cfg.targetID + "_AX_tbody").find(".gridBodyTr_" + itemIndex).html(npo);
		if (this.hasFixed) {
			axdom("#" + cfg.targetID + "_AX_fixedTbody").find(".gridBodyTr_" + itemIndex).html(npo);
		}

		this.body.find(".gridBodyTr").unbind("mouseover", this.gridBodyOverBind);
		this.body.find(".gridBodyTr").unbind("mouseout", this.gridBodyOutBind);
		this.body.find(".gridBodyTr").unbind("click", this.gridBodyClickBind);
		if (AXUtil.browser.name == "ie" && AXUtil.browser.version == 8) this.body.find(".gridBodyTr").unbind("dblclick", this.gridBodyDBLClickBind);

		this.body.find(".gridBodyTr").bind("mouseover", this.gridBodyOverBind);
		this.body.find(".gridBodyTr").bind("mouseout", this.gridBodyOutBind);
		this.body.find(".gridBodyTr").bind("click", this.gridBodyClickBind);
		if (AXUtil.browser.name == "ie" && AXUtil.browser.version == 8) this.body.find(".gridBodyTr").bind("dblclick", this.gridBodyDBLClickBind);

		this.redrawDataSet();
	},
	expandToggleList: function (itemIndex, item, r, c) {
		var cfg = this.config;

		this.gridBodyOverBind;
		this.gridBodyOutBind;
		this.gridBodyClickBind;
		this.gridBodyDBLClickBind;

		if (item[cfg.reserveKeys.openKey]) {

			//자식 개체 모두 닫기 체크하기
			var pHash = item[cfg.reserveKeys.hashKey];
			var hashs = item[cfg.reserveKeys.hashKey].split(/_/g);
			var lastR = cfg.body.rows.length - 1;
			for (var r = 0; r < cfg.body.rows.length; r++) {
				axdom("#" + cfg.targetID + "_AX_tr_" + r + "_AX_n_AX_" + itemIndex).find(".bodyNodeIndent").removeClass("expand");
			}

			//trace(pHash);
			var removepHashs = [];
			axf.each(this.list, function (itemIndex, item) {
				if(!item.AXTreeSplit){
					if (pHash == item[cfg.reserveKeys.parentHashKey].left(pHash.length)) {
						removepHashs.push(item[cfg.reserveKeys.parentHashKey]);
						item[cfg.reserveKeys.displayKey] = false;
					}
				}
			});

			var _body = this.body;
			axf.each(removepHashs, function () {
				_body.find(".gridBodyTr.parentHash" + this).hide();
			});
			item[cfg.reserveKeys.openKey] = false;

			var myTree = this.tree;
			axf.each(hashs, function (hidx, HH) {
				if (hidx == 0) {

				} else if (hidx == 1) {
					myTree = myTree[HH.number()];
				} else {
					myTree = myTree[cfg.reserveKeys.subTree][HH.number()];
				}
			});
			myTree[cfg.reserveKeys.openKey] = false;

			this.contentScrollResize();

			this.contentScrollXAttr = null;
			this.contentScrollYAttr = null;

			//clear select

			this.clearFocus();

			if (cfg.body.oncontract) {
				//itemIndex, item, subTree
				//dialog.push(Object.toJSON(subTree));
				var sendObj = {
					index: itemIndex,
					list: this.list,
					list: this.tree,
					item: item,
					subTree: subTree,
					itemID: this.body.find(".gridBodyTr_" + itemIndex).attr("id")
				};
				cfg.body.oncontract.call(sendObj, itemIndex, item);
			}

		} else { // 자식개체 열기

			item[cfg.reserveKeys.openKey] = true;

			for (var r = 0; r < cfg.body.rows.length; r++) {
				axdom("#" + cfg.targetID + "_AX_tr_" + r + "_AX_n_AX_" + itemIndex).find(".bodyNodeIndent").addClass("expand");
			}

			var hashs = item[cfg.reserveKeys.hashKey].split(/_/g);

			//findTree Position


			var myTree = this.tree;
			axf.each(hashs, function (hidx, HH) {
				if (hidx == 0) {

				} else if (hidx == 1) {
					myTree = myTree[HH.number()];
				} else {
					myTree = myTree[cfg.reserveKeys.subTree][HH.number()];
				}
			});

			var addHashs = [];
			var preFixHash = hashs.join("_");
			var getAddHashs = function (_tree, pfHash) {
				addHashs.push(pfHash);
				axf.each(_tree, function (treeIndex, nTree) {
					if (nTree[cfg.reserveKeys.subTree].length > 0 && nTree[cfg.reserveKeys.openKey]) getAddHashs(nTree[cfg.reserveKeys.subTree], pfHash + "_" + treeIndex.setDigit(cfg.hashDigit));
				});
			};
			getAddHashs(myTree[cfg.reserveKeys.subTree], preFixHash);

			myTree[cfg.reserveKeys.openKey] = true;

			var subTree = [];
			var _list = this.list;
			var itemChangeDisplay = this.itemChangeDisplay.bind(this);
			var _body = this.body;
			axf.each(addHashs, function () {
				_body.find(".gridBodyTr.parentHash" + this).each(function () {
					var trIndex = this.id.split(/_AX_/g).last();
					itemChangeDisplay(trIndex, true);
					subTree.push(_list[trIndex]);
				});
				_body.find(".gridBodyTr.parentHash" + this).show();
			});

			this.contentScrollResize();

			this.contentScrollXAttr = null;
			this.contentScrollYAttr = null;

			if (cfg.body.onexpand) {
				//itemIndex, item, subTree
				//dialog.push(Object.toJSON(subTree));
				var sendObj = {
					index: itemIndex,
					list: this.list,
					list: this.tree,
					item: item,
					subTree: subTree,
					itemID: this.body.find(".gridBodyTr_" + itemIndex).attr("id")
				};
				cfg.body.onexpand.call(sendObj, itemIndex, item);
			}

		}

	},
	itemChangeDisplay: function (itemIndex, status) { // 입력받은 인덱스의 display 상태변경 함수
		var cfg = this.config;
		this.list[itemIndex][cfg.reserveKeys.displayKey] = status;
	},
	gridBodyOver: function (event) {
		var cfg = this.config;
		if (this.overedItemIndex) {
			this.body.find(".gridBodyTr_" + this.overedItemIndex).removeClass("hover");
		}
		var itemIndex = (event.target.id).split(/_AX_/g).last();
		if (itemIndex != "") {
			this.body.find(".gridBodyTr_" + itemIndex).addClass("hover");
			this.overedItemIndex = itemIndex;
		}
	},
	gridBodyOut: function (event) {
		var cfg = this.config;
		if (this.overedItemIndex) {
			this.body.find(".gridBodyTr_" + this.overedItemIndex).removeClass("hover");
		}
	},
	gridBodyClick: function(event){
		var cfg = this.config;
		if (cfg.body.ondblclick) {
			if (AXUtil.browser.name == "ie" && AXUtil.browser.version == 8) {
				this.gridBodyClickAct(event);
			} else {
				if (this.bodyClickObserver){
					clearTimeout(this.bodyClickObserver);
					this.gridBodyDBLClick(event);
					this.bodyClickObserver = null;
					return;
				}
				var gridBodyClickAct = this.gridBodyClickAct.bind(this);
				this.bodyClickObserver = setTimeout(function () {
					gridBodyClickAct(event);
				}, 250);
			}
		}else{
			this.gridBodyClickAct(event);
		}
	},
	gridBodyClickAct: function (event) {
		this.bodyClickObserver = null;
		var cfg = this.config;
		// event target search -
		if(event.target.id == "" && event.target.tagName.toLowerCase() != "span") return;
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;
		var isoncheck = false;
		if (eventTarget.tagName.toLowerCase() == "input") {
			this.gridCheckClick(event);
			if (cfg.body.oncheck) {
				isoncheck = true;
			} else {
				// checkbox event bind
				return; //input 인 경우 제외
			}
		}
		var myTarget = this.getEventTarget({
			evt: eventTarget, evtIDs: eid,
			until: function (evt, evtIDs) { return (axdom(evt.parentNode).hasClass("gridBodyTr")) ? true : false; },
			find: function (evt, evtIDs) { return (axdom(evt).hasClass("bodyTd") || axdom(evt).hasClass("bodyNodeIndent")) ? true : false; }
		});
		// event target search ------------------------

		if (isoncheck) { //체크박스 구현
			var targetID = myTarget.id;
			var itemIndex = targetID.split(/_AX_/g).last();
			var ids = targetID.split(/_AX_/g);
			var item = this.list[itemIndex];
			var r = ids[ids.length - 3];
			var c = ids[ids.length - 2];
			var target = event.target;
			var checked = event.target.checked;
			var sendObj = {
				index: itemIndex,
				target: event.target,
				checked: event.target.checked,
				r: r,
				c: c,
				list: this.list,
				item: item,
				page: this.page
			}
			//trace(sendObj);
			cfg.body.oncheck.call(sendObj, itemIndex, item);
		} else {
			if (myTarget) {

				//colHeadTool ready
				var targetID = myTarget.id;
				var itemIndex = targetID.split(/_AX_/g).last();
				var ids = targetID.split(/_AX_/g);

				var clickNodeType = ids[(ids.length - 1) - 3];

				if (clickNodeType == "bodyNodeIndent") {
					var item = this.list[itemIndex];
					var r = ids[ids.length - 3];
					var c = ids[ids.length - 2];
					this.expandToggleList(itemIndex, item, r, c);
				} else if (this.readyMoved) {
					//이동명령 대기중 상태인경우 이동 처리
					//this.moveTarget = {itemIndex:itemIndex};
					this.moveTreeExec(this.moveTarget.itemIndex, itemIndex);
				} else {

					//trace({tagName:myTarget.tagName, id:myTarget.id, clickNodeType:clickNodeType});
					if (clickNodeType == "nbody" || clickNodeType == "fbody") {
						if (event.shiftKey) {

						} else if (event.ctrlKey) {
							if (this.selectedRow.length > 0) {
								var body = this.body;
								axf.each(this.selectedRow, function () {
									body.find(".gridBodyTr_" + this).removeClass("selected");
								});
								this.selectedRow.clear();
							}

							var hasID = false;
							var collect = [];
							axf.each(this.selectedCells, function () {
								if (this == targetID) {
									hasID = true;
								} else {
									collect.push(this);
								}
							});
							if (hasID) {
								axdom("#" + targetID).removeClass("selected");
								this.selectedCells = collect;
							} else {
								axdom("#" + targetID).addClass("selected");
								this.selectedCells.push(targetID);
							}
						} else {
							if (this.selectedCells.length > 0) {
								axf.each(this.selectedCells, function () {
									axdom("#" + this).removeClass("selected");
								});
								this.selectedCells.clear();
							}
							if (this.selectedRow.length > 0) {
								var body = this.body;
								axf.each(this.selectedRow, function () {
									body.find(".gridBodyTr_" + this).removeClass("selected");
								});
							}

							this.selectedRow.clear();
							this.body.find(".gridBodyTr_" + itemIndex).addClass("selected");
							this.selectedRow.push(itemIndex);

							var item = this.list[itemIndex];

							if (cfg.body.onclick) {
								var r = ids[ids.length - 3];
								var c = ids[ids.length - 2];

								var hashs = item.hash.split(/_/g);
								var subTree = this.tree;
								axf.each(hashs, function (idx, arg) {
									if (idx == 1) {
										subTree = subTree[this.number()];
									} else if (idx > 1) {
										subTree = subTree[cfg.reserveKeys.subTree][this.number()];
									}
								});

								var sendObj = {
									index: itemIndex,
									r: r,
									c: c,
									list: this.list,
									item: item,
									subTree: subTree,
									page: this.page
								}
								//trace(sendObj);

								cfg.body.onclick.call(sendObj, itemIndex, item);
							}
							//2013-01-23 오후 12:26:52 에디트 이벤트 변경
							//if(this.hasEditor) this.setEditor(item, itemIndex);
						}
					}
				}
			}
		}
	},
	gridBodyDBLClick: function (event) {

		//trace(event.type);

		var cfg = this.config;
		// event target search -
		if(event.target.id == "") return;
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;
		if (eventTarget.tagName.toLowerCase() == "input") return; //input 인 경우 제외
		var myTarget = this.getEventTarget({
			evt: eventTarget, evtIDs: eid,
			until: function (evt, evtIDs) { return (axdom(evt.parentNode).hasClass("gridBodyTr")) ? true : false; },
			find: function (evt, evtIDs) { return (axdom(evt).hasClass("bodyTd")) ? true : false; }
		});
		// event target search ------------------------

		if (myTarget) {
			//colHeadTool ready
			//trace({tagName:myTarget.tagName, id:myTarget.id});
			var targetID = myTarget.id;
			var itemIndex = targetID.split(/_AX_/g).last();
			var ids = targetID.split(/_AX_/g);

			if (this.selectedRow.length > 0) {
				var body = this.body;
				axf.each(this.selectedRow, function () {
					body.find(".gridBodyTr_" + this).removeClass("selected");
				});
			}
			this.selectedRow.clear();
			this.body.find(".gridBodyTr_" + itemIndex).addClass("selected");
			this.selectedRow.push(itemIndex);

			if (cfg.body.ondblclick) {
				var r = ids[ids.length - 3];
				var c = ids[ids.length - 2];
				var item = this.list[itemIndex];
				var sendObj = {
					index: itemIndex,
					r: r,
					c: c,
					list: this.list,
					item: item,
					page: this.page
				}
				cfg.body.ondblclick.call(sendObj);
			}
		}

		this.stopEvent(event);
		this.clearRange();
	},
	gridCheckClick: function (event) {
		var cfg = this.config;
		var reserveKeys = cfg.reserveKeys;
		var relation = cfg.relation;
		var checkboxRelationFixed = cfg.checkboxRelationFixed;
		var target = event.target;
		var targetID = target.id;
		var itemIndex = targetID.split(/_AX_/g).last();
		var ids = targetID.split(/_AX_/g);
		var item = this.list[itemIndex];
		var colSeq = ids[ids.length - 2];
		var checked = event.target.checked;
		var _body = this.body;

		if (checked) { // 체크박스가 체크 된경우
			// 자식 개체를 찾아 체크 처리 합니다.
			var phash = item[reserveKeys.hashKey];

			var childIndex = [];
			axf.each(this.list, function (lidx, list) {
				if (!this.isRoot) {
					if (this[reserveKeys.hashKey].left(phash.length) == phash && this[reserveKeys.hashKey] != phash) {
						childIndex.push(lidx);
					}
				}
			});
			axf.each(childIndex, function () {
				if (_body.find("#" + cfg.targetID + "_AX_checkboxItem_AX_" + colSeq + "_AX_" + this).get(0)) {
					_body.find("#" + cfg.targetID + "_AX_checkboxItem_AX_" + colSeq + "_AX_" + this).get(0).checked = checked;
				}
			});

			// 해시 변수 준비
			var hashs = phash.split(/_/g);
			hashs.shift();

			// 자식 트리 개체에 checked 속성을 부여 합니다. -------------- s
			var stree = this.tree;
			axf.each(hashs, function (hidx, H) {
				if (hidx == 0) {
					stree = stree[this.number()];
				} else {
					stree = stree[reserveKeys.subTree][this.number()];
				}
			});
			var subTreeChecked = function (T, checked) {
				axf.each(T[cfg.reserveKeys.subTree], function () {
					this.__checked = checked;
					if (this[cfg.reserveKeys.subTree]) subTreeChecked(this, checked);
				});
			};
			stree.__checked = checked;
			subTreeChecked(stree, checked);
			//trace(stree);
			// 자식 트리 개체에 checked 속성을 부여 합니다. -------------- e

			// 부모 트리 찾기 -------------- s
			var ptree = this.tree;
			for (var hidx = 0; hidx < hashs.length - 1; hidx++) {
				if (hidx == 0) {
					ptree = ptree[hashs[hidx].number()];
				} else {
					ptree = ptree[reserveKeys.subTree][hashs[hidx].number()];
				}
			};
			//trace(ptree);

			var parentIsRootTree = false;
			if (this.tree == ptree) {
				parentIsRootTree = true;
			}
			// 부모 트리 찾기 -------------- e

			if (!parentIsRootTree) {
				var childIsAllChecked = true;
				/*
				 axf.each(ptree[reserveKeys.subTree], function(){
				 if(!this.__checked) childIsAllChecked = false;
				 });
				 */
				if (childIsAllChecked) {
					var findhash = ptree[reserveKeys.hashKey];

					var p_tree = this.tree;
					var checkedHashs = [];

					axf.each(hashs, function (hidx, H) {
						if (hidx == 0) {
							p_tree = p_tree[this.number()];
						} else {
							p_tree.__checked = true;
							checkedHashs.push(p_tree[reserveKeys.hashKey]);
							p_tree = p_tree[reserveKeys.subTree][this.number()];
						}
					});

					//ptree.__checked = true;
					//trace(findhash);
					//trace(checkedHashs);
					var _body = this.body;
					axf.each(this.list, function (lidx, list) {
						axf.each(checkedHashs, function () {
							if (list[reserveKeys.hashKey] == this) {
								if (_body.find("#" + cfg.targetID + "_AX_checkboxItem_AX_" + colSeq + "_AX_" + lidx).get(0)) {
									_body.find("#" + cfg.targetID + "_AX_checkboxItem_AX_" + colSeq + "_AX_" + lidx).get(0).checked = checked;
								}
							}
						});
					});

					// 부모가 더이상 없을때까지 찾기
				}
			}

			//trace(this.tree);
			this.list = this.convertHashListToTree(this.tree);

		} else { // 체크박스가 체크 해제 된경우

			if (checkboxRelationFixed != null) {
				var phash = item[reserveKeys.hashKey];
				var childIndex = [];
				axf.each(this.list, function (lidx, list) {
					if (!this.isRoot) {
						if (this[reserveKeys.hashKey].left(phash.length) == phash && this[reserveKeys.hashKey] != phash) {
							childIndex.push(lidx);
						}
					}
				});
				axf.each(childIndex, function () {
					if (_body.find("#" + cfg.targetID + "_AX_checkboxItem_AX_" + colSeq + "_AX_" + this).get(0)) {
						_body.find("#" + cfg.targetID + "_AX_checkboxItem_AX_" + colSeq + "_AX_" + this).get(0).checked = checked;
					}
				});

				// 해시 변수 준비
				var hashs = phash.split(/_/g);
				hashs.shift();

				// 자식 트리 개체에 checked 속성을 부여 합니다. -------------- s
				var stree = this.tree;
				axf.each(hashs, function (hidx, H) {
					if (hidx == 0) {
						stree = stree[this.number()];
					} else {
						stree = stree[reserveKeys.subTree][this.number()];
					}
				});
				var subTreeChecked = function (T, checked) {
					axf.each(T[cfg.reserveKeys.subTree], function () {
						this.__checked = checked;
						if (this[cfg.reserveKeys.subTree]) subTreeChecked(this, checked);
					});
				};
				stree.__checked = checked;
				subTreeChecked(stree, checked);
				// 자식 트리 개체에 checked 속성을 부여 합니다. -------------- e
			}
			//부모개체의 자식이 모두 제거 되었다면 체크를 해제 합니다.
			if (checkboxRelationFixed) {

				var p_tree = this.tree;
				var checkedHashs = [];
				//trace(hashs);

				for (var l = hashs.length - 1; l > -1; l--) {
					var subTreeStr = "";
					for (var i = 0; i < l + 1; i++) {
						if (i == 0) {
							subTreeStr += "[" + hashs[i].number() + "]";
						} else {
							subTreeStr += "[reserveKeys.subTree][" + hashs[i].number() + "]";
						}
					}
					var myTree;
					eval("myTree = this.tree" + subTreeStr);
					//trace(myTree.hash);
					var childIsAllUnChecked = true;
					axf.each(myTree[reserveKeys.subTree], function () {
						if (this.__checked) childIsAllUnChecked = false;
					});
					if (childIsAllUnChecked) {
						myTree.__checked = checked;
						checkedHashs.push(myTree[reserveKeys.hashKey]);
					}
				};

				//ptree.__checked = true;
				//trace(findhash);
				//trace(checkedHashs);
				var _body = this.body;
				axf.each(this.list, function (lidx, list) {
					axf.each(checkedHashs, function () {
						if (list[reserveKeys.hashKey] == this) {
							if (_body.find("#" + cfg.targetID + "_AX_checkboxItem_AX_" + colSeq + "_AX_" + lidx).get(0)) {
								_body.find("#" + cfg.targetID + "_AX_checkboxItem_AX_" + colSeq + "_AX_" + lidx).get(0).checked = checked;
							}
						}
					});
				});
			}

			this.list = this.convertHashListToTree(this.tree);
		}

	},
	contentScrollResize: function (resetLeft) {
		var cfg = this.config;

		var bodyHeight = this.body.height();
		var scrollHeight = axdom("#" + cfg.targetID + "_AX_scrollContent").height();

		var bodyWidth = this.body.width();
		var _colWidth = (this.colWidth.number() + cfg.fitToWidthRightMargin);
		var scrollWidth = (_colWidth > bodyWidth) ? _colWidth : bodyWidth;

		if (cfg.width == "auto") scrollWidth = axdom("#" + cfg.targetID + "_AX_scrollContent").find("table.treeBodyTable").width().number();

		axdom("#" + cfg.targetID + "_AX_scrollContent").css({ width: scrollWidth });
		this.colHead.css({ width: scrollWidth });  // colHead width 재정의

		if (this.hasEditor) this.editor.css({ width: scrollWidth });

		if (resetLeft != false) {
			axdom("#" + cfg.targetID + "_AX_scrollContent").css({ left: 0 });
			axdom("#" + cfg.targetID + "_AX_gridColHead").css({ left: 0 });
			axdom("#" + cfg.targetID + "_AX_scrollXHandle").css({ left: 0 });
			if (this.hasEditor) axdom("#" + cfg.targetID + "_AX_editorContent").css({ left: 0 });
		}

		if (bodyHeight < scrollHeight && cfg.height != "auto") {

			if (cfg.width == "auto") {
				//trace(scrollWidth);
				//trace(axdom("#" + cfg.targetID + "_AX_scrollContent").width());
				//scrollWidth += 50;
				axdom("#" + cfg.targetID + "_AX_scrollContent").css({ width: scrollWidth });
				//trace(axdom("#" + cfg.targetID + "_AX_scrollContent").width());
			}

			//axdom("#" + cfg.targetID + "_AX_scrollTrackXY").show();
			axdom("#" + cfg.targetID + "_AX_scrollTrackY").show();

			var scrollTrackYHeight = (cfg.xscroll) ? bodyHeight : bodyHeight;
			axdom("#" + cfg.targetID + "_AX_scrollTrackY").css({ height: scrollTrackYHeight });

			var scrollYHandleHeight = (bodyHeight * scrollTrackYHeight) / scrollHeight;
			axdom("#" + cfg.targetID + "_AX_scrollYHandle").css({ height: scrollYHandleHeight });



		} else {
			//axdom("#" + cfg.targetID + "_AX_scrollTrackXY").hide();
			axdom("#" + cfg.targetID + "_AX_scrollTrackY").hide();
			axdom("#" + cfg.targetID + "_AX_scrollContent").css({ top: 0 });
		}

		if (scrollWidth > bodyWidth && cfg.xscroll) {

			this.show_scrollTrackX = true;

			//axdom("#" + cfg.targetID + "_AX_scrollTrackXY").show();
			axdom("#" + cfg.targetID + "_AX_scrollTrackX").show();

			var scrollTrackXWidth = bodyWidth;
			axdom("#" + cfg.targetID + "_AX_scrollTrackX").css({ width: scrollTrackXWidth });
			var scrollXHandleWidth = ((bodyWidth) * scrollTrackXWidth) / (scrollWidth);

			axdom("#" + cfg.targetID + "_AX_scrollXHandle").css({ width: scrollXHandleWidth });

			// cfg.height == "auto" 길이 늘이기
			if (cfg.height == "auto") {
				var colHeadHeight = this.colHead.outerHeight();
				var scrollBodyHeight = axdom("#" + cfg.targetID + "_AX_scrollContent").height();
				var scrollTrackXHeight = axdom("#" + cfg.targetID + "_AX_scrollTrackX").outerHeight();

				this.scrollBody.css({ height: (scrollBodyHeight + colHeadHeight + scrollTrackXHeight) }); //colhead + body height
				this.body.css({ top: colHeadHeight, height: (scrollBodyHeight + scrollTrackXHeight) }); // body Height
			}
		} else {
			this.show_scrollTrackX = false;
			axdom("#" + cfg.targetID + "_AX_scrollTrackX").hide();
			//axdom("#"+cfg.targetID+"_AX_scrollTrackXY").hide();

			if (cfg.height == "auto") {
				var colHeadHeight = this.colHead.outerHeight();
				var scrollBodyHeight = axdom("#" + cfg.targetID + "_AX_scrollContent").height();

				this.scrollBody.css({ height: (scrollBodyHeight + colHeadHeight) }); //colhead + body height
				this.body.css({ top: colHeadHeight, height: (scrollBodyHeight) }); // body Height
			}
		}

	},
	contentScrollScrollSync: function (pos) {
		var cfg = this.config;

		if (pos.left != undefined) {
			if (!this.contentScrollXAttr) {
				var scrollWidth = (this.colWidth > this.body.width()) ? this.colWidth : this.body.width();
				this.contentScrollXAttr = {
					bodyWidth: this.body.width(),
					scrollWidth: scrollWidth,
					scrollTrackXWidth: axdom("#" + cfg.targetID + "_AX_scrollTrackX").width(),
					scrollXHandleWidth: axdom("#" + cfg.targetID + "_AX_scrollXHandle").outerHeight()
				};
			}

			//x 변경
			var L = (this.contentScrollXAttr.scrollWidth * (pos.left) / this.contentScrollXAttr.scrollTrackXWidth).round(0);
			axdom("#" + cfg.targetID + "_AX_scrollContent").css({ left: -L });
			axdom("#" + cfg.targetID + "_AX_treeColHead").css({ left: -L });
			if (this.hasEditor) axdom("#" + cfg.targetID + "_AX_editorContent").css({ left: -L });
			//trace({top:-L});
		} else {
			if (cfg.height == "auto") return;
			if (!this.contentScrollYAttr) {
				this.contentScrollYAttr = {
					bodyHeight: this.body.height(),
					scrollHeight: axdom("#" + cfg.targetID + "_AX_scrollContent").height(),
					scrollTrackYHeight: axdom("#" + cfg.targetID + "_AX_scrollTrackY").height(),
					scrollYHandleHeight: axdom("#" + cfg.targetID + "_AX_scrollYHandle").outerHeight()
				};
			}

			//y 변경
			var T = (this.contentScrollYAttr.scrollHeight * (pos.top) / this.contentScrollYAttr.scrollTrackYHeight).round(0);
			axdom("#" + cfg.targetID + "_AX_scrollContent").css({ top: -T });
			if (axf.getId(cfg.targetID + "_AX_fixedScrollContent")) axdom("#" + cfg.targetID + "_AX_fixedScrollContent").css({ top: -T });
			if (this.editorOpend) {
				this.editor.css({ top: -T + this.editorOpenTop });
			}
			//trace({top:-T});
		}
	},
	contentScrollContentSync: function (pos) {
		var cfg = this.config;
		if (pos.left != undefined) {

		} else {
			if (cfg.height == "auto") return;
			if (!this.contentScrollYAttr) {
				this.contentScrollYAttr = {
					bodyHeight: this.body.height(),
					scrollHeight: axdom("#" + cfg.targetID + "_AX_scrollContent").height(),
					scrollTrackYHeight: axdom("#" + cfg.targetID + "_AX_scrollTrackY").height(),
					scrollYHandleHeight: axdom("#" + cfg.targetID + "_AX_scrollYHandle").outerHeight()
				};
			}

			//y 변경
			var T = (this.contentScrollYAttr.scrollYHandleHeight * (pos.top) / this.contentScrollYAttr.bodyHeight).round(0);
			var handleTop = -T;
			//trace({h1:(handleTop + this.contentScrollYAttr.handleHeight), trackHeight:this.contentScrollYAttr.trackHeight});
			//if((handleTop + this.contentScrollYAttr.handleHeight) > this.contentScrollYAttr.trackHeight) handleTop = this.contentScrollYAttr.trackHeight - this.contentScrollYAttr.handleHeight;

			axdom("#" + cfg.targetID + "_AX_scrollYHandle").css({ top: handleTop });
			if (axf.getId(cfg.targetID + "_AX_fixedScrollContent")) axdom("#" + cfg.targetID + "_AX_fixedScrollContent").css({ top: pos.top });
			if (this.editorOpend) {
				this.editor.css({ top: pos.top + this.editorOpenTop });
			}

		}
	},
	getMousePositionToContentScroll: function (event, contentScrollID) {
		var pos = axdom("#" + contentScrollID).offset();
		var x = (event.pageX - pos.left);
		var y = (event.pageY - pos.top);
		return { x: x, y: y };
	},
	getTouchPositionToContentScroll: function (event) {
		var cfg = this.config;
		var touch = event.touches[0];
		var pos = this.contentScrollIDOffset;
		if (cfg.touchDirection) {
			var x = (touch.pageX.round(1) - pos.left);
			var y = (touch.pageY.round(1) - pos.top);
		} else {
			var x = (-touch.pageX.round(1) - pos.left);
			var y = (-touch.pageY.round(1) - pos.top);
		}
		return { x: x, y: y };
	},
	contentScrollScrollReady: function (event) {
		var cfg = this.config;
		var handleName = (event.target.id).split(/_AX_/).last();
		//trace(handleName);
		this.contentScrollAttrs = { handleName: handleName };
		this.contentScrollXAttr = null;
		this.contentScrollYAttr = null;

		if (handleName == "scrollYHandle") {
			this.contentScrollAttrs.scrollTrack = cfg.targetID + "_AX_scrollTrackY";
		} else {
			this.contentScrollAttrs.scrollTrack = cfg.targetID + "_AX_scrollTrackX";
		}

		axdom(event.target).addClass("hover");
		var pos = this.getMousePositionToContentScroll(event, this.contentScrollAttrs.scrollTrack);
		this.contentScrollAttrs.x = axdom(event.target).position().left - pos.x;
		this.contentScrollAttrs.y = axdom(event.target).position().top - pos.y;
		this.contentScrollAttrs.handleWidth = axdom(event.target).outerWidth();
		this.contentScrollAttrs.handleHeight = axdom(event.target).outerHeight();
		this.contentScrollAttrs.trackWidth = axdom("#" + this.contentScrollAttrs.scrollTrack).width();
		this.contentScrollAttrs.trackHeight = axdom("#" + this.contentScrollAttrs.scrollTrack).height();

		/* srcoll event bind */
		var contentScrollScrollMove = this.contentScrollScrollMove.bind(this);
		this.contentScrollScrollMoveBind = function (event) {
			contentScrollScrollMove(event);
		};
		var contentScrollScrollEnd = this.contentScrollScrollEnd.bind(this);
		this.contentScrollScrollEndBind = function (event) {
			contentScrollScrollEnd(event);
		};
		axdom(document.body).bind("mousemove.AXTree", this.contentScrollScrollMoveBind);
		axdom(document.body).bind("mouseup.AXTree", this.contentScrollScrollEndBind);
		axdom(document.body).bind("mouseleave.AXTree", this.contentScrollScrollEndBind);
		axdom("iframe").bind("mouseover.AXTree", this.contentScrollScrollEndBind);

		axdom(document.body).attr("onselectstart", "return false");
		axdom(document.body).addClass("AXUserSelectNone");
		/* scroll event bind ~~~~~~~~~~~~~~~~~~~ */
	},
	contentScrollScrollMove: function (event) {
		var cfg = this.config;
		try {
			var pos = this.getMousePositionToContentScroll(event, this.contentScrollAttrs.scrollTrack);
			var handleName = this.contentScrollAttrs.handleName;

			var handleTop = 0;
			var handleLeft = 0;
			if (handleName == "scrollYHandle") {
				handleTop = pos.y + this.contentScrollAttrs.y;
				if (handleTop < 0) handleTop = 0;
				if ((handleTop + this.contentScrollAttrs.handleHeight) > this.contentScrollAttrs.trackHeight) handleTop = this.contentScrollAttrs.trackHeight - this.contentScrollAttrs.handleHeight;
				axdom("#" + cfg.targetID + "_AX_" + handleName).css({ top: handleTop });
				this.contentScrollScrollSync({ top: handleTop });
			} else {
				handleLeft = pos.x + this.contentScrollAttrs.x;
				if (handleLeft < 0) handleLeft = 0;
				if ((handleLeft + this.contentScrollAttrs.handleWidth) > this.contentScrollAttrs.trackWidth) handleLeft = this.contentScrollAttrs.trackWidth - this.contentScrollAttrs.handleWidth;
				axdom("#" + cfg.targetID + "_AX_" + handleName).css({ left: handleLeft });
				this.contentScrollScrollSync({ left: handleLeft });
			}
		} catch (e) {
			this.contentScrollScrollEnd(event);
		}
	},
	contentScrollScrollEnd: function (event) {
		var cfg = this.config;
		axdom(document.body).unbind("mousemove.AXTree");
		axdom(document.body).unbind("mouseup.AXTree");
		axdom(document.body).unbind("mouseleave.AXTree");
		axdom("iframe").unbind("mouseover.AXTree");

		axdom(document.body).removeAttr("onselectstart");
		axdom(document.body).removeClass("AXUserSelectNone");

		axdom("#" + cfg.targetID + "_AX_" + this.contentScrollAttrs.handleName).removeClass("hover");
	},
	contentScrollScrollWheel: function (e) {
		var cfg = this.config;
		if (cfg.height != "auto") {
			var cfg = this.config;

			var event = window.event || e;
			var delta = event.detail ? event.detail * (-20) : event.wheelDelta / 2 //check for detail first so Opera uses that instead of wheelDelta

			var scrollTop = axdom("#" + cfg.targetID + "_AX_scrollContent").position().top;
			var scrollHeight = axdom("#" + cfg.targetID + "_AX_scrollContent").height();
			var bodyHeight = this.body.height();
			//var handleTop = axdom("#"+cfg.targetID+"_AX_scrollYHandle").position().top; i want this value
			var handleHeight = axdom("#" + cfg.targetID + "_AX_scrollYHandle").outerHeight();
			var trackHeight = axdom("#" + cfg.targetID + "_AX_scrollTrackY").height();

			if (scrollHeight < bodyHeight) {
				return;
			}

			//trace({scrollTop:scrollTop, bodyHeight:bodyHeight, scrollHeight:scrollHeight});
			var eventCancle = false;
			scrollTop += delta;

			if (scrollTop > 0) {
				scrollTop = 0;
				eventCancle = true;
			} else if (scrollTop.abs() + bodyHeight > scrollHeight) {
				scrollTop = bodyHeight - scrollHeight;
				eventCancle = true;
			} else if (scrollTop == 0) {
				scrollTop = 0;
				eventCancle = true;
			}

			axdom("#" + cfg.targetID + "_AX_scrollContent").css({ top: scrollTop });
			this.contentScrollContentSync({ top: scrollTop });

			if (!eventCancle) {
				if (event.preventDefault) event.preventDefault();
				if (event.stopPropagation) event.stopPropagation();
				event.cancelBubble = true;
				return false;
			}
		}
	},
	contentScrollTouchstart: function (e) {
		var cfg = this.config;
		var event = window.event || e;
		this.contentScrollTouchMoved = true;
		this.contentScrollIDOffset = axdom("#" + cfg.targetID + "_AX_gridBody").offset();
		this.contentScrollXAttr = null;
		this.contentScrollYAttr = null;

		var pos = this.getTouchPositionToContentScroll(event);

		var YhandleTop = axdom("#" + cfg.targetID + "_AX_scrollYHandle").position().top;
		var YhandleHeight = axdom("#" + cfg.targetID + "_AX_scrollYHandle").outerHeight();
		var YtrackHeight = axdom("#" + cfg.targetID + "_AX_scrollTrackY").height();

		axdom("#" + cfg.targetID + "_AX_scrollYHandle").addClass("hover");

		var XhandleTop = axdom("#" + cfg.targetID + "_AX_scrollXHandle").position().left;
		var XhandleHeight = axdom("#" + cfg.targetID + "_AX_scrollXHandle").outerWidth();
		var XtrackHeight = axdom("#" + cfg.targetID + "_AX_scrollTrackX").width();

		axdom("#" + cfg.targetID + "_AX_scrollXHandle").addClass("hover");

		this.scrollTouchAttr = {
			y: (YhandleTop - pos.y).number(), h: YhandleHeight.number(), th: YtrackHeight,
			x: (XhandleTop - pos.x).number(), w: XhandleHeight.number(), tw: XtrackHeight
		};

		var contentScrollTouchEnd = this.contentScrollTouchEnd.bind(this);
		this.contentScrollTouchEndBind = function () {
			contentScrollTouchEnd(event);
		};

		var contentScrollTouchMove = this.contentScrollTouchMove.bind(this);
		this.contentScrollTouchMoveBind = function () {
			contentScrollTouchMove(event);
		};

		if (document.addEventListener) {
			document.addEventListener("touchend", this.contentScrollTouchEndBind, false);
			document.addEventListener("touchmove", this.contentScrollTouchMoveBind, false);
		}
	},
	contentScrollTouchMove: function (e) {
		var cfg = this.config;
		var event = window.event || e;
		if (this.contentScrollTouchMoved) {
			var pos = this.getTouchPositionToContentScroll(event);
			var scrollTouchAttr = this.scrollTouchAttr;

			var htop = axdom("#" + cfg.targetID + "_AX_scrollYHandle").position().top;
			var handleTop = pos.y + scrollTouchAttr.y;
			if (handleTop < 0) handleTop = 0;
			if ((handleTop + scrollTouchAttr.h) > scrollTouchAttr.th) handleTop = scrollTouchAttr.th - scrollTouchAttr.h;

			if ((htop - handleTop).abs() > 2) {
				axdom("#" + cfg.targetID + "_AX_scrollYHandle").css({ top: handleTop });
				this.contentScrollScrollSync({ top: handleTop });
			}

			if (this.show_scrollTrackX) {
				var hleft = axdom("#" + cfg.targetID + "_AX_scrollXHandle").position().left;
				var handleLeft = pos.x + this.scrollTouchAttr.x;
				if (handleLeft < 0) handleLeft = 0;
				if ((handleLeft + scrollTouchAttr.w) > scrollTouchAttr.tw) handleLeft = scrollTouchAttr.tw - scrollTouchAttr.w;

				if ((hleft - handleLeft).abs() > 2) {
					axdom("#" + cfg.targetID + "_AX_scrollXHandle").css({ left: handleLeft });
					this.contentScrollScrollSync({ left: handleLeft });
				}
			}

			if (event.preventDefault) event.preventDefault();
			else return false;
		}
	},
	contentScrollTouchEnd: function (e) {
		var cfg = this.config;
		var event = window.event || e;
		if (this.contentScrollTouchMoved) {

			axdom("#" + cfg.targetID + "_AX_scrollXHandle").removeClass("hover");
			axdom("#" + cfg.targetID + "_AX_scrollYHandle").removeClass("hover");

			if (document.removeEventListener) {
				document.removeEventListener("touchend", this.contentScrollTouchEndBind, false);
				document.removeEventListener("touchmove", this.contentScrollTouchMoveBind, false);
			}
			this.contentScrollTouchMoved = false;
		}
	},
	clearFocus: function () {
		var cfg = this.config;

		if (this.selectedCells.length > 0) {
			axf.each(this.selectedCells, function () {
				axdom("#" + this).removeClass("selected");
			});
			this.selectedCells.clear();
		}
		if (this.selectedRow.length > 0) {
			var body = this.body;
			axf.each(this.selectedRow, function () {
				body.find(".gridBodyTr_" + this).removeClass("selected");
			});
		}

		this.selectedRow.clear();
	},
	setFocus: function (itemIndex) {
		var cfg = this.config;

		if(itemIndex < 0 || itemIndex > this.list.length-1){
			return false;
		}
		if(!this.body.find(".gridBodyTr_" + itemIndex).get(0)) return;

		if (this.selectedCells.length > 0) {
			axf.each(this.selectedCells, function () {
				axdom("#" + this).removeClass("selected");
			});
			this.selectedCells.clear();
		}
		if (this.selectedRow.length > 0) {
			var body = this.body;
			axf.each(this.selectedRow, function () {
				body.find(".gridBodyTr_" + this).removeClass("selected");
			});
		}

		this.selectedRow.clear();



		this.body.find(".gridBodyTr_" + itemIndex).addClass("selected");
		this.selectedRow.push(itemIndex);

		if(cfg.height != "auto"){

			var trTop = this.body.find(".gridBodyTr_" + itemIndex).position().top;
			var trHeight = this.body.find(".gridBodyTr_" + itemIndex).height();

			var scrollHeight = axdom("#" + cfg.targetID + "_AX_scrollContent").height();
			var bodyHeight = this.body.height();
			var handleHeight = axdom("#" + cfg.targetID + "_AX_scrollYHandle").outerHeight();
			var trackHeight = axdom("#" + cfg.targetID + "_AX_scrollTrackY").height();

			if (trTop.number() + trHeight.number() > bodyHeight) {
				var scrollTop = bodyHeight - (trTop.number() + trHeight.number());
				axdom("#" + cfg.targetID + "_AX_scrollContent").css({ top: scrollTop });
				this.contentScrollContentSync({ top: scrollTop });
			} else {
				if (trTop.number() == 0) {
					var scrollTop = 0;
					axdom("#" + cfg.targetID + "_AX_scrollContent").css({ top: scrollTop });
					this.contentScrollContentSync({ top: scrollTop });
				}
			}
		}
	},
	click: function (itemIndex, open, doNotCallBack) {
		var cfg = this.config;
		var reserveKeys = cfg.reserveKeys;

		var item = this.list[itemIndex];

		var hashs = item.hash.split(/_/g);
		var subTree = this.tree;

		var opendPath = [];
		axf.each(hashs, function (idx, arg) {
			if (idx == 1) {
				subTree = subTree[this.number()];
				opendPath.push(subTree[reserveKeys.hashKey]);
			} else if (idx > 1) {
				subTree = subTree[cfg.reserveKeys.subTree][this.number()];
				opendPath.push(subTree[reserveKeys.hashKey]);
			}
		});
		opendPath.pop();

		if (cfg.body.onclick && !doNotCallBack) {
			var sendObj = {
				index: itemIndex,
				list: this.list,
				item: item,
				subTree: subTree,
				page: this.page
			}
			cfg.body.onclick.call(sendObj, itemIndex, item);
		}

		if(open == "open"){
			var expandList = [];
			axf.each(this.list, function(lidx, L){
				axf.each(opendPath, function(pidx, P){
					if(L[reserveKeys.hashKey] == P){
						if(!L[reserveKeys.openKey]){
							expandList.push(lidx);
						}
					}
				});
			});
			//trace(expandList);
			for(var i=0;i<expandList.length;i++){
				this.expandToggleList(expandList[i], this.list[expandList[i]], null, null);
			}
		}

		this.setFocus(itemIndex);

		return {focusedID:this.body.find(".gridBodyTr_" + itemIndex).attr("id")};

		/*
		 if (event.preventDefault) event.preventDefault();
		 if (event.stopPropagation) event.stopPropagation();
		 event.cancelBubble = true;
		 return false;
		 */
	},
	/* body 영역 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ head & foot 영역  */
	getDataSetFormatterValue: function (formatter, dataSet, value, key, CH) {
		var cfg = this.config;
		var result;
		if (formatter == "money") {
			if (value == "" || value == "null" || value == undefined) {
				result = "";
			} else {
				result = value.number().money();
			}
		} else if (formatter == "dec") {
			result = (value == undefined) ? "" : value.dec();
		} else if (formatter == "html") {
			result = value;
		} else if (formatter == "checkbox") {
			result = value;
		} else {
			var sendObj = {
				index: null,
				list: this.list,
				item: dataSet,
				dataSet: dataSet,
				page: this.page
			};
			result = formatter.call(sendObj);
		}
		return result;
	},
	getHeadDataSet: function (dataSet, isfix) {
		var cfg = this.config;
		var tpo = [];
		var getDataSetFormatterValue = this.getDataSetFormatterValue.bind(this);
		//dataSet 빈 Key 채우기
		axf.each(cfg.colGroup, function () {
			if (dataSet[this.key] == undefined) dataSet[this.key] = "";
		});
		//dataSet 빈 Key 채우기 ~~~~~~~~~~~~~~~~
		var hasFixed = this.hasFixed;

		for (var r = 0; r < cfg.head.rows.length; r++) {
			var isLastTR = (cfg.head.rows.length - 1 == r);
			tpo.push("<tr class=\"gridBodyTr gridBodyTr_foot\" id=\"" + cfg.targetID + "_AX_head_" + r + "_AX_" + (isfix || "n") + "\">");
			var colCount = 0;

			axf.each(cfg.head.rows[r], function (CHidx, CH) {
				if (CH.display && CH.colspan > 0) {

					if (isfix == undefined || (isfix != undefined && colCount < (cfg.fixedColSeq + 1))) {

						colCount += CH.colspan;

						//radio, check exception
						var rowspan = (CH.rowspan > 1) ? " rowspan=\"" + CH.rowspan + "\"" : "";
						var colspan = (CH.colspan > 1) ? " colspan=\"" + CH.colspan + "\"" : "";
						var valign = " valign=\"" + CH.valign + "\" style=\"vertical-align:" + CH.valign + ";\"";
						var bottomClass = (CH.isLastCell) ? "" : " bodyBottomBorder";
						var fixedClass = (CH.isFixedEndCell) ? " fixedLine" : "";

						//trace({r:r, CHidx:CHifixedColSeq:cfg.fixedColSeq, colCount:colCount});

						var bodyNodeClass = "";
						if (CH.formatter == "checkbox") bodyNodeClass = " bodyTdCheckBox";
						else if (CH.formatter == "html") bodyNodeClass = " bodyTdHtml";

						tpo.push("<td" + valign + rowspan + colspan + " id=\"" + cfg.targetID + "_AX_" + (isfix || "n") + "head_AX_" + r + "_AX_" + CHidx + "\" class=\"bodyTd" + bottomClass + fixedClass + "\">");
						tpo.push("<div class=\"tdRelBlock\">");
						tpo.push("<div class=\"bodyNode bodyTdText" + bodyNodeClass + "\" align=\"" + CH.align + "\" id=\"" + cfg.targetID + "_AX_headText_AX_" + r + "_AX_" + CHidx + "\">");
						if ((hasFixed && !CH.isFixedCell) || !hasFixed || isfix != undefined) {
							if (CH.formatter) {
								tpo.push(getDataSetFormatterValue(CH.formatter, dataSet, dataSet[CH.key], CH.key, CH));
							} else {
								tpo.push(dataSet[CH.key]);
							}
						} else {
							tpo.push("&nbsp;");
						}
						tpo.push("</div>");
						tpo.push("</div>");
						tpo.push("</td>");
					}
				}
			});
			if (r == 0 && isfix == undefined) {
				tpo.push("<td class=\"bodyNullTd\" id=\"" + cfg.targetID + "_AX_headnull\" rowspan=\"" + cfg.body.rows.length + "\"><div class=\"tdRelBlock\">&nbsp;</div></td>");
			}
			tpo.push("</tr>");
		}
		return tpo.join('');
	},
	getFootDataSet: function (dataSet, isfix) {
		var cfg = this.config;
		var tpo = [];
		var getDataSetFormatterValue = this.getDataSetFormatterValue.bind(this);
		//dataSet 빈 Key 채우기
		axf.each(cfg.colGroup, function () {
			if (dataSet[this.key] == undefined) dataSet[this.key] = "";
		});
		//dataSet 빈 Key 채우기 ~~~~~~~~~~~~~~~~
		var hasFixed = this.hasFixed;

		for (var r = 0; r < cfg.foot.rows.length; r++) {
			var isLastTR = (cfg.foot.rows.length - 1 == r);
			tpo.push("<tr class=\"gridBodyTr gridBodyTr_foot\" id=\"" + cfg.targetID + "_AX_foot_" + r + "_AX_" + (isfix || "n") + "\">");
			var colCount = 0;

			axf.each(cfg.foot.rows[r], function (CHidx, CH) {
				if (CH.display && CH.colspan > 0) {

					if (isfix == undefined || (isfix != undefined && colCount < (cfg.fixedColSeq + 1))) {

						colCount += CH.colspan;

						//radio, check exception
						var rowspan = (CH.rowspan > 1) ? " rowspan=\"" + CH.rowspan + "\"" : "";
						var colspan = (CH.colspan > 1) ? " colspan=\"" + CH.colspan + "\"" : "";
						var valign = " valign=\"" + CH.valign + "\" style=\"vertical-align:" + CH.valign + ";\"";
						var bottomClass = (CH.isLastCell) ? "" : " bodyBottomBorder";
						var fixedClass = (CH.isFixedEndCell) ? " fixedLine" : "";

						//trace({r:r, CHidx:CHifixedColSeq:cfg.fixedColSeq, colCount:colCount});

						var bodyNodeClass = "";
						if (CH.formatter == "checkbox") bodyNodeClass = " bodyTdCheckBox";
						else if (CH.formatter == "html") bodyNodeClass = " bodyTdHtml";

						tpo.push("<td" + valign + rowspan + colspan + " id=\"" + cfg.targetID + "_AX_" + (isfix || "n") + "foot_AX_" + r + "_AX_" + CHidx + "\" class=\"bodyTd" + bottomClass + fixedClass + "\">");
						tpo.push("<div class=\"tdRelBlock\">");
						tpo.push("<div class=\"bodyNode bodyTdText" + bodyNodeClass + "\" align=\"" + CH.align + "\" id=\"" + cfg.targetID + "_AX_footText_AX_" + r + "_AX_" + CHidx + "\">");
						if ((hasFixed && !CH.isFixedCell) || !hasFixed || isfix != undefined) {
							if (CH.formatter) {
								tpo.push(getDataSetFormatterValue(CH.formatter, dataSet, dataSet[CH.key], CH.key, CH));
							} else {
								tpo.push(dataSet[CH.key]);
							}
						} else {
							tpo.push("&nbsp;");
						}
						tpo.push("</div>");
						tpo.push("</div>");
						tpo.push("</td>");
					}
				}
			});
			if (r == 0 && isfix == undefined) {
				tpo.push("<td class=\"bodyNullTd\" id=\"" + cfg.targetID + "_AX_footnull\" rowspan=\"" + cfg.body.rows.length + "\"><div class=\"tdRelBlock\">&nbsp;</div></td>");
			}
			tpo.push("</tr>");
		}
		return tpo.join('');
	},
	setDataSet: function (obj) {
		var cfg = this.config;
		if (obj.ajaxUrl) {

		} else {
			if (axdom.isPlainObject(obj)) {
				this.dataSet = obj;
				if (cfg.head) this.printHead();
				if (cfg.foot) this.printFoot();
				this.contentScrollResize(false);
			}
		}
	},
	redrawDataSet: function () {
		var cfg = this.config;
		if (this.dataSet) {
			if (cfg.head) this.printHead();
			if (cfg.foot) this.printFoot();
		}
	},
	printHead: function () {
		var cfg = this.config;
		var getDataSet = this.getHeadDataSet.bind(this);
		var po = [];
		po.push(getDataSet(this.dataSet));
		axdom("#" + cfg.targetID + "_AX_thead").html(po.join(''));
		if (this.hasFixed) {
			po = [];
			po.push(getDataSet(this.dataSet, "fix"));
			axdom("#" + cfg.targetID + "_AX_fixedThead").html(po.join(''));
		}
	},
	printFoot: function () {
		var cfg = this.config;
		var getDataSet = this.getFootDataSet.bind(this);
		var po = [];
		po.push(getDataSet(this.dataSet));
		axdom("#" + cfg.targetID + "_AX_tfoot").html(po.join(''));
		if (this.hasFixed) {
			po = [];
			po.push(getDataSet(this.dataSet, "fix"));
			axdom("#" + cfg.targetID + "_AX_fixedTfoot").html(po.join(''));
		}
	},
	/* head & foot 영역 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ editor 영역  */

	/* editor 영역 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

	/* tree 추가 메서드  */
	setTree: function (obj, sortDisable) {
		var cfg = this.config;
		var nowSortHeadID = this.nowSortHeadID;
		var nowSortHeadObj = this.nowSortHeadObj;
		this.listLoadingDisplay();

		if (obj.ajaxUrl) {
			this.ajaxInfo = obj;
			this.ajax_sortDisable = sortDisable;
			this.pageActive = true;

			var url = obj.ajaxUrl;
			/*
			 var appendPars = [
			 "pageNo="+this.page.pageNo,
			 "pageSize="+this.page.pageSize
			 ];
			 var pars = (obj.ajaxPars) ? obj.ajaxPars + "&" +  appendPars.join('&') : appendPars.join('&') ;
			 */
			var pars = (obj.ajaxPars) ? obj.ajaxPars : "";

			var ajaxGetTree = this.ajaxGetTree.bind(this);
			new AXReq(url, {
				debug: false, pars: pars, onsucc: function (res) {
					if ((res.result && res.result == AXConfig.AXReq.okCode) || (res.result == undefined && !res.error)) {
						res._sortDisable = sortDisable;
						if (obj.response) {
							obj.response.call(res);
						} else {
							ajaxGetTree(res);
						}
						if (obj.onLoad) obj.onLoad.call(res);
					} else {
						//AXUtil.alert(res);
						AXUtil.alert(res.msg);
					}
				}
			});
		} else {
			this.ajaxInfo = null;
			if (axdom.isArray(obj)) {
				this.tree = obj;
				this.list = this.convertHashListToTree(obj);
				//trace(this.list);
				this.setList(this.list, false);
			}
		}

	},
	ajaxGetTree: function (res) {
		var cfg = this.config;
		var nowSortHeadID = this.nowSortHeadID;
		var nowSortHeadObj = this.nowSortHeadObj;
		this.tree = res[AXConfig.AXTree.keyTree];

		this.list = this.convertHashListToTree(res[AXConfig.AXTree.keyTree]);
		if (res._sortDisable || !cfg.sort) {

		} else {
			if (nowSortHeadID) {
				this.list = this.sortList(nowSortHeadObj.sort, nowSortHeadObj, this.list);
			}
		}
		//AXUtil.overwriteObject(this.page, res.page, true);
		this.setList(this.list, false);
		//this.setPaging(); tree 에선 페이징 보류
	},
	setLoading: function (itemIndex, item) {
		var cfg = this.config;
		for (var r = 0; r < cfg.body.rows.length; r++) {
			axdom("#" + cfg.targetID + "_AX_tr_" + r + "_AX_n_AX_" + itemIndex).find(".bodyNodeIndent").addClass("loading");
		}
	},
	endLoading: function (itemIndex, item) {
		var cfg = this.config;
		for (var r = 0; r < cfg.body.rows.length; r++) {
			axdom("#" + cfg.targetID + "_AX_tr_" + r + "_AX_n_AX_" + itemIndex).find(".bodyNodeIndent").removeClass("loading");
		}
	},
	appendTree: function (itemIndex, item, subTree) {
		var cfg = this.config;
		var reserveKeys = cfg.reserveKeys;

		//trace({itemIndex:itemIndex, item:item, subTree:subTree});

		if (itemIndex == null || itemIndex == undefined || item == null || item == undefined) {

			var tree = this.tree;

			axf.each(subTree, function () {
				this[cfg.reserveKeys.subTree] = [];
				tree.push(this);
			});

			var pushedList = this.appendSubTree("0".setDigit(cfg.hashDigit), true, subTree, this.tree);
			this.printList();

		} else { // 부모 하위 개체로 추가할 때에.

			axf.each(subTree, function () {
				if (!this[cfg.reserveKeys.subTree]) this[cfg.reserveKeys.subTree] = [];
			});
			var hashs = item.hash.split(/_/g);

			var tree = this.tree; // 추가될 트리 구하기
			axf.each(hashs, function (idx, T) {
				if (idx > 0) {
					if (idx == 1) tree = tree[T.number()];
					else tree = tree[cfg.reserveKeys.subTree][T.number()];
				}
			});

			//tree[cfg.reserveKeys.subTree] =
			tree[reserveKeys.openKey] = true;
			axf.each(subTree, function () {
				tree[reserveKeys.subTree].push(this);
			});

			this.list = this.convertHashListToTree(this.tree);
			this.printList();
		}

		this.contentScrollXAttr = null;
		this.contentScrollYAttr = null;
		/* */
	},
	appendSubTree: function (parentHash, parentOpened, arr, parentArr) {
		var cfg = this.config;
		var reserveKeys = cfg.reserveKeys;
		var appendSubTree = this.appendSubTree.bind(this);
		var appendSubTree_pushList = this.appendSubTree_pushList.bind(this);

		var returnList = [];
		var appendIndex = this.list.length;
		var parentSubTreeLength = 0;
		if (parentHash != "0".setDigit(cfg.hashDigit)) parentSubTreeLength = parentArr[reserveKeys.subTree].length;
		else parentSubTreeLength = parentArr.length;

		axf.each(arr, function (idx, A) {
			var pushItem = {};
			var hasOpenKey = false, hasSubTree = false;
			axf.each(A, function (k, v) {
				if (k == reserveKeys.openKey) {
					hasOpenKey = true;
					pushItem[k] = v;
				} else if (k == reserveKeys.subTree) {
					hasSubTree = true;
					pushItem.__subTreeLength = v.length;
				} else if (k == "__subTree") {
					hasSubTree = true;
					pushItem.__subTreeLength = 1;
				} else {
					pushItem[k] = v;
				}
			});

			pushItem[reserveKeys.parentHashKey] = parentHash;
			pushItem[reserveKeys.hashKey] = parentHash + cfg.hashSpliter + (idx + parentSubTreeLength - 1).setDigit(cfg.hashDigit);
			if (!hasOpenKey) pushItem[reserveKeys.openKey] = true;

			//trace(pushItem[reserveKeys.openKey]);

			if (!hasSubTree) pushItem.__subTreeLength = 0;
			if (!pushItem[reserveKeys.subTree]) pushItem[reserveKeys.subTree] = [];
			pushItem[reserveKeys.displayKey] = parentOpened;
			if (pushItem[reserveKeys.openKey] && !parentOpened) pushItem[reserveKeys.openKey] = false; //부보가 닫힌 개체 이면 자식 개체도 닫힘

			//trace(pushItem);


			appendSubTree_pushList(pushItem);
			returnList.push({ itemIndex: appendIndex, item: pushItem });
			appendIndex++;

			if (!A[reserveKeys.subTree]) A[reserveKeys.subTree] = [];

			if (hasSubTree && A[reserveKeys.subTree].length > 0) {
				appendSubTree(pushItem[reserveKeys.hashKey], pushItem[reserveKeys.openKey], A[reserveKeys.subTree]);
			}
		});
		return returnList;
	},
	appendSubTree_pushList: function (item) {
		this.list.push(item);
	},
	fetchTree: function(subTree, parentItem){
		// TODO : fetchTree 속도 개선을 위해 추가된 아이템만 추가 하도록 함수 변경 필요
		var cfg = this.config;
		var reserveKeys = cfg.reserveKeys;
		var tree = this.tree;

		if(parentItem){

			var hashs = parentItem.hash.split(/_/g);
			axf.each(hashs, function (idx, T) {
				if (idx > 0) {
					if (idx == 1) tree = tree[T.number()];
					else tree = tree[cfg.reserveKeys.subTree][T.number()];
				}
			});
			axf.each(subTree, function () {
				this[cfg.reserveKeys.subTree] = [];
				tree[reserveKeys.subTree].push(this);
			});

			this.list = this.convertHashListToTree(this.tree);
		}else{
			axf.each(subTree, function () {
				this[cfg.reserveKeys.subTree] = [];
				tree.push(this);
			});

			var pushedList = this.appendSubTree("0".setDigit(cfg.hashDigit), true, subTree, this.tree);
		}

		this.printList();
	},
	updateTree: function (itemIndex, item, obj) {
		var cfg = this.config;
		var reserveKeys = cfg.reserveKeys;
		var relation = cfg.relation;
		AXUtil.overwriteObject(item, obj);

		//item[cfg.reserveKeys.subTree] = this.list[itemIndex][cfg.reserveKeys.subTree];
		this.list[itemIndex] = item;
		this.updateList(itemIndex, item);

		for(var idx=0;idx<this.list.length;idx++){
			this.list[idx][reserveKeys.parentHashKey] = undefined;
			this.list[idx][reserveKeys.hashKey] = undefined;
		}
		this.positioningHashList(this.list);
	},
	removeTree: function (itemIndex, item) {
		var cfg = this.config;
		var reserveKeys = cfg.reserveKeys;
		var relation = cfg.relation;
		// this.list 와 this.tree 에서 해당 개체를 찾아 제거 한다.
		// tree 찾기
		var hashs = item[reserveKeys.hashKey].split(/_/g);
		var phash = item[reserveKeys.parentHashKey];
		var tree = this.tree;
		var ptree = this.tree;
		for (var idx = 1; idx < hashs.length; idx++) {
			var H = hashs[idx];
			if (idx == 1) tree = tree[H.number()];
			else tree = tree[cfg.reserveKeys.subTree][H.number()];
			if (idx == hashs.length - 2) {
				//부모 트리인 경우	
				ptree = tree;
			}
		}

		tree._isDel = true;

		var applyDel = function (subTree) {
			for (var ti = 0; ti < subTree.length; ti++) {
				subTree[ti]._isDel = true;
				if (subTree[ti][cfg.reserveKeys.subTree]) {
					applyDel(subTree[ti][cfg.reserveKeys.subTree]);
				}
			}
		};
		applyDel(tree[cfg.reserveKeys.subTree]);

		var __subTreeLength = 0;
		if (ptree[cfg.reserveKeys.subTree]) {
			axf.each(ptree[cfg.reserveKeys.subTree], function () {
				if (!this._isDel) __subTreeLength++;
			});
		}

		// 삭제할 item 에 종속된 itemIndex 구한다.
		var pItem = null;

		axf.each(this.list, function (idx, L) {

			if (L[reserveKeys.hashKey].left(item[reserveKeys.hashKey].length) == item[reserveKeys.hashKey]) {
				L._isDel = true;
				axdom(".gridBodyTr_" + idx).remove();
			}
			if (phash == L[reserveKeys.hashKey]) {
				pItem = { itemIndex: idx, item: L };
			}
		});

		//부모 ITEM 의 __subTreeLength 속성 변경하기
		if (pItem) {
			this.list[pItem.itemIndex].__subTreeLength = __subTreeLength;
			// appendList 구문 생성
			/*
			 if (__subTreeLength == 0) {
			 var lastR = cfg.body.rows.length - 1;
			 axdom("#" + cfg.targetID + "_AX_tr_" + lastR + "_AX_n_AX_" + pItem.itemIndex).find(".bodyNodeIndent").hide();
			 axdom("#" + cfg.targetID + "_AX_tr_" + lastR + "_AX_f_AX_" + pItem.itemIndex).find(".bodyNodeIndent").hide();
			 axdom("#" + cfg.targetID + "_AX_tr_" + lastR + "_AX_n_AX_" + pItem.itemIndex).find(".bodyNodeIndent").removeClass("expand");
			 axdom("#" + cfg.targetID + "_AX_tr_" + lastR + "_AX_f_AX_" + pItem.itemIndex).find(".bodyNodeIndent").removeClass("expand");
			 }
			 */

			// 부모 ITEM 의 update
			var getItem = this.getItem.bind(this);
			var npo = "", lastR = cfg.body.rows.length - 1;
			npo = getItem(pItem.itemIndex, this.list[pItem.itemIndex], "n", "notr");
			axdom("#" + cfg.targetID + "_AX_tbody").find(".gridBodyTr_" + pItem.itemIndex).html( npo );
		}

		if (this.selectedRow.length > 0) {
			var body = this.body;
			axf.each(this.selectedRow, function () {
				body.find(".gridBodyTr_" + this).removeClass("selected");
			});
			this.selectedRow.clear();
			AXContextMenu.close({ id: cfg.targetID + "ContextMenu" }); // event 직접 연결 방식
		}

	},
	moveUpTree: function () {
		var cfg = this.config;
		var reserveKeys = cfg.reserveKeys;
		var relation = cfg.relation;

		var selectedObject = this.getSelectedList();

		if (selectedObject.error) {
			toast.push(selectedObject.description);
			return;
		}

		var itemIndex = selectedObject.index;
		var item = this.list[selectedObject.index];

		var hashs = item.hash.split(/_/g);
		var myTree = this.tree;
		var nowChildIndex;
		var parentHashs = [];

		for (var hidx = 1; hidx < hashs.length - 1; hidx++) {
			if (hidx == 1) {
				myTree = myTree[hashs[hidx].number()];
				parentHashs.push(hashs[hidx]);
			} else {
				myTree = myTree[cfg.reserveKeys.subTree][hashs[hidx].number()];
				parentHashs.push(hashs[hidx]);
			}
			nowChildIndex = hashs[hidx + 1].number();
		}

		var isRootControl = false;
		if (myTree == this.tree) {
			isRootControl = true;
			nowChildIndex = hashs.last().number();
		}

		if (nowChildIndex < 1) {
			//이동불가
			toast.push("순서의 처음입니다.");
		} else {

			try {
				if (isRootControl) {
					var newSelectedHash = "0".setDigit(cfg.hashDigit) + "_" + (nowChildIndex - 1).setDigit(cfg.hashDigit);
					var tempObj = AXUtil.copyObject(myTree[nowChildIndex]);
					myTree[nowChildIndex] = AXUtil.copyObject(myTree[nowChildIndex - 1]);
					myTree[nowChildIndex - 1] = tempObj;
				} else {
					var newSelectedHash = "0".setDigit(cfg.hashDigit) + "_" + parentHashs.join("_") + "_" + (nowChildIndex - 1).setDigit(cfg.hashDigit);
					var tempObj = AXUtil.copyObject(myTree[cfg.reserveKeys.subTree][nowChildIndex]);
					myTree[cfg.reserveKeys.subTree][nowChildIndex] = AXUtil.copyObject(myTree[cfg.reserveKeys.subTree][nowChildIndex - 1]);
					myTree[cfg.reserveKeys.subTree][nowChildIndex - 1] = tempObj;
				}
			} catch (e) {
				trace(e);
			}

			this.selectedCells.clear();
			this.selectedRow.clear();

			this.list = this.convertHashListToTree(this.tree);
			this.printList();

			var newSelecteIndex;
			for (var idx = 0; idx < this.list.length; idx++) {
				if (this.list[idx][reserveKeys.hashKey] == newSelectedHash) {
					newSelecteIndex = idx;

					this.body.find(".gridBodyTr_" + newSelecteIndex).addClass("selected");
					this.selectedRow.push(newSelecteIndex);

					break;
				}
			};

		}
	},
	moveDownTree: function () {
		var cfg = this.config;
		var reserveKeys = cfg.reserveKeys;
		var relation = cfg.relation;

		var selectedObject = this.getSelectedList();

		if (selectedObject.error) {
			toast.push(selectedObject.description);
			return;
		}

		var itemIndex = selectedObject.index;
		var item = this.list[selectedObject.index];
		var hashs = item.hash.split(/_/g);

		var myTree = this.tree;
		var nowChildIndex;
		var parentHashs = [];
		for (var hidx = 1; hidx < hashs.length - 1; hidx++) {
			if (hidx == 1) {
				myTree = myTree[hashs[hidx].number()];
				parentHashs.push(hashs[hidx]);
			} else {
				myTree = myTree[cfg.reserveKeys.subTree][hashs[hidx].number()];
				parentHashs.push(hashs[hidx]);
			}
			nowChildIndex = hashs[hidx + 1].number();
			//trace(myTree);
		}

		var isRootControl = false;
		var subTreeLength;
		if (myTree == this.tree) {
			isRootControl = true;
			//parentHashs.push(hashs.last();
			nowChildIndex = hashs.last().number();
			subTreeLength = myTree.length;
		} else {
			subTreeLength = myTree[cfg.reserveKeys.subTree].length;
		}

		if (nowChildIndex > subTreeLength - 2) {
			//이동불가
			toast.push("순서의 마지막입니다.");
		} else {

			try {
				if (isRootControl) {
					var newSelectedHash = "0".setDigit(cfg.hashDigit) + "_" + (nowChildIndex.number() + 1).setDigit(cfg.hashDigit);
					var tempObj = AXUtil.copyObject(myTree[nowChildIndex]);
					myTree[nowChildIndex] = AXUtil.copyObject(myTree[nowChildIndex.number() + 1]);
					myTree[nowChildIndex.number() + 1] = tempObj;
				} else {
					var newSelectedHash = "0".setDigit(cfg.hashDigit) + "_" + parentHashs.join("_") + "_" + (nowChildIndex.number() + 1).setDigit(cfg.hashDigit);
					var tempObj = AXUtil.copyObject(myTree[cfg.reserveKeys.subTree][nowChildIndex]);
					myTree[cfg.reserveKeys.subTree][nowChildIndex] = AXUtil.copyObject(myTree[cfg.reserveKeys.subTree][nowChildIndex.number() + 1]);
					myTree[cfg.reserveKeys.subTree][nowChildIndex.number() + 1] = tempObj;
				}
			} catch (e) {
				trace(e);
			}

			this.selectedCells.clear();
			this.selectedRow.clear();

			this.list = this.convertHashListToTree(this.tree);
			this.printList();

			var newSelecteIndex;
			for (var idx = 0; idx < this.list.length; idx++) {
				if (this.list[idx][reserveKeys.hashKey] == newSelectedHash) {
					newSelecteIndex = idx;

					this.body.find(".gridBodyTr_" + newSelecteIndex).addClass("selected");
					this.selectedRow.push(newSelecteIndex);

					break;
				}
			};

		}

	},
	moveTree: function (Option) {
		var cfg = this.config;
		var reserveKeys = cfg.reserveKeys;
		var relation = cfg.relation;
		var moveObj = Option.moveObj, targetObj = Option.targetObj;

		// TODO : MOVE Bug -----

		if (moveObj && targetObj) {
			//외부 이동 명령 처리
			//this.moveTreeExec(); 을 위한 필터링 
		} else {

			var selectedObject = this.getSelectedList();

			if (selectedObject.error) {
				toast.push(selectedObject.description);
				return;
			}

			var itemIndex = selectedObject.index;
			var item = this.list[selectedObject.index];
			var hashs = item.hash.split(/_/g);

			this.body.find(".gridBodyTr_" + itemIndex).addClass("copied");
			toast.push({ type: "Warning", body: "선택하신 아이템을 이동시킬 부모 아이템을 선택하세요" });
			this.readyMoved = true;
			this.moveTarget = { itemIndex: itemIndex };
			this.moveValidate = Option.validate;
			this.moveEndFunction = Option.endMove;

			if (Option.startMove) {
				Option.startMove.call();
			}

			//직계 부모를 disable 처리 합니다.
			this.addClassItem({
				className: "disable",
				addClass: function () {
					return (item[reserveKeys.parentHashKey] == this[reserveKeys.hashKey] || item[reserveKeys.hashKey] == this[reserveKeys.hashKey].left(item[reserveKeys.hashKey].length));
				}
			});

			// key event ready
			var eventForDocument = this.onBodyKeydown.bind(this);
			this.eventForDocument = function (event) {
				eventForDocument(event);
			}
			axdom(document.body).bind("keydown", this.eventForDocument);

		}
	},
	moveTreeExec: function (moveIndex, targetIndex) {
		var cfg = this.config;
		var reserveKeys = cfg.reserveKeys;
		var relation = cfg.relation;

		if (moveIndex == targetIndex) {
			alert("이동 위치와 이동대상이 같습니다. 이동 할 수 없습니다.");
			return;
		}

		var moveObj = this.list[moveIndex];
		var targetObj = this.list[targetIndex];

		if (moveObj[reserveKeys.parentHashKey] == targetObj[reserveKeys.hashKey]) {
			alert("이동 위치가 현재 위치와 다르지 않습니다. 이동 할 수 없습니다.");
			return;
		}
		if (moveObj[reserveKeys.hashKey] == targetObj[reserveKeys.hashKey].left(moveObj[reserveKeys.hashKey].length)) {
			alert("이동 위치가 자식위치입니다. 이동 할 수 없습니다.");
			return;
		}

		if (this.moveValidate) {
			var validateResult = this.moveValidate.call({ moveObj: moveObj, targetObj: targetObj }, moveObj, targetObj);
			if (!validateResult) {
				return;
			}
		}

		//trace(this.tree);

		//아이템 복사 ~~~~~~~~~~~~~~~~~~
		var move_hashs = moveObj[reserveKeys.hashKey].split(/_/g);
		var move_Tree_parent = this.tree;
		for (var hidx = 1; hidx < move_hashs.length - 1; hidx++) {
			if (hidx == 1) {
				move_Tree_parent = move_Tree_parent[move_hashs[hidx].number()];
			} else {
				move_Tree_parent = move_Tree_parent[cfg.reserveKeys.subTree][move_hashs[hidx].number()];
			}
		}
		var copyObject = {};
		//trace("moveObj");
		//trace(moveObj);

		var move_Tree_parent_subTree = [];
		if (move_hashs.length == 2) { // root level
			move_Tree_parent_subTree = this.tree;
		} else {
			move_Tree_parent_subTree = move_Tree_parent[cfg.reserveKeys.subTree];
		}

		axf.each(move_Tree_parent_subTree, function (subTreeIndex, ST) {
			if (ST[relation.childKey] == moveObj[relation.childKey]) {
				copyObject = AXUtil.copyObject(ST);
			} else {

			}
		});
		//~~~~~~~~~~~~~~~~~~ 아이템 복사

		//아이템 이동 ~~~~~~~~~~~~~~~~~~
		var target_hashs = targetObj[reserveKeys.hashKey].split(/_/g);
		var target_Tree_parent = this.tree;

		//trace(this.tree);

		var newSelectedHashs = [];
		newSelectedHashs.push(target_hashs[0]);
		for (var hidx = 1; hidx < target_hashs.length; hidx++) {
			newSelectedHashs.push(target_hashs[hidx]);
			if (hidx == 1) {
				target_Tree_parent = target_Tree_parent[target_hashs[hidx].number()];
			} else {
				target_Tree_parent = target_Tree_parent[cfg.reserveKeys.subTree][target_hashs[hidx].number()];
			}
		}
		newSelectedHashs.push((target_Tree_parent[cfg.reserveKeys.subTree].length).setDigit(cfg.hashDigit));

		copyObject[relation.parentKey] = target_Tree_parent[relation.childKey];
		try {
			copyObject[relation.parentName] = target_Tree_parent[relation.childName];
		} catch (e) {

		}

		target_Tree_parent[cfg.reserveKeys.subTree].push(copyObject);

		var newSelectedHash = newSelectedHashs.join("_");

		//~~~~~~~~~~~~~~~~~~ 아이템 이동

		//이동된 아이템 제거
		var new_subTree = [];
		axf.each(move_Tree_parent_subTree, function (subTreeIndex, ST) {
			if (ST[relation.childKey] == moveObj[relation.childKey]) {

			} else {
				new_subTree.push(ST);
			}
		});

		if (move_hashs.length == 2) { // root level
			this.tree = new_subTree;
		} else {
			move_Tree_parent[cfg.reserveKeys.subTree] = new_subTree;
		}

		this.selectedCells.clear();
		this.selectedRow.clear();

		this.list = this.convertHashListToTree(this.tree);
		this.printList();

		var newSelecteIndex;
		for (var idx = 0; idx < this.list.length; idx++) {
			if (this.list[idx][reserveKeys.hashKey] == newSelectedHash) {
				newSelecteIndex = idx;

				this.body.find(".gridBodyTr_" + newSelecteIndex).addClass("selected");
				this.selectedRow.push(newSelecteIndex);

				break;
			}
		};

		this.cancelMove();
	},
	cancelMove: function () {
		this.readyMoved = false;
		this.body.find(".gridBodyTr_" + this.moveTarget.itemIndex).removeClass("copied");
		if (this.moveEndFunction) {
			this.moveEndFunction.call();
		}

		this.body.find(".gridBodyTr.disable").removeClass("disable");

		this.moveTarget = null;
		axdom(document.body).unbind("keydown", this.eventForDocument);
	},
	addClassItem: function (Option) {
		var body = this.body;

		axf.each(this.list, function (listIndex, item) {
			if (Option.addClass) {
				if (Option.addClass.call(item)) {
					body.find(".gridBodyTr_" + listIndex).addClass(Option.className);
				}
			}
		});
	},
	removeClassItem: function (Option) {
		var body = this.body;

		axf.each(this.list, function (listIndex, item) {
			if (Option.removeClass) {
				if (Option.removeClass.call(item)) {
					//trace(listIndex);
					body.find(".gridBodyTr_" + listIndex).removeClass(Option.className);
				}
			}
		});
	},
	/* tree 추가 메서드  */

	/* tree = list convert  */
	convertHashListToTree: function (Tree) {
		var cfg = this.config;
		var reserveKeys = cfg.reserveKeys;
		var relation = cfg.relation;

		this.hashList = [];
		var pushItem = { isRoot: true };
		pushItem[relation.childKey] = "0";
		pushItem[reserveKeys.hashKey] = "0".setDigit(cfg.hashDigit);
		pushItem[reserveKeys.parentHashKey] = "";
		pushItem[reserveKeys.openKey] = true;
		pushItem._subTreeLength = Tree.length;

		this.getSubTreeList(pushItem[reserveKeys.hashKey], pushItem[reserveKeys.openKey], pushItem, Tree);
		return this.hashList;
	},
	getSubTreeList: function (parentHash, parentOpened, parentItem, arr) {
		var cfg = this.config;
		var reserveKeys = cfg.reserveKeys;
		var relation = cfg.relation;

		var getSubTreeList = this.getSubTreeList.bind(this);
		var pushHashList = this.pushHashList.bind(this);

		if (!arr[reserveKeys.subTree]) arr[reserveKeys.subTree] = [];

		axf.each(arr, function (idx, A) {
			var pushItem = {};
			var hasOpenKey = false, hasSubTree = false;

			delete A.__subTreeLength;
			axf.each(A, function (k, v) {
				if (k == reserveKeys.openKey) {
					hasOpenKey = true;
					pushItem[k] = v;
				} else if (k == reserveKeys.subTree) {
					hasSubTree = true;
					pushItem.__subTreeLength = v.length;
				} else if (k == "__subTree") {
					hasSubTree = true;
					pushItem.__subTreeLength = 1;
				} else {
					pushItem[k] = v;
				}
			});
			pushItem[reserveKeys.parentHashKey] = parentHash;
			pushItem[reserveKeys.hashKey] = parentHash + cfg.hashSpliter + idx.setDigit(cfg.hashDigit);
			A[reserveKeys.hashKey] = parentHash + cfg.hashSpliter + idx.setDigit(cfg.hashDigit);
			if (!hasOpenKey) pushItem[reserveKeys.openKey] = false;
			if (!hasSubTree) pushItem.__subTreeLength = 0;
			pushItem[reserveKeys.displayKey] = parentOpened;
			if (pushItem[reserveKeys.openKey] && !parentOpened) pushItem[reserveKeys.openKey] = false; //부보가 닫힌 개체 이면 자식 개체도 닫힘

			if (pushItem[relation.parentKey] == undefined) {
				pushItem[relation.parentKey] = parentItem[relation.childKey];
			}

			if(idx == (arr.length-1)){
				A.__isLastChild = true;
				pushItem.__isLastChild = true;
			}else{
				A.__isLastChild = false;
				pushItem.__isLastChild = false;
			}
			pushHashList(pushItem);

			if (!A[reserveKeys.subTree]) A[reserveKeys.subTree] = [];
			if (hasSubTree && A[reserveKeys.subTree].length > 0) {
				getSubTreeList(pushItem[reserveKeys.hashKey], pushItem[reserveKeys.openKey], pushItem, A[reserveKeys.subTree]);
			}
		});
	},
	pushHashList: function (item) {
		this.hashList.push(item);
	},
	convertTreeToHashList: function (List) {
		var cfg = this.config;
		reserveKeys = cfg.reserveKeys;
		//cfg.hashSpliter;
		var hashTree = [];

		for (var idx = 0; idx < List.length; idx++) {
			var item = List[idx];
			var re = new RegExp(cfg.hashSpliter, "g");
			var pHash = item[reserveKeys.parentHashKey];
			var hashs = item[reserveKeys.hashKey].split(re);
			var pushItem = {};
			axf.each(item, function (k, v) {
				var addOk = true;
				axf.each(reserveKeys, function (kk, vv) {
					if (k == vv) {
						addOk = false;
						return false;
					}
				});
				if (addOk) {
					pushItem[k] = v;
				}
			});
			pushItem[reserveKeys.hashKey] = item[reserveKeys.hashKey];
			pushItem[cfg.reserveKeys.subTree] = [];
			if (hashs.length == 2) {
				hashTree.push(pushItem);
			} else if (hashs.length > 2) {
				var pItem = hashTree.has(function () {
					return this.item[reserveKeys.hashKey] == pHash;
				});
				if (pItem) {
					pItem[cfg.reserveKeys.subTree].push(pushItem);
				}
			}
		}
	},
	positioningHashList: function (List) {
		var cfg = this.config;
		reserveKeys = cfg.reserveKeys;
		relation = cfg.relation;

		if (!relation) {
			toast.push("relation 속성이 지정되지 않아 요청을 수행 할 수 없습니다. relation:{parentKey:'', childKey:''}");
			return;
		}

		// make pointer;
		var tree = [];
		var pointer = {};
		var seq = 0, _parentCheckKey = 0;
		for (var idx = 0; idx < List.length; idx++) {
			var L = List[idx];
			if(idx == 0) _parentCheckKey =  L[relation.parentKey].number();
			if (!L.isRoot) {
				if(L.AXTreeSplit){

				}else{
					pointer[L[relation.childKey]] = idx;
					if (L[reserveKeys.openKey] == undefined) L[reserveKeys.openKey] = false;
					if (L[relation.parentKey].number() == _parentCheckKey) {
						L[reserveKeys.subTree] = [];
						L.__subTreeLength = 0;
						L[reserveKeys.parentHashKey] = "0".setDigit(cfg.hashDigit);
						L[reserveKeys.hashKey] = "0".setDigit(cfg.hashDigit) + "_" + seq.setDigit(cfg.hashDigit);
						L[reserveKeys.displayKey] = true;
						tree.push(AXUtil.copyObject(L));
						seq++;
					} else {
						L.__subTreeLength = 0;
						L[reserveKeys.displayKey] = false;
					}
				}
			}
		}

		for (var idx = 0; idx < List.length; idx++) {
			var L = List[idx];
			if (L[reserveKeys.parentHashKey] == undefined && !L.isRoot) {

				if(L.AXTreeSplit) continue;
				var pItem = List[pointer[L[relation.parentKey]]];
				var pHash = pItem[reserveKeys.hashKey];
				var pHashs = pHash.split(/_/g);
				var pTree = tree;
				axf.each(pHashs, function (idx, T) {
					if (idx > 0) pTree = pTree[T.number()][cfg.reserveKeys.subTree];
				});
				L[reserveKeys.subTree] = [];

				var __subTreeLength = pItem.__subTreeLength;
				var pOpend = pItem[reserveKeys.openKey];
				L[reserveKeys.parentHashKey] = pHash;
				L[reserveKeys.hashKey] = pHash + cfg.hashSpliter + __subTreeLength.setDigit(cfg.hashDigit);
				L[reserveKeys.displayKey] = pOpend;

				pTree.push(AXUtil.copyObject(L));
				pItem.__subTreeLength++;
			}
		}

		if(cfg.showConnectionLine){
			this.tree = tree;
			List = this.convertHashListToTree(this.tree);
			//List = this.list;
		}else{
			this.tree = tree;
		}

		//trace(List);
		//trace(tree);

		return List;
	},
	getSelectedList: function () {
		if (this.selectedRow != undefined && this.selectedRow != null && this.selectedRow.length > 0) {
			return { index: this.selectedRow.first(), item: this.list[this.selectedRow.first()] };
		} else {
			return { error: "noselected", description: "선택된 item이 없습니다." };
		}
	},
	getSelectedListParent: function () {
		var cfg = this.config;
		var reserveKeys = cfg.reserveKeys;
		var relation = cfg.relation;

		if (this.selectedRow != undefined && this.selectedRow != null && this.selectedRow.length > 0) {

			var item = this.list[this.selectedRow.first()];
			var pno = item[relation.parentKey];

			var parentIndex = null;
			if (pno != "0") {
				axf.each(this.list, function (findIndex, findItem) {
					if (findItem[relation.childKey] == pno) {
						parentIndex = findIndex;
						return false;
					}
				});
			}

			if (parentIndex == null) {
				return { index: null, item: null };
			} else {
				return { index: parentIndex, item: this.list[parentIndex] };
			}
		} else {
			return { index: null, item: null };
		}
	},

/**
 * @method AXGrid.relationFixedSync
 * @param options {JSObject} 설명
 * @returns changed item of list {Array}
 * @description 자식 항목에 체크된 경우 부모 값을 체크된 상태로 변경 해주는 메서드 입니다.
 * @example
```
myGrid.relationFixedSync();
myGrid.relationFixedSync({expandItem:true}); // 체크된 아이템을 확장상태로 변경합니다.
```
 */
	relationFixedSync: function(options){
		var cfg = this.config;
		var _body = this.body, _this = this;
		var returnObject = [];
		axf.each(this.list, function(lidx, L){
			axdom("#" + cfg.targetID + "_AX_treeBody").find(".gridBodyTr_"+lidx+" .treeCheckBox_body").each(function(){
				if(L.__checked && options && options.expandItem) _this.expandToggleList(lidx, L);
				this.checked = L.__checked;
				returnObject.push(this);
			});
		});
		return returnObject;
	},

/**
 * @method AXTree.expandAll
 * @param depth {undefined|int} 확장할 뎁스
 * @returns this
 * @description 트리의 노드를 확장시켜 줍니다.
 * @example
```
 myTree.expandAll(); //모두확장
 myTree.expandAll(1); //1 뎁스까지만 확장
```
 */
	expandAll: function(depth){
		var cfg = this.config;
		var _body = this.body;
		axf.each(this.list, function (itemIndex, item) {
			if (typeof depth == "undefined" || depth == "all") {
				item[cfg.reserveKeys.openKey] = true;
			} else {
				var hashLevel = item[cfg.reserveKeys.parentHashKey].split(/_/g).length;
				if (hashLevel < depth.number()+1) item[cfg.reserveKeys.openKey] = true;
				else item[cfg.reserveKeys.openKey] = false;
			}
			item[cfg.reserveKeys.displayKey] = true;
			item[cfg.reserveKeys.parentHashKey] = undefined;
			item[cfg.reserveKeys.hashKey] = undefined;
		});
		this.list = this.positioningHashList(this.list);
		this.printList();
		return this;
	},
	collapseAll: function(){
		var cfg = this.config;
		var _body = this.body;
		axf.each(this.list, function (itemIndex, item) {
			item[cfg.reserveKeys.openKey] = false;
			if(item[cfg.relation.parentKey] == 0){
				item[cfg.reserveKeys.displayKey] = true;
			}else{
				item[cfg.reserveKeys.displayKey] = false;
			}
			item[cfg.reserveKeys.parentHashKey] = undefined;
			item[cfg.reserveKeys.hashKey] = undefined;
		});
		this.list = this.positioningHashList(this.list);
		this.printList();
		return this;
	}
});
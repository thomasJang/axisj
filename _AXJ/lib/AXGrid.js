/*!
 * axisJ Javascript Library Version 1.0
 * http:/*axisJ.com
 * 
 * 아래 소스의 라이선스는 axisJ.com 에서 확인 하실 수 있습니다.
 * http:/*axisJ.com/license
 * axisJ를 사용하시려면 라이선스 페이지를 확인 및 숙지 후 사용 하시기 바람니다. 무단 사용시 예상치 못한 피해가 발생 하실 수 있습니다.
 */

var AXGrid = Class.create(AXJ, {
	version: "AXGrid v1.43",
	author: "tom@axisj.com",
	logs: [
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
		"2014-01-03 오후 3:31:09 tom : gridBodyClick 이벤트함수 수정"
	],
	initialize: function (AXJ_super) {
		AXJ_super();
		this.Observer = null;
		this.list = [];
		this.removedList = [];
		this.pageActive = false;
		this.page = { pageNo: 0, pageSize: 100, pageCount: "", listCount: 0 };

		this.moveSens = 0;
		this.config.viewMode = "grid";
		this.config.moveSens = 1;
		this.config.formPaddingRight = "11px";
		this.config.sort = true;
		this.config.xscroll = true;
		this.config.fitToWidth = (AXConfig.AXGrid.fitToWidth || false);
		this.config.fitToWidthRightMargin = (AXConfig.AXGrid.fitToWidthRightMargin || 10);
		this.config.passiveMode = AXConfig.AXGrid.passiveMode;
		this.config.passiveRemoveHide = AXConfig.AXGrid.passiveRemoveHide;
		this.selectedCells = [];
		this.selectedRow = [];

		var browser = AXUtil.browser;
		this.isMobile = false;
		if (browser.mobile) {
			this.isMobile = true;
		}

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
		jQuery.each(cfg.colGroup, function (cidx, CG) {
			if (CG.colSeq == undefined) CG.colSeq = cidx;
			if (CG.display == undefined) CG.display = true;
			if (CG.display) {
				if (!rewrite) {
					if (CG.width == "*") {
						CG.width = 0;
						CG.widthAstric = true;
						astricCount++;
					}
					CG._owidth = CG.width; /* 최초의 너비값 기억 하기 */
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
		});

		if (!cfg.fitToWidth) {
			/* width * 예외처리 구문 ------------ s */
			if ((bodyWidth - cfg.fitToWidthRightMargin) > (colWidth + 100 * astricCount)) {
				var remainsWidth = (bodyWidth - cfg.fitToWidthRightMargin) - colWidth;
				jQuery.each(cfg.colGroup, function (cidx, CG) {
					if (CG.display && CG.widthAstric) {
						CG._owidth = remainsWidth / astricCount;
						CG.width = CG._owidth;
						colWidth += (CG._owidth || 0).number();
					}
				});
			} else {
				jQuery.each(cfg.colGroup, function (cidx, CG) {
					if (CG.display && CG.widthAstric) {
						CG._owidth = 100;
						CG.width = 100;
						colWidth += (CG._owidth || 0).number();
					}
				});
			}
			/* width * 예외처리 구문 ------------ e */
		} else {
			jQuery.each(cfg.colGroup, function (cidx, CG) {
				if (CG.display && CG.widthAstric) {
					CG.width = 100;
					CG._owidth = 100;
					colWidth += (CG._owidth || 0).number();
				}
			});
		}
		this.colWidth = colWidth;

		if (cfg.fitToWidth) { /*너비 자동 맞춤버전의 경우 */
			if (bodyWidth > this.colWidth) {
				var _bodyWidth = bodyWidth - cfg.fitToWidthRightMargin;
				var zoomRatio = bodyWidth / this.colWidth;
				colWidth = 0;
				jQuery.each(cfg.colGroup, function (cidx, CG) {
					CG.width = (CG._owidth * zoomRatio).ceil();
					if (_bodyWidth > CG.width) _bodyWidth -= CG.width;
					else CG.width = _bodyWidth;
					if (CG.display) colWidth += CG.width.number();
				});
				this.colWidth = colWidth;
			} else {
				var zoomRatio = 1;
				colWidth = 0;
				jQuery.each(cfg.colGroup, function (cidx, CG) {
					if (CG._owidth == undefined) CG._owidth = (CG.width || 0).number();
					CG.width = CG._owidth.number();
					if (CG.display) colWidth += CG.width.number();
				});
				this.colWidth = colWidth;
			}
		}

		this.showColLen = showColLen;
		/* col너비 합계 구하기 ~~~~~~~~~~~~~~ 구해진 너비합은 그리드 head, body 의 너비로 지정됨. */

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
				jQuery.each(cfg.colHead.rows[r], function (CHidx, CH) {
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
			for (var _m = 0; _m < cfg.colHead._maps.length; _m++) {
				cfg.colHead._maps[_m] = new Array(colMaxLen);
			};
			/* colEndPosition 관련 처리 함수 */
			var appendPosToColHeadMap = function (r, c, posR, position) {
				var nC = position.c; /*시작 컬럼 위치 */
				var startPosition = null;
				for (var rr = posR; rr < (posR + r) ; rr++) {
					if (r > 1) if (rr > 0 && startPosition != null) nC = startPosition;
					var tC = c; /*컬럼 루프횟수 */
					var isWhile = true; /* 루프유지변수 */
					while (isWhile) {
						try {
							if (tC == 0) { isWhile = false; } else {
								if (cfg.colHead._maps[rr][nC] == undefined) {
									cfg.colHead._maps[rr][nC] = position; if (startPosition == null) startPosition = nC; tC--;
								} else { nC++; }
							}
						} catch (e) {
							isWhile = false;
						}
					}
				}
				return startPosition;
			};
			for (var r = 0; r < cfg.colHead.rows.length; r++) {
				var startPosition = null;
				var isMultiRow = false;

				jQuery.each(cfg.colHead.rows[r], function (CHidx, CH) {
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
			/*colHead._maps 마지막 줄에 해당하는 cfg.colHead.rows 에 속성부여 */
			jQuery.each(cfg.colHead._maps.last(), function (midx, m) {
				if (m) cfg.colHead.rows[m.r][m.c].isLastCell = true;
			});

			if (hasHiddenCell) { /* colGroup 중에 숨겨진 col 이 존재하는 경우 */
				/* colspan 감소 시키기 */
				jQuery.each(cfg.colGroup, function (cidx, CG) {
					if (!CG.display) {
						var rowPosition = null;
						for (var a = 0; a < cfg.colHead._maps.length; a++) {
							if (rowPosition != cfg.colHead._maps[a][cidx]) {
								rowPosition = cfg.colHead._maps[a][cidx];
								cfg.colHead.rows[rowPosition.r][rowPosition.c].colspan--;
							}
						}
					}
				});
			}
			/*trace(cfg.colHead._maps); _maps check */

			/* colHeadRow 정해진 경우 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
		} else {
			/* colHeadRow 정해지지 않은 경우 */

			cfg.colHead._maps = [[]];
			var colHeadRows = [[]];
			jQuery.each(cfg.colGroup, function (cidx, CG) {
				var adder = {
					key: CG.key,
					colSeq: CG.colSeq,
					label: CG.label,
					align: (cfg.colHeadAlign || CG.align || "left"),
					rowspan: 1, colspan: 1,
					valign: "bottom", isLastCell: true, display: CG.display, formatter: CG.formatter, checked: CG.checked, disabled: CG.disabled,
					sort: CG.sort,
					tooltip: CG.tooltip,
					displayLabel: (CG.displayLabel || false)
				};
				colHeadRows[0].push(adder);
				cfg.colHead._maps[0].push({ r: 0, c: cidx });
			});
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
				jQuery.each(cfg.body.rows[r], function (CHidx, CH) {
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
				});
				if (colMaxLen < colLen) colMaxLen = colLen;
			}
			for (var _m = 0; _m < cfg.body._maps.length; _m++) { cfg.body._maps[_m] = new Array(colMaxLen); }
			/* colEndPosition 관련 처리 함수 */
			var appendPosToBodyMap = function (r, c, posR, position) {
				var nC = position.c; /*시작 컬럼 위치 */
				var startPosition = null;
				for (var rr = posR; rr < (posR + r) ; rr++) {
					if (r > 1) if (rr > 0 && startPosition != null) nC = startPosition;
					var tC = c; /*컬럼 루프횟수 */
					var isWhile = true; /* 루프유지변수 */
					while (isWhile) {
						try {
							if (tC == 0) { isWhile = false; } else {
								if (cfg.body._maps[rr][nC] == undefined) {
									cfg.body._maps[rr][nC] = position; if (startPosition == null) startPosition = nC; tC--;
								} else { nC++; }
							}
						} catch (e) { isWhile = false; }
					}
				}
			};
			for (var r = 0; r < cfg.body.rows.length; r++) {
				jQuery.each(cfg.body.rows[r], function (CHidx, CH) {
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
				});
			}
			/*body._maps 마지막 줄에 해당하는 cfg.body.rows 에 속성부여 */
			jQuery.each(cfg.body._maps.last(), function (midx, m) {
				if (m) cfg.body.rows[m.r][m.c].isLastCell = true;
			});

			if (hasHiddenCell) { /* colGroup 중에 숨겨진 col 이 존재하는 경우 */
				/* colspan 감소 시키기 */
				jQuery.each(cfg.colGroup, function (cidx, CG) {
					if (!CG.display) {
						for (var a = 0; a < cfg.body._maps.length; a++) {
							var rowPosition = cfg.body._maps[a][cidx];
							cfg.body.rows[rowPosition.r][rowPosition.c].colspan--;
						}
					}
				});
			}

			/* bodyRow 정해진 경우 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
		} else {
			/* bodyRow 정해지지 않은 경우 */
			cfg.body._maps = [[]];
			var bodyRows = [[]];
			jQuery.each(cfg.colGroup, function (cidx, CG) {
				var adder = {
					key: CG.key, colSeq: CG.colSeq, label: CG.label, align: (CG.align || "left"), rowspan: 1, colspan: 1, valign: "middle", isLastCell: true,
					display: CG.display, checked: CG.checked, disabled: CG.disabled, formatter: CG.formatter,
					tooltip: CG.tooltip
				};
				bodyRows[0].push(adder);
				cfg.body._maps[0].push({ r: 0, c: cidx });
			});
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
					jQuery.each(cfg.body.marker.rows[r], function (CHidx, CH) {
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
				/* colEndPosition 관련 처리 함수 */
				var appendPosToMarkerMap = function (r, c, posR, position) {
					var nC = position.c; /*시작 컬럼 위치 */
					var startPosition = null;
					for (var rr = posR; rr < (posR + r) ; rr++) {
						if (r > 1) if (rr > 0 && startPosition != null) nC = startPosition;
						var tC = c; /*컬럼 루프횟수 */
						var isWhile = true; /* 루프유지변수 */
						while (isWhile) {
							try {
								if (tC == 0) { isWhile = false; } else {
									if (cfg.body.marker._maps[rr][nC] == undefined) {
										cfg.body.marker._maps[rr][nC] = position; if (startPosition == null) startPosition = nC; tC--;
									} else { nC++; }
								}
							} catch (e) { isWhile = false; }
						}
					}
				};
				for (var r = 0; r < cfg.body.marker.rows.length; r++) {
					jQuery.each(cfg.body.marker.rows[r], function (CHidx, CH) {
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
					});
				}
				/*colHead._maps 마지막 줄에 해당하는 cfg.colHead.rows 에 속성부여 */
				jQuery.each(cfg.body.marker._maps.last(), function (midx, m) {
					if (m) cfg.body.marker.rows[m.r][m.c].isLastCell = true;
				});

				if (hasHiddenCell) { /* colGroup 중에 숨겨진 col 이 존재하는 경우 */
					/* colspan 감소 시키기 */
					jQuery.each(cfg.colGroup, function (cidx, CG) {
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
		/*marker 관련 데이터 정리 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


		/*head 관련 데이터 정리 */
		if (cfg.head) {
			cfg.head._maps = new Array(cfg.head.rows.length);
			colMaxLen = 0;
			for (var r = 0; r < cfg.head.rows.length; r++) {
				var colLen = 0;
				jQuery.each(cfg.head.rows[r], function (CHidx, CH) {
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
				});
				if (colMaxLen < colLen) colMaxLen = colLen;
			}
			for (var _m = 0; _m < cfg.head._maps.length; _m++) { cfg.head._maps[_m] = new Array(colMaxLen); }
			/* colEndPosition 관련 처리 함수 */
			var appendPosToHeadMap = function (r, c, posR, position) {
				var nC = position.c; /*시작 컬럼 위치 */
				var startPosition = null;
				for (var rr = posR; rr < (posR + r) ; rr++) {
					if (r > 1) if (rr > 0 && startPosition != null) nC = startPosition;
					var tC = c; /*컬럼 루프횟수 */
					var isWhile = true; /* 루프유지변수 */
					while (isWhile) {
						try {
							if (tC == 0) { isWhile = false; } else {
								if (cfg.head._maps[rr][nC] == undefined) {
									cfg.head._maps[rr][nC] = position; if (startPosition == null) startPosition = nC; tC--;
								} else { nC++; }
							}
						} catch (e) {
							isWhile = false;
						}
					}
				}
			};
			for (var r = 0; r < cfg.head.rows.length; r++) {
				jQuery.each(cfg.head.rows[r], function (CHidx, CH) {
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
				});
			}

			/*colHead._maps 마지막 줄에 해당하는 cfg.colHead.rows 에 속성부여 */
			jQuery.each(cfg.head._maps.last(), function (midx, m) {
				if (m) cfg.head.rows[m.r][m.c].isLastCell = true;
			});

			if (hasHiddenCell) { /* colGroup 중에 숨겨진 col 이 존재하는 경우 */
				/* colspan 감소 시키기 */
				jQuery.each(cfg.colGroup, function (cidx, CG) {
					if (!CG.display) {
						for (var a = 0; a < cfg.head._maps.length; a++) {
							var rowPosition = cfg.head._maps[a][cidx];
							cfg.head.rows[rowPosition.r][rowPosition.c].colspan--;
						}
					}
				});
			}
		}
		/*head 관련 데이터 정리 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

		/*foot 관련 데이터 정리 */
		if (cfg.foot) {
			cfg.foot._maps = new Array(cfg.foot.rows.length);
			colMaxLen = 0;
			for (var r = 0; r < cfg.foot.rows.length; r++) {
				var colLen = 0;
				jQuery.each(cfg.foot.rows[r], function (CHidx, CH) {
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
			/* colEndPosition 관련 처리 함수 */
			var appendPosToFootMap = function (r, c, posR, position) {
				var nC = position.c; /*시작 컬럼 위치 */
				var startPosition = null;
				for (var rr = posR; rr < (posR + r) ; rr++) {
					if (r > 1) if (rr > 0 && startPosition != null) nC = startPosition;
					var tC = c;
					var isWhile = true;
					while (isWhile) {
						try {
							if (tC == 0) { isWhile = false; } else {
								if (cfg.foot._maps[rr][nC] == undefined) {
									cfg.foot._maps[rr][nC] = position; if (startPosition == null) startPosition = nC; tC--;
								} else { nC++; }
							}
						} catch (e) {
							isWhile = false;
						}
					}
				}
			};
			for (var r = 0; r < cfg.foot.rows.length; r++) {
				jQuery.each(cfg.foot.rows[r], function (CHidx, CH) {
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
				});
			}
			/*colHead._maps 마지막 줄에 해당하는 cfg.colHead.rows 에 속성부여 */
			jQuery.each(cfg.foot._maps.last(), function (midx, m) {
				if (m) cfg.foot.rows[m.r][m.c].isLastCell = true;
			});

			if (hasHiddenCell) { /* colGroup 중에 숨겨진 col 이 존재하는 경우 */
				jQuery.each(cfg.colGroup, function (cidx, CG) {
					if (!CG.display) {
						for (var a = 0; a < cfg.foot._maps.length; a++) {
							var rowPosition = cfg.foot._maps[a][cidx];
							cfg.foot.rows[rowPosition.r][rowPosition.c].colspan--;
						}
					}
				});
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
					jQuery.each(cfg.editor.rows[r], function (CHidx, CH) {
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
					});
					if (colMaxLen < colLen) colMaxLen = colLen;
				}
				for (var _m = 0; _m < cfg.editor._maps.length; _m++) { cfg.editor._maps[_m] = new Array(colMaxLen); }
				/* colEndPosition 관련 처리 함수 */
				var appendPosToEditorMap = function (r, c, posR, position) {
					var nC = position.c;
					var startPosition = null;
					for (var rr = posR; rr < (posR + r) ; rr++) {
						var tC = c;
						var isWhile = true;
						while (isWhile) {
							try {
								if (tC == 0) { isWhile = false; } else {
									if (cfg.editor._maps[rr][nC] == undefined) {
										cfg.editor._maps[rr][nC] = position; if (startPosition == null) startPosition = nC; tC--;
									} else { nC++; }
								}
							} catch (e) { isWhile = false; }
						}
					}
				};
				for (var r = 0; r < cfg.editor.rows.length; r++) {
					jQuery.each(cfg.editor.rows[r], function (CHidx, CH) {
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
					});
				}

				jQuery.each(cfg.editor._maps.last(), function (midx, m) {
					if (m) cfg.editor.rows[m.r][m.c].isLastCell = true;
				});

				if (hasHiddenCell) {
					jQuery.each(cfg.colGroup, function (cidx, CG) {
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
		
		/*editor 관련 데이터 정리 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

		/*fixedColSeq가 설정된 경우 */
		if (cfg.fixedColSeq != undefined && cfg.fixedColSeq != null) {

			var fixedColSeq = this.fixedColSeq;
			jQuery.each(cfg.colHead._maps, function (midx, m) {
				jQuery.each(m, function (cidx, c) {
					if (c) {
						if ((fixedColSeq + 1) > cidx) cfg.colHead.rows[c.r][c.c].isFixedCell = true;
					}
				});
			});
			jQuery.each(cfg.body._maps, function (midx, m) {
				jQuery.each(m, function (cidx, c) {
					if (c) {
						if (fixedColSeq == cidx) cfg.body.rows[c.r][c.c].isFixedEndCell = true;
						if ((fixedColSeq + 1) > cidx) cfg.body.rows[c.r][c.c].isFixedCell = true;
					}
				});
			});
			if (cfg.head) {
				jQuery.each(cfg.head._maps, function (midx, m) {
					jQuery.each(m, function (cidx, c) {
						if (c) {
							if (fixedColSeq == cidx) cfg.head.rows[c.r][c.c].isFixedEndCell = true;
							if ((fixedColSeq + 1) > cidx) cfg.head.rows[c.r][c.c].isFixedCell = true;
						}
					});
				});
			}
			if (cfg.foot) {
				jQuery.each(cfg.foot._maps, function (midx, m) {
					jQuery.each(m, function (cidx, c) {
						if (c) {
							if (fixedColSeq == cidx) cfg.foot.rows[c.r][c.c].isFixedEndCell = true;
							if ((fixedColSeq + 1) > cidx) cfg.foot.rows[c.r][c.c].isFixedCell = true;
						}
					});
				});
			}

			if (cfg.body.marker) {
				if (cfg.body.marker.rows) {
					jQuery.each(cfg.body.marker._maps, function (midx, m) {
						jQuery.each(m, function (cidx, c) {
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
					jQuery.each(cfg.editor._maps, function (midx, m) {
						jQuery.each(m, function (cidx, c) {
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
				jQuery.each(cfg.colGroup, function (cidx, CG) {
					if (!CG.display) {
						if ((fixedColSeq + 1) > cidx) minusFixedCol++;
					}
				});
				cfg.fixedColSeq = this.fixedColSeq - minusFixedCol;
			} else {
				cfg.fixedColSeq = this.fixedColSeq;
			}

			if (cfg.fixedColSeq == -1) {
				/*fixed 제거*/
				this.hasFixed = false;
			}

			var fixedColSeq = this.fixedColSeq;
			fixedColWidth = 0;
			jQuery.each(cfg.colGroup, function (cidx, CG) {
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

		var targetInnerHeight = jQuery("#" + cfg.targetID).innerHeight();
		if (targetInnerHeight == 0) targetInnerHeight = (AXConfig.AXGrid.pageHeight || 400);
		this.theme = (cfg.theme) ? cfg.theme : "AXGrid"; /* 테마기본값 지정*/
		cfg.height = (cfg.height) ? cfg.height : targetInnerHeight + "px"; /* 그리드 높이 지정 */

		this.target = jQuery("#" + cfg.targetID);
		var theme = this.theme;
		var gridCss = [];
		if (cfg.width) gridCss.push("width:" + cfg.width + ";");
		if (cfg.height) gridCss.push("height:" + cfg.height + ";");

		/* grid 뼈대 그리기 ----------------------------------------------------------------------------------------------------- */
		var ol = [];
		ol.push("<div class=\"" + theme + "\" id=\"" + cfg.targetID + "_AX_grid\" style=\"" + gridCss.join('') + "\">");
		ol.push("	<div class=\"AXgridScrollBody\" id=\"" + cfg.targetID + "_AX_gridScrollBody\" style=\"z-index:2;\">");
		ol.push("		<div class=\"AXGridColHead AXUserSelectNone\" id=\"" + cfg.targetID + "_AX_gridColHead\" onselectstart=\"return false;\"></div>");
		ol.push("		<div class=\"AXGridBody\" id=\"" + cfg.targetID + "_AX_gridBody\"></div>");
		ol.push("		<div class=\"AXgridEditor\" id=\"" + cfg.targetID + "_AX_gridEditor\"></div>");
		ol.push("	</div>");
		ol.push("	<div class=\"AXgridPageBody\" id=\"" + cfg.targetID + "_AX_gridPageBody\" style=\"z-index:1;\">");
		ol.push("		<div class=\"AXgridPagingUnit\" id=\"" + cfg.targetID + "_AX_gridPagingUnit\">");
		ol.push("			<a href=\"#AXexec\" class=\"AXgridPagingPrev\">PREV</a>");
		ol.push("			<div class=\"AXgridPageNumber\"><select id=\"" + cfg.targetID + "_AX_gridPageNo\" class=\"AXgridPageNo\"><option value=\"\">&nbsp;&nbsp;</option></select></div>");
		ol.push("			<div class=\"AXgridPageNumberCount\" id=\"" + cfg.targetID + "_AX_gridPageCount\">/ ...</div>");
		ol.push("			<a href=\"#AXexec\" class=\"AXgridPagingNext\">NEXT</a>");
		ol.push("		</div>");
		ol.push("		<div class=\"AXgridStatus\" id=\"" + cfg.targetID + "_AX_gridStatus\">전체 <b>0</b>개의 목록이 있습니다.</div>");
		/*ol.push("		<div class=\"AXgridScroller\" id=\""+cfg.targetID+"_AX_gridScroller\">"); */
		/*ol.push("			<a href=\"#AXexec\" class=\"AXgridScrollUp\">UP</a><a href=\"#AXexec\" class=\"AXgridScrollDn\">DN</a>"); */
		/*ol.push("		</div>"); */
		ol.push("	</div>");
		ol.push("</div>");
		this.target.html(ol.join(''));
		/* grid 뼈대 그리기 ----------------------------------------------------------------------------------------------------- */

		/* 주요 타깃 설정 */
		this.gridBody = jQuery("#" + cfg.targetID + "_AX_grid");
		this.scrollBody = jQuery("#" + cfg.targetID + "_AX_gridScrollBody");
		this.colHead = jQuery("#" + cfg.targetID + "_AX_gridColHead");
		this.body = jQuery("#" + cfg.targetID + "_AX_gridBody");
		this.editor = jQuery("#" + cfg.targetID + "_AX_gridEditor");

		this.pageBody = jQuery("#" + cfg.targetID + "_AX_gridPageBody");
		this.pagingUnit = jQuery("#" + cfg.targetID + "_AX_gridPagingUnit");
		this.status = jQuery("#" + cfg.targetID + "_AX_gridStatus");
		this.scroller = jQuery("#" + cfg.targetID + "_AX_gridScroller");

		/* define part --------------------------------- */
		this.defineConfig(); /* config object define */
		/* define part --------------------------------- */

		//alert(cfg.body.rows[0][4].formatter);

		/*page setting */
		if (!cfg.page) {
			this.pageBody.hide();
		} else {
			this.page.pageNo = (cfg.page.pageNo || 1);
			this.page.pageSize = (cfg.page.pageSize || (AXConfig.AXGrid.pageSize || 100));

			if (cfg.page.display == false) {
				this.pageBody.hide();
			} else {
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

		this.contentScrollResize();

		/*colHead setting */
		this.setColHead();

		/*body setting */
		this.setBody();

		/*editor setting */
		this.editor.hide();

		this.gridTargetSetSize();

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
			/*AXgetId(cfg.targetID+"_AX_gridBody").detachEvent("on"+mousewheelevt, this.contentScrollScrollWheelBind); */
			if (AXgetId(cfg.targetID + "_AX_gridBody")) AXgetId(cfg.targetID + "_AX_gridBody").attachEvent("on" + mousewheelevt, contentScrollScrollWheel);
		} else if (document.addEventListener) { /*WC3 browsers */
			/*AXgetId(cfg.targetID+"_AX_gridBody").removeEventListener(mousewheelevt, this.contentScrollScrollWheelBind, false); */
			if (AXgetId(cfg.targetID + "_AX_gridBody")) AXgetId(cfg.targetID + "_AX_gridBody").addEventListener(mousewheelevt, contentScrollScrollWheel, false);
		}

		if (document.addEventListener) {
			/*AXgetId(cfg.targetID+"_AX_gridBody").removeEventListener("touchstart", this.contentScrollTouchstartBind, false); */
			if (AXgetId(cfg.targetID + "_AX_gridBody")) AXgetId(cfg.targetID + "_AX_gridBody").addEventListener("touchstart", contentScrollTouchstart, false);
		}

		jQuery("#" + cfg.targetID).bind("keydown", this.onKeydown.bind(this));

		if (cfg.contextMenu) {
			AXContextMenu.bind({
				id: cfg.targetID + "ContextMenu",
				theme: cfg.contextMenu.theme,
				width: cfg.contextMenu.width,
				menu: cfg.contextMenu.menu
			});
			jQuery("#" + cfg.targetID).bind("contextmenu", this.onContextmenu.bind(this));
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

		jQuery(window).bind("resize", this.windowResize.bind(this));

		this.printList();
	},
	windowResize: function () {
		var windowResizeApply = this.windowResizeApply.bind(this);
		if (this.windowResizeObserver) clearTimeout(this.windowResizeObserver);
		this.windowResizeObserver = setTimeout(function () {
			windowResizeApply();
		}, 100);
	},
	windowResizeApply: function () {
		this.redrawGrid();
	},
	gridTargetSetSize: function (react) { /* AXgridScrollBody 안쪽의 높이와 관련된 요소 설정 */
		var cfg = this.config;
		/*cfg.height */
		if (cfg.height == "auto") {
			this.target.css({ height: "auto", "max-height": "auto" });
			var colHeadHeight = this.colHead.outerHeight();
			var scrollBodyHeight = jQuery("#" + cfg.targetID + "_AX_scrollContent").height();
			this.scrollBody.css({ height: scrollBodyHeight + colHeadHeight }); /*colhead + body height */
			this.body.css({ top: colHeadHeight, height: (scrollBodyHeight) }); /* body Height */
		} else {
			var pageBodyHeight = this.pageBody.outerHeight();
			if (cfg.page.display == false) pageBodyHeight = 0;
			var scrollBodyHeight = cfg.height.number() - pageBodyHeight - 2;
			this.scrollBody.css({ height: scrollBodyHeight }); /*colhead + body height */
			var colHeadHeight = this.colHead.outerHeight();
			this.body.css({ top: colHeadHeight, height: (scrollBodyHeight - colHeadHeight) }); /* body Height */
		}
		if (react) this.contentScrollResize(false);
	},
	getColGroup: function (suffix) {
		var cfg = this.config;
		var fixedColSeq = this.fixedColSeq;
		/*{colID:0, key:"no", label:"번호", width:"100", align:"left", addClassNames:"", style:"", display:true, sort:null} */
		var po = [];
		po.push("<colgroup>");
		if (suffix != "FC" && suffix != "FB" && suffix != "FE") {
			jQuery.each(cfg.colGroup, function (cidx, CG) {
				if (CG.display) {
					po.push("<col width=\"" + CG.width + "\" style=\"\" id=\"" + cfg.targetID + "_AX_col_AX_" + CG.colSeq + "_AX_" + suffix + "\" />");
				}
			});
			if (suffix == "CB") po.push("<col />");
		} else {
			/*fixedCol 존재 */
			jQuery.each(cfg.colGroup, function (cidx, CG) {
				if (CG.display && cidx < (fixedColSeq + 1)) {
					po.push("<col width=\"" + CG.width + "\" style=\"\" id=\"" + cfg.targetID + "_AX_col_AX_" + CG.colSeq + "_AX_" + suffix + "\" />");
				}
			});
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
	redrawGrid: function () {
		var cfg = this.config;

		this.defineConfig(true);
		this.setColHead();
		this.setBody(undefined, true);

		if (this.list.length > 0) {
			if (cfg.head) this.printHead();
			if (cfg.foot) this.printFoot();
		}
		this.gridTargetSetSize(true);
		/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 바디 재구성 기능 포함 */
	},
	checkedColSeq: function (colSeq, checked, itemIndex) {
		var cfg = this.config;
		var _list = this.list;

		if (itemIndex == undefined) {
			this.colHead.find(".gridCheckBox_colHead_colSeq" + colSeq).each(function () {
				this.checked = checked;
			});

			jQuery("#" + cfg.targetID + "_AX_fixedColHead").find(".gridCheckBox_colHead_colSeq" + colSeq).each(function () {
				this.checked = checked;
				var ieid = this.id.split(/_AX_/g);
				var checkboxColSeq = ieid[ieid.length - 2];
				var checkboxIndex = ieid[ieid.length - 1];
				if (cfg.colGroup[checkboxColSeq].oncheck) {
					var sendObj = {
						index: checkboxIndex,
						list: _list,
						item: _list[checkboxIndex]
					};
					cfg.colGroup[checkboxColSeq].oncheck.call(sendObj, this.checked);
				}
			});

			this.body.find(".gridCheckBox_body_colSeq" + colSeq).each(function () {
				this.checked = checked;
				var ieid = this.id.split(/_AX_/g);
				var checkboxColSeq = ieid[ieid.length - 2];
				var checkboxIndex = ieid[ieid.length - 1];
				if (cfg.colGroup[checkboxColSeq].oncheck) {
					var sendObj = {
						index: checkboxIndex,
						list: _list,
						item: _list[checkboxIndex]
					};
					cfg.colGroup[checkboxColSeq].oncheck.call(sendObj, this.checked);
				}
			});
		} else {

			this.body.find(".gridBodyTr_" + itemIndex + " .gridCheckBox_body_colSeq" + colSeq).each(function () {
				if (checked == null) {
					this.checked = !this.checked;
				} else {
					this.checked = checked;
				}
				var ieid = this.id.split(/_AX_/g);
				var checkboxColSeq = ieid[ieid.length - 2];
				var checkboxIndex = ieid[ieid.length - 1];
				if (cfg.colGroup[checkboxColSeq].oncheck) {
					var sendObj = {
						index: checkboxIndex,
						list: _list,
						item: _list[checkboxIndex]
					};
					cfg.colGroup[checkboxColSeq].oncheck.call(sendObj, this.checked);
				}
			});

		}
	},
	getCheckedList: function (colSeq) {
		var cfg = this.config;
		var collect = [];
		var list = this.list;
		this.body.find(".gridCheckBox_body_colSeq" + colSeq).each(function () {
			if (this.checked) {
				var itemIndex = this.id.split(/_AX_/g).last();
				collect.push(list[itemIndex]);
			}
		});
		return collect;
	},
	getCheckedListWithIndex: function (colSeq) {
		var cfg = this.config;
		var collect = [];
		var list = this.list;
		this.body.find(".gridCheckBox_body_colSeq" + colSeq).each(function () {
			if (this.checked) {
				var itemIndex = this.id.split(/_AX_/g).last();
				collect.push({ index: itemIndex, item: list[itemIndex] });
			}
		});
		return collect;
	},
	onKeydown: function (event) {
		if (event.keyCode == 67 && event.ctrlKey) {
			/*this.copyData(); */
		}
		if (event.keyCode == AXUtil.Event.KEY_UP) { /* */
			this.focusMove(-1, event);
		} else if (event.keyCode == AXUtil.Event.KEY_DOWN) { /* */
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
		if (eventTarget.tagName.toLowerCase() == "input") return; /*input 인 경우 제외 */
		var myTarget = this.getEventTarget({
			evt: eventTarget, evtIDs: eid,
			until: function (evt, evtIDs) { return (jQuery(evt.parentNode).hasClass("gridBodyTr")) ? true : false; },
			find: function (evt, evtIDs) { return (jQuery(evt).hasClass("bodyTd") || jQuery(evt).hasClass("bodyNodeIndent")) ? true : false; }
		});
		/* event target search ------------------------ */

		if (myTarget) {
			/*colHeadTool ready */
			var targetID = myTarget.id;
			var itemIndex = targetID.split(/_AX_/g).last();
			var ids = targetID.split(/_AX_/g);

			if (this.selectedCells.length > 0) {
				jQuery.each(this.selectedCells, function () {
					jQuery("#" + this).removeClass("selected");
				});
				this.selectedCells.clear();
			}
			if (this.selectedRow.length > 0) {
				var body = this.body;
				jQuery.each(this.selectedRow, function () {
					body.find(".gridBodyTr_" + this).removeClass("selected");
				});
			}

			this.selectedRow.clear();
			this.body.find(".gridBodyTr_" + itemIndex).addClass("selected");
			this.selectedRow.push(itemIndex);

			var item = this.list[itemIndex];
			AXContextMenu.open({ id: cfg.targetID + "ContextMenu", filter: cfg.contextMenu.filter, sendObj: { item: item, index: itemIndex } }, event); /* event 직접 연결 방식 */
		} else {
			AXContextMenu.open({ id: cfg.targetID + "ContextMenu", filter: cfg.contextMenu.filter, sendObj: null }, event); /* event 직접 연결 방식 */
		}
		return false;
	},
	copyData: function () {
		var cfg = this.config;
		var copyOut = [];
		jQuery.each(this.selectedCells, function (index, n) {
			var html = jQuery("#" + n).find(".bodyNode").html();
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
						arg.tdHtml = "<input type=\"checkbox\" name=\"checkAll\" class=\"gridCheckBox gridCheckBox_colHead_colSeq" + arg.colSeq + "\" id=\"" + cfg.targetID + "_AX_checkAll_AX_" + arg.r + "_AX_" + arg.CHidx + "\" />";
					}
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

		var getColHeadTd = this.getColHeadTd.bind(this);

		if (!this.hasFixed) {  /* 일반 colHead 구현 */

			var tableWidth = this.colWidth;
			po.push("<table cellpadding=\"0\" cellspacing=\"0\" class=\"colHeadTable\" style=\"width:", tableWidth, "px;\">");
			po.push(this.getColGroup("CH")); /*colGroup 삽입 */
			po.push("<tbody>");
			for (var r = 0; r < cfg.colHead.rows.length; r++) {
				var isLastTR = (cfg.colHead.rows.length - 1 == r);
				po.push("<tr>");
				jQuery.each(cfg.colHead.rows[r], function (CHidx, CH) {
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
							ghost: false, displayLabel: CH.displayLabel
						}));
					}
				});
				po.push("</tr>");
			}
			po.push("</tbody>");
			po.push("</table>");

		} else { /* fixedCol 구현 */

			po.push("<table cellpadding=\"0\" cellspacing=\"0\" class=\"colHeadTable\" style=\"width:" + this.colWidth + "px;\">");
			po.push(this.getColGroup("CH")); /*colGroup 삽입 */
			po.push("<tbody>");
			for (var r = 0; r < cfg.colHead.rows.length; r++) {
				var isLastTR = (cfg.colHead.rows.length - 1 == r);
				po.push("<tr>");
				var colCount = 0;
				jQuery.each(cfg.colHead.rows[r], function (CHidx, CH) {
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
			fpo.push(this.getColGroup("FC")); /*colGroup 삽입 */
			fpo.push("<tbody>");
			for (var r = 0; r < cfg.colHead.rows.length; r++) {
				var isLastTR = (cfg.colHead.rows.length - 1 == r);
				fpo.push("<tr>");
				var colCount = 0;
				jQuery.each(cfg.colHead.rows[r], function (CHidx, CH) {
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
		/* fixedCol 구현 */

		this.colHead.html(po.join(''));
		jQuery("#" + cfg.targetID + "_AX_fixedColHead").remove();
		if (fpo) this.colHead.after(fpo.join(''));

		/*resizer 를 찾아 resizer의 부모와 같은 높이값을 가지도록 변경 합니다. */
		/*또 그와 관련된 개체의 높이와 패딩을 지정합니다. */
		this.colHead.find(".colHeadResizer").each(function () {
			var resizerID = this.id;
			var tdID = resizerID.replace("colHeadResizer", "colHead");
			var txtID = resizerID.replace("colHeadResizer", "colHeadText");
			var toolID = resizerID.replace("colHeadResizer", "colHeadTool");
			var rowspan = jQuery("#" + tdID).attr("rowspan");
			var valign = jQuery("#" + tdID).attr("valign");
			if (!rowspan) rowspan = 1;
			var tdHeight = jQuery("#" + tdID).height();
			jQuery(this).css({ height: tdHeight });
			jQuery(this).parent().css({ height: tdHeight });
			if (rowspan > 1) {
				var cellMarginTop = 0;
				if (valign == "bottom") cellMarginTop = (tdHeight - jQuery("#" + txtID).outerHeight()) + 5;
				if (valign == "middle") cellMarginTop = (tdHeight - jQuery("#" + txtID).outerHeight()) / 2 + 5;
				jQuery("#" + txtID).css({ "padding-top": cellMarginTop + "px" });
				jQuery("#" + toolID).css({ "top": (cellMarginTop - 5) + "px" });
			}
		});

		this.colHead.bind("mouseover", this.colHeadMouseOver.bind(this));
		this.colHead.bind("mouseout", this.colHeadMouseOut.bind(this));
		this.colHead.find(".colHeadNode").bind("click", this.colHeadNodeClick.bind(this));
		this.colHead.find(".colHeadTool").bind("click", this.colHeadToolClick.bind(this));
		this.colHead.find(".colHeadResizer").bind("mousedown", this.colHeadResizerMouseDown.bind(this));
		this.colHead.find(".gridCheckBox").bind("click", this.colHeadCheckBoxClick.bind(this));

		if (this.hasFixed) { /*fixedColHead에 대한 바인딩 및 처리 */
			this.fixedColHead = jQuery("#" + cfg.targetID + "_AX_fixedColHead");

			this.fixedColHead.find(".colHeadResizer").each(function () {
				var resizerID = this.id;
				var tdID = resizerID.replace("colHeadResizer", "colHead");
				var txtID = resizerID.replace("colHeadResizer", "colHeadText");
				var toolID = resizerID.replace("colHeadResizer", "colHeadTool");
				var rowspan = jQuery("#" + tdID).attr("rowspan");
				var valign = jQuery("#" + tdID).attr("valign");
				if (!rowspan) rowspan = 1;
				var tdHeight = jQuery("#" + tdID).height();
				jQuery(this).css({ height: tdHeight });
				jQuery(this).parent().css({ height: tdHeight });
				if (rowspan > 1) {
					var cellMarginTop = 0;
					if (valign == "bottom") cellMarginTop = (tdHeight - jQuery("#" + txtID).outerHeight()) + 5;
					if (valign == "middle") cellMarginTop = (tdHeight - jQuery("#" + txtID).outerHeight()) / 2 + 5;
					jQuery("#" + txtID).css({ "padding-top": cellMarginTop + "px" });
					jQuery("#" + toolID).css({ "top": (cellMarginTop - 5) + "px" });
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
		/* event target search - */
		if (event.target.id == "") return;
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;
		var myTarget = this.getEventTarget({
			evt: eventTarget, evtIDs: eid,
			until: function (evt, evtIDs) { return (jQuery(evt.parentNode).hasClass("AXGridColHead")) ? true : false; },
			find: function (evt, evtIDs) { return (jQuery(evt).hasClass("colHeadTd")) ? true : false; }
		});
		/* event target search ------------------------ */

		if (myTarget) {
			/*colHeadTool ready */
			var targetID = myTarget.id;
			var toolID = targetID.replace("colHead", "colHeadTool");
			jQuery("#" + toolID).addClass("readyTool");
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
			until: function (evt, evtIDs) { return (jQuery(evt.parentNode).hasClass("AXGridColHead")) ? true : false; },
			find: function (evt, evtIDs) { return (jQuery(evt).hasClass("colHeadTd")) ? true : false; }
		});
		/* event target search ------------------------ */

		if (myTarget) {
			/*colHeadTool unready */
			var targetID = myTarget.id;
			var toolID = targetID.replace("colHead", "colHeadTool");
			jQuery("#" + toolID).removeClass("readyTool");
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
		if (colSeq == null) return; /* 예상할 수 없는 오류 */
		/*resize 상태 해제 */
		if (this.colResizing) {
			this.colHeadResizerEnd();
		}
		var offset = jQuery("#" + cfg.targetID + "_AX_colHead_AX_" + colHeadR + "_AX_" + colHeadC).find(".tdRelBlock").position();
		var relBlockWidth = jQuery("#" + cfg.targetID + "_AX_colHead_AX_" + colHeadR + "_AX_" + colHeadC).find(".tdRelBlock").width();
		var rightPosition = offset.left.number() + relBlockWidth.number();
		var blockWidth = jQuery("#" + cfg.targetID + "_AX_col_AX_" + colSeq + "_AX_CH").attr("width");
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
		jQuery(document.body).bind("mousemove.AXGrid", this.colHeadResizerMouseMoveBind);
		jQuery(document.body).bind("mouseup.AXGrid", this.colHeadResizerMouseUpBind);
		jQuery(document.body).bind("mouseleave.AXGrid", this.colHeadResizerMouseUpBind);

		jQuery(document.body).attr("onselectstart", "return false");
		jQuery(document.body).addClass("AXUserSelectNone");
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
		jQuery("#" + cfg.targetID + "_AX_col_AX_" + this.colResizeTarget.colSeq + "_AX_CH").attr("width", newWidth);
		jQuery("#" + cfg.targetID + "_AX_col_AX_" + this.colResizeTarget.colSeq + "_AX_CB").attr("width", newWidth);
		jQuery("#" + cfg.targetID + "_AX_col_AX_" + this.colResizeTarget.colSeq + "_AX_EB").attr("width", newWidth);

		cfg.colGroup[this.colResizeTarget.colSeq].width = newWidth;

		if (this.hasFixed) {
			var fixedColSeq = this.fixedColSeq;

			jQuery("#" + cfg.targetID + "_AX_col_AX_" + this.colResizeTarget.colSeq + "_AX_FC").attr("width", newWidth);
			jQuery("#" + cfg.targetID + "_AX_col_AX_" + this.colResizeTarget.colSeq + "_AX_FB").attr("width", newWidth);
			jQuery("#" + cfg.targetID + "_AX_col_AX_" + this.colResizeTarget.colSeq + "_AX_FE").attr("width", newWidth);

			/*if(this.colResizeTarget.colSeq < fixedColSeq+1){ */

			var fixedColWidth = 0;
			jQuery.each(cfg.colGroup, function (cidx, CG) {
				if (CG.display && cidx < (fixedColSeq + 1)) {
					fixedColWidth += CG.width.number();
				}
			});
			this.fixedColWidth = fixedColWidth;

			jQuery("#" + cfg.targetID + "_AX_fixedColHead").css({ width: fixedColWidth });
			jQuery("#" + cfg.targetID + "_AX_fixedColHead").find(".colHeadTable").css({ width: fixedColWidth });
			jQuery("#" + cfg.targetID + "_AX_fixedScrollContent").css({ width: fixedColWidth });
			jQuery("#" + cfg.targetID + "_AX_fixedScrollContent").find(".gridFixedBodyTable").css({ width: fixedColWidth });
			jQuery("#" + cfg.targetID + "_AX_fixedEditorContent").css({ width: fixedColWidth });
			jQuery("#" + cfg.targetID + "_AX_fixedEditorContent").find(".gridFixedBodyTable").css({ width: fixedColWidth });
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
				if (AXgetId(formID)) if (AXgetId(formID).tagName == "INPUT") AXInput.alignAnchor(formID);
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
		jQuery(document.body).unbind("mousemove.AXGrid");
		jQuery(document.body).unbind("mouseup.AXGrid");
		jQuery(document.body).unbind("mouseleave.AXGrid");

		jQuery(document.body).removeAttr("onselectstart");
		jQuery(document.body).removeClass("AXUserSelectNone");
	},
	colHeadNodeClick: function (event) {
		var cfg = this.config;
		if (event.target.id == "") return;
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;

		if (this.editorOpend) {
			toast.push("Editor 활성화 상태에서는 기능을 사용할 수 없습니다.");
			return; /* 에디터가 오픈된 상태이면 비활성화 */
		}

		if (jQuery(eventTarget).hasClass("colHeadTdCheck")) {
			this.colHeadCheckBoxClick(event);
			return; /* checkbox block click */
		}
		if (jQuery(eventTarget).hasClass("gridCheckBox")) return; /* checkbox click */

		var lastIdx = eid.length - 1;
		var colHeadR = eid[lastIdx - 1];
		var colHeadC = eid[lastIdx];

		try{
			var myColHead = cfg.colHead.rows[colHeadR][colHeadC];
		} catch (e) {
			return;
		}

		if (myColHead.sort == false) {
			return;
		}

		var tdID = cfg.targetID + "_AX_colHead_AX_" + colHeadR + "_AX_" + colHeadC;
		/*trace(myColHead); */

		if (myColHead.colSeq == undefined || myColHead.colSeq == null) {
			trace("정렬할 수 없는 컬럼 입니다.");
		} else {
			if (this.nowSortHeadID) {
				if (this.nowSortHeadID != tdID) {
					jQuery("#" + this.nowSortHeadID).removeClass("sortDesc");
					jQuery("#" + this.nowSortHeadID).removeClass("sortAsc");
					this.nowSortHeadObj.sort = undefined;
				}
			}
			/*trace(myColHead); */
			if (cfg.colHead.rows[colHeadR][colHeadC].sort == "desc") jQuery("#" + tdID).removeClass("sortDesc");
			else jQuery("#" + tdID).removeClass("sortAsc");

			var nsort = "";
			if (myColHead.sort == "desc") nsort = "asc";
			else nsort = "desc";
			cfg.colHead.rows[colHeadR][colHeadC].sort = nsort;

			/*sort 처리하기 */
			if (nsort == "desc") {
				jQuery("#" + tdID).addClass("sortDesc");
			} else {
				jQuery("#" + tdID).addClass("sortAsc");
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
			return; /* 에디터가 오픈된 상태이면 비활성화 */
		}

		var lastIdx = eid.length - 1;
		var colHeadR = eid[lastIdx - 1];
		var colHeadC = eid[lastIdx];
		var myColHead = cfg.colHead.rows[colHeadR][colHeadC];
		/*toast.push("클릭된 colGroup seq : " + myColHead.colSeq); */

		jQuery("#" + cfg.targetID + "_AX_colHeadMenu").remove();

		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_colHeadMenu\" class=\"AXGridColGroupListBox\">");
		jQuery.each(cfg.colGroup, function (cidx, CG) {
			var addClass = (CG.display) ? " on" : "";
			var lastClass = (cidx == cfg.colGroup.length - 1) ? " last" : "";
			po.push("<a href=\"#AXexec\" class=\"AXGridColGroupListBoxItem" + addClass + lastClass + "\" id=\"" + cfg.targetID + "_AX_colHeadMenu_AX_" + CG.colSeq + "\">");
			po.push(CG.label);
			po.push("</a>");
		});
		po.push("</div>");
		jQuery(document.body).append(po.join(''));

		var offset = jQuery(eventTarget).offset();
		var css = {};
		css.top = offset.top - 5;
		css.left = offset.left - 20;
		jQuery("#" + cfg.targetID + "_AX_colHeadMenu").css(css);

		/* colGroup click event bind */
		var colGroupListClick = this.colGroupListClick.bind(this);
		this.colGroupListClickBind = function (event) {
			colGroupListClick(event);
		};
		jQuery(document).bind("click", this.colGroupListClickBind);
		jQuery(document).bind("keydown", this.colGroupListClickBind);
		/* colGroup click bind ~~~~~~~~~~~~~~~~~~~ */
	},
	colGroupListClick: function (event) {
		var cfg = this.config;

		if (event.keyCode == AXUtil.Event.KEY_ESC) {
			jQuery("#" + cfg.targetID + "_AX_colHeadMenu").remove();
			jQuery(document).unbind("keydown", this.colGroupListClickBind);
			jQuery(document).unbind("click", this.colGroupListClickBind);
			return;
		}

		/* event target search - */
		if (event.target.id == "") return;
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;
		var myTarget = this.getEventTarget({
			evt: eventTarget, evtIDs: eid,
			find: function (evt, evtIDs) { return (jQuery(evt).hasClass("AXGridColGroupListBoxItem") || jQuery(evt).hasClass("colHeadTool")) ? true : false; }
		});
		/* event target search ------------------------ */

		if (myTarget) {
			if (jQuery(myTarget).hasClass("colHeadTool")) return;
			/*colHeadTool ready */
			var targetID = myTarget.id;
			var colSeq = targetID.split(/_AX_/g).last();
			/*trace(cfg.colGroup[colSeq]); */
			if (cfg.colGroup[colSeq].display) {
				cfg.colGroup[colSeq].display = false;
				jQuery("#" + targetID).removeClass("on");
			} else {
				cfg.colGroup[colSeq].display = true;
				jQuery("#" + targetID).addClass("on");
			}
			/*redraw grid */
			this.redrawGrid();

		} else {
			jQuery("#" + cfg.targetID + "_AX_colHeadMenu").remove();
			jQuery(document).unbind("keydown", this.colGroupListClickBind);
			jQuery(document).unbind("click", this.colGroupListClickBind);
		}
	},
	colHeadCheckBoxClick: function (event) {
		var cfg = this.config;
		if (event.target.id == "") return;
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;

		if (jQuery(eventTarget).hasClass("colHeadTdCheck")) {
			eventTarget = jQuery(eventTarget).find("input").get(0);
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
		/*trace(AXUtil.docTD); */
		/*trace(AXUtil.browser); */
		if (AXUtil.browser.name == "ie") {
			if (AXUtil.docTD == "Q") {
				return true;
			} else if (AXUtil.browser.version < 9) {
				return true;
			} else {
				return false;
			}

		} else {
			return false;
		}
	},
	sortList: function (nsort, myColHead, list) {
		var cfg = this.config;

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
						page: this.page
					};
					result = myColHead.formatter.call(sendObj, itemIndex, item);
					/*result 값이 money 형식인지 체크 합니다. */
					var moneyCheck = result.replace(/,/g, "");
					if (jQuery.isNumeric(moneyCheck)) result = result.number();
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
		po.push("<table cellpadding=\"0\" cellspacing=\"0\" class=\"gridBodyTable\"  id=\"" + cfg.targetID + "_AX_gridBodyTable\">");
		po.push(this.getColGroup("CB")); /*colGroup 삽입 */
		po.push("<thead id=\"" + cfg.targetID + "_AX_thead\"></thead>");
		po.push("<tbody id=\"" + cfg.targetID + "_AX_tbody\">");
		po.push("<tr class=\"noListTr\">");
		po.push("<td colspan=\"" + (this.showColLen) + "\">");
		po.push("<div class=\"tdRelBlock\">");
		po.push("<div class=\"bodyNode bodyTdText\" align=\"center\">");
		po.push(AXConfig.AXGrid.emptyListMSG);
		po.push("</div>");
		po.push("</div>");
		po.push("</td>");
		po.push("<td class=\"bodyNullTd\"><div class=\"tdRelBlock\">&nbsp;</div></td>");
		po.push("</tr>");
		po.push("</tbody>");
		po.push("<tfoot id=\"" + cfg.targetID + "_AX_tfoot\"></tfoot>");
		po.push("</table>");

		po.push("<div class=\"gridBodyDiv\" id=\"" + cfg.targetID + "_AX_gridBodyDiv\"></div>");

		po.push("</div>");

		if (this.hasFixed && ((rewrite && this.list.length > 0) || !rewrite)) {
			po.push("<div id=\"" + cfg.targetID + "_AX_fixedScrollContent\" class=\"gridFixedScrollContent\" style=\"width:" + this.fixedColWidth + "px;\">");
			po.push("<table cellpadding=\"0\" cellspacing=\"0\" class=\"gridFixedBodyTable\" style=\"width:" + this.fixedColWidth + "px;\">");
			po.push(this.getColGroup("FB")); /*colGroup 삽입 */
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

		po.push("<div id=\"" + cfg.targetID + "_AX_scrollTrackXY\" class=\"gridScrollTrackXY\"></div>");
		po.push("<div id=\"" + cfg.targetID + "_AX_scrollTrackY\" class=\"gridScrollTrackY\"><div id=\"" + cfg.targetID + "_AX_scrollYHandle\" class=\"gridScrollHandle\"></div></div>");
		po.push("<div id=\"" + cfg.targetID + "_AX_scrollTrackX\" class=\"gridScrollTrackX\"><div id=\"" + cfg.targetID + "_AX_scrollXHandle\" class=\"gridScrollHandle\"></div></div>");
		this.body.html(po.join(''));

		if (this.list.length > 0) {
			this.setList(this.list);
		}

		/*if(!cfg.xscroll) jQuery("#"+cfg.targetID+"_AX_scrollTrackX").hide(); */

		/* scroll event bind */
		jQuery("#" + cfg.targetID + "_AX_scrollYHandle").unbind();
		jQuery("#" + cfg.targetID + "_AX_scrollXHandle").unbind();

		jQuery("#" + cfg.targetID + "_AX_scrollYHandle").bind("mousedown", this.contentScrollScrollReady.bind(this));
		jQuery("#" + cfg.targetID + "_AX_scrollXHandle").bind("mousedown", this.contentScrollScrollReady.bind(this));
		/* scroll event bind ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
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
		jQuery("#" + cfg.targetID + "_AX_tbody").html(po.join(''));
		po = [];
		po.push("<tr class=\"noListTr\">");
		po.push("<td colspan=\"" + (this.showColLen) + "\">");
		po.push("</td>");
		po.push("</tr>");
		jQuery("#" + cfg.targetID + "_AX_fixedTbody").html(po.join(''));
	},
	setList: function (obj, sortDisable, rewrite) {
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
						if (obj.onLoad) obj.onLoad.call(res);
					} else {
						AXUtil.alert(res);
					}
				}
			});

		} else {

			/*this.ajaxInfo = null; */

			if (jQuery.isArray(obj)) {
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
				AXUtil.overwriteObject(this.page, res.page, true);
				this.setPaging();
			};
			var userResponse = userResponseSetPaging.bind(this);

			new AXReq(url, {
				debug: false, pars: pars, onsucc: function (res) {
					if (res.result == AXConfig.AXReq.okCode) {
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
	getFormatterValue: function (formatter, item, itemIndex, value, key, CH) {
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
			var checked = "";
			var disabled = "";
			var sendObj = {
				index: itemIndex,
				list: this.list,
				item: item
			};
			if (CH.checked) {
				var callResult = CH.checked.call(sendObj);
				if (callResult) {
					checked = " checked=\"checked\" ";
				}
			}
			if (CH.disabled) {
				var callDisabledResult = CH.disabled.call(sendObj);
				if (callDisabledResult) {
					disabled = " disabled=\"disabled\" ";
				}
			}

			result = "<input type=\"" + formatter + "\" name=\"" + CH.label + "\" class=\"gridCheckBox_body_colSeq" + CH.colSeq + "\" id=\"" + cfg.targetID + "_AX_checkboxItem_AX_" + CH.colSeq + "_AX_" + itemIndex + "\" value=\"" + value + "\" " + checked + disabled + " />";
		} else {
			try {
				var sendObj = {
					index: itemIndex,
					list: this.list,
					item: item,
					page: this.page
				};
				result = formatter.call(sendObj, itemIndex, item);
			} catch (e) {
				result = value;
				trace(e);
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
					item: item
				};
				var callResult = CH.checked.call(sendObj);
				if (callResult) {
					checked = " checked=\"checked\" ";
				}
			}
			result = "<input type=\"" + formatter + "\" name=\"" + CH.label + "\" class=\"gridCheckBox_body_colSeq" + CH.colSeq + "\" id=\"" + cfg.targetID + "_AX_checkboxItem_AX_" + CH.colSeq + "_AX_" + itemIndex + "\" value=\"" + value + "\" " + checked + " />";
		} else {
			try {
				var sendObj = {
					index: itemIndex,
					list: this.list,
					item: item,
					page: this.page
				};
				result = formatter.call(sendObj, itemIndex, item);
			} catch (e) {
				trace(e);
			}
		}
		return result;
	},
	getItem: function (itemIndex, item, isfix, hasTr) {
		var cfg = this.config;
		var tpo = [];
		var evenClassName = "line" + (itemIndex % 2);
		var getFormatterValue = this.getFormatterValue.bind(this);
		var getTooltipValue = this.getTooltipValue.bind(this);
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

		for (var r = 0; r < cfg.body.rows.length; r++) {
			var isLastTR = (cfg.body.rows.length - 1 == r);
			if (hasTrValue) tpo.push("<tr class=\"gridBodyTr gridBodyTr_" + itemIndex + " " + evenClassName + " " + trAddClass + "\" id=\"" + cfg.targetID + "_AX_tr_" + r + "_AX_" + (isfix || "n") + "_AX_" + itemIndex + "\">");
			var colCount = 0;
			jQuery.each(cfg.body.rows[r], function (CHidx, CH) {
				if (CH.display && CH.colspan > 0) {
					var printOk = false;
					if (isfix == "n") printOk = true;
					if (isfix == "fix" && colCount < (cfg.fixedColSeq + 1)) printOk = true;

					if (printOk) {

						colCount += CH.colspan;

						/*radio, check exception */
						var rowspan = (CH.rowspan > 1) ? " rowspan=\"" + CH.rowspan + "\"" : "";
						var colspan = (CH.colspan > 1) ? " colspan=\"" + CH.colspan + "\"" : "";
						var valign = " valign=\"" + CH.valign + "\" style=\"vertical-align:" + CH.valign + ";\"";
						var bottomClass = (CH.isLastCell) ? "" : " bodyBottomBorder";
						var fixedClass = (CH.isFixedEndCell) ? " fixedLine" : "";
						/*trace({r:r, CHidx:CHidx, fixedColSeq:cfg.fixedColSeq, colCount:colCount}); */

						var bodyNodeClass = "";
						if (CH.formatter == "checkbox" || CH.formatter == "radio") bodyNodeClass = " bodyTdCheckBox";
						else if (CH.formatter == "html") bodyNodeClass = " bodyTdHtml";

						var tooltipValue = "";
						if (CH.tooltip) {
							tooltipValue = getTooltipValue(CH.tooltip, item, itemIndex, item[CH.key], CH.key, CH);
						}

						tpo.push("<td" + valign + rowspan + colspan + " id=\"" + cfg.targetID + "_AX_" + (isfix || "n") + "body_AX_" + r + "_AX_" + CHidx + "_AX_" + itemIndex + "\" class=\"bodyTd" + bottomClass + fixedClass + "\">");
						tpo.push("<div class=\"tdRelBlock\" title=\"" + tooltipValue + "\">");
						tpo.push("<div class=\"bodyNode bodyTdText" + bodyNodeClass + "\" align=\"" + CH.align + "\" id=\"" + cfg.targetID + "_AX_bodyText_AX_" + r + "_AX_" + CHidx + "_AX_" + itemIndex + "\">");
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
				jQuery.each(viewIconObj.buttons.items, function (bidx, B) {
					tpo.push("<button type=\"button\" class=\"viewIconButtonsItem " + this.addClass + "\" id=\"" + cfg.targetID + "_AX_viewIcon_AX_" + itemIndex + "_AX_" + bidx + "\">");
					tpo.push(this.label);
					tpo.push("</button> ");
				});
				tpo.push("</div>");
			}
		}

		tpo.push("</div>");

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
			jQuery.each(cfg.body.marker.rows[r], function (CHidx, CH) {
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
		var cfg = this.config;
		var bodyHasMarker = this.bodyHasMarker;
		var getItem = this.getItem.bind(this);
		var getItemMarker = this.getItemMarker.bind(this);
		var getMarkerDisplay = this.getMarkerDisplay.bind(this);

		/* icon view */
		var getIconItem = this.getIconItem.bind(this);
		/* --------------------------- icon view */

		var po = [];

		/* view mode 가 grid 인경우만 유효 */
		if (cfg.viewMode == "grid") {

			jQuery("#" + cfg.targetID + "_AX_gridBodyTable").show();
			jQuery("#" + cfg.targetID + "_AX_gridBodyDiv").hide();


			jQuery.each(this.list, function (itemIndex, item) {
				po.push(getItem(itemIndex, item, "n"));
				if (bodyHasMarker && getMarkerDisplay(itemIndex, item)) {
					po.push(getItemMarker(itemIndex, item, "n"));
				}
			});

			if (this.list.length == 0) { /* empty tags */
				po.push("<tr class=\"noListTr\">");
				po.push("<td colspan=\"" + (this.showColLen) + "\">");
				po.push("<div class=\"tdRelBlock\">");
				po.push("<div class=\"bodyNode bodyTdText\" align=\"center\">");
				po.push(AXConfig.AXGrid.emptyListMSG);
				po.push("</div>");
				po.push("</div>");
				po.push("</td>");
				po.push("<td class=\"bodyNullTd\"><div class=\"tdRelBlock\">&nbsp;</div></td>");
				po.push("</tr>");
			}

			jQuery("#" + cfg.targetID + "_AX_tbody").empty();
			jQuery("#" + cfg.targetID + "_AX_tbody").append(po.join(''));

			if (this.hasFixed) {
				po = [];
				jQuery.each(this.list, function (itemIndex, item) {
					po.push(getItem(itemIndex, item, "fix"));
					if (bodyHasMarker && getMarkerDisplay(itemIndex, item)) {
						po.push(getItemMarker(itemIndex, item, "fix"));
					}
				});
				jQuery("#" + cfg.targetID + "_AX_fixedTbody").empty();
				jQuery("#" + cfg.targetID + "_AX_fixedTbody").append(po.join(''));
			}

			this.body.find(".gridBodyTr").bind("mouseover", this.gridBodyOver.bind(this));
			this.body.find(".gridBodyTr").bind("mouseout", this.gridBodyOut.bind(this));
			this.body.find(".gridBodyTr").bind("click", this.gridBodyClick.bind(this));
			if (this.needBindDBLClick()) this.body.find(".gridBodyTr").bind("dblclick", this.gridBodyDBLClick.bind(this));

			if (this.selectedRow && this.selectedRow.length > 0) {

				var body = this.body;
				jQuery.each(this.selectedRow, function () {
					body.find(".gridBodyTr_" + this).addClass("selected");
				});

				var itemIndex = this.selectedRow.last();
				try {
					var trTop = this.body.find(".gridBodyTr_" + itemIndex).position().top;
					var trHeight = this.body.find(".gridBodyTr_" + itemIndex).height();

					var scrollHeight = this.body_scrollContent.height();
					var bodyHeight = this.body.height() - this.body_scrollTrackXY.outerHeight();
					var handleHeight = this.body_scrollYHandle.outerHeight();
					var trackHeight = this.body_scrollTrackY.height();

					if (trTop.number() + trHeight.number() > bodyHeight) {
						var scrollTop = bodyHeight - (trTop.number() + trHeight.number());
						this.body_scrollContent.css({ top: scrollTop });
						this.contentScrollContentSync({ top: scrollTop });
					} else {
						if (trTop.number() == 0) {
							var scrollTop = 0;
							this.body_scrollContent.css({ top: scrollTop });
							this.contentScrollContentSync({ top: scrollTop });
						}
					}
				} catch (e) {

				}

			}

		} else {

			jQuery("#" + cfg.targetID + "_AX_gridBodyTable").hide();
			jQuery("#" + cfg.targetID + "_AX_gridBodyDiv").show();

			var viewIconObj = cfg.body.view.icon;

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

			jQuery.each(this.list, function (itemIndex, item) {
				po.push(getIconItem(itemIndex, item, viewIconObj, cssObj));
			});
			po.push("<div style='clear:both;'></div>");

			jQuery("#" + cfg.targetID + "_AX_gridBodyDiv").empty();
			jQuery("#" + cfg.targetID + "_AX_gridBodyDiv").append(po.join(''));

			this.body.find(".bodyViewIcon").bind("click", this.gridBodyClick.bind(this));
			if (this.needBindDBLClick()) this.body.find(".bodyViewIcon").bind("dblclick", this.gridBodyDBLClick.bind(this));

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
		}
		this.selectedCells.clear(); /* selectedCells clear */

		this.contentScrollResize();

		this.contentScrollXAttr = null;
		this.contentScrollYAttr = null;
	},
	updateList: function (itemIndex, item) {
		var cfg = this.config;
		if (item._CUD == "C") {

		} else if (item._CUD == "D") {
			toast.push("삭제된 아이템 입니다. 수정할 수 없습니다.");
			return; /*삭제된 개체 수정 금지 */
		} else {
			item._CUD = "U";
		}

		this.list[itemIndex] = item;

		var npo = this.getItem(itemIndex, item, "n", "notr");
		if (this.hasFixed) {
			var fpo = this.getItem(itemIndex, item, "fix", "notr");
		}

		jQuery("#" + cfg.targetID + "_AX_tbody").find(".gridBodyTr_" + itemIndex).html(npo);
		if (this.hasFixed) {
			jQuery("#" + cfg.targetID + "_AX_fixedTbody").find(".gridBodyTr_" + itemIndex).html(fpo);
		}

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

		jQuery("#" + cfg.targetID + "_AX_tbody").find(".gridBodyTr_" + itemIndex).addClass(trAddClass);
		if (this.hasFixed) {
			jQuery("#" + cfg.targetID + "_AX_fixedTbody").find(".gridBodyTr_" + itemIndex).addClass(trAddClass);;
		}
		this.redrawDataSet();
	},
	pushList: function (pushItem, insertIndex) {
		var cfg = this.config;

		pushItem._CUD = "C";
		if (insertIndex != null && insertIndex != undefined) {
			var itemIndex = insertIndex;
			var newList = [];
			jQuery.each(this.list, function (listIndex, L) {
				if (listIndex == itemIndex) {
					newList.push(pushItem);
				}
				newList.push(L);
			});
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

			if (itemIndex == 0) {
				this.printList();
			} else {

				var item = this.list[itemIndex];
				var npo = this.getItem(itemIndex, item, "n");
				if (this.hasFixed) {
					var fpo = this.getItem(itemIndex, item, "fix");
				}

				var trlen = jQuery("#" + cfg.targetID + "_AX_tbody").find(".gridBodyTr_" + (itemIndex.number() - 1)).length - 1;
				jQuery("#" + cfg.targetID + "_AX_tbody").find(".gridBodyTr_" + (itemIndex.number() - 1)).each(function (idx, O) {
					if (idx == trlen) jQuery(this).after(npo);
				});
				if (this.hasFixed) {
					jQuery("#" + cfg.targetID + "_AX_fixedTbody").find(".gridBodyTr_" + (itemIndex - 1)).each(function (idx, O) {
						if (idx == trlen) jQuery(this).after(fpo);
					});
				}

				jQuery("#" + cfg.targetID + "_AX_tbody").find(".gridBodyTr_" + itemIndex).bind("mouseover", this.gridBodyOver.bind(this));
				jQuery("#" + cfg.targetID + "_AX_tbody").find(".gridBodyTr_" + itemIndex).bind("mouseout", this.gridBodyOut.bind(this));
				jQuery("#" + cfg.targetID + "_AX_tbody").find(".gridBodyTr_" + itemIndex).bind("click", this.gridBodyClick.bind(this));
				if (this.needBindDBLClick()) jQuery("#" + cfg.targetID + "_AX_tbody").find(".gridBodyTr_" + itemIndex).bind("dblclick", this.gridBodyDBLClick.bind(this));

				if (this.hasFixed) {
					jQuery("#" + cfg.targetID + "_AX_fixedTbody").find(".gridBodyTr_" + itemIndex).bind("mouseover", this.gridBodyOver.bind(this));
					jQuery("#" + cfg.targetID + "_AX_fixedTbody").find(".gridBodyTr_" + itemIndex).bind("mouseout", this.gridBodyOut.bind(this));
					jQuery("#" + cfg.targetID + "_AX_fixedTbody").find(".gridBodyTr_" + itemIndex).bind("click", this.gridBodyClick.bind(this));
					if (this.needBindDBLClick()) jQuery("#" + cfg.targetID + "_AX_fixedTbody").find(".gridBodyTr_" + itemIndex).bind("dblclick", this.gridBodyDBLClick.bind(this));
				}

				this.contentScrollResize(false);
				this.setFocus(itemIndex);
			}
		}

		if (!this.pageActive) this.setStatus(this.list.length);
		this.redrawDataSet();
	},
	removeList: function (removeList) {
		var cfg = this.config;

		if (cfg.passiveMode) {

			var _list = this.list;
			var collect = [];
			jQuery.each(removeList, function (ridx, r) {
				jQuery.each(_list, function (lidx, l) {
					var isDel = false;
					jQuery.each(r, function (k, v) {
						if (l[k] == v) {
							isDel = true;
						} else {
							isDel = false;
							return false;
						}
					});
					if (isDel) {
						if (l._CUD != "C") {
							l._CUD = "D";
							collect.push(l);
						}
					} else {
						collect.push(l);
					}
				});
			});
			this.list = collect;
		} else {
			var collect = [];
			jQuery.each(this.list, function (lidx, l) {
				var isPush = true;
				jQuery.each(removeList, function (ridx, r) {
					jQuery.each(r, function (k, v) {
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

			jQuery.each(removeList, function (ridx, r) {
				if (cfg.passiveRemoveHide) {
					_list[r.index]._isDel = true;
				} else {
					if (_list[r.index]._CUD != "C") {
						_list[r.index]._CUD = "D";
					} else {
						_list[r.index]._isDel = true;
					}
				}
			});

			var collect = [];
			var removeCollect = this.removedList;
			jQuery.each(_list, function () {
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
			jQuery.each(removeList, function (ridx, r) {
				_list[r.index]._isDel = true;
			});

			var collect = [];
			var removeCollect = this.removedList;
			jQuery.each(_list, function () {
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
		jQuery.each(restoreList, function (ridx, r) {
			jQuery.each(_list, function (lidx, l) {
				var isDel = false;
				jQuery.each(r, function (k, v) {
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
		if (event.target.id != ""){
			var eid = event.target.id.split(/_AX_/g);
			var isoncheck = false;
			if (eventTarget.tagName.toLowerCase() == "input" || eventTarget.tagName.toLowerCase() == "button") {
				if (cfg.body.oncheck) {
					isoncheck = true;
				} else {
					return; /*input 인 경우 제외 */
				}
				var ieid = event.target.id.split(/_AX_/g);
				var checkboxColSeq = ieid[ieid.length - 2];
				var checkboxIndex = ieid[ieid.length - 1];
				if (cfg.colGroup[checkboxColSeq].oncheck) {
					var sendObj = {
						index: checkboxIndex,
						list: this.list,
						item: this.list[checkboxIndex]
					};
					try {
						cfg.colGroup[checkboxColSeq].oncheck.call(sendObj, event.target.checked);
					} catch (e) {
						trace(e);
					}
				}
			}
		}
		var myTarget = this.getEventTarget({
			evt: eventTarget, evtIDs: eid,
			until: function (evt, evtIDs) { return (jQuery(evt.parentNode).hasClass("gridBodyTr")) ? true : false; },
			find: function (evt, evtIDs) { return (jQuery(evt).hasClass("bodyTd") || jQuery(evt).hasClass("bodyViewIcon")) ? true : false; }
		});
		/* event target search ------------------------ */
		if (isoncheck) { /*체크박스 구현 */
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
			};
			try {
				cfg.body.oncheck.call(sendObj, itemIndex, item);
			} catch (e) {
				trace(e);
			}
		} else if (cfg.viewMode == "grid") {
			if (myTarget) {
				var targetID = myTarget.id;
				var itemIndex = targetID.split(/_AX_/g).last();
				var ids = targetID.split(/_AX_/g);

				if (event.shiftKey) {
					
				} else if (event.ctrlKey) {
					if (this.selectedRow.length > 0) {
						var body = this.body;
						jQuery.each(this.selectedRow, function () {
							body.find(".gridBodyTr_" + this).removeClass("selected");
						});
						this.selectedRow.clear();
					}

					var hasID = false;
					var collect = [];
					jQuery.each(this.selectedCells, function () {
						if (this == targetID) {
							hasID = true;
						} else {
							collect.push(this);
						}
					});
					if (hasID) {
						jQuery("#" + targetID).removeClass("selected");
						this.selectedCells = collect;
					} else {
						jQuery("#" + targetID).addClass("selected");
						this.selectedCells.push(targetID);
					}
				} else {
					if (this.selectedCells.length > 0) {
						jQuery.each(this.selectedCells, function () {
							jQuery("#" + this).removeClass("selected");
						});
						this.selectedCells.clear();
					}
					if (this.selectedRow.length > 0) {
						var body = this.body;
						jQuery.each(this.selectedRow, function () {
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
		} else {
			if (myTarget) {
				var targetID = myTarget.id;
				var itemIndex = targetID.split(/_AX_/g).last();

				if (event.shiftKey) {

				} else if (event.ctrlKey) {

				} else {

					if (this.selectedRow.length > 0) {
						var body = this.body;
						jQuery.each(this.selectedRow, function () {
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


		}
	},
	gridBodyDBLClick: function (event) {
		var cfg = this.config;
		if (event.target.id == "") return;
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;
		if (eventTarget.tagName.toLowerCase() == "input" || eventTarget.tagName.toLowerCase() == "button") return; /*input, button 인 경우 제외 */
		var myTarget = this.getEventTarget({
			evt: eventTarget, evtIDs: eid,
			until: function (evt, evtIDs) { return (jQuery(evt.parentNode).hasClass("gridBodyTr")) ? true : false; },
			find: function (evt, evtIDs) { return (jQuery(evt).hasClass("bodyTd") || jQuery(evt).hasClass("bodyViewIcon")) ? true : false; }
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
					jQuery.each(this.selectedRow, function () {
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
		} else {
			if (myTarget) {
				/*colHeadTool ready */
				/*trace({tagName:myTarget.tagName, id:myTarget.id}); */
				var targetID = myTarget.id;
				var itemIndex = targetID.split(/_AX_/g).last();

				if (this.selectedRow.length > 0) {
					var body = this.body;
					jQuery.each(this.selectedRow, function () {
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
		}

		this.stopEvent(event);
		this.clearRange();
	},
	contentScrollResize: function (resetLeft) {
		var cfg = this.config;

		var bodyHeight = this.body.height() - jQuery("#" + cfg.targetID + "_AX_scrollTrackXY").outerHeight();
		var scrollHeight = jQuery("#" + cfg.targetID + "_AX_scrollContent").height();

		var bodyWidth = this.body.width();
		var scrollWidth = (this.colWidth > bodyWidth) ? this.colWidth : bodyWidth;

		jQuery("#" + cfg.targetID + "_AX_scrollContent").css({ width: scrollWidth });
		this.colHead.css({ width: scrollWidth + jQuery("#" + cfg.targetID + "_AX_scrollTrackXY").outerWidth() });  /* colHead width 재정의 */

		if (this.hasEditor) this.editor.css({ width: scrollWidth });

		if (resetLeft != false) {
			jQuery("#" + cfg.targetID + "_AX_scrollContent").css({ left: 0 });
			jQuery("#" + cfg.targetID + "_AX_gridColHead").css({ left: 0 });
			jQuery("#" + cfg.targetID + "_AX_scrollXHandle").css({ left: 0 });
			if (this.hasEditor) jQuery("#" + cfg.targetID + "_AX_editorContent").css({ left: 0 });
		}

		if (bodyHeight < scrollHeight && cfg.height != "auto") {
			jQuery("#" + cfg.targetID + "_AX_scrollTrackXY").show();
			jQuery("#" + cfg.targetID + "_AX_scrollTrackY").show();

			var scrollTrackYHeight = bodyHeight;
			jQuery("#" + cfg.targetID + "_AX_scrollTrackY").css({ height: scrollTrackYHeight });

			var scrollYHandleHeight = ((bodyHeight) * scrollTrackYHeight) / scrollHeight;
			jQuery("#" + cfg.targetID + "_AX_scrollYHandle").css({ height: scrollYHandleHeight - 2 });
		} else {
			jQuery("#" + cfg.targetID + "_AX_scrollTrackXY").hide();
			jQuery("#" + cfg.targetID + "_AX_scrollTrackY").hide();
		}

		if (scrollWidth > bodyWidth && cfg.xscroll) {
			this.show_scrollTrackX = true;

			jQuery("#" + cfg.targetID + "_AX_scrollTrackXY").show();
			jQuery("#" + cfg.targetID + "_AX_scrollTrackX").show();

			var scrollTrackXWidth = bodyWidth - jQuery("#" + cfg.targetID + "_AX_scrollTrackXY").outerWidth();
			jQuery("#" + cfg.targetID + "_AX_scrollTrackX").css({ width: scrollTrackXWidth });
			var scrollXHandleWidth = ((bodyWidth - jQuery("#" + cfg.targetID + "_AX_scrollTrackXY").outerWidth()) * scrollTrackXWidth) / scrollWidth;

			jQuery("#" + cfg.targetID + "_AX_scrollXHandle").css({ width: scrollXHandleWidth - 2 });

			/* cfg.height == "auto" 길이 늘이기 */
			if (cfg.height == "auto") {
				var colHeadHeight = this.colHead.outerHeight();
				var scrollBodyHeight = jQuery("#" + cfg.targetID + "_AX_scrollContent").height();
				var scrollTrackXYHeight = jQuery("#" + cfg.targetID + "_AX_scrollTrackXY").outerHeight();
				this.scrollBody.css({ height: (scrollBodyHeight + colHeadHeight + scrollTrackXYHeight) }); /*colhead + body height */
				this.body.css({ top: colHeadHeight, height: (scrollBodyHeight + scrollTrackXYHeight) }); /* body Height */
			}
		} else {
			this.show_scrollTrackX = false;
			jQuery("#" + cfg.targetID + "_AX_scrollTrackX").hide();
			if (cfg.height == "auto") jQuery("#" + cfg.targetID + "_AX_scrollTrackXY").hide();

			if (cfg.height == "auto") {
				var colHeadHeight = this.colHead.outerHeight();
				var scrollBodyHeight = jQuery("#" + cfg.targetID + "_AX_scrollContent").height();

				this.scrollBody.css({ height: (scrollBodyHeight + colHeadHeight) }); /*colhead + body height */
				this.body.css({ top: colHeadHeight, height: (scrollBodyHeight) }); /* body Height */
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
					scrollTrackXWidth: jQuery("#" + cfg.targetID + "_AX_scrollTrackX").width(),
					scrollXHandleWidth: jQuery("#" + cfg.targetID + "_AX_scrollXHandle").outerHeight()
				};
			}

			var L = (this.contentScrollXAttr.scrollWidth * (pos.left) / this.contentScrollXAttr.scrollTrackXWidth).round(0);
			jQuery("#" + cfg.targetID + "_AX_scrollContent").css({ left: -L });
			jQuery("#" + cfg.targetID + "_AX_gridColHead").css({ left: -L });
			if (this.hasEditor) jQuery("#" + cfg.targetID + "_AX_editorContent").css({ left: -L });
			/*trace({top:-L}); */
		} else {
			if (cfg.height == "auto") return;
			if (!this.contentScrollYAttr) {
				this.contentScrollYAttr = {
					bodyHeight: this.body.height() - jQuery("#" + cfg.targetID + "_AX_scrollTrackXY").outerHeight(),
					scrollHeight: jQuery("#" + cfg.targetID + "_AX_scrollContent").height(),
					scrollTrackYHeight: jQuery("#" + cfg.targetID + "_AX_scrollTrackY").height(),
					scrollYHandleHeight: jQuery("#" + cfg.targetID + "_AX_scrollYHandle").outerHeight()
				};
			}
			var T = (this.contentScrollYAttr.scrollHeight * (pos.top) / this.contentScrollYAttr.scrollTrackYHeight).floor();

			/*trace({ top: -T });*/

			jQuery("#" + cfg.targetID + "_AX_scrollContent").css({ top: -T });
			if (AXgetId(cfg.targetID + "_AX_fixedScrollContent")) jQuery("#" + cfg.targetID + "_AX_fixedScrollContent").css({ top: -T });
			if (this.editorOpend) {
				this.editor.css({ top: -T + this.editorOpenTop });
			}
		}
	},
	contentScrollContentSync: function (pos) {
		var cfg = this.config;
		if (pos.left != undefined) {

		} else {
			if (cfg.height == "auto") return;
			if (!this.contentScrollYAttr) {
				this.contentScrollYAttr = {
					bodyHeight: this.body.height() - jQuery("#" + cfg.targetID + "_AX_scrollTrackXY").outerHeight(),
					scrollHeight: jQuery("#" + cfg.targetID + "_AX_scrollContent").height(),
					scrollTrackYHeight: jQuery("#" + cfg.targetID + "_AX_scrollTrackY").height(),
					scrollYHandleHeight: jQuery("#" + cfg.targetID + "_AX_scrollYHandle").outerHeight()
				};
			}
			var T = (this.contentScrollYAttr.scrollYHandleHeight * (pos.top) / this.contentScrollYAttr.bodyHeight).floor();
			var handleTop = -T;
			/*trace({h1:(handleTop), h2:this.contentScrollYAttr.scrollYHandleHeight, trackHeight:this.contentScrollYAttr.bodyHeight}); */
			/*if((handleTop + this.contentScrollYAttr.handleHeight) > this.contentScrollYAttr.trackHeight) handleTop = this.contentScrollYAttr.trackHeight - this.contentScrollYAttr.handleHeight; */

			jQuery("#" + cfg.targetID + "_AX_scrollYHandle").css({ top: handleTop });
			if (AXgetId(cfg.targetID + "_AX_fixedScrollContent")) jQuery("#" + cfg.targetID + "_AX_fixedScrollContent").css({ top: pos.top });
			if (this.editorOpend) {
				this.editor.css({ top: pos.top + this.editorOpenTop });
			}

		}
	},
	getMousePositionToContentScroll: function (event, contentScrollID) {
		var pos = jQuery("#" + contentScrollID).offset();
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
		/*trace(handleName); */
		this.contentScrollAttrs = { handleName: handleName };
		this.contentScrollXAttr = null;
		this.contentScrollYAttr = null;

		if (handleName == "scrollYHandle") {
			this.contentScrollAttrs.scrollTrack = cfg.targetID + "_AX_scrollTrackY";
		} else {
			this.contentScrollAttrs.scrollTrack = cfg.targetID + "_AX_scrollTrackX";
		}

		jQuery(event.target).addClass("hover");
		var pos = this.getMousePositionToContentScroll(event, this.contentScrollAttrs.scrollTrack);
		this.contentScrollAttrs.x = jQuery(event.target).position().left - pos.x;
		this.contentScrollAttrs.y = jQuery(event.target).position().top - pos.y;
		this.contentScrollAttrs.handleWidth = jQuery(event.target).outerWidth();
		this.contentScrollAttrs.handleHeight = jQuery(event.target).outerHeight();
		this.contentScrollAttrs.trackWidth = jQuery("#" + this.contentScrollAttrs.scrollTrack).width();
		this.contentScrollAttrs.trackHeight = jQuery("#" + this.contentScrollAttrs.scrollTrack).height();

		/* srcoll event bind */
		var contentScrollScrollMove = this.contentScrollScrollMove.bind(this);
		this.contentScrollScrollMoveBind = function (event) {
			contentScrollScrollMove(event);
		};
		var contentScrollScrollEnd = this.contentScrollScrollEnd.bind(this);
		this.contentScrollScrollEndBind = function (event) {
			contentScrollScrollEnd(event);
		};
		jQuery(document.body).bind("mousemove.AXGrid", this.contentScrollScrollMoveBind);
		jQuery(document.body).bind("mouseup.AXGrid", this.contentScrollScrollEndBind);
		jQuery(document.body).bind("mouseleave.AXGrid", this.contentScrollScrollEndBind);

		jQuery(document.body).attr("onselectstart", "return false");
		jQuery(document.body).addClass("AXUserSelectNone");
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
			handleTop = pos.y + this.contentScrollAttrs.y;
			if (handleTop < 0) handleTop = 0;
			if ((handleTop + this.contentScrollAttrs.handleHeight) > this.contentScrollAttrs.trackHeight) {
				handleTop = this.contentScrollAttrs.trackHeight - this.contentScrollAttrs.handleHeight;
				var contentScrollEnd = this.contentScrollEnd.bind(this);
				if (this.contentScrollEndObserver) clearTimeout(this.contentScrollEndObserver);
				this.contentScrollEndObserver = setTimeout(function () {
					contentScrollEnd();
				}, 100);
			}
			jQuery("#" + cfg.targetID + "_AX_" + handleName).css({ top: handleTop });
			this.contentScrollScrollSync({ top: handleTop });
		} else {
			handleLeft = pos.x + this.contentScrollAttrs.x;
			if (handleLeft < 0) handleLeft = 0;
			if ((handleLeft + this.contentScrollAttrs.handleWidth) > this.contentScrollAttrs.trackWidth) handleLeft = this.contentScrollAttrs.trackWidth - this.contentScrollAttrs.handleWidth;
			jQuery("#" + cfg.targetID + "_AX_" + handleName).css({ left: handleLeft });
			this.contentScrollScrollSync({ left: handleLeft });
		}
	},
	contentScrollScrollEnd: function (event) {
		var cfg = this.config;
		jQuery(document.body).unbind("mousemove.AXGrid");
		jQuery(document.body).unbind("mouseup.AXGrid");
		jQuery(document.body).unbind("mouseleave.AXGrid");

		jQuery(document.body).removeAttr("onselectstart");
		jQuery(document.body).removeClass("AXUserSelectNone");
		jQuery("#" + cfg.targetID + "_AX_" + this.contentScrollAttrs.handleName).removeClass("hover");
	},
	contentScrollScrollWheel: function (e) {
		var cfg = this.config;

		if (cfg.height == "auto") return;

		var event = window.event || e;
		var delta = event.detail ? event.detail * (-20) : event.wheelDelta / 2; /*check for detail first so Opera uses that instead of wheelDelta */

		var bodyHeight = this.body.height() - jQuery("#" + cfg.targetID + "_AX_scrollTrackXY").outerHeight();
		var scrollTop = jQuery("#" + cfg.targetID + "_AX_scrollContent").position().top;
		var scrollHeight = jQuery("#" + cfg.targetID + "_AX_scrollContent").height();

		/*var handleTop = jQuery("#"+cfg.targetID+"_AX_scrollYHandle").position().top; i want this value */
		var handleHeight = jQuery("#" + cfg.targetID + "_AX_scrollYHandle").outerHeight();
		var trackHeight = jQuery("#" + cfg.targetID + "_AX_scrollTrackY").height();

		if (scrollHeight < bodyHeight) {
			return;
		}

		/*trace({scrollTop:scrollTop, bodyHeight:bodyHeight, scrollHeight:scrollHeight}); */
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
		jQuery("#" + cfg.targetID + "_AX_scrollContent").css({ top: scrollTop });
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
		this.contentScrollTouchMoved = true;
		this.contentScrollIDOffset = jQuery("#" + cfg.targetID + "_AX_gridBody").offset();
		this.contentScrollXAttr = null;
		this.contentScrollYAttr = null;

		var pos = this.getTouchPositionToContentScroll(event);

		var YhandleTop = jQuery("#" + cfg.targetID + "_AX_scrollYHandle").position().top;
		var YhandleHeight = jQuery("#" + cfg.targetID + "_AX_scrollYHandle").outerHeight();
		var YtrackHeight = jQuery("#" + cfg.targetID + "_AX_scrollTrackY").height();

		jQuery("#" + cfg.targetID + "_AX_scrollYHandle").addClass("hover");

		var XhandleTop = jQuery("#" + cfg.targetID + "_AX_scrollXHandle").position().left;
		var XhandleHeight = jQuery("#" + cfg.targetID + "_AX_scrollXHandle").outerWidth();
		var XtrackHeight = jQuery("#" + cfg.targetID + "_AX_scrollTrackX").width();

		jQuery("#" + cfg.targetID + "_AX_scrollXHandle").addClass("hover");

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

			var htop = jQuery("#" + cfg.targetID + "_AX_scrollYHandle").position().top;
			var handleTop = pos.y + scrollTouchAttr.y;
			if (handleTop < 0) handleTop = 0;
			if ((handleTop + scrollTouchAttr.h) > scrollTouchAttr.th) handleTop = scrollTouchAttr.th - scrollTouchAttr.h;

			if ((htop - handleTop).abs() > 2) {
				jQuery("#" + cfg.targetID + "_AX_scrollYHandle").css({ top: handleTop });
				this.contentScrollScrollSync({ top: handleTop });
			}

			if (this.show_scrollTrackX) {
				var hleft = jQuery("#" + cfg.targetID + "_AX_scrollXHandle").position().left;
				var handleLeft = pos.x + this.scrollTouchAttr.x;
				if (handleLeft < 0) handleLeft = 0;
				if ((handleLeft + scrollTouchAttr.w) > scrollTouchAttr.tw) handleLeft = scrollTouchAttr.tw - scrollTouchAttr.w;

				if ((hleft - handleLeft).abs() > 2) {
					jQuery("#" + cfg.targetID + "_AX_scrollXHandle").css({ left: handleLeft });
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

			jQuery("#" + cfg.targetID + "_AX_scrollXHandle").removeClass("hover");
			jQuery("#" + cfg.targetID + "_AX_scrollYHandle").removeClass("hover");

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
	scrollTop: function (itemIndex) {
		var cfg = this.config;
		if (cfg.height == "auto") return;
		try {
			var trTop = this.body.find(".gridBodyTr_" + itemIndex).position().top;
			var trHeight = this.body.find(".gridBodyTr_" + itemIndex).height();

			var scrollHeight = jQuery("#" + cfg.targetID + "_AX_scrollContent").height();
			var bodyHeight = this.body.height() - jQuery("#" + cfg.targetID + "_AX_scrollTrackXY").outerHeight();
			var handleHeight = jQuery("#" + cfg.targetID + "_AX_scrollYHandle").outerHeight();
			var trackHeight = jQuery("#" + cfg.targetID + "_AX_scrollTrackY").height();

			if (trTop.number() + trHeight.number() > bodyHeight) {
				var scrollTop = bodyHeight - (trTop.number() + trHeight.number());
				if (this.body.height() < scrollHeight) {
					jQuery("#" + cfg.targetID + "_AX_scrollContent").css({ top: scrollTop });
					this.contentScrollContentSync({ top: scrollTop });
				}
			} else {
				if (trTop.number() == 0) {
					var scrollTop = 0;
					jQuery("#" + cfg.targetID + "_AX_scrollContent").css({ top: scrollTop });
					this.contentScrollContentSync({ top: scrollTop });
				}
			}
		} catch (e) {
			var scrollTop = 0;
			jQuery("#" + cfg.targetID + "_AX_scrollContent").css({ top: scrollTop });
			this.contentScrollContentSync({ top: scrollTop });
		}
	},
	setFocus: function (itemIndex) {
		var cfg = this.config;

		if (this.selectedCells.length > 0) {
			jQuery.each(this.selectedCells, function () {
				jQuery("#" + this).removeClass("selected");
			});
			this.selectedCells.clear();
		}
		if (this.selectedRow.length > 0) {
			var body = this.body;
			jQuery.each(this.selectedRow, function () {
				body.find(".gridBodyTr_" + this).removeClass("selected");
			});
		}

		this.selectedRow.clear();
		this.body.find(".gridBodyTr_" + itemIndex).addClass("selected");
		this.selectedRow.push(itemIndex);

		var trTop = this.body.find(".gridBodyTr_" + itemIndex).position().top;
		var trHeight = this.body.find(".gridBodyTr_" + itemIndex).height();

		var scrollHeight = jQuery("#" + cfg.targetID + "_AX_scrollContent").height();
		var bodyHeight = this.body.height() - jQuery("#" + cfg.targetID + "_AX_scrollTrackXY").outerHeight();
		var handleHeight = jQuery("#" + cfg.targetID + "_AX_scrollYHandle").outerHeight();
		var trackHeight = jQuery("#" + cfg.targetID + "_AX_scrollTrackY").height();

		if (trTop.number() + trHeight.number() > bodyHeight) {
			var scrollTop = bodyHeight - (trTop.number() + trHeight.number());
			jQuery("#" + cfg.targetID + "_AX_scrollContent").css({ top: scrollTop });
			this.contentScrollContentSync({ top: scrollTop });
		} else {
			if (trTop.number() == 0) {
				var scrollTop = 0;
				jQuery("#" + cfg.targetID + "_AX_scrollContent").css({ top: scrollTop });
				this.contentScrollContentSync({ top: scrollTop });
			}
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
			var hashs = item.hash.split(/_/g);
			var subTree = this.tree;
			jQuery.each(hashs, function (idx, arg) {
				if (idx == 1) {
					subTree = subTree[this.number()];
				} else if (idx > 1) {
					subTree = subTree.subTree[this.number()];
				}
			});

			var sendObj = {
				index: itemIndex,
				list: this.list,
				item: item,
				subTree: subTree,
				page: this.page
			};
			/*trace(sendObj); */
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
	/* body 영역 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ head & foot 영역  */
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
				page: this.page
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
		var tpo = [];
		var getDataSetFormatterValue = this.getDataSetFormatterValue.bind(this);
		/*dataSet 빈 Key 채우기 */
		jQuery.each(cfg.colGroup, function () {
			if (dataSet[this.key] == undefined) dataSet[this.key] = "";
		});
		/*dataSet 빈 Key 채우기 ~~~~~~~~~~~~~~~~ */
		var hasFixed = this.hasFixed;

		for (var r = 0; r < cfg.head.rows.length; r++) {
			var isLastTR = (cfg.head.rows.length - 1 == r);
			tpo.push("<tr class=\"gridBodyTr gridBodyTr_foot\" id=\"" + cfg.targetID + "_AX_head_" + r + "_AX_" + (isfix || "n") + "\">");
			var colCount = 0;

			jQuery.each(cfg.head.rows[r], function (CHidx, CH) {
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
				tpo.push("<td class=\"bodyNullTd\" id=\"" + cfg.targetID + "_AX_headnull\" rowspan=\"" + cfg.head.rows.length + "\"><div class=\"tdRelBlock\">&nbsp;</div></td>");
			}
			tpo.push("</tr>");
		}
		return tpo.join('');
	},
	getFootDataSet: function (dataSet, isfix) {
		var cfg = this.config;
		var tpo = [];
		var getDataSetFormatterValue = this.getDataSetFormatterValue.bind(this);
		/*dataSet 빈 Key 채우기 */
		jQuery.each(cfg.colGroup, function () {
			if (dataSet[this.key] == undefined) dataSet[this.key] = "";
		});
		/*dataSet 빈 Key 채우기 ~~~~~~~~~~~~~~~~ */
		var hasFixed = this.hasFixed;

		for (var r = 0; r < cfg.foot.rows.length; r++) {
			var isLastTR = (cfg.foot.rows.length - 1 == r);
			tpo.push("<tr class=\"gridBodyTr gridBodyTr_foot\" id=\"" + cfg.targetID + "_AX_foot_" + r + "_AX_" + (isfix || "n") + "\">");
			var colCount = 0;

			jQuery.each(cfg.foot.rows[r], function (CHidx, CH) {
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
			if (jQuery.isPlainObject(obj)) {
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
		jQuery("#" + cfg.targetID + "_AX_thead").html(po.join(''));
		if (this.hasFixed) {
			po = [];
			po.push(getDataSet(this.dataSet, "fix"));
			jQuery("#" + cfg.targetID + "_AX_fixedThead").html(po.join(''));
		}
	},
	printFoot: function () {
		var cfg = this.config;
		var getDataSet = this.getFootDataSet.bind(this);
		var po = [];
		po.push(getDataSet(this.dataSet));
		jQuery("#" + cfg.targetID + "_AX_tfoot").html(po.join(''));
		if (this.hasFixed) {
			po = [];
			po.push(getDataSet(this.dataSet, "fix"));
			jQuery("#" + cfg.targetID + "_AX_fixedTfoot").html(po.join(''));
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
				page: this.page
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
				if (jQuery.isArray(value)) {
					return value;
				} else {
					return (value || "").dec();
				}
			} else if (jQuery.isFunction(formvalue)) {
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
			jQuery.each(form.options, function () {
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
			jQuery.each(form.options, function (oidx, opt) {
				result.push("<input type=\"radio\" id=\"" + formID + "_AX_" + oidx + "\" name=\"" + key + "\" value=\"" + this.value + "\"");
				if (formValue == this.value) result.push(" checked=\"checked\"");
				result.push("><label for=\"" + formID + "_AX_" + oidx + "\">" + this.text.dec() + "</label><br/>");
			});
		} else if (form.type == "checkbox") {
			var formValue = getFormValue(form.value, dataSet[key]);
			jQuery.each(form.options, function (oidx, opt) {
				result.push("<input type=\"checkbox\" id=\"" + formID + "_AX_" + oidx + "\" name=\"" + key + "\" value=\"" + this.value + "\"");
				if (jQuery.isArray(formValue)) {
					var isChecked = false;
					var _value = this.value;
					jQuery.each(formValue, function () {
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

			jQuery.each(cfg.editor.rows[r], function (CHidx, CH) {
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
						tpo.push("<div class=\"tdRelBlock\">");
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
						tpo.push("</div>");
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
		var cfg = this.config;

		if (!this.hasEditor) {
			alert("setConfig 에 editor 가 설정 되지 않아 요청을 처리 할 수 없습니다.");
			return;
		}
		this.unbindAXbind();

		var dataSet;
		if (item) {
			dataSet = item;
		}
		/*dataSet 빈 Key 채우기 */
		jQuery.each(cfg.colGroup, function () {
			if (dataSet[this.key] == undefined) dataSet[this.key] = "";
		});
		/*dataSet 빈 Key 채우기 ~~~~~~~~~~~~~~~~ */

		/*setEditor */
		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_editorContent\" class=\"editorContent\">");
		po.push("<table cellpadding=\"0\" cellspacing=\"0\" class=\"gridBodyTable\" style=\"\">");
		po.push(this.getColGroup("EB")); /*colGroup 삽입 */
		po.push("<tbody id=\"" + cfg.targetID + "_AX_editor_AX_tbody\">");
		po.push(this.getEditorBody(dataSet));
		po.push("</tbody>");
		po.push("</table>");
		po.push("</div>");
		if (this.hasFixed) {
			po.push("<div id=\"" + cfg.targetID + "_AX_fixedEditorContent\" class=\"fixedEditorContent\" style=\"width:" + this.fixedColWidth + "px;\">");
			po.push("<table cellpadding=\"0\" cellspacing=\"0\" class=\"gridFixedBodyTable\" style=\"width:" + this.fixedColWidth + "px;\">");
			po.push(this.getColGroup("FE")); /*colGroup 삽입 */
			po.push("<tbody id=\"" + cfg.targetID + "_AX_editor__AX_fixedTbody\">");
			po.push(this.getEditorBody(dataSet, "fix"));
			po.push("</tbody>");
			po.push("</table>");
			po.push("</div>");
		}
		po.push("<div id=\"" + cfg.targetID + "_AX_editorButtons\" class=\"editorButtons\">");
		po.push("	<input type=\"button\" id=\"" + cfg.targetID + "_AX_editorButtons_AX_save\" value=\"Save\" class=\"AXButton Classic\" />");
		po.push("	<input type=\"button\" id=\"" + cfg.targetID + "_AX_editorButtons_AX_cancel\" value=\"Cancel\" class=\"AXButton\" />");
		po.push("</div>");
		this.editor.html(po.join(''));

		if (itemIndex != undefined) {

			var scrollTop = jQuery("#" + cfg.targetID + "_AX_scrollContent").position().top;
			var editorTop = jQuery("#" + cfg.targetID + "_AX_tr_0_AX_n_AX_" + itemIndex).position().top;
			var list = this.list;
			var itemTRheight = (function () {
				if (list.length == 0) {
					return 0;
				} else if (list.length == 1) {
					var p2 = jQuery("#" + cfg.targetID + "_AX_tr_0_AX_n_AX_" + itemIndex).height();
					return p2;
				} else if ((list.length - 1) == itemIndex) {
					var p1 = jQuery("#" + cfg.targetID + "_AX_tr_0_AX_n_AX_" + (itemIndex - 1)).position().top;
					var p2 = jQuery("#" + cfg.targetID + "_AX_tr_0_AX_n_AX_" + itemIndex).position().top;
					return p2 - p1;
				} else {
					var p1 = jQuery("#" + cfg.targetID + "_AX_tr_0_AX_n_AX_" + (itemIndex)).position().top;
					var p2 = jQuery("#" + cfg.targetID + "_AX_tr_0_AX_n_AX_" + (itemIndex.number() + 1)).position().top;
					return p2 - p1;
				}
			})();
			this.editor.css({ top: editorTop + scrollTop });
			this.editorOpend = true;
			this.editorOpenTop = editorTop;
			this.editorItemIndex = itemIndex;

		} else if (insertIndex != undefined) {

			var scrollTop = jQuery("#" + cfg.targetID + "_AX_scrollContent").position().top;
			var editorTop = jQuery("#" + cfg.targetID + "_AX_tr_0_AX_n_AX_" + insertIndex).position().top;
			var list = this.list;
			var itemTRheight = (function () {
				if (list.length == 0) {
					return 0;
				} else if (list.length == 1) {
					var p2 = jQuery("#" + cfg.targetID + "_AX_tr_0_AX_n_AX_" + insertIndex).height();
					return p2;
				} else if ((list.length - 1) == itemIndex) {
					var p1 = jQuery("#" + cfg.targetID + "_AX_tr_0_AX_n_AX_" + (insertIndex - 1)).position().top;
					var p2 = jQuery("#" + cfg.targetID + "_AX_tr_0_AX_n_AX_" + insertIndex).position().top;
					return p2 - p1;
				} else {
					var p1 = jQuery("#" + cfg.targetID + "_AX_tr_0_AX_n_AX_" + (insertIndex)).position().top;
					var p2 = (jQuery("#" + cfg.targetID + "_AX_tr_0_AX_n_AX_" + (insertIndex.number() + 1)).position() || 0).top;
					return p2 - p1;
				}
			})();
			this.editor.css({ top: editorTop + scrollTop });
			this.editorOpend = true;
			this.editorOpenTop = editorTop;
			this.editorInsertIndex = insertIndex;

			var trTop = -editorTop; /*this.body.find(".gridBodyTr_" + insertIndex).position().top; */
			jQuery("#" + cfg.targetID + "_AX_scrollContent").css({ top: trTop });
			this.contentScrollContentSync({ top: trTop });

		} else {

			var editorTop = 0;
			var itemTRheight = 0;
			this.editor.css({ top: 0 });
			this.editorOpend = true;
			this.editorOpenTop = editorTop;
			this.editorItemIndex = null;
			jQuery("#" + cfg.targetID + "_AX_scrollContent").css({ top: 0 });
			this.contentScrollContentSync({ top: 0 });

		}

		jQuery("#" + cfg.targetID + "_AX_scrollTrackXY").before(this.editor);
		this.editor.show();
		this.editor.find("input[type=text],textarea").bind("mousedown", function () { this.focus(); });

		/* form item bind AX */
		for (var r = 0; r < cfg.editor.rows.length; r++) {
			jQuery.each(cfg.editor.rows[r], function (CHidx, CH) {
				if (CH.display && CH.colspan > 0) {
					var formID = "";
					if (CH.AXBind) {
						formID = (CH.form.id) ? CH.form.id : cfg.targetID + "_AX_" + CH.key + "_AX_" + r + "_AX_" + CHidx;
						if (CH.AXBind.type == "number" && CH.form.type == "text") {
							/*jQuery("#"+formID).unbindInput(); */
							jQuery("#" + formID).bindNumber((CH.AXBind.config || {}));
						} else if (CH.AXBind.type == "money" && CH.form.type == "text") {
							/*jQuery("#"+formID).unbindInput(); */
							jQuery("#" + formID).bindMoney((CH.AXBind.config || {}));
						} else if (CH.AXBind.type == "selector" && CH.form.type == "text") {
							/*jQuery("#"+formID).unbindInput(); */
							jQuery("#" + formID).bindSelector((CH.AXBind.config || {}));
						} else if (CH.AXBind.type == "slider" && CH.form.type == "text") {
							/*jQuery("#"+formID).unbindInput(); */
							jQuery("#" + formID).bindSlider((CH.AXBind.config || {}));
						} else if (CH.AXBind.type == "slider" && CH.form.type == "text") {
							/*jQuery("#"+formID).unbindInput(); */
							jQuery("#" + formID).bindSlider((CH.AXBind.config || {}));
						} else if (CH.AXBind.type == "twinSlider" && CH.form.type == "text") {
							/*jQuery("#"+formID).unbindInput(); */
							jQuery("#" + formID).bindTwinSlider((CH.AXBind.config || {}));
						} else if (CH.AXBind.type == "date" && CH.form.type == "text") {
							/*jQuery("#"+formID).unbindInput(); */
							jQuery("#" + formID).bindDate((CH.AXBind.config || {}));
						} else if (CH.AXBind.type == "twinDate" && CH.form.type == "text") {
							/*jQuery("#"+formID).unbindInput(); */
							jQuery("#" + formID).bindTwinDate((CH.AXBind.config || {}));
						} else if (CH.AXBind.type == "dateTime" && CH.form.type == "text") {
							/*jQuery("#"+formID).unbindInput(); */
							jQuery("#" + formID).bindDateTime((CH.AXBind.config || {}));
						} else if (CH.AXBind.type == "switch" && CH.form.type == "text") {
							/*jQuery("#"+formID).unbindInput(); */
							jQuery("#" + formID).bindSwitch((CH.AXBind.config || {}));
						} else if (CH.AXBind.type == "select" && CH.form.type == "select") {
							/*jQuery("#"+formID).unbindSelect(); */
							jQuery("#" + formID).bindSelect((CH.AXBind.config || {}));
						}
					}
					if (CH.form) {
						formID = (CH.form.id) ? CH.form.id : cfg.targetID + "_AX_" + CH.key + "_AX_" + r + "_AX_" + CHidx;
						if (CH.form.onChange) {
							jQuery("#" + formID).bind("change", function () {
								CH.form.onChange.call({
									key: CH.key,
									position: CHidx,
									value: jQuery("#" + formID).val(),
									text: AXgetId(formID).options[AXgetId(formID).options.selectedIndex].text
								});
							});
						}
						if (CH.form.onClick) {
							jQuery("#" + formID).bind("click", function () {
								CH.form.onClick.call({
									key: CH.key,
									position: CHidx,
									value: jQuery("#" + formID).val()
								});
							});
						}
						if (CH.form.onBlur) {
							jQuery("#" + formID).bind("blur", function () {
								CH.form.onBlur.call({
									key: CH.key,
									position: CHidx,
									value: jQuery("#" + formID).val()
								});
							});
						}
						if (CH.form.onFocus) {
							jQuery("#" + formID).bind("focus", function () {
								CH.form.onFocus.call({
									key: CH.key,
									position: CHidx,
									value: jQuery("#" + formID).val()
								});
							});
						}
					}
				}
			});
		}

		var editorContentHeight = jQuery("#" + cfg.targetID + "_AX_editorContent").height();
		var fixedEditorContentHeight = jQuery("#" + cfg.targetID + "_AX_fixedEditorContent").height();
		if (editorContentHeight < fixedEditorContentHeight) {
			editorContentHeight = fixedEditorContentHeight;
			jQuery("#" + cfg.targetID + "_AX_editorContent").find(".gridBodyTable").css({ height: editorContentHeight });
		} else {
			jQuery("#" + cfg.targetID + "_AX_fixedEditorContent").find(".gridFixedBodyTable").css({ height: editorContentHeight });
		}
		jQuery("#" + cfg.targetID + "_AX_editorButtons").css({ top: editorContentHeight });
		this.editor.css({ height: (editorContentHeight.number() + 40) });
		var editorBoxHeight = (editorContentHeight.number() + 40);

		if (itemTRheight > editorContentHeight) {
			editorContentHeight = itemTRheight;
			jQuery("#" + cfg.targetID + "_AX_editorContent").find(".gridBodyTable").css({ height: editorContentHeight });
			jQuery("#" + cfg.targetID + "_AX_fixedEditorContent").find(".gridFixedBodyTable").css({ height: editorContentHeight });
			this.editor.css({ height: (editorContentHeight.number() + 40) });
			jQuery("#" + cfg.targetID + "_AX_editorButtons").css({ top: editorContentHeight });
		}

		/* editor 에 따른 scrollContent 높이 조정 */
		var editorPosHeight = editorTop + this.editor.height();
		var scrollHeight = jQuery("#" + cfg.targetID + "_AX_scrollContent").height();

		if (editorPosHeight > scrollHeight) {
			jQuery("#" + cfg.targetID + "_AX_scrollContent").append("<div style=\"height:" + (editorPosHeight - scrollHeight) + "px;\"></div>");
			var scrollContentTop = jQuery("#" + cfg.targetID + "_AX_scrollContent").position().top - (editorPosHeight - scrollHeight);
			this.contentScrollYAttr = null;
			this.contentScrollResize(false);
		}

		var scrollLeft = jQuery("#" + cfg.targetID + "_AX_scrollContent").position().left;
		jQuery("#" + cfg.targetID + "_AX_editorContent").css({ left: scrollLeft });

		jQuery("#" + cfg.targetID + "_AX_editorButtons_AX_save").bind("click", this.saveEditor.bind(this));
		jQuery("#" + cfg.targetID + "_AX_editorButtons_AX_cancel").bind("click", this.cancelEditor.bind(this));
	},
	setEditorForm: function (obj) {
		var cfg = this.config;
		var formID = cfg.targetID + "_AX_" + obj.key + "_AX_" + obj.position.join("_AX_");
		if (!AXgetId(formID)) alert(formID + "로 Element를 찾을 수 없습니다.");
		jQuery("#" + formID).val(obj.value);
	},
	saveEditor: function () {
		var cfg = this.config;

		var editorFormItem = [];
		if (this.editorItemIndex == null) {
			editorFormItem.push("requestType=new");
		} else {
			editorFormItem.push("requestType=edit");
		}

		for (var r = 0; r < cfg.editor.rows.length; r++) {
			jQuery.each(cfg.editor.rows[r], function (CHidx, CH) {
				if (CH.form) {
					var formID = (CH.form.id) ? CH.form.id : cfg.targetID + "_AX_" + CH.key + "_AX_" + r + "_AX_" + CHidx;
					if (CH.form.type == "radio") {
						var checkedValue = [];
						jQuery.each(CH.form.options, function (oidx, opt) {
							var opt_formID = formID + "_AX_" + oidx;
							if (jQuery("#" + opt_formID).get(0).checked) editorFormItem.push(CH.key + "=" + jQuery("#" + opt_formID).val());
						});
					} else if (CH.form.type == "checkbox") {
						var checkedValue = [];
						jQuery.each(CH.form.options, function (oidx, opt) {
							var opt_formID = formID + "_AX_" + oidx;
							if (jQuery("#" + opt_formID).get(0).checked) editorFormItem.push(CH.key + "=" + jQuery("#" + opt_formID).val());
							else editorFormItem.push(CH.key + "=");
						});
					} else if (CH.form.type == "select") {
						if (CH.form.value == "itemText") {
							editorFormItem.push(CH.key + "=" + AXgetId(formID).options[AXgetId(formID).options.selectedIndex].text);
						} else {
							editorFormItem.push(CH.key + "=" + jQuery("#" + formID).val());
						}
					} else {
						editorFormItem.push(CH.key + "=" + jQuery("#" + formID).val());
					}
				} else {
					var formID = cfg.targetID + "_AX_" + CH.key + "_AX_" + r + "_AX_" + CHidx;
					if (AXgetId(formID)) {
						editorFormItem.push(CH.key + "=" + jQuery("#" + formID).val());
					}
				}
			});
		}

		/* form validate -- s */
		var validate = function (formID, CH) {
			var checkedValues = [];
			var value;

			if (CH.form.type == "radio") {
				jQuery.each(CH.form.options, function (oidx, opt) {
					var opt_formID = formID + "_AX_" + oidx;
					if (jQuery("#" + opt_formID).get(0).checked) checkedValues.push(jQuery("#" + opt_formID).val());
				});
				value = checkedValue.join(",");
			} else if (CH.form.type == "checkbox") {
				jQuery.each(CH.form.options, function (oidx, opt) {
					var opt_formID = formID + "_AX_" + oidx;
					if (jQuery("#" + opt_formID).get(0).checked) checkedValues.push(jQuery("#" + opt_formID).val());
					else checkedValues.push(CH.key + "=");
				});
				value = checkedValue.join(",");
			} else if (CH.form.type == "select") {
				if (CH.form.value == "itemText") {
					value = AXgetId(formID).options[AXgetId(formID).options.selectedIndex].text;
				} else {
					value = jQuery("#" + formID).val();
				}
			} else {
				value = jQuery("#" + formID).val().trim();
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
			trace(cfg.editor.rows[r]);
			jQuery.each(cfg.editor.rows[r], function (CHidx, CH) {
				if (CH.form) {
					if (CH.form.validate) {
						var formID = (CH.form.id) ? CH.form.id : cfg.targetID + "_AX_" + CH.key + "_AX_" + r + "_AX_" + CHidx;
						var result = validate(formID, CH);
						if (!result) {
							validateError = true;
							jQuery("#" + formID).focus();
						}
					}
				}
			});
		}

		if (validateError) {
			return;
		}
		/* form validate -- e */

		this.unbindAXbind();

		if (cfg.editor.request) {
			
			var po = [];
			po.push("<div class=\"editorContent\" style=\"background:#fff;\">");
			po.push("<div class=\"AXLoading\"></div>");
			po.push("</div>");
			this.editor.html(po.join(''));

			var saveEditorRequest = this.saveEditorRequest.bind(this);
			var cancelEditor = this.cancelEditor.bind(this);
			var url = cfg.editor.request.ajaxUrl;
			var pars = (cfg.editor.request.ajaxPars) ? cfg.editor.request.ajaxPars + "&" + editorFormItem.join('&') : editorFormItem.join('&');

			new AXReq(url, {
				debug: false, pars: pars, onsucc: function (res) {
					if (res.result == AXConfig.AXReq.okCode) {
						saveEditorRequest(res);
					} else {
						toast.push({ body: res.msg.dec(), type: "Caution" });
						cancelEditor();
					}
				}
			});

			return;

		} else {

			var po = [];
			po.push("<div class=\"editorContent\" style=\"background:#fff;\">");
			po.push("<div class=\"AXLoading\"></div>");
			po.push("</div>");
			this.editor.html(po.join(''));

			var saveEditorRequest = this.saveEditorRequest.bind(this);
			var cancelEditor = this.cancelEditor.bind(this);
			saveEditorRequest({ item: editorFormItem.join('&').queryToObject() });

			/*
			this.editor.hide();
			this.editorOpend = false;
			*/
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
				cfg.editor.response.call(sendObj, this.editorItemIndex);
			} else {
				if (this.editorItemIndex != null && this.editorItemIndex != undefined) {
					AXUtil.overwriteObject(this.list[this.editorItemIndex], res.item, true);
					this.updateList(this.editorItemIndex, this.list[this.editorItemIndex]);
				} else if (this.editorInsertIndex != null && this.editorInsertIndex != undefined) {
					this.pushList(res.item, this.editorInsertIndex);
				} else {
					this.pushList(res.item);
				}
			}

			this.editorItemIndex = null;
			this.editorInsertIndex = null;
			this.editor.hide();
			this.editorOpend = false;
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
				jQuery.each(cfg.editor.rows[r], function (CHidx, CH) {
					if (CH.display && CH.colspan > 0) {

						if (CH.AXBind) {
							var formID = (CH.form.id) ? CH.form.id : cfg.targetID + "_AX_" + CH.key + "_AX_" + r + "_AX_" + CHidx;
							/*trace(formID); */
							if (CH.AXBind.type == "number" && CH.form.type == "text") {
								jQuery("#" + formID).unbindInput();
							} else if (CH.AXBind.type == "money" && CH.form.type == "text") {
								jQuery("#" + formID).unbindInput();
							} else if (CH.AXBind.type == "selector" && CH.form.type == "text") {
								jQuery("#" + formID).unbindInput();
							} else if (CH.AXBind.type == "slider" && CH.form.type == "text") {
								jQuery("#" + formID).unbindInput();
							} else if (CH.AXBind.type == "twinSlider" && CH.form.type == "text") {
								jQuery("#" + formID).unbindInput();
							} else if (CH.AXBind.type == "date" && CH.form.type == "text") {
								jQuery("#" + formID).unbindInput();
							} else if (CH.AXBind.type == "twinDate" && CH.form.type == "text") {
								jQuery("#" + formID).unbindInput();
							} else if (CH.AXBind.type == "dateTime" && CH.form.type == "text") {
								jQuery("#" + formID).unbindInput();
							} else if (CH.AXBind.type == "switch" && CH.form.type == "text") {
								jQuery("#" + formID).unbindInput();
							} else if (CH.AXBind.type == "select" && CH.form.type == "select") {
								jQuery("#" + formID).unbindSelect();
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
		this.setEditor(item, null, insertIndex);
	},
	/* editor 영역 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

	setPaging: function () {
		var cfg = this.config;
		/* apply page vars */
		var pageNos = AXgetId(cfg.targetID + "_AX_gridPageNo");
		var pgCount = this.page.pageCount.number();
		var pageNo = this.page.pageNo.number();

		if (pgCount == 0) {
			var po = [];
			po.push("<option value=\"\">..</option>");
			jQuery("#" + cfg.targetID + "_AX_gridPageNo").html(po.join(''));
		} else {
			jQuery("#" + cfg.targetID + "_AX_gridPageNo").html("");
			var mySelect = AXgetId(cfg.targetID + "_AX_gridPageNo");
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
			/*alert(AXgetId(cfg.targetID + "_AX_gridPageNo").options[AXgetId(cfg.targetID + "_AX_gridPageNo").options.selectedIndex].value); */
		}
		jQuery("#" + cfg.targetID + "_AX_gridPageCount").html("/ " + pgCount.money() + " Pages");
		jQuery("#" + cfg.targetID + "_AX_gridStatus").html("전체 <b>" + this.page.listCount.number().money() + "</b>개의 목록이 있습니다.");

		if (this.isMobile) {
			jQuery("#" + cfg.targetID + "_AX_gridPageNo").bind("change", this.onPageChange.bind(this));
		} else {
			var onPageChange = this.onPageChange.bind(this);
			jQuery("#" + cfg.targetID + "_AX_gridPageNo").bindSelect({
				onChange: function (arg) {
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

		if (this.isMobile) {
			jQuery("#" + cfg.targetID + "_AX_gridPageNo").val(pageNo);
			this.onPageChange();
		} else {
			jQuery("#" + cfg.targetID + "_AX_gridPageNo").setValueSelect(pageNo);
		}
		/*this.page.pageNo = pageNo; */
		/*this.onPageChange(); bindSelectSetValue 시 자동 호출되는 구조 */
	},
	onPageChange: function () {
		var cfg = this.config;
		var pgCount = this.page.pageCount.number();
		var pageNo = this.page.pageNo.number();
		var npageNo = jQuery("#" + cfg.targetID + "_AX_gridPageNo").val();
		this.page.pageNo = npageNo;

		/*스크롤 위치 변경 */
		var scrollTop = 0;
		jQuery("#" + cfg.targetID + "_AX_scrollContent").css({ top: scrollTop });
		this.contentScrollContentSync({ top: scrollTop });

		/*alert(this.pageActive); */
		/*alert(this.ajaxInfo); */

		if (this.pageActive && this.ajaxInfo) {
			this.setList(this.ajaxInfo);
			this.contentScrollResize();
		}
	},
	setStatus: function (listLength) {
		var cfg = this.config;
		var page; if (this.page) page = this.page;
		var listCount = (page.listCount || listLength);
		jQuery("#" + cfg.targetID + "_AX_gridStatus").html("전체 <b>" + listCount.number().money() + "</b>개의 목록이 있습니다.");
	},
	getSortParam: function (ty) {
		var cfg = this.config;
		var sortObj = this.nowSortHeadObj;
		if (sortObj) {
			if (ty == "one") {
				return "sortBy=" + sortObj.key + " " + sortObj.sort;
			} else {
				return jQuery.param({ sortKey: sortObj.key, sortWay: sortObj.sort });
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
			jQuery.each(cfg.body.rows[r], function (CHidx, CH) {
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
			jQuery.each(cfg.body.marker.rows[r], function (CHidx, CH) {
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
		var tpo = [];
		var getDataSetFormatterValue = this.getDataSetFormatterValue.bind(this);
		/*dataSet 빈 Key 채우기 */
		jQuery.each(cfg.colGroup, function () {
			if (dataSet[this.key] == undefined) dataSet[this.key] = "";
		});
		/*dataSet 빈 Key 채우기 ~~~~~~~~~~~~~~~~ */

		for (var r = 0; r < cfg.head.rows.length; r++) {
			var isLastTR = (cfg.head.rows.length - 1 == r);
			tpo.push("<tr>");
			var colCount = 0;

			jQuery.each(cfg.head.rows[r], function (CHidx, CH) {
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
		var tpo = [];
		var getDataSetFormatterValue = this.getDataSetFormatterValue.bind(this);
		/*dataSet 빈 Key 채우기 */
		jQuery.each(cfg.colGroup, function () {
			if (dataSet[this.key] == undefined) dataSet[this.key] = "";
		});
		/*dataSet 빈 Key 채우기 ~~~~~~~~~~~~~~~~ */
		var hasFixed = this.hasFixed;

		for (var r = 0; r < cfg.foot.rows.length; r++) {
			var isLastTR = (cfg.foot.rows.length - 1 == r);
			tpo.push("<tr>");
			var colCount = 0;

			jQuery.each(cfg.foot.rows[r], function (CHidx, CH) {
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
				jQuery.each(cfg.colHead.rows[r], function (CHidx, CH) {
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

			jQuery.each(this.list, function (itemIndex, item) {
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
		
	}
});
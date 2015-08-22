
/**
 * AXGrid
 * @class AXGrid
 * @extends AXJ
 * @version v4.3.6
 * @author tom@axisj.com
 * @logs
 "2012-12-24 오전 11:51:26",
 "2013 로그 삭제"
 "2014 로그 삭제"
 "2015-01-02 tom : 그리드 ctrl, shift 키를 이용한 멀티 셀렉트 지원, getSelectedItem 메소드 변경"
 "2015-01-05 tom : config.sort : false 로 정렬 사용 안할 수 있도록 변경"
 "2015-01-08 tom : editor.request 에서 method 조작할 수 있도록 확장"
 "2015-01-08 tom : inline edit 기능 추가 (text, number, money, calendar)"
 "2015-01-08 tom : focusMove 메소드 reserveKeys.hidden 값이 히든인 list item 건너뛰기 기능 구현"
 "2015-01-13 tom : editor response에 onerr 상황도 전달 되도록 변경/ list data 가 boolean 일때 버그 예외처리"
 "2015-01-14 tom : x wheel scroll 지원 / checkedColSeq 메소드 formatter:radio일 때 버그 픽스 / https://github.com/axisj-com/axisj/issues/388 서버에서 listCount를 정하지 않으면 list.length로 표시 되도록 변경"
 "2015-01-15 tom : wheel scroll 버그 픽스"
 "2015-01-20 tom : checkedColSeq 버그 픽스"
 "2015-01-21 tom : mobile 모드에서 전용 contenxtmenu 연결"
 "2015-01-21 tom : updateItem 버그 픽스"
 "2015-01-22 tom : setList에서 onerr 속성 추가"
 "2015-01-28 tom : editCell메소드 수정 colGroup[0].editor.type:finder일 때 에디팅 방식 변경
 "2015-01-30 tom : https://github.com/axisj-com/axisj/issues/399(틀 고정일때 mergeCells 높이 수정) / https://github.com/axisj-com/axisj/issues/404(editor.type = "select" 지원)
 "2015-02-02 john : editor.type : readonaly 추가
 "2015-02-03 tom : cell focus 기능 추가
 "2015-02-06 tom : https://github.com/axisj-com/axisj/issues/399(틀 고정일때 mergeCells 높이 수정)
 "2015-02-07 tom : https://github.com/axisj-com/axisj/issues/408 (editor.type=[checkbox|radio] 지원)
 "2015-02-09 tom : inline edit 활성화 상태에서 alt키와 함께 커서를 누르면 인덱스 변경 안하도록 수정"
 "2015-02-13 HJ.Park : getCheckedParams 메서드 추가"
 "2015-02-26 tom : 틀고정 시 틀고정 컬럼헤 수직 정렬 옵션버그 수정"
 "2015-03-03 tom : inline edit 에디트 활성화 상태에서 다른 영역 클릭하면 에디팅 내용 저장 되도록 변경 https://github.com/axisj-com/axisj/issues/428"
 "2015-03-04 tom : https://github.com/axisj-com/axisj/issues/431 ㅊㄹㅇㄹ"
 "2015-03-09 tom : rowspan 적용시 높이 계산법 수정"
 "2015-03-09 https://github.com/axisj-com/axisj/issues/428"
 "2015-03-11 HJ.Park : getList 메서드 추가"
 "2015-03-12 tom : https://github.com/axisj-com/axisj/issues/445 이슈 해결"
 "2015-03-13 tom : pushList, appendList insertIndex 위치 버그 픽스"
 "2015-03-15 HJ.Park : https://github.com/axisj-com/axisj/issues/447 이슈 해결"
 "2015-03-17 KimJM : https://github.com/axisj-com/axisj/issues/419 이슈 관련 수정"
 "2015-03-18 tom : column tool use options [config.colHeadTool, colGroup[0].colHeadTool]"
 "2015-03-19 tom : mergeCells 버그 픽스"
 "2015-03-19 tom : editor > checkbox checked 상태값을 1, "1", true, "Y" 일 때로 수정"
 "2015-03-19 HJ.Park : setHeight 메서드 추가. passiveRemoveHide:true 인 경우 getList가 삭제된 데이터를 반환하지 못하는 버그 수정"
 "2015-03-21 tom : inline editor 'select' type 사용법 보강"
 "2015-03-24 KimJM : https://github.com/axisj-com/axisj/issues/475 버그 관련 수정"
 "2015-03-24 tom : https://github.com/axisj-com/axisj/issues/482 버그 픽스"
 "2015-03-25 KimJM : https://github.com/axisj-com/axisj/issues/483 mergeCells JSON 데이터 순서 영향받는 버그 수정"
 "2015-03-26 KimJM : https://github.com/axisj-com/axisj/issues/493 colHeadAlign 고정값 아닌 설정값 반영하도록 수정 / redrawGrid에서 setColHead 호출 시 colHeadAlign 미반영 버그 수정"
 "2015-03-26 tom : https://github.com/axisj-com/axisj/issues/495 "
 "2015-03-27 HJ.Park : AXGrid remote sort 기능 추가 #496 -> https://github.com/axisj-com/axisj/issues/496"
 "2015-03-27 KimJM : mergeCells list Index 접근 관련 수정"
 "2015-03-30 tom : ondblclick 버그 픽스":
 "2015-03-31 tom : pushList 리스트가 비어있을 때 추가하면 표시되지 않는 현상 수정"
 "2015-04-02 tom : inline edit select, calendar 수정"
 "2015-04-02 tom : mergeCells index 수정"
 "2015-02-03 tom : https://github.com/axisj-com/axisj/issues/512 헤드 체크박스 클릭하면 colGroup > disabled 이상현상 수정"
 "2015-04-06 tom : CG.editor 선언 안한 경우 버그 픽스"
 "2015-04-10 tom : cfg.colGroup[ (cfg.body.rowsEmpty) ? c : (cfg.body.rows[r][c].colSeq||c) ] 구문적용 https://github.com/axisj-com/axisj/issues/518
 "2015-04-13 tom : input, textarea, select에서 keydown 이벤트시 그리드 이벤트 안하도록 패치 https://github.com/axisj-com/axisj/issues/529"
 "2015-04-15 tom : 헤더 정렬 후 윈도우 라사이즈하면 정렬처리문제 패치"
 "2015-04-17 tom : inline-edit combobox 데이터 연결 코드로도 가능하게 변경"
 "2015-04-19 tom : https://github.com/axisj-com/axisj/issues/538 패치 "
 "2015-04-20 tom : inline-edit editor.type 'AXSelect' 지원 "
 "2015-04-21 tom : https://github.com/axisj-com/axisj/issues/539"
 "2015-04-21 tom : dataSync 지연시간 0으로 변경"
 "2015-04-25 tom : getItem item undefined error fix"
 "2015-04-29 tom : setEditor후 appendList 신규 등록 안되는 버그픽스"
 "2015-04-30 tom : 각종 마이너 버그 픽스"
 "2015-05-06 tom : inline editor text maxLength 설정 기능 추가"
 "2015-05-06 tom : inline editor tab event 버그 패치"
 "2015-05-08 tom : 가상스크롤 싱크 속도 조절, list item값이 null, 'null'일 때 빈값 처리"
 "2015-05-08 tom : 초고속스크롤시 아이템 출력이상현상 패치"
 "2015-05-08 tom : removeList 할 때 스크롤 포지션 초기화 현상 패치"
 "2015-05-11 tom : 틀고정옵션 사용하는 그리드, resize 이벤트 처리 후 틀고정 표현 오류 현상 해결"
 "2015-05-12 tom : getExcelFormat filter 지원 기능 추가"
 "2015-05-12 tom : foot 하단 고정 기능 구현 - WOW http://dev.axisj.com/samples/AXGrid/headfoot.html"
 "2015-05-13 root : grid sort 설정값 초기화"
 "2015-05-13 tom : foot 관련 높이 버그 픽스"
 "2015-05-15 HJ.Park : shift 키로 위에서 아래로 선택하는 경우 첫 번째 행이 selectedRow 값에 한 번 더 들어가는 버그 수정, getSelectedItem 메서드에서 아이템값 인덱스를 잘못 가져오는 버그 수정 https://github.com/axisj-com/axisj/issues/562"
 "2015-05-15 tom : https://github.com/axisj-com/axisj/issues/568 키다운 이벤트에 대한 방식 변경 [this.gridFocus.focus() 유지 확인 필수]"
 "2015-05-15 tom : appendList position 버그 패치"
 "2015-05-19 tom : 가로세로 휠 이벤트 stop 구문 개선"
 "2015-05-21 tom : colgroup align 버그 픽스"
 "2015-05-24 tom : 컬럼너비 조정할 때 foot 너비도 함께 조정 "
 "2015-05-29 tom : getExcelFormat filter 버그 픽스 "
 "2015-06-04 HJ.Park : inline editor select 버그 픽스 https://github.com/axisj/axisj/issues/595"
 "2015-06-10 tom : https://github.com/axisj/axisj/issues/603 버그픽스 "
 "2015-06-14 tom : 머지를 잘해야 겠다."
 "2015-06-22 HJ.Park : updateWith 대상이 0번 째 인덱스인 경우 업데이트 하지 않는 버그 수정"
 "2015-06-22 HJ.Park : getList("D")에서 passiveRemoveHide 옵션에 상관없이 removedList에 값이 있으면 무조건 값을 가져오도록 수정"
 "2015-06-23 tom : config.listCountMargin 속성 추가 한화면에 출력될 아이템 갯수 설정 가능하게 변경"
 "2015-06-28 HJ.Park : setFocus로 포커스 이동시 스크롤은 고정인 상황 #631 수정 https://github.com/axisj/axisj/issues/631"
 "2015-07-01 HJ.Park : AXGrid remoteSort 사용시 한글 사용시 버그 수정, ajaxPars object 형식 지원 https://github.com/axisj/axisj/issues/636"
 "2015-07-03 HJ.Park : saveEditor 메서드 내부의 validate 메서드에서 문맥상 오타로 보이는 부분을 발견해서 수정함. checkedValue -> checkedValues"
 "2015-07-23 tom : multimarker marker 지원"
 "2015-07-30 tom : https://github.com/axisj/axisj/issues/675 AXGrid fixedColSeq IE8 버그 픽스"
 "2015-07-31 tom : 휠 스크롤 포지션 정밀 수정"
 "2015-07-31 tom : foot 컬럼 rowspan 기능 추가 / inline edit 중 pushList 호출되면 지연처리 토록 변경"
 "2015-07-31 tom : inline edit checkbox/radio td 선택해도 작동하도록 보강"
 "2015-07-31 HJ.Park : formatter 사용자 정의 추가 가능하도록 구조 변경"
 "2015-07-31 HJ.Park : updateItem 메서드에서 아이템의 값이 변경된 경우만 _CUD의 값을 'U'로 업데이트 하도록 수정"
 "2015-07-31 HJ.Park : updateItem 메서드에서 editor가 money인 경우 값을 number로 변환"
 "2015-08-03 HJ.Park : editor 사용자 정의 추가 가능하도록 구조 변경"
 "2015-08-03 tom : setFocus 0 버그픽스"
 "2015-08-04 tom : fixed 적용된 컬럼의 헤드 높이 버그 픽스"
 "2015-08-05 HJ.Park : editor.type: 'select' formatter 구현. editor.type과 formatter의 이름이 같으면 해당 formatter를 그냥 사용하도록 로직 추가. TODO AXSelect 및 기타 컴포넌트 추가 해야함"
 "2015-08-06 tom : cfg.colHead.heights = [] 로 헤드의 각 줄별 높이 설정 기능 추가 "
 "2015-08-10 tom : editor.textType 확장 input type='[textType]' "
 "2015-08-13 HJ.Park : fixedColSeq 설정시 formatterLabel이 표현되지 않는 문제 수정완료 https://github.com/axisj/axisj/issues/686"
 * @example
 *```
 * var myGrid = new AXGrid();
 * myGrid.setConfig(classConfig:JSObject);
 *```
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
		this.config.colHeadTool = true;
		this.config.xscroll = true;
		this.config.fitToWidth = (AXConfig.AXGrid.fitToWidth || false);
		this.config.fitToWidthRightMargin = (AXConfig.AXGrid.fitToWidthRightMargin || 10);
		this.config.passiveMode = AXConfig.AXGrid.passiveMode;
		this.config.passiveRemoveHide = AXConfig.AXGrid.passiveRemoveHide;
		this.config.scrollContentBottomMargin = "10";
		this.config.listCountMargin = 12;
		this.config.headTdHeight = (AXConfig.AXGrid.headTdHeight || 30);
		
		this.config.mergeCells = false; // cells merge option
		this.config.control_lock_status = 0; // 0 : 모든 기능 사용가능, 1: 컨트롤(데이터는 변경가능하지만 내부 속성변경 금지), 2: 컨트롤+update(데이터와 속성 모두 변경 금지)
		this.selectedCells = [];
		this.selectedRow = [];
		this.copiedRow = [];
		this.clipBoard = {
			type:"copy", list:[]
		};
		
		this.isMobile = AXUtil.browser.mobile;
		this.cachedDom = {};
		this.virtualScroll = {
			startIndex : 0,
			endIndex : 0,
			itemTrHeight: 0,
			printListCount: 0,
			scrollTop: 0
		};
		this.reserveKeys = {
			// 시스템 설정 키들 -- s
			parent_hash  : "phash",
			child_hash   : "hash",
			sub_list     : "list",
			hidden       : "_hidden"
		};
		
		this.config.resizeable = true; // 2016-06-12 reisze 안되는 옵션 추가. 
		
		this.mobileContextMenu = new AXContextMenuClass();
		
		window.AXGrid_instances = window.AXGrid_instances || [];
		window.AXGrid_instances.push(this);
	},
	/* 공통 영역 */
	defineConfig: function (rewrite) {
		var cfg = this.config;
		if(!cfg.colGroup) return;
		if (cfg.colGroup.length == 0) {
			console.log("colGrpup is empty)");
			return;
		}
		
		/* col너비 합계 구하기 */
		var colWidth = 0;
		var hasHiddenCell = false;
		var showColLen = 0;
		if (!rewrite) this.fixedColSeq = cfg.fixedColSeq;
		var bodyWidth = this.body.width();
		if(bodyWidth == 0) bodyWidth = this.target.innerWidth();
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
				
				if(typeof CG._owidth == "undefined") CG._owidth = CG.width;
				colWidth += (CG._owidth || 0).number();
				showColLen += 1;
			} else {
				hasHiddenCell = true;
				if (!rewrite) {
					CG._owidth = CG.width;
					/* 최초의 너비값 기억 하기 */
				}
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
		}
		else
		{
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
					if (CG.display) {
						CG.width = (CG._owidth * zoomRatio).ceil();
						if (_bodyWidth > CG.width) _bodyWidth -= CG.width;
						else CG.width = _bodyWidth;
						colWidth += CG.width.number();
					}
				}
				this.colWidth = colWidth;
			}
			else
			{
				
				colWidth = 0;
				for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
					if (CG.display) {
						if (CG._owidth == undefined) CG._owidth = (CG.width || 0).number();
						CG.width = CG._owidth.number();
						colWidth += CG.width.number();
					}
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
					if (typeof CH.align == "undefined" && cfg.colHeadAlign) CH.align = cfg.colHeadAlign; // 고정값 아닌 설정 값 가져오기
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
							//console.log(CH, myCG);
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
			//trace(cfg.colHead.rows);
			/*console.log(cfg.colHead._maps);  //_maps check */
			/* colHeadRow 정해진 경우 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
		}
		else
		{
			// colHeadRow 정해지지 않은 경우
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
					colHeadTool: ((typeof CG.colHeadTool == "undefined") ? cfg.colHeadTool : CG.colHeadTool ),
					tooltip: CG.tooltip,
					displayLabel: (CG.displayLabel || false),
					addClass: CG.addClass
				};
				if(cfg._colHead_rows) adder.sort = cfg._colHead_rows[0][cidx].sort; // redrawGrid 호출된 경우 예외처리
				colHeadRows[0].push(adder);
				cfg.colHead._maps[0].push({ r: 0, c: cidx });
			}
			cfg.colHead.rows = colHeadRows;
			cfg.colHead.rowsEmpty = true;
			// colHeadRow 정해지지 않은 경우 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
		}
		else
		{
			/* bodyRow 정해지지 않은 경우 */
			cfg.body._maps = [
				[]
			];
			var bodyRows = [
				[]
			];
			for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
				var adder = {
					key: CG.key, colSeq: CG.colSeq, label: CG.label, align: (CG.align || "left"), rowspan: 1, colspan: 1, valign: (CG.valign || "middle"), isLastCell: true,
					display: CG.display, checked: CG.checked, disabled: CG.disabled, formatter: CG.formatter, editor: CG.editor, formatterLabel:CG.formatterLabel,
					tooltip: CG.tooltip, addClass: CG.addClass
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
			cfg.body.marker = [].concat(cfg.body.marker);
			/* colEndPosition 관련 처리 함수 */
			
			var appendPosToMarkerMap = function (r, c, posR, position, marker) {
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
								if (marker._maps[rr][nC] == undefined) {
									marker._maps[rr][nC] = position;
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
			
			for(var m=0, l=cfg.body.marker.length, marker;m<l;m++){
				marker = cfg.body.marker[m];
				
				if (marker.rows) {
					this.bodyHasMarker = true;
					marker._maps = new Array(marker.rows.length);
					colMaxLen = 0;
					for (var r = 0; r < marker.rows.length; r++) {
						var colLen = 0;
						for (var CH, CHidx = 0, __arr = marker.rows[r]; (CHidx < __arr.length && (CH = __arr[CHidx])); CHidx++) {
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
					for (var _m = 0; _m < marker._maps.length; _m++) {
						marker._maps[_m] = new Array(colMaxLen);
					}
					
					for (var r = 0; r < marker.rows.length; r++) {
						for (var CH, CHidx = 0, __arr = marker.rows[r]; (CHidx < __arr.length && (CH = __arr[CHidx])); CHidx++) {
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
							appendPosToMarkerMap(CH.rowspan, CH.colspan, r, { r: r, c: CHidx }, marker);
						}
						
					}
					/*colHead._maps 마지막 줄에 해당하는 cfg.colHead.rows 에 속성부여 */
					
					for (var rm, midx = 0, __arr = marker._maps.last(); (midx < __arr.length && (rm = __arr[midx])); midx++) {
						if (rm) marker.rows[rm.r][rm.c].isLastCell = true;
					}
					
					
					if (hasHiddenCell) { /* colGroup 중에 숨겨진 col 이 존재하는 경우 */
						/* colspan 감소 시키기 */
						for (var CG, cidx = 0, __arr = cfg.colGroup; (cidx < __arr.length && (CG = __arr[cidx])); cidx++) {
							if (!CG.display) {
								for (var a = 0; a < marker._maps.length; a++) {
									var rowPosition = marker._maps[a][cidx];
									marker.rows[rowPosition.r][rowPosition.c].colspan--;
								}
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
					
					appendPosToFootMap((CH.rowspan||1), (CH.colspan||1), r, { r: r, c: CHidx });
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
	 * @method AXGrid.setConfig
	 * @param {Object} config - gridConfig
	 * @description 선언된 클래스를 사용하기 위해 속성을 정의합니다.
	 * @example
	 * ```js
	 * myGrid.setConfig({
 *     targetID    : "AXGridTarget", // {String} -- 그리드 div ID
 *     theme       : "AXGrid",       // {String} [AXGrid] -- CSS Class 이름
 *     fixedColSeq : 0,              // {Number} -- 컬럼고정 기능을 사용합니다. 고정할 마지막 컬럼의 인덱스 값입니다. 예제) http://dev.axisj.com/samples/AXGrid/fixedColSeq.html
 *     fitToWidth  : true,           // {Boolean} [false] -- 컬럼 가로 길이를 그리드의 가로 길이에 맞춥니다.
 *     colHeadAlign: "center",       // {String} 헤드의 기본 정렬. "left"|"center"|"right" 값을 사용할 수 있습니다. colHeadAlign 을 지정하면 colGroup 에서 정의한 정렬이 무시되고 colHeadAlign : false 이거나 없으면 colGroup 에서 정의한 속성이 적용됩니다.
 *     mergeCells  : [3,4]           // {Boolean|Array} -- 전체셀병합,병합안함,지정된 인덱스열만 병합 예제) http://dev.axisj.com/samples/AXGrid/mergeCells.html
 *     height      : "auto",         // {Number|String} -- 그리드의 높이를 지정합니다. 숫자를 사용하면 픽셀 단위로, "auto" 값을 사용하면 그리드의 높이가 내용에 맞춰서 늘어납니다. 예제) http://dev.axisj.com/samples/AXGrid/autoHeight.html
 *     sort        : true,           // {Boolean} -- true: 그리드의 헤더를 클릭해서 정렬 할 수 있습니다. false: 정렬 기능을 비활성화 합니다.  이 설정은 colGroup의 sort 보다 우선적으로 적용됩니다.
 *     remoteSort  : true,           // {Boolean} [false] -- 서버에서 정렬을 처리(서버에서 별도 처리 필요)합니다. 헤더 클릭시 'sortBy=cost desc' 형식의 정렬 정보가 ajax 요청에 포함됩니다.
 *     colHeadTool : true,           // {Boolean} -- 컬럼 display 여부를 설정 합니다. 이 설정은 colGroup의 colHeadTool 보다 우선적으로 적용됩니다.
 *     viewMode    : "grid"          // {String} -- 그리드가 보여지는 형태("grid"|"icon"|"mobile")를 지정합니다. viewMode는 mediaQuery에 의해서 자동으로 결정되기도 합니다. 예제) http://localhost/axisj/samples/AXGrid/viewMode.html
 *     reserveKeys : { // reserveKeys는 AXISJ에서 지정한 키를 다른 키로 지정하는 하는 경우 사용합니다. reserveKeys를 사용하면 데이터를 수정없이 바로 사용할 수 있습니다.
 *         parent_hash  : "phash", // {String} 부모해시 키의 이름을 지정합니다.
 *         child_hash   : "hash",  // {String} 자식해시 키의 이름을 지정합니다.
 *         sub_list     : "list",  // {String} 자식 리스트 키의 이름을 지정합니다.
 *         hidden       : "_hidden"// {String} hidden 키의 이름을 지정합니다.
 *     },
 *     colGroup : [ // 데이터 리스트의 컬럼을 정의합니다.
 *         {
 *             key      : "no",        // {String} -- 데이터와 맵핑할 키 입니다. key 명칭은 reservedKey
 *             label    : "번호",      // {String} -- 사용자에게 보여줄 컬럼명입니다.
 *             width    : 50,          // {Number|String} -- 컬럼의 가로길이를 설정합니다. 픽셀단위의 숫자나 "*" 문자를 사용할 수 있습니다. "*"을 사용하는 경우 그리드의 가로 길이에 따라 컬럼의 결이가 가변적으로 변합니다.
 *             align    : "right",     // {String} ["left"] -- 컬럼 내용의 정렬을 설정합니다. "left"|"center"|"right" 값을 사용할 수 있습니다.
 *             sort     : "asc",       // {String|Boolean} [""] -- 컬럼의 정렬을 지정합니다. "asc"|"desc"|false 값을 사용할 수 있습니다. false 값을 사용하면 컬럼의 정렬을 비활성화 합니다.
 *             colHeadTool : true      // {Boolean} -- 컬럼 display 여부를 설정 합니다.
 *             formatter: "money",     // {String|Function} -- 컬럼의 값을 표현하는 방식을 지정합니다. "money", "dec", "html", "checkbox", "radio", function은 아래 formatter 함수를 참고하세요.
 *             tooltip  : "money",     // {String|Function} -- 툴팁의 값을 표현하는 방식을 지정합니다. 툴팁을 지정하면 td div.bodyNode에 title 속성으로 값이 표현됩니다. 위 formatter와 동일한 변수를 사용합니다.
 *             disabled : function(){},// {Boolean|Function} -- formatter가 checkbox, radio인 경우 input의 disabled 값을 지정합니다. disabled(true|flase)를 반환하는 함수를 작성합니다. 아래 disabled 함수를 참고하세요.
 *             checked  : function(){} // {Boolean|Function} -- formatter가 checkbox, radio인 경우 input의 checked 값을 지정합니다. checked(true|flase)를 반환하는 함수를 작성합니다. 아래 checked 함수를 참고하세요.
 *         }
 *     ],
 *     colHead: { // 예제) http://dev.axisj.com/samples/AXGrid/colhead.html
 *         rows: [ // 컬럼 헤더를 병합할 수 있습니다. 사용법은 colGroup과 동일하며 key 대신 colSeq를 사용할 수 있습니다.
 *             [
 *                 {colSeq:0, rowspan:2},
 *                 {colSeq:null, colspan:3, label:"표현식", align:"center"},
 *                 {colSeq:4, rowspan:2, formatter: function(){} },
 *                 {colSeq:5, rowspan:2},
 *                 {colSeq:6, rowspan:2},
 *                 {colSeq:7, rowspan:2},
 *                 {colSeq:8, rowspan:2},
 *                 {colSeq:9, rowspan:2}
 *             ],
 *             [
 *                 {colSeq:1},
 *                 {colSeq:2},
 *                 {colSeq:3}
 *             ]
 *         ],
 *         onclick: function(){} // {Function} -- 그리드의 컬럼 헤드를 클릭시 발생하는 이벤트 입니다. 아래 onclick 함수를 참고하세요.
 *     },
 *     body: {
 *         marker: { // 그리드의 목록의 중간에 소계같은 원하는 데이터를 표현할 수 있습니다. 예제) http://dev.axisj.com/samples/AXGrid/marker.html
 *             display: function(){}, // {Function} -- marker 표시여부(true|flase)를 반환하는 함수를 작성합니다. 아래 display 함수를 참고하세요.
 *             rows: [] // marker를 표시할 형태를 정의 합니다. colHead의 rows와 동일한 형식을 사용합니다.
 *         },
 *         onclick       : function(){}, // 데이터 행의 click 이벤트를 정의합니다. 이벤트 변수 및 this 프로퍼티는 아래 onclick 함수를 참고하세요.
 *         ondblclick    : function(){}, // 데이터 행의 ondblclick 이벤트를 정의합니다. 이벤트 변수 및 this 프로퍼티는 아래 ondblclick 함수를 참고하세요.
 *         oncheck       : function(){}, // 데이터 행의 oncheck 이벤트를 정의합니다. 이벤트 변수 및 this 프로퍼티는 아래 oncheck 함수를 참고하세요.
 *         addClass      : function(){}, // 데이터 행의 사용자 정의 class를 할당할 수 있습니다.. 이벤트 변수 및 this 프로퍼티는 아래 addClass 함수를 참고하세요.
 *         onchangeScroll: function(){}, // 스크롤 변경 이벤트 입니다. 이벤트 변수 및 this 프로퍼티는 아래 onchangeScroll 함수를 참고하세요.
 *         onscrollend   : function(){}  // 그리드내의 스크롤이 마지막 항목까지 도달 하였을때 발생하는 이벤트를 설정할 수 있습니다. 이벤트 변수 및 this 프로퍼티는 아래 onscrollend 함수를 참고하세요.
 *     },
 *     foot: { // 그리드 마지막에 표시하는 행입니다. 예제) http://dev.axisj.com/samples/AXGrid/headfoot.html
 *         rows: [] // foot을 표시할 형태를 정의 합니다. colHead의 rows와 동일한 형식을 사용합니다.
 *     },
 *     page:{
 *         paging  : true, // {Boolean} -- 페이징 사용여부를 설정합니다.
 *         pageNo  : 1,    // {Number} -- 현재 페이지 번호를 설정합니다.
 *         pageSize: 100,  // {Number} -- 한 페이지장 표시할 데이터 수를 설정합니다.
 *         onchange: function(pageNo){} // {Funtion} -- 페이지 변경 이벤트입니다.
 *     },
 *     editor: { // 예제) http://localhost/axisj/samples/AXGrid/passive.html
 *         rows: [
 *             [
 *                 {
 *                     colSeq:0,
 *                     align:"center",
 *                     valign:"middle",
 *                     formatter: function(){},
 *                     form: {
 *                         type    : "readonly",  // {String} -- "hidden"|"text"|"readonly"|"textarea"|"select"|"radio"|"checkbox"
 *                         value   : "itemValue", // {String|Function} -- "itemValue"|"itemText": 해당 아이템의 값을 사용합니다. function을 사용해야 하는 경우 아래 formValue 함수를 참고하세요.
 *                         onClick : formOnClick, // {Function} -- 아래 formOnClick 함수를 참고하세요.
 *                         onBlur  : formOnBlur,  // {Function} -- 아래 formOnBlur  함수를 참고하세요.
 *                         onFocus : formOnFocus  // {Function} -- 아래 formOnFocus 함수를 참고하세요.
 *                         validate: function(formID, value){ // {Function} 입력된 값을 확인합니다.
 *                             //this.formID
 *                             //this.value
 *                             //this.checkedValues
 *                             //this.form
 *
 *                             return true | false;
 *                         }
 *                     },
 *                     AXBind:{
 *                         type  : "selector", // {String} -- form.type == "text"인 경우 "number"|"money"|"selector"|"slider"|"twinSlider"|"date"|"twinDate"|"dateTime"|"switch"를 사용할 수 있습니다. form.type == "select"인 경우 "select"를 사용할 수 있습니다.
 *                         config: {} // {Object} -- API(http://jdoc.axisj.com/jQueryExtends.html)에서 bind + type으로 검색하세요.
 *                     }
 *                 }
 *             ]
 *         ],
 *         request: {
 *             ajaxUrl :"saveGrid.php",
 *             ajaxPars:"param1=1&param2=2"
 *         },
 *         response: function(){ // ajax 응답에 대해 예외 처리 필요시 response 구현
 *             // response에서 처리 할 수 있는 객체 들
 *             //console.log({res:this.res, index:this.index, insertIndex:this.insertIndex, list:this.list, page:this.page});
 *             if(this.error){
 *                 console.log(this);
 *                 return;
 *             }
 *         },
 *         onkeyup: function(event, element){
 *             //this.list
 *             //this.item
 *             //this.element
 *         }
 *     },
 *     contextMenu: {} // API와 예제를 참고하세요. API) http://jdoc.axisj.com/AXContextMenu.html 예제) http://dev.axisj.com/samples/AXCore/AXContextMenu.html
 * });
	 *
	 * function formatter(itemIndex, item) {
 *     //this.index
 *     //this.list
 *     //this.item
 *     //this.page
 *     //this.key
 *     //this.value
 * }
	 *
	 * function disabled | checked() {
 *     //index: itemIndex,
 *     //list: this.list,
 *     //item: item,
 *     //page: this.page,
 *     //key: key,
 *     //value: value
 * }
	 *
	 * function display() {
 *     //this.index
 *     //this.list
 *     //this.item
 *     //this.page
 *
 *     return true | false;
 * }
	 *
	 * function onclick | ondblclick() {
 *     //this.index
 *     //this.r
 *     //this.c
 *     //this.list
 *     //this.colHead
 *     //this.page
 * }
	 *
	 * function addClass() {
 *     //this.index
 *     //this.item
 *     //this.list
 *     //this.page
 *
 *     return "red"|"green"|"blue"|"yellow"|"white"|"gray"; // 별도의 색상별 CSS를 추가로 정의해서 사용할 수 있습니다.
 * }
	 *
	 * function oncheck() {
 *     //this.index
 *     //this.checked
 *     //this.r
 *     //this.c
 *     //this.list
 *     //this.page
 * }
	 *
	 * function onchangeScroll(virtualScroll) {}
	 *
	 * function onscrollend() {
 *     //this.list
 *     //this.page
 * }
	 *
	 * function formOnClick | formOnBlur | formOnFocus() {
 *     //this.key
 *     //this.position
 *     //this.value
 * }
	 *
	 * function formValue(key, value) {
 *     //this.key
 *     //this.value
 *     //this.list
 *     //this.page
 * }
	 *
	 * ```
	 */
	init: function () {
		var cfg = this.config, _this = this;
		
		if (Object.isUndefined(cfg.targetID)) {
			console.log("need targetID - setConfig({targetID:''})");
			return;
		}
		if (!cfg.colGroup) {
			console.log("need colGroup - setConfig({colGroup:[]})");
			return;
		}
		
		this.config.reserveKeys = Object.extend(this.reserveKeys, cfg.reserveKeys, true);
		
		if (typeof cfg.colHeadAlign == "undefined") {
			cfg.colHeadAlign = AXConfig.AXGrid.colHeadAlign;
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
		gridCss.push("overflow:hidden;");
		if (cfg.width) gridCss.push("width:" + cfg.width + ";");
		if (cfg.height) gridCss.push("height:" + cfg.height + ";");
		
		/* grid 뼈대 그리기 ----------------------------------------------------------------------------------------------------- */
		var ol = [];
		ol.push("<a id=\"" + cfg.targetID + "_AX_grid_focus\" href=\"#axtree\" ></a>");
		ol.push("<div class=\"" + theme + "\" id=\"" + cfg.targetID + "_AX_grid\" style=\"" + gridCss.join('') + "\">");
		ol.push("	<div class=\"AXgridScrollBody\" id=\"" + cfg.targetID + "_AX_gridScrollBody\" style=\"z-index:2;\">");
		ol.push("		<div class=\"AXGridColHead AXUserSelectNone\" id=\"" + cfg.targetID + "_AX_gridColHead\" onselectstart=\"return false;\"></div>");
		ol.push("		<div class=\"AXGridToolGroup top\" id=\"" + cfg.targetID + "_AX_gridToolGroupTop\"></div>");
		ol.push("		<div class=\"AXGridBody\" id=\"" + cfg.targetID + "_AX_gridBody\"></div>");
		ol.push("		<div class=\"AXGridToolGroup bottom\" id=\"" + cfg.targetID + "_AX_gridToolGroupBottom\"></div>");
		ol.push("	</div>");
		ol.push("   <div class=\"AXgridEditor\" id=\"" + cfg.targetID + "_AX_gridEditor\" style=\"z-index:2;\"></div>");
		ol.push("   <div class=\"AXGridFoot\" id=\"" + cfg.targetID + "_AX_gridFoot\"></div>")
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
		this.gridFocus = axdom("#" + cfg.targetID + "_AX_grid_focus");
		this.gridBody = axdom("#" + cfg.targetID + "_AX_grid");
		this.scrollBody = axdom("#" + cfg.targetID + "_AX_gridScrollBody");
		this.colHead = axdom("#" + cfg.targetID + "_AX_gridColHead");
		this.body = axdom("#" + cfg.targetID + "_AX_gridBody");
		this.editor = axdom("#" + cfg.targetID + "_AX_gridEditor");
		this.gridFoot = axdom("#" + cfg.targetID + "_AX_gridFoot");
		
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
		/*
		 var contentScrollScrollWheel = this.contentScrollScrollWheel.bind(this);
		 this.contentScrollScrollWheelBind = function (event) {
		 contentScrollScrollWheel(event);
		 };
		 */
		
		var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";
		if (document.attachEvent) { /*if IE (and Opera depending on user setting) */
			/*axf.getId(cfg.targetID+"_AX_gridBody").detachEvent("on"+mousewheelevt, this.contentScrollScrollWheelBind); */
			if (axf.getId(cfg.targetID + "_AX_gridBody")) axf.getId(cfg.targetID + "_AX_gridBody").attachEvent("on" + mousewheelevt, (function(e){
				this.contentScrollScrollWheel(e||window.event);
			}).bind(this));
		} else if (document.addEventListener) { /*WC3 browsers */
			/*axf.getId(cfg.targetID+"_AX_gridBody").removeEventListener(mousewheelevt, this.contentScrollScrollWheelBind, false); */
			if (axf.getId(cfg.targetID + "_AX_gridBody")) axf.getId(cfg.targetID + "_AX_gridBody").addEventListener(mousewheelevt, (function(e){
				this.contentScrollScrollWheel(e||window.event);
			}).bind(this), false);
		}
		
		if (document.addEventListener) {
			/*axf.getId(cfg.targetID+"_AX_gridBody").removeEventListener("touchstart", this.contentScrollTouchstartBind, false); */
			if (axf.getId(cfg.targetID + "_AX_gridBody")) axf.getId(cfg.targetID + "_AX_gridBody").addEventListener("touchstart", contentScrollTouchstart, false);
		}
		
		//this.target.bind("keydown", this.onKeydown.bind(this));
		//keydown 이벤트 방식 변경
		this.target.bind("click.axgrid", (function(e){
			if (this.editorOpend || this.inline_edit) return;
			var e = e||window.event;
			if(e.target.tagName == "INPUT"||e.target.tagName == "SELECT"||e.target.tagName == "TEXTAREA"||e.target.tagName == "BUTTON") return;
			this.gridFocus.focus();
		}).bind(this));
		
		this.gridFocus.unbind("keydown.axgrid").bind("keydown.axgrid", this.onKeydown.bind(this));
		
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
		
		if(this.config.resizeable===false) return ; // 2016-06-12 reisze 안되는 옵션 추가. 
		
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
		this.redrawGrid(true);
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
			
		}
		else
		{
			
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
			}
			else
			{
				if (cfg.height) this.gridBody.css({height: cfg.height});
				var pageBodyHeight = (this.pageBody.data("display") == "show") ? this.pageBody.outerHeight() : 0,
				    gridFootHeight = (cfg.foot) ? this.gridFoot.outerHeight() : 0;
				if (cfg.page.display == false) pageBodyHeight = 0;
				
				var scrollBodyHeight = cfg.height.number() - pageBodyHeight - 2 - gridFootHeight;
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
		var target = axdom("#" + cfg.targetID);
		
		if (cfg.viewMode != "mobile") {
			var targetInnerHeight = target.innerHeight();
			if (targetInnerHeight == 0) targetInnerHeight = 400;
			cfg.height = targetInnerHeight + "px"; // 그리드 높이 지정
			
			if (cfg.height && this.gridBody) this.gridBody.css({height: cfg.height});
			this.redrawGrid();
			this.onevent_grid({type:"resetHeight"})
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
	/**
	 * @method AXGrid.setHeight
	 * @param height {Number} - grid outerHeight
	 * @description 그리드의 높이를 설정합니다. viewMode가 "mobile"인 경우는 작동하지 않습니다.
	 * @returns {jQueryObject}
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * myGrid.setHeight(600);
	 * ```
	 */
	setHeight: function(height) {
		var cfg = this.config;
		var target = axdom("#" + cfg.targetID);
		
		if (cfg.viewMode != "mobile" && typeof height == "number") {
			target.css({"height": height});
			this.resetHeight();
		}
		
		return target;
	},
	/**
	 * @method AXGrid.getColGroup
	 * @param suffix {String} - "CH" ColHead, "CB" ColBody, "EB" EditorBody, "FE" FixedEditorBody,"FB" FixedColBody,"FC" FixedColHead
	 * @description ColGroup을 구성 합니다.
	 * @returns {String} ColGroup html
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * myGrid.getColGroup("CB");
	 * ```
	 */
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
	/**
	 * @method AXGrid.getColSeqToHead
	 * @param r {Number} - Row
	 * @param c {Number} - Column
	 * @description 대상의 colHead 내부 seq 가져옵니다.
	 * @returns {Number} colSeq
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * var colSeq = myGrid.getColSeqToHead(colHeadR, colHeadC);
	 * ```
	 */
	getColSeqToHead: function (r, c) {
		/*console.log("getColSeqToHead:"+r+","+c); */
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
	 * @method AXGrid.redrawGrid
	 * @param changeGridView {string}
	 * @description 그리드의 모든 요소를 재 정렬 해 줍니다.
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * myGrid.redrawGrid();
	 * ```
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
		if(typeof changeGridView == "undefined" || changeGridView){
			this.defineConfig(true);
			this.setColHead();
			
			this.gridTargetSetSize(true);
			this.contentScrollResize();
			this.setBody(undefined, true);
		}
		else{
			this.contentScrollResize();
		}
		
		if (cfg.viewMode == "grid") {
			//if (this.list.length > 0) {
			if (cfg.head) this.printHead();
			if (cfg.foot) this.printFoot();
			//}
		}
		/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 바디 재구성 기능 포함 */
	},
	/**
	 * @method AXGrid.checkedColSeq
	 * @param {Number} colSeq - 대상 체크박스(formatter:"checkbox" 로 선언된 항목의 순서)
	 * @param {Boolean} checked - true면 check , false면 uncheck
	 * @param {Number} itemIndex - 대상 열(미 지정시 전체)
	 * @description colgroup내 해당 index의 checked 속성을 변경해 줍니다.해당 index의 아이템이 checkbox로 지정되어 있어야 합니다.
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * myGrid.checkedColSeq(0, true); // 모든 체크박스 속성을 checked로
	 * myGrid.checkedColSeq(0, true,0); // 첫번째 열의 체크박스속성을 checked로
	 * ```
	 */
	checkedColSeq: function (colSeq, checked, itemIndex) {
		
		var cfg = this.config, _this = this, sendObj;
		var _list = this.list;
		
		if (typeof itemIndex === "undefined") {
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
				//cfg.colGroup[colSeq].checked.call({})
				var disabled = false;
				if(cfg.colGroup[colSeq].disabled) {
					disabled = cfg.colGroup[colSeq].disabled.call({
						index: itemIndex,
						list: this.list,
						item: item,
						page: this.page,
						key: cfg.colGroup[colSeq].key,
						value: item[cfg.colGroup[colSeq].key]
					});
				}
				if(!disabled) item.___checked[colSeq] = checked;
			}
			if (cfg.colGroup[colSeq].oncheck) {
				sendObj = {
					index: colSeq,
					list: _list
				};
				setTimeout(function(){
					cfg.colGroup[colSeq].oncheck.call(sendObj, checked);
				}, 1);
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
				//setTimeout(function() {
				cfg.body.oncheck.call(sendObj);
				//}, 1);
			}
		}
		else
		{
			if(cfg.colGroup[colSeq].formatter === "radio") {
				var ii= 0, ll = this.list.length;
				for(;ii<ll;ii++) {
					if(typeof _this.list[ii].___checked === "undefined") _this.list[ii].___checked = {};
					_this.list[ii].___checked[colSeq] = false;
				}
			}
			
			this.body.find(".gridBodyTr_" + itemIndex + " .gridCheckBox_body_colSeq" + colSeq).each(function () {
				if (checked == null) {
					this.checked = !this.checked;
				} else {
					this.checked = checked;
				}
			});
			
			var item = this.list[itemIndex];
			
			if(typeof item.___disabled === "undefined") item.___disabled = {};
			if(typeof item.___checked === "undefined") item.___checked = {};
			
			if (checked == null) {
				if(cfg.colGroup[colSeq].formatter === "radio") {
					item.___checked[colSeq] = true;
				}else{
					item.___checked[colSeq] = !(item.___checked[colSeq] == true);
				}
			}else{
				item.___checked[colSeq] = checked;
			}
			
			if (cfg.colGroup[colSeq].oncheck) {
				sendObj = {
					index: checkboxIndex,
					list: _list
				};
				//setTimeout(function() {
				cfg.colGroup[colSeq].oncheck.call(sendObj, checked);
				//}, 1);
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
				//setTimeout(function() {
				cfg.body.oncheck.call(sendObj, itemIndex, item);
				//}, 1);
			}
		}
		return this;
	},
	/**
	 * @method AXGrid.getCheckedList
	 * @param colSeq {Number} -대상 체크박스(formatter:"checkbox" 로 선언된 항목의 순서)
	 * @description  Grid list 내의 checked 된 아이템을 반환합니다.해당 colSeq의 아이템이 checkbox|radio로 지정되어 있어야 합니다.
	 * @returns {Array} JSObject - 그리드 리스트의 체크된 인덱스 아이템
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * myGrid.getCheckedList(0);
	 * ```
	 */
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
	/**
	 * @method AXGrid.getCheckedListWithIndex
	 * @param colSeq {Number} -대상 체크박스(formatter:"checkbox" 로 선언된 항목의 순서)
	 * @description  Grid list 내의 checked 된 아이템,index를 반환합니다.해당 colSeq의 아이템이 checkbox로 지정되어 있어야 합니다.
	 * @returns {Array} [{index:Number, item:JSObject}] -그리드 리스트의 체크된 인덱스 , 아이템
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * myGrid.getCheckedListWithIndex(0);
	 * ```
	 */
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
	/**
	 * @method AXGrid.onKeydown
	 * @param {Event} - Grid 내부에서 감지되는 이벤트
	 * @description  Grid 내부에서 감지되는 이벤트에 대한 처리를 합니다.(방향키로 포커스 이동등..)
	 */
	onKeydown: function (event) {
		
		if( this.selectedRow.length == 0 ) return this;
		if (this.editorOpend) return this;
		if (this.inline_edit) return this;
		
		if(axdom(document.body).data("masked") === "true") return this;
		if(event.target){
			if(event.target.tagName == "INPUT" || event.target.tagName == "TEXTAREA" || event.target.tagName == "SELECT" || event.target.tagName == "BUTTON") return this;
			if(event.target.id != this.config.targetID + "_AX_grid_focus" && event.target.tagName == "A") return this;
		}
		
		var _this = this,  cfg = this.config, body = this.body,
		    li, r, c;
		
		if (event.keyCode == 67 && event.ctrlKey) {
			// this.copyData();
		}
		
		if(event.keyCode == axf.Event.KEY_ESC){
			this.selectClear();
		}
		else
		if(event.keyCode == axf.Event.KEY_RETURN){
			li = this.selectedRow.first();
			c = this.selectedCells.first();
			if(cfg.colGroup[c].editor && cfg.control_lock_status < 1) {
				this.editCell(0, c, li);
				this.stopEvent(event);
			}
		}
		else
		if (event.keyCode == 65 && (event.ctrlKey || event.metaKey)) {
			
		}
		else
		if(!event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) {
			if (event.keyCode == axf.Event.KEY_UP) { /* */
				this.focusMove(-1, event);
			}
			else if (event.keyCode == axf.Event.KEY_DOWN) { /* */
				this.focusMove(1, event);
			}
			else if (event.keyCode == axf.Event.KEY_LEFT) { /* */
				this.focusMove("L", event);
			}
			else if (event.keyCode == axf.Event.KEY_RIGHT) { /* */
				this.focusMove("R", event);
			}
		}
		else
		if(event.shiftKey){
			if (event.keyCode == axf.Event.KEY_UP) { /* */
				// todo 멀티 셀렉트 기능 작
			}
			else if (event.keyCode == axf.Event.KEY_DOWN) { /* */
				
			}
		}
	},
	/**
	 * @method AXGrid.onContextmenu
	 * @param {Event} - Grid 내부에서 감지되는 이벤트
	 * @description  setConfig에서 설정된 contextMenu에 대한 처리를 합니다.
	 * @returns {AXContextMenu}
	 * @example // 마우스 오른쪽 버튼 클릭시 메뉴를 호출 합니다.(추가,삭제,수정)
	 * ```
	 * var myGrid = new AXGrid();
	 * myGrid.setConfig({
     *     targetID : "AXGridTarget",
     *     theme : "AXGrid",
     *     mediaQuery: {
     *         mx:{min:0, max:600}, dx:{min:600}
     *     },
     *     colGroup : [
     *         {key:"no", label:"번호", width:"40", align:"center", formatter:"money"}
     *     ],
     * 	    contextMenu: {
     * 		    theme:"AXContextMenu", // 선택항목
     * 		    width:"150", // 선택항목
     * 		    menu:[
     * 		    	{
     * 		    		userType:1, label:"추가하기", className:"plus", onclick:function(){
     * 		    			myGrid.appendList(null);
     * 		    		}
     * 		    	}
     * 		    ]
     * 	    }
     * });
	 * ```
	 */
	onContextmenu: function (event) {
		var cfg = this.config, body = this.body;
		
		if (this.readyMoved) return false;
		
		/* event target search - */
		//if (event.target.id == "") return;
		
		//console.log(event.target.tagName);
		
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
			/*
			 if (this.selectedCells.length > 0) {
			 axf.each(this.selectedCells, function () {
			 axdom("#" + this).removeClass("selected");
			 });
			 this.selectedCells.clear();
			 }
			 */
			
			if(this.selectedRow.length < 2) {
				if (this.selectedRow.length > 0) {
					axf.each(this.selectedRow, function () {
						body.find(".gridBodyTr_" + this).removeClass("selected");
					});
				}
				this.selectedRow.clear();
				this.body.find(".gridBodyTr_" + itemIndex).addClass("selected");
				this.selectedRow.push(itemIndex);
			}
			else{
				var hasItem = false;
				axf.each(this.selectedRow, function () {
					if(this == itemIndex){
						hasItem = true;
					}
				});
				if(!hasItem){
					axf.each(this.selectedRow, function () {
						body.find(".gridBodyTr_" + this).removeClass("selected");
					});
					this.selectedRow.clear();
					this.body.find(".gridBodyTr_" + itemIndex).addClass("selected");
					this.selectedRow.push(itemIndex);
				}
			}
			
			
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
	/**
	 * @method AXGrid.getHeadMousePosition
	 * @param {Event} - Grid 내부에서 감지되는 이벤트
	 * @description  Grid head에서 event를 일으킨 마우스의 위치를 캡쳐 합니다.
	 * @returns {Object} -(x좌표,y좌표)
	 */
	getHeadMousePosition: function (event) {
		var pos = this.colHead.offset();
		var x = (event.pageX - pos.left);
		var y = (event.pageY - pos.top);
		return { x: x, y: y };
	},
	/**
	 * @method AXGrid.getColHeadTd
	 * @param {Object} arg
	 * @description  Grid head를 위한 html을 생성합니다.
	 * @returns {String}
	 * @example
	 * ```
	 * // arg
	 * {
	 * 	valign: " valign=\"bottom\"",    - td valign option string
	 * 	rowspan: " rowspan=\"2\"",  - rowspan option string
	 * 	colspan: " colspan=\"2\"",  - colspan option string
	 * 	bottomClass: "",  - border-bottom 관련 후처리
	 * 	r: 0, - colhead row index
	 * 	CHidx: 0, -colhead cell index
	 * 	align: "right", - align option string
	 * 	colSeq: 0, - config 에서 지정된 colGroup 내 순서
	 * 	formatter: "checkbox", - html 표시중 checkbox 등 특정 요소 렌더링
	 * 	formatterLabel: "" - checkbox 등 특정 요소를 감쌀 label 태그 내부 출력 내용,
	 * 	sort: "desc", -정렬옵션
	 * 	tdHtml: "blah", - config colGroup 의 label 로 지정된 string
	 * 	ghost: false,  - true 시 비어있는 dummy cell 이 생성됨.
	 * 	displayLabel: false - Label이 지정된 경우 출력 여부. 기본적으로 사용시 false 로 셋팅됨. colgroup 에서 따로 지정하지 않기 때문에,,
	 * }
	 * ```
	 */
	getColHeadTd: function (arg) {
		var cfg = this.config, po = [], colHeadTdText = " colHeadTdText",
		    toolUse = true, sortClass = "";
		
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
		
		if (arg.sort) sortClass = (arg.sort == "desc") ? " sortDesc" : " sortAsc";
		if(toolUse) toolUse = arg.colHeadTool;
		po.push("<td" + arg.valign + arg.rowspan + arg.colspan + " ");
		if (!arg.ghost) po.push("id=\"" + cfg.targetID + "_AX_colHead_AX_" + arg.r + "_AX_" + arg.CHidx + "\" ");
		po.push("class=\"colHeadTd" + arg.bottomClass + sortClass + "\" style=\"height:"+arg.tdHeight+"px;\">");
		po.push("<div class=\"tdRelBlock\" style=\"height:"+arg.tdHeight+"px;\">");
		po.push("<div class=\"colHeadNode" + colHeadTdText + "\" align=\"" + arg.align + "\" ");
		if (!arg.ghost) po.push("id=\"" + cfg.targetID + "_AX_colHeadText_AX_" + arg.r + "_AX_" + arg.CHidx + "\" ");
		po.push(">");
		po.push(arg.tdHtml);
		po.push("</div>");
		if (!arg.ghost && toolUse && arg.colSeq != null && arg.colSeq != undefined) po.push("<a href=\"#AXexec\" class=\"colHeadTool\" id=\"" + cfg.targetID + "_AX_colHeadTool_AX_" + arg.r + "_AX_" + arg.CHidx + "\">T</a>");
		if (!arg.ghost) po.push("<div class=\"colHeadResizer\" id=\"" + cfg.targetID + "_AX_colHeadResizer_AX_" + arg.r + "_AX_" + arg.CHidx + "\"></div>");
		po.push("</div>");
		po.push("</td>");
		
		if (!arg.ghotst && arg.sort) {
			var myColHead = cfg.colHead.rows[arg.r][arg.CHidx];
			var tdID = cfg.targetID + "_AX_colHead_AX_" + arg.r + "_AX_" + arg.CHidx;
			
			this.nowSortHeadID = tdID;
			this.nowSortHeadObj = myColHead;
		}
		
		return po.join('');
	},
	/**
	 * @method AXGrid.setColHead
	 * @description  Grid head를 디바이스(보기설정)에 맞춰 렌더링 합니다.(grid,icon,mobile)
	 * @returns {String}
	 */
	setColHead: function () {
		var cfg = this.config;
		var po = [];
		
		if (cfg.viewMode == "grid")
		{
			this.colHead.show();
			var getColHeadTd = this.getColHeadTd.bind(this);
			var _tdHeight = cfg.headTdHeight;
			
			//console.log(cfg.colHead.rows);
			
			if (!this.hasFixed)
			{  /* 일반 colHead 구현 */
				
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
								align: (cfg.colHeadAlign || CH.align || "left"), colSeq: CH.colSeq, formatter: CH.formatter, formatterLabel: CH.formatterLabel,
								sort: CH.sort,
								colHeadTool: CH.colHeadTool,
								tdHtml: tdHtml,
								ghost: false, displayLabel: CH.displayLabel,
								tdHeight: (function(){
									if(cfg.colHead.heights && cfg.colHead.heights[r]){
										var tdHeight = 0;
										for(var i=r;i<r+(CH.rowspan);i++){
											tdHeight += (cfg.colHead.heights[i] || 0);
										}
										return tdHeight;
									}
									else{
										return _tdHeight * (CH.rowspan || 1) + (CH.rowspan-1);
									}
								})()
							}));
						}
					}
					po.push("</tr>");
				}
				po.push("</tbody>");
				po.push("</table>");
				
			}
			else
			{ /* fixedCol 구현 */
				
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
							
							/*
							 po.push(getColHeadTd({
							 valign: valign, rowspan: rowspan, colspan: colspan, bottomClass: bottomClass, r: r, CHidx: CHidx,
							 align: CH.align, colSeq: CH.colSeq, formatter: CH.formatter, sort: CH.sort, tdHtml: tdHtml,
							 ghost: (colCount < (cfg.fixedColSeq + 1))
							 }));
							 */
							
							po.push(getColHeadTd({
								valign: valign, rowspan: rowspan, colspan: colspan, bottomClass: bottomClass, r: r, CHidx: CHidx,
								align: (cfg.colHeadAlign || CH.align || "left"), colSeq: CH.colSeq, formatter: CH.formatter, formatterLabel: CH.formatterLabel,
								sort: CH.sort,
								colHeadTool: CH.colHeadTool,
								tdHtml: tdHtml,
								ghost: (colCount < (cfg.fixedColSeq + 1)),
								tdHeight: (function(){
									if(cfg.colHead.heights && cfg.colHead.heights[r]){
										var tdHeight = 0;
										for(var i=r;i<r+(CH.rowspan);i++){
											tdHeight += (cfg.colHead.heights[i] || 0);
										}
										return tdHeight;
									}
									else{
										return _tdHeight * (CH.rowspan || 1) + (CH.rowspan-1);
									}
								})()
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
							/*console.log({CHidx:CHidx, fixedColSeq:(cfg.fixedColSeq+1)}); */
							/*radio, check exception */
							var tdHtml = CH.label || "untitle";
							var rowspan = (CH.rowspan > 1) ? " rowspan=\"" + CH.rowspan + "\"" : "";
							var colspan = (CH.colspan > 1) ? " colspan=\"" + CH.colspan + "\"" : "";
							var valign = " valign=\"" + CH.valign + "\"";
							var bottomClass = (CH.isLastCell) ? "" : " colHeadBottomBorder";
							
							fpo.push(getColHeadTd({
								valign: valign, rowspan: rowspan, colspan: colspan, bottomClass: bottomClass, r: r, CHidx: CHidx,
								align: (cfg.colHeadAlign || CH.align || "left"), colSeq: CH.colSeq, formatter: CH.formatter, formatterLabel: CH.formatterLabel,
								sort: CH.sort,
								colHeadTool: CH.colHeadTool,
								tdHtml: tdHtml,
								ghost: false,
								tdHeight: (function(){
									if(cfg.colHead.heights && cfg.colHead.heights[r]){
										var tdHeight = 0;
										for(var i=r;i<r+(CH.rowspan);i++){
											tdHeight += (cfg.colHead.heights[i] || 0);
										}
										return tdHeight;
									}
									else{
										return _tdHeight * (CH.rowspan || 1) + (CH.rowspan-1);
									}
								})()
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

			//trace(this.colHead.height());

			/*
			if(!this._tdHeight) {
				if(this.colHead.height() == 0){
					this._tdHeight = 31;
				}
				else{
					this._tdHeight = this.colHead.height() / cfg.colHead.rows.length;
				}
			}
			*/

			this.colHead.find(".colHeadResizer").each(function () {
				var resizerID = this.id;
				
				var tdID = resizerID.replace("colHeadResizer", "colHead");
				var txtID = resizerID.replace("colHeadResizer", "colHeadText");
				var toolID = resizerID.replace("colHeadResizer", "colHeadTool");
				
				var rowspan = axdom("#" + tdID).attr("rowspan");
				var valign = axdom("#" + tdID).attr("valign");
				var tdHeight = axdom("#" + tdID).height();
				var txtHeight = axdom("#" + txtID).outerHeight();

				axdom(this).css({ height: tdHeight });

				var cellMarginTop = 0;
				if (valign == "bottom") cellMarginTop = (tdHeight - txtHeight) + 5;
				if (valign == "middle") cellMarginTop = (tdHeight - txtHeight) / 2 + 5;
				axdom("#" + txtID).css({ "padding-top": cellMarginTop + "px" });
				axdom("#" + toolID).css({ "top": (cellMarginTop - 5) + "px" });
			});
			
			//AXGridTarget_AX_colHead_AX_0_AX_2
			//AXGridTarget_AX_colHead_AX_0_AX_0
			
			this.colHead.bind("mouseover", this.colHeadMouseOver.bind(this));
			this.colHead.bind("mouseout", this.colHeadMouseOut.bind(this));
			this.colHead.find(".colHeadNode").bind("click", this.colHeadNodeClick.bind(this));
			this.colHead.find(".colHeadTool").bind("click", this.colHeadToolClick.bind(this));
			this.colHead.find(".colHeadTool").bind("focus", function(){
				this.blur();
			});
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
					var txtHeight = axdom("#" + txtID).outerHeight();

					axdom(this).css({ height: tdHeight });

					var cellMarginTop = 0;
					if (valign == "bottom") cellMarginTop = (tdHeight - txtHeight) + 5;
					if (valign == "middle") cellMarginTop = (tdHeight - txtHeight) / 2 + 5;
					axdom("#" + txtID).css({ "padding-top": cellMarginTop + "px" });
					axdom("#" + toolID).css({ "top": (cellMarginTop - 5) + "px" });
				});
				
				this.fixedColHead.bind("mouseover", this.colHeadMouseOver.bind(this));
				this.fixedColHead.bind("mouseout", this.colHeadMouseOut.bind(this));
				this.fixedColHead.find(".colHeadNode").bind("click", this.colHeadNodeClick.bind(this));
				this.fixedColHead.find(".colHeadTool").bind("click", this.colHeadToolClick.bind(this));
				this.fixedColHead.find(".colHeadResizer").bind("mousedown", this.colHeadResizerMouseDown.bind(this));
				this.fixedColHead.find(".gridCheckBox").bind("click", this.colHeadCheckBoxClick.bind(this));
			}

		}
		else if (cfg.viewMode == "icon")
		{
			this.colHead.empty();
			this.colHead.hide();
		}
		else if (cfg.viewMode == "mobile")
		{ /* 모바일에서는 헤드 제거 또는 모바일용 헤드 재구성 */
			this.colHead.empty();
			this.colHead.hide();
		}
	},
	/* colHead events */
	/**
	 * @method AXGrid.colHeadMouseOver
	 * @param {Event} - Grid 내부에서 감지되는 이벤트
	 * @description  Grid head에 마우스를 올렸을때 후처리를 합니다.(툴 박스 표시등)
	 */
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
	/**
	 * @method AXGrid.colHeadMouseOut
	 * @param {Event} - Grid 내부에서 감지되는 이벤트
	 * @description  Grid head가 마우스 포커스를 잃었을때의 처리를 합니다.
	 */
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
	/**
	 * @method AXGrid.colHeadResizerMouseDown
	 * @param {Event} - Grid 내부에서 감지되는 이벤트
	 * @description  Grid head의 크기 조절 바 (|)를 마우스로 down(누른상태) 했을때의 처리를 합니다.
	 */
	colHeadResizerMouseDown: function (event) {
		var cfg = this.config;
		if (event.target.id == "") return;
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;
		var lastIdx = eid.length - 1;
		var colHeadR = eid[lastIdx - 1];
		var colHeadC = eid[lastIdx];
		
		/*console.log({colHeadR:colHeadR, colHeadC:colHeadC}); */
		
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
		/*console.log(this.colResizeTarget); */
		
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
		//axdom(document.body).addClass("AXUserSelectNone");
		/* resize event bind ~~~~~~~~~~~~~~~~~~~ */
		
		// inline cell-editor 초기화
		if(this.inline_edit){
			this.editCellClear();
		}
	},
	/**
	 * @method AXGrid.colHeadResizerMouseMove
	 * @param {Event} - Grid 내부에서 감지되는 이벤트
	 * @description  Grid head의 크기 조절 바 (|)를 마우스로 drag(누른상태) 했을때 마우스 감도 처리를 합니다.
	 */
	colHeadResizerMouseMove: function (event) {
		if (!event.pageX) return;
		/*드래그 감도 적용 */
		if (this.config.moveSens > this.moveSens) this.moveSens++;
		if (this.moveSens == this.config.moveSens) this.colHeadResizerMove(event);
	},
	/**
	 * @method AXGrid.colHeadResizerMove
	 * @param {Event} - Grid 내부에서 감지되는 이벤트
	 * @description  Grid head의 크기 조절 바 (|)를 마우스로 drag(누른상태) 했을때의 처리를 합니다.
	 */
	colHeadResizerMove: function (event) {
		var cfg = this.config;
		var mouse = this.getHeadMousePosition(event);
		var newWidth = (this.colResizeTarget.leftPosition - mouse.x).abs();
		if (newWidth < 31) return;
		
		/* colHead/colBody colGroup width 조정 */
		axdom("#" + cfg.targetID + "_AX_col_AX_" + this.colResizeTarget.colSeq + "_AX_CH").attr("width", newWidth);
		axdom("#" + cfg.targetID + "_AX_col_AX_" + this.colResizeTarget.colSeq + "_AX_CB").attr("width", newWidth);
		axdom("#" + cfg.targetID + "_AX_col_AX_" + this.colResizeTarget.colSeq + "_AX_EB").attr("width", newWidth);
		if(cfg.foot){
			axdom("#" + cfg.targetID + "_AX_col_AX_" + this.colResizeTarget.colSeq + "_AX_FH").attr("width", newWidth);
		}
		
		cfg.colGroup[this.colResizeTarget.colSeq].width = newWidth;
		if (!cfg.colGroup[this.colResizeTarget.colSeq].widthAstric) {
			cfg.colGroup[this.colResizeTarget.colSeq]._owidth = newWidth;
		}
		
		if (this.hasFixed) {
			var fixedColSeq = this.fixedColSeq;
			
			axdom("#" + cfg.targetID + "_AX_col_AX_" + this.colResizeTarget.colSeq + "_AX_FC").attr("width", newWidth);
			axdom("#" + cfg.targetID + "_AX_col_AX_" + this.colResizeTarget.colSeq + "_AX_FB").attr("width", newWidth);
			axdom("#" + cfg.targetID + "_AX_col_AX_" + this.colResizeTarget.colSeq + "_AX_FE").attr("width", newWidth);
			if(cfg.foot){
				axdom("#" + cfg.targetID + "_AX_col_AX_" + this.colResizeTarget.colSeq + "_AX_FF").attr("width", newWidth);
			}
			
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
			}
			AXInput.alignAllAnchor();
		}
		
		
		/* colHead colGroup width 조정 ------------------------------ */
		this.colResizeTarget.newWidth = newWidth;
		var newColWidth = this.colWidth - (this.colResizeTarget.blockWidth - this.colResizeTarget.newWidth);
		this.colHead.find(".colHeadTable").css({ "width": newColWidth + "px" });
		/*this.body.find(".gridBodyTable").css({"width":newColWidth+"px"}); */
	},
	/**
	 * @method AXGrid.colHeadResizerMouseUp
	 * @param {Event} - Grid 내부에서 감지되는 이벤트
	 * @description  Grid head의 크기 조절 바 (|)를 마우스로 drag 상태가 해제 되었을때의 처리를 합니다.
	 */
	colHeadResizerMouseUp: function (event) {
		if (this.colResizeTarget.blockWidth != this.colResizeTarget.newWidth) {
			this.colWidth = this.colWidth - (this.colResizeTarget.blockWidth - this.colResizeTarget.newWidth);
		}
		this.colHeadResizerEnd();
		this.contentScrollResize(false);
	},
	/**
	 * @method AXGrid.colHeadResizerEnd
	 * @param {Event} - Grid 내부에서 감지되는 이벤트
	 * @description  Grid head의 크기 조절 바 (|)를 마우스로 drag 상태가 해제 되었을때의 처리를 합니다.
	 */
	colHeadResizerEnd: function () {
		this.moveSens = 0;
		this.colResizing = false;
		axdom(document.body).unbind("mousemove.AXGrid");
		axdom(document.body).unbind("mouseup.AXGrid");
		axdom(document.body).unbind("mouseleave.AXGrid");
		
		axdom(document.body).removeAttr("onselectstart");
		//axdom(document.body).removeClass("AXUserSelectNone");
	},
	/**
	 * @method AXGrid.colHeadNodeClick
	 * @param {Event} - Grid 내부에서 감지되는 이벤트
	 * @description  Grid head를 클릭 했을때의 처리를 합니다(체크박스처리,정렬등).
	 */
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
			return this;
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
		
		if (cfg.sort == false || myColHead.sort == false) {
			return;
		}
		
		var tdID = cfg.targetID + "_AX_colHead_AX_" + colHeadR + "_AX_" + colHeadC;
		
		if (myColHead.colSeq == undefined || myColHead.colSeq == null) {
			console.log("정렬할 수 없는 컬럼 입니다.");
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
			//console.log(colHeadR, colHeadC,  cfg.colHead.rows[colHeadR][colHeadC].sort);
			//sort 처리하기
			if (nsort == "desc") {
				axdom("#" + tdID).addClass("sortDesc");
			} else {
				axdom("#" + tdID).addClass("sortAsc");
			}
			
			this.nowSortHeadID = tdID;
			this.nowSortHeadObj = myColHead;
			
			var ai = this.ajaxInfo;
			if (ai && cfg.remoteSort) {
				if (!ai.ajaxPars) {
					ai.ajaxPars = this.getSortParam("one");
				} else if (Object.isString(ai.ajaxPars)) {
					ai.ajaxPars = $.extend(ai.ajaxPars.dec().queryToObject(), this.getSortParam("one").queryToObject());
				} else if (Object.isObject(ai.ajaxPars)) {
					ai.ajaxPars = $.extend(ai.ajaxPars, this.getSortParam("one").queryToObject());
				}
				
				this.reloadList();
			} else {
				this.list = this.sortList(nsort, myColHead, this.list);
				this.printList({sort:true});
			}
			
		}
		
		if (cfg.colHead.onclick) { /* onclick    bind */
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
	/**
	 * @method AXGrid.colHeadToolClick
	 * @param {Event} - Grid 내부에서 감지되는 이벤트
	 * @description  Grid head 우측의 도구 박스를 클릭 했을때의 처리를 합니다(ColGroupListBox 팝업).
	 * @returns {String}
	 */
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
	/**
	 * @method AXGrid.colGroupListClick
	 * @param {Event} - Grid 내부에서 감지되는 이벤트
	 * @description  colHeadToolClick 에서 호출된 ColGroupListBox의 아이템을 클릭했을때의 처리를 합니다.
	 * @returns {String}
	 */
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
			if(cfg.editor){
				for (var r = 0; r < cfg.editor.rows.length; r++) {
					cfg.editor.rows[r][colSeq].display = !cfg.editor.rows[r][colSeq].display;
				}
			}
			//redraw grid
			this.redrawGrid("all");
			
		} else {
			
			axdom("#" + cfg.targetID + "_AX_colHeadMenu").remove();
			axdom(document).unbind("keydown", this.colGroupListClickBind);
			axdom(document).unbind("click", this.colGroupListClickBind);
		}
	},
	/**
	 * @method AXGrid.colHeadCheckBoxClick
	 * @param {Event} - Grid 내부에서 감지되는 이벤트
	 * @description  Grid head checkbox를 클릭했을때의 처리를 합니다.
	 */
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
	/**
	 * @method AXGrid.sortList
	 * @param nsort {String} -  "desc","asc"
	 * @param myColHead {Object} - cfg.colHead.rows[colHeadR][colHeadC]  대상이 될 Grid head node
	 * @param list {Object} - Grid list Object
	 * @description  그리드의 리스트를 정렬 합니다.
	 * @returns {Object}  - Grid list
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * // Array
	 * myGrid.setList({Array});
	 * ...
	 * myGrid.sortList("desc",myGrid.cfg.colHead.rows[0][0],myGrid.list);
	 * ```
	 */
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
						key: myColHead.key,
						value: item[myColHead.key]
					};
					result = myColHead.formatter.call(sendObj, itemIndex, item) || "";
					//result 값이 money 형식인지 체크 합니다.
					var moneyCheck = (Object.isString(result)) ? result.replace(/,/g, "") : result;
					if (axdom.isNumeric(moneyCheck)) result = result.number();
				}
				return result;
			} else {
				return item[myColHead.key] || "";
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
	/**
	 * @method AXGrid.setBody
	 * @param list {Object} - Grid list Object
	 * @param rewrite {Boolean} - true or false
	 * @description  그리드의 몸통을 렌더링 합니다.
	 */
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
			po.push("<tbody id=\"" + cfg.targetID + "_AX_tfoot\"></tbody>");
			po.push("<tbody id=\"" + cfg.targetID + "_AX_fpadding\"><tr class='tfpadding'><td colspan=\"" + (this.showColLen.number()+1) + "\"></td></tr></tbody>");
			
			po.push("</table>");
		}
		else if (cfg.viewMode == "icon")
		{
			po.push("<div class=\"gridBodyDiv\" id=\"" + cfg.targetID + "_AX_gridBodyDiv\"></div>");
		}
		else if (cfg.viewMode == "mobile")
		{
			po.push("<div class=\"gridBodyDiv\" id=\"" + cfg.targetID + "_AX_gridBodyDiv\"></div>");
		}
		po.push("</div>");
		
		// trace(cfg.viewMode == "grid", this.hasFixed, (rewrite && this.list.length > 0), rewrite);
		
		//if (cfg.viewMode == "grid" && this.hasFixed && ((rewrite && this.list.length > 0) || !rewrite)) {
		if (cfg.viewMode == "grid" && this.hasFixed && (rewrite || typeof rewrite === "undefined")) {
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
			
			po.push("<tbody id=\"" + cfg.targetID + "_AX_fixedTfoot\"></tbody>");
			po.push("<tbody id=\"" + cfg.targetID + "_AX_ffpadding\"><tr class='tfpadding'><td colspan=\"" + (this.showFixedColLen) + "\"></td></tr></tbody>");
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
			// this.cachedDom.tbody, this.cachedDom.fixed_tbody, this.cachedDom.thpadding, this.cachedDom.tfpadding 윗마진 아래마진
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
			if(typeof list === "undefined"){
				_this.setList(_this.list, "reload");
			}
			else{
				setTimeout(function(){
					_this.setList(_this.list);
				}, 100);
			}
		}
		
		if (cfg.viewMode == "grid" || cfg.viewMode == "icon") {
			/* scroll event bind */
			// bind scroll tip
			this.scrollYHandle.unbind("mouseover").bind("mouseover", this.contentScrollTipOver.bind(this));
			this.scrollYHandle.unbind("mousedown").bind("mousedown", this.contentScrollScrollReady.bind(this));
			this.scrollXHandle.unbind("mousedown").bind("mousedown", this.contentScrollScrollReady.bind(this));
			/* scroll event bind ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
		}
	},
	/**
	 * @method AXGrid.listLoadingDisplay
	 * @description  그리드의 데이터 처리중 표시를 표현 합니다.
	 */
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
	 * @description 그리드에 데이터를 선언하거나 AJAX url 속성을 정의합니다.
	 * @example
	 * ```
	 * // Array
	 * myGrid.setList({Array});
	 *
	 * // AJAX url 속성
	 * myGrid.setList({
	 *  //method :
	 *  //contentType :
	 *  //responseType :
	 *  //dataType :
	 *  //headers :
	 *  //debug :
	 *  //ajaxUrl :
	 *  //ajaxPars :
	 *  //onLoad :
	 *  //onError :
	 *  ajaxUrl:"loadGrid.php",
	 *  ajaxPars:"param1=1&param2=2", // {String|Object}
	 *  onLoad:function(){
	 *
	 *  }
     * });
	 * ```
	 */
	setList: function (obj, sortDisable, rewrite, exts) {
		var cfg = this.config, _this = this;
		var nowSortHeadID = this.nowSortHeadID;
		var nowSortHeadObj = this.nowSortHeadObj;
		
		this.listLoadingDisplay();
		
		/*this.selectedCells.clear(); */
		/*this.selectedRow.clear(); */
		
		if (obj.ajaxUrl) {
			/*console.log("hear");	 */
			this.ajaxInfo = obj;
			this.ajax_sortDisable = sortDisable;
			this.pageActive = true;
			
			var url = obj.ajaxUrl;
			var appendPars = [
				"pageNo=" + ((exts == "paging") ? this.page.pageNo : 1),
				"pageSize=" + this.page.pageSize
			];
			
			// 기본 소팅정보
			if (cfg.remoteSort) {
				var sortParam = this.getSortParam("one");
				if (sortParam) {
					appendPars.push(sortParam);
				}
			}
			
			if (Object.isString(obj.ajaxPars)) {
				appendPars.push(obj.ajaxPars);
			} else if (Object.isObject(obj.ajaxPars)) {
				appendPars.push(axdom.param(obj.ajaxPars));
			}
			var pars = appendPars.join('&');
			
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
						else axf.alert(res);
					}
				},
				onerr: function(res){
					if (obj.onError) obj.onError.call(res);
					//else axf.alert(res.statusText);
				}
			});
			
		}
		else
		{
			if (axdom.isArray(obj)) {
				if (sortDisable || !cfg.sort) {
					this.list = obj;
				}
				else {
					if (nowSortHeadID) {
						this.list = this.sortList(nowSortHeadObj.sort, nowSortHeadObj, obj);
					} else {
						this.list = obj;
					}
				}
				
				this.printList();
				this.scrollTop(0);
				this.setStatus(this.list.length);
				
				if (!cfg.page.paging) {
					this.pagingUnit.hide();
					this.pageActive = false;
				}
			}
		}
	},
	/**
	 * @method AXGrid.reloadList
	 * @description 그리드리스트를 새로 고침 합니다.(ajax를 통할 경우 다시 가져 옵니다).
	 * @example
	 * ```
	 * myGrid.setList({
     * 	ajaxUrl:"loadGrid.php",
     * 	ajaxPars:"param1=1&param2=2"
     *  });
	 * myGrid.reloadList();
	 * ```
	 */
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
			if (Object.isString(obj.ajaxPars)) {
				appendPars.push(obj.ajaxPars);
			} else if (Object.isObject(obj.ajaxPars)) {
				appendPars.push(axdom.param(obj.ajaxPars));
			}
			var pars = appendPars.join('&');
			var _method = "post";
			var _contentType = AXConfig.AXReq.contentType;
			var _headers = {};
			var _responseType = AXConfig.AXReq.responseType;
			var _dataType = AXConfig.AXReq.dataType;
			
			if (obj.method) _method = obj.method;
			if (obj.contentType) _contentType = obj.contentType;
			if (obj.headers) _headers = obj.headers;
			
			
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
				type: _method,
				contentType: _contentType,
				responseType: _responseType,
				dataType: _dataType,
				headers: _headers,
				debug: obj.debug,
				pars: pars,
				onsucc: function (res) {
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
	/**
	 * @method AXGrid.ajaxGetList
	 * @param res {Object}
	 * @description setList 호출시 ajaxUrl에 의해 가져온 데이터를 그리드의 list로 적용 합니다.
	 */
	ajaxGetList: function (res) {
		var cfg = this.config;
		var nowSortHeadID = this.nowSortHeadID;
		var nowSortHeadObj = this.nowSortHeadObj;
		
		if (res._sortDisable || !cfg.sort || cfg.remoteSort) {
			this.list = res[AXConfig.AXGrid.keyList];
		} else {
			if (nowSortHeadID) {
				this.list = this.sortList(nowSortHeadObj.sort, nowSortHeadObj, res[AXConfig.AXGrid.keyList]);
			} else {
				this.list = res[AXConfig.AXGrid.keyList];
			}
		}
		axf.overwriteObject(this.page, res.page, true);
		
		this.printList();
		this.scrollTop(0);
		this.setPaging();
	},
	
	/**
	 * @method AXGrid.setData
	 * @param gridData {JSObject} object of grid
	 * @description <ko>그리드 데이터를 페이지까지 포함하여 정의해 줍니다. (ajax를 사용하지 않는 방법)</ko>
	 * @example
	 * ```
	 * var gridData = {
     * 	list: _obj.document_list,
     * 	page:{
     * 		pageNo: _obj.page_navigation.cur_page,
     * 		pageSize: 20,
     * 		pageCount: _obj.page_navigation.page_count,
     * 		listCount: _obj.page_navigation.total_count,
     * 		onchange: function(pageNo){
     * 			dialog.push(Object.toJSON(this));
     * 			console.log(this, pageNo);
     * 		}
     * 	}
     * };
	 * myGrid.setData(gridData);
	 * ```
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
		this.setStatus(this.list.length);
		if (cfg.page.paging) {
			this.setPaging();
		}
	},
	/**
	 * @method AXGrid.getFormatterValue
	 * @param {String|Function} formatter - config 의 colGroup이나 colHead에서 지정된 formatter
	 * @param {Object} item  - 대상 인덱스의 리스트 1개 열
	 * @param {Number} itemIndex  - 대상 인덱스
	 * @param {String} value - 표현 대상 값.
	 * @param {Object} key - config 의 colGroup 내부 key 값
	 * @param {Object} CH - 대상 그리드의 [열][행]
	 * @param {Number} CHidx - 대상 그리드의 [열][행] 중 행의 index
	 * @returns {String}
	 * @description 지정된 표현 형식으로 데이터를 HTML String 으로 변환 시킵니다.
	 */
	getFormatterValue: function (formatter, item, itemIndex, value, key, CH, CHidx) {
		var cfg = this.config;
		var result;
        if(CH.editor && (CH.editor.type == "checkbox" || CH.editor.type == "radio")) {
            //
            // editCell 처리
            var checkedStr = "", disabled = "",
                that = {
                    index: itemIndex,
                    list: this.list,
                    item: item,
                    page: this.page,
                    key: key,
                    value: value
                };

            if (value == true || value == 1 || value == "1" || value == "Y") checkedStr = ' checked="checked"';
            if (CH.editor.disabled) {
                if (CH.editor.disabled.call(that)) {
                    disabled = ' disabled="disabled"';
                }
            }

            result = '<input type="' + CH.editor.type + '" name="' + key + '" data-editor-key="' + itemIndex + ',' + CHidx + '" class="inline-editor-checkbox" ' +
                checkedStr + disabled + ' onfocus="this.blur();" />';
            //"<input type=\"checkbox\" name=\"" + CH.label + "\" class=\"gridCheckBox_body_colSeq" + CH.colSeq + "\" id=\"" + cfg.targetID + "_AX_checkboxItem_AX_" + CH.colSeq + "_AX_" + itemIndex + "\" value=\"" + value + "\" " + checkedStr + disabled + " onfocus=\"this.blur();\" />";
        } else if (CH.editor && (CH.editor.type in this.formatter)) {
            // 동일한 이름을 가진 formatter와 editor가 있으면 해당 editor의 값을 보여줄 때 동일한 이름을 가진 formatter를 사용한다.
            result = this.formatter[CH.editor.type].call(this, CH.editor.type, item, itemIndex, value, key, CH, CHidx);
		} else if (Object.isString(formatter) && (formatter in this.formatter)) {
			result = this.formatter[formatter].call(this, formatter, item, itemIndex, value, key, CH, CHidx);
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
				result = ((String(value) == "null") ? "" : value);
			}
		}
		return result;
	},
	/**
	 * @method AXGrid.getTooltipValue
	 * @param {String|Function} formatter - config 의 colGroup이나 colHead에서 지정된 formatter
	 * @param {Object} item - 대상 인덱스의 리스트 1개 열
	 * @param {Number} itemIndex - 대상 인덱스
	 * @param {String} value - 표현 대상 값.
	 * @param {Object} key - config 의 colGroup 내부 key 값
	 * @param {Object} CH - 대상 그리드의 [열][행]
	 * @returns {String}
	 * @description 지정된 표현 형식으로 데이터를 HTML String으로 변환 시킵니다.
	 */
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
	
	/**
	 * @method AXGrid.getAddingClass
	 * @param {String|Function} formatter - config 의 colGroup이나 colHead에서 지정된 formatter
	 * @param {Object} item - 대상 인덱스의 리스트 1개 열
	 * @param {Number} itemIndex - 대상 인덱스
	 * @param {String} value - 표현 대상 값.
	 * @param {Object} key - config 의 colGroup 내부 key 값
	 * @param {Object} CH - 대상 그리드의 [열][행]
	 * @returns {String}
	 * @description 해당 컬럼에 추가클래스를 정의 합니다. 문자열 방식과 함수방식을 지원합니다.
	 */
	getAddingClass: function (formatter, item, itemIndex, value, key, CH) {
		var cfg = this.config;
		var result = "";
		
		if (Object.isString(formatter)){
			result = formatter;
			
		}else if(Object.isFunction(formatter)){
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
			
		}
		
		return result;
	},
	/**
	 * @method AXGrid.getItem
	 * @param itemIndex {Number} - 대상 인덱스
	 * @param item {Object} - 대상 인덱스의 리스트 1개 열
	 * @param isfix {String} - 고정 높이 사용시 "fix"
	 * @param hasTr {String} - tr 표시 여부
	 * @returns {String}
	 * @description 대상의 데이터를 그리드에 출력되는 html 형태로 변환  합니다.
	 */
	getItem: function (itemIndex, item, isfix, hasTr) {
		if(!item) return "";
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
		var getAddingClass = this.getAddingClass.bind(this);
		
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
				console.log(e);
			}
		}
		
		var r= 0, l=cfg.body.rows.length;
		for (; r < l; r++) {
			var isLastTR = (l - 1 == r);
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
			var colCount = 0, CH, CHidx = 0, CG, CHLen = cfg.body.rows[r].length;
			for (;CHidx < cfg.body.rows[r].length; CHidx++) {
				CH = cfg.body.rows[r][CHidx];
				CG = cfg.colGroup[CHidx];
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
						
						if(trHeight && CH.rowspan < 2 && CH.colspan < 2) styles = " style=\"vertical-align:" + CH.valign + ";height:"+trHeight+"px;\"";
						
						var bodyNodeClass = "";
						if (CH.formatter == "checkbox" || CH.formatter == "radio") bodyNodeClass = " bodyTdCheckBox";
						else if (CH.formatter == "html") bodyNodeClass = " bodyTdHtml";
						
						var tooltipValue = "";
						if (CH.tooltip) tooltipValue = getTooltipValue(CH.tooltip, item, itemIndex, item[CH.key], CH.key, CH);
						
						var addClasses = "";
						if (CH.addClass) addClasses = " " + getAddingClass(CH.addClass, item, itemIndex, item[CH.key], CH.key, CH);
						
						tpo.push("<td" + valign + rowspan + colspan + styles + " " +
							" id=\"" + cfg.targetID + "_AX_" + (isfix || "n") + "body_AX_" + r + "_AX_" + CHidx + "_AX_" + itemIndex + "\" " +
							" class=\"bodyTd bodyTd_"+ CHidx + " bodyTdr_" + r + " " + bottomClass + fixedClass + "\">");
						tpo.push("<div class=\"bodyNode bodyTdText" + bodyNodeClass + addClasses + "\" " +
							" align=\"" + CH.align + "\" " +
							" id=\"" + cfg.targetID + "_AX_bodyText_AX_" + r + "_AX_" + CHidx + "_AX_" + itemIndex + "\" " +
							" title=\"" + tooltipValue + "\">");
						if ((hasFixed && !CH.isFixedCell) || !hasFixed || isfix != undefined) {
							if (CH.formatter) {
								tpo.push(getFormatterValue(CH.formatter, item, itemIndex, item[CH.key], CH.key, CH, CHidx));
							} else if(CH.editor && (CH.editor.type == "checkbox" || CH.editor.type == "radio" || CH.editor.type in this.formatter)) {
                                // 동일한 이름을 가진 formatter와 editor가 있으면 해당 editor의 값을 보여줄 때 동일한 이름을 가진 formatter를 사용한다.
                                tpo.push(getFormatterValue("", item, itemIndex, item[CG.key], CH.key, CH, CHidx));
							} else {
								tpo.push((String(item[CH.key]) == "null") ? "" : item[CH.key]);
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
	/**
	 * @method AXGrid.getIconItem
	 * @param itemIndex {Number} - 대상 인덱스
	 * @param item {Object} - 대상 인덱스의 리스트 1개 열
	 * @param viewIconObj {Object} - Config 에서 설정된 view 속성.
	 * @param {Object} cssObj
	 * @returns {String}
	 * @description config 의 viewMode가 icon 일때의 리스트를 구성 합니다.
	 * @example
	 * ```js
	 * cssObj = {
     *     box: "width: ,height:",   - 기타 사용자 지정 스타일 추가 가능
     *     img:  "left:, top: , width:, height:", - 기타 사용자 지정 스타일 추가 가능
     *     label: "left:, top: , width:, height:", - 기타 사용자 지정 스타일 추가 가능
     *     description: "left:, top: , width:, height:", - 기타 사용자 지정 스타일 추가 가능
     *     buttons: "left:, top: , width:, height:", - 기타 사용자 지정 스타일 추가 가능
     * };
	 * ```
	 */
	getIconItem: function (itemIndex, item, viewIconObj, cssObj) {
		var cfg = this.config;
		var tpo = [];
		var getFormatterValue = this.getFormatterValue.bind(this);
		var getTooltipValue = this.getTooltipValue.bind(this);
		
		var format;
		try {
			format = viewIconObj.format.call({ index: itemIndex, item: item });
		} catch (e) {
			console.log(e);
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
	/**
	 * @method AXGrid.getMobileItem
	 * @param itemIndex {Number} - 대상 인덱스
	 * @param item {Object} - 대상 인덱스의 리스트 1개 열
	 * @param mobileView {Object} - Config 에서 설정된 view 속성.
	 * @returns {String}
	 * @description config 의 viewMode가 mobile 일때의 리스트를 구성 합니다.
	 */
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
				console.log(e);
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
	/**
	 * @method AXGrid.getItemMarker
	 * @param itemIndex {Number} - 대상 인덱스
	 * @param item {Object} - 대상 인덱스의 리스트 1개 열
	 * @param isfix {String} - 고정 높이 사용시 "fix"
	 * @returns {String}
	 * @description body(list) 구성시 marker row 가 존재할경우 처리 합니다.
	 */
	getItemMarker: function (itemIndex, item, isfix, markerIndexs) {
		var cfg = this.config;
		var tpo = [];
		var evenClassName = "gridBodyMarker";
		var getFormatterValue = this.getFormatterValue.bind(this);
		var hasFixed = this.hasFixed;
		var trAddClass = "";
		
		for(var mi=0, l=markerIndexs.length, markerIndex;mi<l;mi++){
			var marker = cfg.body.marker[markerIndexs[mi]];
			if (marker.addClass) {
				try {
					trAddClass = marker.addClass.call({
							index: itemIndex,
							item: item,
							list: this.list,
							page: this.page
						}) || "";
				} catch (e) {
					console.log(e);
				}
			}
			for (var r = 0; r < marker.rows.length; r++) {
				var isLastTR = (marker.rows.length - 1 == r);
				tpo.push("<tr class=\"gridBodyTr gridBodyMarkerTr_" + itemIndex + " " + evenClassName + " " + trAddClass + "\" id=\"" + cfg.targetID + "_AX_marker_" + r + "_AX_" + (isfix || "n") + "_AX_" + itemIndex + "\">");
				var colCount = 0;
				for (var CH, CHidx = 0, __arr = marker.rows[r]; (CHidx < __arr.length && (CH = __arr[CHidx])); CHidx++) {
					if (CH.display && CH.colspan > 0) {
						
						if (isfix == "n" || (isfix != undefined && colCount < (cfg.fixedColSeq + 1))) {
							
							colCount += CH.colspan;
							
							/*radio, check exception */
							var rowspan = (CH.rowspan > 1) ? " rowspan=\"" + CH.rowspan + "\"" : "";
							var colspan = (CH.colspan > 1) ? " colspan=\"" + CH.colspan + "\"" : "";
							var valign = " valign=\"" + CH.valign + "\" style=\"vertical-align:" + CH.valign + ";\"";
							var bottomClass = (CH.isLastCell) ? "" : " bodyBottomBorder";
							var fixedClass = (CH.isFixedEndCell) ? " fixedLine" : "";
							
							/*console.log({r:r, CHidx:CHifixedColSeq:cfg.fixedColSeq, colCount:colCount}); */
							
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
					tpo.push("<td class=\"bodyNullTd\" id=\"" + cfg.targetID + "_AX_nullMarker_AX_" + itemIndex + "\" rowspan=\"" + marker.rows.length + "\"><div class=\"tdRelBlock\" id=\"" + cfg.targetID + "_AX_tdRelBlockMarker_AX_" + itemIndex + "\">&nbsp;</div></td>");
				}
				tpo.push("</tr>");
			}
			
		}
		
		
		return tpo.join('');
	},
	/**
	 * @method AXGrid.getMarkerDisplay
	 * @param itemIndex {Number} - 대상 인덱스
	 * @param item {Object} - 대상 인덱스의 리스트 1개 열
	 * @returns {Boolean}
	 * @description config 내의 marker row 를 출력할지 여부를 판단하는 사용자 함수를 호출 합니다.
	 */
	getMarkerDisplay: function (itemIndex, item) {
		var cfg = this.config;
		var bodyHasMarker = this.bodyHasMarker;
		
		if (!bodyHasMarker) return [];
		var sendObj = {
			index: itemIndex,
			list: this.list,
			item: item,
			page: this.page
		};
		
		var markerDisplay = [];
		try {
			for(var m=0, l=cfg.body.marker.length, marker;m<l;m++){
				marker = cfg.body.marker[m];
				if(marker.display.call(sendObj, itemIndex, item)){
					markerDisplay.push(m);
				}
			}
		} catch (e) {
			console.log(e);
		}
		return markerDisplay;
	},
	/**
	 * @method AXGrid.printList
	 * @param args {Object} - 출력 옵션  {sort:true}
	 * @returns {String}
	 * @description grid list 의 전체 출력을 처리 합니다.
	 */
	printList: function (args) {
		var cfg = this.config, _this = this;
		var bodyHasMarker = this.bodyHasMarker;
		var getItem = this.getItem.bind(this);
		var getItemMarker = this.getItemMarker.bind(this);
		var getMarkerDisplay = this.getMarkerDisplay.bind(this);
		var markerIndex;
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
					if (bodyHasMarker && (markerIndex = getMarkerDisplay(itemIndex, item)).length > 0) {
						po.push(getItemMarker(itemIndex, item, "n", markerIndex));
					}
				}
			}
			else
			{
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
						if (bodyHasMarker && (markerIndex = getMarkerDisplay(itemIndex, item)).length > 0) {
							po.push(getItemMarker(itemIndex, item, "fix", markerIndex));
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
				
				if (this.list.length > (printListCount + cfg.listCountMargin)) printListCount += cfg.listCountMargin;
				else printListCount = this.list.length;
				for (var item, itemIndex = 0, __arr = this.list; (itemIndex < printListCount && (item = __arr[itemIndex])); itemIndex++) {
					po.push(getItem(itemIndex, item, "n"));
					if (bodyHasMarker && (markerIndex = getMarkerDisplay(itemIndex, item)).length > 0) {
						po.push(getItemMarker(itemIndex, item, "n", markerIndex));
					}
				}
				this.cachedDom.tbody.empty();
				this.cachedDom.tbody.append(po.join(''));
				
				if (this.hasFixed) {
					po = [];
					for (var item, itemIndex = 0, __arr = this.list; (itemIndex < printListCount && (item = __arr[itemIndex])); itemIndex++) {
						po.push(getItem(itemIndex, item, "fix"));
						if (bodyHasMarker && (markerIndex = getMarkerDisplay(itemIndex, item)).length > 0) {
							po.push(getItemMarker(itemIndex, item, "fix", markerIndex));
						}
					}
					this.cachedDom.fixed_tbody.empty();
					this.cachedDom.fixed_tbody.append(po.join(''));
				}
				
				
				// init virtualScroll & control height thpadding
				this.virtualScroll = {
					startIndex    : 0,
					endIndex      : printListCount - 1,
					itemTrHeight  : itemTrHeight,
					printListCount: printListCount,
					scrollTop     : 0
				};
				
				// 출력된 테이블에 mergeCells 호출
				if (cfg.mergeCells) {
					this.mergeCells(this.cachedDom.tbody, "n");
					if (this.hasFixed) {
						this.mergeCells(this.cachedDom.fixed_tbody, "f");
					}
				}
				
				this.cachedDom.thpadding.css({ height: 0 });
				this.cachedDom.tfpadding.css({ height: cfg.scrollContentBottomMargin.number() + (this.list.length - printListCount) * (itemTrHeight) });
				if (this.hasFixed) {
					this.cachedDom.fthpadding.css({ height: 0 });
					this.cachedDom.ftfpadding.css({ height: cfg.scrollContentBottomMargin.number() + (this.list.length - printListCount) * (itemTrHeight) });
				}
				
				// 스크롤 y 포지션 초기화
				this.scrollContent.css({ top: 0 });
				this.contentScrollContentSync({ top: 0 });
				
			}
			else
			if(cfg.height == "auto" && this.list.length > 0) {
				
				this.virtualScroll = {
					startIndex : 0,
					endIndex : this.list.length,
					itemTrHeight: this.cachedDom.tbody.find("#" + cfg.targetID + "_AX_null_AX_0").outerHeight().number(),
					printListCount: this.list.length,
					scrollTop: 0
				};
				
				if(!cfg.foot){
					this.cachedDom.thpadding.css({ height: 0 });
					this.cachedDom.tfpadding.css({ height: cfg.scrollContentBottomMargin.number() });
					if(this.hasFixed) {
						this.cachedDom.fthpadding.css({ height: 0 });
						this.cachedDom.ftfpadding.css({ height: cfg.scrollContentBottomMargin.number() });
					}
				}else{
					this.cachedDom.thpadding.css({ height: 0 });
					this.cachedDom.tfpadding.css({ height: cfg.scrollContentBottomMargin.number() });
					if(this.hasFixed) {
						this.cachedDom.fthpadding.css({ height: 0 });
						this.cachedDom.ftfpadding.css({ height: cfg.scrollContentBottomMargin.number() });
					}
				}
				
				if (cfg.mergeCells) {
					this.mergeCells(this.cachedDom.tbody, "n");
					if (this.hasFixed) {
						this.mergeCells(this.cachedDom.fixed_tbody, "f");
					}
				}
				
				this.scrollContent.css({ top: 0 });
				this.contentScrollContentSync({ top: 0 });
				
			}
			else
			{
				
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
			this.body.find(".gridBodyTr:not(.gridBodyMarker)").bind("click", this.gridBodyClick.bind(this));
			if (this.needBindDBLClick()) this.body.find(".gridBodyTr").bind("dblclick", this.gridBodyDBLClick.bind(this));
			
			if (this.selectedRow && this.selectedRow.length > 0) {
				for (var itemIndex = 0, __arr = this.selectedRow; itemIndex < __arr.length; itemIndex++) {
					this.body.find(".gridBodyTr_" + __arr[itemIndex]).addClass("selected");
				}
				var itemIndex = this.selectedRow.last();
				var itemDom = this.body.find(".gridBodyTr_" + itemIndex);
				if(itemDom[0]){
					var trTop = itemDom.position().top;
					var scrollHeight = this.scrollContent.height();
					var bodyHeight = this.body.height();
					var trHeight = this.cachedDom.tbody.find("#" + cfg.targetID + "_AX_null_AX_0").outerHeight().number();
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
				}
			}
			
			// printList then body.onchangeScroll
			if(cfg.body.onchangeScroll){
				var sendObj = axf.copyObject(this.virtualScroll);
				cfg.body.onchangeScroll.call(sendObj, sendObj);
			}
			
		}
		else
		if (cfg.viewMode == "icon") {
			
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
			
		}
		else
		if (cfg.viewMode == "mobile") {
			
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
		
		if(typeof args == "undefined"){
			this.contentScrollResize();
		}
		else
		if(typeof args != "undefined" && args.sort)
		{
			this.contentScrollResize(false);
		}
		
		this.contentScrollXAttr = null;
		this.contentScrollYAttr = null;
	},
	/**
	 * @method AXGrid.updateList
	 * @param itemIndex {Number} - 대상 인덱스
	 * @param item {Object} - 대상 인덱스의 리스트 아이템.
	 * @returns {AXGrid}
	 * @description body(list) 구성시 marker row 가 존재할경우 처리 합니다.
	 * @example
	 * ```
	 *  var item = {
     * 	a: "a",
     * 	b: "b",
     * 	c: "c",
     * 	d: "d",
     * 	e: 14350
     *  };
	 *      myGrid.updateList(0,item);
	 * ```
	 */
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
				console.log(e);
			}
		}
		
		axdom("#" + cfg.targetID + "_AX_tbody").find(".gridBodyTr_" + itemIndex).addClass(trAddClass);
		if (this.hasFixed) {
			axdom("#" + cfg.targetID + "_AX_fixedTbody").find(".gridBodyTr_" + itemIndex).addClass(trAddClass);
		}
		this.redrawDataSet();
	},
	/**
	 * @method AXGrid.pushList
	 * @param {Object|Array} pushItem
	 * @param {Number} [insertIndex] - 삽입위치 인덱스 <en>Index of Insert Position</en>
	 * @returns {AXGrid}
	 * @description 그리드에 데이터를 삽입합니다. <en>push to Grid.list</en>
	 * @example
	 * ```
	 *  myGrid.pushList([item Array]);
	 *  myGrid.pushList([item Array], 1);
	 *  myGrid.pushList([item]);
	 * ```
	 */
	pushList: function (pushItem, insertIndex) {
		var cfg = this.config;
		
		if(this.inline_edit){
			setTimeout((function(){
				this.pushList(pushItem, insertIndex);
			}).bind(this), 300);
			return this;
		}
		this.cancelEditor();
		var pushData = [];
		// 오브젝트 또는 Array를 처리 할 수 있도록 변경
		if (Object.isArray(pushItem)) {
			pushData = pushItem;
		} else {
			pushData = [pushItem];
		}
		
		pushItem._CUD = "C";
		if (insertIndex != null && typeof insertIndex != "undefined") {
			if(insertIndex > this.list.length){
				insertIndex = this.list.length;
			}
			var itemIndex = insertIndex;
			var newList = [];
			for (var L, listIndex = 0, __arr = this.list; (listIndex < __arr.length && (L = __arr[listIndex])); listIndex++) {
				if (listIndex == itemIndex) {
					for (var li = 0; li < pushData.length; li++) {
						newList.push(pushData[li]);
					}
				}
				newList.push(L);
			}
			
			if (listIndex == itemIndex) {
				for (var li = 0; li < pushData.length; li++) {
					newList.push(pushData[li]);
				}
			}
			
			this.list = newList;
			
			/*
			 var item = this.list[itemIndex];
			 var npo = this.getItem(itemIndex, item, "n");
			 if (this.hasFixed) {
			 var fpo = this.getItem(itemIndex, item, "fix");
			 }
			 */
			
			this.printList();
			//this.bigDataSyncApply();
			this.contentScrollResize(false);
			this.setFocus(itemIndex);
			
		}
		else
		{
			for (var li = 0; li < pushData.length; li++) {
				this.list.push(pushData[li]);
			}
			this.printList();
			//this.bigDataSyncApply();
			this.contentScrollResize(false);
			//this.setFocus(this.list.length-1); insertIndex 가 없으면 focus 실행 안함.
		}
		
		this.setStatus(this.list.length);
		this.redrawDataSet();
		
		return this;
	},
	/**
	 * @method AXGrid.fetchList
	 * @param list {Array} - 추가될 list item Array
	 * @returns {AXGrid}
	 * @description grid의 리스트에 아이템을 추가 합니다.(배열)
	 * @example
	 * ```
	 *  var list = [
	 *      {no:1, title:"AXGrid 첫번째 줄 입니다.", writer:"장기영", regDate:"2013-01-18", desc:"myGrid.setList 의 첫번째 사용법 list json 직접 지정 법", price:123000, amount:10},
	 *      {no:2, title:"AXGrid 두번째 줄 입니다.", writer:"장기영", regDate:"2013-01-18", desc:"myGrid.setList 의 첫번째 사용법 list json 직접 지정 법", price:12300, amount:7},
	 *      {no:3, title:"AXGrid 세번째 줄 입니다.", writer:"장기영", regDate:"2013-01-18", desc:"myGrid.setList 의 첫번째 사용법 list json 직접 지정 법", price:12000, amount:5}
	 *  ];
	 *  myGrid.fetchList(list);
	 * ```
	 */
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
	/**
	 * @method AXGrid.removeList
	 * @param removeList {Array} - 키값 배열
	 * @returns {AXGrid}
	 * @description removeList의 전달된 키값 과 일치하는 대상을 삭제 합니다.이때 고유한 값이 아닌 항목을 전달 할 때에는 에러가 발생 할 수 있습니다.
	 * @example
	 * ```
	 * var checkedList = myGrid.getCheckedList(0);// colSeq
	 * var removeList = [];
	 * $.each(checkedList, function(){
     * 	removeList.push({no:this.no});
     * });
	 * myGrid.removeList(removeList);
	 * ```
	 */
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
		
		if (cfg.viewMode == "grid" && cfg.height != "auto") {
			this.bigDataSync(true);
		} else {
			this.printList();
		}
		this.setStatus(this.list.length);
		this.redrawDataSet();
	},
	/**
	 * @method AXGrid.removeListIndex
	 * @param removeList {Array} - index 배열 (key value "index" 가 있어야 함)
	 * @returns {AXGrid}
	 * @description removeList의 index에 해당하는 항목을 제거 합니다..
	 * @example
	 * ```
	 *  var removeList = [{index:0},{index:1},{index:2}];
	 *  myGrid.removeListIndex(removeList);
	 * ```
	 */
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
		
		if (cfg.viewMode == "grid" && cfg.height != "auto") {
			this.bigDataSync(true);
		} else {
			this.printList();
		}
		
		this.setStatus(this.list.length);
		this.redrawDataSet();
	},
	/**
	 * @method AXGrid.restoreList
	 * @param removeList {Array} - 키값 배열
	 * @returns {AXGrid}
	 * @description restoreList 전달된 키값 과 일치하는 대상의 삭제 표시를 제거 합니다.이때 고유한 값이 아닌 항목을 전달 할 때에는 에러가 발생 할 수 있습니다.(passive)
	 * @example
	 * ```
	 *  var myGrid = new AXGrid();
	 *  myGrid.setConfig({passiveMode:true});
	 *  var checkedList = myGrid.getCheckedList(0);// colSeq
	 *  var removeList = [];
	 *  $.each(checkedList, function(){
     * 	removeList.push({no:this.no});
     *  });
	 *  myGrid.restoreList(removeList);
	 * ```
	 */
	restoreList: function (restoreList) {
		var cfg = this.config;
		var collect = [];
		
		for(var lidx = 0;lidx < this.list.length;lidx++){
			var isDel = false, l = this.list[lidx];
			for(var ridx = 0; ridx < restoreList.length; ridx++) {
				var r = restoreList[ridx];
				axf.each(r, function (k, v) {
					if (l[k] == v) {
						isDel = true;
					} else {
						isDel = false;
						return false;
					}
				});
				if(isDel) break;
			}
			if (isDel) {
				if (l._CUD == "D") {
					l._CUD = "";
				}
				collect.push(l);
			} else {
				collect.push(l);
			}
		}
		
		this.list = collect;
		if (cfg.viewMode == "grid" && cfg.height != "auto") {
			this.bigDataSync(true);
		} else {
			this.printList();
		}
		this.setStatus(this.list.length);
		this.redrawDataSet();
	},
	/**
	 * @method AXGrid.gridBodyOver
	 * @param {Event} - Grid body내부에서 감지되는 이벤트
	 * @description  Grid 리스트(body)에 대한 mouseover 이벤트 처리를 합니다.
	 */
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
		
		this.onevent_grid({type:"grid-list-over"});
	},
	/**
	 * @method AXGrid.gridBodyOut
	 * @param {Event} - Grid body내부에서 감지되는 이벤트
	 * @description  Grid 리스트(body)에 대한 mouseout 이벤트 처리를 합니다.
	 */
	gridBodyOut: function (event) {
		var cfg = this.config;
		
		if (this.overedItemIndex) {
			this.body.find(".gridBodyTr_" + this.overedItemIndex).removeClass("hover");
		}
		
	},
	/**
	 * @method AXGrid.gridBodyClick
	 * @param {Event} - Grid body내부에서 감지되는 이벤트
	 * @description  Grid 리스트(body)에 대한 click 이벤트 처리를 합니다.
	 */
	gridBodyClick: function (event) {
		var cfg = this.config;
		
		if (event.target.tagName.toLowerCase() == "input" && (
				event.target.type == "radio" || event.target.type == "checkbox"
			)) {
			this.gridBodyClickAct(event);
		}
		else
		if (cfg.body.ondblclick && !event.shiftKey && !(event.metaKey || event.ctrlKey)) {
			if (this.needBindDBLClick()) {
				clearTimeout(this.bodyClickObserver);
				this.gridBodyClickAct(event);
			}
			else {
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
		}
		else {
			this.gridBodyClickAct(event);
		}
	},
	/**
	 * @method AXGrid.gridBodyClickAct
	 * @param {Event} - Grid body내부에서 감지되는 이벤트
	 * @description  Grid 리스트(body)내부 요소에 대한 클릭 후 처리를 합니다(checkbox,radio).
	 */
	gridBodyClickAct: function (event) {
		this.bodyClickObserver = null;
		var cfg = this.config;
		var eventTarget = event.target;
		
		if (event.target.id != "") {
			//var eid = event.target.id.split(/_AX_/g);
			var isoncheck = false, checkedValue;
			if (eventTarget.tagName.toLowerCase() == "input") {
				if(!eventTarget.disabled) {
					if (eventTarget.type.toLowerCase() == "checkbox" || eventTarget.type.toLowerCase() == "radio") {
						
						isoncheck = true;
						checkedValue = eventTarget.checked;
						
						var ieid = event.target.id.split(/_AX_/g);
						var checkboxColSeq = ieid[ieid.length - 2];
						var checkboxIndex = ieid[ieid.length - 1];
						if (cfg.colGroup[checkboxColSeq] && cfg.colGroup[checkboxColSeq].oncheck) {
							var sendObj = {
								index: checkboxIndex,
								list : this.list,
								item : this.list[checkboxIndex]
							};
							try {
								cfg.colGroup[checkboxColSeq].oncheck.call(sendObj, event.target.checked);
							} catch (e) {
								console.log(e);
							}
						}
					}
				}
			}
		}
		
		if (isoncheck)
		{ /*체크박스 구현 */
			var targetID = event.target.id;
			var itemIndex = targetID.split(/_AX_/g).last();
			var ids = targetID.split(/_AX_/g);
			if (ids.length < 4) return; //  약속된 아이디 형식이 아님.
			var item = this.list[itemIndex], r = ids[ids.length - 3], c = ids[ids.length - 2];
			
			if(cfg.colGroup[c].formatter === "radio"){
				var ii= 0, ll = this.list.length;
				for(;ii<ll;ii++) {
					if(typeof this.list[ii].___checked === "undefined") this.list[ii].___checked = {};
					this.list[ii].___checked[c] = false;
				}
			}
			
			if(typeof this.list[itemIndex].___checked === "undefined") this.list[itemIndex].___checked = {};
			this.list[itemIndex].___checked[c] = checkedValue;
			//console.log(this.list[itemIndex].___checked[c]);
			
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
				console.log(e);
			}
		}
		else
		{
			var myTarget = axf.get_event_target(eventTarget, function(el){
				var edom = axdom(el);
				return (!edom.hasClass("buttonGroupItem") && (edom.hasClass("bodyTd") || edom.hasClass("bodyViewIcon") || edom.hasClass("bodyViewMobile")));
			});
			
			/* event target search ------------------------ */
			
			if (cfg.viewMode == "grid") {
				if (myTarget) {
					
					var body = this.body,
					    targetID = myTarget.id,
					    itemIndex = targetID.split(/_AX_/g).last(),
					    ids = targetID.split(/_AX_/g),
					    len = this.selectedRow.length, _selectedRow = [], hasItem = false,
					    r = ids[ids.length - 3], c = ids[ids.length - 2],
					    CG = cfg.colGroup[ (cfg.body.rowsEmpty) ? c : (cfg.body.rows[r][c].colSeq||c) ],
					    i = 0;
					
					this._focusedItemIndex = itemIndex;
					if(this.editCellClear(r, c, itemIndex) === false){
						
						if(CG.editor) return this; // 현재 에디팅 중인 셀이 클릭 되었을 때는 아무런 클릭 이벤트를 발생 시키지 않습니다.
					}
					
					if (event.shiftKey) {
						if (this.selectedCells.length > 0) { // 셀선택 클리어
							axf.each(this.selectedCells, function () {
								body.find(".bodyTd_" + this).removeClass("selected");
							});
							this.selectedCells.clear();
						}
						
						if(len > 0){
							var l_itemIndex = this.selectedRow.last().number(), itemIndex = itemIndex.number(), st_index, ed_index;
							if(l_itemIndex < itemIndex){
								st_index = l_itemIndex + 1;
								ed_index = itemIndex;
							}else{
								st_index = itemIndex;
								ed_index = l_itemIndex;
							}
							
							for(var k=st_index;k<(ed_index+1);k++) {
								hasItem = false;
								i=0;
								for(;i<len;i++) {
									if(k == this.selectedRow[i].number()){
										hasItem = true;
										break;
									}
								}
								if(!hasItem){
									this.body.find(".gridBodyTr_" + k).addClass("selected");
									this.selectedRow.push(k);
								}
							}
						}else{
							this.body.find(".gridBodyTr_" + itemIndex).addClass("selected");
							this.selectedRow.push(itemIndex.number());
						}
						this.clearRange();
					}
					else if (event.metaKey || event.ctrlKey)
					{
						if (this.selectedCells.length > 0) { // 셀선택 클리어
							axf.each(this.selectedCells, function () {
								body.find(".bodyTd_" + this).removeClass("selected");
							});
							this.selectedCells.clear();
						}
						
						for(;i<len;i++){
							if(this.selectedRow[i] == itemIndex.number()) {
								body.find(".gridBodyTr_" + itemIndex).removeClass("selected");
								hasItem = true;
							} else {
								_selectedRow.push(this.selectedRow[i]);
							}
						}
						this.selectedRow = _selectedRow;
						
						if(!hasItem){
							body.find(".gridBodyTr_" + itemIndex).addClass("selected");
							this.selectedRow.push(itemIndex.number());
						}
						
						// 셀 선택 기능 : 비활성처리
						/*
						 if(false) {
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
						 }
						 */
						
						this.clearRange();
					}
					else
					{
						if (this.selectedCells.length > 0) { // 셀선택 클리어
							axf.each(this.selectedCells, function () {
								body.find(".bodyTd_" + this).removeClass("selected");
							});
							this.selectedCells.clear();
						}
						
						if(CG.editor && (CG.editor.type == "checkbox"||CG.editor.type == "radio")) {
							this.editCell(r, c, itemIndex, 0, event);
						}
						else
						if (this.selectedRow.length > 0)
						{
							// colGroup 에 editor이 있는지 파악
							
							if(CG.editor && cfg.control_lock_status < 1){
								for(;i<len;i++){
									if(this.selectedRow[i] == itemIndex){
										hasItem = true;
										break;
									}
								}
								if(hasItem){ // inline 에디트가 발생할 수 있는 상황
									this.editCell(r, c, itemIndex);
								}
							}
							
							if(!hasItem){
								for(i=0;i<len;i++){
									body.find(".gridBodyTr_" + this.selectedRow[i]).removeClass("selected");
								}
							}
						}
						this.selectedRow.clear();
						this.body.find(".gridBodyTr_" + itemIndex).addClass("selected");
						this.selectedRow.push(itemIndex.number());
						
						this.body.find(".gridBodyTr_" + itemIndex).find(".bodyTd_" + c + ".bodyTdr_" + r).addClass("selected");
						this.selectedCells.push(c);
						
						var item = this.list[itemIndex];
						
						if (!hasItem && cfg.body.onclick) {
							
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
								console.log(e);
							}
						}
						/*if(this.hasEditor) this.setEditor(item, itemIndex); */
					}
				}
			}
			else
			if (cfg.viewMode == "icon") {
				if (myTarget) {
					var targetID = myTarget.id;
					var itemIndex = targetID.split(/_AX_/g).last();
					this._focusedItemIndex = itemIndex;
					
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
								console.log(e);
							}
						}
					}
				}
			}
			else
			if (cfg.viewMode == "mobile") {
				if (myTarget) {
					var targetID = myTarget.id;
					var itemIndex = targetID.split(/_AX_/g).last();
					this._focusedItemIndex = itemIndex;
					
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
								console.log(e);
							}
						}
					}
				}
			}
			
			this.onevent_grid({type:"grid-list-click"});
		}
		
	},
	/**
	 * @method AXGrid.gridBodyDBLClick
	 * @param {Event} - Grid body내부에서 감지되는 이벤트
	 * @description  Grid 리스트(body)에 대한 doubleclick 이벤트 처리를 합니다.
	 */
	gridBodyDBLClick: function (event) {
		var cfg = this.config;
		var eventTarget = event.target;
		if (eventTarget.tagName.toLowerCase() == "input" || eventTarget.tagName.toLowerCase() == "button") return;
		/*input, button 인 경우 제외 */
		
		var myTarget = axf.get_event_target(eventTarget, function(el){
			var edom = axdom(el);
			return (!edom.hasClass("buttonGroupItem") && (edom.hasClass("bodyTd") || edom.hasClass("bodyViewIcon") || edom.hasClass("bodyViewMobile")));
		});
		
		/* event target search ------------------------ */
		if (cfg.viewMode == "grid") {
			if (myTarget) {
				/*colHeadTool ready */
				/*console.log({tagName:myTarget.tagName, id:myTarget.id}); */
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
						console.log(e);
					}
				}
			}
		} else if (cfg.viewMode == "icon") {
			if (myTarget) {
				/*colHeadTool ready */
				/*console.log({tagName:myTarget.tagName, id:myTarget.id}); */
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
						console.log(e);
					}
				}
			}
		} else if (cfg.viewMode == "mobile") {
			if (myTarget) {
				/*colHeadTool ready */
				/*console.log({tagName:myTarget.tagName, id:myTarget.id}); */
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
						console.log(e);
					}
				}
			}
		}
		
		this.stopEvent(event);
		this.clearRange();
	},
	/**
	 * 그리드 셀 인라인 에디트
	 * @method AXGrid.editCell
	 * @param {Number} r - index of body.rows
	 * @param {Number} c - index of colGroup
	 * @param {Number} itemIndex - index of this.list
	 * @returns {AXGrid}
	 */
	editCell: function(r, c, ii, times, event){
		this.setFocus(ii);
		var get_editor;
		// todo : 바디아이템으로 부터 colGroup 정확히 구하기
		var _this = this, cfg = this.config, CG = cfg.colGroup[ (cfg.body.rowsEmpty) ? c : (cfg.body.rows[r][c].colSeq||c) ],
		    po = [], that = {item:this.list[ii], index:ii, CG:CG, r:r, c:c};
		
		//td : div 의 부모TD 태그, parent_type : nbody|fixedbody 로 결정되어 위치를 판단하는데 쓰임.
		//po : 태그 생성 배열, inline_editor_id : 인라인 에디터의 아이디
		// todo : 틀고정 영역이 있을 때 인라인 에디팅 테스트
		
		// disabled 체크
		if(CG.editor.disabled){
			if(CG.editor.disabled.call(that)){
				return this;
			}
		}
		
		// 2015-06-04 신규 , 수정시 필드  시작
		if(CG.editor.createEdit===false && that.item['_CUD'] =='C'){
			return this;
		}
		
		if(CG.editor.updateEdit===false && that.item['_CUD'] !='C'){
			return this;
		}
		// 2015-06-04 신규 , 수정시 필드  끝
		
		// 2015-06-09 edit 활성화시 스크롤 이동하게 처리. 
		var trackX =_this.scrollTrackX;
		
		if(trackX.is(':visible')){
			var _r = r, _c = c;
			var colHeadRows = cfg.colHead.rows;
			if(colHeadRows.length > 1){
				if(!this.config.colHead._headerRow){
					this.config.colHead._headerRow = {};
					
					for(var i=0 ; i < colHeadRows.length ; i++){
						for(var j=0; j < colHeadRows[i].length;j++){
							this.config.colHead._headerRow[colHeadRows[i][j].key]={r:i,c: j} ;
						}
					}
				}
				_r = this.config.colHead._headerRow[that.CG.key].r;
				_c = this.config.colHead._headerRow[that.CG.key].c;
			}
			
			var selColHeader = jQuery("#" + cfg.targetID + "_AX_colHead_AX_" + _r + "_AX_" +_c)
				, scrollXW = _this.scrollXHandle.width()
				, trackXW = trackX.width()
				, editHeaderLW = (selColHeader.position().left+selColHeader.width())
				, absEditHeaderLW=editHeaderLW - Math.abs(_this.colHead.position().left);
			
			var _leftval =0,scrollSyncFlag = false;
			if( absEditHeaderLW > 0 && absEditHeaderLW < trackXW*2 ){
				if( absEditHeaderLW > trackXW){
					scrollSyncFlag = true;
					_leftval = _this.scrollXHandle.position().left+((absEditHeaderLW-trackXW)/(_this.colHead.width()/trackXW)) ;
					_leftval=_leftval+10;
				}else{
					if(selColHeader.width() > absEditHeaderLW){
						scrollSyncFlag = true;
						_leftval = _this.scrollXHandle.position().left-((selColHeader.width() - absEditHeaderLW)/(_this.colHead.width()/trackXW));
						_leftval=_leftval-10;
					}
				}
			}else{
				scrollSyncFlag = true;
				_leftval = editHeaderLW/(_this.colHead.width()/trackXW) -(scrollXW/2) ;
			}
			
			if(scrollSyncFlag){
				_leftval = _leftval  < 0 ? 0 :( _leftval > trackXW - scrollXW ? trackXW - scrollXW : _leftval );
				
				_this.contentScrollScrollSync({left:_leftval});
				_this.scrollXHandle.css('left',(_leftval)+'px');
			}
		}
		// 2015-06-09 edit 활성화시 스크롤 이동하게 처리. 
		
		this.editCellClear();
		
		if(CG.editor.type == "checkbox" || CG.editor.type == "radio") {
			if(CG.editor.type == "radio"){
				var _i = 0, _l = this.list.length;
				for(;_i<_l;_i++) this.list[_i][CG.key] = false;
			}
			var checkbox_els = _this.body.find('[data-editor-key="' + ii + ',' + c + '"]').get(0);
			if(event && event.target.tagName != "INPUT" && CG.editor.type == "checkbox"){
				_this.updateItem(r, c, ii, !checkbox_els.checked);
			}
			else if(event && event.target.tagName != "INPUT" && CG.editor.type == "radio") {
				_this.updateItem(r, c, ii, true);
			}
			else{
				_this.updateItem(r, c, ii, checkbox_els.checked);
			}
			return this;
		}
		
		// 타입이 finder 이면 토스~
		if(CG.editor.type == "finder") {
			CG.editor.finder.onclick.call({
				id : cfg.targetID + '_inline_editor',
				value: jQuery('#' + cfg.targetID + '_inline_editor').val(),
				r: r,  c:c, index:ii, item: _this.list[ii]
			});
			return this;
		}
		
		setTimeout(function () {
			
			var div = _this.body.find("#" + cfg.targetID + "_AX_bodyText_AX_" + r + "_AX_" + c + "_AX_" + ii),
			    td, td_ids, td_val, parent_type, inline_editor_id, inline_editor, inline_css, AXBindConfig = {};
			
			if(!div.get(0)){
				if((times|0) < 3) _this.editCell(r, c, ii, (times|0)+1); // 3번시도후 포기 합니다.
				else console.log("에디팅 타겟을 찾을 수 없습니다. AXGrid.editCell");
				// call again
				return false;
			}
			
			td = div.parent(), td_ids = td.get(0).id.split(/_AX_/g),
				td_val = _this.list[ii][CG.key],
				parent_type = td_ids[td_ids.length-4],
				inline_editor_id = cfg.targetID + "_AX_inline_editor_AX_" + r + "_AX_" + c + "_AX_" + ii;
			
			td_val = _this.getFormatterValue(CG.editor.formatter, _this.list[ii], ii, td_val, CG.key, {}, 0);
			
			po.push('<div class="inline-editor" id="' + inline_editor_id + '">');
			po.push(get_editor(CG.editor, td_val));
			po.push('</div>');
			div.after(po.join(''));
			
			inline_editor = jQuery("#" + inline_editor_id);
			
			inline_css = div.position();
			inline_css.width = div.width();
			inline_editor.css(inline_css).find("input").select();
			_this.inline_edit = {editor:inline_editor, r:r,  c:c,  ii:ii, cell:div};

			if(inline_editor.find("input").get(0) && CG.editor.type != "calendar") {
				jQuery(document.body).unbind("click.axgrid").bind("click.axgrid", function (e) {
					var target = axf.get_event_target(e.target, {id: inline_editor_id});
					if (!target) {
						_this.updateItem(r, c, ii, inline_editor.find("input").val());
						jQuery(document.body).unbind("click.axgrid");
						_this.gridFocus.focus();
					}
				});
			}
			
			// AXBind 연결
			jQuery.extend(AXBindConfig, CG.editor.config);
			
			if (CG.editor.type in _this.inlineEditor) {
				_this.inlineEditor[CG.editor.type].init.call(_this, inline_editor, AXBindConfig, CG, r, c, ii);
			}

			inline_editor.bind("keydown", function(e){
				if (!e) e = window.event;
				if ((e.keyCode == axf.Event.KEY_RETURN || e.keyCode == axf.Event.KEY_TAB) && (!e.altKey)){
					try {
						if (e.preventDefault) event.preventDefault();
						if (e.stopPropagation) event.stopPropagation();
						e.cancelBubble = true;
					} catch (err) {
						
					}
				}
				setTimeout(function(){
					if(
						(
							e.keyCode == axf.Event.KEY_DOWN || e.keyCode == axf.Event.KEY_UP ||
							e.keyCode == axf.Event.KEY_RETURN || e.keyCode == axf.Event.KEY_TAB
						) && (!e.altKey)
					) {
						if (e.keyCode == axf.Event.KEY_RETURN || e.keyCode == axf.Event.KEY_TAB) {
							//_this.updateItem(r, c, ii, e.target.value);
							jQuery(document.body).trigger('click.axgrid'); //2015-06-12 탭키 눌렀을때 select box 값이 object가 아닌 value로 들어와서 trigger 처리. 
							_this.gridFocus.focus();
						}
						
						if (e.keyCode == axf.Event.KEY_RETURN || e.keyCode == axf.Event.KEY_UP || e.keyCode == axf.Event.KEY_DOWN) {
							var new_ii;
							if (e.shiftKey && e.keyCode == axf.Event.KEY_RETURN || e.keyCode == axf.Event.KEY_UP) {
								new_ii = ii.number() - 1;
							}
							else
							{
								new_ii = ii.number() + 1;
							}
							if (new_ii < 0) new_ii = _this.list.length - 1;
							if (_this.list.length > new_ii) _this.editCell(r, c, new_ii);
							
							//else if (_this.list.length <= new_ii) new_ii = 0;
							
						}
						else if (e.keyCode == axf.Event.KEY_TAB) {
							var new_c, ci, cl;
							ci = 0, cl = cfg.colGroup.length;
							if (e.shiftKey && e.keyCode == axf.Event.KEY_TAB) {
								for (ci = cl - 1; ci > -1; ci--) {
									if (cfg.colGroup[ci].editor && cfg.colGroup[ci].editor.type != "finder") {
										if (typeof new_c == "undefined") {
											new_c = ci;
										}
										else
										if (ci < c) {
											new_c = ci;
											break;
										}
									}
								}
							} else {
								for (; ci < cl; ci++) {
									if (cfg.colGroup[ci].editor && cfg.colGroup[ci].editor.type != "finder") {
										if (typeof new_c == "undefined") {
											new_c = ci;
										}
										else
										if (ci > c) {
											new_c = ci;
											break;
										}
									}
								}
							}
							_this.editCell(r, new_c, ii);
						}
						_this.stopEvent(e);
					}
					else
					if(e.keyCode == axf.Event.KEY_ESC){
						_this.editCellClear();
					}
				}, 10);
			});
		}, 10);
		
		get_editor = function(cond, val){
			if(typeof val == "undefined") val = "";
			// text, number, money, calendar, select, selector, switch, segment, slider, finder
			var po = [], _val, maxLength = "";
			if(cond.maxLength) maxLength = ' maxLength="' + cond.maxLength + '"';
			
			if(cond.type === "select" || cond.type === "AXSelect"){
				
				if(typeof val === "string" || typeof val === "number" || typeof val === "boolean"){
					_val = val;
				}else{
					_val = val[cond.optionValue||"optionValue"];
				}
				po.push('<select name="inline_editor_item" id="' + cfg.targetID + '_inline_editor" class="inline_editor_select '+cond.type+'">');
				if(cond.options) {
					for (var oi = 0; oi < cond.options.length; oi++) {
						var value, text;
						value = cond.options[oi][cond.optionValue || "optionValue"], text = cond.options[oi][cond.optionText || "optionText"];
						//obj[cond.optionValue||"optionValue"] = sdom.options[sdom.selectedIndex].value;
						
						po.push('<option value="' + value + '"');
						if (value == _val) {
							po.push(' selected="selected"');
						}
						po.push('>' + text + '</option>');
					}
				}
				po.push('</select>');
			}
			else
			{
				if(cond.type == "finder"){
					po.push('<input type="text" name="inline_editor_item" id="' + cfg.targetID + '_inline_editor"' + maxLength + ' value="' + val + '" ');
					
					if(cond.readonly){
						po.push(' class="inline_editor_input '+cond.type+'" ');
						po.push(' readonly="readonly" ');
					}
					else
					{
						po.push(' class="inline_editor_input '+cond.type+'" ');
					}
					po.push(' />');
					po.push('<a class="finder-handle"></a>');
				}
				else
				{
					po.push('<input type="' + (cond.textType||"text") + '" name="inline_editor_item" id="' + cfg.targetID + '_inline_editor"' + maxLength + ' value="' + val + '" class="inline_editor_input '+cond.type+'" ' + (cond.readonly?'readonly="readonly"':'') + ' />');
				}
			}
			return po.join('');
		};
		
		return this;
	},
	/**
	 * 셀 인라인 에디트 상태 해제
	 * @method AXGrid.editCellClear
	 * @param {Number} [r] - index of config.body.rows
	 * @param {Number} [c] - index of colGrop
	 * @param {Number} [itemIndex] - index of data
	 * @returns {AXGrid|false}
	 * @example
	 * ```
	 * mygrid.editCellClear(); // 셀 에디트 상태 해제
	 * mygrid.editCellClear(0, 1, 1); // 셀 에디트 해제 하려는 위치가 값을 현재 위치와 비교 하여 false가 리턴되면 현재 위치
	 * ```
	 */
	editCellClear: function(){
		if(this.inline_edit){
			if(this.inline_edit.r == arguments[0] && this.inline_edit.c == arguments[1] && this.inline_edit.ii == arguments[2]) {
				return false;
			}
			else
			if( typeof arguments[2] != "undefined" && this.inline_edit && this.inline_edit.editor.find("input").get(0) ){
				var ids = this.inline_edit.editor.get(0).id.split(/_AX_/g);
				var r, c, ii;
				r = ids[ids.length-3], c = ids[ids.length-2], ii = ids[ids.length-1];
				this.updateItem(r, c, ii, this.inline_edit.editor.find("input").val());
			}
			else
			{
				try{
					this.inline_edit.editor.find("input").unbindInput();
				}catch(e){}
				this.inline_edit.editor.remove();
				this.inline_edit = null;
			}
		}
		jQuery(document.body).unbind("click.axgrid");
		return this;
	},
	/**
	 * 현재 활성화된 인라인 에디트 input에 값을 지정합니다.
	 * @method AXGrid.setEditCellValue
	 * @param {String} val
	 * @returns {AXGrid}
	 * @example
	 * ```
	 * mygrid.setEditCellValue("123");
	 * ```
	 */
	setEditCellValue: function(val){
		if(this.inline_edit) {
			this.inline_edit.editor.find("input, select, textarea").val(val);
		}
		return this;
	},
	/**
	 * 리스트데이터의 특정 아이템값을 변경합니다.
	 * @method AXGrid.updateItem
	 * @param {Number} rowsIndex - 바디의 한아이템의 줄 대게 0 body안에 rows를 구성하는 경우에 사용
	 * @param {Number} colsIndex - 컬럼 위치
	 * @param {Number} itemIndex - 아이템의 인덱스 <en>index of item<en>
	 * @param {String|Number} value - 변경하려는 값
	 * @returns {AXGrid}
	 * @example
	 * ```
	 * myGrid.updateItem(0, 2, 1, "AXISJ");
	 * ```
	 */
	updateItem: function(r, c, itemIndex, value){
		var _this = this,  cfg = this.config,
		    CH = cfg.body.rows[r][c], item = this.list[itemIndex],
		    CG = cfg.colGroup[c],
		    that = {item:item, index:itemIndex, CG:CG, r:r, c:c};
		
		if(cfg.control_lock_status > 1) {
			return this;
		}
		
		var beforeValue = _this.list[itemIndex][CH.key];
		
		if(CG.editor){
			if (CG.editor.type in _this.inlineEditor) {
				value = _this.inlineEditor[CG.editor.type].getValue.call(that, value);
			}
			
			if (CG.editor.beforeUpdate) {
				value = CG.editor.beforeUpdate.call(that, value);
			}
		}
		
		_this.list[itemIndex][CH.key] = value;
		
		// ._CUD 값 조정
		if(_this.list[itemIndex]._CUD != "C" && _this.list[itemIndex]._CUD != "D"){
			var isChanged = false;
			if (Object.isObject(beforeValue)) {
				var beforeValueString = Object.values(beforeValue).join("_");
				var valueString = Object.values(value).join("_");
				isChanged = (beforeValueString != valueString);
			} else {
				isChanged = (beforeValue != value);
			}
			
			if (isChanged) {
				_this.list[itemIndex]._CUD = "U";
			}
		}
		
		if(this.inline_edit && CG.editor) {
			function cellUpdate() {
				_this.inline_edit.cell.html(_this.getFormatterValue(CH.formatter, item, itemIndex, item[CH.key], CH.key, CH, c));
				if (CG.editor.updateWith) {
					var i = 0, l = CG.editor.updateWith.length;
					for (; i < l; i++) {
						var v = CG.editor.updateWith[i], wCH, wc;
						// 컬럼 인덱스 찾기
						axf.each(cfg.colGroup, function (cidx, C) {
							if (C.key == v) {
								wc = cidx;
								return false;
							}
						});
						if(typeof(wc) === "number") {
							wCH = cfg.body.rows[r][wc];
							//console.log(v, wCH, r, wc);
							_this.body.find("#" + cfg.targetID + "_AX_bodyText_AX_" + r + "_AX_" + wc + "_AX_" + itemIndex).html(_this.getFormatterValue(wCH.formatter, item, itemIndex, item[v], v, wCH, wc));
						}
					}
				}
			}
			cellUpdate();
			
			// 2015-06-08 column 별 수정 관련해서 수정 여부 추가. start
			if(_this.list[itemIndex][CH.key+'_VAL']){
				_this.list[itemIndex][CH.key+'_VAL']['_modify'] = true;
			}
			//end
			
			if(CG.editor.afterUpdate){
				CG.editor.afterUpdate.call(that, value);
			}
			_this.editCellClear();
		}
		else
		{
			//console.log("bigDataSyncApply");
			this.bigDataSyncApply("reload");
		}
		return this;
	},
	/**
	 * @method AXGrid.contentScrollResize
	 * @param resetLeft {Boolean} - false 시 가로 스크롤은 초기화 하지 않습니다.
	 * @description  Grid의 화면에 맞게 스크롤을 생성 합니다.
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * myGrid.contentScrollResize(false);
	 * ```
	 */
	contentScrollResize: function (resetLeft) {
		var cfg = this.config, _this = this;
		if (cfg.viewMode == "mobile") return; // 모바일이면 scroll이 없음.
		
		var bodyHeight = _this.body.height();
		var scrollHeight = _this.scrollContent.height();
		
		var bodyWidth = _this.body.width();
		var _colWidth = (_this.colWidth.number() + cfg.fitToWidthRightMargin);
		var scrollWidth = (_colWidth > bodyWidth) ? _colWidth : bodyWidth;
		
		_this.scrollContent.css({ width: scrollWidth });
		_this.colHead.css({ width: scrollWidth });
		/* colHead width 재정의 */
		
		if (_this.hasEditor) _this.editor.css({ width: bodyWidth });
		
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
			_this.scrollTrackY.show();
			
			var scrollTrackYHeight = bodyHeight;
			_this.scrollTrackY.css({ height: scrollTrackYHeight });
			
			var scrollYHandleHeight = ((bodyHeight) * scrollTrackYHeight) / scrollHeight;
			// scrollYHandleHeight 최소 사이즈 예외 처리 최소 높이 = 30
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
		}
		else {
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
		
		_this.onevent_grid({type:"scroll-resize"});
	},
	/**
	 * @method AXGrid.contentScrollScrollSync
	 * @param pos {Object} - top, left.
	 * @description  top, left에 맞게 스크롤을 이동 합니다.
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * myGrid.contentScrollScrollSync({left: myGrid.scrollXHandle.position().left});
	 * ```
	 */
	contentScrollScrollSync: function (pos) {  // move scrollContent
		var cfg = this.config, _this = this;
		// if(_this.colWidth != _this.prev_colWidth) return; // 이전스크롤과 비교
		
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
			this.colHead.css({ left: -L });
			
			if (this.hasFoot) {
				this.gridFoot_content.css({ left: -L });
			}
			if (this.hasEditor) axdom("#" + cfg.targetID + "_AX_editorContent").css({ left: -L });
			
		}
		else {
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
				this.contentScrollYAttr.bodyHeight = this.body.height();
				this.contentScrollYAttr.scrollHeight = this.scrollContent.height();
				this.contentScrollYAttr.scrollTrackYHeight = this.scrollTrackY.height();
				this.contentScrollYAttr.scrollYHandleHeight = this.scrollYHandle.outerHeight();
			}
			
			//trace(this.contentScrollYAttr);
			
			var _sh = this.contentScrollYAttr.scrollHeight, _bh = this.contentScrollYAttr.bodyHeight, _th = this.contentScrollYAttr.scrollTrackYHeight, _hh = this.contentScrollYAttr.scrollYHandleHeight;
			var T = pos.top * (_sh-_bh) / (_th - _hh);
			//var T = (this.contentScrollYAttr.scrollHeight * (pos.top) / this.contentScrollYAttr.scrollTrackYHeight).floor();
			//var T = (this.contentScrollYAttr.scrollHeight - this.contentScrollYAttr.bodyHeight) * ( (pos.top) / (this.contentScrollYAttr.scrollTrackYHeight - this.contentScrollYAttr.scrollYHandleHeight) ).number();
			
			this.scrollContent.css({ top: -T });
			if (axf.getId(cfg.targetID + "_AX_fixedScrollContent")) this.fixedScrollContent.css({ top: -T });
			if (this.editorOpend) {
				this.editor.css({ top: -T + this.editorOpenTop + this.body.position().top });
			}
			this.bigDataSync();
		}
	},
	/**
	 * @method AXGrid.contentScrollContentSync
	 * @param pos {Object} - top, left
	 * @param touch {String} - "touch"
	 * @description  top, left에 맞게 그리드 내용을 이동 합니다.
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * myGrid.contentScrollContentSync({top: 0}, "touch");
	 * ```
	 */
	contentScrollContentSync: function (pos, touch) { // move scrollHandle
		
		var cfg = this.config;
		if (typeof pos.left !== "undefined") {
			
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
			this.colHead.css({ left: pos.left });
			
			if (this.hasFoot) {
				this.gridFoot_content.css({ left: pos.left });
			}
			if (this.hasEditor) {
				axdom("#" + cfg.targetID + "_AX_editorContent").css({left: pos.left});
			}
			
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
				this.contentScrollYAttr.bodyHeight = this.body.height();
				this.contentScrollYAttr.scrollHeight = this.scrollContent.height();
				this.contentScrollYAttr.scrollTrackYHeight = this.scrollTrackY.height();
				this.contentScrollYAttr.scrollYHandleHeight = this.scrollYHandle.outerHeight();
			}
			var _sh = this.contentScrollYAttr.scrollHeight, _bh = this.contentScrollYAttr.bodyHeight, _th = this.contentScrollYAttr.scrollTrackYHeight, _hh = this.contentScrollYAttr.scrollYHandleHeight;
			var T = pos.top * (_th - _hh) / (_sh-_bh);
			this.scrollYHandle.css({ top: -T });
			if (axf.getId(cfg.targetID + "_AX_fixedScrollContent")) this.fixedScrollContent.css({ top: pos.top });
			if (this.editorOpend) {
				this.editor.css({ top: pos.top + this.editorOpenTop + this.body.position().top });
			}
		}
		
		if(typeof touch == "undefined") this.bigDataSync();
		if(touch == "direct")  this.bigDataSyncApply();
	},
	/**
	 * @method AXGrid.getMousePositionToContentScroll
	 * @param {Event} - Grid body내부에서 감지되는 이벤트
	 * @param contentScrollID {String} - Event가 일어난 스크롤 객체 ID
	 * @description  스크롤이 발생된 마우스 위치를 반환합니다.
	 * @returns {Object} ({x,y})
	 */
	getMousePositionToContentScroll: function (event, contentScrollID) {
		var pos = axdom("#" + contentScrollID).offset();
		var x = (event.pageX - pos.left);
		var y = (event.pageY - pos.top);
		return { x: x, y: y };
	},
	/**
	 * @method AXGrid.getTouchPositionToContentScroll
	 * @param {Event} - Grid body내부에서 감지되는 이벤트
	 * @description  터치 이벤트가 일어난 위치를 반환 합니다.
	 * @returns {Object} ({x,y})
	 */
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
		
		return { x: x, y: y };
	},
	/**
	 * @method AXGrid.contentScrollScrollReady
	 * @param {Event} - Grid body내부에서 감지되는 이벤트
	 * @description  스크롤에 대한 기본 속성/이벤트를 지정합니다.
	 */
	contentScrollScrollReady: function (event) {
		var cfg = this.config;
		var handleName = (event.target.id).split(/_AX_/).last();
		/*console.log(handleName); */
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
		//axdom(document.body).addClass("AXUserSelectNone");
		
		this.contentScrollScrolling = true;
		/* scroll event bind ~~~~~~~~~~~~~~~~~~~ */
	},
	/**
	 * @method AXGrid.contentScrollScrollMove
	 * @param {Event} - Grid body내부에서 감지되는 이벤트
	 * @description  스크롤바가 스크롤 될때 내부 처리를 합니다.
	 */
	contentScrollScrollMove: function (event) {
		var cfg = this.config;
		var pos = this.getMousePositionToContentScroll(event, this.contentScrollAttrs.scrollTrack);
		var handleName = this.contentScrollAttrs.handleName;
		/*console.log(this.contentScrollAttrs); */
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
			this.contentScrollScrollSync({ top: handleTop });
			this.contentScrollTipOverMove(handleTop);
		} else {
			handleLeft = pos.x + this.contentScrollAttrs.x;
			if (handleLeft < 0) handleLeft = 0;
			if ((handleLeft + this.contentScrollAttrs.handleWidth) > this.contentScrollAttrs.trackWidth) handleLeft = this.contentScrollAttrs.trackWidth - this.contentScrollAttrs.handleWidth;
			this.scrollXHandle.css({ left: handleLeft });
			// 스크롤 X 예외 처리
			this.contentScrollScrollSync({ left: handleLeft });
		}
		this.onevent_grid({type:"onscroll"});
	},
	/**
	 * @method AXGrid.contentScrollScrollEnd
	 * @param {Event} - Grid body내부에서 감지되는 이벤트
	 * @description  스크롤바의 스크롤이 끝났을때의 처리를 합니다.
	 */
	contentScrollScrollEnd: function (event) {
		var cfg = this.config;
		axdom(document.body).unbind("mousemove.AXGrid");
		axdom(document.body).unbind("mouseup.AXGrid");
		axdom(document.body).unbind("mouseleave.AXGrid");
		
		axdom(document.body).removeAttr("onselectstart");
		//axdom(document.body).removeClass("AXUserSelectNone");
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
	/**
	 * @method AXGrid.contentScrollScrollWheel
	 * @param {Event} - Grid body내부에서 감지되는 이벤트
	 * @description  그리드 몸통에서 일어나는 마우스 휠 이벤트 처리를 합니다.
	 */
	contentScrollScrollWheel: function (e) {
		var cfg = this.config,
		    scrollTop = this.scrollContent.position().top,
		    scrollLeft = this.scrollContent.position().left,
		    eventCancle = false,
		    event = e || window.event, deltaX = 0, deltaY = 0, attr;
		
		if (cfg.height == "auto") return;
		
		attr = {
			bodyHeight         : this.body.height(),
			bodyWidth          : this.body.width()
		};
		attr.scrollHeight = this.scrollContent.height();
		attr.scrollWidth = this.scrollContent.width();
		attr.scrollTrackYHeight = this.scrollTrackY.height();
		attr.scrollYHandleHeight = this.scrollYHandle.outerHeight();
		attr.scrollTrackYWidth = this.scrollTrackY.width();
		attr.scrollYHandleWidth = this.scrollYHandle.outerWidth();
		
		if (event.wheelDeltaX) {
			deltaX = (event.wheelDeltaX / 2).ceil();
			deltaY = (event.wheelDeltaY / 2).ceil();
		} else {
			deltaY = (event.detail ? event.detail * (-20) : event.wheelDelta / 2).ceil();
		}
		/*check for detail first so Opera uses that instead of wheelDelta */
		
		// 아무일도 하지 말기
		if(deltaX == 0 && deltaY == 0) return true;
		
		if(deltaY.abs() > deltaX.abs() && deltaY.abs() > 0) {
			if (attr.scrollHeight < attr.bodyHeight) return;
			scrollTop += deltaY;
			
			if (scrollTop > 0) {
				scrollTop = 0;
				eventCancle = true;
			} else if (scrollTop.abs() + attr.bodyHeight > attr.scrollHeight) {
				scrollTop = attr.bodyHeight - attr.scrollHeight;
				eventCancle = true;
			} else if (scrollTop == 0) {
				scrollTop = 0;
				eventCancle = true;
			}
			this.scrollContent.css({ top: scrollTop });
			this.contentScrollContentSync({ top: scrollTop });
			this.onevent_grid({type:"onscroll"});
		}
		else
		if(deltaX.abs() > deltaY.abs() && deltaX.abs() > 0) {
			scrollLeft += deltaX;
			
			if (scrollLeft > 0) {
				scrollLeft = 0;
				eventCancle = true;
			} else if (scrollLeft.abs() + attr.bodyWidth > attr.scrollWidth) {
				scrollLeft = attr.bodyWidth - attr.scrollWidth;
				eventCancle = true;
			} else if (scrollLeft == 0) {
				scrollLeft = 0;
				eventCancle = true;
			}
			this.scrollContent.css({ left: scrollLeft });
			this.contentScrollContentSync({ left: scrollLeft });
			this.onevent_grid({type:"onscroll"});
		}
		
		if (!eventCancle) {
			if (event.preventDefault) event.preventDefault();
			if (event.stopPropagation) event.stopPropagation();
			event.cancelBubble = true;
			return false;
		}
		else
		{
			if (scrollTop != 0) {
				var contentScrollEnd = this.contentScrollEnd.bind(this);
				if (this.contentScrollEndObserver) clearTimeout(this.contentScrollEndObserver);
				this.contentScrollEndObserver = setTimeout(function () {
					contentScrollEnd();
				}, 100);
			}
		}
		
	},
	/**
	 * @method AXGrid.contentScrollTouchstart
	 * @param {Event} - Grid body내부에서 감지되는 이벤트
	 * @description  그리드 스크롤바에 대한 터치 이벤트를 처리 합니다.
	 */
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
	/**
	 * @method AXGrid.contentScrollTouchMove
	 * @param {Event} - Grid body내부에서 감지되는 이벤트
	 * @description  그리드내의 터치에 의한 화면 이동을 처리 합니다..
	 */
	contentScrollTouchMove: function (e) {
		var cfg = this.config;
		var event = window.event || e;
		if (this.contentScrollTouchMoved) {
			
			var pos = this.getTouchPositionToContentScroll(event);
			var scrollTouchAttr = this.scrollTouchAttr;
			
			var eventCancle = false;
			
			if (scrollTouchAttr.th > scrollTouchAttr.h && cfg.height != "auto") {
				var scrollTop = scrollTouchAttr.nt - (pos.y - scrollTouchAttr.y);
				//console.log(scrollTop);
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
	/**
	 * @method AXGrid.contentScrollTouchEnd
	 * @param {Event} - Grid body내부에서 감지되는 이벤트
	 * @description  그리드내의 터치(point)가 끝났을때의 처리를 합니다.
	 */
	contentScrollTouchEnd: function (e) {
		var cfg = this.config;
		var event = window.event || e;
		if (this.contentScrollTouchMoved) {
			
			if(cfg.height != "auto") this.bigDataSync();
			
			// 관성법칙 적용 해야함.
			this.scrollXHandle.removeClass("hover");
			this.scrollYHandle.removeClass("hover");
			
			if (document.removeEventListener) {
				document.removeEventListener("touchend", this.contentScrollTouchEndBind, false);
				document.removeEventListener("touchmove", this.contentScrollTouchMoveBind, false);
			}
			this.contentScrollTouchMoved = false;
		}
	},
	/**
	 * @method AXGrid.contentScrollEnd
	 * @description  그리드내의 스크롤이 마지막 항목까지 도달 하였을때의 처리를 합니다. config에서 설정한 onscrollend 지정 함수도 이때 발생됩니다.
	 */
	contentScrollEnd: function () {
		if (this.contentScrollEndObserver) clearTimeout(this.contentScrollEndObserver);
		var cfg = this.config;
		if (cfg.body.onscrollend) {
			try {
				cfg.body.onscrollend.call({ list: this.list, page: this.page });
			} catch (e) {
				console.log(e);
			}
		}
	},
	/**
	 * @method AXGrid.contentScrollTipOver
	 * @param {Event} - Grid body내부에서 감지되는 이벤트
	 */
	contentScrollTipOver: function(event){
		// contentScrollTopOver
		/*
		 var cfg = this.config;
		 this.scrollYHandle.bind("mousemove");
		 this.scrollYHandle.bind("mouseout");
		 */
	},
	/**
	 * @method AXGrid.contentScrollTipOverMove
	 * @param handleTop {Number} - 툴팁 출력위치의 상단 offset
	 * @description - Grid의 스크롤바를 움직일때 현레코드/전체레코드의 툴팁을 출력합니다.
	 */
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
	/**
	 * @method AXGrid.contentScrollTipOverOut
	 * @param {Event} - Grid body내부에서 감지되는 이벤트
	 * @description - Grid의 스크롤바에 대한 이동 이벤트가 끝났을때 툴팁을 해제합니다.
	 */
	contentScrollTipOverOut: function(event){
		var cfg = this.config;
		this.scrollYHandle.unbind("mousemove");
		this.scrollYHandle.unbind("mouseout");
		this.scrollYTip.hide();
	},
	/**
	 * @method AXGrid.dataSync
	 * @description - 그리드 데이터를 조작후 그리드에 현재 위치된 아이템을 다시 생성합니다.
	 * @returns {AXGrid}
	 * @example
	 * ```
	 * myGrid.list[0].id = 12;
	 * myGrid.dataSync();
	 * ```
	 */
	dataSync: function(){
		this.bigDataSync(true);
		return this;
	},
	/**
	 * @method AXGrid.bigDataSync
	 * @description - bigDataSyncApply를 호출 합니다.(grid에서만 동작, mobile,icon등의 모드에서는 동장 안함)
	 */
	bigDataSync: function(reload){
		var cfg = this.config, _this = this;
		if(cfg.viewMode == "grid"){
			if(this.bigDataSyncObserver) clearTimeout(this.bigDataSyncObserver);
			this.bigDataSyncObserver = setTimeout(function(){
				_this.bigDataSyncApply(reload);
			}, 10);
		}
	},
	/**
	 * @method AXGrid.bigDataSyncApply
	 * @param {Boolean} reload - 현재 그리드 스크롤된 컨텐츠를 다시 출력합니다.
	 * @description - Grid의 리스트 내부 인덱스가 변경되거나 포커싱 대상 인덱스가 스크롤을 벗어나 있을경우 그리드를 재구성 합니다.
	 */
	bigDataSyncApply: function(reload){
		var cfg = this.config;
		var bodyHasMarker = this.bodyHasMarker;
		var getItem = this.getItem.bind(this);
		var getItemMarker = this.getItemMarker.bind(this);
		var getMarkerDisplay = this.getMarkerDisplay.bind(this);
		var markerIndex = 0;
		// bigDataSyncApply
		var scrollContentScrollTop, VS = this.virtualScroll, po = [], item;
		
		if(VS.scrollTop != (scrollContentScrollTop = this.scrollContent.position().top) || reload){
			
			var newStartIndex = (scrollContentScrollTop.abs() / VS.itemTrHeight).ceil() - 6;
			
			if(newStartIndex < 0) newStartIndex = 0;
			var newEndIndex = newStartIndex + VS.printListCount;
			if(newEndIndex > this.list.length) {
				newEndIndex = this.list.length;
				//newStartIndex = newEndIndex - VS.printListCount - 6; 스크롤 이상발생 포인트
			}
			
			if(VS.startIndex != newStartIndex || reload) {
				
				//그리드 내용 다시 구성
				po = [];
				for (var itemIndex = newStartIndex; itemIndex < newEndIndex; itemIndex++) {
					
					item = this.list[itemIndex];
					po.push(getItem(itemIndex, item, "n"));
					
					if (bodyHasMarker && (markerIndex = getMarkerDisplay(itemIndex, item)).length > 0) {
						po.push(getItemMarker(itemIndex, item, "n", markerIndex));
					}
				}
				this.cachedDom.tbody.empty();
				this.cachedDom.tbody.append(po.join(''));
				
				// 현재 표시할 아이템 범위 설정
				VS.startIndex = newStartIndex;
				VS.endIndex = newEndIndex;
				VS.scrollTop = scrollContentScrollTop;
				
				// 셀머지
				if (cfg.mergeCells) {
					this.mergeCells(this.cachedDom.tbody, "n");
				}
				
				if (this.hasFixed) {
					po = [];
					for (var itemIndex = newStartIndex; itemIndex < newEndIndex; itemIndex++) {
						item = this.list[itemIndex];
						po.push(getItem(itemIndex, item, "fix"));
						if (bodyHasMarker && (markerIndex = getMarkerDisplay(itemIndex, item)).length > 0) {
							po.push(getItemMarker(itemIndex, item, "fix", markerIndex));
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
					for(var ri = 0;ri < this.selectedRow.length;ri++){
						body.find(".gridBodyTr_" + this.selectedRow[ri]).addClass("selected");
						//body.find(".gridBodyTr_" + this.selectedRow[ri]).find(".bodyTd_" + this.selectedCells[0]).addClass("selected");
						body.find(".gridBodyTr_" + this.selectedRow[ri]).find(".bodyTd_" + this.selectedCells[0] + ".bodyTdr_0").addClass("selected");
					}
				}
				
				
				// body.onchangeScroll
				if(cfg.body.onchangeScroll){
					var sendObj = axf.copyObject(this.virtualScroll);
					cfg.body.onchangeScroll.call(sendObj, sendObj);
				}
				this.editCellClear();
			}
		}
	},
	/**
	 * @method AXGrid.scrollTop
	 * @param itemIndex {Number} - 스크롤될 아이템 인덱스
	 * @description - itemIndex에 스크롤을 이동시킵니다.
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * myGrid.scrollTop(0);
	 * ```
	 */
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
	/**
	 * @method AXGrid.setFocus
	 * @param itemIndex {Number} - 선택될 아이템 인덱스
	 * @description - itemIndex에 해당하는 열을 선택 합니다..
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * myGrid.setFocus(0);
	 * ```
	 */
	setFocus: function (itemIndex) {
		var cfg = this.config, _this = this;
		
		if (cfg.viewMode == "grid") {
			
			var c_index = this.selectedCells.first();
			if (this.selectedRow.length > 0) {
				var body = this.body;
				axf.each(this.selectedRow, function (ridx, Row) {
					body.find(".gridBodyTr_" + Row).removeClass("selected");
					if (_this.selectedCells.length > 0) {
						axf.each(_this.selectedCells, function () {
							body.find(".gridBodyTr_" + Row).find(".bodyTd_" + this).removeClass("selected");
						});
					}
				});
			}
			
			//console.log(this.virtualScroll.startIndex, this.virtualScroll.endIndex, itemIndex);
			this._focusedItemIndex = itemIndex;
			if(this.virtualScroll.startIndex <= itemIndex && this.virtualScroll.endIndex >= itemIndex){
				this.selectedRow.clear();
				if(itemIndex == 0) itemIndex = '' + itemIndex;
				
				this.body.find(".gridBodyTr_" + itemIndex).addClass("selected");
				this.selectedRow.push(itemIndex);
				this.body.find(".gridBodyTr_" + itemIndex).find(".bodyTd_" + c_index + ".bodyTdr_0").addClass("selected");
				
				var trTop = this.body.find(".gridBodyTr_" + itemIndex).position().top,
				    trHeight = this.body.find(".gridBodyTr_" + itemIndex).height(),
				    scrollHeight = this.scrollContent.height(),
				    bodyHeight = this.body.height(),
				    handleHeight = this.scrollYHandle.outerHeight(),
				    trackHeight = this.scrollTrackY.height(),
				    scrollContentTop = this.scrollContent.position().top, scrollTop;
				
				if(!cfg.body.rowsEmpty) trHeight = cfg.body.rows.length * trHeight;
				
				//console.log(trTop, scrollContentTop, bodyHeight);
				if(trTop.number() + scrollContentTop < 0){ // 아래에서 위로 포커스 이동
					scrollTop = -trTop.number();
					this.scrollContent.css({ top: scrollTop });
					this.contentScrollContentSync({ top: scrollTop });
				}
				else
				if (trTop.number() + trHeight.number() + scrollContentTop > bodyHeight) { // 위에서 아래로 이동
					scrollTop = bodyHeight - (trTop.number() + trHeight.number());
					this.scrollContent.css({ top: scrollTop });
					this.contentScrollContentSync({ top: scrollTop });
				}
				else
				{ // 예외처리
					if (trTop.number() == 0) {
						scrollTop = 0;
						this.scrollContent.css({ top: scrollTop });
						this.contentScrollContentSync({ top: scrollTop });
					}
				}
				
			}
			else
			{
				if (this.list.length > itemIndex && itemIndex > -1) {
					
					this.selectedRow.clear();
					this.selectedRow.push(itemIndex);
					this.body.find(".gridBodyTr_" + itemIndex).addClass("selected");
					
					var scrollHeight = this.scrollContent.height();
					var bodyHeight = this.body.height();
					var handleHeight = this.scrollYHandle.outerHeight();
					var trackHeight = this.scrollTrackY.height();
					
					//var scrollTop = bodyHeight - scrollHeight;
					// itemIndex 에 맞는 scrollTop 구하기
					var scrollTop = this.virtualScroll.itemTrHeight * itemIndex;
					if (bodyHeight >= scrollHeight) {
						scrollTop = 0;
					}
					this.scrollContent.css({ top: scrollTop });
					this.contentScrollContentSync({ top: scrollTop }, "direct");
					
					setTimeout(function () {
						if (_this.body.find(".gridBodyTr_" + itemIndex).get(0)) {
							var trTop = _this.body.find(".gridBodyTr_" + itemIndex).position().top;
							var trHeight = _this.body.find(".gridBodyTr_" + itemIndex).height();
							
							if (trTop.number() + trHeight.number() > bodyHeight) {
								scrollTop = bodyHeight - (trTop.number() + trHeight.number());
								if(itemIndex == _this.list.length-1) scrollTop -= 10;
								_this.scrollContent.css({ top: scrollTop });
								_this.contentScrollContentSync({ top: scrollTop }, "direct");
							} else {
								if (trTop.number() == 0) {
									scrollTop = 0;
									_this.scrollContent.css({ top: scrollTop });
									_this.contentScrollContentSync({ top: scrollTop }, "direct");
								}
							}
						}
					});
					
				}
				else {
					//console.log("out of index");
					this._focusedItemIndex = undefined;
				}
			}
			this.onevent_grid({type:"grid-list-focus"});
		}
		else
		if (cfg.viewMode == "icon") {
			
		}
		else
		if (cfg.viewMode == "mobile") {
			
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
	/**
	 * @method AXGrid.focusMove
	 * @param direction {Number|String} - 정수/음수 또는 L/R
	 * @param {Event} - Grid body내부에서 감지되는 이벤트
	 * @description - direction 만큼 포커스를 이동 합니다.
	 */
	focusMove: function (direction, event) {
		var cfg = this.config, body = this.body;
		var myIndex, my_c, itemIndex;
		
		if(direction == "L" || direction == "R"){
			if (this.selectedCells.length > 0) {
				myIndex = this.selectedRow.first();
				my_c = this.selectedCells.first();
				
				if (direction == "L") {
					my_c = my_c - 1;
					if (my_c < 0) my_c = 0;
				} else {
					my_c = my_c.number() + 1;
					if (my_c >= cfg.colGroup.length) my_c = cfg.colGroup.length - 1;
				}
				
				axf.each(this.selectedCells, function () {
					body.find(".gridBodyTr_"+ myIndex).find(".bodyTd_" + this).removeClass("selected");
				});
				this.selectedCells.clear();
				
				this.body.find(".gridBodyTr_"+ myIndex).find(".bodyTd_" + my_c + ".bodyTdr_0").addClass("selected");
				this.selectedCells.push(my_c);
				
				this.stopEvent(event);
			}
		}
		else
		{
			myIndex = this.selectedRow.first();
			itemIndex = myIndex.number() + direction;
			if(itemIndex < 0) itemIndex = this.list.length - 1;
			else if(itemIndex > this.list.length-1) itemIndex = 0;
			// 사용 할 수 있는 itemIndex를 찾아라
			
			while(this.list[itemIndex][cfg.reserveKeys.hidden]){
				if(direction < 0) {
					itemIndex--;
					if(itemIndex < 0) itemIndex = this.list.length - 1;
				}else{
					itemIndex++;
					if(itemIndex > this.list.length-1) itemIndex = 0;
				}
			}
			
			this.setFocus(itemIndex);
			this.stopEvent(event);
		}
		return false;
	},
	/**
	 * @method AXGrid.getSelectedItem
	 * @description - 선택된 행의 index, item 을 가져 옵니다.선택된 행이 없으면 에러 객체를 전달 합니다.
	 * @returns {Object} - {index,item} , exception no item selected {error,description}
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * myGrid.getSelectedItem();
	 * ```
	 */
	getSelectedItem: function () {
		var cfg = this.config;
		if (this.selectedRow != undefined && this.selectedRow != null && this.selectedRow.length > 0) {
			if(this.selectedRow.length == 1){
				return { index: this.selectedRow.first().number(), item: this.list[this.selectedRow.first()] };
			}else{
				var selectedList = [], len = this.selectedRow.length;
				for(var i=0;i<len;i++){
					selectedList.push( this.list[this.selectedRow[i]] );
				}
				return { index: this.selectedRow, item: selectedList };
			}
		} else {
			return { error: "noselected", description: "선택된 item이 없습니다." };
		}
	},
	/**
	 * @method AXGrid.click
	 * @param itemIndex {Number} - 선택될 그리드 아이템 인덱스
	 * @description - 인덱스에 해당하는 행을 클릭 한 효과를 발생 시킵니다.config 에 body항목의 onclick 지정함수가 있다면 호출 됩니다.
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * myGrid.click(0);
	 * ```
	 */
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
				console.log(e);
			}
		}
		
		// this.stopEvent(event);
	},
	/**
	 * @method AXGrid.mergeCells
	 * @param tgDom {Object} - 그리드 몸통 객체
	 * @param typ {String} - 표현 형식 ("n" normal, "f" fixed)
	 * @description - config 내의 옵션에 따라 셀 병합을 실행 합니다.
	 */
	mergeCells: function(tgDom, typ){
		var cfg = this.config;
		// 중복된 셀 머지 함수
		// 1 셀정보 수집
		var rows = [];
		var typn = typ=='f' ? 'fix' : 'n';
		// 마지막 한줄이 빠지는 경우 발생됨.
		for(var tri = this.virtualScroll.startIndex;tri <= this.virtualScroll.endIndex;tri++){
			var row = [];
			if(this.list[tri]) {
				for (var tdi = 0; tdi < cfg.colGroup.length; tdi++) {
					var tdn = cfg.colGroup[tdi].key; //Column Name Variable
					var item = {
						tdom   : tgDom.find("#" + cfg.targetID + "_AX_" + typn + "body_AX_0_AX_" + tdi + "_AX_" + tri),
						rowspan: 1
					};
					if (cfg.colGroup[tdi] && cfg.colGroup[tdi].display && item.tdom.length == 0) {
						break; // end loop
					} else if (!item.tdom.hasClass("bodyNullTd")) {
						item.html = this.list[tri][tdn];
						item.tri = tri;
						item.tdi = tdi;
						row.push(item);
					}
				}
				rows.push(row);
			}
		}
		var _val = {};
		if(Object.isArray(cfg.mergeCells)){
			for(var tri = 0;tri < rows.length;tri++){
				var isMerge = true;
				for(var mci = 0;mci < cfg.mergeCells.length;mci++){
					var tdi;
					if( rows[tri][ (tdi = cfg.mergeCells[mci]) ] ){
						if( _val["td_"+tdi] ) {
							if( _val["td_" + tdi].html == rows[tri][tdi].html && isMerge ) {
								rows[ _val["td_" + tdi].tri ][tdi].rowspan++;
								rows[tri][tdi].rowspan = 0;
								isMerge = true;
							}else {
								_val["td_" + tdi] = {
									tri    : tri,
									tdi    : tdi,
									rowspan: 1,
									html   : rows[tri][tdi].html
								};
								isMerge = false;
							}
						}else {
							_val["td_" + tdi] = {
								tri    : tri,
								tdi    : tdi,
								rowspan: 1,
								html   : rows[tri][tdi].html
							};
							isMerge = false;
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
		
		if(typ == "n") {
			for (var tri = 0; tri < rows.length; tri++) {
				for (var tdi = 0; tdi < rows[tri].length; tdi++) {
					if (rows[tri][tdi].rowspan == 0) rows[tri][tdi].tdom.remove();
					else rows[tri][tdi].tdom.attr("rowspan", rows[tri][tdi].rowspan);
				}
			}
		}
		else
		if(typ == "f"){
			for (var tri = 0; tri < rows.length; tri++) {
				for (var tdi = 0; tdi < rows[tri].length; tdi++) {
					if (rows[tri][tdi].rowspan == 0) rows[tri][tdi].tdom.remove();
					else{
						rows[tri][tdi].tdom.attr("rowspan", rows[tri][tdi].rowspan);
						if(tdi > 0 || cfg.fixedColSeq == 0)
							rows[tri][tdi].tdom.css({height: (this.virtualScroll.itemTrHeight) * rows[tri][tdi].rowspan - 1});
					}
				}
			}
		}
		rows = null;
		return this;
	},
	// body 영역 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ head & foot 영역
	/**
	 * @method AXGrid.getDataSetFormatterValue
	 * @param {String} formatter - formatter - config 에서 지정된 표현 형식
	 * @param {Object} dataSet - setDataSet 메소드에 전달된 데이터 객체
	 * @param {String} value - dataSet 객체 가 지니고 있는 값
	 * @param {String} key - config colgroup의 key
	 * @param {String} CH - config colgroup의 컬럼 객체
	 * @description - dataSet의 값을 지정된  formatter에 맞게 가공합니다.
	 * @returns {String} result
	 */
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
				console.log(e);
			}
		}
		return result;
	},
	/**
	 * @method AXGrid.getHeadDataSet
	 * @param {Object} dataSet - setDataSet 메소드에 전달된 데이터 객체
	 * @param {String} isfix - "fix","n" 고정 형태
	 * @description - 그리드의 header를 생성 합니다.
	 * @returns {String}
	 */
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
						
						/*console.log({r:r, CHidx:CHifixedColSeq:cfg.fixedColSeq, colCount:colCount}); */
						
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
	/**
	 * @method AXGrid.getFootDataSet
	 * @param {Object} dataSet - setDataSet 메소드에 전달된 데이터 객체
	 * @param {String} isfix - "fix","n" 고정 형태
	 * @description - 그리드의 footer 생성 합니다.
	 * @returns {String}
	 */
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
					if (typeof isfix == "undefined" || (typeof isfix != "undefined" && CH.isFixedEndCell)) {
						
						colCount += CH.colspan;
						
						/*radio, check exception */
						var rowspan = (CH.rowspan > 1) ? " rowspan=\"" + CH.rowspan + "\"" : "";
						var colspan = (CH.colspan > 1) ? " colspan=\"" + CH.colspan + "\"" : "";
						var valign = " valign=\"" + CH.valign + "\" style=\"vertical-align:" + CH.valign + ";\"";
						var bottomClass = (CH.isLastCell) ? "" : " bodyBottomBorder";
						var fixedClass = (CH.isFixedEndCell) ? " fixedLine" : "";
						
						/*console.log({r:r, CHidx:CHifixedColSeq:cfg.fixedColSeq, colCount:colCount}); */
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
	/**
	 * @method AXGrid.setDataSet
	 * @param {Object} obj - ({key:value})
	 * @description - head, foot 속성을 정의한 경우 head, foot 에 값을 표시합니다. 비어있는 객체를 전달할 경우 formatter 연결된 함수에 의해 값이 계산됩니다.
	 * @example
	 * ```
	 *  var myGrid = new AXGrid();
	 *  myGrid.setDataSet({price:123000, amount:10});
	 *  myGrid.setDataSet({});
	 * ```
	 */
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
	/**
	 * @method AXGrid.redrawDataSet
	 * @description - setDataSet애 의해 dataSet 객체가 변경된 경우 header나 footer를 다시 렌더링 합니다.
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * myGrid.setDataSet({price:123000, amount:10});
	 * myGrid.redrawDataSet();
	 * ```
	 */
	redrawDataSet: function () {
		var cfg = this.config;
		if (this.dataSet) {
			if (cfg.head) this.printHead();
			if (cfg.foot) this.printFoot();
		}
	},
	/**
	 * @method AXGrid.printHead
	 * @description - grid의 header를 구성합니다 . (getDataSet)
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * myGrid.setDataSet({price:123000, amount:10});
	 * myGrid.printHead();
	 * ```
	 */
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
	/**
	 * @method AXGrid.printFoot
	 * @description - grid의 footer를 구성합니다 . (getDataSet)
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * myGrid.setDataSet({price:123000, amount:10});
	 * myGrid.printFoot();
	 * ```
	 */
	printFoot: function () {
		// todo : foot 출력 방식 변경
		var cfg = this.config,
		    tableWidth = this.colWidth, getDataSet = this.getFootDataSet.bind(this), _tdHeight;
		this.hasFoot = true;
		var po = [];
		/*
		 po.push(getDataSet(this.dataSet));
		 axdom("#" + cfg.targetID + "_AX_tfoot").html(po.join(''));
		 if (this.hasFixed) {
		 po = [];
		 po.push(getDataSet(this.dataSet, "fix"));
		 axdom("#" + cfg.targetID + "_AX_fixedTfoot").html(po.join(''));
		 }
		 */
		po.push('<div class="gridFootContent">');
		po.push('<table cellpadding="0" cellspacing="0" class="gridFootTable" style="width:', tableWidth, 'px;">');
		po.push(this.getColGroup("FH"));
		po.push('<tbody>');
		po.push(getDataSet(this.dataSet));
		po.push('</tbody>');
		po.push('</table>');
		po.push('</div>');
		if (this.hasFixed) {
			po.push('<div class="gridFootfixedContent" style="width:' + this.fixedColWidth + 'px;">');
			po.push('<table cellpadding="0" cellspacing="0" class="gridFootTable" style="width:', this.fixedColWidth, 'px;">');
			po.push(this.getColGroup("FF"));
			po.push('<tbody>');
			po.push(getDataSet(this.dataSet, "fix"));
			po.push('</tbody>');
			po.push('</table>');
			po.push('</div>');
		}
		
		this.gridFoot.html( po.join('') );
		this.gridFoot.show(); // cfg.foot 활성화
		this.gridFoot_content = this.gridFoot.find(".gridFootContent");
		this.gridFoot.css( {height: this.gridFoot_content.height()} );
		
		_tdHeight = undefined;
		this.gridFoot.find(".bodyTd").each(function(){
			var td_dom = $(this),
			    rowspan = td_dom.attr("rowspan"), valign = td_dom.attr("valign");
			if(!rowspan) rowspan = 1;
			if(typeof _tdHeight === "undefined") {
				_tdHeight = td_dom.height() / rowspan;
			}
			var tdHeight = _tdHeight * rowspan;
			/*
			 if(rowspan > 1) {
			 for (var a = 0; a < rowspan; a++) {
			 tdHeight -= 1;
			 }
			 }
			 if(_tdHeight < tdHeight) tdHeight -= 1;
			 */
			
			if(rowspan > 1) {
				td_dom.css({ height: tdHeight + 1});
			}
		});
		
		if(this.gridFoot_content.height() > 30){
			this.gridTargetSetSize();
		}
	},
	/* head & foot 영역 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
	
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ editor 영역  */
	/**
	 * @method AXGrid.getEditorFormatterValue
	 * @param {String} formatter - config editor 에서 지정된 표현 형식
	 * @param {Object} dataSet - 데이터 객체
	 * @param {String} value - dataSet 객체 가 지니고 있는 값
	 * @param {String} key - config colgroup의 key
	 * @param {String} CH - config colgroup의 컬럼 객체
	 * @param {String} idAttr - Editor 타겟 구분 값
	 * @description - Editor의 데이터를 formatter에 맞게 가공하여 반환 합니다.
	 * @returns {Object|String}
	 */
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
				console.log(e);
			}
		}
		
		var formID = cfg.targetID + "_AX_" + key + "_AX_" + idAttr;
		var inputHidden = "<input type=\"hidden\" id=\"" + formID + "\" name=\"" + key + "\" value=\"" + value + "\" />";
		
		return result + inputHidden;
	},
	/**
	 * @method AXGrid.getEditorFormValue
	 * @param {Object} form -  config editor rows form에서 지정된 객체
	 * @param {Object} dataSet - 데이터 객체
	 * @param {String} value - dataSet 객체 가 지니고 있는 값
	 * @param {String} key - config colgroup의 key
	 * @param {String} CH - config colgroup의 컬럼 객체
	 * @param {String} idAttr - Editor 타겟 구분 값
	 * @description - Editor의 데이터를 config editor rows form에 정의된 형식에 맞게 반환 합니다.
	 * @returns {String}
	 */
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
				if (typeof value != "undefined" && axdom.isArray(value)) {
					return value;
				}
				else
				if(typeof value == "boolean"){
					return value;
				}
				else
				if(typeof value == "string"){
					return value.dec();
				}
				else{
					return value;
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
		} else if (form.type == "readonly") {
			result.push("<div style=\"padding-right:" + paddingRight + ";\">");
			result.push("<input type=\"text\" readonly=\"readonly\" id=\"" + formID + "\" name=\"" + key + "\" value=\"" + getFormValue(form.value, dataSet[key]) + "\" class=\"AXInput" + formClass + "\" style=\"" + formWidth + formHeight + formStyle + "\" />");
			result.push("</div>");
		} else if (form.type == "textarea") {
			result.push("<div style=\"padding-right:" + paddingRight + ";\">");
			result.push("<textarea id=\"" + formID + "\" name=\"" + key + "\" class=\"AXTextarea" + formClass + "\" style=\"" + formWidth + formHeight + formStyle + "\" >" + getFormValue(form.value, dataSet[key]) + "</textarea>");
			result.push("</div>");
		} else if (form.type == "select") {
			var formValue = getFormValue(form.value, dataSet[key]);
			/*console.log({key:key, dataSet_key:dataSet[key], formValue:formValue}); */
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
	/**
	 * @method AXGrid.getEditorBody
	 * @param {Object} dataSet - 데이터 객체
	 * @param {String} isfix - fix option . (AXGrid.hasFixed == true) "fix"
	 * @description - 에디터를 생성 합니다.
	 * @returns {String}
	 */
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
	/**
	 * @method AXGrid.setEditor
	 * @param {Array} item - 삽입될 아이템 데이터
	 * @param {Number} itemIndex - 에디터가 가져올 아이템 인덱스
	 * @param {Number} insertIndex - 에디터가 삽입될 위치 인덱스
	 * @description - 해당하는 인덱스에 에디터를 활성화 합니다.config 내에 editor 관련 항목이 없다면 작동하지 않습니다.
	 * @example
	 * ```
	 *  var myGrid = new AXGrid();
	 *  myGrid.setEditor({}, 1);
	 *  myGrid.setEditor(null, null, 1);
	 * ```
	 */
	setEditor: function (item, itemIndex, insertIndex) {
		var cfg = this.config, _this = this, itemTrHeight;
		
		this.editorItemIndex = null;
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
		po.push("<div id=\"" + cfg.targetID + "_AX_editorContent\" class=\"editorContent\" style=\"padding-left:1px;\">");
		po.push("<table cellpadding=\"0\" cellspacing=\"0\" class=\"gridBodyTable\" style=\"\">");
		po.push(this.getColGroup("EB"));
		/*colGroup 삽입 */
		po.push("<tbody id=\"" + cfg.targetID + "_AX_editor_AX_tbody\">");
		po.push(this.getEditorBody(dataSet));
		po.push("</tbody>");
		po.push("</table>");
		po.push("</div>");
		if (this.hasFixed) {
			po.push("<div id=\"" + cfg.targetID + "_AX_fixedEditorContent\" class=\"fixedEditorContent\" style=\"width:" + this.fixedColWidth + "px;padding-left:1px;\">");
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
		
		if (typeof itemIndex !== "undefined")
		{
			
			var scrollTop = this.scrollContent.position().top, list = this.list;
			
			if(cfg.height == "auto")
			{
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
			}
			else
			{
				var editorTop = itemIndex * (itemTrHeight = this.virtualScroll.itemTrHeight);
			}
			
			this.editor.css({ top: editorTop + scrollTop + this.body.position().top });
			this.editorOpend = true;
			this.editorOpenTop = editorTop + this.body.position().top;
			this.editorItemIndex = itemIndex;
			this.editorButtonPosition = "bottom";
			
			var trTop = -editorTop;
			
			if (
				editorTop + scrollTop + this.body.position().top > this.body.height() - this.body.position().top &&
				( this.scrollContent.height() + this.editor.height() - 31 > this.body.height() ) &&
				this.list.length != 0
			)
			{
				trTop = this.body.height() - this.scrollContent.height();
				// 에디터 위로 들기
				this.editorButtonPosition = "top";
			}
			
		}
		else
		if (typeof insertIndex !== "undefined")
		{
			
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
			}
			else
			{
				var editorTop = insertIndex * (itemTrHeight = this.virtualScroll.itemTrHeight);
			}
			
			this.editor.css({ top: editorTop + this.body.position().top });
			this.editorOpend = true;
			this.editorOpenTop = editorTop;
			this.editorInsertIndex = insertIndex;
			this.editorButtonPosition = "bottom";
			
			var trTop = -editorTop;
			
			if (
				trTop.abs() + this.body.height() > this.scrollContent.height() &&
				(this.scrollContent.height() + this.editor.height() - 31 > this.body.height()) &&
				this.list.length > 0
			)
			{
				trTop = this.body.height() - this.scrollContent.height();
				// 에디터 위로 들기
				this.editorButtonPosition = "top";
			}
			
			if (this.body.height() < this.scrollContent.height()) {
				this.scrollContent.css({ top: trTop });
				this.contentScrollContentSync({ top: trTop });
			}
			
		}
		else
		{
			var editorTop = 0, itemTrHeight = this.virtualScroll.itemTrHeight;
			
			this.editor.css({ top: editorTop + this.body.position().top });
			this.editorOpend = true;
			this.editorOpenTop = editorTop;
			this.editorItemIndex = null;
			this.editorButtonPosition = "bottom";
			if (this.body.height() < this.scrollContent.height()) {
				this.scrollContent.css({ top: 0 });
				this.contentScrollContentSync({ top: 0 });
			}
		}
		
		//this.scrollTrackY.before(this.editor); 위치이동 안함. input focus할 때 스크롤 오버 버그 발생
		this.editor.show();
		this.editor.find("input[type=text],textarea").bind("mousedown.AXGrid", function () {
			this.focus();
		});
		this.editor.find("input,textarea,select").bind("focus.AXGrid", function () {
			//console.log("editor focus");
			//console.log(axdom(this).position().left);
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
		
		var editorContent = axdom("#" + cfg.targetID + "_AX_editorContent"),
		    fixedEditorContent = axdom("#" + cfg.targetID + "_AX_fixedEditorContent"),
		    editorButtons = axdom("#" + cfg.targetID + "_AX_editorButtons");
		var editorContentHeight = editorContent.height();
		var fixedEditorContentHeight = fixedEditorContent.height();
		if (editorContentHeight < fixedEditorContentHeight) {
			editorContentHeight = fixedEditorContentHeight;
			editorContent.find(".gridBodyTable").css({ height: editorContentHeight });
		}
		else {
			fixedEditorContent.find(".gridFixedBodyTable").css({ height: editorContentHeight });
		}
		
		editorButtons.css({ top: editorContentHeight });
		var editorBoxHeight = editorContentHeight.number();
		
		if (itemTrHeight > editorContentHeight)
		{
			editorContentHeight = itemTrHeight;
			editorContent.find(".gridBodyTable").css({ height: editorContentHeight });
			fixedEditorContent.find(".gridFixedBodyTable").css({ height: editorContentHeight });
			this.editor.css({ height: (editorContentHeight.number()) });
			editorButtons.css({ top: editorContentHeight });
		}
		
		var scrollLeft = this.scrollContent.position().left;
		editorContent.css({ left: scrollLeft });
		
		if(this.editorButtonPosition == "top")
		{
			if(insertIndex != undefined) this.editor.css({top: this.editor.position().top - editorContentHeight });
			else this.editor.css({top: this.editor.position().top - editorContentHeight + itemTrHeight});
			editorButtons.addClass("top");
			editorButtons.css({ top: -editorButtons.outerHeight()+1 });
		}
		
		axdom("#" + cfg.targetID + "_AX_editorButtons_AX_save").bind("click", this.saveEditor.bind(this));
		axdom("#" + cfg.targetID + "_AX_editorButtons_AX_cancel").bind("click", this.cancelEditor.bind(this));
	},
	/**
	 * @method AXGrid.setEditorForm
	 * @param {Object} obj - 삽입될 아이템 데이터
	 * @description - 활성화된 에디터에 특정 값을 전달 합니다.
	 * @example
	 * ```
	 * var obj = {
     * 	key : , colgroup 컬럼 key
     * 	position :, 적용될 대상의 배열 순서 [0,0]
     * 	value : , 넘겨줄 값 {String}
     * }
	 *
	 * var myGrid = new AXGrid();
	 *      myGrid.setEditorForm({
     * 	key:"title",
     * 	position:[0,2],
     * 	value:"가나다라"
     * });
	 * ```
	 */
	setEditorForm: function (obj) {
		var cfg = this.config;
		var formID = cfg.targetID + "_AX_" + obj.key + "_AX_" + obj.position.join("_AX_");
		if (!axf.getId(formID)) alert(formID + "로 Element를 찾을 수 없습니다.");
		axdom("#" + formID).val(obj.value);
	},
	/**
	 * @method AXGrid.focusEditorForm
	 * @param {String} key - colgroup 컬럼 key
	 * @description - 활성화된 에디터의 특정 key 값과 매칭되는 요소를 활성화 합니다.
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * myGrid.focusEditorForm("regDate");
	 * ```
	 */
	focusEditorForm: function (key) { /* editor 활성화 된 폼의 특정 요소에 포커스 주기 */
		var cfg = this.config;
		this.editor.find("input[type=text],textarea").each(function () {
			if (this.name == key) {
				this.focus();
				return false;
			}
		});
	},
	/**
	 * @method AXGrid.saveEditor
	 * @description - 에디터의 내용을 저장하고 리스트에 반영 합니다.
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * myGrid.saveEditor();
	 * ```
	 */
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
				value = checkedValues.join(",");
			} else if (CH.form.type == "checkbox") {
				axf.each(CH.form.options, function (oidx, opt) {
					var opt_formID = formID + "_AX_" + oidx;
					if (axdom("#" + opt_formID).get(0).checked) checkedValues.push(axdom("#" + opt_formID).val());
					else checkedValues.push(CH.key + "=");
				});
				value = checkedValues.join(",");
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
			/*console.log(cfg.editor.rows[r]);*/
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
			var ajax = cfg.editor.request, url = ajax.ajaxUrl;
			var formPars = [];
			axf.each(editorFormItem, function (k, v) {
				formPars.push(k + "=" + v.enc());
			});
			if (Object.isString(obj.ajaxPars)) {
				formPars.push(obj.ajaxPars);
			} else if (Object.isObject(obj.ajaxPars)) {
				formPars.push(axdom.param(obj.ajaxPars));
			}
			var pars = formPars.join('&');
			
			var _method = "post";
			var _contentType = AXConfig.AXReq.contentType;
			var _headers = {};
			var _responseType = AXConfig.AXReq.responseType;
			var _dataType = AXConfig.AXReq.dataType;
			
			if (ajax.method) _method = ajax.method;
			if (ajax.contentType) _contentType = ajax.contentType;
			if (ajax.headers) _headers = ajax.headers;
			
			new AXReq(url, {
				type: _method,
				contentType: _contentType,
				responseType: _responseType,
				dataType: _dataType,
				headers: _headers,
				debug: ajax.debug,
				pars: pars,
				onsucc: function (res) {
					if ((res.result && res.result == AXConfig.AXReq.okCode) || (res.result == undefined && !res.error)) {
						saveEditorRequest(res);
					} else {
						toast.push({ body: res.msg.dec(), type: "Caution" });
						cancelEditor();
					}
				},
				onerr: function (res){
					//toast.push({ body: res.msg.dec(), type: "Caution" });
					if (cfg.editor.response) { /*  */
						var sendObj = {
							error      : true,
							res        : res,
							index      : this.editorItemIndex,
							insertIndex: this.editorInsertIndex,
							list       : this.list,
							page       : this.page
						};
						cfg.editor.response.call(sendObj, this.editorItemIndex);
					}
					cancelEditor();
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
	/**
	 * @method AXGrid.saveEditorRequest
	 * @param {Object} res - editorFormItem
	 * @description - config editor 항목에 request가 설정 되었을경우 서버 연동 처리를 합니다 response설정으로 예외 처리를 합니다.
	 */
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
	/**
	 * @method AXGrid.cancelEditor
	 * @description - 활성화된 에디터를 해제 합니다.
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * myGrid.cancelEditor();
	 * ```
	 */
	cancelEditor: function () {
		this.editor.hide();
		this.editorOpend = false;
		this.unbindAXbind();
	},
	/**
	 * @method AXGrid.unbindAXbind
	 * @description - 에디터내부 요소에 부여된 특성을 해제 합니다.
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * myGrid.unbindAXbind();
	 * ```
	 */
	unbindAXbind: function () {
		var cfg = this.config;
		try {
			if (cfg.editor && cfg.editor.rows) {
				for (var r = 0; r < cfg.editor.rows.length; r++) {
					axf.each(cfg.editor.rows[r], function (CHidx, CH) {
						if (CH.display && CH.colspan > 0) {
							
							if (CH.AXBind) {
								var formID = (CH.form.id) ? CH.form.id : cfg.targetID + "_AX_" + CH.key + "_AX_" + r + "_AX_" + CHidx;
								/*console.log(formID); */
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
			}
		} catch (e) {
			console.log(e);
		}
	},
	/**
	 * @method AXGrid.appendList
	 * @param {Object} item - item dataset
	 * @param {Number} insertIndex - 삽입 대상 index
	 * @description - 그리드에 신규 데이터를 삽입하기 위해 삽입용 에디터를 활성화 하여 줍니다.
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * var item = {};
	 * myGrid.appendList(item);
	 * myGrid.appendList(item, 3);
	 * ```
	 */
	appendList: function (item, insertIndex) {
		if(insertIndex >= this.list.length) insertIndex = this.list.length;
		this.setEditor(item, undefined, insertIndex);
	},
	/* editor 영역 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
	/**
	 * @method AXGrid.setMobileTool
	 * @description - 출력 대상이 모바일일 경우 모바일용 page indicator를 생성합니다.
	 * @returns {String}
	 */
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
				}
				else
				{
					axdom("#" + cfg.targetID + "_AX_gridToolTopPageNo").html("");
					axdom("#" + cfg.targetID + "_AX_gridToolTopPageNoDisplay").html(pageNo);
					var mySelect = axf.getId(cfg.targetID + "_AX_gridToolTopPageNo");
					axdom("#" + cfg.targetID + "_AX_gridToolBottomPageNo").html("");
					axdom("#" + cfg.targetID + "_AX_gridToolBottomPageNoDisplay").html(pageNo);
					var mySelectBottom = axf.getId(cfg.targetID + "_AX_gridToolBottomPageNo");
					var oi = 0;
					for (var p = 1; p < pgCount + 1; p++) {
						mySelect.options[oi] = new Option(p, p.money());
						mySelectBottom.options[oi] = new Option(p, p.money());
						if (pageNo == p) {
							mySelect.options[oi].selected = true;
							mySelectBottom.options[oi].selected = true;
						}
						oi++;
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
	/**
	 * @method AXGrid.setPaging
	 * @description - 그리드 하단 page indicator를 생성합니다.
	 * @returns {String}
	 */
	setPaging: function () {
		var cfg = this.config;
		if (cfg.viewMode == "mobile") {
			this.setMobileTool();
			return this;
		}else{
			axdom("#" + cfg.targetID + "_AX_gridToolGroupTop").empty();
			axdom("#" + cfg.targetID + "_AX_gridToolGroupBottom").empty();
		}
		
		/* apply page vars */
		var pageNos = axf.getId(cfg.targetID + "_AX_gridPageNo");
		var pgCount = this.page.pageCount.number();
		var pageNo = this.page.pageNo.number();
		
		if (pgCount === 0) {
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
				var oi = 0;
				for (var p = 1; p < pgCount + 1; p++) {
					mySelect.options[oi] = new Option(p, p.money());
					if (pageNo == p) mySelect.options[oi].selected = true;
					oi++;
				}
			}
			/*alert(axf.getId(cfg.targetID + "_AX_gridPageNo").options[axf.getId(cfg.targetID + "_AX_gridPageNo").options.selectedIndex].value); */
		}
		axdom("#" + cfg.targetID + "_AX_gridPageCount").html("/ " + pgCount.money() + " " + cfg.pageCountMSG);
		
		
		if(this.page.listCount.number() == 0) this.page.listCount = this.list.length;
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
	/**
	 * @method AXGrid.goPageMove
	 * @param pageAdd {Number} - 이동할 페이지 증/감(-) 수
	 * @description - pageAdd 만큼 페이지를 이동합니다.
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * myGrid.goPageMove(-1);
	 * ```
	 */
	goPageMove: function (pageAdd) {
		var cfg = this.config;
		
		if(this.page.pageCount.number() > 0) {
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
		}
		/*this.page.pageNo = pageNo; */
		/*this.onPageChange(); bindSelectSetValue 시 자동 호출되는 구조 */
	},
	/**
	 * @method AXGrid.onPageChange
	 * @param e {Event} - change 이벤트
	 * @description - 페이지 이동시 호출 됩니다.
	 */
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
	/**
	 * @method AXGrid.setStatus
	 * @param listLength {Number} - 그리드 리스트 아이템 갯수(length)
	 * @description - 그리드 리스트 아이템 갯수(length)를 표시 합니다.
	 * @returns {String}
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * myGrid.setStatus(myGrid.list.length);
	 * ```
	 */
	setStatus: function (listLength) {
		var cfg = this.config, listCount;
		
		if (typeof listLength !== "undefined") {
			listCount = listLength;
		} else {
			var page;
			if (this.page) page = this.page;
			listCount = (page.listCount || 0);
		}
		
		axdom("#" + cfg.targetID + "_AX_gridStatus").html(cfg.listCountMSG.replace("{listCount}", listCount.number().money()));
	},
	/**
	 * @method AXGrid.getSortParam
	 * @param {String} ty - 출력옵션 "one" 으로 요청시 String 형태로, 미 지정시 Object 형태로 반환
	 * @description - 정렬옵션을 반환 합니다.
	 * @returns {String|Object}
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * myGrid.getSortParam();
	 *
	 * // return value
	 * {
	 * sortKey:"" , -  정렬 기준 key
	 * sortWay:""   -  정렬 방법 "asc" or "desc"
	 * }
	 * ```
	 */
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
	/**
	 * @method AXGrid.getExcelColHeadTd
	 * @param {Object} arg
	 * @description - 그리드 내용을 엑셀 포맷(html)으로 변환시 컬럼 해더를 생성 합니다.
	 * @returns {String}
	 * @example
	 *```
	 * var arg = {
     *     valign,  - valign 옵션
     *     rowspan, - rowspan 옵션
     *     colspan, - colspan 옵션
     *     align,   - align 옵션
     *     colSeq,  - config colgroup 내부 순서
     *     formatter, - config colgroup에서 지정된 formatter
     *     sort,  - 정렬 옵션
     *     tdHtml, - config colgroup 지정된 label
     *     displayLabel - Label이 지정된 경우 출력 여부. 기본적으로 사용시 false 로 셋팅됨. colgroup 에서 따로 지정하지 않기 때문에,,
     * }
	 *```
	 */
	getExcelColHeadTd: function (arg, filter) {
		var cfg = this.config;
		var po = [];
		
		if(filter){
			if(!filter.call(cfg.colGroup[arg.colSeq])) return '';
		}
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
	/**
	 * @method AXGrid.getExcelItem
	 * @param {Number} itemIndex - 그리드 리스트중 대상 index
	 * @param {Object} item - 그리드 리스트중 index 데이타
	 * @description - 그리드 내용을 엑셀 포맷(html)으로 변환시 리스트 데이터를 변환 합니다.
	 * @returns {String}
	 */
	getExcelItem: function (itemIndex, item, filter) {
		var cfg = this.config;
		var tpo = [];
		var evenClassName = "line" + (itemIndex % 2);
		var getFormatterValue = this.getFormatterValue.bind(this);
		var getTooltipValue = this.getTooltipValue.bind(this);
		var trAddClass = "";
		
		for (var r = 0; r < cfg.body.rows.length; r++) {
			tpo.push("<tr>");
			axf.each(cfg.body.rows[r], function (CHidx, CH) {
				if (CH.display && CH.colspan > 0) {
					if(filter && !filter.call(CH)){
						
					} else {
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
				}
			});
			tpo.push("</tr>");
		}
		return tpo.join('');
	},
	/**
	 * @method AXGrid.getExcelItemMarker
	 * @param {Number} itemIndex - 그리드 리스트중 대상 index
	 * @param {Object} item - 그리드 리스트중 index 데이타
	 * @param {String} isfix - isfix {String} - fix option .
	 * @description - 그리드 내용을 엑셀 포맷(html)으로 변환시 maker 데이터가 존재시 처리 합니다.
	 * @returns {String}
	 */
	getExcelItemMarker: function (itemIndex, item, isfix, filter, markerIndexs) {
		var cfg = this.config;
		var tpo = [];
		var evenClassName = "gridBodyMarker";
		var getFormatterValue = this.getFormatterValue.bind(this);
		
		for(var mi=0, l=markerIndexs.length, markerIndex;mi<l;mi++) {
			var marker = cfg.body.marker[markerIndexs[mi]];
			for (var r = 0; r < marker.rows.length; r++) {
				var isLastTR = (marker.rows.length - 1 == r);
				tpo.push("<tr>");
				axf.each(marker.rows[r], function (CHidx, CH) {
					if (CH.display && CH.colspan > 0) {
						if(filter && !filter.call(CH)){
							
						} else {
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
					}
				});
				tpo.push("</tr>");
			}
		}
		
		return tpo.join('');
	},
	
	/**
	 * @method AXGrid.getExcelHeadDataSet
	 * @param {Object} dataSet - setDataSet 메소드에 전달된 데이터 객체
	 * @param {String} isfix - "fix","n" 고정 형태
	 * @description - 그리드 내용을 엑셀 포맷(html)으로 변환시 header 데이터가 존재시 처리 합니다.
	 * @returns {String}
	 */
	getExcelHeadDataSet: function (dataSet, isfix, filter) {
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
					if(filter && !filter.call(CH)){
						
					} else {
						/*radio, check exception */
						var rowspan = (CH.rowspan > 1) ? " rowspan=\"" + CH.rowspan + "\"" : "";
						var colspan = (CH.colspan > 1) ? " colspan=\"" + CH.colspan + "\"" : "";
						var valign = " valign=\"" + CH.valign + "\" style=\"vertical-align:" + CH.valign + ";\"";
						
						var bodyNodeClass = "";
						if (CH.formatter == "checkbox" || CH.formatter == "radio") bodyNodeClass = " bodyTdCheckBox"; else if (CH.formatter == "html") bodyNodeClass = " bodyTdHtml";
						
						tpo.push("<td" + valign + rowspan + colspan + ">");
						if (CH.formatter) {
							tpo.push(getDataSetFormatterValue(CH.formatter, dataSet, dataSet[CH.key], CH.key, CH));
						} else {
							tpo.push(dataSet[CH.key]);
						}
						tpo.push("</td>");
					}
				}
			});
			tpo.push("</tr>");
		}
		return tpo.join('');
	},
	/**
	 * @method AXGrid.getExcelFootDataSet
	 * @param {Object} dataSet - setDataSet 메소드에 전달된 데이터 객체
	 * @param {String} isfix - "fix","n" 고정 형태
	 * @description - 그리드 내용을 엑셀 포맷(html)으로 변환시 footer 데이터가 존재시 처리 합니다.
	 * @returns {String}
	 */
	getExcelFootDataSet: function (dataSet, isfix, filter) {
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
			axf.each(cfg.foot.rows[r], function (CHidx, CH) {
				if (CH.display && CH.colspan > 0) {
					if(filter && !filter.call(CH)){
						
					} else {
						/*radio, check exception */
						var rowspan = (CH.rowspan > 1) ? " rowspan=\"" + CH.rowspan + "\"" : "";
						var colspan = (CH.colspan > 1) ? " colspan=\"" + CH.colspan + "\"" : "";
						var valign = " valign=\"" + CH.valign + "\" style=\"vertical-align:" + CH.valign + ";\"";
						var bottomClass = (CH.isLastCell) ? "" : " bodyBottomBorder";
						var fixedClass = (CH.isFixedEndCell) ? " fixedLine" : "";
						
						var bodyNodeClass = "";
						if (CH.formatter == "checkbox" || CH.formatter == "radio") bodyNodeClass = " bodyTdCheckBox"; else if (CH.formatter == "html") bodyNodeClass = " bodyTdHtml";
						
						tpo.push("<td" + valign + rowspan + colspan + ">");
						if (CH.formatter) {
							tpo.push(getDataSetFormatterValue(CH.formatter, dataSet, dataSet[CH.key], CH.key, CH));
						} else {
							tpo.push(dataSet[CH.key]);
						}
						tpo.push("</td>");
					}
				}
			});
			tpo.push("</tr>");
		}
		return tpo.join('');
	},
	/**
	 * @method AXGrid.getExcelFormat
	 * @param {String} format - "html","json" 변환 옵션
	 * @param {Function} [filter] - "html" 인 경우 filter 옵션으로 표현하고 싶은 열을 선택할 수 있습니다.
	 * @description -  format에 맞춰 그리드의 내용을 엑셀 포맷으로 변환 합니다.
	 * @returns {String|Object}
	 * @example
	 * ```
	 * var txt = myGrid.getExcelFormat("html");
	 * var txt = myGrid.getExcelFormat("html", function(){
     *  // colGroup item => this
     *  return this.key != 'no'; // key가 no가 아님 컬럼만 출력
     * );
     * var json = myGrid.getExcelFormat("json");
     * ```
     */
	getExcelFormat: function (format, filter) {
		var cfg = this.config;
		var getExcelColHeadTd = this.getExcelColHeadTd.bind(this);
		
		var bodyHasMarker = this.bodyHasMarker;
		var getExcelItem = this.getExcelItem.bind(this);
		var getExcelItemMarker = this.getExcelItemMarker.bind(this);
		var getMarkerDisplay = this.getMarkerDisplay.bind(this);
		var markerIndex;
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
						}, filter));
					}
				});
				po.push("</tr>");
			}
			po.push("	</thead>");
			po.push("	<tbody>");
			
			if (cfg.head) po.push(getHeadDataSet(this.dataSet, false, filter));
			
			axf.each(this.list, function (itemIndex, item) {
				po.push(getExcelItem(itemIndex, item, filter));
				if (bodyHasMarker && (markerIndex = getMarkerDisplay(itemIndex, item)).length > 0) {
					po.push(getExcelItemMarker(itemIndex, item, 'n', filter, markerIndex));
				}
			});
			
			if (cfg.foot) po.push(getFootDataSet(this.dataSet, false, filter));
			
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
	 * @method AXGrid.changeGridView
	 * @param {JSONObject} obj
	 * @description - 그리드의 뷰모드를 체인지 합니다.
	 * @example
	 * ```
	 * myGrid.changeGridView({
     *     viewMode:"grid"
     * });
	 * myGrid.changeGridView({
     *     viewMode:"icon",
     *     view: {
     *         width:"200",
     *         // icon width
     *         height:"300",
     *         // icon height
     *         img: {
     *             left:"10",
     *             top:"10",
     *             width:"179",
     *             height:"180",
     *             style:"border:1px solid #ccc;"
     *         },
     *         label:{
     *             left:"10",
     *             top:"200",
     *             width:"180",
     *             height:"20"
     *         },
     *         description: {
     *             left:"10",
     *             top:"225",
     *             width:"180",
     *             height:"65",
     *             style:"color:#888;"
     *         },
     *         buttons: {
     *             left:"5",
     *             top:"5",
     *             width:"180",
     *             height:"20",
     *             style:"",
     *             items:[
     *                 {
     *                     label:"but1",
     *                     style:"",
     *                     addClass:"AXButton Green",
     *                     onclick:function(){
     *                         fnObj.otherFunction(this);
     *                     }
     *                 },
     *                 {
     *                     label:"but2",
     *                     style:"",
     *                     addClass:"AXButton",
     *                     onclick:function(){
     *                         fnObj.otherFunction(this);
     *                     }
     *                 }
     *             ]
     *         },
     *         format: function(){
     *             return {
     *                 imgsrc : this.item.img,
     *                 label : this.item.title,
     *                 description : this.item.writer+", "+this.item.no+" / " + (this.item.desc || "")
     *             }
     *         }
     *     }
     * });
	 * myGrid.changeGridView({
     *     viewMode:"mobile"
     * });
	 *
	 * ```
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
	 * @method AXGrid.openMobileConfig
	 * @param {event} event
	 * @description - 모바일 툴바가 클릭되었을 때 툴바 박스 호출 이벤트 함수
	 */
	openMobileConfig: function (event) {
		var cfg = this.config, _this = this;
		//console.log(cfg.view.column);
		
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
		this.mobileContextMenu.setConfig({responsiveMobile: 900000});
		this.mobileContextMenu.bind({
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
				//console.log(this.sortMenu);
				_this.list = _this.sortList(this.sortMenu.sort, this.sortMenu, _this.list);
				_this.printList();
				
				return true;// 메뉴 창이 닫히지 않게 합니다.
			}
		});
		this.mobileContextMenu.open({id: cfg.targetID + "myContextMenu"}, event);
	},
	/**
	 *
	 * @method AXGrid.clipBoardClear
	 * @returns {AXGrid}
	 */
	clipBoardClear: function(){
		var body = this.body;
		axf.each(this.copiedRow, function () {
			body.find(".gridBodyTr_" + this).removeClass("copied");
		});
		this.copiedRow.clear();
		this.clipBoard.type = "";
		this.clipBoard.list = [];
		
		return this;
	},
	/**
	 *
	 * @method AXGrid.selectClear
	 * @returns {AXGrid}
	 */
	selectClear: function(){
		var body = this.body;
		
		if (this.selectedCells.length > 0) { // 셀선택 클리어
			axf.each(this.selectedCells, function () {
				body.find(".bodyTd_" + this).removeClass("selected");
			});
			this.selectedCells.clear();
		}
		if (this.selectedRow.length > 0) { // 로우선택 클리어
			axf.each(this.selectedRow, function () {
				body.find(".gridBodyTr_" + this).removeClass("selected");
			});
			this.selectedRow.clear();
		}
		if (this.copiedRow.length > 0) {
			axf.each(this.copiedRow, function () {
				body.find(".gridBodyTr_" + this).removeClass("copied");
			});
			this.copiedRow.clear();
		}
		this.clipBoard.type = "";
		this.clipBoard.list = [];
		
		return this;
	},
	
	/**
	 * AXGrid의 checked 값을 jQuery.param 메서드에서 사용 가능한 배열로 반환합니다.
	 * @method AXGrid.getCheckedParams
	 * @param colSeq {Number} -대상 체크박스(formatter:"checkbox" 로 선언된 항목의 순서)
	 * @param traditional {Boolean} [false] 반환 형태 지정
	 * @return {Array} traditional[false]: [ { name: 'no', value: 1 }, { name: 'no', value: 2 } ], traditional[true]: [ { 'no': 1 }, { 'no': 2 } ]
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * myGrid.getCheckedParams(0); // -> [ { name: 'no', value: 1 }, { name: 'no', value: 2 } ]
	 * myGrid.getCheckedParams(0); // -> [ { 'no': 1 }, { 'no': 2 } ]
	 * ```
	 */
	getCheckedParams: function(colSeq, traditional){
		var colName     = this.config.colGroup[colSeq].key;
		var checkedList = this.getCheckedList(colSeq);
		var params      = [];
		
		if (!colName) {
			console.log("colSeq invalid. Please check the colSeq value.");
			return params;
		}
		if (!checkedList || checkedList.length === 0) { return params; }
		
		$.each(checkedList, function(idx, item){
			if (traditional) {
				var p = {};
				p[colName] = (item[colName] || '');
				params.push(p);
			} else {
				params.push({ "name": colName, "value": (item[colName] || "") });
			}
		});
		
		return params;
	},
	
	/**
	 * 그리드의 데이터를 조건에 따라 반환하며 clone 옵션을 사용해서 복사된 값을 받을 수 있다.
	 * @method AXGrid.getList
	 * @param filter {String|Function|Boolean} [undefined] - String: "C,U,D" 추가,수정,삭제. Function: true/false를 반환하는 함수를 사용한다. Boolean: filter 조건을 생략하고 바로 clone 옵션을 사용할 수 있다.
	 * @param clone {Boolean} [false] true: referance 데이터를 반환 받는다. false: clone 데이터를 반환받는다.
	 * @returns {Array}
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * myGrid.getList(); // 전체 데이터(referance) 배열 반환
	 * myGrid.getList(true); // 전체 데이터(clone) 배열 반환
	 * myGrid.getList("C,U"); // 추가,수정된 데이터(referance) 배열 반환
	 * myGrid.getList("C,U", true); // 추가,수정된 데이터(clone) 배열 반환
	 * function fnFilter(idx, item) { return (idx % 2) === 0; }
	 * myGrid.getList(fnFilter); // 함수에서 true를 반환한 데이터(referance) 배열 반환
	 * myGrid.getList(fnFilter, true); // 함수에서 true를 반환한 데이터(clone) 배열 반환
	 * ```
	 */
	getList: function(filter, clone) {
		var filteredList = [];
		if (filter === false || Object.isUndefined(filter)) {
			filteredList = this.list;
			clone = false;
		} else if (filter === true) {
			filteredList = this.list;
			clone = true;
		} else if (Object.isString(filter)) {
			axf.each(this.list, function(idx, item) {
				if (filter.indexOf(item._CUD) > -1) {
					filteredList.push(item);
				}
			});
			if (filter.indexOf("D") > -1) {
				axf.each(this.removedList, function(idx, item) {
					filteredList.push(item);
				});
			}
		} else if (Object.isFunction(filter)) {
			var fnFilter = filter.bind(this);
			axf.each(this.list, function(idx, item){
				if (fnFilter(idx, item)) {
					filteredList.push(item);
				}
			});
		}
		
		if (clone) {
			var clonedList = [];
			axf.each(filteredList, function(idx, item){
				clonedList.push(Object.clone(item));
			});
			return clonedList;
		} else {
			return filteredList;
		}
	},
	/**
	 * 그리드 추가 , 수정시 validation 체크 메소드
	 * @method AXGrid.validateCheck
	 * @param filter {String} [undefined] - String: "C,U,D" 추가,수정,삭제
	 * @returns boolean
	 * @example
	 * ```
	 *
	 * colGroup : [{
	    "key": "date",
	    "label": "date",
	    "width": 95,
	    "sort": false,
	    "align": "center",
	    "editor": {
	        "type": "calendar",
	        "config": {
	            "valueFormat": "yyyymmdd",
	            "separator": "-"
	        },
	        "updateWith": ["_CUD"],
	        "maxLength": 8
	    },
	}, {
	    "key": "string",
	    "label": "string",
	    "width": 95,
	    "sort": false,
	    "align": "center",
	    "editor": {
	    	"updateEdit": true,  // 필드 없데이트시  default true, false 수정안됨. 
	        "createEdit": true,  // 필드 신규추가시  default true, false 추가시 입력안됨. 
	        "notEmpty": true, // 필수 입력 여부 default false, true or string  빈 항목일 경우 보여줄 메시지 . 
	        "type": "text",
	        "updateWith": ["_CUD"],
	        "maxLength": 40
	    }
	}, {
	    "key": "number",
	    "label": "number",
	    "width": 95,
	    "sort": false,
	    "align": "right",
	    "formatter": "money",
	    "editor": {
	        "type": "money",
	        "updateWith": ["_CUD"],
	        "maxLength": 12,
	        "range": { // 숫자일 경우 숫자자릿수와 소수점 자릿수 지정
	            "val": "9,3"
	            ,msg : '' // 자릿수를 초과 했을대 보여줄 메시지. 
	        }
	    },
	}]
	 * var myGrid = new AXGrid();
	 * AXGrid.validateCheck('C'); // 추가시 validation check
	 * AXGrid.validateCheck('U'); // 수정시 validation check
	 * ```
	 */
	validateCheck: function(filter) {
		var cfg = this.config;
		var _self = this;
		
		if (Object.isString(filter)) {
			if(!cfg.colGroup) return false;
			
			var __arr = cfg.colGroup , arrKeyEditor = {} , item, editorItem;
			
			for(var i in __arr){
				item = __arr[i];
				editorItem = item.editor;
				
				if(Object.isObject(editorItem)){
					var validateflag = false;
					if(!Object.isUndefined(editorItem.notEmpty)){
						validateflag = true;
						item.editor.notEmpty = editorItem.notEmpty===true? (item.label+' 필수 입력항목입니다.'):( Object.isString(editorItem.notEmpty)?editorItem.notEmpty : false) ;
					}
					
					if(!Object.isUndefined(editorItem.range)){
						validateflag = true;
						item.editor.range.msg = Object.isUndefined(item.editor.range.msg) ? (item.label+' 입력 값을 초과 하였습니다.'):item.editor.range.msg;
					}
					
					if(validateflag){
						arrKeyEditor[i] = {};
						arrKeyEditor[i].editor = item.editor;
						arrKeyEditor[i].key = item.key;
					}
				}
			}
			var reval = true,_colseq ,_idx;
			axf.each(this.list, function(idx, item) {
				if (filter.indexOf(item._CUD) > -1) {
					var itemval ;
					
					for(var colseq in arrKeyEditor){
						editorItem = arrKeyEditor[colseq].editor;
						
						itemval = item[arrKeyEditor[colseq].key];
						
						_colseq = colseq;
						_idx = idx;
						
						if(editorItem.notEmpty){
							if($.trim( itemval )==''){
								if(editorItem.notEmpty) alert(editorItem.notEmpty);
								
								reval= false;
								return false;
							}
						}
						itemval = itemval ? itemval+'' : (editorItem.type != 'money'?'':'0');
						
						if(editorItem.type != 'money') continue;
						
						if(editorItem.range){
							var rangeval = editorItem.range.val;
							var rangeArr = rangeval.split(',');
							
							var decimalNum = rangeArr[0]
								, decimalPoint =  rangeArr.length > 1 ?rangeArr[1]:0
								,numval='', pointval = '' ;
							
							decimalNum = isNaN(decimalNum) ? 0 : parseInt(decimalNum, 10);
							decimalPoint = isNaN(decimalPoint) ? 0 : parseInt(decimalPoint, 10);
							
							numval = itemval.replace(/[$,]+/g,'');
							
							if(isNaN(numval)){
								alert('숫자만 입력가능합니다.');
								reval= false;
								return false;
							}
							
							if(itemval.indexOf('.') > -1){
								var valArr = itemval.split('.');
								numval = valArr[0];
								pointval = valArr[1];
							}
							
							if(numval.length > decimalNum || pointval.length > decimalPoint){
								if(editorItem.range.msg){
									if(editorItem.range.msg)  alert(editorItem.range.msg+'\n'+ itemval);
									
									reval= false;
									return false;
								}
							}
						}
					}
				}
			});
			
			if(reval ===false){
				_self.editCell(0,_colseq ,_idx);
				_self.setFocus(_idx);
				_self.scrollTop(_idx);
			}
		}
		
		return reval;
	},
	onevent_grid: function(){
		
		
	},
	
	/**
	 * @method AXGrid.clearSort
	 * @description - 그리드의 소트관련 설정 데이터 및 소트표현 클래스를 삭제합니다.
	 * @example
	 * ```
	 * var myGrid = new AXGrid();
	 * myGrid.clearSort();
	 * ```
	 */
	clearSort: function(){
		var cfg = this.config
			, _this = this
			, rows = cfg.colHead.rows
			, sort = ''
			, removeTg = '';
		
		$.each(rows, function(idx, o){
			if (sort == ''){
				$.each(o, function(idx_idx, o_o){
					if (o_o.sort != undefined){
						sort = o_o.sort;
						delete o_o.sort;
						
						return false;
					}
				});
			}
		});
		
		if (sort != ''){
			if (sort == 'desc'){
				removeTg = 'sortDesc';
			}else if (sort == 'asc'){
				removeTg = 'sortAsc';
			}
			
			document.getElementById(this.nowSortHeadID).classList.remove(removeTg);
			this.nowSortHeadObj = undefined;
			this.nowSortHeadID = undefined;
		}
	}
	
});

/**
 * @method AXGrid.prototype.formatter
 * @description - 그리드의 formatter 입니다. 사용자 정의 formatter를 추가할 수 있습니다.
 * @example
 * ```js
 * Object.extend(AXGrid.prototype.formatter, {
 *     link: function(formatter, item, itemIndex, value, key, CH, CHidx){
 *         return '<a href="https://www.axisj.com">www.axisj.com</a>';
 *     }
 * });
 * ```
 */
AXGrid.prototype.formatter = (function(){
    // checkbox, radiobox formatter
    function boxFormatter(formatter, item, itemIndex, value, key, CH, CHidx){
        var cfg = this.config;
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

        if(this.list[itemIndex].___checked && this.list[itemIndex].___checked[CHidx]){
            if(this.list[itemIndex].___checked[CHidx]) checkedStr = " checked=\"checked\" ";
            //if(itemIndex == 0) console.log(this.list[itemIndex].___checked[CHidx], checkedStr);
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
        /*
         return "<label class=\"gridCheckboxLabel\">" +
         "<input type=\"" + formatter + "\" name=\"" + CH.label + "\" class=\"gridCheckBox_body_colSeq" + CH.colSeq + "\" id=\"" + cfg.targetID + "_AX_checkboxItem_AX_" + CH.colSeq + "_AX_" + itemIndex + "\" value=\"" + value + "\" " + checkedStr + disabled + " onfocus=\"this.blur();\" />" +
         "</label>";
         */
        return "<input type=\"" + formatter + "\" name=\"" + CH.label + "\" class=\"gridCheckBox_body_colSeq" + CH.colSeq + "\" id=\"" + cfg.targetID + "_AX_checkboxItem_AX_" + CH.colSeq + "_AX_" + itemIndex + "\" value=\"" + value + "\" " + checkedStr + disabled + " onfocus=\"this.blur();\" />";
    }

    return {
        "money": function(formatter, item, itemIndex, value, key, CH, CHidx){
            if (value == "" || value == "null" || value == null || value == undefined) {
                return "0";
            } else {
                return (value || 0).number().money();
            }
            return result;
        },
        "dec": function(formatter, item, itemIndex, value, key, CH, CHidx){
            return (value == undefined) ? "" : value.toString().dec();
        },
        "html": function(formatter, item, itemIndex, value, key, CH, CHidx){
            return value;
        },
        "checkbox": boxFormatter,
        "radio"   : boxFormatter,
        "select"  : function(formatter, item, itemIndex, value, key, CH, CHidx){
            var txtKey = CH.editor.optionText  || AXConfig.AXInput.keyOptionText  || "optionText";
            var valKey = CH.editor.optionValue || AXConfig.AXInput.keyOptionValue || "optionValue";
            var options = CH.editor.options || [];
            var text = "";

            if (options.length === 0) { return text; }

            for (var i = 0; i < options.length; i++) {
                if (options[i][valKey] == value) {
                    text = options[i][txtKey];
                    break;
                }
            }
            return text;
        //},
        //"AXSelect": function(formatter, item, itemIndex, value, key, CH, CHidx){
        //    // TODO ajax를 매번 호출 할수는 없다. 한번 호출해서 caching 해야 하는데... cache 다시 로드 하는 기능이나 시점도 필요하다. HJ.Park 2015-08-05
        //    return "";
        }
    };
})();

/**
 * @method AXGrid.prototype.inlineEditor
 * @description - 그리드의 inline editor 입니다. 사용자 정의 editor를 추가할 수 있습니다.
 * @example
 * ```js
 * Object.extend(AXGrid.prototype.inlineEditor, {
 *     switch: {
 *         init: function(inline_editor, AXBindConfig, CG, r, c, ii){
 *             inline_editor.find("input").bindSwitch(AXBindConfig);
 *         },
 *         getValue: function(value) {
 *             // this: {item:item, index:itemIndex, CG:CG, r:r, c:c}
 *             return value;
 *         }
 *     }
 * });
 * ```
 */
AXGrid.prototype.inlineEditor = (function(){
	
    // getValue -> this: {item:item, index:itemIndex, CG:CG, r:r, c:c}
    return {
        "number": {
            init: function(inline_editor, AXBindConfig, CG, r, c, ii) {
                inline_editor.find("input").bindNumber(AXBindConfig).select();
            },
            getValue: function(value) {
                return String(value || "").number();
            }
        },
        "money": {
            init: function(inline_editor, AXBindConfig, CG, r, c, ii) {
                inline_editor.find("input").bindMoney(AXBindConfig);
                setTimeout(function () {
                    inline_editor.find("input").select();
                }, 100);
            },
            getValue: function(value) {
                return String(value || "").money();
            }
        },
        "calendar": {
            init: function(inline_editor, AXBindConfig, CG, r, c, ii) {
                var _this = this;
                AXBindConfig.expand = true;
                jQuery.extend(AXBindConfig, CG.editor.config, true);

                AXBindConfig.onchange = function(){
                    _this.updateItem(r, c, ii, this.value);
                };

                inline_editor.find("input").bindDate(AXBindConfig);
            },
            getValue: function(value) {
                return value || "";
            }
        },
        "select": {
            init: function(inline_editor, AXBindConfig, CG, r, c, ii) {
                var _this = this;
                inline_editor.find("select").bind("change", function(){
                    var sdom = inline_editor.find("select").get(0);
                    var obj = {};
                    obj[CG.editor.optionValue||"optionValue"] = sdom.options[sdom.selectedIndex].value;
                    obj[CG.editor.optionText||"optionText"] = sdom.options[sdom.selectedIndex].text;
                    _this.updateItem(r, c, ii, obj);
                });
                setTimeout(function(){
                    inline_editor.find("select").focus();
                }, 100);

                jQuery(document.body).unbind("click.axgrid").bind("click.axgrid", function (e) {
                    var target = axf.get_event_target(e.target, {id: inline_editor.attr("id")});
                    if (!target) {
                        var sdom = inline_editor.find("select").get(0);
                        if(sdom.options[sdom.selectedIndex]) {
                            var obj = {};
                            obj[CG.editor.optionValue || "optionValue"] = sdom.options[sdom.selectedIndex].value;
                            obj[CG.editor.optionText  || "optionText" ] = sdom.options[sdom.selectedIndex].text;

                            _this.updateItem(r, c, ii, obj);
                        }else{
                            _this.editCellClear();
                        }
                        _this.gridFocus.focus();
                        jQuery(document.body).unbind("click.axgrid");
                    }
                });
            },
            getValue: function(value) {
                var valKey = this.CG.editor.optionValue || AXConfig.AXInput.keyOptionValue || "optionValue";
                return value[valKey];
            }
        },
        "AXSelect": {
            init: function(inline_editor, AXBindConfig, CG, r, c, ii) {
                var _this = this;
                var cfg = this.config;
                var cfg_key_value = (AXBindConfig.reserveKeys) ? (AXBindConfig.reserveKeys.optionValue||"optionValue") : "optionValue",
                    cfg_key_text = (AXBindConfig.reserveKeys) ? (AXBindConfig.reserveKeys.optionText||"optionText") : "optionText";

                // todo : inline_editor.config에 onchange함수 재 정의
                AXBindConfig.onchange = function(){
                    var obj = {};
                    obj[cfg_key_value] = this.value;
                    obj[cfg_key_text] = this.text;
                    setTimeout(function(){
                        _this.updateItem(r, c, ii, obj);
                    }, 100);
                };
                var td_val = _this.list[ii][CG.key];
                AXBindConfig.setValue = td_val[cfg_key_value];
                inline_editor.find("select").bindSelect(AXBindConfig);
                setTimeout(function(){
                    inline_editor.find("select").focus();
                }, 100);

                jQuery(document.body).unbind("click.axgrid").bind("click.axgrid", function (e) {
                    var select_id = (cfg.targetID + '_inline_editor').lcase();
                    var target = axf.get_event_target(e.target, function(el){
                        if(!el.id) return false;
                        return ((el.id.split(/_AX_/g)[1]||"").lcase() == select_id);
                    });
                    if (!target) {
                        var sdom = inline_editor.find("select").get(0);
                        if(sdom.options[sdom.selectedIndex]) {
                            var obj = {};
                            obj[cfg_key_value] = sdom.options[sdom.selectedIndex].value;
                            obj[cfg_key_text] = sdom.options[sdom.selectedIndex].text;

                            _this.updateItem(r, c, ii, obj);
                        }else{
                            _this.editCellClear();
                        }
                        _this.gridFocus.focus();
                        jQuery(document.body).unbind("click.axgrid");
                    }
                });
            },
            getValue: function(value) {
                return value;
            }
        }
    };
})();
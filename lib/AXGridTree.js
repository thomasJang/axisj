/**
 * AXGridTree
 * @class AXGridTree
 * @extends AXGrid
 * @version v0.1
 * @author tom@axisj.com
 * @logs
 * 2015-04-13 tom : 그리드 트리 첫번째 커밋
 * @example
 */

var AXGridTree = Class.create(AXGrid, {
	initialize: function (AXJ_super) {
		AXJ_super();

		this.reserveKeys = {
			// 사용자 설정 키들 -- s
			parent_key   : "parent_key",
			child_key    : "child_key",
			collapse_key : "collapse",
			// 시스템 설정 키들 -- s
			parent_hash  : "phash",
			child_hash   : "hash",
			sub_list     : "list",
			hidden       : "_hidden"
		};
		this.list = [];
		this.list_pointer = {};
		this.rel_pointer = {};
	},
	setData: function (res, cond) {
		var cfg = this.config, keys = cfg.reserveKeys;
		this.list = res.list;

		if(typeof keys.parent_key == "undefined" || typeof keys.child_key == "undefined"){
			trace("예약어 설정이 올바르지 않아 요청을 처리 할 수 없습니다. reserveKeys.parent_key, reserveKeys.child_key");
			return;
		}

		if("데이터 검증"){
			if(cond && cond.reset) {
				var idx = 0, il = this.list.length;
				for (; idx < il; idx++) {
					delete this.list[idx][keys.parent_hash];
					delete this.list[idx][keys.child_hash];
					this.list[idx].__subTreeLength = 0;
				}
			}
			this.arrangeData(this.list);
		}

		if(!this.page.onchange) this.page.onchange = this.page.onChange;
		axf.overwriteObject(this.page, res.page, true);

		this.printList();
		this.scrollTop(0);
		this.setPaging();

		this.onevent_grid({type:"setData"});
	},
	/**
	 * WBS데이터의 wbs_cd 값을 정리하여 list변수에 재 할당 합니다.
	 * @method AXGridWBS.arrangeData
	 * @param {Array} list
	 * @returns {AXGridWBS} name
	 * @example
	 ```js
	 myGrid.arrangeData([{},{}]);
	 console.log( myGrid.list );
	 ```
	 */
	arrangeData: function(list, cond){
		var cfg = this.config,
			keys = cfg.reserveKeys, seq = 0,
			idx = 0, il, L, pointerIndex, pItem, pHash, __subTreeLength;

		/*
		 reserveKeys = {
			 // 사용자 설정 키들 -- s
			 parent_key   : "parent_key",
			 child_key    : "child_key",
			 // 시스템 설정 키들 -- s
			 parent_hash  : "phash",
			 child_hash   : "hash",
			 sub_list     : "list"
		 };
		 */

		if(typeof keys.parent_key == "undefined" || typeof keys.child_key == "undefined"){
			trace("예약어 설정이 올바르지 않아 요청을 처리 할 수 없습니다. reserveKeys.parent_key, reserveKeys.child_key");
			return;
		}

		idx = 0, il = list.length;

		if(cond && cond.reset){
			// parent_hash 초기화
			for (;idx < il; idx++) {
				delete list[idx][keys.parent_hash];
				delete list[idx][keys.child_hash];
				list[idx].__subTreeLength = 0;
			}
		}

		var hash_digit = 3;

		if(typeof cond === "undefined" || cond.reset) {
			this.list_pointer = {};
			
			idx = 0;
			for (; idx < il; idx++) {
				if (L = list[idx]) {
					this.list_pointer[L[keys.child_key]] = idx; // list_pointer에 키와 인덱스를 매치하여 저장하고 빠르게 찾도록 준비
					if (L[keys.parent_key] == "0" || L[keys.parent_key] == 0 || L[keys.parent_key] == "") {
						L[keys.sub_list] = [];
						L.__subTreeLength = 0;
						L[keys.parent_hash] = "0".setDigit(hash_digit);
						L[keys.child_hash] = "0".setDigit(hash_digit) + "_" + seq.setDigit(hash_digit);

						seq++;
					} else {
						L.__subTreeLength = 0;
					}
				}
			}

			idx = 0;
			for (; idx < il; idx++) {
				if (L = list[idx]) {
					if (typeof L[keys.parent_hash] == "undefined") {
						pointerIndex = this.list_pointer[L[keys.parent_key]], pItem = list[pointerIndex];
						
						if (pItem) {
							pHash = pItem[keys.child_hash];
							L[keys.sub_list] = [];
							__subTreeLength = pItem.__subTreeLength;
							L[keys.parent_hash] = pHash;
							L[keys.child_hash] = pHash + "_" + __subTreeLength.setDigit(hash_digit);
							if (pItem[keys.collapse_key] || pItem[keys.hidden]) L[keys.hidden] = true;
							pItem.__subTreeLength++;
							pItem[keys.sub_list].push(L[keys.child_key]);
						} else {
							L[keys.sub_list] = [];
							L.__subTreeLength = 0;
							L[keys.parent_hash] = "0".setDigit(hash_digit);
							L[keys.child_hash] = "0".setDigit(hash_digit) + "_" + seq.setDigit(hash_digit);
						}
					}
				}
			}

			// hash 값대로 정렬을 합니다.
			this.list.sort(function(p, n){
				return (p[keys.child_hash] < n[keys.child_hash]) ? -1 : (p[keys.child_hash] > n[keys.child_hash]) ? 1 : 0;
			});
		}

		//trace(this.list);
		//trace(this.list_pointer);
		return this;
	},

	printList: function (args) {
		var cfg = this.config, _this = this;
		var bodyHasMarker = this.bodyHasMarker;
		var getItem = this.getItem.bind(this);
		var getItemMarker = this.getItemMarker.bind(this);
		var getMarkerDisplay = this.getMarkerDisplay.bind(this);
		if (this.editorOpend) this.cancelEditor();

		var po = [];
		// view mode 가 grid 인경우만 유효

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
			var itemTrHeight = this.cachedDom.tbody.find("#" + cfg.targetID + "_AX_null_AX_0").outerHeight().number(),
				printListCount = (this.body.height() / itemTrHeight).ceil(); // 한페이지에 출력될 아이템의 갯수수
			this.scrollContent.css({"padding-bottom": itemTrHeight});
			// 추가로 출력할 목록 선정
			po = [];

			// todo : 불필요한 구문 제거 초기에 리스트 생성은 최소화 처리 하고 싱크에서 데이터를 동기화 하도록 변경
			if("초기 TR 만들기" && false) {
				if (this.list.length > (printListCount + 5)) printListCount += 5;
				else printListCount = this.list.length;
				for (var item, itemIndex = 0, __arr = this.list; (itemIndex < printListCount && (item = __arr[itemIndex])); itemIndex++) {
					po.push(getItem(itemIndex, item, "n"));
					if (bodyHasMarker && getMarkerDisplay(itemIndex, item)) {
						po.push(getItemMarker(itemIndex, item, "n"));
					}
				}
				this.cachedDom.tbody.empty();
				this.cachedDom.tbody.append(po.join(''));
				// 출력된 테이블에 mergeCells 호출
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
			}
			// init virtualScroll & control height thpadding
			/*
			 this.virtualScroll = {
			 startIndex    : -1,
			 endIndex      : -1,
			 itemTrHeight  : itemTrHeight,
			 printListCount: printListCount,
			 scrollTop     : -1
			 };
			 */

			this.virtualScroll = {
				startIndex    : 0,
				endIndex      : printListCount,
				itemTrHeight  : itemTrHeight,
				printListCount: printListCount+1,
				scrollTop     : 0
			};

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
		if(cfg.height == "auto" && this.list.length > 0)
		{

			this.virtualScroll = {
				startIndex : 0,
				endIndex : 0,
				itemTrHeight: 0,
				printListCount: 0,
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

		// printList then body.onchangeScroll
		if(cfg.body.onchangeScroll){
			var sendObj = axf.copyObject(this.virtualScroll);
			cfg.body.onchangeScroll.call(sendObj, sendObj);
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

		this.bigDataSyncApply("first");
	},
	/**
	 * @method AXGrid.bigDataSyncApply
	 * @param {Boolean} reload - 현재 그리드 스크롤된 컨텐츠를 다시 출력합니다.
	 * @description - Grid의 리스트 내부 인덱스가 변경되거나 포커싱 대상 인덱스가 스크롤을 벗어나 있을경우 그리드를 재구성 합니다.
	 */
	bigDataSyncApply: function(reload){
		var cfg = this.config,
			bodyHasMarker = this.bodyHasMarker,
			getItem = this.getItem.bind(this),
			getItemMarker = this.getItemMarker.bind(this),
			getMarkerDisplay = this.getMarkerDisplay.bind(this),
			scrollContentScrollTop, VS = this.virtualScroll, po = [], item,
			body = this.body;

		if(VS.scrollTop != (scrollContentScrollTop = this.scrollContent.position().top) || reload){

			// todo : 접기 처리 하면. 보여지는 아이템갯수 만큼만 루프에 포함 하도록 기능 변경
			var newStartIndex, _newStartIndex, newEndIndex;
			newStartIndex = (scrollContentScrollTop.abs() / VS.itemTrHeight).ceil() - 1;
			if(newStartIndex < 0) newStartIndex = 0;
			newEndIndex = newStartIndex + VS.printListCount;

			if(newEndIndex > this.list.length) {
				newEndIndex = this.list.length;
				newStartIndex = newEndIndex - VS.printListCount;
			}
			if(newStartIndex < 0) newStartIndex = 0;
			_newStartIndex = newStartIndex;

			if( isNaN(newStartIndex) ) newStartIndex = 0;
			if( isNaN(newEndIndex) ) newEndIndex = 0;

			if(VS.startIndex != newStartIndex || reload) {
				//그리드 내용 다시 구성
				po = [];

				/*
				숨겨진 아이템을 피해 서.
				 todo : newStartIndex, newEndIndex를 구하는 작업 인덱스 변경후 scroll 값을 재 조정 해야함.
				 */
				if(this.list[newStartIndex]) {
					while (this.list[newStartIndex][cfg.reserveKeys.hidden]) {
						if (VS.startIndex > newStartIndex) {
							newStartIndex--;
							newEndIndex--;
						} else {
							newStartIndex++;
							newEndIndex++;
						}
					}
				}

				for (var itemIndex = newStartIndex; itemIndex < newEndIndex; itemIndex++) {
					item = this.list[itemIndex];
					if(!item) break;
					if(item[cfg.reserveKeys.hidden]){
						newEndIndex++;
						if(newEndIndex > this.list.length) newEndIndex = this.list.length;
					}else {
						po.push(getItem(itemIndex, item, "n"));
						if (bodyHasMarker && getMarkerDisplay(itemIndex, item)) {
							po.push(getItemMarker(itemIndex, item, "n"));
						}
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
						if(item[cfg.reserveKeys.hidden]){

						}else {
							po.push(getItem(itemIndex, item, "fix"));
							if (bodyHasMarker && getMarkerDisplay(itemIndex, item)) {
								po.push(getItemMarker(itemIndex, item, "fix"));
							}
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

				if(newStartIndex != _newStartIndex) { // 스크롤 포지션 정보가 갱신 되어야 한다면
					scrollContentScrollTop -= ((newStartIndex - _newStartIndex) * VS.itemTrHeight);
					this.scrollContent.css({top: scrollContentScrollTop});
					this.contentScrollContentSync({top: scrollContentScrollTop}, "manual");
				}

				this.body.find(".gridBodyTr").bind("mouseover", this.gridBodyOver.bind(this));
				this.body.find(".gridBodyTr").bind("mouseout", this.gridBodyOut.bind(this));
				this.body.find(".gridBodyTr").bind("click", this.gridBodyClick.bind(this));

				if (this.needBindDBLClick()) this.body.find(".gridBodyTr").bind("dblclick", this.gridBodyDBLClick.bind(this));

				if (this.selectedRow != undefined && this.selectedRow.length > 0) {
					for(var ri = 0;ri < this.selectedRow.length;ri++){
						body.find(".gridBodyTr_" + this.selectedRow[ri]).addClass("selected");
						body.find(".gridBodyTr_" + this.selectedRow[ri]).find(".bodyTd_" + this.selectedCells[0]).addClass("selected");
					}
				}
				if (this.copiedRow != undefined && this.copiedRow.length > 0) {
					for(var ci = 0;ci < this.copiedRow.length;ci++){
						body.find(".gridBodyTr_" + this.copiedRow[ci]).addClass("copied");
					}
				}

				// body.onchangeScroll
				if(cfg.body.onchangeScroll){
					var sendObj = axf.copyObject(this.virtualScroll);
					cfg.body.onchangeScroll.call(sendObj, sendObj);
				}
				
				this.onevent_grid({type:"grid-list-change"});

				this.editCellClear();
			}
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
		var cfg = this.config, result, checkedStr, disabled, keys = cfg.reserveKeys, sendObj, po,
			get_depth = function(item){
				if(item[cfg.reserveKeys.child_hash]) {
					var depth = item[cfg.reserveKeys.child_hash].split(/_/g).length - 2, addClass = "";
					if (item[cfg.reserveKeys.sub_list].length > 0) addClass += " folder";
					else  addClass += " file";
					if (item[cfg.reserveKeys.collapse_key]) addClass += " collapse";
					return '<a id="' + cfg.targetID + '_AX_nodeindent_AX_' + CH.colSeq + '_AX_' + itemIndex + '"' +
						' class="node-indent node-indent-' + depth + ' ' + addClass + '"></a>';
				}else{
					return '';
				}
			};
		
		if (formatter == "money") {
			if (value == "" || value == "null" || value == null || value == undefined) {
				result = "0";
			} else {
				result = (value || 0).number().money();
			}
		}
		else if (formatter == "dec") {
			result = (value == undefined) ? "" : value.dec();
		}
		else if (formatter == "html") {
			result = value;
		}
		else if (formatter == "checkbox" || formatter == "radio") {
			checkedStr = "", disabled = "", sendObj = {
				index: itemIndex,
				list : this.list,
				item : item,
				page : this.page,
				key  : key,
				value: value
			};

			if (this.list[itemIndex].___checked && this.list[itemIndex].___checked[CHidx]) {
				if (this.list[itemIndex].___checked[CHidx]) checkedStr = " checked=\"checked\" ";
				//if(itemIndex == 0) trace(this.list[itemIndex].___checked[CHidx], checkedStr);
			} else if (Object.isFunction(CH.checked)) {
				if (CH.checked.call(sendObj)) {
					checkedStr = " checked=\"checked\" ";
					if (!this.list[itemIndex].___checked) this.list[itemIndex].___checked = {};
					this.list[itemIndex].___checked[CHidx] = true;
				}
			}

			if (CH.disabled) {
				if (CH.disabled.call(sendObj)) {
					disabled = " disabled=\"disabled\" ";
					if (!this.list[itemIndex].___checked) this.list[itemIndex].___disabled = {};
					this.list[itemIndex].___disabled[CHidx] = true;
				}
			}
			result = "<input type=\"" + formatter + "\" name=\"" + CH.label + "\" class=\"gridCheckBox_body_colSeq" + CH.colSeq + "\" id=\"" + cfg.targetID + "_AX_checkboxItem_AX_" + CH.colSeq + "_AX_" + itemIndex + "\" value=\"" + value + "\" " + checkedStr + disabled + " onfocus=\"this.blur();\" />";
		}
		else if (formatter == "tree_control") {
			// todo : wbs에 맞는 구문 formatter 맞추기
			value = (value == undefined) ? "" : value.dec();
			result = get_depth(item) + value;
		}
		else {
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

	// 클릭이벤트 가로채기 폴딩 이벤트 캐치구문추가
	gridBodyClick: function (event) {
		var cfg = this.config, j_target = jQuery(event.target);

		if( j_target.hasClass("node-indent") && j_target.hasClass("folder") ){
			//trace("이벤트 가로채기 성공");
			//trace(event.target.id);
			var ids = event.target.id.split(/_AX_/g),
				colSeq = ids[ids.length-2], index = ids[ids.length-1];
			this.collapse(index)
		}
		else
		if (event.target.tagName.toLowerCase() == "input" && (
			event.target.type == "radio" || event.target.type == "checkbox"
			)) {
			this.gridBodyClickAct(event);
		}
		else
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
	collapse: function(list_index){
		var cfg = this.config, item = this.list[list_index];
		if(!item) return false;

		function hidden_item(_item, TF, collapse){
			if(TF){
				_item[cfg.reserveKeys.hidden] = true;
			}else{
				if(!collapse)
					delete _item[cfg.reserveKeys.hidden];
			}
			if(_item[cfg.reserveKeys.sub_list] && _item[cfg.reserveKeys.sub_list].length > 0){
				var len =  _item[cfg.reserveKeys.sub_list].length;
				for(var a=0;a<len;a++){
					hidden_item.call(this,  this.list[ this.list_pointer[ _item[cfg.reserveKeys.sub_list][a] ] ], TF, _item[cfg.reserveKeys.collapse_key] );
				}
			}
		}

		// 닫힌상태 false or undefined
		if(item[cfg.reserveKeys.collapse_key]){
			item[cfg.reserveKeys.collapse_key] = false;
		}
		else
		{
			item[cfg.reserveKeys.collapse_key] = true;
		}

		if(item[cfg.reserveKeys.sub_list] && item[cfg.reserveKeys.sub_list].length > 0){
			var len =  item[cfg.reserveKeys.sub_list].length;
			for(var a=0;a<len;a++){
				hidden_item.call(this, this.list[ this.list_pointer[ item[cfg.reserveKeys.sub_list][a] ] ], item[cfg.reserveKeys.collapse_key], item[cfg.reserveKeys.collapse_key]);
			}
		}

		//trace(this.list);
		this.bigDataSyncApply("reload");

		// todo : 세로스크롤 사이즈 조정 필요
		this.contentScrollResize();
		// ------
	},
	/**
	 * 인덱스 위치의 뎁스를 한단계 아래로 바꾸기 직전 인덱스가 부모가 되고 직전 인덱스의 뎁스가 같지 않으면 같은 뎁스의 부모를 찾아 부모로 삼는다.
	 * @method  AXGridWBS.indent
	 * @param {Number} itemIndex
	 * @returns {AXGridWBS}
	 * @example
	 ```

	 ```
	 */
	indent: function(arg){
		var _this = this, cfg = this.config, keys = cfg.reserveKeys,
			itemIndexs = [].concat(arg), itemIndex,
			parentItemIndex, parentItem_parentKey, item_parentKey, parentItem_depth, item_depth,
			i = 0, l = itemIndexs.length, returns = [];

		if(cfg.control_lock_status > 0) {
			return {
				error: "500",
				msg  : "수정할 수 없는 상태입니다."
			};
		}
		for(;i<l;i++){
			itemIndex = itemIndexs[i];

			if(typeof itemIndex == "undefined" || itemIndex < 0 || itemIndex >= this.list.length){
				returns.push({
					error: "404",
					msg: "itemIndex 값이 범위를 벗어났습니다. index : " + itemIndex
				});
				continue;
			}
			parentItemIndex = itemIndex - 1;
			if(parentItemIndex < 0){
				returns.push({
					error: "500",
					msg: "트리의 시작입니다. index : " + itemIndex
				});
				continue;
			}

			parentItem_parentKey = _this.list[parentItemIndex][keys.parent_key];
			parentItem_depth = _this.list[parentItemIndex][keys.child_hash].split(/_/g).length;
			item_parentKey = _this.list[itemIndex][keys.parent_key];
			item_depth = _this.list[itemIndex][keys.child_hash].split(/_/g).length;
			//trace(parentItem_depth, item_depth);

			if(parentItem_parentKey != item_parentKey && parentItem_depth <= item_depth){
				//trace(parentItem_parentKey, item_parentKey, parentItem_depth, item_depth);
				returns.push({
					error: "500",
					msg: "인덴트 할 수 없습니다. index : " + itemIndex
				});
				continue;
			}else{
				// 만일 부모 인덱스 값이. 인덴트 값 보다 더 하위 개체 라면
				if(_this.list[parentItemIndex][keys.child_hash].split(/_/g).length > _this.list[itemIndex][keys.child_hash].split(/_/g).length){
					// 부모들 중에 뎁스가 적당한 위치를 찾아주세요.
					while(_this.list[parentItemIndex][keys.child_hash].split(/_/g).length > _this.list[itemIndex][keys.child_hash].split(/_/g).length){
						parentItemIndex = _this.list_pointer[_this.list[parentItemIndex][keys.parent_key]];
					}
					_this.list[itemIndex][keys.parent_key] = _this.list[parentItemIndex][keys.child_key];
				}else{
					_this.list[itemIndex][keys.parent_key] = _this.list[parentItemIndex][keys.child_key];
				}
				if(_this.list[itemIndex]._CUD != "C" && _this.list[itemIndex]._CUD != "D") _this.list[itemIndex]._CUD = "U";
				_this.list[itemIndex][keys.child_hash] += "_0";

				returns.push({
					success: true
				});
			}
		}

		_this.arrangeData(_this.list, {reset:true, calculate:true});
		_this.bigDataSyncApply("reload");

		if(returns.length == 1){
			return returns[0];
		}else{
			return returns;
		}
	},
	outdent: function(arg){
		var _this = this, cfg = this.config, keys = cfg.reserveKeys,
			itemIndexs = [].concat(arg), itemIndex,
			parentItemIndex, parentItem_parentKey, item_parentKey, parentItem_depth, nextItemIndex, item_depth,
			i = 0, l = itemIndexs.length, returns = [];
		if(cfg.control_lock_status > 0) {
			return {
				error: "500",
				msg  : "수정할 수 없는 상태입니다."
			};
		}
		for(;i<l;i++){
			itemIndex = itemIndexs[i];

			if(typeof itemIndex == "undefined" || itemIndex < 0 || itemIndex >= this.list.length){
				returns.push({
					error: "404",
					msg: "itemIndex 값이 범위를 벗어났습니다. index : " + itemIndex
				});
				continue;
			}

			if(_this.list[itemIndex][keys.parent_key] == 0){
				returns.push({
					error: "404",
					msg: "최상위 레벨입니다. Outdent 할 수 없습니다."
				});
				continue;
			}


			parentItemIndex = _this.list_pointer[_this.list[itemIndex][keys.parent_key]];

			parentItem_parentKey = _this.list[parentItemIndex][keys.parent_key];
			parentItem_depth = _this.list[parentItemIndex][keys.child_hash].split(/_/g).length;
			item_parentKey = _this.list[itemIndex][keys.parent_key];
			item_depth = _this.list[itemIndex][keys.child_hash].split(/_/g).length;
			//trace(parentItem_depth, item_depth);

			// 아웃덴트 할 수 있습니다.
			//trace("아웃덴트 할 수 있습니다.");

			// 다음 아이템이 형제 관계 이면 다음아이템의 부모키를 자신으로 변경 합니다.

			nextItemIndex = itemIndex + 1;
			if(nextItemIndex < _this.list.length){
				if(_this.list[itemIndex][keys.parent_key] == _this.list[nextItemIndex][keys.parent_key]){
					if(_this.list[nextItemIndex]._CUD != "C" && _this.list[nextItemIndex]._CUD != "D") _this.list[nextItemIndex]._CUD = "U";
					_this.list[nextItemIndex][keys.parent_key] = _this.list[itemIndex][keys.child_key];
				}
			}

			if(_this.list[itemIndex]._CUD != "C" && _this.list[itemIndex]._CUD != "D") _this.list[itemIndex]._CUD = "U";
			_this.list[itemIndex][keys.parent_key] = _this.list[parentItemIndex][keys.parent_key];

			returns.push({
				success: true
			});
		}

		_this.arrangeData(_this.list, {reset:true, calculate:true});
		_this.bigDataSyncApply("reload");

		if(returns.length == 1){
			return returns[0];
		}else{
			return returns;
		}
	},
	moveUp: function(arg){
		return this.move(arg, -1);
	},
	moveDown: function(arg){
		return this.move(arg, 1);
	},
	move: function(arg, direction){
		var _this = this, cfg = this.config, keys = cfg.reserveKeys,
			itemIndexs = [].concat(arg), itemIndex,
			nextItemIndex, item_parentHash,
			i = 0, l = itemIndexs.length, returns = [],
			selectedRow = [], listi, listi_count = 1, listLen = this.list.length,
			dotIndex, left_list, right_list, dotIndex_confirm = false;

		if(cfg.control_lock_status > 0) {
			return {
				error: "500",
				msg  : "수정할 수 없는 상태입니다."
			};
		}
		for(;i<1;i++){ // move는 첫번째 인덱스만 처리가능

			itemIndex = itemIndexs[i];
			if(typeof itemIndex == "undefined" || itemIndex < 0 || itemIndex >= this.list.length){
				returns.push({
					error: "404",
					msg: "itemIndex 값이 범위를 벗어났습니다. index : " + itemIndex
				});
				continue;
			}

			nextItemIndex = itemIndex.number() + direction;
			//trace({nextItemIndex:nextItemIndex});
			if(!_this.list[nextItemIndex]){
				returns.push({
					error: "404",
					msg: "itemIndex 값이 범위를 벗어났습니다. index : " + itemIndex
				});
				continue;
			}

			if(_this.list[itemIndex][keys.sub_list].length > 0){
				item_parentHash = _this.list[itemIndex][keys.child_hash];
				listi = itemIndex + 1;
				//listi_count = 0;
				for(;listi < listLen;listi++){
					if(direction > 0) nextItemIndex = listi;
					if(_this.list[listi][keys.child_hash].left(item_parentHash.length) == item_parentHash){
						listi_count++;
					}else{

						break;
					}
				}
			}
			else
			{
				listi_count = 1;
				dotIndex = nextItemIndex;
			}

			//trace({itemIndex:itemIndex, listi_count:listi_count, nextItemIndex:nextItemIndex, dotIndex:dotIndex});
			if(direction > 0){ // down
				if(
					_this.list[nextItemIndex][keys.sub_list].length > 0 &&
					_this.list[nextItemIndex][keys.parent_hash].split(/_/g).length == _this.list[itemIndex][keys.parent_hash].split(/_/g).length
				) {
					item_parentHash = _this.list[nextItemIndex][keys.child_hash];
					listi = nextItemIndex;

					for (; listi < listLen; listi++) {
						if (_this.list[listi][keys.child_hash].left(item_parentHash.length) != item_parentHash) {
							dotIndex_confirm = true;
							break;
						}else{
							dotIndex = listi;
						}
					}
				}
				else
				{
					if(_this.list[nextItemIndex][keys.parent_hash].split(/_/g).length < _this.list[itemIndex][keys.parent_hash].split(/_/g).length){
						// 상위 뎁스 이면 이동 금지
						returns.push({
							error: "404",
							msg: "더 이상 아래로 이동할 수 없습니다."
						});
						continue;
					}
					dotIndex_confirm = true;
					dotIndex = nextItemIndex;
				}
			}
			else
			{ // up
				if(_this.list[nextItemIndex][keys.parent_hash].split(/_/g).length >= _this.list[itemIndex][keys.parent_hash].split(/_/g).length) {
					item_parentHash = _this.list[itemIndex][keys.parent_hash].split(/_/g).length; // depth
					listi = nextItemIndex;

					for (; listi > -1; listi--) {
						dotIndex = listi;
						if (_this.list[listi][keys.parent_hash].split(/_/g).length == item_parentHash) {
							dotIndex_confirm = true;
							break;
						}
					}
				}
				else
				{
					if(_this.list[nextItemIndex][keys.parent_hash].split(/_/g).length < _this.list[itemIndex][keys.parent_hash].split(/_/g).length){
						// 상위 뎁스 이면 이동 금지
						returns.push({
							error: "404",
							msg: "더 이상 위로 이동할 수 없습니다."
						});
						continue;
					}
					dotIndex_confirm = true;
					dotIndex = nextItemIndex;
				}
			}

			// 선택된 인덱스, 이동할 아이템 갯수(자식포함), 다른 아이템, 이동해야할 위치
			// trace({itemIndex:itemIndex, listi_count:listi_count, nextItemIndex:nextItemIndex, dotIndex:dotIndex});

			if(direction > 0) {
				for(var a=0;a<listi_count;a++) {
					_this.list.splice(dotIndex + 1 + a, 0, _this.list[itemIndex.number()+a]);
				}
				left_list = _this.list.splice(0, itemIndex);
				right_list = _this.list.splice(listi_count);
			}else{
				for(var a=0;a<listi_count;a++) {
					_this.list.splice(dotIndex + a, 0, _this.list[itemIndex.number()+a+a]);
				}

				left_list = _this.list.splice(0, itemIndex+listi_count);
				right_list = _this.list.splice(listi_count);
			}

			_this.list = left_list.concat(right_list);
			//trace( _this.list.map(function(n){return n.no;}) );

			returns.push({
				success: true
			});

			if(direction > 0) {
				selectedRow.push(dotIndex - listi_count + 1);
			}else{
				selectedRow.push(dotIndex);
			}
		}

		if(returns[0].error){

		}else{
			if(selectedRow.length > 0) _this.selectedRow = selectedRow;
			_this.arrangeData(_this.list, {reset:true});
			_this.bigDataSyncApply("reload");
			if(selectedRow.length > 0) _this.setFocus(selectedRow.first());
		}

		return returns[0];
	},
	/**
	 * 리스트에서 원하는 인덱스나 child_key 값의 자식을 추가 하거나 새로운 아이템을 추가 합니다.
	 * @method AXGridWBS.append
	 * @param {Number|Object} itemIndex
	 * @param {Number|Object} itemIndex
	 * @returns {Object|Array} result
	 * @example
	 ```
	 target.append({activity_nm:"새로운 이름"});
	 // 새로운 아이템 추가
	 target.append({activity_nm:"새로운 이름"}, 1);
	 // 인덱스 1의 맨 마지막 자식 추가
	 target.append({activity_nm:"새로운 이름"}, {no:2});
	 // child_key : 2 의 맨 마지막 자식 추가

	 // return result
	 // 에러시
	 {error: "에러번호", msg: "에러 메세지"}
	 // 성공시
	 {success:true}
	 ```
	 */
	append: function(item, parentIndex){
		return this.addChild(item, parentIndex, "append");
	},
	prepend: function(item, parentIndex){
		return this.addChild(item, parentIndex, "prepend");
	},
	addChild: function(item, parentIndex, addType){
		var _this = this, cfg = this.config, keys = cfg.reserveKeys,
			returns = [], items, i, l, item, pitem, pitem_hash, list,
			max_child_key, default_item, appendIndex;

		if(cfg.control_lock_status > 0) {
			return {
				error: "500",
				msg  : "수정할 수 없는 상태입니다."
			};
		}
		// item 데이터 검증
		if(!Object.isObject(item) && !Object.isArray(item)){
			return {
				error: "500",
				msg: "메소드 파라미터가 올바르지 않습니다.",
				arg: arguments
			};
		}

		default_item = {};
		default_item[keys.period] = 1;
		default_item[keys.start_dt] = (new Date()).print();
		default_item[keys.end_dt] = default_item[keys.start_dt];

		list = _this.list.concat([]);
		list.sort(function(a, b){
			if (a[keys.child_key] < b[keys.child_key]) return 1;
			else if (a[keys.child_key] > b[keys.child_key]) return -1;
			else return 0;
		});

		max_child_key = (list.length > 0) ? list[0][keys.child_key] : 0;

		items = [].concat(item), i = 0, l = items.length;

		for(;i<l;i++){
			item = items[i];
			if(typeof item[keys.child_key] === "undefined"){
				item[keys.child_key] = ++max_child_key;
			}else{
				if( typeof this.list_pointer[ item[keys.child_key] ] !== "undefined" ){
					returns.push({
						error: "500",
						msg: keys.child_key + "가 무결성 원칙에 위배 됩니다. 다른 키를 사용하세요"
					});
					continue;
				}
			}

			if(typeof parentIndex === "undefined"){
				//pitem = _this.list[parentIndex];
				item[keys.parent_key] = 0;
				item = jQuery.extend(item, default_item);
				pitem_hash = "0";

				// ._CUD 값 조정
				item._CUD = "C";
				// item 삽입위치를 파악 합니다.
				_this.list.push(item);
				appendIndex = _this.list.length-1;
			}
			else
			{
				if(Object.isObject(parentIndex)){
					parentIndex = _this.list_pointer[parentIndex[keys.child_key]];
				}
				pitem = _this.list[parentIndex];
				item[keys.parent_key] = pitem[keys.child_key];
				item = jQuery.extend(item, default_item);
				pitem_hash = pitem[keys.child_hash];
				// item 삽입위치를 파악 합니다.

				var pi = parentIndex, pl = _this.list.length;
				if(addType == "prepend"){
					appendIndex = pi + 1;
				}else {
					var find_index = false;
					for (; pi < pl; pi++) {
						appendIndex = pi;
						if(_this.list[pi][keys.child_hash].left( pitem_hash.length ) != pitem_hash){
							find_index = true;
							break;
						}
					}
					if(!find_index){
						appendIndex++;
					}
				}

				// ._CUD 값 조정
				item._CUD = "C";
				_this.list.splice(appendIndex, 0, item);

			}

			returns.push({
				success: true
			});
		}

		// todo : 빈 리스트에서 아이템 추가 하기 + 기능 구현중
		if(this.virtualScroll.printListCount == 0){
			this.arrangeData(this.list);
			this.printList();
		}else{
			this.virtualScroll.printListCount = (this.body.height() / this.virtualScroll.itemTrHeight).ceil(); // 한페이지에 출력될 아이템의 갯수수
			this.arrangeData(this.list, {reset:true, calculate:true});
			this.bigDataSyncApply("reload");
			this.contentScrollResize();
			this.setFocus(appendIndex);
		}

		return returns;
	},
	/**
	 * 리스트에서 원하는 인덱스나 child_key 로 대상을 제거 합니다.
	 * @method AXGridWBS.remove
	 * @param {Number|Object} itemIndex
	 * @returns {Object} result
	 * @example
	 ```
	 myWBS.remove(1);
	 myWBS.remove({no:1});

	 // return result
	 // 에러시
	 {error: "에러번호", msg: "에러 메세지"}
	 // 성공시
	 {success:true}
	 ```
	 */
	remove: function(arg){
		var _this = this, cfg = _this.config, body = this.body,
			list = this.list, l = list.legnth, ll = list.length, item, i = 0, ii,
			keys = cfg.reserveKeys,
			itemIndexs = [].concat(arg), itemIndex;

		if(cfg.control_lock_status > 0) {
			return {
				error: "500",
				msg  : "수정할 수 없는 상태입니다."
			};
		}

		if("선택범위 정리하기"){
			var tempRow = [];
			while(typeof (ii = itemIndexs[i++]) !== "undefined"){
				item = list[ii];
				var push_ok = true;
				for(var a=0;a<itemIndexs.length;a++){
					if(item[keys.parent_key] == list[itemIndexs[a]][keys.child_key]){
						push_ok = false;
						break;
					}
				}
				if(push_ok){
					tempRow.push(ii.number());
				}
			}

			i = 0;
			var selectedRow = [];
			while(typeof (ii = tempRow[i++]) !== "undefined") {
				item = list[ii];
				if(item.__subTreeLength > 0){
					// 자식 아이템 모두 선택하기
					var child_hash = item[keys.child_hash];
					for(var a = ii;a<ll;a++){
						if(child_hash == list[a][keys.child_hash].left(child_hash.length)){
							selectedRow.push(a);
						}
					}
				}else{
					selectedRow.push(ii);
				}
			}

			// clear
			_this.selectClear();
			_this.clipBoardClear();

			_this.selectedRow = selectedRow;
			axf.each(_this.selectedRow, function () {
				body.find(".gridBodyTr_" + this).addClass("selected");
			});
		}

		if(!confirm("정말 삭제 하시겠습니까?\n\n\"삭제아이템의 하위로 아이템이 있는 경우\n하위 아이템까지 삭제 됩니다\"")){
			return {
				success: true
			}
		}

		//_this.list.splice(itemIndex, i-itemIndex);

		var new_list = [], removed_list = [];
		i = 0, l = list.length, ii = 0, ll = _this.selectedRow.length;
		for(;i<l;i++){
			var push_ok = true;
			ii = 0;
			for(;ii<ll;ii++){
				if(i == _this.selectedRow[ii].number()){
					push_ok = false;
					break;
				}
			}
			if(push_ok){
				new_list.push(list[i]);
			}else{
				removed_list.push(list[i]);
			}
		}

		// 얻어진 new_list 에서 preceding_key 확인
		i = 0, l = new_list.length;
		for(;i<l;i++){
			if(new_list[i][keys.preceding_key]){
				// todo : 여기까지 개발하다 중단 : 선행작업 오브젝트에 삭제된 아이템키가 있는지 확인 하여 정리 합니다.
				var preceding_obj = {};
				for(var rindex in new_list[i][keys.preceding_key]){
					var is_remove = false;
					for(var ri = 0;ri<removed_list.length;ri++){
						if(rindex == removed_list[ri][keys.child_key]){
							is_remove = true;
							break;
						}
					}
					if(!is_remove) preceding_obj[rindex] = new_list[i][keys.preceding_key][rindex];
				}
				new_list[i][keys.preceding_key] = preceding_obj;
			}
		}


		_this.list = new_list;
		//trace(_this.list);

		_this.selectedRow.clear();
		_this.clipBoardClear();
		_this.arrangeData(_this.list, {reset:true, calculate:true});
		_this.bigDataSyncApply("reload");
		_this.contentScrollResize();

		return {
			success: true
		}

	},

	cut: function(itemIndex){
		return this.copy(itemIndex, {cut:true});
	},
	copy: function(arg, cond){
		var _this = this, cfg = _this.config, body = this.body,
			list = this.list, ll = list.length, item, i = 0, ii,
			keys = cfg.reserveKeys,
			itemIndexs = [].concat(arg), itemIndex;

		if("선택범위 정리하기") {
			var tempRow = [];
			while (typeof (ii = itemIndexs[i++]) !== "undefined") {
				item = list[ii];
				var push_ok = true;
				for (var a = 0; a < itemIndexs.length; a++) {
					if (item[keys.parent_key] == list[itemIndexs[a]][keys.child_key]) {
						push_ok = false;
						break;
					}
				}
				if (push_ok) {
					tempRow.push(ii.number());
				}
			}

			i = 0;
			var selectedRow = [];
			while (typeof (ii = tempRow[i++]) !== "undefined") {
				item = list[ii];
				if (item.__subTreeLength > 0) {
					// 자식 아이템 모두 선택하기
					var child_hash = item[keys.child_hash];
					for (var a = ii; a < ll; a++) {
						if (child_hash == list[a][keys.child_hash].left(child_hash.length)) {
							selectedRow.push(a);
						}
					}
				} else {
					selectedRow.push(ii)
				}
			}

			// clear
			_this.selectClear();
			_this.clipBoardClear();

			_this.selectedRow = selectedRow;
			axf.each(_this.selectedRow, function () {
				body.find(".gridBodyTr_" + this).addClass("selected");
			});
		}

		if(typeof cond === "undefined" || cond.copy){
			this.clipBoard.type = "copy";
			this.clipBoard.list = [];
		}
		else
		if(cond.cut) {
			this.clipBoard.type = "cut";
			this.clipBoard.list = [];
		}

		var __list, max_child_key = 0, min_child_key;
		max_child_key = _this.list.getMaxObject(keys.child_key)[keys.child_key].number();
		_this.selectedRow.sort();
		min_child_key = _this.list[_this.selectedRow[0]][keys.child_key].number();

		i = 0;
		while(typeof (ii = _this.selectedRow[i++]) !== "undefined"){
			item = jQuery.extend({}, list[ii]);
			var push_ok = true;
			for(var a=0;a<_this.selectedRow.length;a++){
				if(item[keys.parent_key] == list[_this.selectedRow[a]][keys.child_key]){
					push_ok = false;
					break;
				}
			}

			item[keys.parent_hash] = null;
			item[keys.child_hash] = null;
			item[keys.child_key] = max_child_key + item[keys.child_key].number() - min_child_key + 1;
			item._CUD = "C";
			if(push_ok){
				item[keys.parent_key] = "";
				_this.clipBoard.list.push(item);
			}else{
				item[keys.parent_key] = max_child_key + item[keys.parent_key].number() - min_child_key + 1;
				_this.clipBoard.list.push(item);
			}
		}

		_this.copiedRow = _this.selectedRow.concat([]);
		axf.each(_this.copiedRow, function () {
			body.find(".gridBodyTr_" + this).addClass("copied");
		});

		return {
			success: true
		}
	},
	// 붙여넣을 인덱스, 붙여넣은 리스트 데이터
	paste: function(arg, paste_list){
		var _this = this, cfg = this.config, keys = cfg.reserveKeys,
			i, l,
			paste_index = -1, parent_key = 0,
			cut_list = [], ii = 0, ll = _this.copiedRow.length;

		if(cfg.control_lock_status > 0) {
			return {
				error: "500",
				msg  : "수정할 수 없는 상태입니다."
			};
		}

		if(this.clipBoard.list.length > 0){

			if(this.clipBoard.type == "cut") {
				for (;ii<ll;ii++) {
					cut_list.push(_this.list[_this.copiedRow[ii]][keys.child_key]);
				}
			}

			i= 0, l=this.list.length;
			if(typeof arg !== "undefined"){
				// get paste_index
				i = [].concat(arg).last();
				parent_key = _this.list[i][keys.child_key];
				if(_this.list[i].__subTreeLength > 0) {
					var p_hash = _this.list[i][keys.child_hash];
					for (; i < l; i++) {
						paste_index = i;
						if (_this.list[i][keys.child_hash].left( p_hash.length ) != p_hash){
							break;
						}
					}
				}else{
					paste_index = i+1;
				}
			}

			i= 0, l=this.clipBoard.list.length;
			for(;i<l;i++){
				item = _this.clipBoard.list[i];
				if(item[keys.parent_key] == ""){
					item[keys.parent_key] = parent_key;
				}
			}

			if(paste_index == -1){
				this.list = this.list.concat(this.clipBoard.list);
			}else{
				var left_list = this.list.splice(0, paste_index);
				left_list = left_list.concat(this.clipBoard.list);
				this.list = left_list.concat(this.list);
			}

			if(this.clipBoard.type == "cut"){
				i= 0, l=this.list.length;
				var new_list = [], removed_list = [];

				for(;i<l;i++){
					var remove = false;
					for (var ci=0;ci<cut_list.length;ci++) {
						if(_this.list[i][keys.child_key] == cut_list[ci]) {
							remove = true;
							break;
						}
					}
					if(!remove) {
						new_list.push(_this.list[i]);
					}else{
						removed_list.push(_this.list[i]);
					}
				}

				// 얻어진 new_list 에서 preceding_key 확인
				i = 0, l = new_list.length;
				for(;i<l;i++){
					if(new_list[i][keys.preceding_key]){
						// todo : 여기까지 개발하다 중단 : 선행작업 오브젝트에 삭제된 아이템키가 있는지 확인 하여 정리 합니다.
						var preceding_obj = {};
						for(var rindex in new_list[i][keys.preceding_key]){
							var is_remove = false;
							for(var ri = 0;ri<removed_list.length;ri++){
								if(rindex == removed_list[ri][keys.child_key]){
									is_remove = true;
									break;
								}
							}
							if(!is_remove) preceding_obj[rindex] = new_list[i][keys.preceding_key][rindex];
						}
						new_list[i][keys.preceding_key] = preceding_obj;
					}
				}
				
				_this.list = new_list;
				_this.selectedRow.clear();
			}

			this.clipBoardClear();

			// todo : 빈 리스트에서 아이템 추가 하기 + 기능 구현중
			if(this.virtualScroll.printListCount == 0){
				this.arrangeData(this.list);
				this.printList();
			}else{
				this.virtualScroll.printListCount = (this.body.height() / this.virtualScroll.itemTrHeight).ceil(); // 한페이지에 출력될 아이템의 갯수수
				this.arrangeData(this.list, {reset:true, calculate:true});
				this.bigDataSyncApply("reload");
				this.contentScrollResize();
			}
		}
		return {

		}
	},

	nothing: function(){}
});
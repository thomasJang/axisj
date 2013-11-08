/*!
 * axisJ Javascript Library Version 1.0
 * http://axisJ.com
 * 
 * 아래 소스의 라이선스는 axisJ.com 에서 확인 하실 수 있습니다.
 * http://axisJ.com/license
 * axisJ를 사용하시려면 라이선스 페이지를 확인 및 숙지 후 사용 하시기 바람니다. 무단 사용시 예상치 못한 피해가 발생 하실 수 있습니다.
 */
 
var __grid = {
	instances:	[],
	bind: function(configs){
		if(!configs.targetID){
			trace("bind 대상 ID가 없어 bind 처리할 수 없습니다.");
			return;
		}
		if(!AXgetId(configs.targetID)){
			trace("bind 대상이 없어 bind 처리할 수 없습니다.");
			return;
		}
		var mlen = __grid.instances.search(
			function(){
				return (this.item.targetID == configs.targetID);
			}
		);
		if(mlen > 0){
			trace("이미 바인딩된 개체 아이디 입니다.");
			return;
		}
		if(!configs.page) configs.page = {paging:true, status:{formatter: null}};
		
		var targetID = configs.targetID;
		var insSeq = __grid.instances.length;
		__grid.instances.push({object:{}, config:configs});
		
		__grid.instances[insSeq].object = new AXGrid();
		__grid.instances[insSeq].object.setConfig(configs);
	},
	findIndex: function(targetID){
		var findIndex = null;
		jQuery.each(__grid.instances, function(index, O){
			if(O.config.targetID == targetID){
				findIndex = index;
				return false;
			}
		});
		if(findIndex == null){
			//trace("바인드 된 오브젝트를 찾을 수 없습니다.");
			return;
		}
		
		return findIndex;
	},
	search: function(configs){
		var findIndex = __grid.findIndex(configs.targetID);
		var _self = __grid.instances[findIndex];
		_self.object.setList(configs);
	},
	appendList: function(targetID, item){
		var findIndex = __grid.findIndex(targetID);
		var _self = __grid.instances[findIndex];
		_self.object.pushList(item);
	},
	updateList: function(targetID, index, item){
		var findIndex = __grid.findIndex(targetID);
		var _self = __grid.instances[findIndex];
		_self.object.updateList(index, item);
	},
	checkedList: function(configs){
		var findIndex = __grid.findIndex(configs.targetID);
		var _self = __grid.instances[findIndex];
		return _self.object.getCheckedList(configs.colSeq);
	},
	checkedListIndex: function(configs){
		var findIndex = __grid.findIndex(configs.targetID);
		var _self = __grid.instances[findIndex];
		return _self.object.getCheckedListWithIndex(configs.colSeq);
	},
	checkedColSeq: function(configs){
		var findIndex = __grid.findIndex(configs.targetID);
		var _self = __grid.instances[findIndex];
		return _self.object.checkedColSeq(configs.colSeq, configs.TF);
	},
	removeList: function(targetID, list){
		var findIndex = __grid.findIndex(targetID);
		var _self = __grid.instances[findIndex];
		_self.object.removeList(list); // 전달한 개체와 비교하여 일치하는 대상을 제거 합니다. 이때 고유한 값이 아닌 항목을 전달 할 때에는 에러가 발생 할 수 있습니다.
	},
	setEditor: function(configs){
		var findIndex = __grid.findIndex(configs.targetID);
		var _self = __grid.instances[findIndex];
		_self.object.setEditor(configs.item, configs.index);
	},
	contentScrollResize: function(targetID){
		var findIndex = __grid.findIndex(targetID);
		var _self = __grid.instances[findIndex];
		_self.object.contentScrollResize();
	},
	getList: function(configs){
		var findIndex = __grid.findIndex(configs.targetID);
		var _self = __grid.instances[findIndex];
		return _self.object.list;
	}
};

jQuery.fn.bindGrid = function(config){
	jQuery.each(this, function(){
		if (config == undefined) config = {};
		config.targetID = this.id;
		__grid.bind(config);
		return this;
	});
};
jQuery.fn.searchGrid = function(config){
	jQuery.each(this, function(){
		if (config == undefined) config = {};
		config.targetID = this.id;
		__grid.search(config);
		return this;
	});	
};

jQuery.fn.appendGrid = function(item){
	jQuery.each(this, function(){
		__grid.appendList(this.id, item);
		return this;
	});	
};

var getGridList = function(config){
	return __grid.getList(config);
};

var getCheckedGrid = function(config){
	return __grid.checkedList(config);
};

var getCheckedGridWithIndex = function(config){
	return __grid.checkedListIndex(config);
};

jQuery.fn.setCheckedGrid = function(config){
	jQuery.each(this, function(){
		if (config == undefined) config = {};
		config.targetID = this.id;
		__grid.checkedColSeq(config);
		return this;
	});	
};

jQuery.fn.editGrid = function(config){
	jQuery.each(this, function(){
		if (config == undefined) config = {};
		config.targetID = this.id;
		__grid.setEditor(config);
		return this;
	});	
};

jQuery.fn.updateGrid = function(index, item){
	jQuery.each(this, function(){
		__grid.updateList(this.id, index, item);
		return this;
	});	
};


jQuery.fn.removeGrid = function(list){
	jQuery.each(this, function(){
		__grid.removeList(this.id, list);
		return this;
	});	
};

jQuery.fn.resizeGrid = function(){
	jQuery.each(this, function(){
		__grid.contentScrollResize(this.id);
		return this;
	});	
};
var __grid = {
	instances:	[],
	bind: function(configs){
		if(!configs.targetID){
			trace("bind 대상 ID가 없어 bind 처리할 수 없습니다.");
			return;
		}
		if(!$M(configs.targetID)){
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
		$.each(__grid.instances, function(index, O){
			if(O.config.targetID == targetID){
				findIndex = index;
				return false;
			}
		});
		if(findIndex == null){
			trace("바인드 된 오브젝트를 찾을 수 없습니다.");
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
		_self.object.appendList(item);
	},
	checkedList: function(configs){
		var findIndex = __grid.findIndex(configs.targetID);
		var _self = __grid.instances[findIndex];
		return _self.object.getCheckedList(configs.colSeq);
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
	}
};

jQuery.fn.bindGrid = function(config){
	$.each(this, function(){
		if (config == undefined) config = {};
		config.targetID = this.id;
		__grid.bind(config);
		return this;
	});
};

jQuery.fn.searchGrid = function(config){
	$.each(this, function(){
		if (config == undefined) config = {};
		config.targetID = this.id;
		__grid.search(config);
		return this;
	});	
};

jQuery.fn.appendGrid = function(item){
	$.each(this, function(){
		__grid.appendList(this.id, item);
		return this;
	});	
};

var getCheckedGrid = function(config){
	return __grid.checkedList(config);
};

jQuery.fn.setCheckedGrid = function(config){
	$.each(this, function(){
		if (config == undefined) config = {};
		config.targetID = this.id;
		__grid.checkedColSeq(config);
		return this;
	});	
};

jQuery.fn.editGrid = function(config){
	$.each(this, function(){
		if (config == undefined) config = {};
		config.targetID = this.id;
		__grid.setEditor(config);
		return this;
	});	
};

jQuery.fn.removeGrid = function(list){
	$.each(this, function(){
		__grid.removeList(this.id, list);
		return this;
	});	
};
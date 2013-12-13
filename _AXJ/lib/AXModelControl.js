/*!
 * axisJ Javascript Library Version 1.0
 * http://axisJ.com
 * 
 * 아래 소스의 라이선스는 axisJ.com 에서 확인 하실 수 있습니다.
 * http://axisJ.com/license
 * axisJ를 사용하시려면 라이선스 페이지를 확인 및 숙지 후 사용 하시기 바람니다. 무단 사용시 예상치 못한 피해가 발생 하실 수 있습니다.
 */

var AXModelControl = Class.create(AXJ, {
    version: "AXModelControl V0.1",
    author: "tom@axisj.com",
	logs: [
		"2013-12-03 오후 5:27:18"
	],
    initialize: function(AXJ_super) {
        AXJ_super();
        this.config.theme = "";
        this.config.collectSelector = "";
        this.config.subModelDetectClassName = "AXModelDetect";
        this.config.excludeClassName = "";
        this.returnJSData = {};
    },
    init: function() {
		var cfg = this.config;
		if(Object.isUndefined(cfg.targetID)){
			trace("need targetID - setConfig({targetID:''})");
			return;
		}
		this.target = jQuery("#"+cfg.targetID);
    },
    collectModelItem: function(){
    	var cfg = this.config;
    	var finderCSS = "";
		if(cfg.collectSelector != ""){
			finderCSS = cfg.collectSelector;
		}else{
			finderCSS = "input[type=text], input[type=hidden], input[type=radio], input[type=checkbox], select, textarea";
		}
		var _this = this;
		var getParentSubModel = function(ele){
			var result = false;
			var checkEle = ele;
			var rooping = true;
			while (rooping) {
				if(!checkEle.get(0)){
					rooping = false;
					break;
				}
				if(checkEle.get(0).id == cfg.targetID){
					rooping = false;
					break;
				}else if(checkEle.parent().hasClass(cfg.subModelDetectClassName)){
					result = true;
					rooping = false;
					break;
				}else{
					checkEle = checkEle.parent();
				}
			}
			return {
				result:result,
				parents:ele.parentsUntil("#"+cfg.targetID)
			};
		};

		var collectItem = [];
		
		/*trace(finderCSS);*/		
		this.target.find(finderCSS).each(function(){
			var jQueryObj = $(this);
			var getSubModel = getParentSubModel($(this));
			if(!getSubModel.result){
				var collectOk = false;
				if(cfg.excludeClassName != ""){
					collectOk = !jQueryObj.hasClass(cfg.excludeClassName);
				}else{
					collectOk = true;
				}
				
				if(collectOk){
					jQueryObj.attr("axisjModelId", collectItem.length);
					collectItem.push({
						keys:[this.name],
						jQueryObj:jQueryObj,
						axisjModelId:collectItem.length,
						name:this.name,
						type:this.type
					});
				}
			}else{
				
				jQueryObj.attr("axisjModelId", collectItem.length);
				
				var relationKey = [];
				jQuery.each(getSubModel.parents, function(){
					if(this.id != ""){
						if(this.id.left(cfg.subModelDetectClassName.length) == cfg.subModelDetectClassName){
							var myKey = this.id.substr(this.id.lastIndexOf("_").number()+1);
							relationKey.push(myKey);
						}
					}
				});
				relationKey.push(this.name);

				collectItem.push({
					keys:relationKey,
					jQueryObj:jQueryObj,
					axisjModelId:collectItem.length,
					name:this.name,
					type:this.type
				});
			}
			jQueryObj = null;
		});		
		
		this.collectItem = collectItem;
		
		var returnJSData = {};
		jQuery.each(this.collectItem, function(){
			var keys = this.keys;
			var targetJS = returnJSData;
			
			var key;
			for(var kidx=0;kidx<keys.length-1;kidx++){
				key = keys[kidx];
				if(targetJS[key] == undefined){
					targetJS[key] = {};
				}
				targetJS = targetJS[key];
			}
			key = keys.last();
			
			var nVal = "";
			if(targetJS[key] == undefined){
				if(this.type == "checkbox"){
					var keyLength = 0;
					jQuery.each(collectItem, function(){
						if(this.keys.join(".") == keys.join(".")) keyLength++;
					});
					if(keyLength == 1){
						targetJS[key] = "";
					}else{
						targetJS[key] = [];
					}
				}else{
					targetJS[key] = "";
				}
				this.keySeq = 0;
			}else{
				if(Object.isArray(targetJS[key])){
					if(this.type != "checkbox"){
						targetJS[key].push(nVal);
						this.keySeq = targetJS[key].length-1;
						//this.keys[this.keys.length-1] += "["+ this.keySeq +"]";
					}
				}else{
					var oVal = targetJS[key];
					if(this.type == "radio"){
						
					}else if(this.type == "checkbox"){
						var keyLength = 0;
						jQuery.each(collectItem, function(){
							if(this.keys.join(".") == keys.join(".")) keyLength++;
						});
						if(keyLength == 1){
							targetJS[key] = oVal;
						}else{
							targetJS[key] = [oVal];
							targetJS[key].push(nVal);
							this.keySeq = targetJS[key].length-1;
						}
					}else{
						targetJS[key] = [oVal];
						targetJS[key].push(nVal);
						this.keySeq = targetJS[key].length-1;
						//this.keys[this.keys.length-1] += "["+ this.keySeq +"]";
					}
				}
			}
		});
		this.returnJSData = returnJSData;
    },
    sync: function(){
		var cfg = this.config;
		if(!this.collectItem) this.collectModelItem();
    },
    clearCollect: function(){
    	this.collectItem = undefined;
    },
    getData: function(){
		var cfg = this.config;
		this.sync();
		var getElementValue = function(jQueryObj, type){
			if(type == "radio" || type == "checkbox"){
				if(jQueryObj.get(0).checked){
					return jQueryObj.val();
				}
			}else{
				return jQueryObj.val();
			}
		};
		
		var returnJSData = this.returnJSData;
		
		var collectItem = this.collectItem;
		jQuery.each(this.collectItem, function(){
			var keys = this.keys;
			var targetJS = returnJSData;
			var key;
			for(var kidx=0;kidx<keys.length-1;kidx++){
				key = keys[kidx];
				if(targetJS[key] == undefined){
					targetJS[key] = {};
				}
				targetJS = targetJS[key];
			}
			key = keys.last();
			if(this.type == "checkbox"){
				var keyLength = 0;
				jQuery.each(collectItem, function(){
					if(this.keys.join(".") == keys.join(".")) keyLength++;
				});
				if(keyLength > 1) targetJS[key] = [];
				else targetJS[key] = "";
			}
		});
		
		jQuery.each(this.collectItem, function(){
			var keys = this.keys;
			var targetJS = returnJSData;
			
			var key;
			for(var kidx=0;kidx<keys.length-1;kidx++){
				key = keys[kidx];
				if(targetJS[key] == undefined){
					targetJS[key] = {};
				}
				targetJS = targetJS[key];
			}
			key = keys.last();
			
			var nVal = getElementValue(this.jQueryObj, this.type);
			if(this.type == "checkbox"){
				if(!AXUtil.isEmpty(nVal)){
					var keyLength = 0;
					jQuery.each(collectItem, function(){
						if(this.keys.join(".") == keys.join(".")) keyLength++;
					});
					if(keyLength > 1) targetJS[key].push(nVal);
					else targetJS[key] = nVal;
				}
			}else if(this.type == "radio"){
				if(!AXUtil.isEmpty(nVal)){
					targetJS[key] = nVal;
				}
			}else{
				if(Object.isArray(targetJS[key])){
					targetJS[key][this.keySeq] = nVal;
				}else{
					targetJS[key] = nVal;
				}
			}
		});
		this.returnJSData = returnJSData;
		return Object.clone(this.returnJSData);
    },
    setData: function(jsPathObj, val){
		if(Object.isString(val) || Object.isArray(val) || Object.isNumber(val) ){
			this.applyValue(jsPathObj, val);
		}else{
			var applyValue = this.applyValue.bind(this);
			var fnApplyValue = function(prefixKey, _val, depth){
				if(depth > 5) return; /* 만약의 경우를 대비하여 10 뎁스 이상 연산 처리 하지 않습니다. 무한 루프를 방지 */
				if(prefixKey != "") prefixKey += ".";
				$.each(_val, function(k, v){
					if(Object.isString(v) || Object.isArray(v) || AXUtil.isEmpty(v) || Object.isNumber(v) ){
						applyValue({key:prefixKey + k}, v);
					}else{
						fnApplyValue(prefixKey+k, v, (depth+1));
					}
				});
			};
			fnApplyValue("", val, 0);
		}
		return true;
    },
    applyValue: function(jsPathObj, val){
		var cfg = this.config;
		this.getData();
		var returnJSData = this.returnJSData;
		if(jsPathObj.key){
			try{
				eval("returnJSData = returnJSData." + jsPathObj.key);
			}catch(e){
				trace(e);
			}
		}
		
		if(returnJSData != undefined){
			if(Object.isString(val) || Object.isNumber(val)){
				
				var findedItem = false;
				jQuery.each(this.collectItem, function(){
					if(this.keys.join(".") == jsPathObj.key){
						if(jsPathObj.keySeq != undefined){
							if(jsPathObj.keySeq == this.keySeq){
								this.jQueryObj.val(val);
								findedItem = true;
								return false;
							}
						}else{
							if(this.type == "radio" || this.type == "checkbox"){
								if(this.jQueryObj.get(0).value == val){
									this.jQueryObj.get(0).checked = true;
									findedItem = true;
								}else{
									this.jQueryObj.get(0).checked = false;
									findedItem = true;
								}
							}else{
								this.jQueryObj.val(val);
								findedItem = true;
								return false;	
							}
						}
					}
				});

				if(!findedItem){
					return {error:"not found keySeq"};
				}

			}else if(Object.isArray(val)){
				
				var findedItem = false;
				jQuery.each(this.collectItem, function(){
					if(this.keys.join(".") == jsPathObj.key){
						if(jsPathObj.keySeq != undefined){
							if(jsPathObj.keySeq == this.keySeq){
								this.jQueryObj.val(val.join(","));
								findedItem = true;
								return false;
							}else{
								
							}
						}else{
							if(this.type == "checkbox" || this.type == "radio"){
								var jQueryObj = this.jQueryObj;
								if(val.length == 0){
									jQueryObj.get(0).checked = false;
								}else{
									jQueryObj.get(0).checked = false;
									$.each(val, function(){
										if(jQueryObj.get(0).value == this){
											jQueryObj.get(0).checked = true;
										}
									});
								}
								findedItem = true;
							}else{

								if(val[this.keySeq] != undefined){
									this.jQueryObj.val(val[this.keySeq]);
									findedItem = true;
								}
								//return false;
							}
						}
					}
				});

				if(!findedItem){
					return {error:"not found keySeq"};
				}
				
			}
		}
		
		return true;
    }
});
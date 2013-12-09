
{
	id:"/API/Classes/AXGrid",
	head:{
		type:"Class", 
		name:"AXGrid",
		flnm:"Classes.AXGrid",
		file:"_AXJ/lib/AXGrid.js",
		tags:"Class,AXGrid"
	},
	h1:"AXGrid",
	items: [
		{
			name:		"initialize", 
			type:		"method", 
			desc:		"Initializes Class. Can be controlled by assigning the initialized object to a variable. ",
			define:		"new AXGrid();",
			arguments:	[],
			returnss:		{k:"", v:""},
			samplecode:	["var myGrid = new AXGrid();"],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"setConfig",
			type:		"method", 
			desc:		"Defines properties to use the initialized Class.",
			define:		"_AXSearch.AXGrid(configs);",
			arguments:	[
				{k:"configs", v:{
					targetID:"(String/required) HTML element target ID",
					theme : "(String) CSS Class name",
					fixedColSeq : "(Number) Fixed column seq",
					fitToWidth : "(true|false) Fit 'col' width automatically to full screen in the ratio of colGroup width.",
					height : "(Number|\"auto\") Grid height",
					colHeadAlign : "(\"left\"|\"center\"|\"right\")head Align",
					xscroll : "(true|false) Availability of grid horizontal scroll",
					passiveMode : "(true|false) Item Add/Edit/Delete manual setting mode. Add(C) Edit(U) Delete(D) can be processed at any point users want not by saving it on server. Newly added item will hace '_CUD' properties of 'Add C, Edit U, Delete D'.",
					passiveRemoveHide : "(true|false) Item delete option in manual mode. Display deleted items when requested to delete in list or not. The items not displaying in list will be deleted and can be accessible by '.removedList' property.",
					viewMode : "(\"grid\"|\"icon\") If not defiend, grid mode by default. If 'body.view.icon' property is defiend, \"icon\" can be available.",
					colGroup: {
						key:"(String/required) Item key to match column",
						label:"(String/required) Label to display on column",
						width:"(String|\"*\") If column width is set to \"*\", it will fill in the rest of blank space of screen.",
						align:"(\"left\"|\"center\"|\"right\") Column label align mode",
						formatter:"(\"money\"|\"dec\"|\"checkbox\"|\"radioBox\"|Function) Display format of column values. Each option is of monetary unit, urlDecode, input.Checkbox, input.radioBox and user-defined function",
						display:"(true|false) Display column or not"
					},
					colHead: {
						rows: {
							colspan:"(Number) Works like the mechanism of 'colspan' property in 'table tr td'.",
							rowspan:"(Number) Works like the mechanism of 'rowspan' property in 'table tr td'.",
							colSeq:"(Number) Can be used when index keys for the column are not defined in colGroup. Performs better than defining key",
							key:"(String/required) Key of target column in colGroup",
							label:"(String/required) If a label to display on head is not defined, it will be inherited the values assigned in colGroup.",
							align:"(\"left\"|\"center\"|\"right\") If the head align mode is not defined, will be inherited the values assigned in colGroup.",
							formatter:"(\"money\"|\"dec\"|\"checkbox\"|\"radioBox\"|Function) Display format of head values. uEach option is of monetary unit, urlDecode, input.Checkbox, input.radioBox and user-defined function. If not defined, will be inherited the values assigned in colGroup."	
						},
						onclick: "(Function) Callback function of head click event"
					},
					body: {
						rows: {
							colspan:"(Number) Works like the mechanism of 'colspan' property in 'table tr td'.",
							rowspan:"(Number) Works like the mechanism of 'rowspan' property in 'table tr td'.",
							colSeq:"(Number) Can be used when index keys for the column are not defined in colGroup. Performs better than defining key",
							key:"(String/required) Key of target column in colGroup",
							label:"(String/required) If a label to display on head is not defined, it will be inherited the values assigned in colGroup.",
							align:"(\"left\"|\"center\"|\"right\") If the head align mode is not defined, will be inherited the values assigned in colGroup.",
							formatter:"(\"money\"|\"dec\"|\"checkbox\"|\"radioBox\"|Function) Display format of body values. uEach option is of monetary unit, urlDecode, input.Checkbox, input.radioBox and user-defined function. If not defined, will be inherited the values assigned in 'colGroup'."
						},
						marker: {
							display: "(Function) Display marker row or not. this.item, this.index values will be passed to user-defined functions. User-defined functions can be formed by using passed variables.",
							rows: "(Array) Identical to 'body rows'"
						},
						view_icon : {
							width:"Width",
							height:"Height",
							img: "Defines image properties {left:'10', top:'10', width:'179', height:'180',style:'border:1px solid #ccc;'}",
							label: "Defines label properties {left:'10', top:'200', width:'180', height:'20'}",
							description: "Defines description properties {left:'10', top:'225', width:'180', height:'65', style:'color:#888;'}",
							buttons: "Defines button properties",
							format: "View formatter {imgsrc:'String', label:'String', description:'String'} "
						},
						onclick: "(Function) Callback function of body click event",
						ondblclick: "(Function) Callback function of body double click event",
						oncheck: "(Function) Callback function of checkbox item click",
						addClass: "(Function) user-defined function which can user's CSS classes to grid items. Please returns class names to add using 'returns'."
					},
					head: {
						description:"Not identical to colHead property. Locates inside scroll area and can be taken as data head.",
						rows: {
							colspan:"(Number) Works like the mechanism of 'colspan' property in 'table tr td'.",
							rowspan:"(Number) Works like the mechanism of 'rowspan' property in 'table tr td'.",
							colSeq:"(Number) Can be used when index keys for the column are not defined in colGroup. Performs better than defining key",
							key:"(String/required) Key of target column in colGroup",
							label:"(String/required) If a label to display on head is not defined, it will be inherited the values assigned in colGroup.",
							align:"(\"left\"|\"center\"|\"right\") If the head align mode is not defined, will be inherited the values assigned in colGroup.",
							formatter:"(\"money\"|\"dec\"|\"checkbox\"|\"radioBox\"|Function) Display format of body values. uEach option is of monetary unit, urlDecode, input.Checkbox, input.radioBox and user-defined function. If not defined, will be inherited the values assigned in 'colGroup'."
						}	
					},
					foot: "Identical to head object.",
					page: {
						display:"(true|false) Display grid bottom bar or not",
						paging:"(true|false) Display paging object or not"
					},
					contextMenu: "<a href='#{id:\"/API/Objects/AXContextMenu\"}'>AXContextMenu</a> Reference"
				}}
			],
			returnss:		{k:"", v:""},
			samplecode:	[
				''
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"setList", 
			type:		"method", 
			desc:		"Sends data to grid. In an asynchronous method, data will not be delivered directly but will be processed by defining the deliverer information of data.",
			define:		"myGrid.setList(Array | AJAXconfigs);",
			arguments:	[
				{k:"Array", v:"list Array"},
				{k:"AJAXconfigs", v:{
					ajaxUrl:"AJAX call URL",
					ajaxPars:"AJAX call URL parameter (sent in the form of 'post'.)",
					onLoad:"Function AJAX call completion event Callback"
				}}
			],
			returnss:		{k:"", v:""},
			samplecode:	[],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"setDataSet", 
			type:		"method", 
			desc:		"Method to display values in head and foot when the properties of head and foot are defiend. Considering the case of paging, the values passed through setList cannot be seen identical to the data to display on head and foot. Data to display on head abd body can be defiend by using setDataSet method.",
			define:		"_AXGrid.setDataSet(JSObject);",
			arguments:	[
				{k:"JSObject", v:"When passing an empty object {} to item JSObject, it can be entered by using the function connected with formatter."}
			],
			returnss:		{k:"", v:""},
			samplecode:	[
				'myGrid.setDataSet({price:123000, amount:10});'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"reloadList", 
			type:		"method", 
			desc:		"Refreshes grid. Caution, only works when data is called in AJAX and initializes scroll values to 0.",
			define:		"_AXGrid.reloadList();",
			arguments:	[],
			returnss:		{k:"", v:""},
			samplecode:	[
				'myGrid.reloadList();'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"setEditor", 
			type:		"method", 
			desc:		"Activates Editor and makes it editable in a specific data location. (Does not work if Editor properties do not exist in setConfig phrase.)",
			define:		"_AXGrid.setEditor(item, itemIndex[, insertIndex]);",
			arguments:	[
				{k:"item", v:"Array item"},
				{k:"itemIndex", v:"index of Array"},
				{k:"insertIndex", v:"Index of Array where Editor will be inserted"}
			],
			returnss:		{k:"", v:""},
			samplecode:	[
				'myGrid.setEditor({}, 1);',
				'myGrid.setEditor(null, null, 1);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"setEditorForm", 
			type:		"method", 
			desc:		"Availble when passing values to a specific form in Editor when the Editor is activated.",
			define:		"_AXGrid.setEditorForm(JSobject);",
			arguments:	[
				{k:"JSObject", v:{
					key:"Column key",
					position:"Position of subject to be applied editor rows in Array (Not applicable if different.)",
					value:"String"
				}}
			],
			returnss:		{k:"", v:""},
			samplecode:	[
				'myGrid.setEditorForm({',
				'	key:"writer",',
				'	position:[0,3],',
				'	value:"String"',
				'});'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"appendList", 
			type:		"method", 
			desc:		"Activates Editor in insertion mode to insert new data to grid.",
			define:		"_AXGrid.appendList(item[, insertIndex]);",
			arguments:	[
				{k:"item", v:"Array item"},
				{k:"insertIndex", v:"Index of Array to insert"}
			],
			returnss:		{k:"", v:""},
			samplecode:	[
				'var item = {};',
				'myGrid.appendList(item);',
				'myGrid.appendList(item, 3); //데이터를 삽입하고자 하는 index값을 지정합니다.'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"removeList", 
			type:		"method", 
			desc:		"Removes a list by sending Array object which can be comparable with the list to remove. The items corresponding to the key values of Array object compared will be removed.",
			define:		"_AXGrid.removeList(Array);",
			arguments:	[
				{k:"Array", v:""}
			],
			returnss:		{k:"", v:""},
			samplecode:	[
				'var checkedList = myGrid.getCheckedList(0);// colSeq',
				'if(checkedList.length == 0){',
				'	alert("선택된 목록이 없습니다. 삭제하시려는 목록을 체크하세요");	',
				'	returns;',
				'}',
				'if(!confirm("정말 삭제 하시겠습니까?")) returns;',
				'var removeList = [];',
				'$.each(checkedList, function(){',
				'	removeList.push({no:this.no});',
				'});',
				'myGrid.removeList(removeList); // 전달한 개체와 비교하여 일치하는 대상을 제거 합니다. 이때 고유한 값이 아닌 항목을 전달 할 때에는 에러가 발생 할 수 있습니다.	'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"pushList", 
			type:		"method", 
			desc:		"Add data to the grid.",
			define:		"_AXGrid.pushList(item[, insertIndex]);",
			arguments:	[
				{k:"item", v:"Array item"},
				{k:"updateIndex", v:"index of Array"}
			],
			returnss:		{k:"", v:""},
			samplecode:	[
				'var item = {};',
				'myGrid.pushList(item, 3); //데이터를 삽입하고자 하는 index값을 지정합니다.'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"updateList", 
			type:		"method", 
			desc:		"Modify the data in the grid.",
			define:		"_AXGrid.updateList(item[, updateIndex]);",
			arguments:	[
				{k:"item", v:"Array item"},
				{k:"updateIndex", v:"index of Array"}
			],
			returnss:		{k:"", v:""},
			samplecode:	[
				'var item = {};',
				'myGrid.updateList(item, 3);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"getCheckedList", 
			type:		"method", 
			desc:		"returnss items checked in the col which is of the index of colGroup.",
			define:		"_AXGrid.getCheckedList(Number);",
			arguments:	[
				{k:"Number", v:"colGroup index"}
			],
			returns:		{k:"Array", v:"Array of checked items"},
			samplecode:	[
				'var myArray = myGrid.getCheckedList(0);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"checkedColSeq", 
			type:		"method", 
			desc:		"Modifies checked property in the col which is of the Index of colGroup.",
			define:		"_AXGrid.checkedColSeq(Number, Boolean);",
			arguments:	[
				{k:"Number", v:"colGroup index"},
				{k:"Boolean", v:"checked property"}
			],
			returnss:		{k:"", v:""},
			samplecode:	[
				'myGrid.checkedColSeq(0, true);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"getSelectedItem", 
			type:		"method", 
			desc:		"returnss the first selected item.",
			define:		"_AXGrid.getSelectedItem();",
			arguments:	[
			],
			returnss:		{k:"JSobjct", v:{
				index:"(Number) index of Array the first of the selected items",
				item:"(JSObject) the first of the selected items",
				error:"returnss error with no items selected."
			}},
			samplecode:	[
				'var myResult = myGrid.getSelectedItem();'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"getCheckedListWithIndex", 
			type:		"method", 
			desc:		"returnss checked items in the col which is of the Index of colGroup, along with index.",
			define:		"_AXGrid.getCheckedListWithIndex(Number);",
			arguments:	[
				{k:"Number", v:"colGroup index"}
			],
			returnss:		{k:"Array", v:"[{index:Number, item:JSObject}]"},
			samplecode:	[
				'var myArray = myGrid.getCheckedListWithIndex(0);',
				'// [{index:Number, item:JSObject},{index:Number, item:JSObject},.....]'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"removeListIndex", 
			type:		"method", 
			desc:		"Removes the item of the item index by using Index Array.",
			define:		"_AXGrid.removeListIndex(Array);",
			arguments:	[
				{k:"Array", v:"index or Array"}
			],
			returnss:		{k:"", v:""},
			samplecode:	[
				'myGrid.removeListIndex([0,1,2]);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"setFocus", 
			type:		"method", 
			desc:		"Moves focus of grid body to index position.",
			define:		"_AXGrid.setFocus(itemIndex);",
			arguments:	[
				{k:"itemIndex", v:"index or Array"}
			],
			returnss:		{k:"", v:""},
			samplecode:	[
				'myGrid.setFocus(12);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"focusMove", 
			type:		"method", 
			desc:		"Moves the value of focus index as much as direction.",
			define:		"_AXGrid.focusMove(Number);",
			arguments:	[
				{k:"Number", v:"direction"}
			],
			returnss:		{k:"", v:""},
			samplecode:	[
				'myGrid.focusMove(1);',
				'myGrid.focusMove(-1);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"click", 
			type:		"method", 
			desc:		"Triggers click event of grid item which is of corresponding index.",
			define:		"_AXGrid.click(Number);",
			arguments:	[
				{k:"Number", v:"itemIndex"}
			],
			returnss:		{k:"", v:""},
			samplecode:	[
				'myGrid.click(1);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"getSortParam", 
			type:		"method", 
			desc:		"returnss property of grid align in parameter format.",
			define:		"_AXGrid.getSortParam(\"one\"|undefined);",
			arguments:	[
				{k:"\"one\"", v:"returnss with \"sortBy=sortObj.key sortObj.sort\"."},
				{k:"undefined", v:"returnss in parameter type."}
			],
			returnss:		{k:"String", v:"Align property parameter"},
			samplecode:	[
				'var myParam = myGrid.getSortParam();'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"getExcelFormat", 
			type:		"method", 
			desc:		"returnss phrase which is of excel format.",
			define:		"_AXGrid.getExcelFormat(\"html\"|\"json\");",
			arguments:	[
				{k:"\"html\"", v:"returnss html tag source."},
				{k:"\"json\"", v:"returnss JSObject."}
			],
			returnss:		{k:"String|JSObject", v:""},
			samplecode:	[
				'var txt = myGrid.getExcelFormat(\"html\");',
				'var json = myGrid.getExcelFormat(\"json\");'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"list", 
			type:		"Object [Array]", 
			desc:		"Grid data Array of Grid",
			define:		"_AXGrid.click(Number);",
			samplecode:	[
				'var myGrid = new AXGrid();',
				'myGrid.setConfig({.....});',
				'trace(myGrid.list);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"page", 
			type:		"Object [JSObject]", 
			desc:		"Paging data JSObject of Grid",
			define:		"_AXGrid.click(Number);",
			samplecode:	[
				'var myGrid = new AXGrid();',
				'myGrid.setConfig({.....});',
				'trace(myGrid.page);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		}
	]
}
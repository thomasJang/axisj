
{
	id:"/API/Classes/AXCalendar",
	head:{
		type:"Class",
		name:"AXCalendar",
		flnm:"Classes.AXCalendar",
		file:"_AXJ/lib/AXJ.js",
		tags:"Class,AXCalendar"
	},
	h1:"AXCalendar",
	items: [
		{
			name:		"initialize", 
			type:		"method", 
			desc:		"Initializes Resize Class. Can be controlled by assigning the initialized object to a variable. ",
			define:		"new AXCalendar();",
			arguments: [],
			returnss: {k:"", v:""},
			samplecode:[
				'var mycalendar = new AXCalendar();'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"setConfig", 
			type:		"method", 
			desc:		"Defines properties to use the initialized Resize Class. ",
			define:		"_AXCalendar.setConfig(configs);",
			arguments:	[
				{k:"configs", v:{
					targetID:"Container element ID wrapping the subject to be scrolled. ",
					basicDate:"Default date of calendar"
				}}
			],
			returnss:		{k:"", v:""},
			samplecode:	[
				"mycalendar.setConfig({",
				"	targetID:\"UIScrollContainer\",",
				"	basicDate:new Date()",
				"});"
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"printDayPage", 
			type:		"method", 
			desc:		"Prints out a date-selectable calendar in targetID. ",
			define:		"_AXCalendar.printDayPage([String]);",
			arguments:	[{k:"String", v:"String in date format like 2013-11-21. Default is current time. "}],
			returnss:		{k:"", v:""},
			samplecode:	[
				'mycalendar.printDayPage("2013-11-21");'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"printMonthPage", 
			type:		"method", 
			desc:		"Prints out a month-selectable calendar in targetID. ",
			define:		"_AXCalendar.printMonthPage(String)",
			arguments:	[{k:"String", v:"String in date format like 2013-11-21. Default is current time. "}],
			returnss:		{k:"", v:""},
			samplecode:	["mycalendar.printMonthPage(\"2013-11-21\");"],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"printYearPage", 
			type:		"method", 
			desc:		"Prints out a year-selectable calendar in targetID. ",
			define:		"_AXCalendar.printYearPage(Number|String)",
			arguments:	[{k:"Number|String", v:"String like 2013 or numbers "}],
			returnss:		{k:"", v:""},
			samplecode:	["mycalendar.printYearPage(2013);"],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"printTimePage", 
			type:		"method", 
			desc:		"Prints out a time-selectable calendar in targetID. ",
			define:		"_AXCalendar.printTimePage(String)",
			arguments:	[
				{k:"String", v:"String in the form of 'hh:mm AM|PM' "}
			],
			returnss:		{k:"", v:""},
			samplecode:	["mycalendar.printTimePage(\"06:36 AM\");"],
			example:[],
			exampleFn:[],
			reference:	[]
		}
	]
}

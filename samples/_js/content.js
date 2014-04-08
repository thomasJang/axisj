var fcObj = {
	pageStart: function(){
		//fcObj.topMenuInit();
		
		fcObj.googleTrack();
		
	},
	topMenuInit: function(){
		var po = [];
		po.push("<div class=\"topMenu\">topMenu</div>");	
		$(document.body).append(po.join(''));
	},
	googleTrack: function(){
		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-38119279-1']);
		_gaq.push(['_setDomainName', 'axisj.com']);
		_gaq.push(['_trackPageview']);
		
		(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();
	}
};

$(document.body).ready(function(){
	fcObj.pageStart()
});
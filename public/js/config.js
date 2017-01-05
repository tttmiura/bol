/*
 * config.js
 */
var VIDEO = {
	idList : [
	          '48dJo93Crzo',
	          'WgKbfxwVuXE',
	          'Z9kh6NiKGBk',
	          'uTWPxRFLEnE',
	          'FdZ4PMr3NeI',
	          '52FaDwhcYbU',
	          '2dKItG7f6k8',
	          'x89tEP8917Y',
	          'pwFmvWxtHp8',
	          'xNybMwJ_MFI',
	          'XWMvtRmRowI',
	          '9hcVu7lhm3w',
	          'obZdbV75yEE',
	          'b1RNcorUgNU',
	          'pfxtT0qoYaU',
	          'JahfhQjIG7Q',
	          '3pqAMkt8Oek',
	          'F97MWZYS7y4'],
	videos : [
		{
			id : 'kXvz6EQInc8',
			title : 'HANA氏 その１'
		},{
			id : 'On6ivOoRCN0',
			title : 'HANA氏 その２'
		},{
			id : 'iHIblDnJDUY',
			title : 'HANA氏 その３'
		},{
			id : 'GhAyfmGlPcI',
			title : 'ちょるる その１'
		},{
			id : '6P4gSQWHfhI',
			title : 'ほーりー その１'
		},{
			id : 'oeZMmVCGBPU',
			title : 'ほーりー その２'
		},{
			id : 'g_rCjCbI9PM',
			title : 'ちょるる その２'
		},{
			id : 'zR4TOBOVmxA',
			title : 'ちょるる その３'
		}
		],
	videoInfo : function(key, callback) {
		var param = {
			mine : true,
			key : key,
			part : 'snippet'
		};

		var reqParam = {
				path : 'https://www.googleapis.com/youtube/v3/channels',
				params : param
		};
		gapi.client.request(reqParam).execute(function(resp) {
			console.log(resp);
		});
	},
	initClient : function(apiKey, clientId) {
		gapi.client.init({
			apiKey: apiKey,
			clientId: clientId,
			scope: 'profile'
		}).then(function() {
			console.log('client init');
			VIDEO.videoInfo(apiKey);
		});
	}
};

if (1 < location.search.length) {
	var query = document.location.search.substring(1);
	var parameters = query.split('&');

	VIDEO.parameters = {};

	for (var i = 0; i < parameters.length; i++) {
		var element = parameters[i].split('=');
		var paramName = decodeURIComponent(element[0]);
		var paramValue = decodeURIComponent(element[1]);
		VIDEO.parameters[paramName]=paramValue;
	}
}

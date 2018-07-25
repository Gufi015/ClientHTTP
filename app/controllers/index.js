
var url = "https://api.cloud.appcelerator.com/v1/users/query.json?key=39CfszDc4IxFppvqRyykQDgVPyuPhed2&pretty_json=true&count=true";

$.btnJson.addEventListener('click', function (e) {
	var client = Ti.Network.createHTTPClient({
		onload: function (e) {
			/*Ti.API.info('HTTP Responts' + this.responseText);
			alert(this.responseText);
			console.log('Aqui se muestra succes'); */
			Ti.API.info(this.responseText);
			alert(this.responseText);
		},
		error: function (e) {
			Ti.API.debug(e.error);
			alert('Error');
		},
		timeout: 3000

	});
	client.open('GET', url);
	client.send();
});



$.index.open();

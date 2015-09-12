var http = require("http");


function start(route,handle){
	function onRequest(request,response){
		request.setEncoding("utf8");
		route(request,response,handle);
	}

http.createServer(onRequest).listen(8888);
console.log("server has started.");
}

exports.start =start;



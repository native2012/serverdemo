
var url = require("url");

function route (request,response,handle) {
	
	var pathname = url.parse(request.url).pathname;
	console.log("About to route a request  for " + pathname);
	if (typeof handle[pathname] == 'function') {
		handle[pathname](request,response,pathname);
	}else{
		console.log("No request handler found  for "+ pathname);
		console.log("request.method:  " +request.method.toLowerCase());
		response.writeHead(200,{"Context-Type":"text/plain"});
		if (request.method.toLowerCase() == 'get') {
			response.write(pathname);
			response.end();
		}else if(request.method.toLowerCase() == 'post'){
			var postData ="";
			request.addListener("data",function(postDataChunk){
				postData += postDataChunk;
				console.log("Received POST data chunk '"+
				postDataChunk + "'." );
			});
			request.addListener("end",function(){
				response.write(postData);
				response.end();
			});
		}	
		
	}
}

exports.route = route;

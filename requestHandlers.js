

// 处理具体的某个请求
function start (request,response,pathname) {
	// 因为测试，所以判断是 get 还是post 然后 返回
	console.log("No request handler found  for "+ pathname);
	console.log("request.method:  " +request.method.toLowerCase());
	response.writeHead(200,{"Context-Type":"text/plain"});
	if (request.method.toLowerCase() =='get') {
		response.write(pathname);
		response.end();
	}else if(request.method.toLowerCase() =='post'){
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


exports.start = start;


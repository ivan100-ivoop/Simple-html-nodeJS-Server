let http = require('http');
let utils = require('./MyApp').utils;

let root_dir = "public_html";
let PORT = 8000;
if(process.argv[2] != null) PORT = process.argv[2];

let handleRequest = (request, response) => {
    let filename = utils.is_Index(request);
    if(!utils.isFile(root_dir + filename)){
    		utils.Directory_response(request, response, root_dir);
    	}else{
    		utils.File_Response(request, response, root_dir);
    	}
};

http.createServer(handleRequest).listen(PORT, ()=>{
    utils.init(root_dir);
    console.log("Server listening on port: " + PORT);
});
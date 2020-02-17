const httpProxy = require('http-proxy');
httpProxy.createProxyServer({
    target:'http://getpost.itgid.info',
    changeOrigin: true
}).listen(9999);


const http = require("http");
const fs = require("fs");

http.createServer(function(request, response){

    console.log(`Запрошенный адрес: ${request.url}`);

    const filePath = request.url.substr(1);
    console.log(filePath);
    fs.access(filePath, fs.constants.R_OK, err => {
        if(err){
            response.statusCode = 404;
            response.end("Resourse not found!");
        }
        else{
            fs.createReadStream(filePath).pipe(response);
        }
    });
}).listen(3000, function(){
    console.log("Server started at 3000");
});
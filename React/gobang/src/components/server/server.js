let http = require('http');
let url = require('url');



http.createServer((request,response)=>{
    let params = url.parse(request.url, true).query;
    response.writeHead(200, {'Content-Type': 'text/plain'});
    if(params.includes('/favicon/ico')){
        response.end();
    }else{
        if(params.includes('/users')){
            response.write('aaaaa');
            response.end();
        }
    }
    
}).listen(3000);
console.log('server running');
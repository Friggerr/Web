var http = require('http');
var soap = require('soap');
var xpath = require('xpath')
  , dom = require('xmldom').DOMParser;

var helloService = {
    Hello_Service: {
        Hello_Port: {
            sayHello: function(args) {
                  var xml = require('fs').readFileSync('movieG5.xml', 'utf8')
                  var doc = new dom().parseFromString(xml)
                  var nodes = xpath.select("/movielist/movie/name/text()", doc).toString()
                  console.log(nodes)
                  return {
                      title:nodes
                  };
              
            }
        }
    }
}
var xml = require('fs').readFileSync('HelloService.wsdl', 'utf8'),
      server = http.createServer(function (request, response) {
          response.end("404: Not Found: " + request.url)
      });

server.listen( process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("server listening at", addr.address + ":" + addr.port);
  });

soap.listen(server, '/wsdl', helloService, xml);

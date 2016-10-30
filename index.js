var http = require('http');
var soap = require('soap');
var xpath = require('xpath')
  , dom = require('xmldom').DOMParser;

var helloService = {
    Hello_Service: {
        Hello_Port: {
            sayHello: function (args) {
                var xml2 = '\movieG5.xml';
                /*var doc = new dom().parseFromString(xml2);
                console.log(doc);
                var query = xpath.select("//director.text()", doc).toString()*/
                return {
                  name:"args.name"
                };
               /* var val;
                if (args.licenseKey = '0') {
                    val = "hello";
                } else {
                    val = "good bye";
                }
                return {
                    returnNaJa: val
                };*/
            }
        }
    }
}
var xml = require('fs').readFileSync('HelloService.wsdl', 'utf8'),
      server = http.createServer(function (request, response) {
          response.end("404: Not Found: " + request.url)
      });

      server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
        var addr = server.address();
        console.log("Chat server listening at", addr.address + ":" + addr.port);
      });
      soap.listen(server, '/wsdl', helloService, xml);

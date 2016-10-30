var soap = require('soap');
  var url = 'http://127.0.0.1:8000/wsdl?wsdl';
  var args = {name: "12"};
  soap.createClient(url, function(err, client) {
      client.sayHello(args, function(err, result) {
          console.log(result);
      });
      /*client.find(args, function(err, result) {
          console.log(result);
      });*/
  });

var soap = require('soap');
  var url = 'https://st-soap.herokuapp.com/wsdl?wsdl';
  var args = {name: "12"};
  soap.createClient(url, function(err, client) {
      client.sayHello(args, function(err, result) {
          console.log(result);
      });
      /*client.find(args, function(err, result) {
          console.log(result);
      });*/
  });

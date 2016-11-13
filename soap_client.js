var soap = require('soap');
  var url = 'https://st-soap.herokuapp.com/wsdl?wsdl';
  var args = {
              function:"edit",
              path: "/movielist",
              value : "Exam",
              Movie: "Eaxammm",
              Director: "Director",
              Year : "1222",
              genre : "dama",
              name : "harry"
            };
  soap.createClient(url, function(err, client) {
      client.sayHello(args, function(err, result) {
          console.log(result);
      });
      /*client.find(args, function(err, result) {
          console.log(result);
      });*/
  });

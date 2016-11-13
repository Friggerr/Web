var http = require('http');
var soap = require('soap');
var xpath = require('xpath')
  , dom = require('xmldom').DOMParser;

var helloService = {
    Hello_Service: {
        Hello_Port: {
            sayHello: function(args) {
              var xml = require('fs').readFileSync('movieG5.xml', 'utf8')
              xml = xml.replace(/(\r\n|\n|\r|\t)/gm, "");
              var doc = new dom().parseFromString(xml)
              var nodes = xpath.select("/movielist", doc);                  //console.log(xmlDoc[0].localName)
              var newMovie = doc.createElement("movie")

              name = doc.createElement("name");
              txtName = doc.createTextNode(args.Movie)
              name.appendChild(txtName);

              director = doc.createElement("director");
              txtDir = doc.createTextNode(args.Director)
              director.appendChild(txtDir );

              year = doc.createElement("year");
              txtYear =doc.createTextNode(args.Year)
              year.appendChild(txtYear );
 
              genres = doc.createElement("genres");
              genre = doc.createElement("genre");
              txtGenre=doc.createTextNode(args.genre[1])
              genre.appendChild(txtGenre);
              genres.appendChild(genre);

              stars = doc.createElement("stars");
              stName = doc.createElement("name");
              txtStr=doc.createTextNode(args.name)
              stName.appendChild(txtStr);
              stars.appendChild(stName);

              newMovie = doc.createElement("movie");
              newMovie.appendChild(name);
              newMovie.appendChild(director);
              newMovie.appendChild(year);
              newMovie.appendChild(genres);
              newMovie.appendChild(stars);
              doc.getElementsByTagName("movielist")[0].appendChild(newMovie);
              var result = nodes.toString();
              return {xml:result};

              
            },
            sayHello2: function(args) {
                  var xml = require('fs').readFileSync('movieG5.xml', 'utf8')
                  xml = xml.replace(/(\r\n|\n|\r|\t)/gm, "");
                  var doc = new dom().parseFromString(xml)
                  var nodes = xpath.select("/movielist", doc);
                  console.log(nodes[0].getElementsByTagName("movie").length);
                  for (var i = 0; i < nodes[0].getElementsByTagName("movie").length; i++) {
                      nodes[0].getElementsByTagName("movie")[i].getElementsByTagName("name")[0].childNodes[0].data = "TESTCHANGEMOVIENAME1";
                  }
                  console.log(nodes[0].getElementsByTagName("movie")[0].getElementsByTagName("name")[0].toString());
                  return { xml: nodes.toString() };
                }
        }
    }
}
var xml = require('fs').readFileSync('HelloService.wsdl', 'utf8'),
      server = http.createServer(function (request, response) {
          response.end("404: Not Found: " + request.url)
      });

server.listen( 8000,"127.0.0.1", function(){
  var addr = server.address();
  console.log("server listening at", addr.address + ":" + addr.port);
  });

soap.listen(server, '/wsdl', helloService, xml);

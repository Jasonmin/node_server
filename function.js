
function say(word) {
    console.log(word);
}

function excute(someFunction, value) {
    someFunction(value);
}

excute(say,'hello world');


excute(function(word) {
    console.log(word);
},'hello zhouqiang')

console.log("==============================================================================")
var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World hahahahah");
  response.end();
}

http.createServer(onRequest).listen(8888);
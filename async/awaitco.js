const co = require('co');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require("fs"));

async function main(){
   const contents = co(function* () {
      var result = yield fs.readFileAsync("emitter.js", "utf8")
      return result;
   })

	console.log(contents);
}

main();
/*
 * Simple integration test with Travis-CI
 */
var http = require('http')
var url  = require('url')

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"})
  var url_parts = url.parse(request.url, true)
  var received_params = url_parts.query
  console.log(received_params)

  var result = "SUM Server: pass parameters a and b and get the sum of them!"
  if (received_params["a"] !== undefined && received_params["b"] !== undefined) {
	var ad = sum(parseInt(received_params["a"]), parseInt(received_params["b"]))
	var result = "SUM="+ad	
  }

  response.end(result)
})

var port = 8888
server.listen(port)

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:"+port)

function sum(a, b) {
	return a + b
}

module.exports = { sum:sum }
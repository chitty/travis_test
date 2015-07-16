var assert = require("assert")
var fs = require("fs")
var baseDir = "./"
function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1
}
if(!endsWith(fs.realpathSync("./"), "/test/"))
{
	baseDir = "./test/"
}
//------------------------------------------------------------

var sum_server = require("../test_server.js")

describe("SumServer",function(){
	describe("#sum", function(){
		it("Should return the sum of the two passed integers", function(){

			var a = 10
			var b = 5
			var result = sum_server.sum(a,b)
			assert.equal(a+b, result)
		})
	})
})
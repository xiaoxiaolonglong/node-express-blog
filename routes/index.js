var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var html = fs.readFileSync('./views/index.html')
 
    res.write(html);
 
    //结束写的操作
    res.end();
});

module.exports = router;

var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.writeHead(200,{'Content-Type':'text/html'})
    // 设置静态html页面
    fs.readFile('./views/index.html','utf-8',function(err,data){
        if(err){
        throw err ;
        }
        res.end(data);
    });
});

module.exports = router;

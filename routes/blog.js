var express = require('express');
var router = express.Router();
const {getList,getDetail,addBlog,updateBlog,deleteBlog} = require('../controller/blog')
const {SuccessModel,ErrorModel} = require('../model/resModel')

/* GET home page. */
router.get('/list', function(req, res, next) {
    const author = req.query.author || ''
    const keyword = req.query.kryword || ''
    const reslut = getList(author,keyword)
    return reslut.then(listData => {
        res.json(
          new SuccessModel(listData,'成功获取博客列表')
          )
    })
});

module.exports = router;

var express = require('express');
var router = express.Router();
const {login} = require('../controller/user')
const {SuccessModel,ErrorModel} = require('../model/resModel')

/* GET home page. */
router.post('/login', function(req, res, next) {
  const {username,password} = req.body
  const result = login(username,password)
  return result.then(data => {
    if(data.username){
      // 设置session
      req.session.username = data.username
      req.session.realname = data.realname
      res.json(
        new SuccessModel('登陆成功')
      )
      return
    }
    res.json(
      new ErrorModel('登陆失败')
    )
  })
});

module.exports = router;

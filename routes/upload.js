const express = require('express');
const multer = require('multer');
const fs = require("fs");
const path = require("path");
const router = express.Router();
const { SuccessModel, ErrorModel } = require('../model/resModel')

router.post('/single', multer({
  //设置文件存储路径
  dest: 'upload' //upload文件如果不存在则会自己创建一个。
}).single('file'), function (req, res, next) {
  if (req.file.length === 0) { //判断一下文件是否存在，也可以在前端代码中进行判断。
    res.render("error", {
      message: "上传文件不能为空！"
    });
    return
  } else {
    let file = req.file;
    let fileInfo = {};
    let newFileName = file.originalname.split(".");
    newFileName = Date.now() + "." + newFileName[newFileName.length - 1];
    fs.renameSync('./upload/' + file.filename, './upload/' + newFileName); //这里修改文件名字，比较随意。
    // 获取文件信息
    fileInfo.mimetype = file.mimetype;
    fileInfo.originalname = file.originalname;
    fileInfo.size = file.size;
    fileInfo.path = file.path;

    // 设置响应类型及编码
    res.set({
      'content-type': 'application/json; charset=utf-8'
    });

    // let fileUrl = path.join(__dirname,'../upload/');
    let fileUrl = "/upload";

    res.json(
      new ErrorModel({img: fileUrl + newFileName},'图片上传成功')
    )
  }
});

module.exports = router;
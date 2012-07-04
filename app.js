var express = require('express'), path = require('path'), url = require('url'), mvc = require('mvc'), fs = require('fs');

var app = module.exports = express.createServer(express.bodyParser())
// 配置
.configure(function () {
    // 设置默认视图引擎目录
    this.set('views', path.join(__dirname, "views"));
    // 默认文件后缀，并为之选择视图引擎
    this.set('view engine', 'txt');
    this.register('txt', require('jade'));
});

// 路由 RESTfull
// SELECT
app.get(/.*/, function (req, res) {
    // 入门学习使用下面这行:
    // res.send(url.parse(req.url).pathname.substring(1));

    // 直接使用视图引擎请查看下面这行
    // res.render(url.parse(req.url).pathname.substring(1), { layout: false });

    // 使用MVC模式请使用下面这行
    (new mvc.context(req, res)).invoke();
});

// INSERT
app.post(/.*/, function (req, res) {
    (new mvc.context(req, res)).invoke();
});

// DELETE
app.del(/.*/, function (req, res) {
    (new mvc.context(req, res)).invoke();
});

// UPDATE
app.put(/.*/, function (req, res) {
    (new mvc.context(req, res)).invoke();
});

// 监听端口
app.listen(process.env.PORT);
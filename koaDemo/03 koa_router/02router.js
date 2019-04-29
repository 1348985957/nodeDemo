var Koa = require('koa')
var router = require('koa-router')();   //引入并实例化路由

var app = new Koa();

router.get('/', async(ctx) => {
    ctx.body = '首页';
})
router.get('/news', async(ctx) => {
    ctx.body = '新闻列表页面';
})
router.get('/newscontent', async(ctx) => {
    ctx.body = '新闻详情';
})

//启动路由
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
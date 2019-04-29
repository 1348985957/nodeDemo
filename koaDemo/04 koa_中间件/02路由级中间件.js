//引入koa模块
var Koa = require('koa');
var router = require('koa-router')();

//实例化
var app = new Koa();

//koa中间件  匹配任何路由

router.get('/', async(ctx) => {
    ctx.body = '首页';
});
//匹配到news路由以后继续向下匹配路由
router.get('/news', async(ctx, next) => {
    console.log('新闻列表页面');
    await next();
});
router.get('/news', async(ctx) => {
    ctx.body = '新闻列表页面';
});

//启动路由
app.use(router.routes())    //启动路由
    .use(router.allowedMethods());  //可以配置也可以不配置，建议配置

app.listen(3000)
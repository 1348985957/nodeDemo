//引入koa模块
var Koa = require('koa');
var router = require('koa-router')();

//实例化
var app = new Koa();

//koa中间件  匹配任何路由
app.use(async(ctx, next) => {
    console.log('1、这是第一个中间件01');
    await next();
    console.log('5、匹配路由完成后又返回来执行中间件01');
})
app.use(async(ctx, next) => {
    console.log('2、这是第二个中间件02');
    await next();
    console.log('4、匹配路由完成后又返回来执行中间件02');
})
router.get('/', async(ctx) => {
    ctx.body = '首页';
});

router.get('/news', async(ctx) => {
    console.log('3、匹配到了news路由');
    ctx.body = '新闻列表页面';
});


//启动路由
app.use(router.routes())    //启动路由
    .use(router.allowedMethods());  //可以配置也可以不配置，建议配置

app.listen(3000)
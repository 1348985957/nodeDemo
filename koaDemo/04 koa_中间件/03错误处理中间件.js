//引入koa模块
var Koa = require('koa');
var router = require('koa-router')();

//实例化
var app = new Koa();

//koa中间件  匹配任何路由

router.get('/', async(ctx) => {
    ctx.body = '首页';
});

router.get('/news', async(ctx) => {
    console.log('这是新闻2');
    ctx.body = '新闻列表页面';
});
app.use(async(ctx, next) => {
    console.log('这是一个中间件');
    next();
    if (ctx.status == 404) {
        ctx.status = 404;
        ctx.body = '这是一个404页面';
    }else {
        console.log(ctx.url);
    }
})

//启动路由
app.use(router.routes())    //启动路由
    .use(router.allowedMethods());  //可以配置也可以不配置，建议配置


app.listen(3000)
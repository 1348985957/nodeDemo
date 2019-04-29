/*
Koa中koa-bodyparser中间件获取表单提交的数据
*/
var Koa = require('koa'),
    router = require('koa-router')(),
    views = require('koa-views'),
    bodyParser = require('koa-bodyparser');
var app = new Koa();
app.use(views('views',{
    extension: 'ejs'
}))
//配置post bodyparser的中间件
app.use(bodyParser());

router.get('/', async(ctx) => {
    await ctx.render('index')
})
//接收post提交的数据
router.post('/doAdd', async(ctx) => {
    console.log(ctx.request.body);
    ctx.body = ctx.request.body;    //获取表单提交的数据
})

//启动路由
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
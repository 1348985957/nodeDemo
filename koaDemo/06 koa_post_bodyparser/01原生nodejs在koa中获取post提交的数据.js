var Koa = require('koa'),
    router = require('koa-router')(),
    views = require('koa-views'),
    common = require('./module/common');
var app = new Koa();
app.use(views('views',{
    extension: 'ejs'
}))

router.get('/', async(ctx) => {
    await ctx.render('index')
})
//接收post提交的数据
router.post('/doAdd', async(ctx) => {
    //原生nodejs获取表单提交的数据
    var data = await common.getPostData(ctx);
    console.log(data);
    ctx.body = data;
})

//启动路由
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
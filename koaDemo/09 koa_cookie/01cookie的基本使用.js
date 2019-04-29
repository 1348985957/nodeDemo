/*
Koa中koa-bodyparser中间件获取表单提交的数据
*/
var Koa = require('koa'),
    router = require('koa-router')(),
    render = require('koa-art-template'),
    path = require('path'),
    static = require('koa-static');
var app = new Koa();
render(app, {
    root: path.join(__dirname, 'views'), //视图的位置
    extname: '.art',    //后缀名
    debug: process.env.NODE_ENV !== 'production'    //是否开启调试模式
});

//配置静态web服务的static中间件R
app.use(static('static'));  //可以配置多个
router.get('/', async(ctx) => {
    ctx.cookies.set('userinfo','zhangsan',{
        maxAge: 60*1000*60, //配置过期时间
        path: '/news', //配置可以访问的页面
        httpOnly: false  //true表示这个cookie只有服务器端可以访问，false表示客户端(js)、服务器端都可以访问
    });

    let list = {
        name: '张三',
        sex: '男'
    }
    await ctx.render('index',{
        list: list
    });
})

router.get('/news', async(ctx) => {
    var userinfo = ctx.cookies.get('userinfo');
    let list = {
        name: '张三11',
        sex: '男'
    }
    await ctx.render('news',{
        list: list,
        userinfo: userinfo
    })
})

//启动路由
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
var Koa = require('koa'),
    router = require('koa-router')(),
    render = require('koa-art-template'),
    path = require('path');

var app = new Koa();
render(app, {
    root: path.join(__dirname, 'views'), //视图的位置
    extname: '.art',    //后缀名
    debug: process.env.NODE_ENV !== 'production'    //是否开启调试模式
});

router.get('/',async(ctx) => {
    let title = '你好ejs';
    let list = {
        name: '张三',
        sex: '男'
    }
    await ctx.render('index',{
        title: title,
        list: list
    });
})

router.get('/news',async(ctx) => {
    let arr = ['111','222','333'];
    let content = '<h2>这是一个h2</h2>';
    let num = 11;
    await ctx.render('news',{
        list: arr,
        content: content,
        num: num
    })
})

//启动路由
app.use(router.routes())    //启动路由
    .use(router.allowedMethods());  //可以配置也可以不配置，建议配置

app.listen(3000)
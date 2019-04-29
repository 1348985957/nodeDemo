var Koa = require('koa'),
    router = require('koa-router')(),
    views = require('koa-views');
/*
注意：我们需要在每一个路由的render里面都要渲染一个公共的数据
    ctx.state = {   //放在中间件里
        session: this.session,
        title: 'app'
    }
    公共的数据放在这个里面，这样的话在模板的任何地方都可以使用
 */

var app = new Koa();
//配置模板引擎中间件  --第三方中间件
/*app.use(views(__dirname, { extension: 'ejs' }))   文件后缀为.ejs
或app.use(views(__dirname, { map: {html: 'ejs' }}))     文件后缀为.html
*/
app.use(views('views',{
    extension: 'ejs'    //应用ejs模板引擎

}))
//写一个中间件配置公共的信息
app.use(async(ctx,next) => {
    ctx.state = {
        userinfo: '张三'
    };
    await next();
})

router.get('/',async(ctx) => {
    let title = '你好ejs';
    await ctx.render('index',{
        title: title
    });
})

router.get('/news',async(ctx) => {
    let arr = ['111','222','333'];
    let content = '<h2>这是一个h2</h2>';
    let num = 123;
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
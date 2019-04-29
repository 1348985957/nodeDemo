var Koa = require('koa')
var router = require('koa-router')();   //引入并实例化路由

var app = new Koa();

router.get('/', async(ctx) => {
    ctx.body = '首页';
})
router.get('/news', async(ctx) => {
    ctx.body = '新闻列表页面';
})
//获取get传值
router.get('/newscontent', async(ctx) => {
    //从ctx中读取get传值
    /*
    在koa2中GET传值通过request接收，但是接收的方法有两种：query和querystring
    query：返回的是格式化好的参数对象
    querystring：返回的是请求字符串
     */
    console.log(ctx.query); //{ id: '2', name: 'zhangsan' } 获取的是对象  用得最多
    console.log(ctx.querystring);   //id=2&name=zhangsan 获取的是字符串

    //ctx里面的request里面获取get传值
    console.log(ctx.request.query);
    console.log(ctx.request.querystring);
    ctx.body = '新闻详情';
})

//启动路由
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
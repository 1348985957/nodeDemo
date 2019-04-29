exports.getPostData = (ctx) => {
    //获取数据  异步
    return new Promise((resolve,reject) => {
        try {
            let str = '';
            ctx.req.on('data',(data) => {
                str += data;
            });
            ctx.req.on('end',(data) => {
                resolve(str);
            })
        }catch (err) {
            reject(err)
        }
    })

}
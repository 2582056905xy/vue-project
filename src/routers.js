module.exports = function(router){
    //路由表
    router.map({
        //默认
        '/':{
            name:'index',
            component: require('./app.vue')

        },
        //首页
        '/home':{
            name:'home',
            //异步处理大量数据
            component: function(reslove){
                return require(['./views/home.vue'],reslove)
            }
        },




        // 404 页
        '*': {
            name:'404error',
            component: require('./views/404.vue')
        },

    });


    //默认List主页
    router.redirect({
        '/':"/home"
    });


    //注册路由切换前
    router.beforeEach(function (transition) {
        transition.next();

    });


    //注册路由切换后
    router.afterEach(function (transition) {
        //console.log('成功浏览到: ' + transition.to.path)
    });

};
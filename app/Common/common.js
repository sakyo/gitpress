//这里定义一些全局通用的函数，该文件会被自动加载

E("emptyController", function(_,_,http){
    http.redirect('/');
});
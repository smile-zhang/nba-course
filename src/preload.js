window.myMethod = function() {
    console.log('testtttt')
    // 执行你的逻辑
};

// utools.onPluginEnter(({ code, type, payload }) => {
//     console.log('用户进入插件应用', code, type, payload)
// })
//
window.db_put = function (id,data){
    console.log("db_put")
    utools.db.put({
        _id: id,
        data: Array.from(data)
    })
}
//
// window.db_get = function (id){
//
//     const data = utools.db.get(id);
//     return data;
// }

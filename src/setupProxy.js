const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://match.sports.sina.com.cn',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            },
            secure: false,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        })
    )

}
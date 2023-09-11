const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://www.mockmock.sssmc',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        })
    )
}
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function ( app ) {
    app.use(createProxyMiddleware('/ajax', {
        target: 'https://m.maoyan.com',
        changeOrigin: true
    }))

    app.use(createProxyMiddleware('/index.php', {
        target: 'http://www.qinqin.net',
        changeOrigin: true
    }))
}
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function ( app ) {
    // https://cangdu.org/
    app.use(createProxyMiddleware('/v1', {
        target: 'https://elm.cangdu.org',
        changeOrigin: true
    }))

    app.use(createProxyMiddleware('/shopping', {
        target: 'https://elm.cangdu.org',
        changeOrigin: true
    }))
}
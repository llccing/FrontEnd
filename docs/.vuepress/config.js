module.exports = {
    title: '千里',
    description: 'just do it! ',
    base: '/FrontEnd/',
    serviceWorker: true,
    // theme: 'vue',
    themeConfig: {
        nav: [{
            text: 'Home', link: '/',
        }, {
            text: 'Knowledge', link: '/knowledge/',
        }, {
            text: 'Read', link: '/read/',
        }, {
            text: 'About', link: '/about/'
        }],
        sidebar: {
            '/knowledge/': ['', 'JS-basic']
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@img': 'assets'
            }
        }
    }
}
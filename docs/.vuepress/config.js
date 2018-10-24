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
            text: 'Blog', link: '/blog/',
        },{
            text: 'Knowledge', link: '/knowledge/',
        },  {
            text: 'Read', link: '/read/',
        }, {
            text: 'About', link: '/about/'
        }],
        sidebar: {
            '/blog/': ['why'],
            '/knowledge/': ['', 'JS-basic'],
            '/read/': [
                // ''空字符串表示当前目录的README文件
                '',
                {
                    title: 'CSS世界',
                    children: [
                        './css-world/01-overview',
                        './css-world/02-terminology-concept',
                    ]
                },
            ]
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
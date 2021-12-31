// nav
module.exports = [
    {text: '首页', link: '/'},
    {
        text: '前端',
        link: '/front/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        /*items: [
            // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
            {
                text: '常用代码',
                items: [
                    {text: '时间相关方法', link: '/pages/f48a4c/'},
                    {text: '页面加载', link: '/pages/b62a61/'},
                    {text: '正则', link: '/pages/ce53dc/'},
                    {text: 'ElementUI', link: '/pages/6e4583/'},
                ],
            }
        ],*/
    },
    {
        text: '收藏',
        link: '/pages/a8a2c8/',
        /*items: [
          { text: '网站', link: '/pages/a8a2c8/' }
        ],*/
    },
    {
        text: '索引',
        link: '/archives/',
        items: [
            {text: '分类', link: '/categories/'},
            {text: '标签', link: '/tags/'},
            {text: '归档', link: '/archives/'},
        ],
    },
    {text: '关于', link: '/about/'},
]

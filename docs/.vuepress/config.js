module.exports = {
    title: '泡发UI',
    description: '这是我在学习Vue过程中做的一个UI框架，希望对你有用。',
    base:'/PF-UI/',
    themeConfig: {
        sidebar: [
            {
                title: '入门',   // 必要的
                children: [
                    '/install/',
                    '/get-started/'
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/toast',
                    '/components/tabs',
                    '/components/popover'
                ],
            }
        ]
    }
}

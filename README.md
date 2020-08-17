# 泡发UI - 一个Vue UI组件

作者：Polly-foz

## 介绍

这是我在学习Vue过程中做的一个UI框架，希望对你有用。

## 开始使用

1. 添加CSS样式
    使用本框架前，请在CSS中开启border-box
    
    ```css
    *, *::before, *::after{
        box-sizing: border-box;
    }
    ```
    IE 8 及以上浏览器都支持此样式。
    
    你还需要设置默认颜色等变量
    ```css
    html{
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
    IE 15 及以上浏览器都支持此样式。

2. 安装 pf-ui
    ```shell script
    npm i --save pf-ui-20200812
    ```

3. 引入 pf-ui
    ```vue
    import {Button, ButtonGroup, Icon} from 'pf-ui-20200812'
    import 'pf-ui-20200812/dist/index.css'
    
    export default {
        name: 'app',
        components:{
            'g-button': Button,
            'g-button-group': ButtonGroup,
            'g-icon': Icon
        }
    }
    ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码





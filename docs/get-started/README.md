---
title: 快速上手
---

# 快速上手

引入Button组件
```vue
<template>
    <div id="app">
        <pf-button>按钮</pf-button>
    </div>
</template>
<script>
    import {Button} from 'pf-ui-20200812'
    import 'pf-ui-20200812/dist/index.css'
    
    export default {
        name: 'App',
        components:{
            'pf-button': Button
        }
    }
</script>
<style>
    *, *::before, *::after{
        box-sizing: border-box;
    }
</style>
```

<template>
<div class="containner">
    <h2>父级</h2>
    <!-- 使用子组件 -->
    <son-test :test="test">
    </son-test>
</div>
</template>

<script>
// 1.引用子组件
import SonTest from "@/components/SonTest.vue"
export default {
    name: 'FatherTest',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            // 向子组件传值
            test: [{
                name: "小白"
            }]
        }
    },
    // 2.声明引用的组件
    components: {
        SonTest,
    }
}
</script>

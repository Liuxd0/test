<template>
<div class="containner">
    <h2>子级</h2>
    {{test}}
    <div></div>
</div>
</template>

<script>
export default {

    // 接收父组件传来的值
    props: {
        test: {
            type: Array,
            default: function () {
                return [];
            }
        }
    }
}
</script>

<template>
    <div class="content">
        <p>商品：Web前端教程</p>
        <p>原件：1980元</p>
        <p>现价：1.98元</p>
        <p>内容：HTML，CSS，JS</p>
        <p>地址：北京市朝阳区</p>
        <p>
            <button @click="cancel">取消</button>
            <button @click="pay">支付</button>
        </p>
    </div>
</template>
<script>


//逻辑：当用户点击确定时，即支付成功，跳转至succ.vue
export default {
    name: 'Confirm',
    data() {
        return {
            isshow: true
        }
    },
    methods: {
        cancel() {

        },
        pay() {
            let res = confirm('您确定要支付吗？')
            if(res){
                this.$emit('isshow')
            }
        }
    }
    
}
</script>

<style scoped>
</style>

<template>
    <div>
        <h2>恭喜您，支付成功</h2>
        <span id="jumpTo">{{timer}}</span>秒后自动返回首页
        <p><button @click="btnClick">立即返回</button></p>
    </div>
</template>
<script>

//逻辑：当页面跳转到该页时(即加载页面时)，触发一个10秒定时器
export default {
    name: 'Succ',
    data() {
        return {
            timer: 10
        }
    },
    mounted: function () {
        setInterval(() => {
            //每过一秒数值减一
            this.timer--;/* 
            //将减之后的数值传入上面
            document.querySelector('jumpTo').innerText = this.timer; */
            //判断timer是否为0
            if(this.timer==0){
                location.href = 'https://jinwen01.ke.qq.com';
            }
        },1000)
    },
    methods: {
        btnClick() {
            location.href = 'https://jinwen01.ke.qq.com';
        }
    }
}
</script>

<style scoped>
    div {
    margin: 0 auto;
    width: 500px;
    }
    #jumpTo {
        color: red;
        font-size: 30px;
    }
</style>
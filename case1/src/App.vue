<template>
  <div id="app" ref="Confirm">
    <confirm v-if="showing" @isshow="show"></confirm>
    <succ v-else></succ>
  </div>
</template>

<script>
import Confirm from './components/Confirm.vue'
import Succ from './components/Succ.vue'


export default {
  name: 'App',
  data() {
    return {
      showing: true
    }
  },
  components: {
    Confirm,
    Succ
  },
  methods: {
    show() {
      this.showing = false
      //location.href = './Succ.vue'  //location是个对象其下面有这个属性href
    }
  }
}
</script>

<style scope>

</style>

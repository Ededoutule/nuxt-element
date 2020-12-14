<template>
  <div>
    动态路由
    <div>2545525：{{ $route.params }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  validate({ params, query }) {
    console.log(params, query)
    return true // 如果参数有效
    // return false // 参数无效，Nuxt.js 停止渲染当前页面并显示错误页面
  },
})
export default class ClassName extends Vue {
  asycnData({ route }: any) {
    console.log('router1', route)
  }
}
</script>

<style lang="scss" scoped></style>

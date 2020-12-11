<template>
  <div>
    动态路由
    <div>2545525：{{ $route.params }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ClassName extends Vue {
  asycnData({ route }: any) {
    console.log('router1', route)
  }
}
</script>

<style lang="scss" scoped></style>

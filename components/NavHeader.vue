<template>
  <nav>
    <div>
      <slot name="left">首页</slot>
    </div>
    <div>
      <slot name="content">新闻</slot>
    </div>
    <div>
      <slot name="right">博客</slot>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class NavHeader extends Vue {}
</script>

<style lang="scss" scoped></style>

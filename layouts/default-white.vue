<template>
  <div :style="'background: red;'">
    <NavHeader>
      <p slot="left">slot</p>
    </NavHeader>
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NavHeader from '@/components/NavHeader.vue'
@Component({
  components: {
    NavHeader,
  },
})
export default class ClassName extends Vue {}
</script>

<style lang="scss" scoped></style>

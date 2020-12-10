<template>
  <div>{{ name }}</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  layout: 'blog',
})
export default class ClassName extends Vue {
  private name = 123
  async asyncData({ $axios, route, store, params, query }: any) {
    const { data } = await $axios.get()
    console.log(route, store, params, query)
    return { title: data.title }
  }
}
</script>

<style lang="scss" scoped></style>

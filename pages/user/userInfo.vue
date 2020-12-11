<template>
  <div>userInfo</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  layout: 'blog',
  loading: true,
})
export default class userInfo extends Vue {
  async asyncData({ $axios, route, store, params, query }: any) {
    const { data } = await $axios.get()
    // eslint-disable-next-line no-console
    console.log('111', route)
    return { title: data.title }
  }

  head() {
    return {
      title: 'test',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  }
}
</script>

<style lang="scss" scoped></style>

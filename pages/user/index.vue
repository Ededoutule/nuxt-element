<template>
  <div>
    {{ name }}
    <div>486465456+1</div>
    <div>{{ userInfo }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'
@Component({
  layout: 'blog',
})
export default class ClassName extends Vue {
  private name = 123
  private userInfo = UserModule
  async asyncData({ $axios, route, store, params, query }: any) {
    const { data } = await $axios.get()
    console.log('111', route)
    return { title: data.title }
  }
}
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    {{ name }}
    <div @click="dianj">486465456+1</div>
    <div>{{ titleChange || '没有值' }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store'
@Component({
  // layout: 'blog',
  validate({ params, query }) {
    console.log(params, query)
    return true // 如果参数有效
    // return false // 参数无效，Nuxt.js 停止渲染当前页面并显示错误页面
  },
  loading: true,
  layout(context: any) {
    return 'blog'
  },
  head() {
    return {
      title: 'sss',
      meta: [
        {
          // hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
  // asyncData({ app }) {
  //   console.log(app)
  //   return new Promise((resolve) => {
  //     setTimeout(function () {
  //       resolve({ title: 'world' })
  //     }, 1000)
  //   })
  // },
})
export default class User extends Vue {
  private name = 123
  private title: any = '弟弟' || UserModule.userInfo
  get titleChange() {
    return UserModule.userInfo
  }

  dianj() {
    console.log(UserModule)
    UserModule.ResetToken('fdf')
  }
}
</script>

<style lang="scss" scoped></style>

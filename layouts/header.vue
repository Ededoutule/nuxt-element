<template>
  <div class="nav-header-page">
    <div class="top-nav">
      <div class="log">
        <img class="cursor" src="https://www.bykol.com/img/logo.png" alt="" />
      </div>
      <nav class="nav-content">
        <div
          v-for="(item, index) in navObj"
          :key="index"
          class="nav-item"
          :class="{ action: index === clincIndex }"
          @click="clickChangeNav(index)"
        >
          {{ item }}
        </div>
        <div class="login">
          <div class="btn login">登录</div>
          <div class="btn register">注册</div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

@Component
export default class NavHeader extends Vue {
  //   @Prop({ default: {}, type: Object }) styleObj: any
  clincIndex = 0
  navObj = [
    '首页',
    'KOL研究院',
    'KOL粉丝测评',
    'KOL营销',
    '搜索KOL',
    '合作模式',
    '关于我们',
  ]

  @Emit()
  clickChangeNav(index: any) {
    this.clincIndex = index
    console.log(index)
    return index
  }
}
</script>

<style lang="scss" scoped>
.nav-header-page {
  height: 80px;
  .top-nav {
    width: 1300px;
    margin: 0 auto;
    display: flex;
    padding: 20px 0;
    align-items: center;
    .log {
      flex: 1;
    }
    .nav-content {
      display: flex;
      align-items: center;
      .nav-item {
        color: #333;
        font-weight: bold;
        padding: 0 25px;
        cursor: pointer;
      }
      .action {
        color: #127aff;
      }
      .login {
        display: flex;
        justify-content: center;
        .btn {
          color: #fff;
          border-radius: 15px;
          height: 30px;
          width: 66px;
          line-height: 30px;
          text-align: center;
          margin-left: 20px;
          font-weight: bold;
          border: 1px solid #127aff;
          cursor: pointer;
        }
        .login {
          background: #127aff;
        }
        .register {
          color: #127aff;
        }
      }
    }
  }
}
</style>

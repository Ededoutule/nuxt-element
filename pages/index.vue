<template>
  <div>
    <!-- <NavHeader @click-change-nav="clickChangeNav" /> -->
    <main>
      <swiper ref="mySwiper" :options="swiperOption">
        <swiper-slide class="tt">Slide 1</swiper-slide>
        <swiper-slide class="tt">Slide 2</swiper-slide>
        <swiper-slide class="tt">Slide 3</swiper-slide>
        <swiper-slide class="tt">Slide 4</swiper-slide>
        <swiper-slide class="tt">Slide 5</swiper-slide>
        <div slot="button-next" class="swiper-button-next"></div>
        <div slot="button-prev" class="swiper-button-prev"></div>

        <div slot="pagination" class="swiper-pagination"></div>
      </swiper>
    </main>
    <CurdTemplate></CurdTemplate>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import NavHeader from '@/components/NavHeader.vue'
import CurdTemplate from '~/components/CurdTemplate.vue'
@Component({
  // layout: 'header',

  components: { NavHeader, Swiper, SwiperSlide },
  head: {
    title: '这是首页',
    meta: [
      {
        name: 'keyword',
        content: '弟弟',
      },
    ],
  },
})
export default class Index extends Vue {
  swiperOption = {
    effect: 'coverflow',
    slidesPerView: 'auto',
    initialSlide: 0, // 默认第几张
    loop: true, // 循环
    autoplayDisableOnInteraction: false, // 触摸后再次自动轮播
    autoplay: true, // 每张播放时长3秒，自动播放
    speed: 1000, // 滑动速度
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  }

  // get swiper() {
  //   return (this.$refs as any).mySwiper.$swiper
  // }

  clickChangeNav(index: any) {
    console.log(index)
  }

  // mounted() {
  //   console.log('Current Swiper instance object', this.swiper)
  //   const aa = this.swiper
  //   aa.slideTo(2, 1000, true)
  // }
}
</script>

<style lang="scss" scoped>
.tt {
  height: 200px;
  background: red;
}
.swiper-container {
  --swiper-theme-color: #ff6600;
  --swiper-pagination-color: #00ff33; /* 两种都可以 */
  --swiper-navigation-color: black; /* 单独设置按钮颜色 */
  --swiper-navigation-size: 30px; /* 设置按钮大小 */
}
</style>

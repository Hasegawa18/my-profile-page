<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination } from 'swiper/modules'
</script>


<template>
  <div>
    ようこそ！
  </div>

  <Swiper
    :modules="[Navigation, Pagination]"
    :slides-per-view="1"
    :loop="true"
    :navigation="true"
    :pagination="{ clickable: true }"
  >
    <SwiperSlide><img src="/images/decoration.jpeg" alt="decoration"></SwiperSlide>
    <SwiperSlide><img src="/images/monument.jpeg" alt="monument"></SwiperSlide>
    <SwiperSlide><img src="/images/yaon.jpeg" alt="yaon"></SwiperSlide>
  </Swiper>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 300px;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
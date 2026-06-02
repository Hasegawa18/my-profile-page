<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'

// フォーム入力値の状態管理
const formData = ref({
  survey: ''
})

// 送信処理の関数
const submitSurvey = () => {
  if (formData.value.survey.trim() === '') {
    alert('アンケート内容を入力してください')
    return
  }
  
  console.log('送信されたアンケート:', formData.value.survey)
  alert('アンケートを送信しました：' + formData.value.survey)
  
  // 送信後、フォームをリセット
  formData.value.survey = ''
}
</script>


<template>
  <div class="page-root">
  <div>
    <h1>ようこそ！</h1>
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

  <div class="survey-section">
    <h2>アンケート</h2>
    <textarea 
      v-model="formData.survey"
      class="survey-input"
      placeholder="ご意見・ご感想をお聞きかせください"
      rows="5"
    ></textarea>
    <button class="button" @click="submitSurvey">送信</button>
  </div>
  </div>


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

.survey-section {
  margin-top: 30px;
  padding: 20px;
}

.survey-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: inherit;
  margin-bottom: 10px;
}

.button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.button:hover {
  background-color: #0056b3;
}
</style>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'

// フォーム入力値の状態管理
const formData = ref({
  survey: ''
})
const submissions = ref<Array<{ id: number; text: string; createdAt: string }>>([])
const isSubmitting = ref(false)
const errorMessage = ref('')

const loadSubmissions = async () => {
  try {
    submissions.value = await $fetch('/api/surveys')
  } catch (err) {
    console.error('Failed to load submissions', err)
    errorMessage.value = '送信済みデータの取得に失敗しました'
  }
}

// 送信処理の関数（エラーハンドリング付き）
const submitSurvey = async () => {
  errorMessage.value = ''
  if (formData.value.survey.trim() === '') {
    errorMessage.value = 'アンケート内容を入力してください'
    return
  }

  isSubmitting.value = true
  try {
    await $fetch('/api/surveys', {
      method: 'POST',
      body: { survey: formData.value.survey }
    })

    await loadSubmissions()
    formData.value.survey = ''
    alert('アンケートを送信しました')
  } catch (err) {
    console.error('送信エラー', err)
    errorMessage.value = '送信に失敗しました。しばらくして再度お試しください'
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  loadSubmissions()
})
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
    <SwiperSlide><a href="https://ynu-fes.yokohama/26/seiryo/"><img src="/images/decoration.jpeg" alt="decoration"></a></SwiperSlide>
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
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    <button class="button" @click="submitSurvey" :disabled="isSubmitting">{{ isSubmitting ? '送信中...' : '送信' }}</button>
  </div>

  <div class="submissions-section">
    <h2>送信された内容</h2>
    <div v-if="submissions.length === 0">まだ投稿がありません。</div>
    <ul v-else>
      <li v-for="item in submissions" :key="item.id" class="submission-item">
        <div class="submission-text">{{ item.text }}</div>
        <div class="submission-meta">{{ new Date(item.createdAt).toLocaleString() }}</div>
      </li>
    </ul>
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

.submissions-section {
  margin-top: 30px;
  padding: 20px;
  border-top: 1px solid #ddd;
}

.submission-item {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.submission-text {
  white-space: pre-wrap;
}

.submission-meta {
  font-size: 12px;
  color: #666;
  margin-top: 6px;
}

.error {
  color: #b00020;
  margin: 8px 0;
}
</style>
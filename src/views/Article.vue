<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'

const route = useRoute()
const router = useRouter()

const articleData = ref(null)

// Получаем данные статьи из sessionStorage
const article = computed(() => {
  if (articleData.value) {
    return articleData.value
  }
  
  // Fallback если данных нет
  return {
    date: '',
    image: 'block_4',
    title: 'Статья не найдена',
    content: 'К сожалению, данные статьи недоступны.'
  }
})

onMounted(() => {
  // Получаем данные из sessionStorage
  const storedArticle = sessionStorage.getItem('currentArticle')
  if (storedArticle) {
    try {
      articleData.value = JSON.parse(storedArticle)
    } catch (e) {
      console.error('Ошибка при загрузке статьи:', e)
      router.push('/') // Перенаправляем на главную если данные повреждены
    }
  } else {
    // Если данных нет, перенаправляем на главную
    router.push('/')
  }
})

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="article-page">
    <AppHeader />
    
    <main class="article-main">
      <div class="article-container">
        <!-- Кнопка назад -->
        <button class="back-button" @click="goBack">
          <img src="../assets/arrow-left.svg" alt="Назад" />
          <span>Назад к статьям</span>
        </button>

        <!-- Заголовок статьи -->
        <div class="article-header">
          <div class="article-image">
            <img :src="`/assets/${article.image}.png`" :alt="article.title" />
          </div>
          <div class="article-meta">
            <span class="article-date">{{ article.date }}</span>
            <h1 class="article-title">{{ article.title }}</h1>
          </div>
        </div>

        <!-- Контент статьи -->
        <div class="article-content">
          <div class="article-text" v-html="article.content"></div>
        </div>

        <!-- CTA секция -->
        <div class="article-cta">
          <div class="cta-content">
            <h3>Готовы начать пользоваться Garda Wallet?</h3>
            <p>Создайте кошелёк за минуту и начните оплачивать покупки криптовалютой</p>
            <a href="https://t.me/gardawallet_bot" target="_blank" class="cta-button">
              Открыть Garda Wallet
            </a>
          </div>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.article-page {
  min-height: 100vh;
  background: #F5F5F5;
  display: flex;
  flex-direction: column;
}

.article-main {
  flex: 1;
  padding: 40px 0 80px;
}

.article-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #5C5C5C;
  font-size: 16px;
  font-weight: 300;
  cursor: pointer;
  margin-bottom: 32px;
  transition: color 0.3s;
}

.back-button:hover {
  color: #141414;
}

.back-button img {
  width: 20px;
  height: 20px;
}

.article-header {
  margin-bottom: 48px;
}

.article-image {
  width: 100%;
  margin-bottom: 32px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  position: relative;
}

.article-image img {
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: contain;
  object-position: center;
  display: block;
}

.article-meta {
  text-align: center;
}

.article-date {
  color: #5C5C5C;
  font-size: 14px;
  font-weight: 300;
  display: block;
  margin-bottom: 16px;
}

.article-title {
  color: #141414;
  font-size: 42px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  text-align: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 100%;
}

.article-content {
  background: #fff;
  border-radius: 20px;
  padding: 48px;
  margin-bottom: 48px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.article-text {
  color: #5C5C5C;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.7;
  white-space: pre-line;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 100%;
  word-break: break-word;
}

.article-text :deep(b) {
  font-weight: 600;
  color: #141414;
  font-size: 20px;
  display: block;
  margin: 32px 0 16px 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 100%;
}

.article-text :deep(b:first-child) {
  margin-top: 24px;
}

.article-cta {
  background: linear-gradient(135deg, #DEEC51 0%, #B8D83F 100%);
  border-radius: 20px;
  padding: 48px;
  text-align: center;
}

.cta-content h3 {
  color: #141414;
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 16px 0;
}

.cta-content p {
  color: #5C5C5C;
  font-size: 18px;
  font-weight: 300;
  margin: 0 0 32px 0;
  line-height: 1.5;
}

.cta-button {
  display: inline-block;
  background: #141414;
  color: #fff;
  padding: 16px 32px;
  border-radius: 12px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s;
}

.cta-button:hover {
  background: #2c2c2c;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(20, 20, 20, 0.3);
}

/* Планшетная версия */
@media (max-width: 1024px) {
  .article-container {
    max-width: 700px;
  }
  
  .article-title {
    font-size: 36px;
  }
  
  .article-content {
    padding: 40px;
  }
  
  .article-text {
    font-size: 17px;
  }
  
  .article-image img {
    max-height: 400px;
  }
}

/* Мобильная версия */
@media (max-width: 768px) {
  .article-main {
    padding: 20px 0 60px;
  }
  
  .article-container {
    padding: 0 16px;
  }
  
  .article-header {
    margin-bottom: 32px;
  }
  
  .article-image {
    margin-bottom: 24px;
    border-radius: 16px;
  }
  
  .article-image img {
    max-height: 300px;
  }
  
  .article-title {
    font-size: 28px;
  }
  
  .article-content {
    padding: 32px 24px;
    margin-bottom: 32px;
    border-radius: 16px;
  }
  
  .article-text {
    font-size: 16px;
    line-height: 1.6;
  }
  
  .article-text :deep(b) {
    font-size: 18px;
    margin: 24px 0 12px 0;
  }
  
  .article-cta {
    padding: 32px 24px;
    border-radius: 16px;
  }
  
  .cta-content h3 {
    font-size: 24px;
  }
  
  .cta-content p {
    font-size: 16px;
  }
}

/* Маленькие мобильные */
@media (max-width: 480px) {
  .article-title {
    font-size: 24px;
  }
  
  .article-content {
    padding: 24px 20px;
  }
  
  .article-text {
    font-size: 15px;
  }
  
  .article-image img {
    max-height: 250px;
  }
  
  .article-cta {
    padding: 24px 20px;
  }
  
  .cta-content h3 {
    font-size: 22px;
  }
  
  .cta-content p {
    font-size: 15px;
  }
  
  .cta-button {
    padding: 14px 24px;
    font-size: 15px;
  }
}

/* Очень маленькие экраны */
@media (max-width: 360px) {
  .article-image img {
    max-height: 200px;
  }
}
</style>
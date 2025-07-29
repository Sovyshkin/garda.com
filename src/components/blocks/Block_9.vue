<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const cards = ref([
  { date: "25/12/2025", image: "block_4", title: 'Открытие в мире крипты, которое доступно каждому', content: 'Совершайте привычные действия, будто оплачиваете рублями.' },
  { date: "26/12/2025", image: "block_9_2", title: 'Открытие в мире крипты, которое доступно каждому', content: 'Совершайте привычные действия, будто оплачиваете рублями.' },
  { date: "27/12/2025", image: "block_9_3", title: 'Открытие в мире крипты, которое доступно каждому', content: 'Совершайте привычные действия, будто оплачиваете рублями.' },
  { date: "28/12/2025", image: "block_4", title: 'Открытие в мире крипты, которое доступно каждому', content: 'Совершайте привычные действия, будто оплачиваете рублями.' },
  { date: "29/12/2025", image: "block_9_2", title: 'Открытие в мире крипты, которое доступно каждому', content: 'Совершайте привычные действия, будто оплачиваете рублями.' },
  { date: "30/12/2025", image: "block_9_3", title: 'Открытие в мире крипты, которое доступно каждому', content: 'Совершайте привычные действия, будто оплачиваете рублями.' },
]);

const currentIndex = ref(0);
const cardsContainer = ref(null);

const nextCard = () => {
  if (currentIndex.value < cards.value.length - 1) {
    currentIndex.value++;
    scrollToActiveCard();
  }
};

const prevCard = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    scrollToActiveCard();
  }
};

const setActiveCard = (index) => {
  currentIndex.value = index;
  scrollToActiveCard();
};

const scrollToActiveCard = () => {
  if (cardsContainer.value) {
    const card = cardsContainer.value.children[currentIndex.value];
    cardsContainer.value.scrollTo({
      left: card.offsetLeft - cardsContainer.value.offsetLeft,
      behavior: "smooth",
    });
  }
};
</script>

<template>
  <div class="blog-news-container" data-aos="zoom-in" data-aos-anchor-placement="top-center">
    <div class="blog-header">
      <h1>{{ t("block_9_text_h1") }}</h1>
      <div class="blog-actions">
        <button
          class="nav-arrow left-arrow"
          @click="prevCard"
          :disabled="currentIndex === 0"
        >
          <img src="../../assets/arrow-left.svg" alt="" />
        </button>
        <button
          class="nav-arrow right-arrow"
          @click="nextCard"
          :disabled="currentIndex === cards.length - 1"
        >
          <img src="../../assets/arrow-right.svg" alt="" />
        </button>
      </div>
    </div>

    <div class="cards-wrapper">
      <div class="cards-container" ref="cardsContainer">
        <div
          class="news-card"
          v-for="(card, index) in cards"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="setActiveCard(index)"
        >
          <div class="wrap-img">
            <img :src="`/assets/${card.image}.png`" alt="" />
          </div>
          <span class="date">
            {{ card.date }}
          </span>
          <h2>{{ card.title }}</h2>
          <p>{{ card.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-news-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.blog-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h1 {
  color: #141414;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
}

.blog-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cards-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
}

.cards-container {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  gap: 15px;
  padding: 10px 0;
  flex: 1;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.cards-container::-webkit-scrollbar {
  display: none;
}

.news-card {
  width: 33%;
  min-width: 390px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  scroll-snap-align: start;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.news-card:hover {
  transform: scale(1.03);
}

.wrap-img {
  width: 100%;
  height: 240px;
  overflow: hidden;
  display: flex;
  align-items: center;
  border-radius: 20px;
}

.wrap-img img {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
}

.nav-arrow {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f5f5f5;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.nav-arrow:hover:not(:disabled) {
  background: #e0e0e0;
}

.nav-arrow:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.date {
  color: #141414;
  opacity: 70%;
  font-weight: 300;
  font-size: 12px;
}

h2 {
  font-size: 18px;
  color: #141414;
  font-weight: 500;
}

p {
  color: #5C5C5C;
  font-weight: 300;
}

/* Планшетная версия (768px - 1024px) */
@media (max-width: 1024px) {
  .blog-news-container {
    gap: 48px;
  }
  
  h1 {
    font-size: 32px;
    line-height: 40px;
  }
  
  .news-card {
    min-width: 320px;
  }
  
  .wrap-img {
    height: 200px;
  }
}

/* Мобильная версия (до 768px) */
@media (max-width: 768px) {
  .blog-news-container {
    gap: 32px;
  }
  
  h1 {
    font-size: 26px;
    line-height: 32px;
  }
  
  .blog-actions {
    align-self: flex-end;
  }
  
  .nav-arrow {
    width: 36px;
    height: 36px;
  }
  
  .news-card {
    min-width: 280px;
  }
  
  .wrap-img {
    height: 180px;
    border-radius: 16px;
  }
  
  h2 {
    font-size: 16px;
  }
  
  p {
    font-size: 14px;
  }
}

/* Маленькие мобильные устройства (до 480px) */
@media (max-width: 480px) {
  .blog-news-container {
    gap: 24px;
  }
  
  h1 {
    font-size: 24px;
    line-height: 28px;
  }
  
  .news-card {
    min-width: 260px;
  }
  
  .wrap-img {
    height: 160px;
    border-radius: 12px;
  }
  
  .nav-arrow img {
    width: 32px;
    height: 32px;
  }
}
</style>
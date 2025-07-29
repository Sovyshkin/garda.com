<script setup>
import { ref } from 'vue';

const activeIndex = ref(null);

const faqItems = ref([
  {
    question: "Где можно получить реферальный ключ для регистрации?",
    answer: "Для входа в аккаунт и создания кошелька мы используем подтверждение через Telegram бота. Все операции на вывод средств также проходят через подтверждение в боте."
  },
  {
    question: "Как работает «оплата» в Garda Wallet?",
    answer: "Оплата в Garda Wallet осуществляется через..."
  },
  {
    question: "Какую максимальную сумму можно провести одним платежом?",
    answer: "Максимальная сумма одного платежа составляет..."
  },
  {
    question: "Какие есть бонусы за приглашенного друга?",
    answer: "За каждого приглашенного друга вы получаете..."
  }
]);

const toggleItem = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <div class="faq-block">
    <div 
      v-for="(item, index) in faqItems" 
      :key="index" 
      class="faq-item"
      :class="{ 'active': activeIndex === index }"
      @click="toggleItem(index)"
    >
      <div class="question">
        {{ item.question }}
        <svg class="arrow" width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M6 9L12 15L18 9" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="answer-wrapper">
        <div class="answer">
          {{ item.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq-block {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  box-sizing: border-box;
}

.faq-item {
  border-bottom: 1px solid #C2C2C2;
  cursor: pointer;
  transition: all 0.3s ease;
}

.question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  color: #141414;
  transition: color 0.3s ease;
  padding: 24px 0;
}

.arrow {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
  margin-left: 12px;
  flex-shrink: 0;
}

.faq-item.active .arrow {
  transform: rotate(180deg);
  stroke: #2c3e50;
}

.answer-wrapper {
  will-change: height;
  overflow: hidden;
}

.answer {
  padding-top: 0;
  font-weight: 300;
  color: #5c5c5c;
  line-height: 1.6;
  font-size: 17px;
  opacity: 0;
  transform: translateY(-10px);
  transition: 
    opacity 0.4s ease,
    transform 0.4s ease,
    padding-top 0.4s ease;
}

.faq-item.active .answer {
  opacity: 1;
  transform: translateY(0);
  padding-bottom: 24px;
}

/* Анимация высоты */
.faq-item {
  --answer-height: 0px;
}

.faq-item.active {
  --answer-height: auto;
}

.answer-wrapper {
  height: var(--answer-height);
  transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Планшеты (768px и меньше) */
@media (max-width: 768px) {
  .question {
    font-size: 18px;
    padding: 20px 0;
  }
  
  .answer {
    font-size: 16px;
  }
  
  .faq-item.active .answer {
    padding-bottom: 20px;
  }
}

/* Мобильные устройства (480px и меньше) */
@media (max-width: 480px) {
  .question {
    font-size: 16px;
    padding: 16px 0;
  }
  
  .answer {
    font-size: 15px;
  }
  
  .faq-item.active .answer {
    padding-bottom: 16px;
  }
  
  .arrow {
    width: 18px;
    height: 18px;
  }
}

/* Очень маленькие мобильные (320px и меньше) */
@media (max-width: 320px) {
  .question {
    font-size: 15px;
    padding: 14px 0;
  }
  
  .answer {
    font-size: 14px;
  }
  
  .faq-item.active .answer {
    padding-bottom: 14px;
  }
  
  .arrow {
    width: 16px;
    height: 16px;
    margin-left: 8px;
  }
}
</style>
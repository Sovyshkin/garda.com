<script setup>
import { ref } from 'vue';

const activeIndex = ref(null);

const faqItems = ref([
  {
    question: "Где можно получить реферальный ключ для регистрации?",
    answer: `Зарегистрируйтесь через удобный интерфейс личного кабинета нашего бота.

После успешной регистрации получите уникальный реферальный ключ, который откроет доступ к специальным предложениям и скидкам.

Поделитесь своим ключом с друзьями и близкими, приглашая их присоединиться к миру удобных и выгодных криптоплатежей.

Используйте свой шанс сделать каждую покупку выгодной с GardaWallet LLC.`
  },
  {
    question: "Как работает «оплата» в Garda Wallet?",
    answer: `Шаг 1: Пополни свой кошелёк

Пополни свой виртуальный кошелек через нашего бота. Это займет немного времени и твои средства будут готовы к использованию.

Шаг 2: Покупка одним движением

Пришла пора совершить покупку? Попроси продавца показать тебе QR-код для оплаты и оплати через СБП. Нет нужды вводить длинные номера карт или пароли — наша платформа сделает все за тебя! 

Теперь каждый платеж превращается в удовольствие, а шопинг становится быстрее и удобнее.`
  },
  {
    question: "Какую максимальную сумму можно провести одним платежом?",
    answer: `Сегодня мы рады предложить нашим клиентам комфортные лимиты на платежи, позволяющие свободно распоряжаться своими средствами и проводить крупные операции с легкостью и уверенностью. Однако даже эта цифра — лишь начало вашего пути к финансовым вершинам с GardaWallet LLC.

Сейчас вы можете осуществлять переводы и оплачивать товары и услуги на сумму до 600 000 рублей. Но это далеко не предел наших амбиций и забот о вашем комфорте. Мы постоянно работаем над расширением границ возможного, совершенствуя нашу систему.`
  },
  {
    question: "Какие есть бонусы за приглашенного друга?",
    answer: `За каждую покупку ваших приглашенных пользователей вы будете получать до 3% от суммы транзакции.

Представьте себе, что каждая чужая покупка  приносит вам доход. Именно такую уникальную возможность дарит GardaWallet LLC.

Просто поделитесь своим реферальным кодом с друзьями, коллегами и семьей, и получай щедрые вознаграждения.

Чем активнее становятся участники сети, тем выше поднимается уровень доходов. Привлекайте больше активных пользователей, развивайте свою сеть и наблюдайте, как растут ваши финансы без особых усилий.`
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
  white-space: pre-line;
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
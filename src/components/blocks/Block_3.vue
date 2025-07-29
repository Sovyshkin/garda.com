<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="block">
    <div class="block-item auth_tg" data-aos="flip-up" data-aos-anchor-placement="top-center">
      <div class="wrap-text">
        <h2>{{ t('block_3_text_h2_tg') }}</h2>
        <p>{{ t('block_3_text_p_tg') }}</p>
      </div>
      <img class="ant" src="../../assets/antarctic.png" alt="">
    </div>
    <div class="wrap-blocks">
      <div class="block-item" data-aos="flip-left" data-aos-anchor-placement="center-center">
        <h2>{{ t('block_3_text_h2_aml') }}</h2>
        <p>{{ t('block_3_text_p_aml') }}</p>
        <img class="ant2" src="../../assets/antarctic.png" alt="">
      </div>
      <div class="block-item" data-aos="flip-right"  data-aos-anchor-placement="center-center">
        <h2>{{ t('block_3_text_h2_safe') }}</h2>
        <p>{{ t('block_3_text_p_safe') }}</p>
        <img class="ant2" src="../../assets/antarctic.png" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Десктопные стили (остаются без изменений) */
.block {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: stretch;
}

.wrap-blocks {
  display: flex;
  align-items: stretch;
  gap: 24px;
  justify-content: space-between;
}

.block-item {
  display: flex;
  background-color: #fff;
  border-radius: 20px;
  padding: 64px 64px 0 64px;
  flex-direction: column;
  gap: 12px;
}

.auth_tg {
  flex-direction: row;
  justify-content: space-between;
  padding-top: 128px;
}

.wrap-text {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ant {
  max-height: 387px;
  max-width: 372px;
}

.ant2 {
  max-width: 230px;
  margin: 0 auto;
}

h2 {
  color: #141414;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.3;
}

p {
  color: #5C5C5C;
  font-weight: 300;
  line-height: 20px;
  font-size: 16px;
}

/* Адаптивные стили */
@media (max-width: 1200px) {
  .block-item {
    padding: 48px 48px 0 48px;
  }
  
  .auth_tg {
    padding-top: 96px;
  }
  
  .ant {
    max-width: 320px;
    max-height: 330px;
  }
}

@media (max-width: 1024px) {
  .block-item {
    padding: 40px 40px 0 40px;
  }
  
  .auth_tg {
    padding-top: 80px;
  }
  
  h2 {
    font-size: 24px;
  }
  
  p {
    font-size: 15px;
  }
  
  .ant {
    max-width: 280px;
    max-height: 290px;
  }
  
  .ant2 {
    max-width: 200px;
  }
}

@media (max-width: 768px) {
  .auth_tg {
    flex-direction: column;
    padding-top: 64px;
    gap: 24px;
  }
  
  .wrap-text {
    width: 100%;
  }
  
  .ant {
    margin: 0 auto;
  }
  
  .wrap-blocks {
    flex-direction: column;
  }
  
  .block-item {
    padding: 32px 32px 0 32px;
  }
  
  h2 {
    font-size: 22px;
  }
}

@media (max-width: 480px) {
  .block {
    gap: 16px;
  }
  
  .block-item {
    padding: 24px 24px 0 24px;
    border-radius: 16px;
  }
  
  .auth_tg {
    padding-top: 48px;
  }
  
  h2 {
    font-size: 20px;
  }
  
  p {
    font-size: 14px;
    line-height: 18px;
  }
  
  .ant {
    max-width: 240px;
    max-height: 250px;
  }
  
  .ant2 {
    max-width: 180px;
  }
}
</style>
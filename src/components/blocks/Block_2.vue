<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="about_us" data-aos="zoom-in-up" data-aos-anchor-placement="center-bottom">
    <button class="about-company">
      {{ t('about_company') }}
    </button>
    <div class="wrap-text">
      <h1>{{ t('block_2_text_h1') }}</h1>
      <p>{{ t('block_2_text_p') }}</p>
    </div>
  </div>
</template>

<style scoped>
.about_us {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.wrap-text {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
}

.about-company {
  border: 1px solid #C2C2C2;
  padding: 16px 24px;
  border-radius: 9px;
  color: #8F8F8F;
  background: transparent;
  font-size: 16px;
  transition: all 0.3s ease;
}

.about-company:hover {
  border-color: #8F8F8F;
  color: #5c5c5c;
}

h1 {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 36px;
  line-height: 46px;
  letter-spacing: 0;
  color: #141414;
  text-align: center;
}

p {
  font-size: 19px;
  line-height: 25px;
  letter-spacing: 0;
  font-weight: 300;
  color: #5c5c5c;
  text-align: center;
}

/* Адаптивные стили */
@media (max-width: 1024px) {
  .about_us {
    gap: 28px;
    padding: 32px 20px;
  }
  
  h1 {
    font-size: 32px;
    line-height: 42px;
  }
  
  p {
    font-size: 18px;
    line-height: 24px;
  }
}

@media (max-width: 768px) {
  .about_us {
    gap: 24px;
    padding: 28px 16px;
  }
  
  h1 {
    font-size: 28px;
    line-height: 36px;
  }
  
  p {
    font-size: 17px;
    line-height: 22px;
  }
  
  .about-company {
    padding: 14px 20px;
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .about_us {
    gap: 20px;
    padding: 24px 12px;
  }
  
  h1 {
    font-size: 24px;
    line-height: 30px;
  }
  
  p {
    font-size: 16px;
    line-height: 20px;
  }
  
  .about-company {
    padding: 12px 16px;
    font-size: 14px;
  }
  
  .wrap-text {
    gap: 8px;
  }
}
</style>
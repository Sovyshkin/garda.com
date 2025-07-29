<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import BlockFaq from './BlockFaq.vue'

const { t } = useI18n();
</script>
<template>
  <div class="block" id="faq" data-aos="zoom-in" data-aos-anchor-placement="top-center">
    <button class="block-btn">
        FAQ
    </button>
    <div class="wrap-text">
        <h1>{{ t('block_8_text_h1') }}</h1>
        <p>{{ t('block_8_text_p') }}</p>
    </div>
    <BlockFaq/>
  </div>
</template>
<style scoped>
.block {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    max-width: 800px;
    margin: 0 auto;
    box-sizing: border-box;
}

.wrap-text {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.block-btn {
    border: 1px solid #C2C2C2;
    padding: 16px 24px;
    border-radius: 9px;
    color: #8F8F8F;
    font-size: 16px;
}

h1 {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 36px;
  line-height: 46px;
  letter-spacing: 0;
  color: #141414;
  margin: 0;
}

p {
  font-size: 19px;
  line-height: 25px;
  letter-spacing: 0;
  font-weight: 300;
  color: #5c5c5c;
  margin: 0;
}

/* Планшеты (768px и меньше) */
@media (max-width: 768px) {
  .block {
    gap: 24px;
  }
  
  h1 {
    font-size: 32px;
    line-height: 40px;
  }
  
  p {
    font-size: 17px;
    line-height: 22px;
  }
  
  .block-btn {
    padding: 14px 20px;
  }
}

/* Мобильные устройства (480px и меньше) */
@media (max-width: 480px) {
  .block {
    gap: 20px;
  }
  
  h1 {
    font-size: 26px;
    line-height: 32px;
  }
  
  p {
    font-size: 16px;
    line-height: 20px;
  }
  
  .block-btn {
    padding: 12px 18px;
    font-size: 15px;
  }
}

/* Очень маленькие мобильные (320px и меньше) */
@media (max-width: 320px) {
  h1 {
    font-size: 24px;
    line-height: 28px;
  }
  
  p {
    font-size: 15px;
    line-height: 18px;
  }
  
  .block-btn {
    padding: 10px 16px;
    font-size: 14px;
  }
}
</style>
<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
<template>
  <div class="block" data-aos="zoom-out-up" data-aos-anchor-placement="top-center">
    <button class="block-btn">
      {{ t("pay_shopping") }}
    </button>
    <div class="wrap-text">
      <h1>{{ t("block_4_text_h1") }}</h1>
      <p>{{ t("block_4_text_p") }}</p>
    </div>
    <div class="wrap-img">
      <img src="../../assets/block_4.svg" alt="" />
    </div>
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
}

.block-btn {
  border: 1px solid #c2c2c2;
  padding: 16px 24px;
  border-radius: 9px;
  color: #8f8f8f;
  font-size: 16px;
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

.wrap-img {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrap-img img {
  height: 500px;
}

/* Планшеты (768px и меньше) */
@media (max-width: 768px) {
  .block {
    gap: 24px;
  }
  
  h1 {
    font-size: 28px;
    line-height: 36px;
  }
  
  p {
    font-size: 17px;
    line-height: 22px;
  }
}

/* Мобильные устройства (480px и меньше) */
@media (max-width: 480px) {
  .block {
    gap: 16px;
  }
  
  .block-btn {
    padding: 12px 20px;
    font-size: 14px;
  }
  
  h1 {
    font-size: 22px;
    line-height: 28px;
  }
  
  p {
    font-size: 15px;
    line-height: 20px;
  }
  
  .wrap-text {
    gap: 8px;
  }
}

/* Очень маленькие мобильные (320px и меньше) */
@media (max-width: 320px) {
  h1 {
    font-size: 20px;
    line-height: 24px;
  }
  
  p {
    font-size: 14px;
    line-height: 18px;
  }

}
</style>
<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
<template>
  <div class="block" data-aos="flip-down" data-aos-anchor-placement="top-center">
    <div class="wrap-text">
      <h2>{{ t("block_3_text_h2_tg") }}</h2>
      <p>{{ t("block_3_text_p_tg") }}</p>
      <a class="open" href="https://t.me/gardawallet_bot?startapp=" target="_blank">
        {{ t("open_wallet") }}
        <img src="../../assets/open.svg" alt="open_wallet" />
      </a>
    </div>
    <div class="wrap-img">
      <img class="ant" src="../../assets/block_6.png" alt="" />
    </div>
  </div>
</template>
<style scoped>
.block {
  width: 100%;
  display: flex;
  background-color: #141414;
  border-radius: 20px;
  padding: 64px 64px 0 64px;
  justify-content: space-between;
  gap: 12px;
  box-sizing: border-box;
  max-height: 440px;
   overflow: hidden;
  position: relative;
}

.wrap-text {
  padding-top: 64px;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.wrap-image {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.ant {
  max-height: 608px;
  max-width: 299px;
  height: auto;
  width: auto;
}

h2 {
  color: #ffffff;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.3;
  margin: 0;
}

p {
  color: #fff;
  opacity: 70%;
  font-weight: 300;
  line-height: 20px;
  margin: 0;
}

.open {
  margin-top: 20px;
  width: fit-content;
  background-color: #deec51;
  padding: 16px 24px;
  border-radius: 9px;
  color: black;
  display: flex;
  align-items: center;
  gap: 12px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.open img {
  width: 16px;
  height: 16px;
}

/* Планшеты (992px и меньше) */
@media (max-width: 992px) {
  .block {
    padding: 80px 40px 0 40px;
    padding-top: 100px;
  }

  .wrap-text {
    padding-top: 0;
  }
  
  h2 {
    font-size: 24px;
  }
  
  .ant {
    max-height: 320px;
    max-width: 300px;
  }
}

/* Планшеты (768px и меньше) */
@media (max-width: 768px) {
  .block {
    flex-direction: column;
    padding: 60px 32px;
    align-items: center;
    gap: 32px;
  }
  
  .wrap-text {
    width: 100%;
    align-items: center;
    text-align: center;
  }
  
  .ant {
    max-height: 280px;
    max-width: 100%;
    order: -1;
  }
  
  h2 {
    font-size: 22px;
  }
  
  p {
    font-size: 15px;
  }
}

/* Мобильные устройства (480px и меньше) */
@media (max-width: 480px) {
  .block {
    padding: 40px 24px;
    gap: 24px;
    border-radius: 16px;
  }
  
  .ant {
    max-height: 220px;
  }
  
  h2 {
    font-size: 20px;
  }
  
  p {
    font-size: 14px;
    line-height: 18px;
  }
  
  .open {
    padding: 14px 20px;
    font-size: 15px;
  }
}

/* Очень маленькие мобильные (320px и меньше) */
@media (max-width: 320px) {
  .block {
    padding: 32px 16px;
    gap: 20px;
  }
  
  h2 {
    font-size: 18px;
  }
  
  p {
    font-size: 13px;
  }
  
  .open {
    padding: 12px 18px;
    font-size: 14px;
    gap: 8px;
  }
  
  .open img {
    width: 14px;
    height: 14px;
  }
}
</style>
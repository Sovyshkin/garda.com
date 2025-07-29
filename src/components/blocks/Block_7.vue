<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
<template>
  <div class="block">
    <div class="left" data-aos="zoom-in-right" data-aos-anchor-placement="top-center">
      <h1>{{ t("block_7_text_h1") }}</h1>
      <p>{{ t("block_7_text_p") }}</p>
      <div class="block-item">
        <div class="wrap-img">
          <img src="../../assets/block_7_1.svg" alt="" />
        </div>
        <div class="wrap-text">
          <h3>{{ t("block_5_text_h3_1") }}</h3>
          <p>{{ t("block_5_text_p_1") }}</p>
        </div>
      </div>
      <div class="block-item">
        <div class="wrap-img">
          <img src="../../assets/block_7_2.svg" alt="" />
        </div>
        <div class="wrap-text">
          <h3>{{ t("block_5_text_h3_2") }}</h3>
          <p>{{ t("block_5_text_p_2") }}</p>
        </div>
      </div>
      <div class="block-item">
        <div class="wrap-img">
          <img src="../../assets/block_7_3.svg" alt="" />
        </div>
        <div class="wrap-text">
          <h3>{{ t("block_5_text_h3_3") }}</h3>
          <p>{{ t("block_5_text_p_3") }}</p>
        </div>
      </div>
    </div>
    <div class="right" data-aos="zoom-in-left" data-aos-anchor-placement="top-center">
      <img src="../../assets/block_4.png" alt="" />
    </div>
  </div>
</template>
<style scoped>
.block {
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 32px;
  box-sizing: border-box;
}

.left,
.right {
  width: 50%;
}

.left {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.right {
  max-height: 490px;
  overflow: hidden;
  display: flex;
  align-items: center;
  border-radius: 20px;
}

.right img {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
}

.block-item {
  width: 100%;
  background-color: #fff;
  display: flex;
  gap: 24px;
  border-radius: 20px;
  padding: 24px;
}

.wrap-img {
  background-color: #deec51;
  padding: 12px;
  border-radius: 12px;
  width: fit-content;
  height: 56px;
  width: 56px;
  flex-shrink: 0;
}

.wrap-img img {
  width: 32px;
  height: 32px;
}

.wrap-text {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

h3 {
  color: #141414;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  margin: 0;
}

p {
  color: #5c5c5c;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.4;
  margin: 0;
}

h1 {
  font-size: 36px;
  line-height: 40px;
  text-transform: uppercase;
  font-weight: 700;
  margin: 0 0 12px 0;
}

/* Планшеты (992px и меньше) */
@media (max-width: 992px) {
  .block {
    gap: 24px;
  }
  
  h1 {
    font-size: 32px;
    line-height: 36px;
  }
  
  .block-item {
    padding: 20px;
    gap: 20px;
  }
  
  .wrap-img {
    height: 52px;
    width: 52px;
    padding: 10px;
  }
  
  .wrap-img img {
    width: 28px;
    height: 28px;
  }
  
  h3 {
    font-size: 17px;
  }
  
  p {
    font-size: 15px;
  }
}

/* Планшеты (768px и меньше) */
@media (max-width: 768px) {
  .block {
    flex-direction: column;
    gap: 32px;
  }
  
  .left,
  .right {
    width: 100%;
  }
  
  .right {
    max-height: 400px;
  }
  
  h1 {
    font-size: 28px;
    line-height: 32px;
    text-align: center;
  }
  
  .left > p {
    text-align: center;
  }
  
  .block-item {
    padding: 18px;
    gap: 16px;
  }
  
  .wrap-img {
    height: 48px;
    width: 48px;
  }
}

/* Мобильные устройства (480px и меньше) */
@media (max-width: 480px) {
  .block {
    gap: 24px;
  }
  
  .left {
    gap: 16px;
  }
  
  h1 {
    font-size: 24px;
    line-height: 28px;
  }
  
  .right {
    max-height: 300px;
    border-radius: 16px;
  }
  
  .block-item {
    padding: 16px;
    border-radius: 16px;
  }
  
  .wrap-img {
    height: 44px;
    width: 44px;
    padding: 8px;
    border-radius: 10px;
  }
  
  .wrap-img img {
    width: 24px;
    height: 24px;
  }
  
  h3 {
    font-size: 16px;
  }
  
  p {
    font-size: 14px;
  }
}

/* Очень маленькие мобильные (320px и меньше) */
@media (max-width: 320px) {
  h1 {
    font-size: 22px;
    line-height: 26px;
  }
  
  .block-item {
    padding: 14px;
    gap: 12px;
  }
  
  .wrap-img {
    height: 40px;
    width: 40px;
  }
  
  h3 {
    font-size: 15px;
  }
  
  p {
    font-size: 13px;
  }
}
</style>
<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import CircularText from "@/components/ui/CircularText.vue";

const { t } = useI18n();
</script>

<template>
  <div class="block">
    <div class="left" data-aos="zoom-in-right">
      <h1>{{ t("block_1_text_h1") }}</h1>
      <p>{{ t("block_1_text_p") }}</p>
      <button class="open">
        {{ t("open_wallet") }}
        <img src="../../assets/open.svg" alt="open_wallet" />
      </button>
      <div class="tg">
        <img src="../../assets/telegram.svg" alt="" />
        <span>Telegram</span>
      </div>
    </div>
    <div class="right" data-aos="zoom-in-left">
      <img class="right-image" src="../../assets/block_1.png" alt="">
      <div class="create_wallet">
        <p>{{ t('block_1_create_wallet') }}</p>
      </div>
    </div>
    <CircularText class="circular animate__animated animate__bounceInUp" />
  </div>
</template>

<style scoped>
.block {
  width: 100%;
  display: flex;
  align-items: stretch;
  gap: 12px;
  position: relative;
  justify-content: space-between;
}

.left,
.right {
  box-sizing: border-box;
  width: 50%;
  padding: 64px 32px 32px;
  border-radius: 20px;
  max-height: 573px;
}

.left {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.right {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #deec51;
  padding: 0 32px 0 32px;
  overflow: hidden;
  position: relative;
}

.right img {
  transform: translateY(100px);
}

.create_wallet {
  width: 173px;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #f5f5f5;
  border-radius: 20px 0 0 0;
  padding: 10px 5px 10px 10px;
}

.create_wallet p {
  padding: 0;
  opacity: 70%;
  font-size: 14px;
  color: black;
  text-align: right;
}

.circular {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -100px;
}

h1 {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 46px;
  line-height: 50px;
  letter-spacing: 0;
  color: #141414;
}

p {
  font-size: 19px;
  letter-spacing: 0;
  font-weight: 300;
  color: #5c5c5c;
}

.open {
  width: fit-content;
  background-color: #deec51;
  padding: 16px 24px;
  border-radius: 9px;
  color: black;
  display: flex;
  align-items: center;
  gap: 12px;
}

.tg {
  display: flex;
  align-items: center;
  gap: 12px;
  opacity: 70%;
}

.tg span {
  font-size: 18px;
  font-weight: 300;
  color: black;
}

/* Адаптивные стили */
@media (max-width: 1024px) {
  .block {
    flex-direction: column;
    gap: 20px;
  }

  .left,
  .right {
    width: 100%;
    padding: 40px 24px;
    max-height: none;
  }

  .right {
    min-height: 400px;
  }

  .right img {
    transform: translateY(80px);
    max-width: 80%;
  }

  .create_wallet {
    width: 150px;
  }

  h1 {
    font-size: 36px;
    line-height: 40px;
  }

  p {
    font-size: 17px;
  }

  .circular {
    position: relative;
    bottom: auto;
    margin: 40px auto 0;
  }
}

@media (max-width: 768px) {
  .left,
  .right {
    padding: 32px 20px;
    border-radius: 16px;
  }

  .left {
    gap: 24px;
  }

  .right img {
    transform: translateY(60px);
  }

  h1 {
    font-size: 28px;
    line-height: 32px;
  }

  p {
    font-size: 16px;
  }

  .open {
    padding: 14px 20px;
    font-size: 15px;
  }

  .tg span {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .left,
  .right {
    padding: 24px 16px;
  }

  .right {
    min-height: 300px;
  }

  .right img {
    transform: translateY(40px);
    max-width: 100%;
  }

  .create_wallet {
    width: 120px;
    padding: 8px;
  }

  .create_wallet p {
    font-size: 12px;
  }

  h1 {
    font-size: 24px;
    line-height: 28px;
  }

  p {
    font-size: 15px;
  }

  .open {
    padding: 12px 16px;
    font-size: 14px;
  }

  .open img {
    width: 16px;
    height: 16px;
  }

  .tg img {
    width: 20px;
    height: 20px;
  }

  .tg span {
    font-size: 14px;
  }
}
</style>
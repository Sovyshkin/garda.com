<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const messengers = ref([
  {
    image: "telegram",
    name: "Telegram",
  },
  {
    image: "telegram",
    name: "Telegram",
  },
]);
</script>

<template>
  <div class="block">
    <div class="left" data-aos="zoom-in-right" data-aos-anchor-placement="top-center">
      <div class="block-header">
        <h1>{{ t("block_10_text_h1") }}</h1>
        <p>{{ t("block_10_text_p") }}</p>
      </div>
      <div class="wrap-email">
        <span class="email-label">Email:</span>
        <span class="email-value">info@gardawallet.com</span>
      </div>
      <div class="messengers">
        <div class="messenger" v-for="item in messengers" :key="item.name">
          <img :src="`/assets/${item.image}.svg`" alt="" />
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
    <div class="right" data-aos="zoom-in-left" data-aos-anchor-placement="top-center">
      <img src="../../assets/block_9_3.png" alt="" />
    </div>
  </div>
</template>

<style scoped>
.block {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}

.block-header {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.left,
.right {
  width: 50%;
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
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

p {
  color: #5c5c5c;
  font-weight: 300;
}

h1 {
  font-size: 36px;
  line-height: 40px;
  text-transform: uppercase;
  font-weight: 700;
}

.wrap-email {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.email-label {
  color: #141414;
  font-weight: 300;
  opacity: 70%;
  font-size: 12px;
}

.email-value {
  font-weight: 500;
  color: #141414;
}

.messengers {
  display: flex;
  align-items: center;
  gap: 32px;
}

.messenger {
  display: flex;
  align-items: center;
  gap: 4px;
  opacity: 70%;
}

.messenger span {
  font-weight: 300;
  font-size: 18px;
}

/* Планшетная версия (768px - 1024px) */
@media (max-width: 1024px) {
  .block {
    gap: 24px;
  }
  
  h1 {
    font-size: 32px;
    line-height: 40px;
  }
  
  .left {
    gap: 24px;
  }
  
  .right {
    max-height: 400px;
  }
  
  .messenger span {
    font-size: 16px;
  }
}

/* Мобильная версия (до 768px) */
@media (max-width: 768px) {
  .block {
    flex-direction: column;
    gap: 32px;
  }
  
  .left,
  .right {
    width: 100%;
  }
  
  h1 {
    font-size: 28px;
    line-height: 32px;
  }
  
  .block-header {
    gap: 8px;
  }
  
  .left {
    gap: 24px;
  }
  
  .right {
    max-height: 350px;
  }
  
  .messengers {
    gap: 24px;
  }
}

/* Маленькие мобильные устройства (до 480px) */
@media (max-width: 480px) {
  h1 {
    font-size: 24px;
    line-height: 28px;
  }
  
  p {
    font-size: 14px;
  }
  
  .left {
    gap: 20px;
  }
  
  .right {
    max-height: 280px;
  }
  
  .messengers {
    flex-wrap: wrap;
    gap: 16px;
  }
  
  .messenger span {
    font-size: 14px;
  }
  
  .email-value {
    font-size: 14px;
  }
}
</style>
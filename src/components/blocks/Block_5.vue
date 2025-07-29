<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
<template>
  <div class="block">
    <div class="block-item" data-aos="zoom-in-right" data-aos-anchor-placement="top-center">
        <div class="wrap-img">
            <img src="../../assets/block_5_1.svg" alt="">
        </div>
        <div class="wrap-text">
            <h3>{{ t('block_5_text_h3_1') }}</h3>
            <p>{{ t('block_5_text_p_1') }}</p>
        </div>
    </div>
    <div class="block-item" data-aos="zoom-in-up" data-aos-anchor-placement="top-center">
        <div class="wrap-img">
            <img src="../../assets/block_5_2.svg" alt="">
        </div>
        <div class="wrap-text">
            <h3>{{ t('block_5_text_h3_2') }}</h3>
            <p>{{ t('block_5_text_p_2') }}</p>
        </div>
    </div>
    <div class="block-item" data-aos="zoom-in-left" data-aos-anchor-placement="top-center">
        <div class="wrap-img">
            <img src="../../assets/block_5_3.svg" alt="">
        </div>
        <div class="wrap-text">
            <h3>{{ t('block_5_text_h3_3') }}</h3>
            <p>{{ t('block_5_text_p_3') }}</p>
        </div>
    </div>
  </div>
</template>
<style scoped>
.block {
    width: 100%;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    gap: 12px;
    box-sizing: border-box;
}

.block-item {
    width: 32%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 48px;
    border-radius: 20px;
    padding: 24px;
}

.wrap-img {
    background-color: #DEEC51;
    padding: 12px;
    border-radius: 12px;
    width: fit-content;
    height: 56px;
    width: 56px;
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
}

p {
    color: #5C5C5C;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.4;
}

/* Планшеты (768px и меньше) */
@media (max-width: 768px) {
    .block {
        flex-wrap: wrap;
        gap: 16px;
    }
    
    .block-item {
        width: 48%;
        gap: 32px;
        padding: 20px;
    }
    
    .wrap-img {
        height: 48px;
        width: 48px;
        padding: 10px;
    }
    
    .wrap-img img {
        width: 28px;
        height: 28px;
    }
    
    h3 {
        font-size: 16px;
    }
    
    p {
        font-size: 15px;
    }
}

/* Мобильные устройства (480px и меньше) */
@media (max-width: 480px) {
    .block {
        flex-direction: column;
        gap: 12px;
    }
    
    .block-item {
        width: 100%;
        gap: 24px;
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
        font-size: 15px;
        line-height: 1.3;
    }
    
    p {
        font-size: 14px;
    }
    
    .wrap-text {
        gap: 8px;
    }
}

/* Очень маленькие мобильные (320px и меньше) */
@media (max-width: 320px) {
    .block-item {
        padding: 12px;
        border-radius: 12px;
    }
    
    .wrap-img {
        height: 40px;
        width: 40px;
    }
    
    h3 {
        font-size: 14px;
    }
    
    p {
        font-size: 13px;
    }
}
</style>
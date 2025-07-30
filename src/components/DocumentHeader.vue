<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const { t } = useI18n();
const route = useRoute();
const routeName = ref('')
if (route.name == 'aml') {
    routeName.value = t('policy_aml')
} else if (route.name == 'terms') {
    routeName.value = t('terms_of_use')
} else if (route.name == 'policy') {
    routeName.value = t('privacy_policy')
}
</script>

<template>
  <header>
    <div class="header-container">
      <img 
        class="logo" 
        @click="goHome('main')" 
        src="../assets/logo.svg" 
        alt="Logo" 
      />
      
      <h1>{{ routeName }}</h1>

      <div class="wallet-container">
        <a class="open" href="https://t.me/gardawallet_bot/app" target="_blank">{{ t("open_wallet") }}</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  height: 92px;
  background-color: #f5f5f5;
  position: fixed;
  z-index: 1000;
  transition: all 0.3s ease;
}

.header-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}

.logo {
  cursor: pointer;
  height: 40px;
  width: auto;
  z-index: 1001;
  flex-shrink: 0;
}

.wallet-container {
  flex-shrink: 0;
}

.open {
  background-color: #161213;
  padding: 16px 24px;
  border-radius: 9px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.open:hover {
  background-color: #333;
}

h1 {
    font-size: 18px;
}


/* Mobile styles */
@media (max-width: 1024px) {
  header {
    padding: 20px 24px;
    height: 72px;
  }

  .wallet-container {
    position: absolute;
    bottom: 80px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
  }

}

@media (max-width: 480px) {
  header {
    padding: 16px 20px;
    height: 64px;
  }

  .logo {
    height: 32px;
  }

  .open {
    padding: 12px 20px;
    font-size: 14px;
  }
}
</style>
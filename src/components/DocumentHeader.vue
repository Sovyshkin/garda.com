<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";

const { t } = useI18n();
const route = useRoute();
const router = useRouter()
const routeName = ref('')
if (route.name == 'aml') {
    routeName.value = t('policy_aml')
} else if (route.name == 'terms_of_use') {
    routeName.value = t('terms_of_use')
} else if (route.name == 'privacy_policy') {
    routeName.value = t('privacy_policy')
} else if (route.name == 'policy_cookie') {
  routeName.value = t('policy_cookie')
}

const goHome = () => {
  try {
    router.push({ name: 'main' })
  } catch (err) {
    console.log(err);
  }
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
  top: 0;
  left: 0;
  box-sizing: border-box;
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
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
}

.open:hover {
  background-color: #333;
}

h1 {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  text-align: center;
  flex: 1;
  padding: 0 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Планшеты (1024px и меньше) */
@media (max-width: 1024px) {
  header {
    padding: 16px 32px;
    height: 80px;
  }

  .logo {
    height: 36px;
  }

  h1 {
    font-size: 17px;
    padding: 0 12px;
  }

  .open {
    padding: 14px 20px;
    font-size: 15px;
  }
}

/* Планшеты (768px и меньше) */
@media (max-width: 768px) {
  header {
    padding: 14px 24px;
    height: 72px;
  }

  .logo {
    height: 32px;
  }

  h1 {
    font-size: 16px;
    padding: 0 8px;
  }

  .open {
    padding: 12px 16px;
    font-size: 14px;
  }
}

/* Телефоны (480px и меньше) */
@media (max-width: 480px) {
  header {
    padding: 12px 16px;
    height: 64px;
  }

  .logo {
    height: 28px;
  }

  h1 {
    font-size: 14px;
    padding: 0 6px;
    max-width: 160px;
  }

  .open {
    padding: 10px 14px;
    font-size: 12px;
    border-radius: 6px;
  }
}

/* Очень маленькие телефоны (360px и меньше) */
@media (max-width: 360px) {
  header {
    padding: 10px 12px;
    height: 60px;
  }

  .logo {
    height: 24px;
  }

  h1 {
    font-size: 13px;
    padding: 0 4px;
    max-width: 120px;
  }

  .open {
    padding: 8px 12px;
    font-size: 11px;
  }
}
</style>
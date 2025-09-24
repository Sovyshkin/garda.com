<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { t } = useI18n();
const activeTab = ref("main");
const router = useRouter();

const companies = ref([
  { id: "contacts", name: t("contacts") },
  { id: 'faq', name: t('block_8_text_h1') },
  { id: "blog", name: t("blog") },
  { id: "aboutCompany", name: t("about_company") },
]);

const documents = ref([
  // { id: "license", name: t("license") },
  { id: 'terms_of_use', name: t('terms_of_use') },
  { id: "privacy_policy", name: t("privacy_policy") },
  { id: "policy_aml", name: t("policy_aml") },
  { id: "policy_cookie", name: t("policy_cookie") },
]);

const messengers = ref([
  {
    image: "tg_footer",
    name: "@gardawallet_bot",
    href: 'https://t.me/gardawallet_bot?startapp='
  },
]);

const setActiveTab = (tabId) => {
  activeTab.value = tabId;
};

const goRoute = (name) => {
  try {
    router.push({name});
  } catch (err) {}
};

const scrollToBottom = (name) => {
  const element = document.getElementById(name);
  if (element) {
    window.scrollTo({ top: element.offsetTop - 100, behavior: "smooth" });
  } else {
    router.push({ name: "main" });
  }
};
</script>

<template>
  <footer>
    <div class="top">
      <div class="wrap-logo">
        <img
          class="logo"
          @click="goRoute('main')"
          src="../assets/logo_footer.svg"
          alt=""
        />
        <span>Apartment 55, Building 4/4, Chingiz <br> Aitmatov Avenue, Bishkek, Kyrgyz <br> Republic)</span>
      </div>
      <div class="footer-item">
        <h3>{{ t('documents') }}</h3>
        <nav>
          <li class="nav-item" @click="goRoute(item.id)" v-for="item in documents" :key="item.id">
            {{ item.name }}
          </li>
        </nav>
      </div>
      <div class="footer-item">
        <h3>{{ t('company') }}</h3>
        <nav>
          <li class="nav-item" @click="scrollToBottom(company.id)" v-for="company in companies" :key="company.id">
            {{ company.name }}
          </li>
        </nav>
      </div>
      <div class="footer-item">
        <h3>{{ t('messengers') }}</h3>
        <nav>
          <a class="nav-item" v-for="messenger in messengers" :key="messenger.id" :href="messenger.href" target="_blank">
            <img :src="`/assets/${messenger.image}.svg`" :alt="messenger.image">
            <span>{{ messenger.name }}</span>
          </a>
        </nav>
      </div>
    </div>
    <div class="border"></div>
    <div class="bottom">
      <span>{{ t("footer_text_2") }}</span>
      <span>© 2023—2025, Garda Wallet LLC</span>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: space-between;
  background-color: #141414;
}

.top {
  width: 90%;
  display: flex;
  justify-content: space-between;
  gap: 64px;
}

.border {
  background-color: #fff;
  opacity: 5%;
  height: 1px;
  width: 100%;
}

.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wrap-logo {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.footer-item, nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.logo {
  width: 141px;
  height: 40px;
  cursor: pointer;
}

h3 {
  font-weight: 500;
  color: #fff;
  font-size: 18px;
}

.nav-item, span {
  color: #5C5C5C;
  font-size: 14px;
  font-weight: 300;
  display: flex;
  align-items: center;
  gap: 12px;
  opacity: 70%;
}

.nav-item {
  cursor: pointer;
  transition: opacity 0.3s;
}

.nav-item:hover {
  opacity: 1;
}

/* Планшетная версия (768px - 1024px) */
@media (max-width: 1024px) {
  .top {
    width: 100%;
    gap: 40px;
  }
  
  footer {
    padding: 32px 24px;
  }
  
  .wrap-logo {
    gap: 16px;
  }
  
  .footer-item, nav {
    gap: 10px;
  }
}

/* Мобильная версия (до 768px) */
@media (max-width: 768px) {
  .top {
    flex-wrap: wrap;
    gap: 32px;
  }
  
  .wrap-logo {
    width: 100%;
    order: 1;
  }
  
  .footer-item {
    width: calc(50% - 16px);
    order: 2;
  }
  
  footer {
    padding: 20px;
    gap: 24px;
  }
  
  .bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .nav-item, span {
    font-size: 13px;
  }
  
  h3 {
    font-size: 16px;
  }
}

/* Маленькие мобильные устройства (до 480px) */
@media (max-width: 480px) {
  .top {
    gap: 24px;
  }
  
  .footer-item {
    width: 100%;
  }
  
  .footer-item:nth-child(2) {
    order: 2;
  }
  
  .footer-item:nth-child(3) {
    order: 4;
  }
  
  .footer-item:nth-child(4) {
    order: 3;
  }
  
  footer {
    padding: 20px;
    gap: 20px;
  }
  
  .logo {
    width: 120px;
    height: 34px;
  }
  
  h3 {
    font-size: 15px;
  }
  
  .nav-item, span {
    font-size: 12px;
    gap: 8px;
  }
  
  .wrap-logo span {
    font-size: 12px;
  }
  
  .bottom span {
    font-size: 12px;
  }
}
</style>
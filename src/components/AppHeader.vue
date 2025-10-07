<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { t } = useI18n();
const router = useRouter();
const isMenuOpen = ref(false);
const isMobile = ref(false);

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 1024;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const scrollToBottom = (name) => {
  const element = document.getElementById(name);
  if (element) {
    window.scrollTo({ top: element.offsetTop - 100, behavior: "smooth" });
  } else {
    router.push({ name: "main" });
  }
  isMenuOpen.value = false;
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScreenSize);
});
</script>

<template>
  <header :class="{ 'menu-open': isMenuOpen }">
    <div class="header-container">
      <img 
        class="logo" 
        @click="scrollToBottom('main')" 
        src="../assets/logo.svg" 
        alt="Logo" 
      />
      
      <nav :class="{ active: isMenuOpen }">
        <ul class="nav-list">
          <li class="nav-item" @click="scrollToBottom('contacts')">
            {{ t("contacts") }}
          </li>
          <li class="nav-item" @click="scrollToBottom('blog')">
            {{ t("blog") }}
          </li>
          <li class="nav-item" @click="scrollToBottom('faq')">
            {{ t("block_8_text_h1") }}
          </li>
          <a class="open" href="https://t.me/gardawallet_bot?startapp=" target="_blank">{{ t("open_wallet") }}</a>
        </ul>
      </nav>

      <div class="wallet-container">
        <a class="open" href="https://t.me/gardawallet_bot?startapp=" target="_blank">{{ t("open_wallet") }}</a>
      </div>

      <button 
        class="hamburger" 
        @click="toggleMenu"
        :aria-expanded="isMenuOpen"
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
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
  height: 50px;
  width: auto;
  z-index: 1001;
  flex-shrink: 0;
}

nav {
  display: flex;
  flex-grow: 1;
  justify-content: center;
}

nav a {
  display: none;
}

.nav-list {
  display: flex;
  gap: 48px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  color: black;
  font-size: 15px;
  line-height: 100%;
  letter-spacing: 0;
  font-weight: 400;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
}

.nav-item:hover {
  color: #555;
}

.nav-item::after {
  margin-top: 2px;
  background-color: #141414;
  display: block;
  content: "";
  height: 2px;
  width: 0%;
  transition: width 0.4s ease-in-out;
}

.nav-item:hover::after,
.nav-item:focus::after {
  width: 100%;
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

.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1001;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background-color: #000;
  margin: 5px 0;
  transition: all 0.3s ease;
}

/* Mobile styles */
@media (max-width: 1024px) {
  header {
    padding: 20px 24px;
    height: 72px;
  }

  .hamburger {
    display: block;
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #f5f5f5;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    z-index: 1000;
  }

  nav a {
    display: block;
  }

  nav.active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  .nav-list {
    flex-direction: column;
    gap: 32px;
    align-items: center;
  }

  .wallet-container {
    position: absolute;
    bottom: 80px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
  }

  /* Hamburger animation */
  .menu-open .hamburger span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  .menu-open .hamburger span:nth-child(2) {
    opacity: 0;
  }

  .menu-open .hamburger span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
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

  .nav-item {
    font-size: 14px;
  }

  .open {
    padding: 12px 20px;
    font-size: 14px;
  }
}
</style>
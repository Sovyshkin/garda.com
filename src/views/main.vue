<script setup>
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
import AppHeader from "@/components/AppHeader.vue";
import Block_1 from "@/components/blocks/Block_1.vue";
import Block_2 from "@/components/blocks/Block_2.vue";
import Block_3 from "@/components/blocks/Block_3.vue";
import Block_4 from "@/components/blocks/Block_4.vue";
import Block_5 from "@/components/blocks/Block_5.vue";
import Block_6 from "@/components/blocks/Block_6.vue";
import Block_7 from "@/components/blocks/Block_7.vue";
import Block_8 from "@/components/blocks/Block_8.vue";
import Block_9 from "@/components/blocks/Block_9.vue";
import Block_10 from "@/components/blocks/Block_10.vue";
import AppFooter from "@/components/AppFooter.vue";

const { t } = useI18n();

onMounted(() => {
  setTimeout(() => {
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, 100);
});
</script>
<template>
  <AppHeader />
  <main>
    <Block_1 class="block_1" id="main" />
    <Block_2 />
    <Block_3 />
    <Block_4 />
    <Block_5 />
    <Block_2 />
    <Block_6 />
    <Block_7 />
    <Block_8 />
    <Block_9 id="blog" />
    <Block_10 id="contacts" />
  </main>
  <AppFooter />
</template>
<style scoped>
main {
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding-top: 100px;
}

.block_1 {
  margin-bottom: 100px;
}

@media (max-width: 768px) {
  main {
    padding: 0 20px;
    padding-top: 80px;
  }

  .block_1 {
    margin-bottom: 0;
  }
}
</style>

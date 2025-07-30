<script setup>
import DocumentHeader from '@/components/DocumentHeader.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
<template>
    <DocumentHeader/>
    <div class="document">Privacy Policy</div>
</template>
<style scoped>
.document {
    padding-top: 100px;
}
</style>
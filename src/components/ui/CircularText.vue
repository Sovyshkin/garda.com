<template>
  <div class="circular-text-container">
    <div class="rotation-wrapper">
      <img class="circular-text" src="../../assets/circular-text.png" alt="">
    </div>
    <img class="arrow" src="../../assets/arrow-down.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'CircularText'
}
</script>

<style scoped>
.circular-text-container {
  width: 180px;
  height: 180px;
  position: relative;
  background-color: #f5f5f5;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rotation-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: rotate 12s linear infinite;
  z-index: 2;
}

.circular-text {
  width: 90%; /* Уменьшаем немного размер */
  height: 90%;
  object-fit: contain;
  transform-origin: center center; /* Важно: вращение вокруг центра */
}

.arrow {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Современный способ центрирования */
  pointer-events: none;
  z-index: 23;
  cursor: pointer;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
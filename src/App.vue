<template>
  <div class="p-20" style="overflow: hidden;">
    <router-view>

    </router-view>
    <router-link to="/a" class="mr-20">Page A</router-link>
    <router-link to="/b">Page B</router-link>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@import "@/assets/base.css";

.v-enter-active {
  animation: smallToBig 1s both;
}

.fade-right-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.fade-right-enter-active,
.fade-right-leave-active {
  transition: all .3s;
}

.fade-right-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}

.fade-circle-leave-to {
  transform: translateX(20px) rotateY(180deg);
  opacity: 0;
}

.fade-circle-enter-active,
.fade-circle-leave-active {
  transition: all .3s;
}

.fade-circle-enter-from {
  transform: translateX(-20px) rotateY(-180deg);
  opacity: 0;
}

@keyframes smallToBig {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    transform: scale(6);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.success {
  background-color: #7bed9f;
  transition : 1s ease-in-out;
}

</style>
<template>
  <div class="p-20" style="overflow: hidden;">
    <div class="d-flex flex-row align-items-center p-20">
      <router-view v-slot="{ Component }">
        <Transition mode="out-in">
          <Component :is="Component" />
        </Transition>
      </router-view>
    </div>
    <router-link to="/a#test" class="mr-20">Page A</router-link>
    <router-link to="/b/1">User 1</router-link>
    <router-link to="/b/2">User 2</router-link>

  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@import "@/assets/base.css";

.v-enter-from {
  transform: scale(0) rotate(-360deg);
  opacity: 0;
}

.v-leave-to {
  transform: scale(1.1) rotate(360deg);
  opacity: 0;
}

.v-leave-active,
.v-enter-active {
  transition: all 0.5s;
}

</style>
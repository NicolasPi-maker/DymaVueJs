<template >
  <div class="container">
    <button @click="displayBlog = !displayBlog">{{ displayBlog ? 'Cacher' : 'Montrer' }}</button>
    <LazyBlog v-if="displayBlog"/>
  </div>
</template>

<script setup lang="ts">
import {defineAsyncComponent, ref} from "vue";
import Loader from "@/Loader.vue";

  const displayBlog = ref(false);

  const LazyBlog = defineAsyncComponent({
    loader:() => import('@/Blog.vue'),
    loadingComponent: Loader,
  });
</script>

<style lang="scss">
@import 'primevue/resources/themes/lara-light-teal/theme.css';
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
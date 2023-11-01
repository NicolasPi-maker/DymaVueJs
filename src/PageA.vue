<template>
  <div>
    <h1>Page A</h1>
    <pre>
      {{ route }}
    </pre>
  </div>
</template>

<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";

  const route = useRoute();
  const router = useRouter();

  setTimeout(() => {
    router.push({
      name: 'a',
      params: {
        userId: 123
      }
    })
  }, 2000);
</script>

<style scoped>

</style>
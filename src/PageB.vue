<template>
  <div>
    <h1>Page B</h1>
    <input type="text" v-model="value">
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const { value } = ref('');
</script>

<style scoped>

</style>

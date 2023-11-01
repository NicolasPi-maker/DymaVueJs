<template>
  <div>
    <h1>Page B2</h1>
    <label for="confirmChange">Cochez la case pour pouvoir changer de page</label>
    <input type="checkbox" v-model="isChecked" :checked="isChecked" id="confirmChange">
  </div>
</template>

<script setup lang="ts">
  import {ref} from "vue";
  import {onBeforeRouteLeave} from "vue-router";

  const isChecked = ref(false);

  onBeforeRouteLeave((to) => {
    if (!isChecked.value) {
      return false;
    }
  })

</script>

<style scoped>

</style>
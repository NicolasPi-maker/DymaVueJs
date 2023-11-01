<template>
  <div>
    <div v-if="state.user">
      <h2>{{ state.user.name }}</h2>
    </div>
    <div v-else>
      <h2>Chargement...</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive, watchEffect} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const state = reactive<{
  user : any,
}>({
  user: null,
});

watchEffect(async() => {
  if(!route.params.userId) {
    state.user = null;
  } else {
    state.user = await (await fetch(`https://jsonplaceholder.typicode.com/users/${route.params.userId}`)).json();
  }
})

</script>

<style scoped>

</style>

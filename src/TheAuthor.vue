<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ author.lastName}} {{ author.name }} - {{ author.age }} ans</h2>
    <p>Anniversaire : {{ author.birthday }}</p>
  </div>
</template>

<script setup lang="ts">
import {inject} from "vue";
import {authorKey} from "@/provideKeys";

const title = inject('title');
const {author, updateBirthday} = inject( authorKey );

setTimeout(() => {
  updateBirthday('2000-07-08');
}, 2000);

</script>

<style lang="scss" scoped>

</style>
<template>
  <h1 v-bind=style>Bonjour {{ user.name }}</h1>
  <div class="countWrapper">
    <h2>count : {{ count }}</h2>
    <button class="btn" @click="addCount">Add</button>
  </div>
  <article>
    <h2>Product</h2>
    <p>Name : {{ product.name }}</p>
    <p>Quantity : {{ product.quantity }}</p>
    <p>Price HT : {{ getTotalPriceHT }}</p>
    <p>Price TTC : {{ getTotalPriceTTC }}</p>
    <p>Last Modification : {{ product.lastModification }}</p>
  </article>
  <input type="number" v-model.lazy="product.quantity">
</template>

<script setup lang="ts">
import {computed, reactive, ref, watch, watchEffect} from "vue";

  const names = ['John', 'Jane', 'Jack', 'Jill', 'Jerome', 'Jenny', 'Jules', 'Jade', 'Jude', 'Jasmine'];
  const style: object = {
    'class': 'title',
    'id': '124',
  };

  const state = reactive({
    user : {
      name: 'John',
      age: 30,
    },
    product : {
      name: 'Boots',
      quantity: 10,
      priceHT: 33.33,
      numberOfModification: 0,
      lastModification: null,
    },
  });

  let count = ref(0);

  const {user, product} = state;
  const addCount = () => {
    count.value++;
    let newIndex = getRandomIndexFromArray(names);
    user.name = names[newIndex];
  };

  const getRandomIndexFromArray = (array: Array<any>) => {
    return Math.abs(Math.round(Math.random() * array.length -1));
  };

  const getTotalPriceHT = computed(() => Math.round(product.quantity * product.priceHT));
  const getTotalPriceTTC = computed(() => Math.round(getTotalPriceHT.value * 1.2));

  watch(() => [product.quantity, product.priceHT], (newValue, oldValue) => {
    product.numberOfModification++;
  });

  watchEffect(() => {
    product.lastModification = new Date().toLocaleString();
  });

</script>

<style>
  @import "src/assets/main.css";
</style>
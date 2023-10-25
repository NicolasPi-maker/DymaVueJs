<template>
  <h1 v-bind=style :class="{
    'switch-color': input.switchColor,
  }">Bonjour {{ user.name }}</h1>
  <div class="count-wrapper">
    <h2>count : {{ count }}</h2>
    <button class="btn" :class="{
      'switch-color': input.switchColor,
    }" @click="input.switchColor = !input.switchColor">Switch</button>
  </div>
  <article v-if="toggle">
    <h2>Product</h2>
    <p>Name : {{ product.name }}</p>
    <p>Quantity : {{ product.quantity }}</p>
    <p>Price HT : {{ getTotalPriceHT }}</p>
    <p>Price TTC : {{ getTotalPriceTTC }}</p>
    <p>Last Modification : {{ product.lastModification }}</p>
  </article>
    <input type="number" v-model.lazy="product.quantity">
  <div>
    <label for="input">Input texte {{ input.value.length }}</label>
    <input class="input" name="input" id="input" @focus="input.focus = true" @blur="input.focus = false" type="text" v-model="input.value" v-bind:class="setCheckLengthInput">
  </div>
  <p class="user-helper" v-bind:class="setCheckLengthInput">La longeur de la saisie doit être comprise entre 5 et 10 caractères.</p>
  <button @click="toggle = !toggle">Toggle</button>


</template>

<script setup lang="ts">
import {computed, reactive, ref, watch, watchEffect} from "vue";

  let toggle = ref(true);
  const names = ['John', 'Jane', 'Jack', 'Jill', 'Jerome', 'Jenny', 'Jules', 'Jade', 'Jude', 'Jasmine'];
  const style: object = {
    'class': 'title',
    'id': '124',
  };

  const input = reactive({
    value: '',
    focus: false,
    switchColor: true,
  })

  const setCheckLengthInput = computed(() => {
    return {
      inputOnGoing : computed(() => input.value.length > 0 && input.focus).value,
      checkInputLength : computed(() => input.value.length > 5 && input.value.length < 10 && input.focus).value,
      warningInputTooLong : computed(() => input.value.length >= 10 && input.focus).value,
    }
  })

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

<style lang="scss">
  @import "./assets/main.css";
  @import "./assets/style.scss";
</style>
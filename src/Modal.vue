<template>
  <button @click="open = !open" class="btn btn-primary">Confirmer l'achat</button>
  <div v-if="open" @click.stop="open = !open" class="calc d-flex flex-row justify-content-center align-items-center">
    <div class="modal-container" @click.stop>
      <h3>Confirmation de votre commande</h3>
      <ul>
        <li>Test</li>
        <li>Test2</li>
      </ul>
      <button @click.stop="open = !open" class="btn btn-primary">Confirmer la commande</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const open = ref(false);
</script>

<style scoped>
@import "@/assets/base.css";

.calc {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,.5);
}

.modal-container {
  background-color: white;
  border-radius: var(--border-radius);
  border: var(--border);
  padding: 30px;
}
</style>
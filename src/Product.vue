<template>
  <div class="product">
    <h2 :style="{fontSize : props.fontSize + 'px'}">{{ title }}</h2>
    <p>{{ description }}</p>
    <Button label="primary" severity="primary" rounded style="font-size: 10px; margin-right: 10px" @click="grow(10)">Faire grossir le titre</Button>
    <Button label="primary" severity="primary" rounded style="font-size: 10px" @click="emit('smaller', 5)">Réduire le titre</Button>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title: string;
    description: string;
    fontSize: number;
  }>();

  const grow = (inc: number) => {
    emit('bigger', inc);
  }

  const emit = defineEmits<{
    (event: 'bigger', inc: number): void,
    (event: 'smaller', inc: number): void
  }>();
</script>

<style lang="scss">
  @import "./assets/main.css";
  @import "./assets/style.scss";
</style>
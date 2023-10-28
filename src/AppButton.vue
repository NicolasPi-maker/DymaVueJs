<template>
  <div class="btn-wrapper">
    <button class="button-style">
      <slot>Lire</slot>
    </button>
  </div>
</template>

<script lang="ts">

</script>

<style lang="scss" scoped>
  .button-style {
    background-color : white;
    border : 1px solid #ddd;
    padding: 8px 30px;
    border-radius: 4px;
    font-weight: 700;
  }

  .btn-wrapper {
    display: flex;
    justify-content: flex-end;
  }
</style>
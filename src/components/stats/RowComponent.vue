<template>
  <section class="container">
    <div class="column left"><slot name="title" /></div>
    <div class="column"><slot name="count" /></div>
    <div class="column details"><slot name="details" /></div>
    <div class="column right"><slot name="action" /></div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>

<style lang="scss" scoped>
.container {
  @include grid-box(repeat(4, minmax(0, 1fr)));
  @include sm-screen {
    @include grid-box(repeat(2, minmax(0, 1fr)));
    grid-gap: 1rem;
  }
  padding: 1rem 2rem;

  .column {
    @include flex-box(column, center, center);
  }

  .details {
    opacity: 0.5;
  }

  .left {
    justify-self: flex-start;
  }

  .right {
    justify-self: flex-end;
  }

  button {
    background-color: black;
  }
}
</style>

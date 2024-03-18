<template>
  <div class="loader-container">
    <v-progress-circular
      indeterminate
      :color="color"
      size="64"
    ></v-progress-circular>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    color: {
      type: String,
      default: 'black',
    },
  },
});
</script>

<style lang="scss" scoped>
.loader-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>

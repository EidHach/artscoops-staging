<template>
  <div class="nav-header">
    <img v-if="image" :src="image" alt="Logo" />
    <div>
      <h1>CMS</h1>
      <h3>V. {{ projectVersion }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    image: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      projectVersion: process.env.VUE_APP_VERSION,
    };
  },
});
</script>

<style lang="scss" scoped>
.nav-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 7rem;

  img {
    width: 5rem;
    height: 5rem;
    border: 1px solid black;
    border-radius: 50%;
  }
}
</style>

<template>
  <MainLayout>
    <div class="header">
      <h4>OFFERS TO BE REVIEWED</h4>
    </div>
    <v-divider></v-divider>
    <div class="btns-wrapper">
      <button type="button">
        <v-icon icon="mdi-refresh" style="color: #fff"></v-icon>
        View Pending
      </button>
      <button type="button">
        <v-icon icon="mdi-check"></v-icon>
        View Approved
      </button>
      <button type="button">
        <v-icon icon="mdi-close"></v-icon>
        View Declined
      </button>
    </div>
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainLayout from '@/layout/MainLayout.vue';

export default defineComponent({
  components: { MainLayout },
  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.header {
  margin: 1rem 0 0 1rem;
  min-height: 3rem;
}

.btns-wrapper {
  display: flex;
  align-items: center;
  margin: 1rem 0 0 1rem;
  gap: 1rem;

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    background-color: #000;
    padding: 0.5rem;

    i {
      margin-right: 0.3rem;
    }
  }
}
</style>

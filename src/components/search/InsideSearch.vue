<template>
  <div class="container">
    <button v-if="button === 'Add Artist'" type="button" @click="emitShowPopup">
      {{ button }}
    </button>
    <router-link
      to="artworks/new"
      v-else-if="button === 'Add Artwork'"
      type="button"
    >
      {{ button }}
    </router-link>
    <router-link
      to="/shows/add"
      v-else-if="button === 'Add Show'"
      type="button"
    >
      {{ button }}
    </router-link>
    <input
      type="text"
      placeholder="Search..."
      v-model="search"
      @input="emitSearch"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    button: String,
  },
  data() {
    return {
      search: '',
      show: false,
    };
  },
  methods: {
    emitSearch() {
      this.$emit('search', this.search);
    },
    emitShowPopup() {
      this.$emit('popup', this.show);
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;

  button,
  a {
    background-color: #000;
    color: #fff;
    padding: 0.5rem;
    margin-left: 1rem;
    text-decoration: none;
    text-align: center;
  }

  input {
    border: 1px solid black;
    padding: 0.3rem;
    margin-right: 1rem;
  }
}
</style>

<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              v-model="currentPageNumber"
              class="my-4"
              :length="totalPages"
              @click="pageChanged"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    data: {
      type: Number,
      required: true,
    },
    pageSize: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      currentPageNumber: this.currentPage,
    };
  },
  computed: {
    totalPages(): number {
      return Math.ceil(this.data / this.pageSize);
    },
  },
  methods: {
    pageChanged() {
      this.$emit('page-changed', this.currentPageNumber);
    },
  },
});
</script>

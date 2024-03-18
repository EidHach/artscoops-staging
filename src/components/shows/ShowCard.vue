<template>
  <div class="container">
    <div class="info">
      <img
        :src="
          exhibition.image !== null &&
          (exhibition.image.medium !== null ||
            exhibition.image.original !== null)
            ? exhibition.image.medium || exhibition.image.original
            : require('@/assets/imgs/avatar.png')
        "
        :alt="exhibition.title"
      />
      <h3>{{ exhibition.title }}</h3>
    </div>
    <div class="info column">
      <p class="list-item">
        <span v-if="exhibition.active">Online</span>
        <span v-else>Offline</span>
      </p>
    </div>
    <div v-if="draggable" class="info column">
      <v-icon
        icon="mdi-delete"
        style="
          color: white;
          background-color: black;
          padding: 1rem;
          cursor: pointer;
        "
        @click="deleteShow"
      />
    </div>
    <div class="info column">
      <router-link class="link" :to="`/shows/${exhibition.id}`"
        >Edit Show</router-link
      >
    </div>
    <div v-if="draggable" class="arrows">
      <v-icon icon="mdi-arrow-up-bold" @click="moveUp" />
      <v-icon icon="mdi-arrow-down-bold" @click="moveDown" />
    </div>
  </div>
  <v-divider></v-divider>
</template>

<script lang="ts">
import { GalleryShowsItem } from '@/dataTypes/types';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    exhibition: {
      type: Object as PropType<GalleryShowsItem>,
      required: true,
    },
    draggable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    deleteShow() {
      this.$emit('delete', this.exhibition.id);
    },
    moveUp() {
      this.$emit('moveUp', this.exhibition.id);
    },
    moveDown() {
      this.$emit('moveDown', this.exhibition.id);
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  @include grid-box(repeat(4, minmax(0, 1fr)) 0.5fr);
  @include sm-screen {
    @include flex-box(column, center, center);
    gap: 1rem;
  }
  padding: 1rem 2rem;

  .info {
    @include flex-box(row, flex-start, center);
    @include sm-screen {
      @include flex-box(column, center, center);
      gap: 1rem;
    }
    gap: 2rem;

    img {
      width: 150px;
      height: 150px;
      object-fit: scale-down;
      border: 1px solid $main-color;
    }

    .list-item {
      @include flex-box(row, space-between);
      @include sm-screen {
        @include flex-box(column, center, center);
      }
      min-width: 6rem;
    }
  }

  .column {
    @include flex-box(column, center);
  }

  .link {
    background-color: $main-color;
    color: $secondary-color;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }

  div > .link {
    align-self: flex-end;
  }

  .arrows {
    @include flex-box(column, center, center);
    @include sm-screen {
      @include flex-box(row, center, center);
    }
    gap: 1rem;

    & > * {
      cursor: pointer;
    }
  }
}
</style>

<template>
  <div style="cursor: grab" v-if="artwork?.title" class="container">
    <div class="data-wrapper start">
      <img
        :src="
          artwork.image &&
          (artwork.image.medium !== null || artwork.image.original !== null)
            ? artwork.image.medium || artwork.image.original
            : require('@/assets/imgs/avatar.png')
        "
        :alt="artwork?.title"
      />
      <div>
        <p>{{ artwork.artist.full_name }}</p>
        <p>{{ artwork.title }}</p>
      </div>
    </div>
    <div class="data-wrapper mid">
      <div v-if="artwork.active">
        <v-icon icon="mdi-circle-medium" style="color: green; padding: 1rem" />
        <span>Online</span>
      </div>
      <div v-else>
        <v-icon icon="mdi-circle-medium" style="color: red; padding: 1rem" />
        <span>Offline</span>
      </div>
    </div>
    <div class="data-wrapper end">
      <v-icon
        v-if="role === 'gallery' && draggable"
        icon="mdi-content-copy"
        style="
          color: white;
          background-color: black;
          padding: 1.3rem;
          cursor: pointer;
        "
        @click="() => duplicateArtwork(artwork)"
      />
      <v-icon
        v-if="draggable"
        icon="mdi-pencil"
        style="
          color: white;
          background-color: black;
          padding: 1.3rem;
          cursor: pointer;
        "
        @click="() => $router.push(`/artworks/${artwork.id}`)"
      />
      <router-link class="link" :to="`/artworks/${artwork.id}`"
        >Edit Artwork</router-link
      >
      <button
        v-if="draggable"
        @click="displayArtworkImages(artwork.id)"
        type="button"
      >
        Add Images
      </button>
    </div>
    <div v-if="draggable" class="arrows">
      <v-icon icon="mdi-arrow-up-bold" @click="moveUp" />
      <v-icon icon="mdi-arrow-down-bold" @click="moveDown" />
    </div>
  </div>
  <v-divider></v-divider>
</template>

<script lang="ts">
import { ArtworksRecord } from '@/dataTypes/types';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    artwork: {
      type: Object as PropType<ArtworksRecord>,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    draggable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    duplicateArtwork(artwork: ArtworksRecord) {
      this.$emit('duplicate', artwork.id);
    },
    displayArtworkImages(id: number) {
      this.$emit('display-images', id);
    },
    moveUp() {
      this.$emit('moveUp', this.artwork.id);
    },
    moveDown() {
      this.$emit('moveDown', this.artwork.id);
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  @include grid-box(repeat(3, minmax(0, 1fr)) 0.5fr);
  @include sm-screen {
    @include flex-box(column);
  }
  padding: 1rem 2rem;

  .data-wrapper {
    @include flex-box(null, null, center);
    @include sm-screen {
      @include flex-box(column, center, center);
    }
    gap: 1rem;

    img {
      width: 200px;
      height: 200px;
    }
  }

  .start {
    gap: 2rem;
  }

  .mid {
    justify-content: center;
  }

  .end {
    justify-content: flex-end;
    @include sm-screen {
      @include flex-box(row, center, center);
      margin: 1rem 0;
    }
  }

  .link,
  button {
    background-color: $main-color;
    color: $secondary-color;
    text-decoration: none;
    padding: 0.5rem 1rem;

    @include sm-screen {
      padding: 0.2rem 0.2rem;
      text-align: center;
    }
  }

  .arrows {
    @include flex-box(column, center, center);
    @include sm-screen {
      @include flex-box(row);
    }
    gap: 1rem;

    & > * {
      cursor: pointer;
    }
  }
}
</style>

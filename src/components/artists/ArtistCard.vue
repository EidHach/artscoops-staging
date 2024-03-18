<template>
  <div class="container">
    <div class="info artist">
      <img
        :src="
          artist.image !== null &&
          (artist.image.medium !== null || artist.image.original !== null)
            ? artist.image.medium || artist.image.original
            : require('@/assets/imgs/avatar.png')
        "
        :alt="artist.full_name"
      />
      <h3>{{ artist.full_name }}</h3>
    </div>
    <div class="info column">
      <p class="list-item">
        Artworks <span>{{ artist.artworks.total }}</span>
      </p>
      <p class="list-item">
        Online <span>{{ artist.artworks.live }}</span>
      </p>
      <p class="list-item">
        Pending
        <span>{{ artist.artworks.pending }}</span>
      </p>
      <p class="list-item">
        Likes
        <span>{{ artist.likes_analytics.total_count }}</span>
      </p>
    </div>
    <div v-if="draggable" class="info column">
      <v-icon
        icon="mdi-delete"
        style="
          color: white;
          background-color: black;
          padding: 1.3rem;
          cursor: pointer;
        "
        @click="emitDeleteArtist"
      />
    </div>
    <div class="info column">
      <router-link class="link" :to="`/artists/${artist.id}`"
        >Edit Artist</router-link
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
import { ArtistItem } from '@/dataTypes/types';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    artist: {
      type: Object as PropType<ArtistItem>,
      required: true,
    },
    draggable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    emitDeleteArtist() {
      this.$emit('delete', this.artist.id);
    },
    moveUp() {
      this.$emit('moveUp', this.artist.id);
    },
    moveDown() {
      this.$emit('moveDown', this.artist.id);
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  @include grid-box(repeat(4, minmax(0, 1fr)) 0.5fr);
  padding: 1rem 2rem;
  @include sm-screen {
    @include flex-box(column, center, center);
  }

  .artist {
    gap: 2rem;
  }

  .info {
    @include flex-box(row, flex-start, center);
    @include sm-screen {
      @include flex-box(column, center, center);
    }

    img {
      width: 10rem;
      height: 10rem;
      @include sm-screen {
        width: 7rem;
        height: 7rem;
      }
    }

    .list-item {
      min-width: 6rem;
      @include flex-box(row, space-between);
      @include sm-screen {
        min-width: 10rem;
      }
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
    @include sm-screen {
      margin: 1rem 0;
    }
  }

  div > .link {
    align-self: flex-end;
  }

  .arrows {
    @include flex-box(column, center, center);
    gap: 1rem;
    @include sm-screen {
      @include flex-box(row);
    }

    & > * {
      cursor: pointer;
    }
  }
}
</style>

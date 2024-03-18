<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <button class="modal-default-button" @click="$emit('close')">
            x
          </button>
          <div class="modal-header">
            <h3>Search for the artist you'd like to add.</h3>
          </div>
          <div class="modal-body">
            <input
              type="text"
              placeholder="Artist name"
              :value="search"
              @input="updateSearch"
            />
          </div>
          <div class="modal-footer">
            <button class="btn" type="button" @click="searchArtists(search)">
              SEARCH
            </button>
          </div>
          <div class="data-container">
            <p class="info">
              If the artist you are searching for is not listed, please go to
              Add Artist. If you would like to edit the spelling of the name of
              an existing artist, please contact ArtScoops’ team
            </p>
            <div
              class="artists-list"
              v-for="artist in allArtists"
              :key="artist.id"
            >
              <span>{{ artist.full_name }}</span>
              <button
                v-if="galleryArtists"
                :disabled="isArtistInGallery(artist)"
                @click="addArtist(artist.id)"
              >
                ADD
              </button>
            </div>
            <div>
              <p>Didn't find who you're looking for ?</p>
              <button class="btn" @click="$router.push('artists/new')">
                ADD NEW ARTIST
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
import { ArtistItem, GallerySystemArtist } from '@/dataTypes/types';
import { useGalleryStore } from '@/store/GalleriesStore';
import { defineComponent, PropType } from 'vue';
import { debounce } from 'lodash';

export default defineComponent({
  props: {
    show: Boolean,
    galleryArtists: [] as PropType<ArtistItem[]>,
  },
  data() {
    const galleryStore = useGalleryStore();
    return {
      galleryStore,
      search: '',
      allArtists: [] as GallerySystemArtist[],
      searchTimeout: 0,
    };
  },
  async created() {
    this.allArtists = await this.galleryStore.getAllArtists({
      limit: 100,
      offset: 0,
      keyword: this.search,
    });
  },
  methods: {
    isArtistInGallery(artist: GallerySystemArtist): boolean {
      if (!this.allArtists || !this.galleryArtists) {
        return false;
      }
      const artistNames = this.allArtists.map((artist) => artist.full_name);
      return (
        artistNames.includes(artist.full_name) &&
        this.galleryArtists.some(
          (artistItem) => artistItem.full_name === artist.full_name
        )
      );
    },
    async searchArtists(keyword: string) {
      this.allArtists = await this.galleryStore.getAllArtists({
        limit: 100,
        offset: 0,
        keyword,
      });
    },
    updateSearch(event: Event) {
      this.search = (event.target as HTMLInputElement)?.value;
      this.debouncedSearchArtists();
    },
    // if you have a better way to achieve this please apply it.
    debouncedSearchArtists: debounce(function (this: any) {
      if (this.search) {
        this.searchArtists(this.search);
      }
    }, 1000),
    async addArtist(id: number) {
      this.$emit('add-artist', id);
    },
  },
});
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  @include flex-box();
  vertical-align: sub;
  margin-top: 3rem;
}

.modal-container {
  width: 500px;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  @include sm-screen {
    width: 90%;
  }
}

.modal-footer {
  margin-bottom: 1rem;
}

.modal-header h3 {
  margin-top: 0;
  @include sm-screen {
    font-size: 1rem;
  }
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
  @include sm-screen {
    font-size: 2rem;
    margin-left: 3rem;
  }
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

input {
  width: 100%;
  border: 1px solid $main-color;
  padding: 0.3rem 1rem;
}

.btn {
  background-color: $main-color;
  color: #fff;
  width: 100%;
  padding: 0.3rem 1rem;
}

.data-container {
  overflow: scroll;
  max-height: 70vh;
  @include sm-screen {
    max-height: 60vh;
  }

  .info {
    margin: 1rem 0;
  }
}

.artists-list {
  @include flex-box(row, space-between, center);
  border: 1px solid $gray;

  button {
    background-color: $main-color;
    color: $secondary-color;
    padding: 0 1rem;
  }

  button[disabled] {
    background-color: $gray;
    text-decoration: line-through;
  }
}
</style>

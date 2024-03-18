<template>
  <MainLayout>
    <section class="main-container">
      <h5>THE FIELDS MARKED WITH (*) ARE REQUIRED.</h5>
      <form>
        <div v-if="role === 'gallery'" class="input-container">
          <label>ARTIST*</label>
          <select v-model="artistId" required>
            <option :value="artist" selected>
              {{ artist }} {{ artistId }}
            </option>
            <option
              v-for="artist in artists"
              :key="artist.id"
              :value="artist.id"
            >
              {{ artist.full_name }}
            </option>
          </select>
        </div>
        <div class="website title">
          <label>TITLE*</label>
          <input type="text" placeholder="Title" v-model="title" />
        </div>
        <div class="input-container">
          <label>ART CATEGORIES*</label>
          <v-select
            :items="artCategories"
            required
            v-model="artCategoriesSelected"
            multiple
          ></v-select>
        </div>
        <div class="input-container">
          <label>THEMES*</label>
          <v-select
            :items="themes"
            v-model="themesSelected"
            multiple
            required
          ></v-select>
        </div>
        <div class="input-container">
          <label>COLORS*</label>
          <v-select
            :items="colors"
            v-model="colorsSelected"
            multiple
            required
          ></v-select>
        </div>
        <div class="country-container">
          <h4>Location of Artwork</h4>
          <div>
            <label for="region">REGION*</label>
            <select v-model="region" required>
              <option
                v-for="region in regions"
                :key="region.id"
                :value="region.name"
              >
                {{ region.name }}
              </option>
            </select>
          </div>
          <div>
            <label for="country">COUNTRY*</label>
            <select v-model="country" required>
              <option
                v-for="country in countries"
                :key="country.id"
                :value="country.name"
              >
                {{ country.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="input-container">
          <label>YEAR</label>
          <v-text-field v-model="year" hide-details single-line type="number" />
        </div>
        <div class="input-container">
          <label>HEIGHT(CM)</label>
          <v-text-field v-model="height" hide-details single-line />
        </div>
        <div class="input-container">
          <label>WIDTH(CM)</label>
          <v-text-field v-model="width" hide-details single-line />
        </div>
        <div class="input-container">
          <label>DEPTH</label>
          <v-text-field v-model="depth" hide-details single-line />
        </div>
        <div class="input-container">
          <label>WEIGHT</label>
          <v-text-field v-model="weight" hide-details single-line />
        </div>
        <div class="input-container description">
          <label>ART DESCRIPTIONS* </label>
          <select v-model="artDescriptionSelected" class="description-select">
            <option disabled value="">Please select an option</option>
            <option
              v-for="description in artDescriptions"
              :key="description"
              :value="description"
              class="description-option"
            >
              <span class="description-option-text">{{ description }}</span>
            </option>
          </select>

          <!-- <v-select
            :items="artDescriptions"
            v-model="artDescriptionSelected"
            required
          ></v-select> -->
        </div>
        <div class="input-container">
          <label>EDITION OF</label>
          <small
            >Please enter a number if related to prints, sculpture, and
            photography. For example: 1/10.</small
          >
          <v-text-field v-model="edition" hide-details single-line />
        </div>
        <div class="about">
          <label>Extra Details</label>
          <textarea v-model="details"></textarea>
        </div>

        <div class="input-container">
          <label>SIGNED</label>
          <v-select :items="signed" v-model="signedSelected"></v-select>
        </div>
        <div class="input-container">
          <label>FRAMED</label>
          <v-select :items="framed" v-model="framedSelected"></v-select>
        </div>

        <div class="image-container">
          <img v-if="imageUrl" :src="imageUrl" />
          <img v-else :src="require('@/assets/imgs/avatar.png')" />
          <label>
            UPLOAD IMAGE
            <input
              id="image-upload"
              type="file"
              @change="onFileChange"
              style="display: none"
              multiple
            />
          </label>
        </div>
        <div class="input-container">
          <label>PRICE($)</label>
          <v-text-field
            v-model="price"
            hide-details
            single-line
            type="number"
          />
        </div>
        <div class="input-container">
          <label>QUANTITY</label>
          <v-text-field v-model="quantity" hide-details single-line />
        </div>
        <div class="about">
          <label>PROVENANCE</label>
          <textarea
            v-model="provenance"
            placeholder="If it is a private collection, enter: Private collection, (name of city). If it is coming directly from the artist, enter: Acquired directly from the artist."
          ></textarea>
        </div>
        <div class="about">
          <label>CONDITION REPORT</label>
          <textarea v-model="condition"></textarea>
        </div>
        <div class="input-container">
          <label>LOCATION</label>
          <v-text-field
            v-model="location"
            hide-details
            single-line
            placeholder="Enter city name, followed by the name of the country. For example: Beirut, Lebanon."
          />
        </div>
        <div class="about">
          <label>SHIPPING</label>
          <textarea v-model="shipping"></textarea>
        </div>
        <div class="input-container">
          <label>ORIENTATION OF ARTWORK*</label>
          <small>This is needed for filtering items</small>
          <v-select
            :items="orientations"
            v-model="orientationSelected"
            required
          ></v-select>
        </div>
        <div class="input-container">
          <label>SIZE OF ARTWORK*</label>
          <small>This is needed for filtering items</small>
          <v-select :items="sizes" v-model="sizeSelected" required></v-select>
        </div>
      </form>
      <div class="buttons">
        <button type="button" @click="$router.back()">BACK</button>
        <button v-if="!duplicate && id" type="button" @click="deleteArtwork">
          REMOVE FROM LISTING
        </button>
        <button
          v-if="role !== 'artist' && id"
          type="button"
          @click="updateOrAddArtwork"
        >
          UPDATE
        </button>
        <button v-if="!id" type="button" @click="updateOrAddArtwork">
          PUBLISH
        </button>
        <button v-if="id" type="button" @click="duplicateArtwork(id)">
          DUPLICATE
        </button>
      </div>
    </section>
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainLayout from '@/layout/MainLayout.vue';
import { useAuthStore } from '@/store/AuthStore';
import { useArtistsStore } from '@/store/ArtistsStore';
import { useGalleryStore } from '@/store/GalleriesStore';
import {
  ArtistItem,
  SingleArtistData,
  SelectedExhibition,
  SingleArtworkData,
} from '@/dataTypes/types';
import {
  REGIONS,
  COUNTRIES,
  ART_CATEGORIES,
  ART_THEMES,
  ART_COLORS,
  ART_DESCRIPTIONS,
  ART_SIGNED,
  ART_FRAMED,
  ART_ORIENTATIONS,
  ART_SIZES,
} from '../constants';
import {
  getArtCategoryNames,
  getArtThemeNames,
  getArtColorNames,
  getCountryName,
  getRegionName,
  getArtDescriptionName,
  getArtSignedName,
  getArtFramedName,
  getArtOrientationName,
  getArtSizeName,
  getArtCategoryIds,
  getArtColorIds,
  getArtThemeIds,
  getRegionId,
  getCountryId,
  getArtSizeId,
  getArtOrientationId,
  getArtDescriptionId,
  getArtSignedId,
  getArtFramedId,
} from '@/helpers/nameIdsConverters';
import Swal from 'sweetalert2';
import axios from 'axios';

export default defineComponent({
  components: { MainLayout },
  data() {
    const authStore = useAuthStore();
    const artistsStore = useArtistsStore();
    const galleryStore = useGalleryStore();
    let id = +this.$route.params.id;
    if (!id) {
      id = 0;
    }

    return {
      id,
      authStore,
      artistsStore,
      galleryStore,
      lastName: '',
      firstName: '',
      regions: REGIONS,
      region: '',
      countries: COUNTRIES,
      country: '',
      imageUrl: '',
      about: '',
      title: '',
      url: '',
      themes: [] as string[],
      themesSelected: [] as string[],
      colors: [] as string[],
      colorsSelected: [] as string[],
      artists: [] as ArtistItem[],
      artist: '',
      artistId: null as number | null,
      artwork: {} as SingleArtworkData,
      exhibitions: [] as SelectedExhibition[],
      artCategories: [] as string[],
      artCategoriesSelected: [] as string[],
      artDescriptions: [] as string[],
      artDescriptionSelected: '',
      year: '',
      height: '',
      width: '',
      depth: '',
      weight: '',
      edition: '',
      details: '',
      search: '',
      price: '',
      quantity: '1',
      provenance: '',
      condition:
        'There are no obvious condition concerns. For a full condition report please contact us.',
      location: '',
      shipping: 'Ships in up to 14 business days.',
      orientationSelected: '',
      orientations: [] as string[],
      sizeSelected: '',
      sizes: [] as string[],
      signed: [] as string[],
      signedSelected: '',
      framed: [] as string[],
      framedSelected: '',
      uploadedImageFile: null as unknown as File | Blob,
      show: false,
      role: '',
      duplicate: false,
      imageFileName: '',
    };
  },
  async created() {
    await this.getPageData();
  },

  methods: {
    async getPageData() {
      if (this.authStore.isLoggedIn) {
        this.role = this.authStore.userRole;
        this.artCategories = ART_CATEGORIES.map((a) => a.name) || [];
        this.themes = ART_THEMES.map((a) => a.name) || [];
        this.colors = ART_COLORS.map((a) => a.name) || [];
        this.artDescriptions = ART_DESCRIPTIONS.map((a) => a.name) || [];
        this.signed = ART_SIGNED.map((a) => a.name) || [];
        this.framed = ART_FRAMED.map((a) => a.name) || [];
        this.orientations = ART_ORIENTATIONS.map((a) => a.name) || [];
        this.sizes = ART_SIZES.map((a) => a.name) || [];
        if (this.role === 'gallery') {
          this.artists = await this.galleryStore.fetchMyArtists();

          if (this.$route.params.id) {
            if (this.$route.name == 'duplicate-artwork') {
              this.artwork = await this.galleryStore.getArtwork(+this.id);
              this.assignArtistProperties();
              this.id = 0;
              this.duplicate = true;
              return;
            }
            this.artwork = await this.galleryStore.getArtwork(+this.id);
            this.assignArtistProperties();
          }
        } else {
          if (this.$route.params.id) {
            this.artwork = await this.artistsStore.fetchArtistArtwork(+this.id);
            this.assignArtistProperties();
          }
        }
      }
    },
    onFileChange(e: any) {
      const file = e.target.files[0];
      this.uploadedImageFile = file;
      this.imageUrl = URL.createObjectURL(file);
      this.imageFileName = file.name;
    },
    duplicateArtwork(id: number) {
      this.$router.push(`/artworks/${id}/duplicate`);
      window.scrollTo(0, 0);
      this.getPageData();
    },
    assignArtistProperties() {
      this.title = !this.isDuplicate ? this.artwork?.title : '';
      this.artist = this.artwork.artist.full_name || '';
      this.artistId = this.artwork.artist.id || null;
      this.artCategoriesSelected = getArtCategoryNames(
        this.artwork.art_categories
      );
      this.themesSelected = getArtThemeNames(this.artwork.art_themes) || [];
      this.colorsSelected = getArtColorNames(this.artwork.art_colors) || [];
      this.country = this.getCountryName(this.artwork.country) || '';
      this.region = this.getRegionName(this.artwork.region) || '';
      this.imageUrl = !this.isDuplicate ? this.artwork?.image?.original : '';
      this.year = this.artwork.year_range || '';
      this.height = this.artwork.height || '';
      this.width = this.artwork.width || '';
      this.depth = this.artwork.depth || '';
      this.weight = this.artwork.weight || '';
      this.artDescriptionSelected = getArtDescriptionName(
        this.artwork.art_description
      );
      this.edition = this.artwork.edition_of || '';
      this.details = this.artwork.details;
      this.signedSelected = this.getArtSignedName(this.artwork.signed) || '';
      this.framedSelected = this.getArtFramedName(this.artwork.framed) || '';
      this.price = this.artwork.price || '';
      this.quantity = String(this.artwork.quantity) || this.quantity;
      this.provenance = this.artwork.provenance || '';
      this.condition = this.artwork.condition_report || this.condition;
      this.location = this.artwork.location || '';
      this.shipping = this.artwork.shipping || this.shipping;
      this.orientationSelected =
        this.getArtOrientationName(this.artwork.art_orientation) || '';
      this.sizeSelected = this.getArtSizeName(this.artwork.art_size) || '';
    },
    getArtCategoryNames,
    getArtThemeNames,
    getArtColorNames,
    getCountryName,
    getRegionName,
    getArtDescriptionName,
    getArtSignedName,
    getArtFramedName,
    getArtOrientationName,
    getArtSizeName,
    getArtCategoryIds,
    getArtColorIds,
    getArtThemeIds,
    getRegionId,
    getCountryId,
    getArtSizeId,
    getArtOrientationId,
    getArtDescriptionId,
    getArtSignedId,
    getArtFramedId,
    deleteArtwork() {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#000',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, remove it!',
      }).then((result) => {
        if (result.isConfirmed) {
          if (this.role === 'gallery') {
            this.deleteGalleryArtwork();
          } else {
            this.deleteArtistArtwork();
          }
        }
      });
    },
    async deleteGalleryArtwork() {
      const response = await this.galleryStore.deleteArtwork(
        'galleries',
        +this.artwork.id
      );
      if (response.success === true) {
        Swal.fire('Removed!', 'Your artwork has been removed.', 'success');
      } else {
        Swal.fire('Error!', 'Something went wrong.', 'error');
      }
      this.$router.push('/artworks');
    },
    async deleteArtistArtwork() {
      const response = await this.galleryStore.deleteArtwork(
        'artists',
        +this.artwork.id
      );
      if (response.success === true) {
        Swal.fire('Removed!', 'Your artwork has been removed.', 'success');
      } else {
        Swal.fire('Error!', 'Something went wrong.', 'error');
      }
      this.$router.push('/artworks');
    },
    async updateOrAddArtwork() {
      const signedId = this.signedSelected
        ? this.getArtSignedId(this.signedSelected)
        : null;
      const framedId = this.framedSelected
        ? this.getArtFramedId(this.framedSelected)
        : null;
      const sizeId = this.sizeSelected
        ? this.getArtSizeId(this.sizeSelected)
        : null;
      const orientationId = this.orientationSelected
        ? this.getArtOrientationId(this.orientationSelected)
        : null;
      const descriptionId = this.artDescriptionSelected
        ? this.getArtDescriptionId(this.artDescriptionSelected)
        : null;
      const regionId = this.region ? String(getRegionId(this.region)) : null;
      const countryId = this.country
        ? String(getCountryId(this.country))
        : null;
      const colorsIds = this.colorsSelected
        ? this.getArtColorIds(this.colorsSelected)
        : null;
      const artCategoriesIds = this.artCategoriesSelected
        ? this.getArtCategoryIds(this.artCategoriesSelected)
        : null;
      const themesIds = this.themesSelected
        ? getArtThemeIds(this.themesSelected)
        : null;
      const artwork = {
        title: this.title,
        artist_id: this.artistId,
        art_category_ids: artCategoriesIds,
        art_color_ids: colorsIds,
        art_theme_ids: themesIds,
        ...(typeof regionId === 'string' && { region_id: regionId.toString() }),
        ...(typeof countryId === 'string' && {
          country_id: countryId.toString(),
        }),
        ...(typeof sizeId === 'number' && { art_size_id: sizeId.toString() }),
        ...(typeof orientationId === 'number' && {
          art_orientation_id: orientationId,
        }),
        ...(typeof descriptionId === 'number' && {
          art_description_id: descriptionId,
        }),
        year_range: this.year,
        details: this.details,
        ...(typeof signedId === 'number' && { art_signed_id: signedId }),
        ...(typeof framedId === 'number' && { art_framed_id: framedId }),
        is_for_charity: false,
        shipping: this.shipping,
        provenance: this.provenance,
        condition_report: this.condition,
        location: this.location,
        height: this.height,
        width: this.width,
        depth: this.depth,
        weight: this.weight,
        edition_of: this.edition,
        price: this.price,
        quantity: this.quantity,
      };

      const formData = new FormData();
      Object.entries(artwork).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          // Handle arrays
          value.forEach((item) => {
            formData.append(key + '[]', item.toString());
          });
        } else if (
          typeof value === 'string' ||
          typeof value === 'number' ||
          typeof value === 'boolean'
        ) {
          // Handle string, number, and boolean
          formData.append(key, value.toString());
        }
      });
      if (this.uploadedImageFile && this.imageFileName) {
        formData.append('image', this.uploadedImageFile, this.imageFileName);
      }

      const validationErrors: any[] = [];

      if (artwork.title === '') {
        validationErrors.push('title must have a value');
      }

      if (this.role === 'gallery' && !artwork.artist_id) {
        validationErrors.push('artist must have a value');
      }

      if (!Array.isArray(artwork.art_category_ids)) {
        validationErrors.push('art category must have a value');
      }

      if (!Array.isArray(artwork.art_color_ids)) {
        validationErrors.push('colors must have a value');
      }

      if (!Array.isArray(artwork.art_theme_ids)) {
        validationErrors.push('theme must have a value');
      }

      if (!artwork.region_id) {
        validationErrors.push('region must have a value');
      }

      if (!artwork.country_id) {
        validationErrors.push('country must have a value');
      }

      if (!artwork.art_size_id) {
        validationErrors.push('size must have a value');
      }

      if (!artwork.art_orientation_id) {
        validationErrors.push('orientation must have a value');
      }

      if (!artwork.art_description_id) {
        validationErrors.push('description must have a value');
      }

      if (validationErrors.length > 0) {
        Swal.fire({
          title: 'Error',
          text: `There are ${
            validationErrors.length
          } errors: ${validationErrors.join(', ')}`,
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#000',
        });
        return;
      }

      if (this.role === 'gallery' && this.id) {
        try {
          await this.galleryStore.updateArtwork(+this.id, formData);
          Swal.fire({
            title: 'Success',
            text: 'Artwork data updated successfully',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#000',
          });
          this.$router.back();
        } catch (error) {
          Swal.fire({
            title: 'Error',
            text: `Error updating artwork data: ${
              (error as { message?: string }).message
            }`,
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#000',
          });
        }
      }
      if (this.role === 'gallery' && (!this.id || this.id === 0)) {
        try {
          await this.galleryStore.createArtwork(formData);
          Swal.fire({
            title: 'Success',
            text: 'Artwork data added successfully',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#000',
          });
          this.$router.back();
        } catch (error) {
          Swal.fire({
            title: 'Error',
            text: `Error adding artwork data: ${
              (error as { message?: string }).message
            }`,
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#000',
          });
        }
      }
      if (this.role === 'artist' && (!this.id || this.id === 0)) {
        try {
          await this.artistsStore.createArtwork(formData);
          Swal.fire({
            title: 'Success',
            text: 'Artwork data added successfully',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#000',
          });
          this.$router.back();
        } catch (error) {
          Swal.fire({
            title: 'Error',
            text: `Error adding artwork data: ${
              (error as { message?: string }).message
            }`,
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#000',
          });
        }
      }
      if (this.role === 'artist' && this.id) {
        try {
          await this.artistsStore.updateArtwork(this.id, formData);
          Swal.fire({
            title: 'Success',
            text: 'Artwork data updated successfully',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#000',
          });
          this.$router.back();
        } catch (error) {
          Swal.fire({
            title: 'Error',
            text: `Error updating artwork data: ${
              (error as { message?: string }).message
            }`,
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#000',
          });
        }
      }
    },
  },
  computed: {
    isDuplicate(): boolean {
      return this.$route.fullPath.includes('duplicate');
    },
  },
});
</script>

<style lang="scss" scoped>
.main-container {
  padding: 1rem 1rem;

  h5 {
    margin: 1rem 0;
  }

  form {
    .input-container {
      margin-bottom: 2rem;
      max-width: 50%;
      @include flex-box(column);
      gap: 1rem;
      @include sm-screen {
        max-width: 100%;
      }
    }

    .country-container {
      border: 1px solid $light-gray;
      max-width: 50%;
      padding: 1rem 0.5rem;
      margin-bottom: 2rem;
      @include sm-screen {
        max-width: 100%;
      }

      h4 {
        margin-bottom: 2rem;
      }

      & > div {
        @include flex-box(column);
        margin-bottom: 2rem;
      }

      select {
        border: 1px solid $light-gray;
        cursor: pointer;
      }
    }
    input,
    textarea,
    select {
      padding: 0.3rem 1rem;
      border: 1px solid $light-gray;
      min-width: 50%;
    }

    .image-container {
      @include flex-box(column, flex-start, flex-start);
      margin: 2rem 0;
      img {
        @include sm-screen {
          width: 10rem;
          height: 10rem;
        }
        width: 15rem;
        height: 15rem;
        object-fit: cover;
        margin-bottom: 1rem;
      }

      label {
        @include sm-screen {
          font-size: 0.8rem;
          width: 10rem;
        }
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        background-color: $main-color;
        color: $secondary-color;
        padding: 0.3rem 1rem;
        width: 15rem;
        text-align: center;
      }
    }

    .description {
      .description-select {
        width: 100%;
        font-size: 16px;
        padding: 6px 8px;
      }

      .description-select:focus {
        outline: none;
      }

      .description-option-text {
        display: block;
        max-width: 7rem;
        overflow-wrap: break-word;
      }
    }

    .about {
      @include flex-box(column);
      @include sm-screen {
        max-width: 100%;
      }
      margin-bottom: 2rem;
      max-width: 50%;

      textarea {
        min-height: 15rem;
      }
    }

    .exhibitions {
      table {
        border-collapse: collapse;
        width: 100%;
        margin-bottom: 1em;
      }

      th,
      td {
        border: 1px solid $light-gray;
        padding: 0.5em;
        text-align: center;
      }

      th {
        font-weight: bold;
      }
    }
    .website {
      @include flex-box(column);
      gap: 1rem;

      input {
        width: 50%;
        @include sm-screen {
          width: 100%;
        }
      }
    }
  }
}

.buttons {
  @include flex-box(null, space-between, center);
  margin: 2rem 0;
  @include sm-screen {
    @include flex-box(column, center, center);
    gap: 1rem;
    margin: 1rem 0;
  }

  & > button {
    min-width: 20%;
    background-color: $main-color;
    color: $secondary-color;
    padding: 0.5rem 2rem;

    @include sm-screen {
      width: 50%;
    }
  }
}
</style>

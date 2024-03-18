<template>
  <MainLayout>
    <SpinnerLoader v-if="isLoading" />
    <section v-else class="main-container">
      <h5>THE FIELDS MARKED WITH (*) ARE REQUIRED.</h5>
      <form>
        <div class="input-container">
          <label for="first-name">FIRST NAME*</label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            v-model="firstName"
          />
        </div>
        <div class="input-container">
          <label for="last-name">LAST NAME*</label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            v-model="lastName"
          />
        </div>
        <div class="country-container">
          <h4>Artist Origin/Nationality</h4>
          <div>
            <label for="region">REGION*</label>
            <select v-model="region">
              <option v-if="region === ''" v-bind="{ value: '' }">
                Select Region
              </option>
              <option v-else v-bind="{ value: region }">
                {{ region }}
              </option>
              <option
                v-for="region in regions"
                :key="region.id"
                :value="region.name"
              >
                {{ getRegionName(+region.id) }}
              </option>
            </select>
          </div>
          <div>
            <label for="country">COUNTRY*</label>
            <select v-model="country">
              <option v-if="country === ''" v-bind="{ value: '' }">
                Select Country
              </option>
              <option v-else v-bind="{ value: country }">
                {{ country }}
              </option>
              <option
                v-for="country in countries"
                :key="country.id"
                :value="country.name"
              >
                {{ getCountryName(+country.id) }}
              </option>
            </select>
          </div>
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
            />
          </label>
        </div>
        <div class="about">
          <label>ABOUT</label>
          <QuillEditor
            theme="snow"
            toolbar="full"
            contentType="html"
            v-model:content="about"
            placeholder="About..."
            style="height: 300px; width: 100%"
          />
        </div>
        <div class="exhibitions">
          <h4>SELECTED EXHIBITIONS</h4>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Type</th>
                <th>Location</th>
                <th>Country</th>
                <th>City</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="exhibition in exhibitions" :key="exhibition.id">
                <td>{{ exhibition.title }}</td>
                <td>{{ exhibition.date }}</td>
                <td>
                  {{ formatExhibitionType(exhibition.exhibition_type) }}
                </td>
                <td>{{ exhibition.location }}</td>
                <td>{{ getCountryName(exhibition.country_id) }}</td>
                <td>{{ exhibition.city }}</td>
                <td>
                  <button @click="removeExhibition(exhibition.title)">
                    <v-icon icon="mdi-delete" />
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Title"
                    v-model="exhibitionTitle"
                  />
                </td>
                <td>
                  <input type="date" v-model="exhibitionsDate" />
                </td>
                <td>
                  <select v-model="exhibitionsType">
                    <option value="solo_exhibition">Solo</option>
                    <option value="group_exhibition">Group</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    v-model="exhibitionsLocation"
                    placeholder="Location"
                  />
                </td>
                <td>
                  <select v-model="exhibitionCountry">
                    <option
                      v-for="country in countries"
                      :key="country.id"
                      :value="country.id"
                    >
                      {{ country.name }}
                    </option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    v-model="exhibitionCity"
                    placeholder="City"
                  />
                </td>
                <td>
                  <button type="button" @click="addExhibition">
                    <v-icon icon="mdi-plus" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="collections">
          <h4>ARTICLES</h4>
          <p>
            Adding an article mentioning the artist is beneficial for both the
            artist and the collectors.
          </p>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Url</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="article in articles" :key="article.url">
                <td>
                  <p>{{ article.title }}</p>
                </td>
                <td>
                  <p>{{ article.url }}</p>
                </td>
                <td>
                  <button @click="removeArticle(article.url)">
                    <v-icon icon="mdi-delete" />
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <input type="text" placeholder="Title" v-model="title" />
                </td>
                <td>
                  <input type="text" placeholder="URL" v-model="url" />
                </td>
                <td>
                  <button type="button" @click="addArticle">
                    <v-icon icon="mdi-plus" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="collections">
          <h4>KEY COLLECTIONS</h4>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Museum</th>
                <th>Country</th>
                <th>City</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="collection in key_collections" :key="collection.date">
                <td>{{ collection.date }}</td>
                <td>{{ collection.museum_name }}</td>
                <td>{{ getCountryName(collection.country_id) }}</td>
                <td>{{ collection.city }}</td>
                <td>
                  <button @click="removeCollection(collection.museum_name)">
                    <v-icon icon="mdi-delete" />
                  </button>
                </td>
              </tr>
              <tr>
                <td><input type="date" v-model="collectionsDate" /></td>
                <td>
                  <input
                    type="text"
                    placeholder="Museum"
                    v-model="collectionsMuseum"
                  />
                </td>
                <td>
                  <select v-model="collectionsCountry" class="country-select">
                    <option
                      v-for="country in countries"
                      :key="country.id"
                      :value="country.id"
                    >
                      {{ country.name }}
                    </option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="City"
                    v-model="collectionsCity"
                  />
                </td>
                <td>
                  <button type="button" @click="addCollection">
                    <v-icon icon="mdi-plus" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="website">
          <label>WEBSITE</label>
          <input type="text" placeholder="website" v-model="website" />
        </div>
      </form>
      <div class="buttons">
        <button type="button" @click="$router.back()">BACK</button>
        <button
          v-if="id || role === 'artist'"
          type="button"
          @click="updateArtistData"
        >
          UPDATE
        </button>
        <button
          v-if="role === 'gallery' && !id"
          type="button"
          @click="updateArtistData"
        >
          ADD
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
import {
  ArtistItem,
  SingleArtistData,
  SelectedExhibition,
  KeyCollection,
  Article,
} from '@/dataTypes/types';
import { useGalleryStore } from '@/store/GalleriesStore';
import { REGIONS, COUNTRIES } from '../constants';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import {
  getCountryName,
  getRegionName,
  getCountryId,
  getRegionId,
} from '@/helpers/regionAndCountryHelpers';
import SpinnerLoader from '@/components/loader/SpinnerLoader.vue';
import Swal from 'sweetalert2';

export default defineComponent({
  components: { MainLayout, QuillEditor, SpinnerLoader },
  data() {
    const authStore = useAuthStore();
    const artistsStore = useArtistsStore();
    const galleryStore = useGalleryStore();
    const role = authStore.userRole;
    let id = +this.$route.params.id;
    if (!id) {
      const userInfo = authStore.getUserInfo();
      if (userInfo && userInfo.role === 'artist') {
        id = userInfo.id;
      }
    }
    return {
      id,
      artistsStore,
      galleryStore,
      authStore,
      role,
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
      artists: [] as ArtistItem[],
      artist: {} as SingleArtistData,
      exhibitions: [] as SelectedExhibition[],
      key_collections: [] as KeyCollection[],
      articles: [] as Article[],
      search: '',
      show: false,
      collectionsDate: '',
      collectionsMuseum: '',
      collectionsCountry: '',
      collectionsCity: '',
      exhibitionTitle: '',
      exhibitionsDate: '',
      exhibitionsType: '',
      exhibitionsLocation: '',
      exhibitionCountry: '',
      exhibitionCity: '',
      website: '',
      uploadedImageFile: '' as string,
      isLoading: true,
      imageFileName: '',
    };
  },
  async created() {
    if (this.authStore.isLoggedIn) {
      const authStore = useAuthStore();
      if (authStore.getUserInfo()) {
        if (this.id && this.authStore.userRole === 'gallery') {
          this.artists = await this.galleryStore.fetchMyArtists();
          this.artist = await this.galleryStore.fetchArtist(this.id);
          console.log(this.artist.image);
          this.firstName = this.artist.first_name || '';
          this.lastName = this.artist.last_name || '';
          this.imageUrl = this.artist.image?.original || '';
          this.country = this.getCountryName(this.artist.country_id) || '';
          this.region = this.getRegionName(this.artist.region_id) || '';
          this.about = this.artist.about || '';
          this.exhibitions = this.artist.selected_exhibitions || [];
          this.key_collections = this.artist.key_collections || [];
          this.articles = this.artist.articles || [];
          this.website = this.artist.website || '';
          this.isLoading = false;
        } else if (!this.id && this.authStore.userRole === 'gallery') {
          this.isLoading = false;
        }

        if (this.authStore.userRole === 'artist') {
          this.artist = await this.artistsStore.getInfo();
          this.firstName = this.artist.first_name || '';
          this.lastName = this.artist.last_name || '';
          this.imageUrl = this.artist.image.original || '';
          this.country = this.getCountryName(this.artist.country_id) || '';
          this.region = this.getRegionName(this.artist.region_id) || '';
          this.about = this.artist.about || '';
          this.exhibitions = this.artist.selected_exhibitions || [];
          this.key_collections = this.artist.key_collections || [];
          this.articles = this.artist.articles || [];
          this.website = this.artist.website || '';
          this.isLoading = false;
        }
      }
    }
  },
  computed: {},
  methods: {
    onFileChange(e: any) {
      const file = e.target.files[0];
      this.uploadedImageFile = file;
      this.imageUrl = URL.createObjectURL(file);
      this.imageFileName = file.name;
    },
    formatExhibitionType(exhibitionType: string): string {
      const typeArray = exhibitionType.split('_');
      const formattedType =
        typeArray[0].charAt(0).toUpperCase() + typeArray[0].substring(1);
      return formattedType;
    },
    addExhibition() {
      debugger;
      const exhibitionTitle = this.exhibitionTitle;
      const exhibitionDate = this.exhibitionsDate;
      const exhibitionType = this.exhibitionsType;
      const exhibitionLocation = this.exhibitionsLocation;
      const exhibitionCity = this.exhibitionCity;
      const exhibitionCountryID = this.exhibitionCountry;
      const exhibition = {
        title: exhibitionTitle,
        date: exhibitionDate,
        exhibition_type: exhibitionType,
        location: exhibitionLocation,
        city: exhibitionCity,
        country_id: +exhibitionCountryID,
      };
      this.exhibitions.push(exhibition);
      this.exhibitionTitle = '';
      this.exhibitionsDate = '';
      this.exhibitionsType = '';
      this.exhibitionsLocation = '';
      this.exhibitionCity = '';
      this.exhibitionCountry = '';
    },
    removeExhibition(title: string) {
      this.exhibitions = this.exhibitions.filter(
        (exhibition) => exhibition.title !== title
      );
    },
    addArticle() {
      const articlesTitle = this.title;
      const articlesURL = this.url;
      const article = {
        title: articlesTitle,
        url: articlesURL,
      };
      this.articles.push(article);
      this.title = '';
      this.url = '';
    },
    removeArticle(url: string) {
      this.articles = this.articles.filter((article) => article.url !== url);
    },
    addCollection() {
      const collectionsDate = this.collectionsDate;
      const collectionsMuseum = this.collectionsMuseum;
      const collectionsCity = this.collectionsCity;
      const collectionsCountryID = this.collectionsCountry;
      const collection = {
        date: collectionsDate,
        museum_name: collectionsMuseum,
        city: collectionsCity,
        country_id: +collectionsCountryID,
      };
      this.key_collections.push(collection);
      this.collectionsDate = '';
      this.collectionsMuseum = '';
      this.collectionsCity = '';
      this.collectionsCountry = '';
    },
    removeCollection(name: string) {
      this.key_collections = this.key_collections.filter(
        (collection) => collection.museum_name !== name
      );
    },
    getCountryName,
    getRegionName,
    getCountryId,
    async updateArtistData() {
      const exhibitionTitle = this.exhibitionTitle;
      const exhibitionDate = this.exhibitionsDate;
      const exhibitionType = this.exhibitionsType;
      const exhibitionLocation = this.exhibitionsLocation;
      const exhibitionCity = this.exhibitionCity;
      const exhibitionCountryID = this.exhibitionCountry;
      const collectionsDate = this.collectionsDate;
      const collectionsMuseum = this.collectionsMuseum;
      const collectionsCity = this.collectionsCity;
      const collectionsCountryID = this.collectionsCountry;
      const articlesTitle = this.title;
      const articlesURL = this.url;

      const formData = {
        first_name: this.firstName, // must be a string
        last_name: this.lastName, // must be a string
        about: this.about, // must be a string
        website: this.website, // must be a string
        region_id: String(getRegionId(this.region)), // must be a string
        country_id: String(getCountryId(this.country)), // must be a string
        selected_exhibitions: [
          // must be an array
          ...this.exhibitions,
          {
            title: exhibitionTitle,
            date: exhibitionDate,
            exhibition_type: exhibitionType,
            location: exhibitionLocation,
            city: exhibitionCity,
            country_id: exhibitionCountryID,
          },
        ],
        key_collections: [
          ...this.key_collections,
          // must be an array
          {
            date: collectionsDate,
            museum_name: collectionsMuseum,
            city: collectionsCity,
            country_id: collectionsCountryID,
          },
        ],
        articles: [
          // must be an array
          ...this.articles,
          {
            title: articlesTitle,
            url: articlesURL,
          },
        ],
        image: this.uploadedImageFile, // must be an object
      };
      const validationErrors: any[] = [];
      if (formData.first_name === '') {
        validationErrors.push('First name must have a value');
      }

      if (formData.last_name === '') {
        validationErrors.push('Last name must have a value');
      }

      if (formData.region_id === '') {
        validationErrors.push('Region must have a value');
      }

      if (formData.country_id === '') {
        validationErrors.push('Country must have a value');
      }

      if (validationErrors.length > 0) {
        Swal.fire({
          title: 'Error',
          text: validationErrors.join(', '),
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#000',
        });
        return;
      }

      // Call API to update artist data
      if (this.id && this.authStore.userRole === 'gallery') {
        try {
          await this.galleryStore.updateArtist(+this.id, formData);
          Swal.fire({
            title: 'Success',
            text: 'Artist data updated successfully',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#000',
          });
        } catch (error) {
          Swal.fire({
            title: 'Error',
            text: (error as { message?: string }).message,
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#000',
          });
        }
      }

      if (!this.id && this.authStore.userRole === 'gallery') {
        try {
          await this.galleryStore.createArtist(formData);
          Swal.fire({
            title: 'Success',
            text: 'Artist data created successfully',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#000',
          });
        } catch (error) {
          Swal.fire({
            title: 'Error',
            text: (error as { message?: string }).message,
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#000',
          });
        }
      }
      // updateArtistInfo

      if (this.authStore.userRole === 'artist') {
        try {
          await this.artistsStore.updateArtistInfo(formData);
          Swal.fire({
            title: 'Success',
            text: 'Artist data updated successfully',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#000',
          });
        } catch (error) {
          Swal.fire({
            title: 'Error',
            text: (error as { message?: string }).message,
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#000',
          });
        }
      }
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
      border: 1px solid lightgray;
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

    .about {
      @include flex-box(column);
      margin-bottom: 2rem;
      max-width: 50%;
      @include sm-screen {
        max-width: 100%;
      }

      textarea {
        min-height: 15rem;
      }
    }

    .exhibitions {
      table {
        border-collapse: collapse;
        width: 100%;
        margin-bottom: 1em;
        @include sm-screen {
          width: 100vw;
        }
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

    .article {
      @include flex-box(column);
      gap: 1rem;
      margin-bottom: 2rem;

      .article-inputs {
        @include flex-box(row);
        width: 100vw;

        & > div {
          @include flex-box(column);
          width: 42vw;

          label {
            margin-bottom: 1rem;
            border-bottom: 1px solid $light-gray;
            border-top: 1px solid $light-gray;
            padding: 0.3rem 0;
          }
        }
      }
    }
    .collections {
      margin-bottom: 2rem;
      h4 {
        margin-bottom: 2rem;
      }

      table {
        border-collapse: collapse;
        width: 100%;
        margin-bottom: 1em;
        @include sm-screen {
          width: 100vw;
        }

        th,
        td {
          border: 1px solid $light-gray;
          padding: 0.5em;
          text-align: center;

          input,
          select {
            width: 100%;
            border: none;
          }

          select {
            cursor: pointer;
          }
        }
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
  @include flex-box(row, space-around, center);
  margin: 2rem 0;

  & > button {
    min-width: 40%;
    background-color: $main-color;
    color: $secondary-color;
    padding: 0.5rem 2rem;
  }
}

.country-select {
  border: 1px solid $light-gray !important;
  cursor: pointer;
}
</style>

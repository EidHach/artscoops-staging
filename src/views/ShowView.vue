<!-- eslint-disable @typescript-eslint/ban-ts-comment -->
<template>
  <MainLayout>
    <section class="main-container">
      <h1>THE FIELDS MARKED WITH (*) ARE REQUIRED.</h1>
      <form @submit.prevent="updateExhibition">
        <div class="input-container">
          <label>TITLE*</label>
          <v-text-field v-model="title" single-line />
        </div>
        <div class="input-container">
          <label>DESCRIPTION*</label>
          <QuillEditor
            theme="snow"
            toolbar="full"
            contentType="html"
            v-model:content="description"
            placeholder="Add description here..."
            style="height: 300px; width: 100%"
          />
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
        <div class="input-container">
          <div>
            <label>DATE FROM*</label>
            <v-text-field type="date" v-model="dateFrom" single-line />
          </div>
          <div>
            <label>DATE TO*</label>
            <v-text-field type="date" v-model="dateTo" single-line />
          </div>
        </div>
        <div class="input-container">
          <label>CURATED BY*</label>
          <v-text-field v-model="curatedBy" single-line />
        </div>
        <div class="input-container">
          <label>ARTWORKS*</label>
          <v-select
            :items="artworksTitleAndFullName"
            v-model="artworksSelected"
            item-text="title"
            item-value="id"
            chips
            multiple
            required
          ></v-select>
        </div>
        <div class="buttons-container">
          <button type="button" @click="$router.back()">BACK</button>
          <button v-if="id" color="error" @click="deleteExhibition(id)">
            DELETE
          </button>
          <button v-if="id" color="primary" type="submit">Update</button>
          <button v-if="!id" color="primary" type="submit">Publish</button>
        </div>
      </form>
    </section>
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainLayout from '@/layout/MainLayout.vue';
import { useShowsStore } from '@/store/ShowsStore';
import { GalleryShowsItem, ArtworksRecord } from '@/dataTypes/types';
import { useAuthStore } from '@/store/AuthStore';
// import { useArtworksStore } from "@/store/ArtworksStore";
import { useGalleryStore } from '@/store/GalleriesStore';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { format } from 'date-fns';
import Swal from 'sweetalert2';

export default defineComponent({
  components: { MainLayout, QuillEditor },
  data() {
    let id = +this.$route.params.id || null;
    if (!id) {
      id = null;
    }
    const Auth = useAuthStore();
    const Show = useShowsStore();
    const Gallery = useGalleryStore();
    // const Artworks = useArtworksStore();
    return {
      id,
      Auth,
      Show,
      // Artworks,
      Gallery,
      exhibition: {} as GalleryShowsItem,
      artworks: [] as ArtworksRecord[],
      title: '',
      description: '',
      imageUrl: '',
      uploadedImageFile: null as unknown as File | Blob,
      dateFrom: '',
      dateTo: '',
      curatedBy: '',
      artworksSelected: [] as number[],
      imageFileName: '',
    };
  },
  async created() {
    if (this.Auth.isLoggedIn) {
      if (this.Gallery.galleryArtworks.length > 0) {
        this.artworks = this.Gallery.galleryArtworks;
      } else {
        this.artworks = await this.Gallery.getMyArtworks();
      }
      if (this.id) {
        this.exhibition = await this.Show.fetchGalleryShow(+this.id);
        this.title = this.exhibition.title || '';
        this.description = this.exhibition.description || '';
        this.imageUrl = this.exhibition.image?.original || '';
        this.dateFrom =
          format(new Date(this.exhibition?.date_from), 'yyyy-MM-dd') ||
          format(new Date(), 'yyyy-MM-dd');
        this.dateTo =
          format(new Date(this.exhibition?.date_to), 'yyyy-MM-dd') ||
          format(new Date(), 'yyyy-MM-dd');
        this.curatedBy = this.exhibition.curated_by;
        this.artworksSelected = this.exhibition.artworks.map(
          (artwork) => artwork.id
        );
      }
    }
  },
  methods: {
    onFileChange(e: any) {
      const file = e.target.files[0];
      this.uploadedImageFile = file;
      this.imageUrl = URL.createObjectURL(file);
      this.imageFileName = file.name;
    },
    async deleteExhibition(id: number | null) {
      if (!id) {
        return;
      }
      const response = await this.Show.DeleteShow(id);
      if (response.success) {
        Swal.fire({
          title: 'Success!',
          text: 'Exhibition deleted',
          icon: 'success',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#000',
        });
        this.$router.push('/shows');
      } else {
        Swal.fire({
          title: 'Error!',
          text: `Failed to delete ${response.message}`,
          icon: 'error',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#000',
        });
      }
    },
    async updateExhibition() {
      // Create a FormData object
      const formData = new FormData();

      // Append form fields to the FormData object
      formData.append('title', this.title);
      formData.append('description', this.description);
      formData.append('date_from', this.dateFrom);
      formData.append('date_to', this.dateTo);
      formData.append('curated_by', this.curatedBy);

      // Append the selected image file
      if (this.uploadedImageFile) {
        formData.append('image', this.uploadedImageFile, this.imageFileName);
      }

      // Append artwork IDs as an array
      this.artworksSelected.forEach((artworkId) => {
        formData.append(`artwork_ids[]`, artworkId.toString());
      });

      if (
        this.title === '' ||
        this.description === '' ||
        this.dateFrom === '' ||
        this.dateTo === '' ||
        this.curatedBy === '' ||
        this.artworksSelected.length === 0
      ) {
        Swal.fire({
          title: 'Error!',
          text: 'Please fill all the required fields',
          icon: 'error',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#000',
        });
        return;
      }

      if (this.id) {
        const response = await this.Show.UpdateExhibition(this.id, formData);
        if (response) {
          Swal.fire({
            title: 'Success!',
            text: 'Exhibition updated',
            icon: 'success',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#000',
          });
          this.$router.push('/shows');
        } else {
          Swal.fire({
            title: 'Error!',
            text: `Failed to update ${response.message}`,
            icon: 'error',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#000',
          });
        }
      } else {
        const response = await this.Show.CreateExhibition(formData);
        if (response) {
          Swal.fire({
            title: 'Success!',
            text: 'Exhibition created',
            icon: 'success',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#000',
          });
          this.$router.push('/shows');
        } else {
          Swal.fire({
            title: 'Error!',
            text: `Failed to create ${response.message}`,
            icon: 'error',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#000',
          });
        }
      }
    },
  },
  computed: {
    artworksTitleAndFullName(): { title: string; id: number | null }[] {
      return this.artworks.map((artwork: ArtworksRecord) => {
        return {
          title: `${artwork.title} - ${artwork.artist.full_name}`,
          id: artwork.id,
        };
      });
    },
    getArtworksIds(): number[] {
      const ids = this.artworks.map((artwork: ArtworksRecord) => {
        // compare the title and full name of the artwork with the selected artworks
        const title = `${artwork.title} - ${artwork.artist.full_name}`;
        if (
          this.artworksSelected.find((artwork) => artwork.toString() === title)
        ) {
          return artwork.id;
        } else {
          return null;
        }
      });
      return ids.filter((id: number | null): id is number => id !== null);
    },
  },
});
</script>

<style lang="scss" scoped>
.main-container {
  @include sm-screen {
    width: 100%;
    padding: 3rem 1rem;
  }
  width: 50%;
  padding: 3rem 2rem;

  h1 {
    @include sm-screen {
      font-size: 1.2rem;
    }
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 2rem;
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

  .buttons-container {
    @include flex-box(row, space-between, center);
    margin-top: 2rem;

    button {
      @include sm-screen {
        width: 7rem;
      }
      padding: 0.5rem 1rem;
      font-size: 1rem;
      font-weight: 500;
      border: none;
      background-color: $main-color;
      color: $secondary-color;
      width: 15rem;
    }
  }
}
</style>

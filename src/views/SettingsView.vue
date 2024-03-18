<template>
  <MainLayout>
    <SpinnerLoader v-if="loader" />
    <div class="container" v-if="role === 'gallery'">
      <div class="row">
        <p>GALLERY NAME</p>
        <span>{{ name }}</span>
      </div>
      <v-divider></v-divider>
      <div class="row">GALLERY INFO</div>
      <v-divider></v-divider>
      <div>
        <div class="row">
          <span>NAME</span>
          <span>{{ name }}</span>
        </div>
        <form @submit.prevent="handleUpdateInfo(link, description)">
          <div class="input-wrapper">
            <label for="website">WEBSITE</label>
            <input
              type="text"
              id="website"
              placeholder="WEBSITE"
              v-model="link"
            />
          </div>
          <div class="input-wrapper">
            <label for="description">DESCRIPTION</label>
            <textarea
              id="description"
              placeholder="DESCRIPTION"
              v-model="description"
            />
          </div>
          <input type="submit" value="Update" />
          <button type="button" @click="resetPassword">
            RESET YOUR PASSWORD
          </button>
        </form>
      </div>
    </div>
    <div v-else-if="role === 'artist'">
      <button type="button" @click="resetPassword">RESET YOUR PASSWORD</button>
    </div>
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainLayout from '@/layout/MainLayout.vue';
import { useGalleryStore } from '@/store/GalleriesStore';
import { useAuthStore } from '@/store/AuthStore';
import { Data, UserRecord } from '@/dataTypes/types';
import Swal from 'sweetalert2';
import SpinnerLoader from '@/components/loader/SpinnerLoader.vue';

export default defineComponent({
  components: { MainLayout, SpinnerLoader },
  data() {
    const Gallery = useGalleryStore();
    const Auth = useAuthStore();
    return {
      Gallery,
      galleryInfo: {} as Data,
      userInfo: {} as UserRecord,
      Auth,
      role: '',
      link: '',
      description: '',
      name: '',
      loader: false,
    };
  },
  methods: {
    async handleUpdateInfo(link: string, description: string) {
      this.loader = true;
      const response = await this.Gallery.updateInfo({
        link: link,
        description: description,
      });
      this.loader = false;
      if (response) {
        Swal.fire({
          title: 'Success!',
          text: 'Gallery info updated',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#000',
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong',
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#000',
        });
      }
    },
    async resetPassword() {
      this.loader = true;
      const message = await this.Auth.resetPassword(this.userInfo?.email);
      this.loader = false;
      if (message) {
        Swal.fire({
          title: 'Success!',
          text: 'Check your email to reset your password',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#000',
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong',
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#000',
        });
      }
    },
  },
  async mounted() {
    if (this.Auth.isLoggedIn) {
      if (this.Auth.userRole === 'gallery') {
        this.galleryInfo = await this.Gallery.getInfo();
        this.name = this.galleryInfo.gallery.title;
        this.link = this.galleryInfo.gallery.link;
        this.description = this.galleryInfo.gallery.description;
      }
      this.userInfo = await this.Auth.fetchUserInfo();
      this.role = this.Auth.userRole;
    }
  },
});
</script>

<style lang="scss" scoped>
.container {
  @include sm-screen {
    padding: 0 1rem;
    margin: 2rem 0;
  }
  margin: 3rem 0 0 1rem;

  .row {
    @include flex-box(null, null, center);
    gap: 5rem;
    min-height: 3rem;
  }

  form {
    @include flex-box(column, flex-start, flex-start);
    @include sm-screen {
      max-width: 100%;
    }
    max-width: 50%;

    h1 {
      font-size: 1rem;
    }

    input,
    textarea,
    button {
      padding: 0.3rem 1rem;
      margin-top: 1rem;
      width: 100%;
    }

    textarea,
    input {
      border: 1px solid $main-color;
    }

    input[type='submit'],
    button {
      background-color: $main-color;
      color: $secondary-color;
    }

    .input-wrapper {
      @include flex-box(null, flex-start, center);
      @include sm-screen {
        flex-direction: column;
        margin-top: 2rem;
      }
      width: 100%;

      label {
        @include sm-screen {
          width: 100%;
        }
        width: 10rem;
      }
    }
  }
}
button {
  padding: 0.3rem 1rem;
  margin-top: 1rem;
  width: 40%;
  background-color: $main-color;
  color: $secondary-color;
}
</style>

<template>
  <MainLayout>
    <form @submit.prevent="handleMessageSubmission(text)">
      <h1>We are commited to finding the answers you need.</h1>
      <textarea
        type="text"
        placeholder="Please tell us what you need help with."
        v-model="text"
      />
      <input type="submit" value="Submit" />
    </form>
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainLayout from '@/layout/MainLayout.vue';
import { useGalleryStore } from '@/store/GalleriesStore';
import { useAuthStore } from '@/store/AuthStore';
import { UserRecord } from '@/dataTypes/types';

export default defineComponent({
  components: { MainLayout },
  data() {
    const Help = useGalleryStore();
    const Auth = useAuthStore();
    return {
      Help,
      Auth,
      role: '',
      text: '',
      userInfo: null as UserRecord | null,
    };
  },
  methods: {
    handleMessageSubmission(text: string) {
      if (this.role === 'gallery') {
        this.Help.sendHelpMessage(this.role, text);
      } else if (this.role === 'artist') {
        this.Help.sendHelpMessage(this.role, text);
      }
    },
  },
  async created() {
    if (this.Auth.isLoggedIn) {
      this.userInfo = await this.Auth.fetchUserInfo();
      this.role = this.Auth.userRole;
    }
  },
});
</script>

<style lang="scss" scoped>
form {
  @include flex-box(column, flex-start, flex-start);
  @include sm-screen {
    @include flex-box(column, center, center);
    max-width: 100%;
    margin: 2rem 0;
    padding: 0 1rem;
  }
  margin: 3rem 0 0 1rem;
  max-width: 50%;

  h1 {
    font-size: 1rem;
  }

  input,
  textarea {
    padding: 0.3rem 1rem;
    margin-top: 1rem;
    width: 100%;
  }

  textarea {
    border: 1px solid $main-color;
  }

  input[type='submit'] {
    background-color: $main-color;
    color: $secondary-color;
  }
}
</style>

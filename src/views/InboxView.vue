<template>
  <MainLayout>
    <SpinnerLoader v-if="isLoading" />
    <ConversationCard
      v-else
      v-for="conversation in conversations"
      :key="conversation.id"
      :conversation="conversation"
    />
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainLayout from '@/layout/MainLayout.vue';
import ConversationCard from '@/components/inbox/ConversationCard.vue';
import { useGalleryStore } from '@/store/GalleriesStore';
import { useAuthStore } from '@/store/AuthStore';
import { ConversationItem } from '@/dataTypes/types';
import SpinnerLoader from '@/components/loader/SpinnerLoader.vue';

export default defineComponent({
  components: { MainLayout, ConversationCard, SpinnerLoader },
  data() {
    const authStore = useAuthStore();
    const galleryStore = useGalleryStore();
    return {
      authStore,
      galleryStore,
      conversations: [] as ConversationItem[],
      isLoading: true,
    };
  },
  async created() {
    if (this.authStore.isLoggedIn) {
      this.conversations = await this.galleryStore.getConversations();
      this.isLoading = false;
    }
  },
});
</script>

<style lang="scss" scoped></style>

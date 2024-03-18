<template>
  <MainLayout>
    <div class="message-view">
      <div>
        <div class="header">
          <img :src="image" alt="artwork" />
          <p class="message-view__message-text" v-html="htmlTitle"></p>
        </div>
        <div
          class="content-container"
          v-for="conversation in conversationMessages"
          :key="conversation.id"
        >
          <div v-if="conversation.participant_type === 'User'" class="content">
            <h3>
              {{ conversation.participant.first_name }}
              {{ conversation.participant.last_name?.charAt(0) }}
            </h3>
            <p class="message-view__message-text">{{ conversation.message }}</p>
          </div>
          <div v-else class="content">
            <h3>
              {{ secondParticipant.title }}
            </h3>
            <p class="message-view__message-text">{{ conversation.message }}</p>
          </div>
          <v-divider></v-divider>
        </div>
        <div class="form">
          <form @submit.prevent="sendMessage">
            <div class="flex">
              <label for="message">ADD YOUR REPLY</label>
              <textarea
                id="message"
                v-model="messagetoSend"
                required
              ></textarea>
            </div>
            <div class="upload">
              <v-file-input
                multiple
                label="Attachments"
                @change="onFileChange"
                class="input"
              ></v-file-input>
            </div>
            <div class="flex">
              <button type="submit">SEND MESSAGE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script lang="ts">
import MainLayout from '@/layout/MainLayout.vue';
import { useAuthStore } from '@/store/AuthStore';
import { useGalleryStore } from '@/store/GalleriesStore';
import { defineComponent } from 'vue';
import {
  MessagesData,
  Artwork,
  TheLastMessage,
  ConversationMessage,
  FirstParticipant,
  SecondParticipantClass,
} from '@/dataTypes/types';

export default defineComponent({
  components: { MainLayout },
  data() {
    const authStore = useAuthStore();
    const galleryStore = useGalleryStore();
    const id = this.$route.params.id;
    return {
      id,
      authStore,
      galleryStore,
      message: {} as MessagesData,
      artwork: {} as Artwork,
      lastMessage: {} as TheLastMessage,
      conversationMessages: [] as ConversationMessage[],
      createdAt: '',
      updatedAt: '',
      title: '',
      htmlTitle: '',
      firstParticipant: {} as FirstParticipant,
      secondParticipant: {} as SecondParticipantClass,
      messagetoSend: '',
      image: '',
      files: [] as string[],
      filesNames: [] as string[],
    };
  },
  async created() {
    if (this.authStore.isLoggedIn) {
      this.message = await this.galleryStore.fetchMessageConversation(+this.id);
      this.artwork = this.message.artwork || ({} as Artwork);
      this.lastMessage = this.message.last_message || ({} as TheLastMessage);
      this.conversationMessages = this.message.conversation_messages || [];
      this.createdAt = this.message.created_at || '';
      this.updatedAt = this.message.updated_at || '';
      this.title = this.message.title || '';
      this.htmlTitle = this.message.html_title || '';
      this.firstParticipant =
        this.message.first_participant || ({} as FirstParticipant);
      this.secondParticipant =
        this.message.second_participant || ({} as SecondParticipantClass);
      this.image = this.artwork.image.original || '';
    }
  },
  methods: {
    async sendMessage() {
      const files = this.files.map((file) => {
        return file;
      });
      const message = {
        message: this.messagetoSend,
        files: files,
      };
      const req = await this.galleryStore.sendMessageToConversation(
        +this.id,
        message
      );
      if (req.message === 'success') {
        this.messagetoSend = '';
      }
    },
    onFileChange(e: any) {
      for (let i = 0; i < e.target.files.length; i++) {
        const file = e.target.files[i];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          if (reader.result !== null) {
            this.files.push(reader.result as string);
            this.filesNames.push(file.name);
          }
        };
      }
    },
  },
});
</script>

<style lang="scss">
.message-view {
  @include flex-box(column, center, center);
  @include sm-screen {
    padding: 0 1rem;
    max-width: 100%;
    margin: 3rem 0;
  }
  max-width: 50%;
  margin: 3rem auto;

  .header {
    @include flex-box(null, null, center);
    gap: 2rem;

    & img {
      width: 7rem;
      height: 7rem;
    }
  }

  .content-container {
    margin-top: 2rem;
  }
  .content {
    @include flex-box(null, null, flex-start);
    @include sm-screen {
      flex-direction: column;
      gap: 1rem;
    }
    gap: 4rem;
    padding: 0 1rem;

    & h3 {
      min-width: 10rem;
      margin: 0;
      font-size: 1rem;
    }
  }

  form {
    margin-top: 2rem;

    .flex {
      @include flex-box(column);

      label {
        margin-bottom: 1rem;
        font-weight: 700;
      }

      textarea {
        min-height: 10rem;
        border: 1px solid $light-gray;
        padding: 1rem;
      }

      button {
        align-self: flex-start;
        width: 10rem;
        background-color: $main-color;
        color: $secondary-color;
        padding: 0.3rem 1rem;
        margin-top: 1rem;
      }
    }
    .upload {
      margin-top: 1rem;
    }
  }
}
</style>

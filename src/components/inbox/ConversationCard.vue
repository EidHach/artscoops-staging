<template>
  <router-link
    :to="`/inbox/${conversation.id}`"
    class="container"
    v-if="conversation"
  >
    <div class="image-wrapper">
      <div v-if="isMessageUnread">
        <v-icon icon="mdi-circle-medium" style="color: red; padding: 1rem" />
      </div>
      <div v-else>
        <v-icon icon="mdi-circle-medium" style="color: green; padding: 1rem" />
      </div>
      <img
        v-if="conversation.artwork && conversation.artwork.image.thumbnail"
        :src="conversation.artwork.image.thumbnail"
        :alt="conversation.artwork.title"
      />
      <div v-else class="conversation-image-placeholder">
        Artwork does not exist
      </div>
    </div>
    <div class="message-wrapper">
      <h3 v-html="conversation.html_title"></h3>
      <p>
        <span>{{ conversation.last_message.participant.inbox_name }}:</span
        >{{ conversation.last_message.message }}
      </p>
    </div>
    <div>{{ formatDate() }}</div>
  </router-link>
  <hr class="divider" />
</template>

<script lang="ts">
import { ConversationItem } from '@/dataTypes/types';
import { defineComponent, PropType } from 'vue';
import { format } from 'date-fns';

export default defineComponent({
  props: {
    conversation: {} as PropType<ConversationItem>,
  },
  computed: {
    isMessageUnread() {
      const lastMessage = this.conversation?.last_message;
      return (
        !lastMessage?.viewed_at && lastMessage?.participant_type !== 'Gallery'
      );
    },
  },
  methods: {
    formatDate() {
      const updatedAt = this.conversation?.last_message?.updated_at;
      if (updatedAt) {
        return format(new Date(updatedAt), 'yyyy-MM-dd hh:mm a');
      } else {
        return '';
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  @include sm-screen {
    @include flex-box(column, center, center);
    width: 100vw;
    padding: 2rem;
  }
  margin-top: 5rem;
  padding: 0 20rem;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  gap: 2rem;
  text-decoration: none;
  color: $main-color;

  .image-wrapper {
    @include flex-box(null, center, center);
    @include sm-screen {
      width: 100%;
      margin-bottom: 1rem;
    }
    gap: 2rem;
  }

  .message-wrapper {
    @include sm-screen {
      padding: 0 2rem;
    }
    h3 {
      font-size: 0.8rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
}
.conversation-image-placeholder {
  @include flex-box(null, center, center);
  width: 6rem;
  height: 6rem;
  padding: 1rem;
  text-align: center;
  font-style: italic;
  outline: 0.1rem solid #8080805c;
}

.divider {
  margin: 1rem 15%;
  border: none;
  height: 1px;
  color: $light-gray;
  background-color: $light-gray;
}
</style>

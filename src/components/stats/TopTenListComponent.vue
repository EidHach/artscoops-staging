<template>
  <h3>Top 10 {{ title.toUpperCase() }}</h3>
  <ul v-if="title === 'artists'">
    <li v-for="(item, index) in items" :key="item.name">
      <router-link class="link" :to="{ path: `/artists/${item.id}` }"
        >#{{ index + 1 }}- {{ item.name }}</router-link
      >
      <p>
        <span>{{ item.view_count }} views</span
        ><span>({{ item.percentage }}%)</span>
      </p>
    </li>
  </ul>
  <ul v-if="title === 'artworks'">
    <li v-for="(item, index) in items" :key="item.name">
      <router-link class="link" :to="{ path: `/artworks/${item.id}` }"
        >#{{ index + 1 }}- {{ item.name }}</router-link
      >
      <p>
        <span>{{ item.view_count }} views</span
        ><span>({{ item.percentage }}%)</span>
      </p>
    </li>
  </ul>
  <ul v-if="title === 'countries'">
    <li v-for="(item, index) in items" :key="item.name">
      <p>#{{ index + 1 }}- {{ item.name }}</p>
      <p>
        <span>{{ item.view_count }} views</span
        ><span>({{ item.percentage }}%)</span>
      </p>
    </li>
  </ul>
</template>

<script lang="ts">
import { AnalyticsData } from '../../dataTypes/types';
import { defineComponent, PropType } from 'vue';
export default defineComponent({
  props: {
    items: {
      type: Array as PropType<AnalyticsData[]>,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
h3 {
  margin-bottom: 2rem;
}
ul {
  list-style-type: none;

  li {
    border-bottom: 1px solid $main-color;

    &:last-child {
      border-bottom: none;
    }

    .link {
      text-decoration: none;
      color: #327cc4;
      font-weight: 700;
    }
  }
}
</style>

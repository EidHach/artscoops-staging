<template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-container class="d-flex align-center justify-center">
      <v-sheet width="300">
        <p class="header">LOGIN TO ARTSCOOPS CMS</p>
        <v-form @submit.prevent="handleSubmit">
          <v-text-field
            v-model="email"
            label="Email"
            :rules="emailRules"
            @change="message = ''"
          ></v-text-field>

          <v-text-field
            v-model="password"
            type="password"
            label="password"
          ></v-text-field>

          <v-btn
            type="submit"
            block
            class="mt-2"
            :loading="loading"
            :disabled="loading || !email || !password"
            color="black"
          >
            {{ loading ? 'Logging in...' : 'Submit' }}
          </v-btn>
        </v-form>
        <p class="message" v-if="showMessage">{{ message }}</p>
      </v-sheet>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAuthStore } from '@/store/AuthStore';
import { EMAIL_REGEX } from '@/constants';
const auth = useAuthStore();

export default defineComponent({
  data: () => ({
    email: '',
    emailRules: [
      (value: string) => {
        if (EMAIL_REGEX.test(value)) return true;
        return 'Incorrect email';
      },
    ],
    password: '',
    loading: false,
    message: '',
    showMessage: false,
  }),
  methods: {
    async handleSubmit() {
      this.loading = true;
      const data = await auth.login(this.email, this.password);
      if (!data) {
        this.loading = false;
        this.message = 'Incorrect email or password';
        this.showMessage = true;
      } else {
        this.$router.push('/');
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.message {
  color: red;
  text-align: center;
  font-size: 0.8rem;
  margin-top: 1rem;
}
</style>

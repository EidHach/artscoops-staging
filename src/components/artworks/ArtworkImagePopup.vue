<template>
  <div v-if="show" class="show">
    <!-- Displaying existing images -->
    <div class="popup-content">
      <div class="image-grid">
        <div
          v-for="(image, index) in images"
          :key="image.id"
          class="image-container"
        >
          <img :src="image.original" class="thumbnail" />
          <button class="delete-btn" @click="deleteImage(image.id, index)">
            X
          </button>
        </div>
        <!-- Input for uploading multiple new images -->
        <div class="image-container upload-container">
          <input
            type="file"
            multiple
            @change="onFilesSelected"
            id="fileInput"
          />
          <label for="fileInput" class="label-input">+</label>
        </div>
      </div>
      <div class="buttons-container">
        <button @click="uploadImages" class="upload-btn">
          <span v-if="isLoading">Uploading...</span>
          <span v-else>Upload</span>
        </button>
        <button @click="cancel" class="cancel-btn">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useGalleryStore } from '@/store/GalleriesStore';
import Swal from 'sweetalert2';

export default defineComponent({
  props: {
    show: Boolean,
    artwork: {
      type: Object,
      default: null,
    },
  },
  data() {
    const galleryStore = useGalleryStore();
    return {
      galleryStore,
      images: [] as any[],
      isLoading: false,
    };
  },
  name: 'App',
  methods: {
    async getImages() {
      const data = {
        object_id: this.artwork.id,
        object_type: 'Artwork',
      };
      const res = await this.galleryStore.getAttachments(data);
      this.images = res.data.items;
    },
    onFilesSelected(event: any) {
      const selectedFiles = event.target.files;
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        const imageUrl = URL.createObjectURL(file);
        this.images.push({
          id: Date.now() + i,
          original: imageUrl,
          file: file,
          isNew: true,
        });
      }
    },
    async deleteImage(id: number, index: number) {
      const selectedImage = this.images[index];

      if (selectedImage.isNew) {
        this.images.splice(index, 1);
        return;
      }
      try {
        const data = {
          object_type: 'Artwork',
          object_id: this.artwork.id,
        };
        const response = await this.galleryStore.deleteAttachment(id, data);
      } catch (err) {
        console.log(err);
      }
      this.images.splice(index, 1);
    },

    async uploadImages() {
      this.isLoading = true; 
  let successfulUploads = 0;
  const newImages = this.images.filter((image) => image.isNew);

  for (const image of newImages) {
    const formData = new FormData();
    formData.append('object_type','Artwork' );
    formData.append('object_id', this.artwork.id);
    if (image.file) {
      formData.append('image', image.file, image.file.name);
    } else {
      continue;
    }

    try {
      const response = await this.galleryStore.addAttachment(formData);

      if (response.success) {
        successfulUploads++;
      } else {
        console.error(`Error uploading image ID: ${image.id}`);
      }
    } catch (error) {
      console.error('There was an error uploading the image:', error);
    }
  }

  if (successfulUploads === newImages.length) {
    Swal.fire('Success', 'All new images uploaded successfully', 'success');
    newImages.forEach((img) => (img.isNew = false));
    this.$emit('close');
  } else {
    Swal.fire(
      'Error',
      `${successfulUploads} out of ${newImages.length} images uploaded successfully. Check console for errors.`,
      'error'
    );
  }
  this.isLoading = false;
},
    cancel() {
      this.$emit('close');
    },
  },
  async created() {
    await this.getImages();
  },
});
</script>

<style scoped>
.show {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
}

.popup-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  max-width: 50vw;
  width: 100%;
  position: relative;
}

.image-grid {
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  max-width: 50vw;
  min-height: 30vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: start;
  position: relative;
  flex: 1;
  margin-bottom: 1rem;
}

.image-container {
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  overflow: hidden;
}

.thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.delete-btn {
  position: absolute;
  top: 0;
  right: 0;
  background: #000000;
  color: white;
  border: none;
  cursor: pointer;
  padding: 0 0.5rem;
  border-radius: 50%;
}

.upload-container label {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.upload-container input {
  display: none;
}

.label-input {
  font-size: 3rem;
  color: #3860e2;
}

.buttons-container {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
}

.upload-btn,
.cancel-btn {
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.upload-btn {
  background-color: #000;
  color: #fff;

  &:hover {
    background-color: #414040;
    color: #fff;
  }
}

.cancel-btn {
  background-color: #fff;
  color: #000;

  &:hover {
    background-color: #e6dcdc;
    color: #000;
  }
}
</style>

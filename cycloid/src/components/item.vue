<template>
  <h1>item component</h1>
  <div class="item-box">
    <div class="item-thumbnail">
      {{ item }}
    </div>
    <div class="item-content">
      <div class="item-title">

      </div>
      <div class="item-description">

      </div>
    </div>
    <div class="item-button">

    </div>
  </div>
</template>

<script>
import { useFileStore } from '@/stores/file';

export default {
  data() {
    return {
      fileStore: useFileStore(),
    }
  },
  props: {
    item: Object
  },
  mounted() {
    console.log('item mounted')
  },
  methods: {
    setThumbnail() {
      let [thumb] = this.$refs.upload_file.files;
      if (thumb) {
        this.thumbnailImage = URL.createObjectURL(thumb);
        this.isThumbSetted = true;
      } else {
        this.thumbnailImage = undefined;
        this.isThumbSetted = false;
      }
    },
  }
}
</script>

<style scoped lang="scss">

</style>

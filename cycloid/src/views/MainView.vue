<template>
  <h1>Main View</h1>
  <div class="container">
    <div class="main-header">
      <div class="logo-container">
        logo
      </div>
      <div class="trashbox-button">
        <a href="/trashbox">삭제 리스트</a>
      </div>
      <div class="upload-button">
        <label for="file">
          <div class="upload-button active-button">이미지, 영상 업로드</div>
        </label>
        <input type="file" name="file" id="file" ref="upload_file" accept="image/*, video/*" @change="uploadFile">
      </div>
    </div>
    <div class="main-body">
      <div class="content">
        <div class="carousel">
          <!-- 재생목록 존재 시 표시 -->
        </div>
        <div class="itemlist">

        </div>
      </div>
      <div class="playlist">

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useFileStore } from '../stores/file.js';

export default {
  data() {
    return {
      fileStore: useFileStore(),

      user: "",
    }
  },
  mounted() {
    console.log('main view created');
    this.getUser();
    console.log(this.user);

    this.getItemList();
  },
  methods: {

    // msw test
    async getUser() {
      axios.get('https://api.example.com/user')
        .then((response) => {
          this.user = response.data;
        })
    },
    // 

    uploadFile() {
      console.log('upload file');
      let file = this.$refs.upload_file.files[0];
      console.log('file!', file);
      this.fileStore.setFileList(file);
    },
    getItemList() {
      axios.get('https://api.example.com/itemlist')
      .then((response) => {
        console.log('item list', response.data);
      })
    },
  },
  computed: {
    
  }
}
</script>

<style scoped lang="scss">
#file {
  display: none;
}
</style>

import { defineStore } from 'pinia';
import axios from 'axios';

export const useFileStore = defineStore('file', {
  state: () => ({
    files: undefined,
  }),
  actions: {
    setFileList(file) {
      // this.files.push(file);
      // console.log('list!', this.files);
      // console.log('size!', this.files[0].size);
      console.log('file!,', file);
      const formData = new FormData()
      formData.append('file', file);
      axios.post('https://api.example.com/upload', 
        formData,
        {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    },
  }
})

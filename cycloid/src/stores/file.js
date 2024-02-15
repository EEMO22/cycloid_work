import { defineStore } from 'pinia';
import axios from 'axios';

export const useFileStore = defineStore('file', {
  state: () => ({
    files: undefined,
  }),
  actions: {
    setFileList(file) {
      console.log('file!,', file);
      const formData = new FormData()
      formData.append('files', file);
      axios.post('https://api.example.com/upload', 
        formData,
        {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        console.log('response', response);
      })
    },
  }
})

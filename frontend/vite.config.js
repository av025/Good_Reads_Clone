import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      src:"/src",
      components: "/src/Components",
      pages:"/src/Pages",
      config:"/src/Config",
      helpers:"/src/Helpers",
      layout:"/src/Layouts",
      assests:"/src/Assests",
      store:"/src/Store",
      routes:"/src/Routes"

    }
  }
})

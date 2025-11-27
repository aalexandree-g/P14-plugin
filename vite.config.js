import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './index.js',
      name: 'HrnetDatepicker',
      fileName: (format) => `hrnet-plugin-datepicker.${format}.js`,
    },
    rollupOptions: {
      // On n'embarque pas React dans le bundle
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})

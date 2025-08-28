import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/"
  };

if (command !== "serve") {
  configs.base = "/spa/";
}

return configs;
});

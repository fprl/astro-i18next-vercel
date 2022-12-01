import { defineConfig } from 'astro/config';
import astroI18next from 'astro-i18next';

// https://astro.build/config
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [astroI18next()],
  output: 'server',
  adapter: vercel(),
});

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'http://astresnumeros.fr',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
export default defineConfig({
  site: 'http://astresnumeros.fr',
  trailingSlash: 'always',
  adapter: cloudflare(),
  integrations: [sitemap()],
});
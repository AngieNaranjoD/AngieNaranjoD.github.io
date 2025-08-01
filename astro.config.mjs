import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import staticAdapter from '@astrojs/static';

export default defineConfig({
  adapter: staticAdapter(),
  site: 'https://tusitio.github.io',
  integrations: [
    mdx(),
    sitemap()
  ],
  base: '/',
  output: 'static',
});

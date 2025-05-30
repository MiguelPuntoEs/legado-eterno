// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
    site: 'https://www.tulegadoeterno.com',
    vite: {
        plugins: [tailwindcss()],
    },

    experimental: {
        fonts: [
            {
                provider: fontProviders.google(),
                name: 'Inter',
                cssVariable: '--font-inter',
                weights: ['100 900'],
            },
            {
                provider: fontProviders.google(),
                name: 'Playfair Display',
                cssVariable: '--font-playfair',
                weights: ['400 900'],
                styles: ['italic', 'normal'],
            },
        ],
    },

    integrations: [sitemap()],
})

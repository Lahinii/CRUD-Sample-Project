import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig(({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return {
        plugins: [
            laravel({
                input: ['resources/css/app.css', 'resources/js/app.js'],
                refresh: true,
            }),
        ],
        server: {
            host: 'localhost',
            hmr: {
                host: process.env.APP_URL || 'localhost',
            },
        },
        define: {
            'process.env.APP_URL': JSON.stringify(process.env.APP_URL || 'http://localhost:8000'),
        },
    };
});


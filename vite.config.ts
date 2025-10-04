import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Configuration pour ignorer les avertissements de source map
const ignoreWarnings = (warning, warn) => {
  if (warning.code === 'SOURCEMAP_ERROR' || 
      (warning.message && warning.message.includes('sourcemap'))) {
    return;
  }
  warn(warning);
};

export default defineConfig({
  plugins: [
    react()
  ],
  
  // Désactiver les source maps en développement
  css: {
    devSourcemap: false
  },

  // Configuration du serveur
  server: {
    port: 5173,
    open: true,
    fs: {
      strict: false
    },
    hmr: {
      overlay: false
    }
  },

  // Configuration de la construction
  build: {
    sourcemap: false,
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      onwarn: ignoreWarnings
    }
  },

  // Configuration d'ESBuild
  esbuild: {
    logOverride: { 
      'this-is-undefined-in-esm': 'silent',
      'ignored-bare-import': 'silent',
      'source-map': 'silent'
    },
    sourcemap: false
  },

  // Alias pour les imports
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  // Optimisation des dépendances
  optimizeDeps: {
    exclude: ['html5-qrcode'],
    esbuildOptions: {
      target: 'es2020'
    }
  },

  // Configuration supplémentaire
  define: {
    'process.env': {}
  }
});

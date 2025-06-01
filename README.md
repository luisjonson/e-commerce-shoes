# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Roda em modo desenvolvimento
## npm run dev 

# extensões 

## Material Icon theme
## Simple React Snippets
## javaScript auto backticks
## vscode-styled-components

# Biblioteca
## npm install styled-components
## primereact 
## primeflex 
## primeicons

**Bibliotecara ultilizado no carocel**
## npm install swiper


⚠️ Quer alterar a cor interna (fill) do SVG?
Você precisa importar o SVG como componente (inline), assim:

1. Instale o plugin SVGR no seu projeto Vite:
Se estiver usando Vite, instale:

npm i -D vite-plugin-svgr

Forma certa de importa o svg
import Logo from '../assets/logo-header.svg?react'


configuração do vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  base: '/e-commerce-shoes',
  plugins: [react(), svgr()],
})

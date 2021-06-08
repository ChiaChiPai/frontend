# Shared TW

## 開發

```bash
# install pnpm package manager
npm i -g pnpm

# install deps
pnpm i

# run dev server
pnpm dev

# run build
pnpm build

# preview dist files
pnpm server
```

## Features

### Coding Style

- [`<script setup>`](https://github.com/vuejs/rfcs/pull/227)
- Vue SFC (order by top to bottom)
  - script: `<script setup lang="ts">`
  - template: `<template>`
  - style: `<style scoped lang="postcss">`

### Vite 插件功能

#### 資料夾類

- `src/components`
  - 此資料夾下的 Component 可以在任何 .vue 檔案中直接使用。
  - <https://github.com/antfu/vite-plugin-components>
- `src/pages`
  - 新增檔案後會自動生成對應的頁面到 vue-router 用法跟 Nuxt.js 一樣。
  - <https://github.com/hannoeru/vite-plugin-pages>

#### 功能類

- `Windi CSS (Tailwind CSS)`
  - 功能跟 Tailwind 完全一樣，只是對於 Vite 的支援性比較好
  - 設定檔案：`windi.config.ts`
  - <https://windicss.org/>
- `Icon 自動導入`
  - 只要進入這個網站
  - <https://icones.netlify.app/>
  - 選擇你要的 icon 然後直接以 components 的方式使用，比如說：`<mdi:menu />`
  - Vite 就會自動導入對應的 svg
  - 調整顏色大小（配合Tailwind）
    - 顏色：`text-white`
    - 大小：`text-xl`

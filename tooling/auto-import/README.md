# `@uniland-ui/vue-auto-import`

If you use [Vite](https://vitejs.org), you can use this package to auto import components for you so that you needn't manually import components from Uniland UI Vue that you want to consume.


This package depends on the [`unplugin-vue-components`]() to help resolve components from the template. `@uniland-ui/vue-auto-import` exports a `componentResolverFunction` that will identify Uniland UI Vue components and resolve them for you.

## Installation

```sh
yarn add @uniland-ui/vue-auto-import && yarn add -D unplugin-vue-components
# or
npm i @uniland-ui/vue-auto-import && npm install --dev unplugin-vue-components
```

## Usage
```ts
// In `vite.config.ts` file

import { defineConfig } from 'vite'
import ComponentsPlugin from 'unplugin-vue-components'
import { componentResolver } from '@uniland-ui/vue-auto-import'


export default defineConfig({
  plugins: [
    ComponentsPlugin({
      customComponentResolvers: [componentResolver]
    })
  ]
})
```

That's it! In your template, you can use it as follows:
```vue
<template>
  <u-alert status="info" mb="3">
    <u-alert-title> Info alert </u-alert-title>
    <u-alert-description> Something just happened </u-alert-description>
  </u-alert>
</template>
```
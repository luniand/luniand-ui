<template>
  <u-reset />
  <uniland.section display="flex" transition="all 0.2s" height="inherit" w="inherit">
    <perfect-scrollbar>
      <uniland.div pb="12">
        <u-sidebar :stories="routes" />
      </uniland.div>
    </perfect-scrollbar>
  </uniland.section>
</template>

<script setup lang="ts">
import { UReset, UBox, USquare } from '@uniland-ui/vue'
import USidebar from './components/Sidebar'
import { routes } from './router'
</script>

<style src="vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css"></style>

<style>
html, body {
  margin: 0;
  height: 100vh;
  width: 100vw;
}

html {
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

#app {
  height: inherit;
  width: inherit;
}

a {
  text-decoration: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.ps {
  height: 100vh;
  width: 275px;
}
</style>
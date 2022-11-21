<template>
  <u-reset />
  <uniland.section display="flex" transition="all 0.2s" height="inherit" w="inherit">
    <perfect-scrollbar>
      <uniland.div pb="12">
        <u-sidebar :stories="routes" />
      </uniland.div>
    </perfect-scrollbar>
    <u-center w="full" pos="relative" border-left="1px solid" border-color="gray.200" padding="4">
      <u-square box-size="800px">
        <router-view v-slot="{ Component, route }">
          <!-- <transition name="fade" mode="out-in"> -->
            <component :is="Component" />
          <!-- </transition> -->
        </router-view>
      </u-square>
    </u-center>
  </uniland.section>
</template>

<script setup lang="ts">
import {computed} from "@vue/runtime-core"
import { UReset, UCenter, USquare , useColorMode} from '@uniland-ui/vue'
import USidebar from './components/Sidebar'
import { routes } from './router'

const { colorMode, toggleColorMode } = useColorMode()

    const rootStyles = computed(() => {
      const styles = {
        light: {
          bg: 'white',
          color: 'blackAlpha.800',
          'a.router-link-active': {
            color: 'teal.500',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            textDecoration: 'underline'
          }
        },
        dark: {
          bg: 'gray.800',
          color: 'whiteAlpha.800',
          'a.router-link-active': {
            color: 'teal.200',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            textDecoration: 'underline',
          }
        },
      }
      
      return {
        transition: 'all 0.2s ease-in',
        ...styles[colorMode.value]
      }
    })
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
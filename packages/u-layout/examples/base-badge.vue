<template>
  <uniland.div py="4">
    <uniland.h3>Default Badge</uniland.h3>
    <u-badge> New ! </u-badge>
  </uniland.div>
  <uniland.div py="4">
    <uniland.h3>Outline Badges</uniland.h3>
    <u-badge
      v-for="(color, i) in colorSchemes"
      :key="i"
      :color-scheme="color"
      variant="outline"
      mr="2"
    >
      {{ color }}
    </u-badge>
  </uniland.div>
  <uniland.div py="4">
    <uniland.h3>Solid Badges</uniland.h3>
    <u-badge
      v-for="(color, i) in colorSchemes"
      :key="i"
      :color-scheme="color"
      variant="solid"
      mr="2"
    >
      {{ color }}
    </u-badge>
  </uniland.div>
  <uniland.div py="4">
    <uniland.h3>Subtle Badges</uniland.h3>
    <u-badge
      v-for="(color, i) in colorSchemes"
      :key="i"
      :color-scheme="color"
      variant="subtle"
      mr="2"
    >
      {{ color }}
    </u-badge>
  </uniland.div>
</template>
<script setup>
import { ref } from "vue"

const colorSchemes = ref(["gray", "green", "red", "orange", "purple", "teal"])
</script>

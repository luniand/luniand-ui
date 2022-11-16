<template>
  <uisland.div py="4">
    <uisland.h3>Default Badge</uisland.h3>
    <c-badge> New ! </c-badge>
  </uisland.div>
  <uisland.div py="4">
    <uisland.h3>Outline Badges</uisland.h3>
    <c-badge
      v-for="(color, i) in colorSchemes"
      :key="i"
      :color-scheme="color"
      variant="outline"
      mr="2"
    >
      {{ color }}
    </c-badge>
  </uisland.div>
  <uisland.div py="4">
    <uisland.h3>Solid Badges</uisland.h3>
    <c-badge
      v-for="(color, i) in colorSchemes"
      :key="i"
      :color-scheme="color"
      variant="solid"
      mr="2"
    >
      {{ color }}
    </c-badge>
  </uisland.div>
  <uisland.div py="4">
    <uisland.h3>Subtle Badges</uisland.h3>
    <c-badge
      v-for="(color, i) in colorSchemes"
      :key="i"
      :color-scheme="color"
      variant="subtle"
      mr="2"
    >
      {{ color }}
    </c-badge>
  </uisland.div>
</template>
<script setup>
import { ref } from "vue"

const colorSchemes = ref(["gray", "green", "red", "orange", "purple", "teal"])
</script>

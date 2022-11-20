<template>
  <u-container>
    There are many benefits to a joint design and development system. Not only
    does it bring benefits to the design team, but it also brings benefits to
    engineering teams. It makes sure that our experiences have a consistent look
    and feel, not just in our design specs, but in production
  </u-container>
  <u-v-stack my="4">
    <u-container max-w="container.xl">Extra-Large Container</u-container>
    <u-container max-w="container.lg">Large Container</u-container>
    <u-container max-w="container.md">Medium Container</u-container>
    <u-container max-w="container.sm">Small Container</u-container>
  </u-v-stack>
</template>
<script setup>
import { CVStack } from "@uniland-ui/vue-layout"
</script>

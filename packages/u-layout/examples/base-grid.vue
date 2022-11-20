<template>
  <u-grid template-columns="repeat(5, 1fr)" gap="6">
    <u-box w="100%" h="10" bg="blue.500" />
    <u-box w="100%" h="10" bg="blue.500" />
    <u-box w="100%" h="10" bg="blue.500" />
    <u-box w="100%" h="10" bg="blue.500" />
    <u-box w="100%" h="10" bg="blue.500" />
  </u-grid>
  <u-divider my="15" border-color="gray.500" />
  <u-grid
    h="200px"
    templateRows="repeat(2, 1fr)"
    templateColumns="repeat(5, 1fr)"
    gap="4"
  >
    <u-grid-item rowSpan="2" colSpan="1" bg="tomato" />
    <u-grid-item colSpan="2" bg="papayawhip" />
    <u-grid-item colSpan="2" bg="papayawhip" />
    <u-grid-item colSpan="4" bg="tomato" />
  </u-grid>
</template>
<script setup lang="ts"></script>

<template>
  <uniland.div py="4">
    <uniland.div py="4">
      <uniland.div>Stack Default</uniland.div>
      <c-stack spacing="4" divider>
        <uniland.div w="40px" h="40px" bg="yellow.200"> 1 </uniland.div>
        <uniland.div w="40px" h="40px" bg="tomato"> 2 </uniland.div>
        <uniland.div w="40px" h="40px" bg="pink.100"> 3 </uniland.div>
      </c-stack>
    </uniland.div>

    <uniland.div py="4">
      <uniland.div>Horizontal</uniland.div>
      <c-h-stack spacing="10">
        <uniland.div w="40px" h="40px" bg="yellow.200"> 1 </uniland.div>
        <uniland.div w="40px" h="40px" bg="tomato"> 2 </uniland.div>
        <uniland.div w="40px" h="40px" bg="pink.100"> 3 </uniland.div>
      </c-h-stack>
    </uniland.div>

    <uniland.div py="4">
      <uniland.div>Vertical</uniland.div>
      <c-v-stack spacing="2" align="stretch">
        <uniland.div h="40px" bg="yellow.200"> 1 </uniland.div>
        <uniland.div h="40px" bg="tomato"> 2 </uniland.div>
        <uniland.div h="40px" bg="pink.100"> 3 </uniland.div>
      </c-v-stack>
    </uniland.div>
  </uniland.div>
</template>
<script lang="ts" setup>
import { uniland } from "@uniland-ui/vue-system"
import { CHStack, CVStack } from "@uniland-ui/vue-layout"
</script>

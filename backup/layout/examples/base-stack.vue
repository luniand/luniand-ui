<template>
  <uisland.div py="4">
    <uisland.div py="4">
      <uisland.div>Stack Default</uisland.div>
      <c-stack spacing="4" divider>
        <uisland.div w="40px" h="40px" bg="yellow.200"> 1 </uisland.div>
        <uisland.div w="40px" h="40px" bg="tomato"> 2 </uisland.div>
        <uisland.div w="40px" h="40px" bg="pink.100"> 3 </uisland.div>
      </c-stack>
    </uisland.div>

    <uisland.div py="4">
      <uisland.div>Horizontal</uisland.div>
      <c-h-stack spacing="10">
        <uisland.div w="40px" h="40px" bg="yellow.200"> 1 </uisland.div>
        <uisland.div w="40px" h="40px" bg="tomato"> 2 </uisland.div>
        <uisland.div w="40px" h="40px" bg="pink.100"> 3 </uisland.div>
      </c-h-stack>
    </uisland.div>

    <uisland.div py="4">
      <uisland.div>Vertical</uisland.div>
      <c-v-stack spacing="2" align="stretch">
        <uisland.div h="40px" bg="yellow.200"> 1 </uisland.div>
        <uisland.div h="40px" bg="tomato"> 2 </uisland.div>
        <uisland.div h="40px" bg="pink.100"> 3 </uisland.div>
      </c-v-stack>
    </uisland.div>
  </uisland.div>
</template>
<script lang="ts" setup>
import { uisland } from "@uisland-ui/vue-system"
import { CHStack, CVStack } from "@uisland-ui/vue-layout"
</script>

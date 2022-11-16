<template>
  <c-flex align="center">
    <c-flex :bg="{ base: 'green.50', sm: 'blue.50' }" align="flex-end">
      <uisland.p>Box 1</uisland.p>
    </c-flex>
    <c-flex
      :bg="['blue.50', 'pink.50']"
      size="150px"
      align="center"
      justify="center"
    >
      <uisland.p text-align="center" bg="orange.50"> Box 2 </uisland.p>
    </c-flex>
    <uisland.div>
      <uisland.p bg="tomato" color="white"> Box 3 </uisland.p>
    </uisland.div>
  </c-flex>
</template>

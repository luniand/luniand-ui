<template>
  <div>
    <uisland.h2>Row (default)</uisland.h2>
    <c-flex direction="row" justify-content="space-between">
      <uisland.div rounded="md" w="12" h="12" shadow="inner" bg="green.500">
        div 1
      </uisland.div>
      <uisland.div rounded="md" w="12" h="12" shadow="inner" bg="blue.500">
        div 2
      </uisland.div>
      <uisland.div rounded="md" w="12" h="12" shadow="inner" bg="red.500">
        div 3
      </uisland.div>
    </c-flex>
    <uisland.h2>Column</uisland.h2>
    <c-flex direction="column" justify-content="space-between">
      <uisland.div rounded="md" w="12" h="12" shadow="inner" bg="green.500">
        div 1
      </uisland.div>
      <uisland.div rounded="md" w="12" h="12" shadow="inner" bg="blue.500">
        div 2
      </uisland.div>
      <uisland.div rounded="md" w="12" h="12" shadow="inner" bg="red.500">
        div 3
      </uisland.div>
    </c-flex>
  </div>
</template>

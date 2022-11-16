<template>
  <uisland.div py="4">
    <uisland.h3>Unordered</uisland.h3>
    <uisland.div py="4">
      <c-unordered-list>
        <c-list-item>Lorem ipsum dolor sit amet</c-list-item>
        <c-list-item>Consectetur adipiscing elit</c-list-item>
        <c-list-item>Integer molestie lorem at massa</c-list-item>
        <c-list-item>Facilisis in pretium nisl aliquet</c-list-item>
      </c-unordered-list>
    </uisland.div>
  </uisland.div>
  <uisland.div py="4">
    <uisland.h3>Ordered</uisland.h3>
    <uisland.div py="4">
      <c-ordered-list>
        <c-list-item>Lorem ipsum dolor sit amet</c-list-item>
        <c-list-item>Consectetur adipiscing elit</c-list-item>
        <c-list-item>Integer molestie lorem at massa</c-list-item>
        <c-list-item>Facilisis in pretium nisl aliquet</c-list-item>
      </c-ordered-list>
    </uisland.div>
  </uisland.div>
  <uisland.div py="4">
    <uisland.h3>Icon</uisland.h3>
    <uisland.div py="4">
      <c-list>
        <c-list-item>
          <c-list-icon name="check-circle" color="green.500" />

          Lorem ipsum dolor sit amet.
        </c-list-item>
        <c-list-item>
          <c-list-icon name="check-circle" color="green.500" />
          Consectetur adipiscing elit</c-list-item
        >
        <c-list-item>
          <c-list-icon name="check-circle" color="green.500" />
          Integer molestie lorem at massa</c-list-item
        >
        <c-list-item>
          <c-list-icon name="exclamation" color="green.500" />
          Facilisis in pretium nisl aliquet</c-list-item
        >
      </c-list>
    </uisland.div>
  </uisland.div>
</template>
<script setup></script>

---
to: packages/<%=h.changeCase.paramCase(name)%>/src/<%=h.changeCase.paramCase(name)%>.ts
---
/**
 * Hey! Welcome to @uisland-ui/vue-next <%= h.changeCase.pascalCase(name) %>
 *
 * <%=h.changeCase.sentence(description)%>
 *
 * @see Docs     https://next.vue.uisland-ui.com/<%=h.changeCase.paramCase(name)%>
 * @see Source   https://github.com/uisland-ui/uisland-ui-vue-next/blob/master/packages/<%=h.changeCase.paramCase(name)%>/src/<%=h.changeCase.paramCase(name)%>/<%=h.changeCase.paramCase(name)%>.ts
 * @see WAI-ARIA https://www.w3.org/TR/wai-aria-practices-1.2
 */

import { h, defineComponent, PropType } from 'vue'
import { uisland, DOMElements } from '@uisland-ui/vue-system'

export const <%= h.changeCase.pascalCase(name) %> = defineComponent({
  props: {
    as: {
      type: [Object, String] as PropType<DOMElements>,
      default: 'div',
    },
  },
  setup(props, { slots, attrs }) {
    return () => h(uisland(props.as), { ...attrs }, slots)
  },
})

---
to: packages/<%=h.changeCase.paramCase(name)%>/src/<%=h.changeCase.paramCase(name)%>.ts
---
/**
 * Hey! Welcome to @uniland-ui/vue-next <%= h.changeCase.pascalCase(name) %>
 *
 * <%=h.changeCase.sentence(description)%>
 *
 * @see Docs     https://next.vue.uniland-ui.com/<%=h.changeCase.paramCase(name)%>
 * @see Source   https://github.com/uniland-ui/uniland-ui-vue-next/blob/master/packages/<%=h.changeCase.paramCase(name)%>/src/<%=h.changeCase.paramCase(name)%>/<%=h.changeCase.paramCase(name)%>.ts
 * @see WAI-ARIA https://www.w3.org/TR/wai-aria-practices-1.2
 */

import { h, defineComponent, PropType } from 'vue'
import { uniland, DOMElements } from '@uniland-ui/system'

export const <%= h.changeCase.pascalCase(name) %> = defineComponent({
  props: {
    as: {
      type: [Object, String] as PropType<DOMElements>,
      default: 'div',
    },
  },
  setup(props, { slots, attrs }) {
    return () => h(uniland(props.as), { ...attrs }, slots)
  },
})

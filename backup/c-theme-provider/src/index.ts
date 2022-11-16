import {
  h,
  defineComponent,
  Fragment,
  PropType,
  provide,
  inject,
  computed,
} from "vue"
import { Theme } from "@uisland-ui/vue-theme"
import { ComponentWithProps } from "@uisland-ui/vue-system"

export interface CThemeProviderProps {
  value?: Theme
}

const CThemeProvider: ComponentWithProps<CThemeProviderProps> = defineComponent(
  {
    name: "CThemeProvider",
    props: {
      value: {
        type: [Object] as PropType<Theme>,
        default: () => undefined,
      },
    },
    setup(props, { slots }) {
      const pluginTheme = inject("$uislandTheme")
      const applicationTheme = computed(() => props.value || pluginTheme)
      provide("$uislandTheme", applicationTheme.value)
      return () => h(Fragment, slots.default?.({ $uislandTheme: props.value }))
    },
  }
)

export default CThemeProvider

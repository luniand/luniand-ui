import {
  h,
  defineComponent,
  Fragment,
  PropType,
  provide,
  inject,
  computed,
} from "vue"
import { Theme } from "@uniland-ui/vue-theme"
import { ComponentWithProps } from "@uniland-ui/vue-system"

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
      const pluginTheme = inject("$unilandTheme")
      const applicationTheme = computed(() => props.value || pluginTheme)
      provide("$unilandTheme", applicationTheme.value)
      return () => h(Fragment, slots.default?.({ $unilandTheme: props.value }))
    },
  }
)

export default CThemeProvider

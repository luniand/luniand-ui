import {
  h,
  defineComponent,
  Fragment,
  PropType,
  provide,
  inject,
  computed,
} from "@vue/runtime-core"
import { Theme } from "@uniland-ui/theme"
import { ComponentWithProps } from "@uniland-ui/system"

export interface UThemeProviderProps {
  value?: Theme
}

const UThemeProvider: ComponentWithProps<UThemeProviderProps> = defineComponent(
  {
    name: "UThemeProvider",
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

export default UThemeProvider

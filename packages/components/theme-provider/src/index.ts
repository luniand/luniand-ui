import {
  h,
  defineComponent,
  Fragment,
  PropType,
  provide,
  inject,
  computed,
} from "@vue/runtime-core";
import { Theme } from "@luniand-ui/theme";
import { ComponentWithProps } from "@luniand-ui/system";

export interface UThemeProviderProps {
  value?: Theme;
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
      const pluginTheme = inject("$luniandTheme");
      const applicationTheme = computed(() => props.value || pluginTheme);
      provide("$luniandTheme", applicationTheme.value);
      return () => h(Fragment, slots.default?.({ $luniandTheme: props.value }));
    },
  }
);

export default UThemeProvider;

import { filterUndefined, SNAO } from "@luniand-ui/utils";
import { vueThemingProps } from "@luniand-ui/prop-utils";
import {
  luniand,
  HTMLLuniandProps,
  ThemingProps,
  SystemProps,
  useStyleConfig,
  DOMElements,
  ComponentWithProps,
  DeepPartial,
} from "@luniand-ui/system";
import { computed, defineComponent, h, PropType } from "vue";

export interface TextProps extends HTMLLuniandProps<"p">, ThemingProps<"Text"> {
  /**
   * The CSS `text-align` property
   * @type SystemProps["textAlign"]
   */
  align?: SystemProps["textAlign"];
  /**
   * The CSS `text-decoration` property
   * @type SystemProps["textDecoration"]
   */
  decoration?: SystemProps["textDecoration"];
  /**
   * The CSS `text-transform` property
   * @type SystemProps["textTransform"]
   */
  casing?: SystemProps["textTransform"];
}

/**
 * Used to render texts or paragraphs.
 *
 * @see Docs https://vue.luniand-ui.com/docs/typography/text
 */
export const LText: ComponentWithProps<DeepPartial<TextProps>> =
  defineComponent({
    name: "LText",
    props: {
      as: {
        type: [Object, String] as PropType<DOMElements>,
        default: "p",
      },
      align: SNAO as PropType<TextProps["textAlign"]>,
      decoration: SNAO as PropType<TextProps["textDecoration"]>,
      casing: SNAO as PropType<TextProps["textTransform"]>,
      ...vueThemingProps,
    },
    setup(props, { slots, attrs }) {
      const themingProps = computed<ThemingProps>(() =>
        filterUndefined({
          colorScheme: props.colorScheme,
          variant: props.variant,
          size: props.size,
          styleConfig: props.styleConfig,
        })
      );

      // TODO: add text into type of useStyleConfig
      // @ts-ignore
      const styles = useStyleConfig("Text", themingProps);

      const aliasedProps = computed(() =>
        filterUndefined({
          textAlign: props.align,
          textDecoration: props.decoration,
          textTransform: props.casing,
        })
      );

      return () =>
        h(
          luniand.p,
          {
            __label: "text",
            ...aliasedProps.value,
            __css: styles.value,
            ...attrs,
          },
          slots
        );
    },
  });

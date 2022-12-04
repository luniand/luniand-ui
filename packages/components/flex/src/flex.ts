import {
  h,
  defineComponent,
  PropType,
  reactive,
  inject,
} from "@vue/runtime-core";
import {
  luniand,
  DOMElements,
  ThemingProps,
  SystemStyleObject,
  ComponentWithProps,
  DeepPartial,
} from "@luniand-ui/system";

export interface FlexProps {
  /**
   * Shorthand for `alignItems` style prop
   * @type SystemStyleObject["alignItems"]
   * SystemStyleObject because prop can be String, Array or Object
   */
  align?: SystemStyleObject["alignItems"];

  /**
   * Shorthand for `justifyContent` style prop
   * @type SystemStyleObject["justifyContent"]
   */
  justify?: SystemStyleObject["justifyContent"];

  /**
   * Shorthand for `flexWrap` style prop
   * @type SystemStyleObject["flexWrap"]
   */
  wrap?: SystemStyleObject["flexWrap"];

  /**
   * Shorthand for `flexDirection` style prop
   * @type SystemStyleObject["flexDirection"]
   */
  direction?: SystemStyleObject["flexDirection"];

  /**
   * Shorthand for `flexBasis` style prop
   * @type SystemStyleObject["flexBasis"]
   */
  basis?: SystemStyleObject["flexBasis"];

  /**
   * Shorthand for `flexGrow` style prop
   * @type SystemStyleObject["flexGrow"]
   */
  grow?: SystemStyleObject["flexGrow"];

  /**
   * Shorthand for `flexShrink` style prop
   * @type SystemStyleObject["flexShrink"]
   */
  shrink?: SystemStyleObject["flexShrink"];
}

export const LFlex: ComponentWithProps<DeepPartial<FlexProps>> =
  defineComponent({
    props: {
      as: {
        type: [Object, String] as PropType<DOMElements>,
        default: "div",
      },
      align: [Object, String, Array] as PropType<FlexProps["align"]>,
      justify: [Object, String, Array] as PropType<FlexProps["justify"]>,
      wrap: [Object, String, Array] as PropType<FlexProps["wrap"]>,
      direction: {
        type: [Object, String, Array] as PropType<FlexProps["direction"]>,
        default: "row",
      },
      basis: [Object, String, Array] as PropType<FlexProps["basis"]>,
      grow: [Object, String, Array] as PropType<FlexProps["grow"]>,
      shrink: [Object, String, Array] as PropType<FlexProps["shrink"]>,
      size: String as PropType<ThemingProps["size"]>,
    },
    setup(props, { slots, attrs }) {
      const styles = reactive({
        display: "flex",
        flexDirection: props.direction,
        alignItems: props.align,
        justifyContent: props.justify,
        flexWrap: props.wrap,
        flexBasis: props.basis,
        flexGrow: props.grow,
        flexShrink: props.shrink,
        h: props.size,
        w: props.size,
      });
      console.log("inject from flex: ", inject("$aaaa"));
      return () =>
        h(
          luniand.div,
          {
            as: props.as,
            __label: "flex",
            __css: styles,
            ...attrs,
          },
          slots
        );
    },
  });

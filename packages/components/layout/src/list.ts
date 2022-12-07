import { LIcon } from "@luniand-ui/icons";
import {
  luniand,
  DOMElements,
  HTMLLuniandProps,
  SystemProps,
  ThemingProps,
  useMultiStyleConfig,
  useStyles,
  StylesProvider,
  ComponentWithProps,
  DeepPartial,
} from "@luniand-ui/system";
import { h, defineComponent, PropType, computed } from "vue";
import { getValidChildren, SNAO, SAO } from "@luniand-ui/utils";

interface ListOptions {
  /**
   * Short hand prop for `listStyleType`
   * @type SystemProps["listStyleType"]
   */
  styleType?: SystemProps["listStyleType"];
  /**
   * Short hand prop for `listStylePosition`
   * @type SystemProps["listStylePosition"]
   */
  stylePosition?: SystemProps["listStylePosition"];
  /**
   * The space between each list item
   * @type SystemProps["margin"]
   */
  spacing?: SystemProps["margin"];
}

export interface ListProps
  extends HTMLLuniandProps<"ul">,
    ThemingProps<"List">,
    ListOptions {}

/**
 * List is used to display list items, it renders a `<ul>` by default.
 *
 * @see Docs https://vue.luniand-ui.com/docs/data-display/list
 */
export const UList: ComponentWithProps<DeepPartial<ListProps>> =
  defineComponent({
    name: "UList",
    props: {
      as: {
        type: [Object, String] as PropType<DOMElements>,
        default: "ul",
      },
      styleType: {
        type: SAO as PropType<ListProps["listStyleType"]>,
        default: "none",
      },
      stylePosition: SAO as PropType<ListProps["listStylePosition"]>,
      spacing: SNAO as PropType<ListProps["margin"]>,
    },
    setup(props, { slots, attrs }) {
      const styles = useMultiStyleConfig("List", props);
      StylesProvider(styles);
      const selector = "& > *:not(style) ~ *:not(style)";

      const spacingStyle = computed(() =>
        props.spacing ? { [selector]: { mt: props.spacing } } : {}
      );

      return () => {
        const validChildren = () => getValidChildren(slots);

        return h(
          luniand.ul,
          {
            __label: "list",
            as: props.as,
            listStyleType: props.styleType,
            listStylePosition: props.stylePosition,
            role: "list",
            __css: {
              ...styles.value.container,
              ...spacingStyle.value,
            },
            ...attrs,
          },
          validChildren
        );
      };
    },
  });

export const UOrderedList: ComponentWithProps<DeepPartial<ListProps>> =
  defineComponent({
    name: "UOrderedList",
    setup(props, { slots, attrs }) {
      return () =>
        h(
          luniand(UList, {
            styleType: "decimal",
            marginStart: "1em",
            ...attrs,
          }),
          {},
          slots
        );
    },
  });

export const UUnorderedList: ComponentWithProps<DeepPartial<ListProps>> =
  defineComponent({
    name: "UUnorderedList",
    setup(props, { slots, attrs }) {
      return () =>
        h(
          luniand(UList, {
            styleType: "initial",
            marginStart: "1em",
            ...attrs,
          }),
          {},
          slots
        );
    },
  });

export const UListItem: ComponentWithProps<
  DeepPartial<HTMLLuniandProps<"li">>
> = defineComponent({
  name: "UListItem",
  setup(_, { slots, attrs }) {
    const styles = useStyles();
    return () =>
      h(
        luniand.li,
        {
          __label: "list__item",
          // @ts-ignore
          __css: styles.value.item,
          ...attrs,
        },
        slots
      );
  },
});

export const UListIcon: ComponentWithProps<
  DeepPartial<HTMLLuniandProps<"svg">>
> = defineComponent({
  name: "UListIcon",
  setup(_, { slots, attrs }) {
    const styles = useStyles();
    return () =>
      h(
        luniand(LIcon, {
          role: "presentation",
          // @ts-ignore
          __css: styles.value.icon,
          ...attrs,
        }),
        {},
        slots
      );
  },
});

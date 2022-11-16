import { CIcon } from "@uisland-ui/c-icon"
import {
  HTMLUislandProps,
  SystemProps,
  ThemingProps,
  useMultiStyleConfig,
  useStyles,
  StylesProvider,
  ComponentWithProps,
  DeepPartial,
} from "@uisland-ui/vue-system"
import { h, defineComponent, PropType, computed } from "vue"
import { uisland, DOMElements } from "@uisland-ui/vue-system"
import { getValidChildren, SNAO, SAO } from "@uisland-ui/vue-utils"

interface ListOptions {
  /**
   * Short hand prop for `listStyleType`
   * @type SystemProps["listStyleType"]
   */
  styleType?: SystemProps["listStyleType"]
  /**
   * Short hand prop for `listStylePosition`
   * @type SystemProps["listStylePosition"]
   */
  stylePosition?: SystemProps["listStylePosition"]
  /**
   * The space between each list item
   * @type SystemProps["margin"]
   */
  spacing?: SystemProps["margin"]
}

export interface ListProps
  extends HTMLUislandProps<"ul">,
    ThemingProps<"List">,
    ListOptions {}

/**
 * List is used to display list items, it renders a `<ul>` by default.
 *
 * @see Docs https://vue.uisland-ui.com/docs/data-display/list
 */
export const CList: ComponentWithProps<DeepPartial<ListProps>> =
  defineComponent({
    name: "CList",
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
      const styles = useMultiStyleConfig("List", props)
      StylesProvider(styles)
      const selector = "& > *:not(style) ~ *:not(style)"

      const spacingStyle = computed(() =>
        props.spacing ? { [selector]: { mt: props.spacing } } : {}
      )

      return () => {
        const validChildren = () => getValidChildren(slots)

        return (
          <uisland.ul
            __label="list"
            as={props.as}
            listStyleType={props.styleType}
            listStylePosition={props.stylePosition}
            role="list"
            __css={{
              ...styles.value.container,
              ...spacingStyle.value,
            }}
            {...attrs}
          >
            {validChildren}
          </uisland.ul>
        )
      }
    },
  })

export const COrderedList: ComponentWithProps<DeepPartial<ListProps>> =
  defineComponent({
    name: "COrderedList",
    setup(props, { slots, attrs }) {
      return () => (
        // @ts-ignore
        <CList styleType="decimal" marginStart="1em" {...attrs}>
          {slots}
        </CList>
      )
    },
  })

export const CUnorderedList: ComponentWithProps<DeepPartial<ListProps>> =
  defineComponent({
    name: "CUnorderedList",
    setup(props, { slots, attrs }) {
      return () => (
        // @ts-ignore
        <CList styleType="initial" marginStart="1em" {...attrs}>
          {slots}
        </CList>
      )
    },
  })

export const CListItem: ComponentWithProps<DeepPartial<HTMLUislandProps<"li">>> =
  defineComponent({
    name: "CListItem",
    setup(_, { slots, attrs }) {
      const styles = useStyles()
      return () => {
        return (
          <uisland.li __label="list__item" __css={styles.value.item} {...attrs}>
            {slots}
          </uisland.li>
        )
      }
    },
  })

export const CListIcon: ComponentWithProps<
  DeepPartial<HTMLUislandProps<"svg">>
> = defineComponent({
  name: "CListIcon",
  setup(_, { slots, attrs }) {
    const styles = useStyles()
    return () => {
      return (
        // @ts-expect-error
        <CIcon role="presentation" {...attrs} __css={styles.value.icon}>
          {slots}
        </CIcon>
      )
    }
  },
})

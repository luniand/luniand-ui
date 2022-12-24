/**
 * 📝 Notes for Contributors:
 *
 * - When creating an interactive component, we recommend consuming the
 * component hook created.
 *
 * For example, if you wanted to build an accordion component,
 * you'll first create a `useAccordion` hook and then create an `Accordion` component
 *
 * - Ensure this component is properly theme-able by following [this guide](https://ui.luniand.com/docs/theming/component-style)
 *
 * - Ensure the component is composable and can adapt to multiple use-cases
 *
 * @see Guide https://ui.luniand.com/guides/component-guide
 * @see Theming https://ui.luniand.com/docs/theming/component-style
 */

import {
  defineComponent,
  PropType,
  computed,
  cloneVNode,
  h,
  VNode,
  DefineComponent,
} from "vue";
import {
  luniand,
  HTMLLuniandProps,
  SystemProps,
  ThemingProps,
  StylesProvider,
  useMultiStyleConfig,
  useStyles,
  SystemStyleObject,
  LuniandProps,
} from "@luniand-ui/system";
import { filterUndefined } from "@luniand-ui/utils";
import {
  getValidChildren,
  isObjectComponent,
  SNA,
  SNAO,
} from "@luniand-ui/utils";
import { vueThemingProps } from "@luniand-ui/prop-utils";
import { DOMElements } from "@luniand-ui/system";

/**
 * LBreadcrumb (root)
 */

export interface BreadcrumbOptions {
  /**
   * The visual separator between each breadcrumb item
   * @type string | ConcreteComponent | Component
   */
  separator?: string | object;
  /**
   * The left and right margin applied to the separator
   * @type SystemProps["mx"]
   */
  spacing?: SystemProps["mx"];
}

export interface BreadcrumbProps
  extends LuniandProps,
    BreadcrumbOptions,
    ThemingProps<"Breadcrumb"> {}

export const LBreadcrumb: DefineComponent<BreadcrumbProps> = defineComponent(
  (props: BreadcrumbProps, { attrs, slots }) => {
    const themingProps = computed<ThemingProps>(() =>
      filterUndefined({
        colorScheme: props.colorScheme,
        variant: props.variant,
        size: props.size,
        styleConfig: props.styleConfig,
      })
    );

    const styles = useMultiStyleConfig("Breadcrumb", themingProps);
    StylesProvider(styles);

    const separator = computed(() => {
      if (slots.separator) {
        return slots?.separator?.();
      } else {
        return typeof props.separator === "string"
          ? props.separator
          : isObjectComponent(props.separator!)
          ? // TODO:
            // Add support for
            // object components. ATM,
            // This computed property will only
            // work for functional components provided as
            // separators
            h(() => props.separator!)
          : h(props.separator!);
      }
    });

    return () => {
      const validChildren = getValidChildren(slots);
      const count = validChildren.length;

      const children = validChildren.map(
        (vnode: VNode<unknown, unknown, BreadcrumbOptions>, index: number) =>
          cloneVNode(vnode, {
            separator: separator.value,
            spacing: props.spacing,
            isLastChild: count === index + 1,
          })
      );

      return h(
        luniand.nav,
        {
          as: props.as,
          __label: "breadcrumb",
          ariaLabel: "breadcrumb",
          __css: styles.value.container,
          ...attrs,
        },
        h(luniand.ol, { __label: "breadcrumb__list" }, () => children)
      );
    };
  }
);

// @ts-ignore "name" property is typically read-only for functional components
LBreadcrumb.name = "LBreadcrumb";
LBreadcrumb.props = {
  separator: {
    type: SNAO as PropType<BreadcrumbOptions["separator"]>,
    default: "/",
  },
  spacing: {
    type: SNA as PropType<BreadcrumbOptions["spacing"]>,
    default: "0.5rem",
  },
  as: {
    type: [String, Object] as PropType<DOMElements | object | string>,
    default: "nav",
  },
  ...vueThemingProps,
};

/**
 * LBreadcrumbSeparator
 */

export interface BreadcrumbSeparatorProps extends HTMLLuniandProps<"div"> {
  /**
   * @type SystemProps["mx"]
   */
  spacing?: SystemProps["mx"];
}

/**
 * The `LBreadcrumbSeparator` component is the separator for
 * each breacrumb item.
 */
export const LBreadcrumbSeparator = defineComponent({
  props: {
    spacing: LBreadcrumb.props.spacing,
  },
  setup(props, { attrs, slots }) {
    const styles = useStyles();
    const separatorStyles = computed<SystemStyleObject>(() => ({
      display: "flex",
      mx: props.spacing,
      ...styles.value.separator,
    }));

    return () =>
      h(
        luniand.span,
        {
          role: "presentation",
          __label: "breadcrumb__separator",
          ...attrs,
          __css: separatorStyles.value,
        },
        slots
      );
  },
});

// @ts-ignore "name" property is typically read-only for functional components
LBreadcrumbSeparator.name = "LBreadcrumbSeparator";

/**
 * LBreadcrumbItem
 */

interface BreadcrumbItemOptions extends BreadcrumbOptions {
  isCurrentPage?: boolean;
  isLastChild?: boolean;
}

export interface BreadcrumbItemProps
  extends BreadcrumbItemOptions,
    LuniandProps {}

export const LBreadcrumbItem: DefineComponent<BreadcrumbItemProps> =
  defineComponent((props: BreadcrumbItemProps, { attrs, slots }) => {
    const styles = useStyles();
    const itemStyles = computed<SystemStyleObject>(() => ({
      display: "inline-flex",
      alignItems: "center",
      ...styles.value.item,
    }));

    return () => {
      const validChildren = getValidChildren(slots);
      const children = validChildren.map(
        (vnode: VNode<unknown, unknown, BreadcrumbItemOptions>) => {
          // @ts-expect-error The "name" property is not typed on `VNodeTypes` but we need to access it during runtime
          if (vnode.type.name === "LBreadcrumbLink") {
            return cloneVNode(vnode, {
              isCurrentPage: props.isCurrentPage,
            });
          }

          // @ts-expect-error The "name" property is not typed on `VNodeTypes` but we need to access it during runtime
          if (vnode.type.name === "LBreadcrumbSeparator") {
            return cloneVNode(vnode, {
              spacing: props.spacing,
              children: vnode.children || { default: () => props.separator },
            });
          }

          return vnode;
        }
      );

      return h(
        luniand.li,
        { __label: "breadcrumb__list-item", __css: itemStyles.value },
        () => [
          //Todo : Failed setting prop "children" on <span>: value [object Object] is invalid.
          children,
          !props.isLastChild &&
            h(
              LBreadcrumbSeparator,
              { spacing: props.spacing },
              () => props.separator
            ),
        ]
      );
    };
  });

// @ts-ignore "name" property is typically read-only for functional components
LBreadcrumbItem.name = "LBreadcrumbItem";
LBreadcrumbItem.props = {
  ...LBreadcrumb.props,
  isLastChild: Boolean as PropType<boolean>,
  isCurrentPage: Boolean as PropType<boolean>,
};

/**
 * LBreadcrumbLink
 */

export interface BreadcrumbLinkProps extends LuniandProps {
  isCurrentPage?: boolean;
  href?: string;
}

/**
 * BreadcrumbLink link.
 *
 * It renders a `span` when it matches the current link. Otherwise,
 * it renders an anchor tag.
 */
export const LBreadcrumbLink: DefineComponent<BreadcrumbLinkProps> =
  defineComponent((props: BreadcrumbLinkProps, { attrs, slots }) => {
    const styles = useStyles();

    return () => {
      if (props.isCurrentPage) {
        return h(
          luniand.span,
          {
            __label: "breadcrumb__link",
            ariaCurrent: "page",
            __css: styles.value.link,
            as: props.as,
            ...attrs,
          },
          slots
        );
      }

      return h(
        luniand.a,
        {
          __label: "breadcrumb__link",
          as: props.as,
          __css: styles.value.link,
          ...attrs,
        },
        slots
      );
    };
  });

// @ts-ignore "name" property is typically read-only for functional components
LBreadcrumbLink.name = "LBreadcrumbLink";
LBreadcrumbLink.props = {
  isCurrentPage: Boolean as PropType<boolean>,
};

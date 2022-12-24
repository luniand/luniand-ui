import { defineComponent, PropType, h } from "vue";
import {
  useStyles,
  LuniandProps,
  ComponentWithProps,
  DeepPartial,
  DOMElements,
} from "@luniand-ui/system";
import { LLink, LinkProps } from "@luniand-ui/layout";

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
export const LBreadcrumbLink: ComponentWithProps<DeepPartial<LinkProps>> =
  defineComponent({
    name: "LBreadcrumbLink",
    props: {
      as: {
        type: [Object, String] as PropType<DOMElements>,
        default: "a",
      },
      isExternal: Boolean as PropType<LinkProps["isExternal"]>,
      href: String as PropType<string>,
      isCurrentPage: Boolean as PropType<boolean>,
    },
    setup(props, { attrs, slots }) {
      const styles = useStyles();

      return () =>
        h(
          LLink,
          {
            ariaCurrent: props.isCurrentPage ? "page" : null,
            __label: "breadcrumb__link",
            as: props.as,
            to: props.href,
            // TODO: link type check ts lint
            // @ts-ignore
            __css: styles.value.link,
            ...attrs,
          },
          slots
        );
    },
  });

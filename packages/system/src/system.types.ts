import {
  Component,
  Fragment,
  Suspense,
  Teleport,
  AllowedComponentProps,
  ComponentCustomProps,
  VNodeProps,
  VNode,
} from "@vue/runtime-core"
import { HTMLAttributes } from "@vue/runtime-dom"
import {
  SystemProps,
  ResponsiveValue,
  StyleProps,
  ThemeTypings,
} from "@uisland-ui/styled-system"
import { Dict } from "@uisland-ui/utils"
import { IntrinsicElementAttributes } from "./dom.types"
import { DOMElements } from "./system.utils"
import { StyleResolverProps } from "./uisland"

/**
 * Export component with custom type
 *
 * @example
 * export const CBox = CBoxImpl as ComponentWithProps<{ hello?: string }>
 */
export type ComponentWithProps<P> = {
  new (): {
    $props: AllowedComponentProps &
      ComponentCustomProps &
      VNodeProps & { props?: Record<keyof P, any> } & P & {
        [key: string]: unknown
      }
  }
}

export type AsPolymorphicProp = { as?: DOMElements | string | object }

export type Tag =
  | string
  | typeof Fragment
  | typeof Teleport
  | typeof Suspense
  | Component

export interface UislandProps extends SystemProps, StyleResolverProps {
  /**
   * apply layer styles defined in `theme.layerStyles`
   */
  layerStyle?: string
  /**
   * apply typography styles defined in `theme.textStyles`
   */
  textStyle?: string
  /**
   * Reference styles from any component or key in the theme.
   *
   * @example
   * ```html
   * <c-box apply="styles.h3">This is a div</c-box>
   * ```
   *
   * This will apply styles defined in `theme.styles.h3`
   */
  apply?: string
  /**
   * if `true`, it'll render an ellipsis when the text exceeds the width of the viewport or maxWidth set.
   */
  isTruncated?: boolean
  /**
   * Used to truncate text at a specific number of lines
   */
  noOfLines?: ResponsiveValue<number>
  /**
   * Internal prop used to label Uisland factory component tags
   */
  label?: string
  /**
   * Internal prop used to label JSX component tags
   */
  __label?: string
}

type ElementType<P = any> =
  | {
      [K in keyof IntrinsicElementAttributes]: P extends IntrinsicElementAttributes[K]
        ? K
        : never
    }[keyof IntrinsicElementAttributes]
  | Component<P>

export type As<Props = any> = ElementType<Props>

/**
 * Extract the props of a Vue element or component
 */
export type PropsOf<T extends As> = T & {
  as?: As
}

export type HTMLUislandProps<T extends As> = Omit<
  PropsOf<T>,
  T extends "svg"
    ? "ref" | "children" | keyof StyleProps
    : "ref" | keyof StyleProps
> &
  UislandProps & { as?: As }

declare global {
  namespace h.JSX {
    interface Element extends VNode {}
    interface ElementClass {
      $props: {}
    }
    interface ElementAttributesProperty {
      $props: {}
    }

    interface IntrinsicAttributes
      extends Omit<HTMLAttributes, "color">,
        UislandProps {}
  }
}

export interface ThemingProps<ThemeComponent extends string = any> {
  variant?: ThemeComponent extends keyof ThemeTypings["components"]
    ? ThemeTypings["components"][ThemeComponent]["variants"]
    : string
  size?: ThemeComponent extends keyof ThemeTypings["components"]
    ? ThemeTypings["components"][ThemeComponent]["sizes"]
    : string
  colorScheme?: ThemeTypings["colorSchemes"]
  orientation?: "vertical" | "horizontal"
  styleConfig?: Dict
}

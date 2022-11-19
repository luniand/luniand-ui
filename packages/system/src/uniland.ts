import {
  Component,
  computed,
  ConcreteComponent,
  DefineComponent,
  defineComponent,
  h,
  ComponentCustomProps,
  PropType,
  resolveComponent,
} from "@vue/runtime-core"
import { HTMLAttributes } from "@vue/runtime-dom"
import {
  css,
  isStyleProp,
  ResponsiveValue,
  SystemProps,
  SystemStyleObject,
} from "@uniland-ui/styled-system"
import _styled from "@uniland-ui/styled"

import {
  isFunction,
  objectFilter,
  isObject,
  memoizedGet as get,
  Dict,
  SNAO,
  extractStyleAttrs,
} from "@uniland-ui/utils"
import { cx, css as _css, CSSObject } from "@emotion/css"
import { domElements, DOMElements } from "./system.utils"
import { useTheme } from "./composables/use-uniland"
import { As, UnilandProps, ComponentWithProps } from "./system.types"
import { formElements, InputTypes } from "./uniland.forms"
import { FunctionInterpolation } from "@emotion/serialize"

export interface BaseStyleResolverProps {
  as?: UnilandTagOrComponent
  __css?: SystemStyleObject
  sx?: SystemStyleObject
  css?: CSSObject
  noOfLines?: ResponsiveValue<number>
  isTruncated?: boolean
  apply?: ResponsiveValue<string>
  componentName?: String
  label?: string
  baseStyle?:
    | SystemStyleObject
    | ((props: StyleResolverProps) => SystemStyleObject)
  /**
   * User provided styles from component/uniland API
   */
  styles?: SystemStyleObject
  /**
   * This attribute/property is reserved for all TSX component definitions.
   * It is referenced by the uniland factiry function to
   * preserve the component's label class
   */
  __label?: string
  theme?: Dict<any>
}

export interface StyleResolverProps
  extends BaseStyleResolverProps,
    SystemProps {}

interface StyleResolverOptions extends StyleResolverProps {
  truncateStyle?: CSSObject
  theme?: any
}

interface UnilandFactoryOptions extends StyleResolverProps {}

const unilandProps = {
  as: [String, Object] as PropType<UnilandTagOrComponent>,
  __css: Object as PropType<StyleResolverProps["__css"]>,
  sx: Object as PropType<StyleResolverProps["sx"]>,
  css: Object as PropType<StyleResolverProps["css"]>,
  noOfLines: SNAO as PropType<StyleResolverProps["noOfLines"]>,
  baseStyle: Object as PropType<StyleResolverProps["baseStyle"]>,
  isTruncated: Boolean as PropType<StyleResolverProps["isTruncated"]>,
  layerStyle: String as PropType<StyleResolverProps["layerStyle"]>,
  textStyle: String as PropType<StyleResolverProps["textStyle"]>,
  apply: String as PropType<StyleResolverProps["apply"]>,
  label: String as PropType<StyleResolverOptions["label"]>,
  modelValue: SNAO as PropType<string | boolean | object>,
  /**
   * @warning
   * @internal
   * This internal is an internal UnilandFactoryFunction prop that
   * is used to determine how events are handled on Uniland Factory
   * components.
   *
   * For example, if a factory component is considered to be raw (i.e. `__unilandIsRaw: true`),
   * then, we do not pass v-model event listeners onto the component. This means that
   * `v-model` will not work in the template context.
   *
   * You can see how this prop is used in the `u-input` component.
   *
   * THIS PROP IS A NON-DOCUMENTED PROP, AND IS ONLY TO BE USED FOR INTERNAL DEVELOPMENT.
   */
  __unilandIsRaw: Boolean as PropType<boolean>,
}

export type UnilandBaseComponentProps = typeof unilandProps
export type UnilandTagOrComponent =
  | DOMElements
  | Component
  | ConcreteComponent
  | string

/**
 * Uniland factory serves as an object of uniland enabled HTML elements,
 * and also a function that can be used to enable custom component receive uniland's style props.
 * @param tag Tag or Component
 * @param options resolver options
 * 
 * How does it work?
 *
 * 1. Components returned from the uniland factory can be styled after consuming them
 *    @example
 *    ```js
 *    const Form = uniland('form') // returns a VNode you can use in the template directly
 *    ```
 * 
 * 2. Uniland components can directly be styled upon creation using the options object of type `StyleResolverProps`
 *    This resolves style object for component styles defined in the theme.
 * 
 *    Styling components using the uniland factory function can be done using the following keys from the theme:
 *    - `baseStyle`
 *    - `layerStyle`
 *    - `textStyle`
 * 
 *    @example
 *    ```js
 *    const MyCustomButton = uniland('button', {
 *     baseStyle: {
         bg: 'red,
         color: 'red.500,
         px: 4,
         py: 3
       }
 *    })
 *    ```
 *    ```html
 *    <my-custom-button>Hello Papaya Button</my-custom-button>
 *    ```
 * 
 *    See more about the style resolution in the `resolveStyles` function.
 * 
 * 3. Uniland components created and styled using the `uniland` factory can be over-written in the template by applying
 *    style properties directly
 * 
 *    @example
 *    ```html
 *    <my-custom-button bg="blue.400">
 *      Papaya button goes blue
 *    </my-custom-button>
 *    ```
 */
// @ts-expect-error
export const uniland: IUnilandFactory = (tag, options = {}) => {
  const inputHandlers = formElements[typeof tag === "string" ? tag : ""]
  const _props = (inputHandlers && inputHandlers.props) || {}
  const handleValueChange = inputHandlers && inputHandlers.handleValueChange

  return defineComponent({
    name: `uniland-factory-${String(tag)}`,
    inheritAttrs: false,
    props: {
      ...unilandProps,
      ..._props,
    },
    setup(props, { slots, emit, attrs }) {
      const theme = useTheme()

      const layerStyle$ = computed(
        () => props.layerStyle || options?.layerStyle
      )
      const textStyle$ = computed(() => props.textStyle || options?.textStyle)
      const baseStyle$ = computed(() => props.baseStyle || options?.baseStyle)
      const noOfLines$ = computed(() => props.noOfLines || options?.noOfLines)
      const isTruncated$ = computed(
        () => props.isTruncated || options?.isTruncated
      )
      const __css$ = computed(() => props.__css || options?.__css)
      const css$ = computed(() => props.css || options?.css)
      const sx$ = computed(() => props.sx || options?.sx)
      const apply$ = computed(() => props.apply || options?.apply)

      return () => {
        const { class: inheritedClass, __label, ...rest } = attrs
        const {
          layerStyle,
          baseStyle,
          textStyle,
          noOfLines,
          isTruncated,
          __css,
          css,
          sx,
          apply,
          label,
          ...otherStyles
        } = options

        // Separate component style attributes from raw HTML attributes
        const { styles, attrs: elementAttributes } = extractStyleAttrs<
          any,
          HTMLAttributes & BaseStyleResolverProps
        >({
          ...otherStyles,
          // Prioritize user provided styles
          ...rest,
        })

        const resolvedComponentStyles = resolveStyles({
          __css: __css$.value,
          baseStyle: baseStyle$.value,
          apply: apply$.value,
          layerStyle: layerStyle$.value,
          noOfLines: noOfLines$.value,
          isTruncated: isTruncated$.value,
          textStyle: textStyle$.value,
          sx: sx$.value,
          css: css$.value,
          ...(styles as SystemProps),
          theme,
        })

        const componentLabel = label || __label
        const _componentName = componentLabel ? `uniland-${componentLabel}` : ""
        const className = _css(resolvedComponentStyles)

        let componentOrTag = props.as || tag

        // if tag is not a dom element like as="div" and an object (vue component as an object) like v-bind:as="RouterLink"
        if (
          !isObject(componentOrTag) &&
          !domElements.includes(componentOrTag as any)
        ) {
          // it's a string like as="router-link"
          componentOrTag = resolveComponent(componentOrTag)
        }

        return h(
          (componentOrTag as any) || props.as,
          {
            class: cx(inheritedClass as string, _componentName, className),
            ...elementAttributes,
            ...(!props.__unilandIsRaw &&
              handleValueChange &&
              // @ts-ignore
              handleValueChange(props, attrs.type as InputTypes)(emit)),
          },
          slots
        )
      }
    },
  })
}

// return h(
//   _styled((componentOrTag as any) || props.as)({
//     ...resolvedComponentStyles,
//     ...elementAttributes,
//   }) as unknown as DefineComponent<UnilandProps>,
//   slots
// )
interface GetStyleObject {
  (options: {
    baseStyle?:
      | SystemStyleObject
      | ((props: StyleResolverProps) => SystemStyleObject)
  }): FunctionInterpolation<StyleResolverProps>
}

export const toCSSObject: GetStyleObject = (options) => (props) => {
  const { theme, css: cssProp, __css, sx, ...rest } = props
  const styleProps = objectFilter(rest, (_, prop) => isStyleProp(prop))
  const finalStyles = resolveStyles(
    Object.assign(options, { theme }, styleProps)
  )
  const computedCSS = css(finalStyles)(props.theme)

  return cssProp ? [computedCSS, cssProp] : computedCSS
}

interface StyledOptions extends StyleResolverOptions {
  label?: string
  baseStyle?:
    | SystemStyleObject
    | ((props: StyleResolverProps) => SystemStyleObject)
}

export function styled<T extends As, P = {}>(
  component: T,
  options: StyledOptions
) {
  const { baseStyle, ...styledOptions } = options ?? {}

  const styleObject = toCSSObject(options)
  return _styled(component as UnilandTagOrComponent, styledOptions)(styleObject)
}

export type UnilandComponent<P = UnilandProps> = ComponentWithProps<As & P>

type UnilandFactory = {
  <T extends UnilandTagOrComponent, P = {}>(
    component: T,
    options?: StyledOptions
  ): UnilandComponent<P>
}

export type HTMLUnilandComponents<P> = {
  [Tag in DOMElements]: UnilandComponent<P>
}

export const _uniland = styled as unknown as UnilandFactory &
  HTMLUnilandComponents<UnilandProps>

domElements.forEach((tag) => {
  uniland[tag] = uniland(tag)
})

export const resolveStyles = (
  resolvers = {} as StyleResolverOptions
): CSSObject => {
  const {
    layerStyle,
    baseStyle,
    textStyle,
    noOfLines,
    isTruncated,
    __css,
    css: cssProp,
    sx,
    apply,
    theme,
    ...otherStyles
  } = resolvers

  const _layerStyle = get(theme as object, `layerStyles.${layerStyle}`, {})
  const _textStyle = get(theme as object, `textStyles.${textStyle}`, {})

  let truncateStyle: any = {}
  if (noOfLines != null) {
    truncateStyle = {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: noOfLines,
    }
  } else if (isTruncated) {
    truncateStyle = {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    }
  }

  const finalStyles = css(
    Object.assign(
      {},
      __css,
      baseStyle,
      { apply: apply },
      _layerStyle,
      _textStyle,
      truncateStyle,
      otherStyles,
      sx
    )
  )(theme)

  const cssObject: CSSObject = Object.assign(
    finalStyles,
    isFunction(cssProp) ? cssProp(theme) : cssProp
  )
  return cssObject
}

export type UnilandFactoryProps = UnilandProps &
  StyleResolverProps &
  HTMLAttributes &
  ComponentCustomProps &
  JSX.IntrinsicAttributes & {
    // value?: unknown
    [key: string]: any
  }

/**
 * @example
 * h(uniland(RouterLink, { to: 'https://vue.uniland-ui.com' }), {}, slots)
 */
type UserProvidedProps = { [key: string]: any }

type IUnilandFactory = {
  [key in DOMElements]:
    | DefineComponent<UnilandFactoryProps>
    | ComponentWithProps<UnilandFactoryProps>
} & {
  (
    tag: UnilandTagOrComponent,
    options?: StyleResolverOptions & UserProvidedProps
  ):
    | DefineComponent<UnilandFactoryProps>
    | ComponentWithProps<UnilandFactoryProps>
}

domElements.forEach((tag) => {
  uniland[tag] = uniland(tag, {})
})

domElements.forEach((tag) => {
  _uniland[tag] = _uniland(tag, {})
})

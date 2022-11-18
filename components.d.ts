/**
 * Typescript support for @@uniland-ui/vue-next1.0.0-alpha.13 auto-imported
 * components using `unplugin-vue-components,`
 *
 * @see: https://github.com/antfu/unplugin-vue-components/#typescript
 *
 * This is a generated file. Do not edit it's contents.
 *
 * This file was generated on 2022-10-06T19:08:38.068Z
 */

import { UnilandProps, uniland } from "@uniland-ui/vue-system"
import { VNodeChild, VNode, HTMLAttributes } from "vue"

export type JsxNode = VNodeChild | JSX.Element

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
        UnilandProps {}
  }
}

type EventHandler = (...args: any[]) => void

export interface SlotDirective {
  [name: string]: () => JsxNode
}

type JsxComponentCustomProps = {
  vModel?: unknown
  vModels?: unknown[]
  vCustom?: unknown[]
  vShow?: boolean
  vHtml?: JsxNode
  vSlots?: SlotDirective
  "v-model"?: unknown
  "v-models"?: unknown[]
  "v-custom"?: unknown[]
  "v-show"?: boolean
  "v-html"?: JsxNode
  "v-slots"?: SlotDirective
} & Omit<HTMLAttributes, "innerHTML"> & {
    innerHTML?: JsxNode
  }

declare var uniland: typeof import("@uniland-ui/vue-next")["uniland"]

declare module "@vue/runtime-core" {
  import { uniland } from "@uniland-ui/vue-next"
  export { uniland }

  /* Global component types for Volar auto-complete */
  export interface GlobalComponents {
    uniland: typeof import("@uniland-ui/vue-next")["uniland"]
    "uniland.a": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.b": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.article": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.aside": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.blockquote": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.button": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.caption": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.cite": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.circle": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.code": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.dd": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.div": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.dl": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.dt": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.fieldset": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.figcaption": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.figure": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.footer": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.form": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.h1": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.h2": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.h3": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.h4": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.h5": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.h6": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.header": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.hr": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.iframe": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.img": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.input": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.kbd": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.label": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.li": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.mark": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.main": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.nav": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.ol": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.p": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.path": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.pre": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.q": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.rect": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.s": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.svg": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.section": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.select": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.strong": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.small": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.span": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.sub": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.sup": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.table": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.tbody": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.td": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.textarea": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.tfoot": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.th": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.thead": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.tr": typeof import("@uniland-ui/vue-next")["CBox"]
    "uniland.ul": typeof import("@uniland-ui/vue-next")["CBox"]
  }

  /* Component custom props types for JSX and TSX auto complete */
  export interface ComponentCustomProps
    extends JsxComponentCustomProps,
      UnilandProps {
    vSlots?: {
      [eleName: string]: JSX.Element
    }
  }

  interface ComponentCustomProps {
    role?: string
    tabindex?: number | string
    value?: unknown
    // should be removed after Vue supported component events typing
    // see: https://github.com/vuejs/vue-next/issues/1553
    //      https://github.com/vuejs/vue-next/issues/3029
    onBlur?: EventHandler
    onOpen?: EventHandler
    onEdit?: EventHandler
    onLoad?: EventHandler
    onClose?: EventHandler
    onFocus?: EventHandler
    onInput?: EventHandler
    onClick?: EventHandler
    onPress?: EventHandler
    onCancel?: EventHandler
    onChange?: EventHandler
    onDelete?: EventHandler
    onScroll?: EventHandler
    onSubmit?: EventHandler
    onSelect?: EventHandler
    onConfirm?: EventHandler
    onPreview?: EventHandler
    onKeypress?: EventHandler
    onTouchend?: EventHandler
    onTouchmove?: EventHandler
    onTouchstart?: EventHandler
    onTouchcancel?: EventHandler
    onMouseenter?: EventHandler
    onMouseleave?: EventHandler
    onMousemove?: EventHandler
    onKeydown?: EventHandler
    onKeyup?: EventHandler
    onDeselect?: EventHandler
    onClear?: EventHandler
  }
}

export {}

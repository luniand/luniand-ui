/**
 * Typescript support for @@uisland-ui/vue-next1.0.0-alpha.13 auto-imported
 * components using `unplugin-vue-components,`
 *
 * @see: https://github.com/antfu/unplugin-vue-components/#typescript
 *
 * This is a generated file. Do not edit it's contents.
 *
 * This file was generated on 2022-10-06T19:08:38.068Z
 */

import { UislandProps, uisland } from "@uisland-ui/vue-system"
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
        UislandProps {}
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

declare var uisland: typeof import("@uisland-ui/vue-next")["uisland"]

declare module "@vue/runtime-core" {
  import { uisland } from "@uisland-ui/vue-next"
  export { uisland }

  /* Global component types for Volar auto-complete */
  export interface GlobalComponents {
    uisland: typeof import("@uisland-ui/vue-next")["uisland"]
    "uisland.a": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.b": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.article": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.aside": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.blockquote": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.button": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.caption": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.cite": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.circle": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.code": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.dd": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.div": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.dl": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.dt": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.fieldset": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.figcaption": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.figure": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.footer": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.form": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.h1": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.h2": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.h3": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.h4": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.h5": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.h6": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.header": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.hr": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.iframe": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.img": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.input": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.kbd": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.label": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.li": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.mark": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.main": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.nav": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.ol": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.p": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.path": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.pre": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.q": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.rect": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.s": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.svg": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.section": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.select": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.strong": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.small": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.span": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.sub": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.sup": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.table": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.tbody": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.td": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.textarea": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.tfoot": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.th": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.thead": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.tr": typeof import("@uisland-ui/vue-next")["CBox"]
    "uisland.ul": typeof import("@uisland-ui/vue-next")["CBox"]
  }

  /* Component custom props types for JSX and TSX auto complete */
  export interface ComponentCustomProps
    extends JsxComponentCustomProps,
      UislandProps {
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

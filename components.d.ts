/**
 * Typescript support for @@uniland-ui/vue1.0.1-alpha.1 auto-imported
 * components using `unplugin-vue-components,`
 *
 * @see: https://github.com/antfu/unplugin-vue-components/#typescript
 *
 * This is a generated file. Do not edit it's contents.
 *
 * This file was generated on 2022-11-20T14:11:59.931Z
 */

import { UnilandProps, uniland } from "@uniland-ui/system"
import { VNodeChild, VNode, HTMLAttributes } from "@vue/runtime-core"

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

declare var uniland: typeof import("@uniland-ui/vue")["uniland"]

declare module "@vue/runtime-core" {
  import { uniland } from "@uniland-ui/vue"
  export { uniland }

  /* Global component types for Volar auto-complete */
  export interface GlobalComponents {
    uniland: typeof import("@uniland-ui/vue")["uniland"]
    UIcon: typeof import("@uniland-ui/vue")["UIcon"]
    UBox: typeof import("@uniland-ui/vue")["UBox"]
    UCircle: typeof import("@uniland-ui/vue")["UCircle"]
    USquare: typeof import("@uniland-ui/vue")["USquare"]
    "uniland.a": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.b": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.article": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.aside": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.blockquote": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.button": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.caption": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.cite": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.circle": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.code": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.dd": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.div": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.dl": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.dt": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.fieldset": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.figcaption": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.figure": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.footer": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.form": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.h1": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.h2": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.h3": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.h4": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.h5": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.h6": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.header": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.hr": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.iframe": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.img": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.input": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.kbd": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.label": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.li": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.mark": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.main": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.nav": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.ol": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.p": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.path": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.pre": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.q": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.rect": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.s": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.svg": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.section": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.select": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.strong": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.small": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.span": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.sub": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.sup": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.table": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.tbody": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.td": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.textarea": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.tfoot": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.th": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.thead": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.tr": typeof import("@uniland-ui/vue")["UBox"]
    "uniland.ul": typeof import("@uniland-ui/vue")["UBox"]
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

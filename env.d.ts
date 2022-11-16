import type { HTMLAttributes, VNode } from "vue"
import type { UislandProps } from "@uisland-ui/vue-system"
import { DefineComponent } from "vue"
import { UislandFactoryProps, ComponentWithProps } from "@uisland-ui/vue-system"

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass
      extends DefineComponent<UislandFactoryProps>,
        ComponentWithProps<UislandFactoryProps> {
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

declare module "vue" {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>
}

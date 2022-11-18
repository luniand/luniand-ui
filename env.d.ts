import type { HTMLAttributes, VNode } from "vue"
import type { UnilandProps } from "@uniland-ui/vue-system"
import { DefineComponent } from "vue"
import { UnilandFactoryProps, ComponentWithProps } from "@uniland-ui/vue-system"

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass
      extends DefineComponent<UnilandFactoryProps>,
        ComponentWithProps<UnilandFactoryProps> {
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

declare module "vue" {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>
}

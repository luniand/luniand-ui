const { writeFileSync, appendFileSync } = require("fs")
const { resolve } = require("path")
const {
  name: pkgName,
  version: pkgVersion,
} = require("../packages/core/package.json")

const { ESLint } = require("eslint")
const { domElements } = require("@uniland-ui/system")
const UnilandComponents = require("@uniland-ui/vue")

type ComponentsImport = typeof UnilandComponents

async function generateComponents() {
  let code = ``

  for (const component in UnilandComponents) {
    /**
     * Group of strict checks to make sure that
     * we only generate types for components.
     */
    if (
      component.startsWith("C") &&
      UnilandComponents[component]?.name &&
      UnilandComponents[component]?.setup &&
      typeof UnilandComponents[component]?.setup === "function"
    ) {
      code += `${component}: typeof import('${pkgName}')['${component}']\n`
    }
  }

  for (let el = 0; el < domElements.length; el++) {
    code += `'uniland.${domElements[el]}': typeof import('${pkgName}')['UBox']\n`
  }

  const allTypes = `
  /**
   * Typescript support for @${pkgName}${pkgVersion} auto-imported
   * components using \`unplugin-vue-components,\`
   * 
   * @see: https://github.com/antfu/unplugin-vue-components/#typescript
   * 
   * This is a generated file. Do not edit it's contents.
   * 
   * This file was generated on ${new Date().toISOString()}
   */

   import { UnilandProps, uniland } from '@uniland-ui/system'
   import { VNodeChild, VNode, HTMLAttributes } from '@vue/runtime-core'
   
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

   type EventHandler = (...args: any[]) => void;
   
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
      'v-model'?: unknown
      'v-models'?: unknown[]
      'v-custom'?: unknown[]
      'v-show'?: boolean
      'v-html'?: JsxNode
      'v-slots'?: SlotDirective
   } & Omit<HTMLAttributes, 'innerHTML'> & {
       innerHTML?: JsxNode
     }
  
  declare var uniland: typeof import("@uniland-ui/vue")["uniland"]

  declare module '@vue/runtime-core' {
    import { uniland } from '@uniland-ui/vue'
    export { uniland }

    /* Global component types for Volar auto-complete */
    export interface GlobalComponents {
      uniland: typeof import('@uniland-ui/vue')['uniland']
      ${code}
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
      role?: string;
      tabindex?: number | string;
      value?: unknown
      // should be removed after Vue supported component events typing
      // see: https://github.com/vuejs/vue-next/issues/1553
      //      https://github.com/vuejs/vue-next/issues/3029
      onBlur?: EventHandler;
      onOpen?: EventHandler;
      onEdit?: EventHandler;
      onLoad?: EventHandler;
      onClose?: EventHandler;
      onFocus?: EventHandler;
      onInput?: EventHandler;
      onClick?: EventHandler;
      onPress?: EventHandler;
      onCancel?: EventHandler;
      onChange?: EventHandler;
      onDelete?: EventHandler;
      onScroll?: EventHandler;
      onSubmit?: EventHandler;
      onSelect?: EventHandler;
      onConfirm?: EventHandler;
      onPreview?: EventHandler;
      onKeypress?: EventHandler;
      onTouchend?: EventHandler;
      onTouchmove?: EventHandler;
      onTouchstart?: EventHandler;
      onTouchcancel?: EventHandler;
      onMouseenter?: EventHandler;
      onMouseleave?: EventHandler;
      onMousemove?: EventHandler;
      onKeydown?: EventHandler;
      onKeyup?: EventHandler;
      onDeselect?: EventHandler;
      onClear?: EventHandler;
    }
  }

  export {}
  

  `

  // Write files
  const projectTypesFilePath = resolve(__dirname, "../components.d.ts")
  const coreTypesFilePath = resolve(
    __dirname,
    "../packages/core/dist/declarations/src/index.d.ts"
  )
  writeFileSync(projectTypesFilePath, allTypes, "utf8")
  appendFileSync(coreTypesFilePath, allTypes, "utf8")

  // Lint and Fix filea after writing types
  const eslint = new ESLint({ fix: true })
  const results = await eslint.lintFiles([
    projectTypesFilePath,
    coreTypesFilePath,
  ])
  await ESLint.outputFixes(results)
}

try {
  generateComponents()
  console.info("✅ Successfully wrote component types\n")
} catch (error) {
  console.error("Error: writing types\n", error)
}

export {}

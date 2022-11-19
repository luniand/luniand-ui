import { computed, Plugin, ref, UnwrapRef } from "@vue/runtime-core"
import defaultTheme from "@uniland-ui/theme"
import type { ColorModeRef } from "@uniland-ui/u-color-mode"
import { toCSSVar, WithCSSVar } from "@uniland-ui/styled-system"
import { uniland, injectGlobal } from "@uniland-ui/system"
import {
  EmotionThemeContextSymbol,
  EmotionCacheInjectionSymbol,
} from "@uniland-ui/styled"
import createCache, { EmotionCache } from "@emotion/cache"
import internalIcons from "./icon.internals"
import { extendTheme, ThemeOverride } from "./extend-theme"
import { MergedIcons, parseIcons } from "./parse-icons"
import { injectResetStyles, injectThemeGlobalStyles } from "./helpers/css-reset"
import { mode } from "@uniland-ui/theme-tools"
import { UnilandPluginOptions } from "./helpers/plugin.types"

/**
 * 1. Support passing cache options from plugin
 * 2. Provide emotion theme directly from plugin
 * 3.
 */

/**
 * Helper function to extend Uniland plugin with options
 * It just returns its arguments with typescript types added
 */

export function extendUniland(
  options: UnilandPluginOptions = { cssReset: true }
) {
  return options
}

const UnilandUIVuePlugin: Plugin = {
  install(app, options: UnilandPluginOptions = { cssReset: true }) {
    // 1. Get theme value
    // 2. Parse theme tokens to CSS variables
    // 3. Inject all CSS variables as theme object
    const theme = options.extendTheme || defaultTheme
    const computedTheme = computed<WithCSSVar<ThemeOverride>>(() =>
      toCSSVar(theme)
    )

    // Inject Uniland CSS variables
    injectGlobal({
      ":root": computedTheme.value.__cssVars,
    })

    // Initialize color mode
    const colorMode: UnwrapRef<ColorModeRef> =
      theme.config?.initialColorMode || "light"

    // Provide initial color mode
    app.config.globalProperties.$initialColorMode = colorMode

    const colorModeRef = ref(colorMode) as ColorModeRef
    app.provide<ColorModeRef>("$unilandColorMode", colorModeRef)

    if (options.cssReset) {
      injectResetStyles()
    }

    let libraryIcons = options.icons?.library || {}
    let extendedIcons = options.icons?.extend || {}

    // Bind theme to application global properties and provide to application
    app.config.globalProperties.$unilandTheme = computedTheme.value
    app.config.globalProperties.$unilandTheme = computedTheme.value
    app.provide(EmotionThemeContextSymbol, computedTheme.value)
    app.provide("$unilandTheme", computedTheme.value as ThemeOverride)

    let emotionCache: EmotionCache | null = null
    // Provide emotion cache
    if (options.emotionCacheOptions) {
      emotionCache = createCache(options.emotionCacheOptions)
      app.provide(EmotionCacheInjectionSymbol, emotionCache)
    }

    if (!emotionCache) {
      emotionCache = createCache({
        key: "uniland",
        nonce: `uniland-global-cache-${Date.now()}`,
      })
    }

    // Inject `styles.global` in document
    injectThemeGlobalStyles(computedTheme.value, emotionCache, colorModeRef)

    libraryIcons = parseIcons(libraryIcons)

    // Merge internal icons and library icons
    const mergedIcons: MergedIcons = {
      ...internalIcons,
      ...libraryIcons,
      ...extendedIcons,
    }

    app.provide("$unilandIcons", mergedIcons)

    // Set color mode property
    app.config.globalProperties.$mode = mode
  },
}

export type { UnilandPluginOptions }
export interface ThemeProviderProps extends ThemeOverride {}
export default UnilandUIVuePlugin
export { extendTheme }

// Export uniland factory function
export { uniland }

/**
 *
 * Component exports
 * ==================
 *
 * Dear contributors,
 *
 * Please keep these exports in Alphabetical order :)
 */

// A
// export * from "@uniland-ui/u-accordion"
// export * from "@uniland-ui/u-alert"
// export * from "@uniland-ui/u-avatar"

// B
// export * from "@uniland-ui/u-breadcrumb"
// export * from "@uniland-ui/u-button"

// C
// export * from "@uniland-ui/u-checkbox"
// export * from "@uniland-ui/u-color-mode"
// export * from "@uniland-ui/u-close-button"
// export * from "@uniland-ui/u-code"

// F
// export * from "@uniland-ui/u-flex"
// export * from "@uniland-ui/u-focus-lock"
// export * from "@uniland-ui/u-form-control"

// I
export * from "@uniland-ui/u-icon"
// export * from "@uniland-ui/u-input"

// L
export * from "@uniland-ui/u-layout"

// M
// export * from "@uniland-ui/u-modal"
// export * from "@uniland-ui/u-motion"

// P
// export * from "@uniland-ui/u-pin-input"
// export * from "@uniland-ui/u-popper"
// export * from "@uniland-ui/u-portal"

// R
export * from "@uniland-ui/u-reset"

// S
// export * from "@uniland-ui/u-skip-nav"
// export * from "@uniland-ui/u-spinner"
// export * from "@uniland-ui/u-scroll-lock"

// T
// export * from "@uniland-ui/u-theme-provider"
// export * from "@uniland-ui/u-tag"

// V
// export * from "@uniland-ui/u-visually-hidden"

// OTHERS
// export * from "@uniland-ui/vue-composables"
// export * from "@uniland-ui/vue-a11y"

/**
 *
 * Directives exports
 * ==================
 *
 * Dear contributors,
 *
 * Please keep these exports in Alphabetical order :)
 */

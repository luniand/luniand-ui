import { computed, Plugin, ref, UnwrapRef } from "@vue/runtime-core"
import defaultTheme from "@uisland-ui/theme"
import type { ColorModeRef } from "@uisland-ui/u-color-mode"
import { toCSSVar, WithCSSVar } from "@uisland-ui/styled-system"
import { uisland, injectGlobal } from "@uisland-ui/system"
import {
  EmotionThemeContextSymbol,
  EmotionCacheInjectionSymbol,
} from "@uisland-ui/styled"
import createCache, { EmotionCache } from "@emotion/cache"
import internalIcons from "./icon.internals"
import { extendTheme, ThemeOverride } from "./extend-theme"
import { MergedIcons, parseIcons } from "./parse-icons"
import { injectResetStyles, injectThemeGlobalStyles } from "./helpers/css-reset"
import { mode } from "@uisland-ui/theme-tools"
import { UislandPluginOptions } from "./helpers/plugin.types"

/**
 * 1. Support passing cache options from plugin
 * 2. Provide emotion theme directly from plugin
 * 3.
 */

/**
 * Helper function to extend Uisland plugin with options
 * It just returns its arguments with typescript types added
 */

export function extendUisland(
  options: UislandPluginOptions = { cssReset: true }
) {
  return options
}

const UislandUIVuePlugin: Plugin = {
  install(app, options: UislandPluginOptions = { cssReset: true }) {
    // 1. Get theme value
    // 2. Parse theme tokens to CSS variables
    // 3. Inject all CSS variables as theme object
    const theme = options.extendTheme || defaultTheme
    const computedTheme = computed<WithCSSVar<ThemeOverride>>(() =>
      toCSSVar(theme)
    )

    // Inject Uisland CSS variables
    injectGlobal({
      ":root": computedTheme.value.__cssVars,
    })

    // Initialize color mode
    const colorMode: UnwrapRef<ColorModeRef> =
      theme.config?.initialColorMode || "light"

    // Provide initial color mode
    app.config.globalProperties.$initialColorMode = colorMode

    const colorModeRef = ref(colorMode) as ColorModeRef
    app.provide<ColorModeRef>("$uislandColorMode", colorModeRef)

    if (options.cssReset) {
      injectResetStyles()
    }

    let libraryIcons = options.icons?.library || {}
    let extendedIcons = options.icons?.extend || {}

    // Bind theme to application global properties and provide to application
    app.config.globalProperties.$uislandTheme = computedTheme.value
    app.config.globalProperties.$uislandTheme = computedTheme.value
    app.provide(EmotionThemeContextSymbol, computedTheme.value)
    app.provide("$uislandTheme", computedTheme.value as ThemeOverride)

    let emotionCache: EmotionCache | null = null
    // Provide emotion cache
    if (options.emotionCacheOptions) {
      emotionCache = createCache(options.emotionCacheOptions)
      app.provide(EmotionCacheInjectionSymbol, emotionCache)
    }

    if (!emotionCache) {
      emotionCache = createCache({
        key: "uisland",
        nonce: `uisland-global-cache-${Date.now()}`,
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

    app.provide("$uislandIcons", mergedIcons)

    // Set color mode property
    app.config.globalProperties.$mode = mode
  },
}

export type { UislandPluginOptions }
export interface ThemeProviderProps extends ThemeOverride {}
export default UislandUIVuePlugin
export { extendTheme }

// Export uisland factory function
export { uisland }

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
// export * from "@uisland-ui/c-accordion"
// export * from "@uisland-ui/c-alert"
// export * from "@uisland-ui/c-avatar"

// B
// export * from "@uisland-ui/c-breadcrumb"
// export * from "@uisland-ui/c-button"

// C
// export * from "@uisland-ui/c-checkbox"
// export * from "@uisland-ui/c-color-mode"
// export * from "@uisland-ui/c-close-button"
// export * from "@uisland-ui/c-code"

// F
// export * from "@uisland-ui/c-flex"
// export * from "@uisland-ui/c-focus-lock"
// export * from "@uisland-ui/c-form-control"

// I
// export * from "@uisland-ui/c-icon"
// export * from "@uisland-ui/c-input"

// L
// export * from "@uisland-ui/vue-layout"

// M
// export * from "@uisland-ui/c-modal"
// export * from "@uisland-ui/c-motion"

// P
// export * from "@uisland-ui/c-pin-input"
// export * from "@uisland-ui/c-popper"
// export * from "@uisland-ui/c-portal"

// R
// export * from "@uisland-ui/c-reset"

// S
// export * from "@uisland-ui/c-skip-nav"
// export * from "@uisland-ui/c-spinner"
// export * from "@uisland-ui/c-scroll-lock"

// T
// export * from "@uisland-ui/c-theme-provider"
// export * from "@uisland-ui/c-tag"

// V
// export * from "@uisland-ui/c-visually-hidden"

// OTHERS
// export * from "@uisland-ui/vue-composables"
// export * from "@uisland-ui/vue-a11y"

/**
 *
 * Directives exports
 * ==================
 *
 * Dear contributors,
 *
 * Please keep these exports in Alphabetical order :)
 */

import { computed, Plugin, ref, UnwrapRef } from "vue";
import defaultTheme from "@luniand-ui/theme";
import type { ColorModeRef } from "@luniand-ui/color-mode";
import { toCSSVar, WithCSSVar, ThemingProps } from "@luniand-ui/styled-system";
import { luniand, injectGlobal } from "@luniand-ui/system";
import {
  EmotionThemeContextSymbol,
  EmotionCacheInjectionSymbol,
} from "@luniand-ui/styled";
import createCache, { EmotionCache } from "@emotion/cache";
import internalIcons from "./icon.internals";
import { extendTheme, ThemeOverride } from "./extend-theme";
import { MergedIcons, parseIcons } from "./parse-icons";
import {
  injectResetStyles,
  injectThemeGlobalStyles,
} from "./helpers/css-reset";
import { mode } from "@luniand-ui/theme-tools";
import { LuniandPluginOptions } from "./helpers/plugin.types";

/**
 * 1. Support passing cache options from plugin
 * 2. Provide emotion theme directly from plugin
 * 3.
 */

/**
 * Helper function to extend Luniand plugin with options
 * It just returns its arguments with typescript types added
 */

export function extendLuniand(
  options: LuniandPluginOptions = { cssReset: true }
) {
  return options;
}

const LuniandUIVuePlugin: Plugin = {
  install(app, options: LuniandPluginOptions = { cssReset: true }) {
    // 1. Get theme value
    // 2. Parse theme tokens to CSS variables
    // 3. Inject all CSS variables as theme object
    const theme = options.extendTheme || defaultTheme;
    const computedTheme = computed<WithCSSVar<ThemeOverride>>(() =>
      toCSSVar(theme)
    );

    // Inject Luniand CSS variables
    injectGlobal({
      ":root": computedTheme.value.__cssVars,
    });

    // Initialize color mode
    const colorMode: UnwrapRef<ColorModeRef> =
      theme.config?.initialColorMode || "light";

    // Provide initial color mode
    app.config.globalProperties.$initialColorMode = colorMode;

    const colorModeRef = ref(colorMode) as ColorModeRef;
    app.provide<ColorModeRef>("$luniandColorMode", colorModeRef);

    if (options.cssReset) {
      injectResetStyles();
    }

    let libraryIcons = options.icons?.library || {};
    let extendedIcons = options.icons?.extend || {};

    // Bind theme to application global properties and provide to application
    app.config.globalProperties.$luniandTheme = computedTheme.value;
    app.config.globalProperties.$luniandTheme = computedTheme.value;
    app.provide(EmotionThemeContextSymbol, computedTheme.value);
    app.provide("$luniandTheme", computedTheme.value as ThemeOverride);

    let emotionCache: EmotionCache | null = null;
    // Provide emotion cache
    if (options.emotionCacheOptions) {
      emotionCache = createCache(options.emotionCacheOptions);
      app.provide(EmotionCacheInjectionSymbol, emotionCache);
    }

    if (!emotionCache) {
      emotionCache = createCache({
        key: "luniand",
        nonce: `luniand-global-cache-${Date.now()}`,
      });
    }

    // Inject `styles.global` in document
    injectThemeGlobalStyles(computedTheme.value, emotionCache, colorModeRef);

    libraryIcons = parseIcons(libraryIcons);

    // Merge internal icons and library icons
    const mergedIcons: MergedIcons = {
      ...internalIcons,
      ...libraryIcons,
      ...extendedIcons,
    };

    app.provide("$luniandIcons", mergedIcons);

    // Set color mode property
    app.config.globalProperties.$mode = mode;
  },
};

export type { LuniandPluginOptions };
export interface ThemeProviderProps extends ThemeOverride {}
export default LuniandUIVuePlugin;
export { extendTheme };

// Export luniand factory function
export { luniand };

export type { ThemingProps };

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
// export * from "@luniand-ui/c-accordion"
export * from "@luniand-ui/alert"
// export * from "@luniand-ui/c-avatar"

// B
// export * from "@luniand-ui/c-breadcrumb"
export * from "@luniand-ui/button"

// C
// export * from "@luniand-ui/c-checkbox"
export * from "@luniand-ui/color-mode";
// export * from "@luniand-ui/c-close-button"
// export * from "@luniand-ui/c-code"

// F
// export * from "@luniand-ui/c-focus-lock"
// export * from "@luniand-ui/c-form-control"

// I
export * from "@luniand-ui/icons";
// export * from "@luniand-ui/c-input"

// L
// export * from "@luniand-ui/u-layout";

// M
// export * from "@luniand-ui/c-modal"
// export * from "@luniand-ui/c-motion"

// P
// export * from "@luniand-ui/c-pin-input"
// export * from "@luniand-ui/c-popper"
// export * from "@luniand-ui/c-portal"

// R
export * from "@luniand-ui/reset";

// S
// export * from "@luniand-ui/c-skip-nav"
export * from "@luniand-ui/spinner"
// export * from "@luniand-ui/c-scroll-lock"

// T
export * from "@luniand-ui/theme-provider";
// export * from "@luniand-ui/c-tag"

// V
export * from "@luniand-ui/visually-hidden"

// OTHERS
// export * from "@luniand-ui/vue-composables"
// export * from "@luniand-ui/vue-a11y"

/**
 *
 * Directives exports
 * ==================
 *
 * Dear contributors,
 *
 * Please keep these exports in Alphabetical order :)
 */

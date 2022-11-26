import { UnwrapRef } from "@vue/runtime-core";
import { ColorModeRef } from "@luniand-ui/color-mode";
import { ThemeOverride } from "../extend-theme";
import { Options } from "@emotion/cache";

interface ExtendIconsPath {
  path: string;
  viewBox?: string;
}

interface IconsOptions {
  pack?: "fa" | "fe";
  library?: {};
  extend?: Record<string, ExtendIconsPath>;
}
export interface LuniandPluginOptions {
  cssReset?: boolean;
  extendTheme?: ThemeOverride;
  icons?: IconsOptions;
  defaultColorMode?: UnwrapRef<ColorModeRef>;
  emotionCacheOptions?: Options;
}

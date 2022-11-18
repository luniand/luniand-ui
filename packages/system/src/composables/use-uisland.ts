import { inject } from "@vue/runtime-core"
import { useColorMode } from "@uisland-ui/u-color-mode"
import { Dict } from "@uisland-ui/utils"

/** Provides theme object in component context */
export const useTheme = <T extends object = Dict>(): T => {
  const theme = inject("$uislandTheme") as T
  return theme
}

/** Single hook to provide theme and color mode values */
export const useUisland = () => {
  const theme = useTheme()
  const { colorMode } = useColorMode()
  return {
    theme,
    colorMode,
  }
}

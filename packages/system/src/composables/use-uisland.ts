import { inject } from "@vue/runtime-core"
import { useColorMode } from "@uniland-ui/u-color-mode"
import { Dict } from "@uniland-ui/utils"

/** Provides theme object in component context */
export const useTheme = <T extends object = Dict>(): T => {
  const theme = inject("$unilandTheme") as T
  return theme
}

/** Single hook to provide theme and color mode values */
export const useUniland = () => {
  const theme = useTheme()
  const { colorMode } = useColorMode()
  return {
    theme,
    colorMode,
  }
}

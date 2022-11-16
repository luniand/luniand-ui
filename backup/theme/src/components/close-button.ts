import type {
  SystemStyleFunction,
  SystemStyleObject,
} from "@uisland-ui/vue-theme-tools"
import { cssVar, mode } from "@uisland-ui/vue-theme-tools"

const $size = cssVar("close-button-size")

const baseStyle: SystemStyleFunction = (props) => {
  const hoverBg = mode(`blackAlpha.100`, `whiteAlpha.100`)(props)
  const activeBg = mode(`blackAlpha.200`, `whiteAlpha.200`)(props)

  return {
    w: [$size.reference],
    h: [$size.reference],
    borderRadius: "md",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
      boxShadow: "none",
    },
    _hover: { bg: hoverBg },
    _active: { bg: activeBg },
    _focusVisible: {
      boxShadow: "outline",
    },
  }
}

const sizes: Record<string, SystemStyleObject> = {
  lg: {
    [$size.variable]: "40px",
    fontSize: "16px",
  },
  md: {
    [$size.variable]: "32px",
    fontSize: "12px",
  },
  sm: {
    [$size.variable]: "24px",
    fontSize: "10px",
  },
}

const defaultProps = {
  size: "md",
}

export default {
  baseStyle,
  sizes,
  defaultProps,
}

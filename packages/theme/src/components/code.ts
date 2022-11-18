import type { SystemStyleObject } from "@uniland-ui/theme-tools"
import Badge from "./badge"

const { variants, defaultProps } = Badge

const baseStyle: SystemStyleObject = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
}

export default {
  baseStyle,
  variants,
  defaultProps,
}

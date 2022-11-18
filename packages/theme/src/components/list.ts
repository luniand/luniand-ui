import { listAnatomy as parts } from "@uisland-ui/anatomy"
import type {
  PartsStyleObject,
  SystemStyleObject,
} from "@uisland-ui/theme-tools"

const baseStyleIcon: SystemStyleObject = {
  marginEnd: "0.5rem",
  display: "inline",
  verticalAlign: "text-bottom",
}

const baseStyle: PartsStyleObject<typeof parts> = {
  container: {},
  item: {},
  icon: baseStyleIcon,
}

export default {
  parts: parts.keys,
  baseStyle,
}

import { formErrorAnatomy as parts } from "@uisland-ui/vue-anatomy"
import type {
  PartsStyleFunction,
  SystemStyleFunction,
} from "@uisland-ui/vue-theme-tools"
import { mode } from "@uisland-ui/vue-theme-tools"

const baseStyleText: SystemStyleFunction = (props) => {
  return {
    color: mode("red.500", "red.300")(props),
    mt: 2,
    fontSize: "sm",
    lineHeight: "normal",
  }
}

const baseStyleIcon: SystemStyleFunction = (props) => {
  return {
    marginEnd: "0.5em",
    color: mode("red.500", "red.300")(props),
  }
}

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  text: baseStyleText(props),
  icon: baseStyleIcon(props),
})

export default {
  parts: parts.keys,
  baseStyle,
}

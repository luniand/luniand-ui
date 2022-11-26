import { editableAnatomy as parts } from "@luniand-ui/anatomy";
import type {
  PartsStyleObject,
  SystemStyleObject,
} from "@luniand-ui/theme-tools";

const baseStylePreview: SystemStyleObject = {
  borderRadius: "md",
  py: "3px",
  transitionProperty: "common",
  transitionDuration: "normal",
};

const baseStyleInput: SystemStyleObject = {
  borderRadius: "md",
  py: "3px",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 },
};

const baseStyleTextarea: SystemStyleObject = {
  borderRadius: "md",
  py: "3px",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 },
};

const baseStyle: PartsStyleObject<typeof parts> = {
  preview: baseStylePreview,
  input: baseStyleInput,
  textarea: baseStyleTextarea,
};

export default {
  parts: parts.keys,
  baseStyle,
};

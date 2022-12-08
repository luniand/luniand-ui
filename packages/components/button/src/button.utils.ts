import { SystemProps } from "@luniand-ui/system"
import { BaseThemedComponentProps } from "@luniand-ui/prop-utils"

type ButtonTypes = "button" | "reset" | "submit"

export interface ButtonProps extends BaseThemedComponentProps {
  isLoading?: boolean
  isDisabled?: boolean
  isActive?: boolean
  loadingText?: string
  isFullWidth?: boolean
  type?: ButtonTypes
  leftIcon?: string
  rightIcon?: string
  spinnerPlacement?: "start" | "end"
  iconSpacing?: SystemProps["marginRight"]
}

export const defaultButtonProps = {
  as: "button",
  iconSpacing: "0.5rem",
}
import * as CSS from "csstype"
import { Length, t, Token, transforms } from "../utils"
import { Config } from "../utils/prop-config"

/**
 * The parser configuration for common outline properties
 */
export const ring: Config = {
  ring: { transform: transforms.ring },
  ringColor: t.colors("--uniland-ring-color"),
  ringOffset: t.prop("--uniland-ring-offset-width"),
  ringOffsetColor: t.colors("--uniland-ring-offset-color"),
  ringInset: t.prop("--uniland-ring-inset"),
}

export interface RingProps {
  /**
   * Creates outline rings with CSS `box-shadow` property
   */
  ring?: Token<Length>
  /**
   * The color of the outline ring
   */
  ringColor?: Token<CSS.Property.Color, "colors">
  /**
   * The thickness of the offset shadow when using outline rings
   */
  ringOffset?: Token<Length>
  /**
   * The color of the offset shadow when adding outline rings
   */
  ringOffsetColor?: Token<CSS.Property.Color, "colors">
  /**
   * If the outline ring should an `inset`
   */
  ringInset?: Token<"inset" | "none">
}

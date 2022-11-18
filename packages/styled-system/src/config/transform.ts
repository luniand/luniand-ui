import * as CSS from "csstype"
import { Config } from "../utils/prop-config"
import { Length, t, Token, transforms } from "../utils"

export const transform: Config = {
  clipPath: true,
  transform: t.propT("transform", transforms.transform),
  transformOrigin: true,
  translateX: t.spaceT("--uniland-translate-x"),
  translateY: t.spaceT("--uniland-translate-y"),
  skewX: t.degreeT("--uniland-skew-x"),
  skewY: t.degreeT("--uniland-skew-y"),
  scaleX: t.prop("--uniland-scale-x"),
  scaleY: t.prop("--uniland-scale-y"),
  scale: t.prop(["--uniland-scale-x", "--uniland-scale-y"]),
  rotate: t.degreeT("--uniland-rotate"),
}

export interface TransformProps {
  /**
   * The CSS `transform` property
   */
  transform?: Token<CSS.Property.Transform | "auto" | "auto-gpu">
  /**
   * The CSS `transform-origin` property
   */
  transformOrigin?: Token<CSS.Property.TransformOrigin | number, "sizes">
  /**
   * The CSS `clip-path` property.
   *
   * It creates a clipping region that sets what part of an element should be shown.
   */
  clipPath?: Token<CSS.Property.ClipPath>
  /**
   * Translate value of an elements in the x-direction.
   * - Only works if `transform=auto`
   * - It sets the value of `--uniland-translate-x`
   */
  translateX?: Token<Length>
  /**
   * Translate value of an elements in the y-direction.
   * - Only works if `transform=auto`
   * - It sets the value of `--uniland-translate-y`
   */
  translateY?: Token<Length>
  /**
   * Sets the rotate value of the element
   */
  rotate?: Token<Length>
  /**
   * Skew value of an elements in the x-direction.
   * - Only works if `transform=auto`
   * - It sets the value of `--uniland-skew-x`
   */
  skewX?: Token<Length>
  /**
   * Skew value of an elements in the y-direction.
   * - Only works if `transform=auto`
   * - It sets the value of `--uniland-skew-y`
   */
  skewY?: Token<Length>
  /**
   * Scale value of an elements in the x-direction.
   * - Only works if `transform=auto`
   * - It sets the value of `--uniland-scale-x`
   */
  scaleX?: Token<Length>
  /**
   * Scale value of an elements in the y-direction.
   * - Only works if `transform=auto`
   * - It sets the value of `--uniland-scale-y`
   */
  scaleY?: Token<Length>
  /**
   * Sets the scale value of the element
   */
  scale?: Token<Length>
}

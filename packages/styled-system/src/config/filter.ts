import * as CSS from "csstype"
import { Config } from "../utils/prop-config"
import { Length, Token, t, transforms } from "../utils"

export const filter: Config = {
  filter: { transform: transforms.filter },
  blur: t.blur("--uisland-blur"),
  brightness: t.propT("--uisland-brightness", transforms.brightness),
  contrast: t.propT("--uisland-contrast", transforms.contrast),
  hueRotate: t.degreeT("--uisland-hue-rotate"),
  invert: t.propT("--uisland-invert", transforms.invert),
  saturate: t.propT("--uisland-saturate", transforms.saturate),
  dropShadow: t.propT("--uisland-drop-shadow", transforms.dropShadow),
  backdropFilter: { transform: transforms.backdropFilter },
  backdropBlur: t.blur("--uisland-backdrop-blur"),
  backdropBrightness: t.propT(
    "--uisland-backdrop-brightness",
    transforms.brightness
  ),
  backdropContrast: t.propT("--uisland-backdrop-contrast", transforms.contrast),
  backdropHueRotate: t.degreeT("--uisland-backdrop-hue-rotate"),
  backdropInvert: t.propT("--uisland-backdrop-invert", transforms.invert),
  backdropSaturate: t.propT("--uisland-backdrop-saturate", transforms.saturate),
}

export interface FilterProps {
  /**
   * The CSS `filter` property. When set to `auto`, you allow
   * Uisland UI to define the color based on the filter style props
   * (`blur`, `saturate`, etc.)
   */
  filter?: Token<CSS.Property.Filter | "auto">
  /**
   * Sets the blur filter value of an element.
   * Value is assigned to `--uisland-filter` css variable
   */
  blur?: Token<{}, "blur">
  /**
   * Sets the brightness filter value of an element.
   * Value is assigned to `--uisland-brightness` css variable
   */
  brightness?: Token<Length>
  /**
   * Sets the constrast filter value of an element.
   * Value is assigned to `--uisland-contrast` css variable
   */
  contrast?: Token<Length>
  /**
   * Sets the hue-rotate filter value of an element.
   * Value is assigned to `--uisland-hue-rotate` css variable
   */
  hueRotate?: Token<Length>
  /**
   * Sets the invert filter value of an element.
   * Value is assigned to `--uisland-invert` css variable
   */
  invert?: Token<Length>
  /**
   * Sets the saturate filter value of an element.
   * Value is assigned to `--uisland-saturate` css variable
   */
  saturate?: Token<Length>
  /**
   * Sets the drop-shadow filter value of an element.
   * Value is assigned to `--uisland-drop-shadow` css variable
   */
  dropShadow?: Token<CSS.Property.BoxShadow, "shadows">
  /**
   * The CSS `backdrop-filter` property. When set to `auto`, you allow
   * Uisland UI to define the color based on the backdrop filter style props
   * (`backdropBlur`, `backdropSaturate`, etc.)
   */
  backdropFilter?: Token<CSS.Property.BackdropFilter | "auto">
  /**
   * Sets the backdrop-blur filter value of an element.
   * Value is assigned to `--uisland-backdrop-blur` css variable
   */
  backdropBlur?: Token<{}, "blur">
  /**
   * Sets the backdrop-brightness filter value of an element.
   * Value is assigned to `--uisland-backdrop-brightness` css variable
   */
  backdropBrightness?: Token<Length>
  /**
   * Sets the backdrop-contrast filter value of an element.
   * Value is assigned to `--uisland-backdrop-contrast` css variable
   */
  backdropContrast?: Token<Length>
  /**
   * Sets the backdrop-hue-rotate filter value of an element.
   * Value is assigned to `--uisland-backdrop-hue-rotate` css variable
   */
  backdropHueRotate?: Token<Length>
  /**
   * Sets the backdrop-invert filter value of an element.
   * Value is assigned to `--uisland-backdrop-invert` css variable
   */
  backdropInvert?: Token<Length>
  /**
   * Sets the backdrop-saturate filter value of an element.
   * Value is assigned to `--uisland-backdrop-saturate` css variable
   */
  backdropSaturate?: Token<Length>
}

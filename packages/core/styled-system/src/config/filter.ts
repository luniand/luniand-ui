import * as CSS from "csstype";
import { Config } from "../utils/prop-config";
import { Length, Token, t, transforms } from "../utils";

export const filter: Config = {
  filter: { transform: transforms.filter },
  blur: t.blur("--luniand-blur"),
  brightness: t.propT("--luniand-brightness", transforms.brightness),
  contrast: t.propT("--luniand-contrast", transforms.contrast),
  hueRotate: t.degreeT("--luniand-hue-rotate"),
  invert: t.propT("--luniand-invert", transforms.invert),
  saturate: t.propT("--luniand-saturate", transforms.saturate),
  dropShadow: t.propT("--luniand-drop-shadow", transforms.dropShadow),
  backdropFilter: { transform: transforms.backdropFilter },
  backdropBlur: t.blur("--luniand-backdrop-blur"),
  backdropBrightness: t.propT(
    "--luniand-backdrop-brightness",
    transforms.brightness
  ),
  backdropContrast: t.propT("--luniand-backdrop-contrast", transforms.contrast),
  backdropHueRotate: t.degreeT("--luniand-backdrop-hue-rotate"),
  backdropInvert: t.propT("--luniand-backdrop-invert", transforms.invert),
  backdropSaturate: t.propT("--luniand-backdrop-saturate", transforms.saturate),
};

export interface FilterProps {
  /**
   * The CSS `filter` property. When set to `auto`, you allow
   * Luniand UI to define the color based on the filter style props
   * (`blur`, `saturate`, etc.)
   */
  filter?: Token<CSS.Property.Filter | "auto">;
  /**
   * Sets the blur filter value of an element.
   * Value is assigned to `--luniand-filter` css variable
   */
  blur?: Token<{}, "blur">;
  /**
   * Sets the brightness filter value of an element.
   * Value is assigned to `--luniand-brightness` css variable
   */
  brightness?: Token<Length>;
  /**
   * Sets the contrast filter value of an element.
   * Value is assigned to `--luniand-contrast` css variable
   */
  contrast?: Token<Length>;
  /**
   * Sets the hue-rotate filter value of an element.
   * Value is assigned to `--luniand-hue-rotate` css variable
   */
  hueRotate?: Token<Length>;
  /**
   * Sets the invert filter value of an element.
   * Value is assigned to `--luniand-invert` css variable
   */
  invert?: Token<Length>;
  /**
   * Sets the saturation filter value of an element.
   * Value is assigned to `--luniand-saturate` css variable
   */
  saturate?: Token<Length>;
  /**
   * Sets the drop-shadow filter value of an element.
   * Value is assigned to `--luniand-drop-shadow` css variable
   */
  dropShadow?: Token<CSS.Property.BoxShadow, "shadows">;
  /**
   * The CSS `backdrop-filter` property. When set to `auto`, you allow
   * Luniand UI to define the color based on the backdrop filter style props
   * (`backdropBlur`, `backdropSaturate`, etc.)
   */
  backdropFilter?: Token<CSS.Property.BackdropFilter | "auto">;
  /**
   * Sets the backdrop-blur filter value of an element.
   * Value is assigned to `--luniand-backdrop-blur` css variable
   */
  backdropBlur?: Token<{}, "blur">;
  /**
   * Sets the backdrop-brightness filter value of an element.
   * Value is assigned to `--luniand-backdrop-brightness` css variable
   */
  backdropBrightness?: Token<Length>;
  /**
   * Sets the backdrop-contrast filter value of an element.
   * Value is assigned to `--luniand-backdrop-contrast` css variable
   */
  backdropContrast?: Token<Length>;
  /**
   * Sets the backdrop-hue-rotate filter value of an element.
   * Value is assigned to `--luniand-backdrop-hue-rotate` css variable
   */
  backdropHueRotate?: Token<Length>;
  /**
   * Sets the backdrop-invert filter value of an element.
   * Value is assigned to `--luniand-backdrop-invert` css variable
   */
  backdropInvert?: Token<Length>;
  /**
   * Sets the backdrop-saturate filter value of an element.
   * Value is assigned to `--luniand-backdrop-saturate` css variable
   */
  backdropSaturate?: Token<Length>;
}

/**
 * The CSS transform order following the upcoming spec from CSSWG
 * translate => rotate => scale => skew
 * @see https://drafts.csswg.org/css-transforms-2/#ctm
 * @see https://www.stefanjudis.com/blog/order-in-css-transformation-transform-functions-vs-individual-transforms/
 */
const transformTemplate = [
  "rotate(var(--uisland-rotate, 0))",
  "scaleX(var(--uisland-scale-x, 1))",
  "scaleY(var(--uisland-scale-y, 1))",
  "skewX(var(--uisland-skew-x, 0))",
  "skewY(var(--uisland-skew-y, 0))",
]

export function getTransformTemplate() {
  return [
    "translateX(var(--uisland-translate-x, 0))",
    "translateY(var(--uisland-translate-y, 0))",
    ...transformTemplate,
  ].join(" ")
}

export function getTransformGpuTemplate() {
  return [
    "translate3d(var(--uisland-translate-x, 0), var(--uisland-translate-y, 0), 0)",
    ...transformTemplate,
  ].join(" ")
}

export const filterTemplate = {
  "--uisland-blur": "var(--uisland-empty,/*!*/ /*!*/)",
  "--uisland-brightness": "var(--uisland-empty,/*!*/ /*!*/)",
  "--uisland-contrast": "var(--uisland-empty,/*!*/ /*!*/)",
  "--uisland-grayscale": "var(--uisland-empty,/*!*/ /*!*/)",
  "--uisland-hue-rotate": "var(--uisland-empty,/*!*/ /*!*/)",
  "--uisland-invert": "var(--uisland-empty,/*!*/ /*!*/)",
  "--uisland-saturate": "var(--uisland-empty,/*!*/ /*!*/)",
  "--uisland-sepia": "var(--uisland-empty,/*!*/ /*!*/)",
  "--uisland-drop-shadow": "var(--uisland-empty,/*!*/ /*!*/)",
  filter: [
    "var(--uisland-blur)",
    "var(--uisland-brightness)",
    "var(--uisland-contrast)",
    "var(--uisland-grayscale)",
    "var(--uisland-hue-rotate)",
    "var(--uisland-invert)",
    "var(--uisland-saturate)",
    "var(--uisland-sepia)",
    "var(--uisland-drop-shadow)",
  ].join(" "),
}

export const backdropFilterTemplate = {
  backdropFilter: [
    "var(--uisland-backdrop-blur)",
    "var(--uisland-backdrop-brightness)",
    "var(--uisland-backdrop-contrast)",
    "var(--uisland-backdrop-grayscale)",
    "var(--uisland-backdrop-hue-rotate)",
    "var(--uisland-backdrop-invert)",
    "var(--uisland-backdrop-opacity)",
    "var(--uisland-backdrop-saturate)",
    "var(--uisland-backdrop-sepia)",
  ].join(" "),
  "--uisland-backdrop-blur": "var(--uisland-empty,/*!*/ /*!*/)",
  "--uisland-backdrop-brightness": "var(--uisland-empty,/*!*/ /*!*/)",
  "--uisland-backdrop-contrast": "var(--uisland-empty,/*!*/ /*!*/)",
  "--uisland-backdrop-grayscale": "var(--uisland-empty,/*!*/ /*!*/)",
  "--uisland-backdrop-hue-rotate": "var(--uisland-empty,/*!*/ /*!*/)",
  "--uisland-backdrop-invert": "var(--uisland-empty,/*!*/ /*!*/)",
  "--uisland-backdrop-opacity": "var(--uisland-empty,/*!*/ /*!*/)",
  "--uisland-backdrop-saturate": "var(--uisland-empty,/*!*/ /*!*/)",
  "--uisland-backdrop-sepia": "var(--uisland-empty,/*!*/ /*!*/)",
}

export function getRingTemplate(value: any) {
  return {
    "--uisland-ring-offset-shadow": `var(--uisland-ring-inset) 0 0 0 var(--uisland-ring-offset-width) var(--uisland-ring-offset-color)`,
    "--uisland-ring-shadow": `var(--uisland-ring-inset) 0 0 0 calc(var(--uisland-ring-width) + var(--uisland-ring-offset-width)) var(--uisland-ring-color)`,
    "--uisland-ring-width": value,
    boxShadow: [
      `var(--uisland-ring-offset-shadow)`,
      `var(--uisland-ring-shadow)`,
      `var(--uisland-shadow, 0 0 #0000)`,
    ].join(", "),
  }
}

export const flexDirectionTemplate = {
  "row-reverse": {
    space: "--uisland-space-x-reverse",
    divide: "--uisland-divide-x-reverse",
  },
  "column-reverse": {
    space: "--uisland-space-y-reverse",
    divide: "--uisland-divide-y-reverse",
  },
}

const owlSelector = "& > :not(style) ~ :not(style)"

export const spaceXTemplate = {
  [owlSelector]: {
    marginInlineStart:
      "calc(var(--uisland-space-x) * calc(1 - var(--uisland-space-x-reverse)))",
    marginInlineEnd:
      "calc(var(--uisland-space-x) * var(--uisland-space-x-reverse))",
  },
}

export const spaceYTemplate = {
  [owlSelector]: {
    marginTop:
      "calc(var(--uisland-space-y) * calc(1 - var(--uisland-space-y-reverse)))",
    marginBottom:
      "calc(var(--uisland-space-y) * var(--uisland-space-y-reverse))",
  },
}

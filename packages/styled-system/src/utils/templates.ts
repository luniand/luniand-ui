/**
 * The CSS transform order following the upcoming spec from CSSWG
 * translate => rotate => scale => skew
 * @see https://drafts.csswg.org/css-transforms-2/#ctm
 * @see https://www.stefanjudis.com/blog/order-in-css-transformation-transform-functions-vs-individual-transforms/
 */
const transformTemplate = [
  "rotate(var(--uniland-rotate, 0))",
  "scaleX(var(--uniland-scale-x, 1))",
  "scaleY(var(--uniland-scale-y, 1))",
  "skewX(var(--uniland-skew-x, 0))",
  "skewY(var(--uniland-skew-y, 0))",
]

export function getTransformTemplate() {
  return [
    "translateX(var(--uniland-translate-x, 0))",
    "translateY(var(--uniland-translate-y, 0))",
    ...transformTemplate,
  ].join(" ")
}

export function getTransformGpuTemplate() {
  return [
    "translate3d(var(--uniland-translate-x, 0), var(--uniland-translate-y, 0), 0)",
    ...transformTemplate,
  ].join(" ")
}

export const filterTemplate = {
  "--uniland-blur": "var(--uniland-empty,/*!*/ /*!*/)",
  "--uniland-brightness": "var(--uniland-empty,/*!*/ /*!*/)",
  "--uniland-contrast": "var(--uniland-empty,/*!*/ /*!*/)",
  "--uniland-grayscale": "var(--uniland-empty,/*!*/ /*!*/)",
  "--uniland-hue-rotate": "var(--uniland-empty,/*!*/ /*!*/)",
  "--uniland-invert": "var(--uniland-empty,/*!*/ /*!*/)",
  "--uniland-saturate": "var(--uniland-empty,/*!*/ /*!*/)",
  "--uniland-sepia": "var(--uniland-empty,/*!*/ /*!*/)",
  "--uniland-drop-shadow": "var(--uniland-empty,/*!*/ /*!*/)",
  filter: [
    "var(--uniland-blur)",
    "var(--uniland-brightness)",
    "var(--uniland-contrast)",
    "var(--uniland-grayscale)",
    "var(--uniland-hue-rotate)",
    "var(--uniland-invert)",
    "var(--uniland-saturate)",
    "var(--uniland-sepia)",
    "var(--uniland-drop-shadow)",
  ].join(" "),
}

export const backdropFilterTemplate = {
  backdropFilter: [
    "var(--uniland-backdrop-blur)",
    "var(--uniland-backdrop-brightness)",
    "var(--uniland-backdrop-contrast)",
    "var(--uniland-backdrop-grayscale)",
    "var(--uniland-backdrop-hue-rotate)",
    "var(--uniland-backdrop-invert)",
    "var(--uniland-backdrop-opacity)",
    "var(--uniland-backdrop-saturate)",
    "var(--uniland-backdrop-sepia)",
  ].join(" "),
  "--uniland-backdrop-blur": "var(--uniland-empty,/*!*/ /*!*/)",
  "--uniland-backdrop-brightness": "var(--uniland-empty,/*!*/ /*!*/)",
  "--uniland-backdrop-contrast": "var(--uniland-empty,/*!*/ /*!*/)",
  "--uniland-backdrop-grayscale": "var(--uniland-empty,/*!*/ /*!*/)",
  "--uniland-backdrop-hue-rotate": "var(--uniland-empty,/*!*/ /*!*/)",
  "--uniland-backdrop-invert": "var(--uniland-empty,/*!*/ /*!*/)",
  "--uniland-backdrop-opacity": "var(--uniland-empty,/*!*/ /*!*/)",
  "--uniland-backdrop-saturate": "var(--uniland-empty,/*!*/ /*!*/)",
  "--uniland-backdrop-sepia": "var(--uniland-empty,/*!*/ /*!*/)",
}

export function getRingTemplate(value: any) {
  return {
    "--uniland-ring-offset-shadow": `var(--uniland-ring-inset) 0 0 0 var(--uniland-ring-offset-width) var(--uniland-ring-offset-color)`,
    "--uniland-ring-shadow": `var(--uniland-ring-inset) 0 0 0 calc(var(--uniland-ring-width) + var(--uniland-ring-offset-width)) var(--uniland-ring-color)`,
    "--uniland-ring-width": value,
    boxShadow: [
      `var(--uniland-ring-offset-shadow)`,
      `var(--uniland-ring-shadow)`,
      `var(--uniland-shadow, 0 0 #0000)`,
    ].join(", "),
  }
}

export const flexDirectionTemplate = {
  "row-reverse": {
    space: "--uniland-space-x-reverse",
    divide: "--uniland-divide-x-reverse",
  },
  "column-reverse": {
    space: "--uniland-space-y-reverse",
    divide: "--uniland-divide-y-reverse",
  },
}

const owlSelector = "& > :not(style) ~ :not(style)"

export const spaceXTemplate = {
  [owlSelector]: {
    marginInlineStart:
      "calc(var(--uniland-space-x) * calc(1 - var(--uniland-space-x-reverse)))",
    marginInlineEnd:
      "calc(var(--uniland-space-x) * var(--uniland-space-x-reverse))",
  },
}

export const spaceYTemplate = {
  [owlSelector]: {
    marginTop:
      "calc(var(--uniland-space-y) * calc(1 - var(--uniland-space-y-reverse)))",
    marginBottom:
      "calc(var(--uniland-space-y) * var(--uniland-space-y-reverse))",
  },
}

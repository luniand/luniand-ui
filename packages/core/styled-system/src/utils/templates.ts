/**
 * The CSS transform order following the upcoming spec from CSSWG
 * translate => rotate => scale => skew
 * @see https://drafts.csswg.org/css-transforms-2/#ctm
 * @see https://www.stefanjudis.com/blog/order-in-css-transformation-transform-functions-vs-individual-transforms/
 */
const transformTemplate = [
  "rotate(var(--luniand-rotate, 0))",
  "scaleX(var(--luniand-scale-x, 1))",
  "scaleY(var(--luniand-scale-y, 1))",
  "skewX(var(--luniand-skew-x, 0))",
  "skewY(var(--luniand-skew-y, 0))",
];

export function getTransformTemplate() {
  return [
    "translateX(var(--luniand-translate-x, 0))",
    "translateY(var(--luniand-translate-y, 0))",
    ...transformTemplate,
  ].join(" ");
}

export function getTransformGpuTemplate() {
  return [
    "translate3d(var(--luniand-translate-x, 0), var(--luniand-translate-y, 0), 0)",
    ...transformTemplate,
  ].join(" ");
}

export const filterTemplate = {
  "--luniand-blur": "var(--luniand-empty,/*!*/ /*!*/)",
  "--luniand-brightness": "var(--luniand-empty,/*!*/ /*!*/)",
  "--luniand-contrast": "var(--luniand-empty,/*!*/ /*!*/)",
  "--luniand-grayscale": "var(--luniand-empty,/*!*/ /*!*/)",
  "--luniand-hue-rotate": "var(--luniand-empty,/*!*/ /*!*/)",
  "--luniand-invert": "var(--luniand-empty,/*!*/ /*!*/)",
  "--luniand-saturate": "var(--luniand-empty,/*!*/ /*!*/)",
  "--luniand-sepia": "var(--luniand-empty,/*!*/ /*!*/)",
  "--luniand-drop-shadow": "var(--luniand-empty,/*!*/ /*!*/)",
  filter: [
    "var(--luniand-blur)",
    "var(--luniand-brightness)",
    "var(--luniand-contrast)",
    "var(--luniand-grayscale)",
    "var(--luniand-hue-rotate)",
    "var(--luniand-invert)",
    "var(--luniand-saturate)",
    "var(--luniand-sepia)",
    "var(--luniand-drop-shadow)",
  ].join(" "),
};

export const backdropFilterTemplate = {
  backdropFilter: [
    "var(--luniand-backdrop-blur)",
    "var(--luniand-backdrop-brightness)",
    "var(--luniand-backdrop-contrast)",
    "var(--luniand-backdrop-grayscale)",
    "var(--luniand-backdrop-hue-rotate)",
    "var(--luniand-backdrop-invert)",
    "var(--luniand-backdrop-opacity)",
    "var(--luniand-backdrop-saturate)",
    "var(--luniand-backdrop-sepia)",
  ].join(" "),
  "--luniand-backdrop-blur": "var(--luniand-empty,/*!*/ /*!*/)",
  "--luniand-backdrop-brightness": "var(--luniand-empty,/*!*/ /*!*/)",
  "--luniand-backdrop-contrast": "var(--luniand-empty,/*!*/ /*!*/)",
  "--luniand-backdrop-grayscale": "var(--luniand-empty,/*!*/ /*!*/)",
  "--luniand-backdrop-hue-rotate": "var(--luniand-empty,/*!*/ /*!*/)",
  "--luniand-backdrop-invert": "var(--luniand-empty,/*!*/ /*!*/)",
  "--luniand-backdrop-opacity": "var(--luniand-empty,/*!*/ /*!*/)",
  "--luniand-backdrop-saturate": "var(--luniand-empty,/*!*/ /*!*/)",
  "--luniand-backdrop-sepia": "var(--luniand-empty,/*!*/ /*!*/)",
};

export function getRingTemplate(value: any) {
  return {
    "--luniand-ring-offset-shadow": `var(--luniand-ring-inset) 0 0 0 var(--luniand-ring-offset-width) var(--luniand-ring-offset-color)`,
    "--luniand-ring-shadow": `var(--luniand-ring-inset) 0 0 0 calc(var(--luniand-ring-width) + var(--luniand-ring-offset-width)) var(--luniand-ring-color)`,
    "--luniand-ring-width": value,
    boxShadow: [
      `var(--luniand-ring-offset-shadow)`,
      `var(--luniand-ring-shadow)`,
      `var(--luniand-shadow, 0 0 #0000)`,
    ].join(", "),
  };
}

export const flexDirectionTemplate = {
  "row-reverse": {
    space: "--luniand-space-x-reverse",
    divide: "--luniand-divide-x-reverse",
  },
  "column-reverse": {
    space: "--luniand-space-y-reverse",
    divide: "--luniand-divide-y-reverse",
  },
};

const owlSelector = "& > :not(style) ~ :not(style)";

export const spaceXTemplate = {
  [owlSelector]: {
    marginInlineStart:
      "calc(var(--luniand-space-x) * calc(1 - var(--luniand-space-x-reverse)))",
    marginInlineEnd:
      "calc(var(--luniand-space-x) * var(--luniand-space-x-reverse))",
  },
};

export const spaceYTemplate = {
  [owlSelector]: {
    marginTop:
      "calc(var(--luniand-space-y) * calc(1 - var(--luniand-space-y-reverse)))",
    marginBottom:
      "calc(var(--luniand-space-y) * var(--luniand-space-y-reverse))",
  },
};

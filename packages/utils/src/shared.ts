export const cx = (...classNames: any[]) =>
  classNames.filter(Boolean).join(" ");

type Booleanish = boolean | "true" | "false";
export const dataAttr = (condition: boolean | undefined) =>
  (condition ? "" : undefined) as Booleanish;

export const ariaAttr = (condition: boolean | undefined) =>
  condition ? true : undefined;

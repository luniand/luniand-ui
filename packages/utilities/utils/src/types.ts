import { ComputedRef, Ref, VNodeProps } from "@vue/runtime-core";
import { TemplateRef } from "./dom";

/**
 * Value may or may not be a `ref`.
 *
 * ```ts
 * type MaybeRef<T> = T | Ref<T>
 * ```
 */
export type MaybeRef<T> = T | Ref<T> | ComputedRef<T>;

/**
 * May be a simple ref (nor computed ref)
 */
export type MaybeBaseRef<T> = T | Ref<T>;

/** VNodeProps Object */
export interface MergedVNodeProps extends VNodeProps {
  ref: TemplateRef | ((el: TemplateRef | null) => void);
}

/**
 * Any function
 */
export type Fn = () => void;

export type Dict<T = any> = Record<string, T>;

export type UnionStringArray<T extends Readonly<string[]>> = T[number];

export type AnyFunction<T = any> = (...args: T[]) => any;

export type FunctionArguments<T extends Function> = T extends (
  ...args: infer R
) => any
  ? R
  : never;

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export const SNA = [Number, String, Array];
export const SAO = [String, Array, Object];
export const SNAO = [Number, String, Array, Object];

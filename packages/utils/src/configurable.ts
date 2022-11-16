export function canUseDOM(): boolean {
  return !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  )
}

export const defaultWindow = canUseDOM() ? window : null

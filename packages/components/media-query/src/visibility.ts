import { useMediaQuery } from "./use-media-query"
import { VNode } from 'vue'

interface LVisibilityProps {
	breakpoint: string
	hide?: boolean
}

/**
 * Visibility
 *
 * Vue component to control the visibility of its
 * children based on the current breakpoint
 */
export const LVisibility = (props: LVisibilityProps, { slots }: { slots: any }) => {
	const { breakpoint, hide } = props
	const [show] = useMediaQuery(breakpoint)
	const isVisible = hide ? !show : show

	const rendered = isVisible && slots ? slots : null
	return rendered as VNode[]
}
import {  h, defineComponent } from 'vue'
import {  useQuery } from './media-query'
import { LVisibility } from './visibility'

export interface LShowProps {
	/**
	 * A custom css media query that determines when the `children` are rendered.
	 * Will render `children` if that query resolves to `true`.
	 */
	breakpoint?: string
	/**
	 * A value from the `breakpoints` section in the theme. Will render `children`
	 * from that breakpoint and below. Default breakpoint values: `sm`, `md`, `lg`, `xl`, `2xl`.
	 */
	below?: string
	/**
	 * A value from the `breakpoints` section in the theme. Will render `children`
	 * from that breakpoint and above. Default breakpoint values: `sm`, `md`, `lg`, `xl`, `2xl`.
	 */
	above?: string
}

export const LShow = defineComponent({
	setup(props, { slots }) {
		const query = useQuery(props)
		return () => {
			return h(LVisibility, { breakpoint: query }, slots)
		}
	},
})
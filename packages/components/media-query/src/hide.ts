import {  h, defineComponent } from 'vue'
import {  useQuery } from './media-query'
import { LVisibility } from './visibility'

import { LShowProps } from './show'

export type LHideProps = LShowProps


export const LHide = defineComponent({
	setup(props, { slots }) {
		const query = useQuery(props)
		return () => {
			return h(LVisibility, { breakpoint: query, hide: true }, slots)
		}
	},
})
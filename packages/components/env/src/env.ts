import { computed, provide, ref, h } from 'vue'
import { isBrowser } from '@luniand-ui/utils'
import { ssrDocument } from './mock-document'
import { ssrWindow } from './mock-window'

interface Environment {
	window: Window
	document: Document
}

const mockEnv = {
	window: ssrWindow,
	document: ssrDocument,
}

const defaultEnv: Environment = isBrowser ? { window, document } : mockEnv

export function useEnvironment() {
	return defaultEnv
}

export interface EnvironmentProviderProps {
	environment?: Environment
}

/**
 * @todo refs this function to right way
 */

export function EnvironmentProvider(
	props: EnvironmentProviderProps,
	{ slots }: { slots: any }
) {
	const { environment: environmentProp } = props
	const node = ref<HTMLElement | null>(null)

	const context = computed(() => {
		const doc = node.value?.ownerDocument
		const win = node.value?.ownerDocument.defaultView
		const nodeEnv = doc ? { document: doc, window: win } : undefined
		const env = environmentProp ?? nodeEnv ?? defaultEnv
		return env as Environment
	})

	const showEnvGetter = !node.value && !environmentProp

	provide('EnvironmentContext', context.value)

	return [
		slots,
		showEnvGetter &&
			// @ts-ignore
			h('span', {
				ref: (el: HTMLElement) => {
					if (el) node.value = el
				},
			}),
	]
}
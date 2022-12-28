import { ref, watchEffect } from 'vue'
import { useEnvironment } from '@luniand-ui/env'
import { isBrowser } from '@luniand-ui/utils'

/**
 * Vue hook that tracks state of a CSS media query
 *
 * @param query the media query to match
 */
export function useMediaQuery(query: string | string[]): boolean[] {
	const env = useEnvironment()
	const queries = Array.isArray(query) ? query : [query]
	const isSupported = isBrowser && 'matchMedia' in env.window

	const defaultMatchesRef = queries.map((query) =>
		isSupported ? !!env.window.matchMedia(query).matches : false
	)

	const matchesRef = ref(defaultMatchesRef)

	// Specifying matches in the dependency list will cause the event listeners
	// to unload and then load each time the dependency changes. This causes
	// Media Query Events to be missed. The event listeners should only be unloaded
	// when the component unloads.
	watchEffect(() => {
		if (!isSupported) return undefined

		const mediaQueryList = queries.map((query) => env.window.matchMedia(query))

		const listenerList = mediaQueryList.map((_, index) => {
			const listener = (mqlEvent: MediaQueryListEvent) => {
				const queryIndex = mediaQueryList.findIndex(
					(mediaQuery) => mediaQuery.media === mqlEvent.media
				)

				// As the event listener is on the media query list, any time the
				// listener is called, we know there is a change. There's no need
				// to compare the previous matches with current. Using
				// setMatches(matches => {...}) provides access to the current matches
				// state.  Trying to access matches outside the setMatches function
				// would provide data from the the time of instantiation (stale).
				const newMatchesRef = () => {
					const currentMatches = matchesRef.value.map((x) => x)
					currentMatches[queryIndex] = mqlEvent.matches
					return currentMatches
				}
				matchesRef.value = newMatchesRef()
			}

			// Listening to the 'change' event on the Media Query List Object
			// is more performant as the callback is only invoked when a specified
			// media query is matched. Using addEventListener on the window object
			// to listen for the resize event will call the callback on every
			// viewport resize.
			if (typeof mediaQueryList[index].addEventListener === 'function') {
				mediaQueryList[index].addEventListener('change', listener)
			} else {
				mediaQueryList[index].addListener(listener)
			}

			return listener
		})

		return () => {
			mediaQueryList.forEach((_, index) => {
				if (typeof mediaQueryList[index].removeEventListener === 'function') {
					mediaQueryList[index].removeEventListener(
						'change',
						listenerList[index]
					)
				} else {
					mediaQueryList[index].removeListener(listenerList[index])
				}
			})
		}
	})

	return matchesRef.value
}
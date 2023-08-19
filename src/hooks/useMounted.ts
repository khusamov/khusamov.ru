import React from 'react'

/**
 * Необходим для рендеринга на стороне сервера, поскольку режим на сервере не определен.
 * @returns {boolean}
 */
export function useMounted(): [boolean] {
	const [mounted, setMounted] = React.useState(false)
	React.useEffect(() => setMounted(true), [])
	return [mounted]
}
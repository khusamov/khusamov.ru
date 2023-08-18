'use client'
import Button from '@mui/joy/Button'
import {useColorScheme} from '@mui/joy/styles'
import * as React from 'react'

/**
 * Внимание, без функции getInitColorSchemeScript() кнопка ModeToggle не работает.
 * @link https://mui.com/joy-ui/main-features/dark-mode-optimization/
 * @link https://mui.com/joy-ui/getting-started/tutorial/
 */
export function ModeToggle() {
	const {mode, setMode} = useColorScheme()
	const [mounted, setMounted] = React.useState(false)

	// Необходим для рендеринга на стороне сервера, поскольку режим на сервере не определен.
	React.useEffect(() => setMounted(true), [])

	if (!mounted) {
		return null
	}

	const onClick = () => {
		setMode(mode === 'light' ? 'dark' : 'light')
	}

	const caption = mode === 'light' ? 'Темнее' : 'Светлее'

	return (
		<Button variant="soft" onClick={onClick}>
			{caption}
		</Button>
	)
}
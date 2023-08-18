'use client'
import React from 'react'
import {IconButton} from '@mui/joy'
import {useColorScheme} from '@mui/joy/styles'
import {LightMode, DarkMode} from '@mui/icons-material'

/**
 * Внимание, без функции getInitColorSchemeScript() кнопка ModeToggle не работает.
 * @link https://mui.com/joy-ui/main-features/dark-mode-optimization/
 * @link https://mui.com/joy-ui/getting-started/tutorial/
 * @link https://mui.com/material-ui/material-icons/
 */
export function ModeToggle() {
	const {mode, setMode} = useColorScheme()
	const [mounted, setMounted] = React.useState(false)

	// Необходим для рендеринга на стороне сервера, поскольку режим на сервере не определен.
	React.useEffect(() => setMounted(true), [])

	if (!mounted) {
		return null
	}

	const onClick = () => setMode(mode === 'light' ? 'dark' : 'light')

	return (
		<IconButton variant="soft" onClick={onClick}>
			{mode === 'light' ? <DarkMode/> : <LightMode/>}
		</IconButton>
	)
}
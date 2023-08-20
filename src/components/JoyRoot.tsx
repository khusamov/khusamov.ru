'use client'
import React, {PropsWithChildren} from 'react'
import type {Mode} from '@mui/system/cssVars/useCurrentColorScheme'
import {CssBaseline, CssVarsProvider, extendTheme, getInitColorSchemeScript, StyledEngineProvider} from '@mui/joy'
import '@fontsource/inter'

const defaultMode: Mode = 'system'

/**
 * @link https://mui.com/joy-ui/customization/theme-colors/
 */
const theme = extendTheme({
	colorSchemes: {
		light: {
			palette: {
				background: {
					body: 'white'
				}
			}
		}
	}
})

export const JoyRoot = ({children}: PropsWithChildren) => {
	return (
		<CssVarsProvider theme={theme} defaultMode={defaultMode}>
			<CssBaseline/>
			{getInitColorSchemeScript({defaultMode})}
			{children}
		</CssVarsProvider>
	)
}
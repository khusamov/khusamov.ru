'use client'
import type {Mode} from '@mui/system/cssVars/useCurrentColorScheme'
import {PropsWithChildren} from 'react'
import {Box, CssBaseline, CssVarsProvider, getInitColorSchemeScript} from '@mui/joy'
import '@fontsource/inter'

const defaultMode: Mode = 'system'

export const JoyRoot = ({children}: PropsWithChildren) => {
	return (
		<CssVarsProvider defaultMode={defaultMode}>
			<CssBaseline/>
			{getInitColorSchemeScript({defaultMode})}
			{children}
		</CssVarsProvider>
	)
}
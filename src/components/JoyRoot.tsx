'use client'
import {defaultMode, theme} from '@/constants/theme'
import React, {PropsWithChildren} from 'react'
import {CssBaseline, CssVarsProvider, getInitColorSchemeScript} from '@mui/joy'
import '@fontsource/inter'

export const JoyRoot = ({children}: PropsWithChildren) => {
	return (
		<CssVarsProvider defaultMode={defaultMode} theme={theme}>
			<CssBaseline/>
			{getInitColorSchemeScript({defaultMode})}
			{children}
		</CssVarsProvider>
	)
}
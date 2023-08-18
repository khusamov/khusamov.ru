'use client'
import {ModeToggle} from '@/components/ModeToggle'
import {CssBaseline, CssVarsProvider, getInitColorSchemeScript} from '@mui/joy'
import React from 'react'
import type {Metadata} from 'next'
import '@/styles/rehype-prism-plus.css'
import 'prism-themes/themes/prism-one-light.css' // https://github.com/timlrx/rehype-prism-plus
import '@fontsource/inter'

export const metadata: Metadata = {
	title: 'khusamov.ru',
	description: 'Личный сайт веб-разработчика'
}

interface ILayoutProps {
	children: React.ReactNode
}

export default function Layout({children}: ILayoutProps) {
	return (
		<html lang='ru'>
			<body>
				<CssVarsProvider defaultMode='system'>
					<CssBaseline/>
					<ModeToggle/>
					{getInitColorSchemeScript()}
					{children}
				</CssVarsProvider>
			</body>
		</html>
	)
}

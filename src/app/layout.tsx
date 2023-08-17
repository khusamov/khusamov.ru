import type {Metadata} from 'next'
import 'prism-themes/themes/prism-one-light.css' // https://github.com/timlrx/rehype-prism-plus
import '@/styles/rehype-prism-plus.css'
import React from 'react'

export const metadata: Metadata = {
	title: 'khusamov.ru',
	description: 'Личный сайт веб-разработчика'
}

interface ILayoutProps {
	children: React.ReactNode
}

export default function Layout({children}: ILayoutProps) {
	return (
		<html lang="ru">
			<body>
				{children}
			</body>
		</html>
	)
}

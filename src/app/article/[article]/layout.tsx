import React from 'react'
import Link from 'next/link'

interface ILayoutProps {
	children: React.ReactNode
}

export default function Layout({children}: ILayoutProps) {
	return (
		<article>
			<Link href='/'>Главная страница</Link>
			<hr/>
			{children}
		</article>
	)
}
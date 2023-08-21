import {JoyRoot} from '@/components/JoyRoot'
import {INavigationItem} from '@/components/navigation/INavigationItem'
import {Navigation} from '@/components/navigation/Navigation'
import React, {PropsWithChildren} from 'react'
import type {Metadata} from 'next'
import {allPosts, siteConfig} from 'contentlayer/generated'
import '@/styles/globals.css'
import '@/styles/rehype-pretty-code.css' // https://rehype-pretty-code.netlify.app/

const navigationItems: INavigationItem[] = (
	allPosts
		.filter(post => post.isSection && post.level === 0)
		.map(
			post => ({
				title: post.title,
				url: post.url
			})
		)
)

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: siteConfig.title,
		description: siteConfig.description
	}
}

export default async function({children}: PropsWithChildren) {
	return (
		<html lang='ru'>
			<body>
				<JoyRoot>
					<Navigation items={navigationItems}/>
					{children}
				</JoyRoot>
			</body>
		</html>
	)
}

import {JoyRoot} from '@/components/JoyRoot'
import {INavigationItem} from '@/components/navigation/INavigationItem'
import {Navigation} from '@/components/navigation/Navigation'
import {PostIndex} from '@/components/navigation/post-index/PostIndex'
import React, {PropsWithChildren} from 'react'
import type {Metadata} from 'next'
import {allPosts, siteConfig} from 'contentlayer/generated'
import '@/styles/globals.css'
import '@/styles/rehype-pretty-code.css' // https://rehype-pretty-code.netlify.app/

// console.log(allPosts.map(post => ({
// 	url: post.url,
// 	title: post.title,
// 	isSection: post.isSection,
// 	level: post.level,
// 	flattenedPath: post._raw.flattenedPath
// })))

const navigationItems: INavigationItem[] = (
	allPosts
		.filter(post => post.isSection && post.level === 1)
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

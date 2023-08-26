import {JoyRoot} from '@/components/JoyRoot'
import {INavigationItem} from '@/components/navigation/INavigationItem'
import {Navigation} from '@/components/navigation/Navigation'
import {getWelcomePost} from '@/functions/getWelcomePost'
import {Box} from '@mui/joy'
import React, {PropsWithChildren} from 'react'
import type {Metadata} from 'next'
import {allPosts, Post} from 'contentlayer/generated'
import '@/styles/globals.scss'
import '@/styles/rehype-pretty-code.css' // https://rehype-pretty-code.netlify.app/

const welcomePost: Post = getWelcomePost()

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: welcomePost.title,
		description: welcomePost.description ?? null
	}
}

function postToNavigationItemMap(post: Post): INavigationItem {
	return {
		title: post.title,
		url: post.url
	}
}

const navigationItems: INavigationItem[] = (
	allPosts
		.filter(post => post.isIndex && post.level === 2)
		.map(postToNavigationItemMap)
)

export default async function({children}: PropsWithChildren) {
	return (
		<html lang='ru'>
			<body>
				<JoyRoot>
					<Box sx={{display: 'flex', flexFlow: 'column', height: '100%'}}>
						<Navigation items={navigationItems}/>
						<Box sx={{flex: 1, overflow: 'auto'}}>
							{children}
						</Box>
					</Box>
				</JoyRoot>
			</body>
		</html>
	)
}

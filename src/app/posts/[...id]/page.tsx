import {Typography} from '@mui/joy'
import {allPosts} from 'contentlayer/generated'
import type {Metadata} from 'next'
import {useMDXComponent} from 'next-contentlayer/hooks'
import {Fragment} from 'react'

const prefixSection = 'posts'

function getPost(id: string[]) {
	const post = allPosts.find(post => post.url === `/${prefixSection}/` + id.join('/'))
	if (!post) {
		throw new Error(`Не найден пост ${id.join('/')}`)
	}
	return post
}

export interface IPageProps {
	params: {
		id: string[]
	}
}

export function generateMetadata({params: {id}}: IPageProps): Metadata {
	const post = getPost(id)
	return {
		title: post.title,
		description: post.description ?? null
	}
}

export function generateStaticParams(): Array<IPageProps['params']> {
	return (
		allPosts.map(
			post => ({
				id: post.url.split('/').filter(item => item !== prefixSection)
			})
		)
	)
}

export default function({params: {id}}: IPageProps) {
	const post = getPost(id)
	const Post = useMDXComponent(post.body.code)
	return (
		<Fragment>
			<Typography level='h1' color='primary'>{post.title}</Typography>
			<Post/>
		</Fragment>
	)
}
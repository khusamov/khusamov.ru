import {allPosts} from 'contentlayer/generated'
import type {Metadata} from 'next'
import {useMDXComponent} from 'next-contentlayer/hooks'

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

export async function generateMetadata({params: {id}}: IPageProps): Promise<Metadata> {
	const post = getPost(id)
	return {
		title: post.title,
		description: post.description ?? null
	}
}

export async function generateStaticParams(): Promise<Array<IPageProps['params']>> {
	return (
		allPosts.map(post => ({
			id: post.url.split('/').filter(item => item !== prefixSection)
		}))
	)
}

export default function Page({params: {id}}: IPageProps) {
	const post = getPost(id)
	const Post = useMDXComponent(post.body.code)
	return <Post/>
}
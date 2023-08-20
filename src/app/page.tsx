import {useMDXComponent} from 'next-contentlayer/hooks'
import {allPosts, Post} from 'contentlayer/generated'

export default async function() {
	const rootPost = allPosts.find(post => post.url === '/articles/_index')
	return (
		<main>
			{rootPost && <PostComponent post={rootPost}/>}
		</main>
	)
}

function PostComponent({post}: {post: Post}) {
	const Post = useMDXComponent(post.body.code)
	return <Post/>
}
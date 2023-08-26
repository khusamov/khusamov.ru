import {Picture} from '@/components/Picture'
import {getWelcomePost} from '@/functions/getWelcomePost'
import {useMDXComponent} from 'next-contentlayer/hooks'
import {Post} from 'contentlayer/generated'

const welcomePost: Post = getWelcomePost()

function PostComponent({post}: {post: Post}) {
	const Post = useMDXComponent(post.body.code)
	return <Post components={{Picture: Picture}}/>
}

export default async function() {
	return (
		<main>
			<PostComponent post={welcomePost}/>
		</main>
	)
}
import {Picture} from '@/components/Picture'
import {useMDXComponent} from 'next-contentlayer/hooks'
import {welcomePost, WelcomePost} from 'contentlayer/generated'

export default async function() {
	return (
		<main>
			<PostComponent post={welcomePost}/>
		</main>
	)
}

function PostComponent({post}: {post: WelcomePost}) {
	const Post = useMDXComponent(post.body.code)
	return <Post components={{Picture: Picture}}/>
}
import {allPosts, Post} from 'contentlayer/generated'

export function getWelcomePost(): Post {
	const welcomePost = allPosts.find(post => post.url === '/welcome')
	if (!welcomePost) {
		throw new Error('Не найден файл content/welcome.mdx')
	}
	return welcomePost
}
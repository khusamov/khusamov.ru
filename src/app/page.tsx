import {getArticleInfoList} from '@/functions/getArticleInfoList'
import Link from 'next/link'

export default async function Page() {
	const articleInfoList = await getArticleInfoList()
	return (
		<main>
			{articleInfoList.map(({article, id}, index) => (
				<div key={index}>
					<Link href={`/article/${id}`}>
						{article.meta.title}
					</Link>
				</div>
			))}
		</main>
	)
}

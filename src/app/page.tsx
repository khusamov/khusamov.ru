'use client'
import {useArticleContext} from '@/context/ArticleContext'
import {getArticleInfoList} from '@/functions/getArticleInfoList'
import Link from 'next/link'

export default function Page() {
	// const articleInfoList = await getArticleInfoList()
	const articleInfoList = useArticleContext()
	return (
		<main>
			{articleInfoList.map(({meta, id}, index) => (
				<div key={index}>
					<Link href={`/articles/${id}`}>
						{meta.title as string}
					</Link>
				</div>
			))}
		</main>
	)
}

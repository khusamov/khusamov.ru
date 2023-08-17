import {getArticleInfoList} from '@/functions/getArticleInfoList'
import {importArticle} from '@/functions/importArticle'
import dynamic from 'next/dynamic'
import type {Metadata} from 'next'

interface IPageProps {
	params: {
		article: string
	}
}

export async function generateMetadata({params: {article}}: IPageProps): Promise<Metadata> {
	const articleInfo = await importArticle(article)
	return {
		title: articleInfo.meta.title
	}
}

export default function Page({params: {article}}: IPageProps) {
	const Article = dynamic(() => importArticle(article))
	return <Article/>
}

export async function generateStaticParams(): Promise<Array<IPageProps['params']>> {
	const articleInfoList = await getArticleInfoList()
	return articleInfoList.map(({id}) => ({
		article: id
	}))
}
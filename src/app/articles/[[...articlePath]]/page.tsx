import {getArticleInfoList} from '@/functions/getArticleInfoList'
import {importArticle} from '@/functions/importArticle'
import type {Metadata} from 'next'
import dynamic from 'next/dynamic'

export interface IPageProps {
	params: {
		articlePath?: string[]
	}
}

export async function generateMetadata({params: {articlePath = ['_index']}}: IPageProps): Promise<Metadata> {
	const {meta} = await importArticle(articlePath.join('/'))
	return meta
}

export async function generateStaticParams(): Promise<Array<IPageProps['params']>> {
	const articleInfoList = await getArticleInfoList()
	return articleInfoList.map(({id}) => ({
		articlePath: [id]
	}))
}

export default function Page({params: {articlePath = ['_index']}}: IPageProps) {
	const Article = dynamic(() => importArticle(articlePath.join('/')))
	return <Article/>
}
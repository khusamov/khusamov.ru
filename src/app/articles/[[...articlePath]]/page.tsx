import {getArticleInfo} from '@/functions/getArticleInfo'
import {importArticle} from '@/functions/importArticle'
import {IArticleInfo} from '@/interfaces/IArticleInfo'
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
	const rootArticleInfo = await getArticleInfo()

	function extract(articleInfo: IArticleInfo): string[] {
		return [articleInfo.articlePath, ...articleInfo.children.flatMap(item => extract(item))]
	}

	const staticParams: Array<IPageProps['params']> = extract(rootArticleInfo).map(articlePath => ({
		articlePath: articlePath.split('/')
	}))

	staticParams.push({})
	return staticParams
}

export default function Page({params: {articlePath = ['_index']}}: IPageProps) {
	const Article = dynamic(() => importArticle(articlePath.join('/')))
	return <Article/>
}
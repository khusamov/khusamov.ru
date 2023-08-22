import {getArticleInfo} from '@/functions/getArticleInfo'
import {importArticle} from '@/functions/importArticle'
import {IArticleInfo} from '@/interfaces/IArticleInfo'
import type {Metadata} from 'next'
import dynamic from 'next/dynamic'

export interface IPageProps {
	params: {
		id?: string[]
	}
}

// export async function generateMetadata({params: {id = ['_index']}}: IPageProps): Promise<Metadata> {
// 	const {meta} = await importArticle(id.join('/'))
// 	return meta
// }

// export async function generateStaticParams(): Promise<Array<IPageProps['params']>> {
// 	const rootArticleInfo = await getArticleInfo()
//
// 	function extract(articleInfo: IArticleInfo): string[] {
// 		return [articleInfo.articlePath, ...articleInfo.children.flatMap(item => extract(item))]
// 	}
//
// 	const staticParams: Array<IPageProps['params']> = extract(rootArticleInfo).map(articlePath => ({
// 		id: articlePath.split('/')
// 	}))
//
// 	staticParams.push({})
// 	return staticParams
// }

// export default function Page({params: {id = ['_index']}}: IPageProps) {
// 	//const Article = dynamic(() => importArticle(id.join('/')))
// 	return null
// }

export default function Page() {
	//const Article = dynamic(() => importArticle(id.join('/')))
	return null
}
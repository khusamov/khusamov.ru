import {IArticleMeta} from '@/interfaces/IArticleMeta'

export interface IArticleInfo {
	articlePath: string
	meta: IArticleMeta
	children: IArticleInfo[]
}
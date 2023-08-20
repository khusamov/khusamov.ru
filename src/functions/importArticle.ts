import {join} from 'path'
import {ComponentType} from 'react'
import {IArticleMeta} from '@/interfaces/IArticleMeta'

export async function importArticle(id: string): Promise<ComponentType & {meta: IArticleMeta, default: ComponentType}> {
	return import(`data/articles/${id}.mdx`)
}

export const articleListDirectory = join(process.cwd(), 'data/articles')
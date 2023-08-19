import {IArticleMeta} from '@/interfaces/IArticleMeta'
import {join} from 'path'
import {ComponentType} from 'react'

export async function importArticle(id: string): Promise<ComponentType & {meta: IArticleMeta}> {
	return import(`data/articles/${id}.mdx`)
}

export const articleListDirectory = join(process.cwd(), 'data/articles')
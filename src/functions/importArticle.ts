import {join} from 'path'

export async function importArticle(id: string) {
	return import(`data/articles/${id}.mdx`)
}

export const articleListDirectory = join(process.cwd(), 'data/articles')
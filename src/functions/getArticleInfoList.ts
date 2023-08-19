import {readdir} from 'fs/promises'
import {basename, extname} from 'path'
import {IArticleInfo} from '@/interfaces/IArticleInfo'
import {isMardownFilename} from '@/functions/isMardownFilename'
import {articleListDirectory, importArticle} from '@/functions/importArticle'

export async function getArticleInfoList(): Promise<IArticleInfo[]> {
	const fileList = await readdir(articleListDirectory)
	const mardownList = fileList.filter(isMardownFilename)

	return Promise.all(
		mardownList.map(
			async (filename): Promise<IArticleInfo> => {
				const id = basename(filename, extname(filename))
				const {meta} = await importArticle(id)
				return {id, meta}
			}
		)
	)
}
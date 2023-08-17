import {articleListDirectory, importArticle} from '@/functions/importArticle'
import {isMardownFilename} from '@/functions/isMardownFilename'
import {readdir} from 'fs/promises'
import {basename, extname} from 'path'

export async function getArticleInfoList() {
	const fileList = await readdir(articleListDirectory)
	const mardownList = fileList.filter(isMardownFilename)

	return Promise.all(
		mardownList.map(
			async (filename) => {
				const id = basename(filename, extname(filename))
				return {
					id,
					article: await importArticle(id)
				}
			}
		)
	)
}
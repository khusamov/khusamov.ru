import {readdir, } from 'fs/promises'
import {Dirent} from 'fs'
import {basename, extname, join} from 'path'
import {IArticleInfo} from '@/interfaces/IArticleInfo'
import {isMardownFilename} from '@/functions/isMardownFilename'
import {articleListDirectory, importArticle} from '@/functions/importArticle'

const getArticleMeta = async (articlePath: string) => (await importArticle(articlePath)).meta

const isMarkdownOrDirectory = (dirent: Dirent) => isMardownFilename(dirent.name) || dirent.isDirectory()

const isNotIndex = (dirent: Dirent) => !dirent.name.startsWith('_index')

export async function getArticleInfo(dirname: string = articleListDirectory, rootDirname: string = articleListDirectory): Promise<IArticleInfo> {
	const content = (
		(await readdir(dirname, {withFileTypes: true}))
			.filter(isMarkdownOrDirectory)
			.filter(isNotIndex)
	)
	const prefix = dirname.replace(rootDirname, '')
	const createArticlePath = (name: string) => normalizeArticlePath(join(prefix, name))
	const articlePath = createArticlePath('_index')
	return {
		articlePath,
		meta: await getArticleMeta(articlePath),
		children: (
			await Promise.all(
				content.map(
					async (dirent): Promise<IArticleInfo> => {
						if (dirent.isDirectory()) {
							return await getArticleInfo(join(dirent.path, dirent.name), rootDirname)
						} else {
							const articlePath = createArticlePath(basename(dirent.name, extname(dirent.name)))
							return {
								articlePath,
								meta: await getArticleMeta(articlePath),
								children: []
							}
						}
					}
				)
			)
		)
	}
}

function normalizeArticlePath(articlePath: string) {
	return (
		articlePath
			.replaceAll('\\', '/') // Все слеши должны быть '/'.
			.replace(/^\//, '') // Удалить начальный слеш.
	)
}
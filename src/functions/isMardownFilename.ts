import {extname} from 'path'

export const isMardownFilename = (filename: string): boolean => {
	return ['.md', '.mdx'].includes(extname(filename).toLowerCase())
}
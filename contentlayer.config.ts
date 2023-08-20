import {MDXOptions} from '@contentlayer/core'
import {defineDocumentType, makeSource} from 'contentlayer/source-files'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkMdxImages from 'remark-mdx-images'

export const SiteConfig = defineDocumentType(
	() => (
		{
			name: 'SiteConfig',
			filePathPattern: `site.yaml`,
			isSingleton: true,
			fields: {
				title: {
					type: 'string',
					required: true
				},
				description: {
					type: 'string',
					required: true
				}
			}
		}
	)
)

export const Post = defineDocumentType(
	() => (
		{
			name: 'Post',
			filePathPattern: `articles/**/*.mdx`,
			contentType: 'mdx',
			fields: {
				title: {
					type: 'string',
					required: false
				}
			},
			computedFields: {
				url: {
					type: 'string',
					resolve: (post) => `/${post._raw.flattenedPath}`
				}
			}
		}
	)
)

/**
 * @link https://www.contentlayer.dev/docs/sources/files/mdx
 */
const mdx: MDXOptions = {
	rehypePlugins: [
		[
			// https://rehype-pretty-code.netlify.app/
			// https://github.com/atomiks/rehype-pretty-code
			rehypePrettyCode,
			{
				keepBackground: false,
				theme: {
					// https://unpkg.com/browse/shiki@0.14.2/themes/
					dark: 'github-dark',
					light: 'github-light'
				}
			}
		]
	],
	remarkPlugins: [
		remarkMdxImages
	],

	/**
	 * Встраивание изображений в contentlayer не реализовано. Обсуждение см. на странице https://github.com/contentlayerdev/contentlayer/issues/11
	 * Сейчас изображения встраиваются в страницу (опция dataurl). Но можно сохранять и в файл (опция file).
	 * @link https://github.com/kentcdodds/mdx-bundler#image-bundling
	 * @param options
	 * @returns {any}
	 */
	esbuildOptions: options => {
		// Set the `outdir` to a public location for this bundle.
		// options.outdir = '/users/you/site/public/img/about' // Не ясно относительно чего указывать путь.
		options.loader = {
			...options.loader,
			'.jpg': 'dataurl'
		}
		return options
	}
}

// https://www.contentlayer.dev/docs/reference/source-files/make-source
export default makeSource(
	{
		mdx,
		contentDirPath: 'data2',
		documentTypes: [Post, SiteConfig]
	}
)
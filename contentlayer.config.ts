import {MDXOptions} from '@contentlayer/core'
import {defineDocumentType, makeSource, FieldDefs} from 'contentlayer/source-files'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkMdxImages from 'remark-mdx-images'

const indexRouteSegment = '_index'

const postFields: FieldDefs = {
	priority: {
		type: 'number',
		required: true,
		default: 0
	},
	title: {
		type: 'string',
		required: true
	}
}

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

export const WelcomePost = defineDocumentType(
	() => (
		{
			name: 'WelcomePost',
			filePathPattern: `welcome.mdx`,
			contentType: 'mdx',
			isSingleton: true,
			fields: postFields
		}
	)
)

export const Post = defineDocumentType(
	() => (
		{
			name: 'Post',
			filePathPattern: `posts/**/*.mdx`,
			contentType: 'mdx',
			fields: postFields,
			computedFields: {
				url: {
					type: 'string',
					resolve: post => `/${post._raw.flattenedPath.replace(`/${indexRouteSegment}`, '')}`
				},
				level: {
					type: 'number',
					resolve: post => post._raw.flattenedPath.replace(`/${indexRouteSegment}`, '').split('/').length - 1
				},
				isSection: {
					type: 'boolean',
					resolve: post => post._raw.sourceFileName.startsWith(indexRouteSegment)
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
		contentDirPath: 'content',
		documentTypes: [SiteConfig, WelcomePost, Post]
	}
)
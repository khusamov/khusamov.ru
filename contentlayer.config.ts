import {defineDocumentType, makeSource} from 'contentlayer/source-files'
import rehypePrettyCode from 'rehype-pretty-code'

export const Post = defineDocumentType(
	() => (
		{
			name: 'Post',
			filePathPattern: `articles/**/*.mdx`,
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

// https://www.contentlayer.dev/docs/reference/source-files/make-source
export default makeSource(
	{
		contentDirPath: 'data2',
		documentTypes: [Post, SiteConfig],

		// https://www.contentlayer.dev/docs/sources/files/mdx
		mdx: {
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
		}
	}
)
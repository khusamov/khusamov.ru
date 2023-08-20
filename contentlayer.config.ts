import {defineDocumentType, makeSource} from 'contentlayer/source-files'

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

export default makeSource(
	{
		contentDirPath: 'data',
		documentTypes: [Post]
	}
)
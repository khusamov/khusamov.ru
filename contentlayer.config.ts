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
					resolve: (post) => `/data/articles/${post._raw.flattenedPath}`
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
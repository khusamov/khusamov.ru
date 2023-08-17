// @ts-check

import nextMdx from '@next/mdx'
// import rehypePrettyCode from 'rehype-pretty-code'
// import rehypeHighlight from 'rehype-highlight'
// import typescript from 'highlight.js/lib/languages/typescript.js'
// import rehypePrism from '@mapbox/rehype-prism'
import rehypePrism from 'rehype-prism-plus'

/**
 * @link https://nextjs.org/docs/pages/building-your-application/configuring/mdx
 */
const withMDX = nextMdx({
	extension: /\.(md|mdx)$/,
	options: {
		// https://nextjs.org/docs/app/building-your-application/configuring/mdx#remark-and-rehype-plugins
		rehypePlugins: [
			// // https://rehype-pretty-code.netlify.app/
			// // https://github.com/atomiks/rehype-pretty-code
			// [
			// 	rehypePrettyCode,
			// 	{
			// 		// https://unpkg.com/browse/shiki@0.14.2/themes/
			// 		theme: 'github-light',
			// 		keepBackground: false,
			// 		showLineNumbers: true,
			// 		tab: 2
			// 	}
			// ],
			// [rehypeHighlight, {
			// 	aliases: {typescript: 'tsx'},
			// 	languages: {typescript}
			// }]
			[
				// https://github.com/timlrx/rehype-prism-plus
				rehypePrism,
				{
					showLineNumbers: true
				}
			]
		]
	}
})


/** @type {import('next').NextConfig} */
const nextConfig = {
	// pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
	experimental: {
		appDir: true,
		//mdxRs: false // В настоящее время mdxRs не поддерживает плагины rehypePlugins. https://github.com/vercel/next.js/issues/46659
	},
	output: 'export',
	distDir: 'build',
}

export default withMDX(nextConfig)
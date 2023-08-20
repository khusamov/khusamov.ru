// @ts-check

import nextMdx from '@next/mdx'
import {withContentlayer}  from 'next-contentlayer'
import rehypePrettyCode from 'rehype-pretty-code'
// import rehypeHighlight from 'rehype-highlight'
// import typescript from 'highlight.js/lib/languages/typescript.js'
// import rehypePrism from '@mapbox/rehype-prism'
// import rehypePrism from 'rehype-prism-plus'

/**
 * Pipe Operator (|>) for JavaScript
 * @link https://habr.com/ru/companies/timeweb/articles/713768/
 * @param fns
 * @returns {*}
 */
const pipe = (...fns) =>
	fns.reduce(
		(prevFn, nextFn) =>
			(...args) =>
				nextFn(prevFn(...args))
	)

/**
 * @link https://nextjs.org/docs/pages/building-your-application/configuring/mdx
 */
const withMDX = nextMdx({
	extension: /\.(md|mdx)$/,
	options: {
		//providerImportSource: '@mdx-js/react', // TypeError: createContext only works in Client Components. Add the "use client" directive at the top of the file to use it.
		// https://nextjs.org/docs/app/building-your-application/configuring/mdx#remark-and-rehype-plugins
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
			],
			// [rehypeHighlight, {
			// 	aliases: {typescript: 'tsx'},
			// 	languages: {typescript}
			// }]
			// [
			// 	// https://github.com/timlrx/rehype-prism-plus
			// 	rehypePrism,
			// 	{
			// 		showLineNumbers: true
			// 	}
			// ]
		]
	}
})

const withPipe = pipe(withContentlayer, withMDX)

/** @type {import('next').NextConfig} */
const nextConfig = {
	// pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
	experimental: {
		appDir: true,
		//mdxRs: false // В настоящее время mdxRs не поддерживает плагины rehypePlugins. https://github.com/vercel/next.js/issues/46659
	},
	output: 'export',
}

export default withPipe(nextConfig)
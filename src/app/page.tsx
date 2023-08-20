import {importArticle} from '@/functions/importArticle'

export default async function Page() {
	const Article = (await importArticle('_index')).default
	return (
		<main>
			<Article/>
		</main>
	)
}
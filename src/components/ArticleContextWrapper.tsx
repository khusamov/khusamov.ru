'use client'
import {ArticleProvider} from '@/context/ArticleContext'
import {IArticleInfo} from '@/interfaces/IArticleInfo'
import {PropsWithChildren} from 'react'

interface IArticleContextWrapperProps extends PropsWithChildren {
	articleInfoList: IArticleInfo[]
}

export const ArticleContextWrapper = ({children, articleInfoList}: IArticleContextWrapperProps) => (
	<ArticleProvider value={articleInfoList}>
		{children}
	</ArticleProvider>
)
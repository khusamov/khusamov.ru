import {createContext, useContext} from 'react'
import {IArticleInfo} from '@/interfaces/IArticleInfo'

export const ArticleContext = createContext<IArticleInfo[]>([])

export const ArticleProvider = ArticleContext.Provider

export const useArticleContext = () => useContext(ArticleContext)
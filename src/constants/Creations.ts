import {Creation} from 'interfaces/Creation'
import {Urls} from 'constants/Urls'
import {Paths} from 'constants/Paths'

export const creations : ReadonlyArray<Creation> = [
    {
        href : Paths.PROBLEMS, 
        title: "problems", 
        body : "競技プログラミングの作問リスト。"
    },
    {
        href : Paths.COMPRO_CATEGORY, 
        title: "compro-category", 
        body : "競技プログラミングの問題カテゴライズ。"
    },
    {
        href : Urls.COMPRO_LIBRARY, 
        title: "compro-library", 
        body : "競技プログラミングのライブラリ。"
    },
    {
        href : Urls.WORKS, 
        title: "works", 
        body : "描いた漫画一覧。大学時代に漫研で活動していました。"
    },
    {
        href : Paths.ARTICLES, 
        title: "articles", 
        body : "技術記事。主に競プロかwebの話。"
    },
    {
        href : Paths.BLOGS, 
        title: "blogs", 
        body : "趣味ブログ。主に漫画かアニメか私事の話。"
    }
]

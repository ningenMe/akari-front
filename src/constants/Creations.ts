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
        href : Urls.COMPRO_LIBRARY, 
        title: "compro-library", 
        body : "競技プログラミングのライブラリ。"
    },
    {
        href : Paths.DIARIES, 
        title: "今日のITドカタ", 
        body : "殴り書きに近めのブログ。主に業務のwebの話。"
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
    },
    {
        href : Urls.WORKS, 
        title: "works", 
        body : "描いた漫画一覧。大学時代に漫研で活動していました。"
    },
    {
        href : Paths.SYSTEMS, 
        title: "システム構成図", 
        body : "趣味開発システム構成図"
    }
]

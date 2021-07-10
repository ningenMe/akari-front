import Creation from 'interfaces/Creation'
import Urls from 'constants/Urls'
import Paths from 'constants/Paths'

export default class Creations {
    static readonly PROBLEMS : Creation = {
        href : Paths.PROBLEMS, 
        title: "problems", 
        body : "競技プログラミングの作問リスト"
    }
    static readonly COMPRO_CATEGORY : Creation = {
        href : Paths.COMPRO_CATEGORY, 
        title: "compro-category", 
        body : "競技プログラミングの問題カテゴライズ"
    }
    static readonly COMPRO_LIBRARY : Creation = {
        href : Urls.COMPRO_LIBRARY, 
        title: "compro-library", 
        body : "競技プログラミングのライブラリ"
    }
    static readonly WORKS : Creation = {
        href : Urls.WORKS, 
        title: "works", 
        body : "描いた漫画一覧。大学時代に漫研で活動していました。"
    }
    static readonly ARTICLES : Creation = {
        href : Paths.ARTICLES, 
        title: "articles", 
        body : "技術記事。主に競プロかwebの話。"
    }
    static readonly BLOGS : Creation = {
        href : Paths.BLOGS, 
        title: "blogs", 
        body : "趣味ブログ。主に漫画かアニメか私事の話。"
    }
}
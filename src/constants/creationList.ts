import { Creation } from 'interfaces/Creation'
import { UrlConst } from 'constants/UrlConst'
import { PathConst } from 'constants/PathConst'

export const CREATION_LIST: ReadonlyArray<Creation> = [
  {
    href: PathConst.PROBLEMS,
    title: 'problems',
    body: '競技プログラミングの作問リスト。',
  },
  {
    href: UrlConst.COMPRO_LIBRARY,
    title: 'compro-library',
    body: '競技プログラミングのライブラリ。',
  },
  {
    href: PathConst.BLOGS,
    title: 'blogs',
    body: 'ブログ。webか競プロか漫画かアニメか私事の話。',
  },
  // {
  //   href: PathConst.DIARIES,
  //   title: '今日のITドカタ',
  //   body: '殴り書きに近めのブログ。主に業務のwebの話。',
  // },
  // {
  //   href: UrlConst.WORKS,
  //   title: 'works',
  //   body: '描いた漫画一覧。大学時代に漫研で活動していました。',
  // },
  // {
  //   href: PathConst.SYSTEMS,
  //   title: 'システム構成図',
  //   body: '趣味開発システム構成図',
  // },
] as const

import { Creation } from 'interfaces/Creation'
import { PathConst, UrlConst } from './Const'

export const CREATION_LIST: ReadonlyArray<Creation> = [
  {
    href: PathConst.TASK,
    title: 'task',
    body: '競技プログラミングの作問リスト。',
    isDone: true
  },
  {
    href: UrlConst.COMPRO_LIBRARY,
    title: 'compro-library',
    body: '競技プログラミングのライブラリ。',
    isDone: true
  },
  {
    href: PathConst.CONTRIBUTION,
    title: 'contribution',
    body: '日々のgithubのcontribution。',
    isDone: true
  },
  {
    href: PathConst.COMPRO_CATEGORY,
    title: 'compro-category',
    body: '開発中...',
    isDone: true
  },
  // {
  //   href: PathConst.BLOG,
  //   title: 'blog',
  //   body: 'ブログ。webか競プロか漫画かアニメか私事の話。',
  //   isDone: false
  // },
  // {
  //   href: UrlConst.WORK,
  //   title: 'work',
  //   body: '描いた漫画一覧。大学時代に漫研で活動していました。',
  //   isDone: false
  // },
  {
    href: PathConst.SYSTEM,
    title: 'system',
    body: 'システム管理ページ。',
    isDone: true
  },
  // {
  //   href: PathConst.DIARIES,
  //   title: '今日のITドカタ',
  //   body: '殴り書きに近めのブログ。主に業務のwebの話。',
  // },
  // {
  //   href: PathConst.SYSTEMS,
  //   title: 'システム構成図',
  //   body: '趣味開発システム構成図',
  // },
] as const

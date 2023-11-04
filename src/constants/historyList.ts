import { History } from 'interfaces/History'
import { HistoryContent } from 'interfaces/HistoryContent'

const LINE_CONTENT_LIST: ReadonlyArray<HistoryContent> = [
  { body: 'バックエンド開発', href: null },
] as const

const YAHOO_CONTENT_LIST: ReadonlyArray<HistoryContent> = [
  { body: 'ヤフーショッピング バックエンド開発', href: null },
] as const

const OU_CONTENT_LIST: ReadonlyArray<HistoryContent> = [
  {
    body: 'J. Phys. D: Appl. Phys. 53, 094001(2019)',
    href: 'https://iopscience.iop.org/article/10.1088/1361-6463/ab5a27/meta',
  },
  {
    body: 'Jpn.J.Appl.Phys. 58, 070901(2019)',
    href: 'https://iopscience.iop.org/article/10.7567/1347-4065/ab2406/meta',
  },
  {
    body: 'Phys.Rev.Appl. 10, 034063(2018)',
    href: 'https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.10.034063',
  },
] as const

export const HISTORY_LIST: ReadonlyArray<History> = [
  { yearFrom: '2023', yearTo: '20xx', body: 'LINEヤフー Software Engineer', contentList: LINE_CONTENT_LIST },
  { yearFrom: '2021', yearTo: '2023', body: 'LINE Software Engineer', contentList: LINE_CONTENT_LIST },
  { yearFrom: '2019', yearTo: '2021', body: 'Yahoo! Japan Software Engineer', contentList: YAHOO_CONTENT_LIST },
  { yearFrom: '2017', yearTo: '2019', body: '大阪大学大学院　基礎工学研究科', contentList: OU_CONTENT_LIST },
  { yearFrom: '2013', yearTo: '2017', body: '大阪大学　基礎工学部', contentList: [] },
] as const

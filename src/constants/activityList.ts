import { Activity } from 'interfaces/Activity'
import { UrlConst } from './Const'

export const ACTIVITY_LIST: ReadonlyArray<Activity> = [
  {
    year: 2022,
    body: 'LINE KYOTO Meetup「出前館 マイクロサービスにおける加盟店管理画面のBFFアーキテクチャ」',
    href: UrlConst.LINE_KYOTO_MEETUP_20221027,
  },
  {
    year: 2021,
    body: '応用情報技術者試験合格',
    href: null,
  },
  {
    year: 2021,
    body: 'Google Code jam Round2 進出',
    href: null,
  },
  {
    year: 2020,
    body: 'OUPC2020 writer/tester',
    href: UrlConst.OUPC_2020,
  },
  {
    year: 2020,
    body: 'Google Code jam Round2 進出',
    href: null,
  },
  {
    year: 2019,
    body: '第一回アルゴリズム実技検定　エキスパート取得',
    href: null,
  },
  {
    year: 2019,
    body: 'yukicoder contest 229 writer',
    href: UrlConst.YUKICODER_NINGENME,
  },
  {
    year: 2019,
    body: '大阪大学基礎工学研究科専攻賞受賞',
    href: null,
  },
  {
    year: 2019,
    body: '全国統一プログラミング王本戦出場',
    href: null,
  },
  {
    year: 2018,
    body: '基本情報技術者試験合格',
    href: null,
  },
  {
    year: 2018,
    body: '春季応用物理学会英語講演奨励賞受賞',
    href: null,
  },
] as const

import { Link } from 'interfaces/Link'
import { Urls } from 'constants/Urls'
import { Paths } from 'constants/Paths'

export class Links {
  static readonly NINGENME_NET: Link = { href: Urls.NINGENME_NET, name: 'ningenMe.net' }
  static readonly BETA_NINGENME_NET: Link = { href: Urls.BETA_NINGENME_NET, name: 'ningenMe.net' }
  static readonly GITHUB: Link = { href: Urls.GITHUB, name: 'GitHub' }
  static readonly TWITTER: Link = { href: Urls.TWITTER, name: '@ningenMe' }
  static readonly ATCODER: Link = { href: Urls.ATCODER, name: 'AtCoder' }
  static readonly CODEFORCES: Link = { href: Urls.CODEFORCES, name: 'Codeforces' }
  static readonly YUKICODER: Link = { href: Urls.YUKICODER, name: 'yukicoder' }
  static readonly CSACADEMY: Link = { href: Urls.CSACADEMY, name: 'CSAcademy' }
  static readonly HATENA: Link = { href: Urls.HATENA, name: 'Hatena' }
  static readonly AMEBA: Link = { href: Urls.AMEBA, name: 'Ameba' }
  static readonly QIITA: Link = { href: Urls.QIITA, name: 'Qiita' }
  static readonly DIARIES: Link = { href: Paths.DIARIES, name: '今日のITドカタ' }
  static readonly COMPROS: ReadonlyArray<Link> = [Links.ATCODER, Links.CODEFORCES, Links.YUKICODER, Links.CSACADEMY]
  static readonly BLOGS: ReadonlyArray<Link> = [Links.HATENA, Links.AMEBA, Links.QIITA, Links.DIARIES]
}

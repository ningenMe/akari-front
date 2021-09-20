import { Link } from 'interfaces/Link'
import { PathConst } from 'constants/PathConst'
import { UrlConst } from 'constants/UrlConst'

export class LinkConst {
  static readonly NINGENME_NET: Link = { href: UrlConst.NINGENME_NET, name: 'ningenMe.net' }
  static readonly GITHUB: Link = { href: UrlConst.GITHUB, name: 'GitHub' }
  static readonly TWITTER: Link = { href: UrlConst.TWITTER, name: '@ningenMe' }
  static readonly ATCODER: Link = { href: UrlConst.ATCODER, name: 'AtCoder' }
  static readonly CODEFORCES: Link = { href: UrlConst.CODEFORCES, name: 'Codeforces' }
  static readonly YUKICODER: Link = { href: UrlConst.YUKICODER, name: 'yukicoder' }
  static readonly CSACADEMY: Link = { href: UrlConst.CSACADEMY, name: 'CSAcademy' }
  static readonly HATENA: Link = { href: UrlConst.HATENA, name: 'Hatena' }
  static readonly AMEBA: Link = { href: UrlConst.AMEBA, name: 'Ameba' }
  static readonly QIITA: Link = { href: UrlConst.QIITA, name: 'Qiita' }
  static readonly DIARIES: Link = { href: PathConst.DIARIES, name: '今日のITドカタ' }
  static readonly COMPROS: ReadonlyArray<Link> = [LinkConst.ATCODER, LinkConst.CODEFORCES, LinkConst.YUKICODER, LinkConst.CSACADEMY] as const
  static readonly BLOGS: ReadonlyArray<Link> = [LinkConst.HATENA, LinkConst.AMEBA, LinkConst.QIITA, LinkConst.DIARIES] as const
}

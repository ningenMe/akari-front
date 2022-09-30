import { Link } from '../interfaces/Link'

//TODO privateにする
export class PathConst {
  static readonly HOME: string = '/home'
  static readonly TASK: string = '/task'
  static readonly BLOG: string = '/blogs'
  static readonly BLOGS_GRAPHS: string = '/blogs/graphs'
  static readonly DIARIES: string = '/diaries'
  static readonly CONTRIBUTION: string = '/contribution'
  static readonly SYSTEM: string = '/system'
}

//TODO privateにする
export class HostConst {
  static readonly NINGENME_NET: string = 'ningenme.net'
  static readonly NINA_API: string = 'nina-api.ningenme.net'
  static readonly NINA_ENVOY_API: string = 'nina-envoy-api.ningenme.net'
  static readonly ZEUS_API: string = 'zeus-api.ningenme.net'
}

export class UrlConst {
  static readonly NINGENME_NET: string = 'https://' + HostConst.NINGENME_NET
  static readonly NINA_API: string = 'https://' + HostConst.NINA_API
  static readonly NINA_ENVOY_API: string = 'https://' + HostConst.NINA_ENVOY_API
  static readonly ZEUS_API: string = 'https://' + HostConst.ZEUS_API
  static readonly GITHUB: string = 'https://github.com/ningenMe'
  static readonly TWITTER: string = 'https://twitter.com/ningenMe'
  static readonly ATCODER: string = 'https://atcoder.jp/users/ningenMe'
  static readonly CODEFORCES: string = 'https://codeforces.com/profile/ningenMe'
  static readonly YUKICODER: string = 'https://yukicoder.me/users/4145'
  static readonly TOKI: string = 'https://tlx.toki.id/profiles/ningenMe'
  static readonly CSACADEMY: string = 'https://csacademy.com/user/ningenMe'
  static readonly HATENA: string = 'https://ningenme.hatenablog.com/archive'
  static readonly AMEBA: string = 'https://profile.ameba.jp/ameba/ningenme'
  static readonly QIITA: string = 'https://qiita.com/ningenMe'
  static readonly ZENN: string = 'https://zenn.dev/ningenme'
  static readonly COMPRO_LIBRARY: string = 'https://ningenme.github.io/compro-library'
  static readonly WORK: string = 'https://indies.mangabox.me/amp/author/10633/'
  static readonly OUPC_2020: string = 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#OUPC2020/info'
  static readonly YUKICODER_NINGENME: string = 'https://yukicoder.me/contests/241'
}

export class LinkConst {
  static readonly NINGENME_NET: Link = { href: UrlConst.NINGENME_NET, name: 'ningenMe.net' }
  static readonly GITHUB: Link = { href: UrlConst.GITHUB, name: 'GitHub' }
  static readonly TWITTER: Link = { href: UrlConst.TWITTER, name: '@ningenMe' }
  static readonly ATCODER: Link = { href: UrlConst.ATCODER, name: 'AtCoder' }
  static readonly CODEFORCES: Link = { href: UrlConst.CODEFORCES, name: 'Codeforces' }
  static readonly YUKICODER: Link = { href: UrlConst.YUKICODER, name: 'yukicoder' }
  static readonly TOKI: Link = { href: UrlConst.TOKI, name: 'toki' }
  static readonly CSACADEMY: Link = { href: UrlConst.CSACADEMY, name: 'CSAcademy' }
  static readonly HATENA: Link = { href: UrlConst.HATENA, name: 'Hatena' }
  static readonly AMEBA: Link = { href: UrlConst.AMEBA, name: 'Ameba' }
  static readonly QIITA: Link = { href: UrlConst.QIITA, name: 'Qiita' }
  static readonly ZENN: Link = { href: UrlConst.ZENN, name: 'Zenn'}
  static readonly DIARIES: Link = { href: PathConst.DIARIES, name: '今日のITドカタ' }
  static readonly BLOGS_GRAPHS: Link = { href: PathConst.BLOGS_GRAPHS, name: 'blogの投稿数グラフ'}
  static readonly COMPROS: ReadonlyArray<Link> = [LinkConst.ATCODER, LinkConst.CODEFORCES, LinkConst.YUKICODER, LinkConst.TOKI, LinkConst.CSACADEMY] as const
  static readonly BLOGS: ReadonlyArray<Link> = [LinkConst.HATENA, LinkConst.AMEBA, LinkConst.QIITA, LinkConst.DIARIES, LinkConst.ZENN] as const
}

export class ImageConst {
  static readonly NINGENME_NET: string = 'https://static.ningenme.net/net-front/ningenme.png'
  static readonly DOKATA: string = 'https://static.ningenme.net/net-front/dokata.png'
}
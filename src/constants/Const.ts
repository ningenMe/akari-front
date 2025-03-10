import { Link } from '../interfaces/Link'

export class PathConst {
  static readonly HOME: string = '/home'
  static readonly TASK: string = '/task'
  static readonly BLOG: string = '/blog'
  static readonly DIARIES: string = '/diaries'
  static readonly CONTRIBUTION: string = '/contribution'
  static readonly COMPRO_CATEGORY: string = '/compro-category'
  static readonly COMPRO_CATEGORY_CATEGORY_LIST: string = PathConst.COMPRO_CATEGORY + '/category'
  static readonly COMPRO_CATEGORY_CATEGORY_MANAGE: string = PathConst.COMPRO_CATEGORY + '/category/manage'
  static readonly COMPRO_CATEGORY_CATEGORY_TOPIC_LIST = (categorySystemName: string): string => {
    return PathConst.COMPRO_CATEGORY_CATEGORY_LIST + '/' + categorySystemName + '/topic'
  }
  private static readonly COMPRO_CATEGORY_PROBLEM: string = PathConst.COMPRO_CATEGORY + '/problem'
  static readonly COMPRO_CATEGORY_PROBLEM_LIST = (page: number): string => {
    return PathConst.COMPRO_CATEGORY_PROBLEM + '?page=' + page
  }
  static readonly COMPRO_CATEGORY_PROBLEM_CREATE: string = PathConst.COMPRO_CATEGORY_PROBLEM + '/create'
  static readonly COMPRO_CATEGORY_PROBLEM_EDIT = (problemId: string): string => {
    return PathConst.COMPRO_CATEGORY_PROBLEM + '/' + problemId + '/edit'
  }
  static readonly COMPRO_CATEGORY_TOPIC_LIST: string = PathConst.COMPRO_CATEGORY + '/topic'
  static readonly COMPRO_CATEGORY_TOPIC_CREATE: string = PathConst.COMPRO_CATEGORY_TOPIC_LIST + '/create'
  static readonly COMPRO_CATEGORY_TOPIC_PROBLEM = (topicId: string): string => {
    return PathConst.COMPRO_CATEGORY_TOPIC_LIST + '/' + topicId + '/problem'
  }
  static readonly COMPRO_CATEGORY_TOPIC_EDIT = (topicId: string): string => {
    return PathConst.COMPRO_CATEGORY_TOPIC_LIST + '/' + topicId + '/edit'
  }
  static readonly BOOKMARK: string = '/bookmark'
  static readonly USER_LOGIN: string = '/user/login'
  static readonly SYSTEM: string = '/system'
}

class HostConst {
  static readonly NINGENME_NET: string = 'ningenme.net'
  static readonly NINA_API: string = 'nina-api.ningenme.net'
  static readonly KIWA_API: string = 'kiwa-api.ningenme.net'
  static readonly MIIKO_API: string = 'miiko-api.ningenme.net'
  static readonly SUZU_API: string = 'suzu-api.ningenme.net'
  static readonly ROMAN_API: string = 'roman-api.ningenme.net'
}

export class UrlConst {
  static readonly NINGENME_NET: string = PathConst.HOME
  static readonly NINA_API: string = 'https://' + HostConst.NINA_API
  static readonly KIWA_API: string = 'https://' + HostConst.KIWA_API
  static readonly MIIKO_API: string = 'https://' + HostConst.MIIKO_API
  static readonly SUZU_API: string = 'https://' + HostConst.SUZU_API
  static readonly ROMAN_API: string = 'https://' + HostConst.ROMAN_API
  static readonly GITHUB: string = 'https://github.com/ningenMe'
  static readonly GITHUB_SPONSOR: string = 'https://github.com/sponsors/ningenMe'
  static readonly GITHUB_AKARI_FRONT: string = 'https://github.com/ningenMe/akari-front'
  static readonly GITHUB_MIIKO_API: string = 'https://github.com/ningenMe/miiko-api'
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
  static readonly SIZU: string = 'https://sizu.me/ningenme'
  static readonly COMPRO_LIBRARY: string = 'https://ningenme.github.io/compro-library'
  static readonly WORK: string = 'https://rookie.shonenjump.com/users/14728546961184143251'
  static readonly OUPC_2020: string = 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#OUPC2020/info'
  static readonly YUKICODER_NINGENME: string = 'https://yukicoder.me/contests/241'
  static readonly LINE_KYOTO_MEETUP_20221027: string = 'https://logmi.jp/tech/articles/328130'
  static readonly LINE_INTERNSHIP_2022: string = 'https://engineering.linecorp.com/ja/blog/internship-2022-hackathon-report'
  static readonly LINE_KYOTO_MEETUP_20230316: string = 'https://line.connpass.com/event/275745/'
  static readonly KYOTO_TECH_TALK_20230607: string = 'https://line.connpass.com/event/283505/'
  static readonly LINE_INTERNSHIP_2023: string = 'https://engineering.linecorp.com/ja/blog/2023-line-technical-internship-hackathon-course'
  static readonly FINDY_MODULAR_MONOLITH_20230912: string = 'https://findy.connpass.com/event/293748/'
  static readonly LY_TECHBLOG_20240611: string = 'https://techblog.lycorp.co.jp/ja/20240611a'
  static readonly LY_OPEN_HACK_U_NAGOYA_2025: string = 'https://hacku.connpass.com/event/339348/'
}

export class LinkConst {
  static readonly NINGENME_NET: Link = { href: UrlConst.NINGENME_NET, name: 'ningenMe.net' }
  static readonly COMPRO_LIBRARY: Link = { href: UrlConst.COMPRO_LIBRARY, name: 'compro-library' }
  static readonly GITHUB: Link = { href: UrlConst.GITHUB, name: 'GitHub' }
  static readonly GITHUB_SPONSOR: Link = { href: UrlConst.GITHUB_SPONSOR, name: 'Become a sponsor' }
  static readonly GITHUB_AKARI_FRONT: Link = { href: UrlConst.GITHUB_AKARI_FRONT, name: 'frontend' }
  static readonly GITHUB_MIIKO_API: Link = { href: UrlConst.GITHUB_MIIKO_API, name: 'backend' }
  static readonly TWITTER: Link = { href: UrlConst.TWITTER, name: '@ningenMe' }
  static readonly ATCODER: Link = { href: UrlConst.ATCODER, name: 'AtCoder' }
  static readonly CODEFORCES: Link = { href: UrlConst.CODEFORCES, name: 'Codeforces' }
  static readonly YUKICODER: Link = { href: UrlConst.YUKICODER, name: 'yukicoder' }
  static readonly TOKI: Link = { href: UrlConst.TOKI, name: 'toki' }
  static readonly CSACADEMY: Link = { href: UrlConst.CSACADEMY, name: 'CSAcademy' }
  static readonly HATENA: Link = { href: UrlConst.HATENA, name: 'HATENA' }
  static readonly AMEBA: Link = { href: UrlConst.AMEBA, name: 'AMEBA' }
  static readonly QIITA: Link = { href: UrlConst.QIITA, name: 'QIITA' }
  static readonly ZENN: Link = { href: UrlConst.ZENN, name: 'ZENN' }
  static readonly SIZU: Link = { href: UrlConst.SIZU, name: 'SIZU' }
  static readonly COMPRO_CATEGORY: Link = { href: PathConst.COMPRO_CATEGORY, name: 'compro-category' }
  static readonly COMPROS: ReadonlyArray<Link> = [LinkConst.ATCODER, LinkConst.CODEFORCES, LinkConst.YUKICODER, LinkConst.TOKI, LinkConst.CSACADEMY] as const
}

export class ImageConst {
  static readonly NINGENME_NET: string = 'https://static.ningenme.net/net-front/ningenme.png'
  static readonly DOKATA: string = 'https://static.ningenme.net/net-front/dokata.png'
}

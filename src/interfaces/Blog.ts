export class BlogTypeConst {
  static readonly HATENA: string = 'HATENA'
  static readonly AMEBA: string = 'AMEBA'
  static readonly QIITA: string = 'QIITA'
  static readonly DIARY: string = 'DIARY'
}

export type BlogType = typeof BlogTypeConst[keyof typeof BlogTypeConst]

export interface Blog {
  readonly url: string,
  readonly type: BlogType,
  readonly date: string,
  readonly title: string,
  readonly liked: number
}

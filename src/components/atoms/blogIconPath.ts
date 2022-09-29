import { BlogType, BlogTypeConst } from 'interfaces/Blog'

export const blogIconPath = (blogType: BlogType): string => {
  if (blogType === BlogTypeConst.HATENA) return 'hatena.svg'
  if (blogType === BlogTypeConst.QIITA) return 'qiita.png'
  if (blogType === BlogTypeConst.AMEBA) return 'ningenme.png'
  if (blogType === BlogTypeConst.DIARY) return 'dokata.png'
  return 'ningenme.png'
}

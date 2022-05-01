import { CustomCard } from './CustomCard'
import fontStyles from 'styles/Font.module.scss'

export const Profile = () => {
  return (
    <CustomCard>
      <h4>
        Furuta Taishi
      </h4>
      <p className={fontStyles.body}>
        競技プログラミングが好きです。
        現在はwebのバックエンド開発をしています。インフラもたまにやります。
        学生時代は物性物理と機械学習をしていました。
      </p>
    </CustomCard>
  )
}

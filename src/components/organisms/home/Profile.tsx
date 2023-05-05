import { CustomNormalCard } from '../CustomCard'
import fontStyles from 'styles/Font.module.scss'

export const Profile = (): JSX.Element => {
  return (
    <CustomNormalCard>
      <h4>
        Furuta Taishi
      </h4>
      <p className={fontStyles.body}>
        webのバックエンド開発やアーキテクトをしています。
        競技プログラミングが好きです。
        学生時代は物性物理と機械学習をしていました。
      </p>
    </CustomNormalCard>
  )
}

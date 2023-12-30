import { CustomNormalCard } from '../CustomCard'
import fontStyles from 'styles/Font.module.scss'

export const Profile = (): JSX.Element => {
  return (
    <CustomNormalCard>
      <h4>
        Furuta Taishi
      </h4>
      <p className={fontStyles.body}>
        web開発をしています。
        競技プログラミングとコードレビューが好きです。
      </p>
    </CustomNormalCard>
  )
}

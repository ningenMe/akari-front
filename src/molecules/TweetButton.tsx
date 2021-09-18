import { TwitterIcon, TwitterShareButton } from 'react-share'

export const TweetButton = ({ text, url }: {text: string, url: string}) => {
  return (
    <TwitterShareButton url={url} title={text}>
      <TwitterIcon size={50} round={true} />
    </TwitterShareButton>
  )
}

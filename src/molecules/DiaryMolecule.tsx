import ReactMarkdown from 'react-markdown'
import { TwitterIcon, TwitterShareButton } from 'react-share'

export const MarkdownList = ({ body }: { body: string }) => {
  const splitBodyList = body.split('<br/>')

  return (
    <>
      {splitBodyList.map((splitBody, index) => {
        return (
          <div key={index}>
            <ReactMarkdown>
              {splitBody}
            </ReactMarkdown>
            <br />
          </div>
        )
      })}
    </>
  )
}


export const TweetButton = ({ text, url }: { text: string, url: string }) => {
  return (
    <TwitterShareButton url={url} title={text}>
      <TwitterIcon size={50} round={true} />
    </TwitterShareButton>
  )
}

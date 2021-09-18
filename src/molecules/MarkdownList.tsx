import ReactMarkdown from 'react-markdown';

export const MarkdownList = ({body}:{body:string}) => {
  const splitBodyList=body.split("<br/>");

  return (
    <>
      {splitBodyList.map((splitBody,index)=>{
        return (
          <div key={index}>
            <ReactMarkdown>
              {splitBody}
            </ReactMarkdown>
            <br/>
          </div>
        );
      })}
    </>
  )
}

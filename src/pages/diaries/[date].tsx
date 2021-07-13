import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import {Container} from '@material-ui/core';
import fs from 'fs';


export async function getStaticPaths() {
    const paths : string[] = []
    return { paths , fallback: true }
}

export async function getStaticProps( {params} : {params:{date:string}} ) {
    const filePath = "public/markdown/" + params.date + ".md"

    let body = "# no contents";
    try {
        body = fs.readFileSync(filePath,{encoding: "utf8"});
    }
    catch {
        
    }
    return {
        props: {body}
    };
}
  
export const Diaries = ({body}:{body:string}) => {
    return (
        <Container>
            <ReactMarkdown>
                {body}
            </ReactMarkdown>
        </Container>
    )
}
export default Diaries;
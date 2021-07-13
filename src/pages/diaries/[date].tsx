import {Container,Grid} from '@material-ui/core';
import fs from 'fs';
import {DiaryBodyFrame} from 'organisms/DiaryBodyFrame'
import {DiaryTitleFrame} from 'organisms/DiaryTitleFrame'

export async function getServerSideProps({params}:{params:{date:string}}) {
    const date:string = params.date
    const filePath:string = "public/markdown/" + date + ".md"

    let body:string = "# no contents";
    try {
        body = fs.readFileSync(filePath,{encoding: "utf8"});
    }
    catch {
        
    }
    return {
        props: {body,date}
    };
}
  
export const Diaries = ({body,date}:{body:string,date:string}) => {
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={12}>
                    <DiaryTitleFrame date={date}/>
                </Grid>
                <Grid item xs={12}>
                    <DiaryBodyFrame body={body}/>
                </Grid>
                <Grid item xs={12}>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Diaries;
import {Container,Grid} from '@material-ui/core';
import fs from 'fs';
import {DiaryBodyFrame} from 'organisms/DiaryBodyFrame'
import {DiaryTitleFrame} from 'organisms/DiaryTitleFrame'

export async function getServerSideProps({params}:{params:{date:string}}) {
    let body:string = "# no contents";

    const date:string = params.date
    const matchList = date.match("^20[0-9]{2}-[0-9]{2}-[0-9]{1-2}$");

    if(matchList?.length === 1) {
        return {
            props: {body,date}
        };
    }

    const tmpList = date.split("-");
    const year:string = tmpList[0];
    const day :string = tmpList[1]+"-"+tmpList[2];

    const filePath:string = "public/markdown/" + year + "/" + day + ".md"    
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
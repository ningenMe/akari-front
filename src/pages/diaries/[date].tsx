import {Container,Grid} from '@material-ui/core';
import fs from 'fs';
import {DiaryBodyFrame} from 'organisms/DiaryBodyFrame'
import {DiaryTitleFrame} from 'organisms/DiaryTitleFrame'
import {DiaryPagingFrame} from 'organisms/DiaryPagingFrame'
import {getDiary} from 'repository/BlogRepository'
import {DiaryWithAround} from 'interfaces/Blog'

const getBody = (date:string):string => {
    let body:string = "# no contents";

    const matchList = date.match("^20[0-9]{2}-[0-9]{2}-[0-9]{1-2}$");

    if(matchList?.length === 1) {
        return body;
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
    return body;
}

export const getServerSideProps = async ({params}:{params:{date:string}}) => {

    const date:string = params.date;
    const body:string = getBody(date);
    const diary:DiaryWithAround = await getDiary(date);

    return {
        props: {body,date,diary}
    };
}
  
export const Diaries = ({body,date,diary}:{body:string,date:string,diary:DiaryWithAround}) => {
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={12}>
                    <DiaryTitleFrame/>
                </Grid>
                <Grid item xs={12}>
                    <DiaryPagingFrame date={date} diary={diary}/>
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
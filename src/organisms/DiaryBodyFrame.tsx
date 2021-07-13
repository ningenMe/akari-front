import {Card,CardContent} from '@material-ui/core';
import {mPlusFont} from 'styles/FontStyles'
import {MarkdownList} from 'molecules/MarkdownList'


export const DiaryBodyFrame = ({body}:{body:string}) => {
    return (
        <Card variant="outlined">
            <CardContent style={mPlusFont}>
                <MarkdownList body={body}/>
            </CardContent>
        </Card>
    )
}
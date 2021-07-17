import {useState} from 'react'
import {Grid} from '@material-ui/core';
import {DiaryWithAround} from 'interfaces/Blog'
import StarSharpIcon from '@material-ui/icons/StarSharp';
import IconButton from '@material-ui/core/IconButton';
import {putDiaryLiked} from 'repository/BlogRepository'
import {TweetButton} from 'molecules/TweetButton'
import {Links} from 'constants/Links'

export const DiaryFooterFrame = ({diary}:{diary:DiaryWithAround}) => {

    const [liked, setLiked] = useState<number>(diary.curr.liked);

    const incrementLiked = async () => {
        setLiked(liked + 1);
        putDiaryLiked(diary.curr.date);
    }
      
    return (
        <Grid container>
            <Grid item>
                <IconButton color="secondary" onClick={() => { incrementLiked() }}>
                    <StarSharpIcon/>
                    {liked}
                </IconButton>
            </Grid>
            {/* <Grid item xs={10}>
            </Grid> */}
            <Grid item>
                <TweetButton url={diary.curr.url} text={diary.curr.title + " - " + Links.DIARIES.name}/>
            </Grid>
        </Grid>
    )
}

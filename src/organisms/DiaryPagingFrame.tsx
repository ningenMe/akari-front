import {Card,Grid,Typography,Button} from '@material-ui/core';
import {otomanopeeOneFont,yomogiFont} from 'styles/FontStyles'
import {Blog,DiaryWithAround} from 'interfaces/Blog'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import IconButton from '@material-ui/core/IconButton';
import {Paths} from 'constants/Paths'

export const DiaryPagingFrame = ({diary}:{diary:DiaryWithAround}) => {

    const getUrl = (blog:Blog|null) => {
        if(blog == null) return "/";
        return blog.url;
    }

    return (
        <Grid container alignItems="center" justifyContent="center">
            <IconButton color="primary" href={getUrl(diary.prev)} disabled={diary.prev == null}>
                prev
                <ArrowLeftIcon fontSize="large"/>
            </IconButton>
            <Button variant="outlined" color="primary" size="large" href={Paths.DIARIES} >
                一覧
            </Button>
            <IconButton color="primary" href={getUrl(diary.next)} disabled={diary.next == null}>
                <ArrowRightIcon fontSize="large"/>
                next
            </IconButton>
        </Grid>
    )
}

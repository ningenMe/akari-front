import {Card,CardActionArea,CardContent,Typography,Grid,Box} from '@material-ui/core';
import {Blog} from 'interfaces/Blog'
import {CardStyle} from 'styles/CardStyle'
import {blogIconPath} from 'atoms/blogIconPath'

export const BlogCard = ({blog}: {blog:Blog}) => {
    return (
        <Card variant="outlined" style={CardStyle}>
            <CardActionArea href={blog.url} target="_blank">
                <CardContent>
                    <Grid container>
                        <Grid xs={3}>
                            <img src = {blogIconPath(blog.type)} width={80} height={80}/>
                        </Grid>
                        <Grid xs={9}>
                            <Typography variant="h6" align="center">
                                {blog.date}
                            </Typography>
                            <Typography variant="h5" align="center">
                                {blog.title}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
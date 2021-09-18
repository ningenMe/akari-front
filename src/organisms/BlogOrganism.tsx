import {Grid} from '@material-ui/core';
import {Blog} from 'interfaces/Blog'
import {BlogCard} from 'molecules/BlogMolecule'

export const BlogList = ({blogs} : {blogs:Blog[]}) => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={10}>
                <Grid container spacing={2}>
                    {blogs.map((blog) => 
                        <Grid item xs={12}>
                            <BlogCard blog = {blog} />
                        </Grid>
                    )}
                </Grid>
            </Grid>
            <Grid item xs={1}>
            </Grid>
        </Grid>
    );
}

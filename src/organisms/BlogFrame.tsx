import React from 'react';
import {Grid,Typography,Card,CardContent} from '@material-ui/core';
import Blog from 'interfaces/Blog'
import {BlogCard} from 'molecules/BlogCard'
import FrameTitle from 'atoms/FrameTitle'

export const BlogFrame = ({blogs,title} : {blogs:Blog[],title:string}) => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <FrameTitle body={title} />
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

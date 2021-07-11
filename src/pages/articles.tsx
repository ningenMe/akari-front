import React, {useState,useEffect} from 'react';
import {Container} from '@material-ui/core';
import {BlogType} from 'interfaces/BlogType'
import Blog from 'interfaces/Blog'
import {BlogFrame} from 'organisms/BlogFrame'
import {getBlog} from 'repository/BlogRepository'

export const getStaticProps = async () => {

    const blogTypes : BlogType[] = ["HATENA","QIITA"];
    const blogs : Blog[] = await getBlog(blogTypes);

    return {
        props: {blogs}
    };
}

export const Articles = ({blogs}:{blogs:Blog[]}) => {

    return (
        <Container>
            <BlogFrame blogs = {blogs} title="Articles"/>
        </Container>
    );
}

export default Articles
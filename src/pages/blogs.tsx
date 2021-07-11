import {Container} from '@material-ui/core';
import {BlogType} from 'interfaces/BlogType'
import {Blog} from 'interfaces/Blog'
import {BlogFrame} from 'organisms/BlogFrame'
import {getBlog} from 'repository/BlogRepository'

export const getStaticProps = async () => {

    const blogTypes : BlogType[] = ["AMEBA"];
    const blogs : Blog[] = await getBlog(blogTypes);

    return {
        props: {blogs}
    };
}

export const Blogs = ({blogs}:{blogs:Blog[]}) => {

    return (
        <Container>
            <BlogFrame blogs = {blogs} title="Blogs"/>
        </Container>
    );
}

export default Blogs
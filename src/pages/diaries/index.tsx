import {Container,Grid} from '@material-ui/core';
import {BlogType} from 'interfaces/BlogType'
import {Blog} from 'interfaces/Blog'
import {BlogFrame} from 'organisms/BlogFrame'
import {getBlog} from 'repository/BlogRepository'
import {Title} from 'organisms/DiaryOrganism'

export const getServerSideProps = async () => {

    const blogTypes : BlogType[] = ["DIARY"];
    const blogs : Blog[] = await getBlog(blogTypes);

    return {
        props: {blogs}
    };
}

export const Diaries = ({blogs}:{blogs:Blog[]}) => {
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={12}>
                    <Title date=""/>
                </Grid>
                <Grid item xs={12}>
                    <BlogFrame blogs = {blogs} title=""/>
                </Grid>
                <Grid item xs={12}>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Diaries
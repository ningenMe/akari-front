import {Container,Grid} from '@material-ui/core';
import {BlogType} from 'interfaces/Blog'
import {Blog} from 'interfaces/Blog'
import {BlogList} from 'organisms/BlogOrganism'
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
                    <BlogList blogs = {blogs} />
                </Grid>
                <Grid item xs={12}>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Diaries
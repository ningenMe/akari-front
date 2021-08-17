import {Grid, Container} from '@material-ui/core';
import {ProfileFrame} from 'organisms/ProfileFrame'
import {CreationFrame} from 'organisms/CreationFrame'
import {ActivityFrame} from 'organisms/ActivityFrame'
import {HistoryFrame} from 'organisms/HistoryFrame'
import {ApplicationMeta} from 'interfaces/ApplicationMeta'
import {getApplicationMeta} from 'repository/ApplicationMetaRepository'
import {LastUpdate} from 'molecules/LastUpdate'

export const getServerSideProps = async () => {

    const applicationMeta : ApplicationMeta = await getApplicationMeta("net-front");

    return {
        props: {applicationMeta}
    };
}

export const Home = ({applicationMeta}:{applicationMeta:ApplicationMeta}) => {
    return (
        <Container>
            <Grid container spacing = {4}>
                <Grid item xs={12}></Grid>
            </Grid>
            <LastUpdate applicationMeta = {applicationMeta} />
            <ProfileFrame/>
            <CreationFrame/>
            <ActivityFrame/>
            <HistoryFrame/>
        </Container>
    );
}
export default Home
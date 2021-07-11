import {Grid} from '@material-ui/core';
import {CreationCard} from 'molecules/CreationCard'
import {creations} from 'constants/Creations'
import {FrameTitle} from 'atoms/FrameTitle'

export const CreationFrame = () => {

    const cards = creations.map((creation) =>
        <Grid item xs={12} sm={4}>
            <CreationCard creation={creation} />
        </Grid>
    );

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <FrameTitle body="Creation" />
            </Grid>
            {cards}
        </Grid>
    );
}

import React from 'react';
import {Grid,Typography,Card,CardContent} from '@material-ui/core'

export const HistoryFrame = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h5" component="h2">
                    History
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="body2" component="p">
                            2019-2021 : Yahoo! Japan Software Engineer
                            2017-2019 : 大阪大学大学院　基礎工学研究科
                            2013-2017 : 大阪大学　基礎工学部
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
            </Grid>
        </Grid>
    );
}
export default HistoryFrame
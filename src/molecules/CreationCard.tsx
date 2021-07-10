import React from 'react';
import {Card,CardActionArea,CardContent,Typography} from '@material-ui/core';
import Creation from 'interfaces/Creation'

export const CreationCard = ({creation}: {creation:Creation}) => {
    return (
        <Card variant="outlined">
            <CardActionArea href={creation.href}>
                <CardContent>
                    <Typography variant="h6">
                        {creation.title}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {creation.body}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
export default CreationCard
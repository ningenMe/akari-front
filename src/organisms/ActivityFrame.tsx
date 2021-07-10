import React from 'react';
import {Grid,Typography,Card,CardContent} from '@material-ui/core';
import Activity from 'interfaces/Activity'

export const ActivityFrame = () => {

    const activities : ReadonlyArray<Activity> = [
        {
            year : 2020,
            body : "OUPC2020 writer/tester"
        },
        {
            year : 2020,
            body : "Google Code jam　Round2 進出"
        },
        {
            year : 2019,
            body : "第一回アルゴリズム実技検定　エキスパート取得"
        },
        {
            year : 2019,
            body : "yukicoder contest 229 writer"
        },
        {
            year : 2019,
            body : "大阪大学基礎工学研究科専攻賞受賞"
        },
        {
            year : 2019,
            body : "全国統一プログラミング王本戦出場"
        },
        {
            year : 2018,
            body : "基本情報技術者試験合格"
        },
        {
            year : 2018,
            body : "春季応用物理学会英語講演奨励賞受賞"
        },
    ]

    const contents = activities.map((activity) =>
        <Typography variant="body2" component="p">
            {activity.year + ": " + activity.body}
        </Typography>
    );


    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h5" component="h2">
                    Activitiy
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Card variant="outlined">
                    <CardContent>
                        {contents}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}
export default ActivityFrame
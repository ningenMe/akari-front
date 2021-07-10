import React from 'react';
import {Grid,Typography,Card,CardContent} from '@material-ui/core';
import Activity from 'interfaces/Activity'
import OptionalHref from 'atoms/OptionalHref'
import FrameTitle from 'atoms/FrameTitle'
import CardStyle from 'styles/CardStyle'

export const ActivityFrame = () => {

    const activities : ReadonlyArray<Activity> = [
        {
            year : 2021,
            body : "Google Code jam　Round2 進出",
            href : null
        },
        {
            year : 2020,
            body : "OUPC2020 writer/tester",
            href : "https://onlinejudge.u-aizu.ac.jp/beta/room.html#OUPC2020/info"
        },
        {
            year : 2020,
            body : "Google Code jam　Round2 進出",
            href : null
        },
        {
            year : 2019,
            body : "第一回アルゴリズム実技検定　エキスパート取得",
            href : null
        },
        {
            year : 2019,
            body : "yukicoder contest 229 writer",
            href : "https://yukicoder.me/contests/241"
        },
        {
            year : 2019,
            body : "大阪大学基礎工学研究科専攻賞受賞",
            href : null
        },
        {
            year : 2019,
            body : "全国統一プログラミング王本戦出場",
            href : null
        },
        {
            year : 2018,
            body : "基本情報技術者試験合格",
            href : null
        },
        {
            year : 2018,
            body : "春季応用物理学会英語講演奨励賞受賞",
            href : null
        },
    ]

    const contents = activities.map((activity) => 
        <Typography variant="body2" component="p" key={activity.body}>
            <OptionalHref body={activity.year + ": " + activity.body} href={activity.href}/>
        </Typography>    
    );

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <FrameTitle body="Activitiy" />
            </Grid>
            <Grid item xs={12}>
                <Card variant="outlined" style={CardStyle}>
                    <CardContent>
                        {contents}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}
export default ActivityFrame
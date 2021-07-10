import React from 'react';
import {Box, Container, Grid, Typography, Card, CardContent} from '@material-ui/core';
import Profile from 'organisms/Profile'
import CreationFrame from 'organisms/CreationFrame'

export const Home = () => {
    return (
        <Container>
            <Box m={1}>
                <Grid item xs={12}>
                </Grid>
                <Profile/>
                <CreationFrame/>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h5" component="h2">
                            Activitiy
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="body2" component="p">
                                    2020 : OUPC2020 writer/tester
                                    2020 : Google Code jam　Round2 進出
                                    2019 : 第一回アルゴリズム実技検定　エキスパート取得
                                    2019 : yukicoder contest 229 writer
                                    2019 : 大阪大学基礎工学研究科専攻賞受賞
                                    2019 : 全国統一プログラミング王本戦出場
                                    2018 : 基本情報技術者試験合格
                                    2018 : 春季応用物理学会英語講演奨励賞受賞
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
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
            </Box>
        </Container>
    );
}
export default Home
import React from 'react';
import {Box, Container, Grid, Typography, Card, CardActionArea, CardContent, CardHeader} from '@material-ui/core';
import Profile from 'organisms/Profile'

export const Home = () => {
    return (
        <Container>
            <Box m={1}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h5" component="h2">
                            Profile
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Card variant="outlined">
                            <CardActionArea href="https://google.com">
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        Furuta Taishi
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        競技プログラミングが好きです
                                        現在はwebエンジニアをしています。
                                        学生時代は物性物理と機械学習をしていました。
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5" component="h2">
                            Creation
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <CardActionArea href="/problems">
                                <CardContent>
                                    <Typography variant="h6">
                                        problems
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        競技プログラミングの作問リスト
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <CardActionArea href="/compro-category">
                                <CardContent>
                                    <Typography variant="h6">
                                        compro-category
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        競技プログラミングの問題カテゴライズ
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <CardActionArea href="https://ningenme.github.io/compro-library/">
                                <CardContent>
                                    <Typography variant="h6">
                                        compro-library
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        競技プログラミングのライブラリ。
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <CardActionArea href="https://indies.mangabox.me/amp/author/10633/">
                                <CardContent>
                                    <Typography variant="h6">
                                        works
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        描いた漫画一覧。大学時代に漫研で活動していました。
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <CardActionArea href="/article">
                                <CardContent>
                                    <Typography variant="h6">
                                        article
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        技術記事。主に競プロかwebの話。
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <CardActionArea href="/blog">
                                <CardContent>
                                    <Typography variant="h6">
                                        blog
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        趣味ブログ。主に漫画かアニメか私事の話。
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5" component="h2">
                            Activitiy
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Card variant="outlined">
                            <CardActionArea href="https://google.com">
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
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5" component="h2">
                            History
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Card variant="outlined">
                            <CardActionArea href="https://google.com">
                                <CardContent>
                                    <Typography variant="body2" component="p">
                                        2019-2021 : Yahoo! Japan Software Engineer
                                        2017-2019 : 大阪大学大学院　基礎工学研究科
                                        2013-2017 : 大阪大学　基礎工学部
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
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
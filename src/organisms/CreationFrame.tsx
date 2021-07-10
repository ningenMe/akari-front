import React from 'react';
import {Grid} from '@material-ui/core';
import CreationCard from 'molecules/CreationCard'
import Creation from 'interfaces/Creation'
import Urls from 'constants/Urls'
import Paths from 'constants/Paths'
import FrameTitle from 'atoms/FrameTitle'

export const CreationFrame = () => {

    const creations : ReadonlyArray<Creation> = [
        {
            href : Paths.PROBLEMS, 
            title: "problems", 
            body : "競技プログラミングの作問リスト"
        },
        {
            href : Paths.COMPRO_CATEGORY, 
            title: "compro-category", 
            body : "競技プログラミングの問題カテゴライズ"
        },
        {
            href : Urls.COMPRO_LIBRARY, 
            title: "compro-library", 
            body : "競技プログラミングのライブラリ"
        },
        {
            href : Urls.WORKS, 
            title: "works", 
            body : "描いた漫画一覧。大学時代に漫研で活動していました。"
        },
        {
            href : Paths.ARTICLES, 
            title: "articles", 
            body : "技術記事。主に競プロかwebの話。"
        },
        {
            href : Paths.BLOGS, 
            title: "blogs", 
            body : "趣味ブログ。主に漫画かアニメか私事の話。"
        }
    ]

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
export default CreationFrame
import { Checkbox, FormControlLabel, FormGroup, Grid, Link, Typography } from '@material-ui/core'
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import { Blog, BlogType, BlogTypeConst } from 'interfaces/Blog'
import React, { useEffect, useState } from 'react'
import { BlogCard } from 'molecules/BlogMolecule'
import { mPlusFont } from 'styles/FontStyles'
import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { BlogPostedCount } from '../interfaces/BlogPostedCount'
import { LinkConst } from '../constants/LinkConst'

export const BlogList = ({ blogList }: { blogList: Blog[] }) => {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {blogList
            .map((blog) =>
              <Grid item xs={12} key={blog.url}>
                <BlogCard blog={blog} />
              </Grid>,
            )
          }
        </Grid>
      </Grid>
    </Grid>
  )
}

export const BlogTypeFilterList = ({ blogList }: { blogList: Blog[] }) => {

  const [isAmeba, setIsAmeba] = useState<boolean>(true)
  const [isHatena, setIsHatena] = useState<boolean>(true)
  const [isQiita, setIsQiita] = useState<boolean>(true)
  const [isDiary, setIsDiary] = useState<boolean>(true)
  const [blogTypeList, setBlogTypeList] = useState<BlogType[]>([])
  const [filteredBlogList, setFilteredBlogList] = useState<Blog[]>(blogList)

  const switchAmeba = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAmeba(event.target.checked)
  }
  const switchHatena = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsHatena(event.target.checked)
  }
  const switchQiita = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsQiita(event.target.checked)
  }
  const switchDiary = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDiary(event.target.checked)
  }

  useEffect(() => {
    const list: BlogType[] = []
    if (isAmeba) {
      list.push(BlogTypeConst.AMEBA)
    }
    if (isHatena) {
      list.push(BlogTypeConst.HATENA)
    }
    if (isQiita) {
      list.push(BlogTypeConst.QIITA)
    }
    if (isDiary) {
      list.push(BlogTypeConst.DIARY)
    }
    setBlogTypeList(list)
  }, [isAmeba, isHatena, isQiita, isDiary])

  useEffect(
    () => setFilteredBlogList(blogList.filter((blog) => blogTypeList.includes(blog.type))),
    [blogTypeList],
  )

  const style = Object.assign({}, mPlusFont, { paddingTop: '5%', paddingBottom: '5%' })
  return (
    <>
      <Typography variant='h5' align='center' style={style}>
        くるの blog 一覧
      </Typography>
      <Typography align='right' variant='h6'>
        <Link href={LinkConst.BLOGS_GRAPHS.href}>
          {LinkConst.BLOGS_GRAPHS.name}
        </Link>
      </Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked onChange={switchAmeba} />}
                          label='Ameba「くるのブログ」：主に漫画・ゲームの感想' />
        <FormControlLabel control={<Checkbox defaultChecked onChange={switchHatena} />}
                          label='はてなブログ「くるの競プロ記録」：競技プログラミング関連' />
        <FormControlLabel control={<Checkbox defaultChecked onChange={switchQiita} />}
                          label='Qiita：web系の技術記事' />
        <FormControlLabel control={<Checkbox defaultChecked onChange={switchDiary} />}
                          label='自作ブログ「今日のITドカタ」：雑に書く技術系の話' />
      </FormGroup>
      <Typography align='right' variant='h6'>
        {filteredBlogList.length} / {blogList.length} articles
      </Typography>
      <BlogList
        blogList={filteredBlogList}
      />
    </>
  )
}

export const BlogPostedGraph = ({ blogPostedCountList }: { blogPostedCountList: BlogPostedCount[] }) => {
  Chart.register(CategoryScale)
  const data = {
    // x 軸のラベル
    labels: blogPostedCountList.map((blogPostedCount:BlogPostedCount) => blogPostedCount.month),
    datasets: [
      {
        label: 'blogの投稿数',
        // データの値
        data: blogPostedCountList.map((blogPostedCount:BlogPostedCount) => blogPostedCount.count),
        // グラフの背景色
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        // グラフの枠線の色
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
        ],
        // グラフの枠線の太さ
        borderWidth: 2,
      },
    ],
  };
  return (
    <Bar data={data} />
  );
}


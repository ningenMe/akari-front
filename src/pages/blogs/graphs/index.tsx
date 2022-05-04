import { Container } from '@material-ui/core'
import { CustomHtmlHead } from 'organisms/NingenmeNetTemplateOrganism'
import { ImageConst } from 'constants/ImageConst'
import { Footer } from '../../../components/organisms/Footer'
import { Header } from '../../../components/organisms/Header'

// export const getServerSideProps = async () => {
//
//   const blogPostedCountList: BlogPostedCount[] = await getBlogPostedCount()
//
//   return {
//     props: { blogPostedCountList },
//   }
// }

export const BlogsGraphs = () => {

  return (
    <>
      <CustomHtmlHead title='blogの投稿数グラフ' image={ImageConst.NINGENME_NET} />
      <Header />
      <Container>
        {/*<BlogPostedGraph blogPostedCountList={blogPostedCountList} />*/}
      </Container>
      <Footer />
    </>
  )
}

export default BlogsGraphs

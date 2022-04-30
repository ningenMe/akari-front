import { Container } from '@material-ui/core'
import { Footer, Header, CustomHtmlHead } from 'organisms/NingenmeNetTemplateOrganism'
import { ImageConst } from 'constants/ImageConst'

// export const getServerSideProps = async () => {
//
//   const blogTypeList: BlogType[] = [BlogTypeConst.AMEBA, BlogTypeConst.HATENA, BlogTypeConst.QIITA, BlogTypeConst.DIARY]
//   const blogList: Blog[] = await getBlog(blogTypeList)
//
//   return {
//     props: { blogList },
//   }
// }

export const Blogs = () => {

  return (
    <>
      <CustomHtmlHead title='くるの blog 一覧' image={ImageConst.NINGENME_NET} />
      <Header />
      <Container>
        {/*<BlogTypeFilterList blogList={blogList} />*/}
      </Container>
      <Footer />
    </>
  )
}

export default Blogs

import { HtmlHead } from 'components/organisms/HtmlHead'
import { Footer } from '../../components/organisms/Footer'
import { Header } from '../../components/organisms/Header'
import { Task } from '../../components/organisms/task/Task'

export const Index = () => {
  return (
    <>
      <HtmlHead title='task - ' />
      <Header />
      <Task />
      <Footer />
    </>
  )
}
export default Index

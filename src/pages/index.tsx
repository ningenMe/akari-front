import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { PathConst } from '../constants/Const'

export const Index: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace(PathConst.HOME)
  }, [])

  return null
}
export default Index

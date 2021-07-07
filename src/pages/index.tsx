import { NextPage } from 'next'
import { useRouter } from 'next/router'
import {useEffect} from "react";

export const Index: NextPage = () => {
    const router = useRouter()

    useEffect(() => {
        router.replace('/home') // ここでリダイレクト
    }, [])

    return null
}
export default Index;
import { Container } from '@mui/material'
import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { miikoApiMiikoServiceClient } from '../../../repository/MiikoApiRepository'
import { Category, CategoryGetResponse } from 'miiko-api/proto/gen_ts/v1/miiko_pb'

export const TopicList = ({categorySystemName} : {categorySystemName: string}) => {

  const [category, setCategory] = useState < Category | undefined>()

  const categoryGet = async () => {
    const categoryGetResponse = await miikoApiMiikoServiceClient.categoryGet({}) as CategoryGetResponse
    setCategory(categoryGetResponse.categoryList.find(it => it.categorySystemName===categorySystemName))
  }

  useEffect(() => {
    categoryGet()
  }, [])

  return (
    <Container>
      {/* TODO ここの説明文にcssを当てる */}
      <Typography variant='body2'>{category?.categoryDisplayName}</Typography>

    </Container>
  )
}

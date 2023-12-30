import { Container, FormControl, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styles from './CategoryManage.module.scss'
import { miikoApiMiikoServiceClient } from 'repository/MiikoApiRepository'
import {
  Category,
  CategoryListGetRequest,
  CategoryListGetResponse,
  CategoryPostRequest,
} from 'miiko-api/proto/gen_ts/v1/miiko_pb'
import { PageTextCard } from '../../atoms/compro-category/Card'
import { UpsertButton } from '../../atoms/compro-category/Button'
import { PathConst } from '../../../constants/Const'
import { useRouter } from 'next/router'

export const CategoryManage = (): JSX.Element => {

  const DUMMY_CATEGORY_ID = 'A new categoryId will be created automatically'
  const DUMMY_CATEGORY = new Category({ categoryId: DUMMY_CATEGORY_ID, categoryDisplayName: '新規作成' })
  const [categoryList, setCategoryList] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<Category>(DUMMY_CATEGORY)
  const [categoryId, setCategoryId] = useState<string>(DUMMY_CATEGORY_ID)
  const [categoryDisplayName, setCategoryDisplayName] = useState<string>('')
  const [categorySystemName, setCategorySystemName] = useState<string>('')
  const [categoryOrder, setCategoryOrder] = useState<number>(0)
  const router = useRouter()

  const setAllState = (category: Category) => {
    setSelectedCategory(category)
    setCategoryId(category.categoryId)
    setCategoryDisplayName(category.categoryDisplayName)
    setCategorySystemName(category.categorySystemName)
    setCategoryOrder(category.categoryOrder)
  }

  const categoryGet = async () => {
    const categoryListGetRequest = new CategoryListGetRequest({
      isRequiredTopic: false,
    })

    const categoryListGetResponse = await miikoApiMiikoServiceClient.categoryListGet(categoryListGetRequest) as CategoryListGetResponse
    setCategoryList(categoryListGetResponse.categoryList)
  }

  useEffect(() => {
    categoryGet()
  }, [])

  const upsertClick = async () => {
    const request = new CategoryPostRequest()
    {
      if (categoryId != DUMMY_CATEGORY_ID) {
        request.categoryId = categoryId
      }
      request.category = new Category({
        categoryId: categoryId,
        categoryDisplayName: categoryDisplayName,
        categorySystemName: categorySystemName,
        categoryOrder: categoryOrder,
      })
    }
    await miikoApiMiikoServiceClient.categoryPost(request)
    setAllState(DUMMY_CATEGORY)
    await router.push(PathConst.COMPRO_CATEGORY_CATEGORY_LIST)
  }

  const handleChange = (event: SelectChangeEvent) => {
    const tmp = JSON.parse(event.target.value) as Category
    setAllState(tmp)
  }

  return (
    <Container>
      <PageTextCard>
        <Typography variant='body2'>category manage(create/edit)</Typography>
      </PageTextCard>

      <FormControl fullWidth className={styles.wrapper}>
        <Select
          value={JSON.stringify(selectedCategory)}
          onChange={handleChange}
          className={styles.wrapper}
        >
          {[DUMMY_CATEGORY].concat(categoryList).map((it) =>
            <MenuItem key={it.categoryId} value={JSON.stringify(it)}>
              {it.categoryOrder}: {it.categoryDisplayName}
            </MenuItem>,
          )}
        </Select>
        <TextField
          disabled={true}
          label='categoryId'
          value={categoryId}
          className={styles.idtextfield}
        />
        <TextField
          label='categoryDisplayName'
          onChange={(event) => {
            setCategoryDisplayName(event.target.value)
          }}
          value={categoryDisplayName}
          className={styles.textfield}
        />
        <TextField
          label='categorySystemName'
          onChange={(event) => {
            setCategorySystemName(event.target.value)
          }}
          value={categorySystemName}
          className={styles.textfield}
        />
        <TextField
          type='number'
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          label='categoryOrder'
          onChange={(event) => {
            setCategoryOrder(parseInt(event.target.value))
          }}
          value={categoryOrder}
          className={styles.textfield}
        />
      </FormControl>
      <div className={styles.buttongrid}>
        <UpsertButton name='category upsert' onClick={upsertClick} />
      </div>
    </Container>
  )
}

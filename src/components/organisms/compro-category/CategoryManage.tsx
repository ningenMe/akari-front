import { Container, FormControl, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import styles from './CategoryManage.module.scss'
import { DeleteButton, UpsertButton } from '../../atoms/Button'
import { CustomNormalCard } from '../CustomCard'
import { miikoApiMiikoServiceClient } from '../../../repository/MiikoApiRepository'
import { Category, CategoryListGetResponse, CategoryPostRequest } from 'miiko-api/proto/gen_ts/v1/miiko_pb'

export const CategoryManage = (): JSX.Element => {

  const [categoryList, setCategoryList] = useState < Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<Category>()
  const [categoryId, setCategoryId] = useState<string>('')
  const [categoryDisplayName, setCategoryDisplayName] = useState<string>('')
  const [categorySystemName, setCategorySystemName] = useState<string>('')
  const [categoryOrder, setCategoryOrder] = useState<number>(0)
  const DUMMY_CATEGORY_ID = 'NEW CREATE'
  const DUMMY_CATEGORY = new Category({categoryId: DUMMY_CATEGORY_ID})

  const setAllState = (category: Category) => {
    setSelectedCategory(category);
    setCategoryId(category.categoryId)
    setCategoryDisplayName(category.categoryDisplayName)
    setCategorySystemName(category.categorySystemName)
    setCategoryOrder(category.categoryOrder)
  }

  const categoryGet = async () => {
    const categoryGetResponse = await miikoApiMiikoServiceClient.categoryListGet({}) as CategoryListGetResponse
    setCategoryList(categoryGetResponse.categoryList)
  }

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
        categoryOrder: categoryOrder
      })
    }
    await miikoApiMiikoServiceClient.categoryPost(request)
    setAllState(DUMMY_CATEGORY)
    await categoryGet()
  }
  const deleteClick = async () => {
    if (categoryId === '') {
      return
    }

    const request = new CategoryPostRequest()
    {
      request.categoryId = categoryId
    }
    await miikoApiMiikoServiceClient.categoryPost(request)
    setAllState(DUMMY_CATEGORY)
    await categoryGet()
  }

  useEffect(() => {
    categoryGet()
  }, [])

  const cardList = categoryList.map((it) =>
    <CustomNormalCard key={it.categoryId}>
      <div>{"displayName: " + it.categoryDisplayName}</div>
      <div>{"systemName: " + it.categorySystemName}</div>
      <div>{"order: " + it.categoryOrder}</div>
    </CustomNormalCard>
  )

  const handleChange = (event: SelectChangeEvent<Category>) => {
    const tmp = event.target.value as Category
    setAllState(tmp)
  };

  return (
    <Container>
      {/* TODO ここの説明文にcssを当てる */}
      <Typography variant='body2'>category 管理画面</Typography>

      <FormControl fullWidth className={styles.wrapper}>
        <Select
          value={selectedCategory}
          onChange={handleChange}
          className={styles.wrapper}
        >
          {[DUMMY_CATEGORY].concat(categoryList).map((it) =>
            <MenuItem key={it.categoryId} value={it as any}>
              {it.categoryId === DUMMY_CATEGORY_ID ? '新規作成' : it.categoryDisplayName}
            </MenuItem>
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
          onChange={(event) => {setCategoryDisplayName(event.target.value)}}
          value={categoryDisplayName}
          className={styles.textfield}
        />
        <TextField
          label='categorySystemName'
          onChange={(event) => {setCategorySystemName(event.target.value)}}
          value={categorySystemName}
          className={styles.textfield}
        />
        <TextField
          type="number"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          label='categoryOrder'
          onChange={(event) => {setCategoryOrder(parseInt(event.target.value))}}
          value={categoryOrder}
          className={styles.textfield}
        />
      </FormControl>
      <div className={styles.buttongrid}>
        <UpsertButton onClick={upsertClick} />
        <DeleteButton onClick={deleteClick} />
      </div>

      <div className={styles.grid}>
        {cardList}
      </div>
    </Container>
  )
}

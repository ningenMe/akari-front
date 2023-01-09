import { Container, FormControl, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import styles from './CategoryManage.module.scss'
import { ninaApiComproCategoryClient } from 'repository/NinaApiRepository'
import {
  Category,
  GetCategoryResponse,
  PostCategoryRequest,
} from 'mami-interface/mami-generated-client/nina-api-grpc/compro_category_pb'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import { DeleteButton, UpsertButton } from '../../atoms/compro-category/Button'
import { CustomNormalCard } from '../CustomCard'

export const CategoryManage = () => {

  const [categoryResponse, setCategoryResponse] = useState < GetCategoryResponse | undefined>()
  const [selectedCategory, setSelectedCategory] = useState<Category>()
  const [categoryId, setCategoryId] = useState<string>('')
  const [categoryDisplayName, setCategoryDisplayName] = useState<string>('')
  const [categorySystemName, setCategorySystemName] = useState<string>('')
  const [categoryOrder, setCategoryOrder] = useState<number>(0)
  const DUMMY_CATEGORY_ID = 'NEW CREATE'
  const DUMMY_CATEGORY = new Category()
  DUMMY_CATEGORY.setCategoryid(DUMMY_CATEGORY_ID)

  const setAllState = (category: Category) => {
    setSelectedCategory(category);
    setCategoryId(category?.getCategoryid() as string)
    setCategoryDisplayName(category?.getCategorydisplayname() as string)
    setCategorySystemName(category?.getCategorysystemname() as string)
    setCategoryOrder(category?.getCategoryorder() as number)
  }

  const upsertClick = () => {
    const request = new PostCategoryRequest()
    {
      if (categoryId != DUMMY_CATEGORY_ID) {
        request.setCategoryid(categoryId)
      }
      const requestCategory = new Category();
      {
        requestCategory.setCategoryid(categoryId)
        requestCategory.setCategorydisplayname(categoryDisplayName)
        requestCategory.setCategorysystemname(categorySystemName)
        requestCategory.setCategoryorder(categoryOrder)
      }
      request.setCategory(requestCategory)
    }
    ninaApiComproCategoryClient.post(request,null)
    setAllState(DUMMY_CATEGORY)
  }
  const deleteClick = () => {
    if (categoryId === '') {
      return
    }

    const request = new PostCategoryRequest()
    {
      request.setCategoryid(categoryId)
    }
    ninaApiComproCategoryClient.post(request,null)
    setAllState(DUMMY_CATEGORY)
  }

  useEffect(() => {
    ninaApiComproCategoryClient.get(new Empty(), null)
      .then(res => setCategoryResponse(res))
      .catch(err => {
        console.log(err)
      })
  }, [upsertClick,deleteClick])

  const cardList = categoryResponse?.getCategorylistList().map((it) =>
    <CustomNormalCard key={it.getCategoryid()}>
      <div>{"displayName: " + it.getCategorydisplayname()}</div>
      <div>{"systemName: " + it.getCategorysystemname()}</div>
      <div>{"order: " + it.getCategoryorder()}</div>
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
          {[DUMMY_CATEGORY].concat(categoryResponse?.getCategorylistList()??[]).map((it) =>
            <MenuItem key={it.getCategoryid()} value={it as any}>
              {it.getCategoryid() === DUMMY_CATEGORY_ID ? '新規作成' : it.getCategorydisplayname()}
            </MenuItem>
          )}
        </Select>
        <TextField
          disabled={true}
          defaultValue={categoryId}
          label='categoryId'
          value={categoryId}
          className={styles.idtextfield}
        />
        <TextField
          defaultValue={categoryDisplayName}
          label='categoryDisplayName'
          onChange={(event) => {setCategoryDisplayName(event.target.value)}}
          value={categoryDisplayName}
          className={styles.textfield}
        />
        <TextField
          defaultValue={categorySystemName}
          label='categorySystemName'
          onChange={(event) => {setCategorySystemName(event.target.value)}}
          value={categorySystemName}
          className={styles.textfield}
        />
        <TextField
          type="number"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          defaultValue={categoryOrder}
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

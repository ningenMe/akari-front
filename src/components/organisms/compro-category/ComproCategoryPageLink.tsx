import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { PathConst } from 'constants/Const'
import { ManageButton, TransitionButton } from 'components/atoms/Button'
import { kiwaApiUsersClient } from 'repository/KiwaApiRepository'
import { UsersMeGetResponse } from 'kiwa-api/typescript-axios-client/api'

export const ComproCategoryPageLink = (): JSX.Element => {

  const [isAuthorizedComproCategory, setIsAuthorizedComproCategory] = useState<boolean>(false)

  useEffect(() => {
    kiwaApiUsersClient.usersGet({ method: 'GET', withCredentials: true })
      .then((res: { data: UsersMeGetResponse }) => setIsAuthorizedComproCategory(res.data.authority.comproCategory))
      .catch((err: Error) => {
        console.log(err)
      })
  }, [])

  return (
    <Container>
      {isAuthorizedComproCategory ? <ManageButton href={PathConst.COMPRO_CATEGORY_CATEGORY_MANAGE} /> : <></>}
      {isAuthorizedComproCategory ? <ManageButton href={PathConst.COMPRO_CATEGORY_PROBLEM_CREATE} /> : <></>}
      <TransitionButton href={PathConst.COMPRO_CATEGORY_PROBLEM_LIST(0)} name='problem list' />
    </Container>
  )
}

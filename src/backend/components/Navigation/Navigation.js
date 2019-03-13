import React from 'react'
import { Link } from 'react-router-dom'
import { MdCancel, MdAddCircle } from 'react-icons/md'

import * as S from './styles'

const renderNavigation = url => {
  if (url === '/tracks/new') {
    return (
      <S.Navigation as={Link} to='/tracks' title='Cancel and return to track list' className='cancel-icon'>
        <S.IconContainer>
          <MdCancel className='action-icon' />
        </S.IconContainer>
      </S.Navigation>
    )
  }

  if (url === '/tracks') {
    return (
      <S.Navigation as={Link} to='/tracks/new' title='Add new track' className='add-icon'>
        <S.IconContainer>
          <MdAddCircle className='action-icon' />
        </S.IconContainer>
      </S.Navigation>
    )
  }
}

const Navigation = ({ url }) => {
  return renderNavigation(url)
}

export default Navigation

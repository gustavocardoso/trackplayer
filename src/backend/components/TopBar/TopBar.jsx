import React from 'react'

import * as S from './styles'
import LogoImage from '../../../images/icons/wave.svg'

const TopBar = () => (
  <S.TopBar>
    <S.Logo icon={LogoImage} />
    <S.Title>
      Track<span>Player</span>
    </S.Title>
  </S.TopBar>
)

export default TopBar

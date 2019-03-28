import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const LoadBar = ({ progress, error }) => (
  <S.Container>
    <S.Progress progress={progress} className={error ? 'upload-error' : false} />
  </S.Container>
)

LoadBar.propTypes = {
  progress: PropTypes.number.isRequired,
  error: PropTypes.bool.isRequired
}

export default LoadBar

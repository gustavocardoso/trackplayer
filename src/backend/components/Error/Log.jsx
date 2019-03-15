import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const ErrorLog = ({ msg, show }) => (
  <S.Container show={show}>
    <S.ErrorMsg>{msg}</S.ErrorMsg>
  </S.Container>
)

ErrorLog.propTypes = {
  msg: PropTypes.string,
  show: PropTypes.bool.isRequired
}

export default ErrorLog

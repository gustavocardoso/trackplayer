import React from 'react'
import PropTypes from 'prop-types'

import { Container, ErrorMsg } from './style'

const ErrorLog = ({ msg, show }) => (
  <Container show={show}>
    <ErrorMsg>{msg}</ErrorMsg>
  </Container>
)

ErrorLog.propTypes = {
  msg: PropTypes.string,
  show: PropTypes.bool.isRequired
}

export default ErrorLog

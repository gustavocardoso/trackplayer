import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

import ErrorLog from '../../Error'
import Navigation from '../../Navigation'
import TrackForm from '../Form/index'

const TracksNew = props => {
  const {
    showError,
    errorMsg,
    location: { pathname: url },
    clearTrack
  } = props

  useEffect(() => {
    clearTrack()
  }, [])

  return (
    <S.Container>
      <S.ContentHeading>
        <S.Heading>New Track</S.Heading>

        <Navigation url={url} />
      </S.ContentHeading>

      {!!showError && <ErrorLog msg={errorMsg} show={showError} />}

      <TrackForm {...props} />
    </S.Container>
  )
}

TracksNew.propTypes = {
  location: PropTypes.object.isRequired,
  errorMsg: PropTypes.string,
  showError: PropTypes.bool.isRequired,
  clearTrack: PropTypes.func.isRequired
}

export default TracksNew

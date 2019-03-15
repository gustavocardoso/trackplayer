import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

import ErrorLog from '../../Error'
import Navigation from '../../Navigation'
import TrackForm from '../Form/index'

const sanitizeUrl = url => url.replace(/\/[0-9]+.{0,}/, '')

const TracksEdit = props => {
  const {
    getTrack,
    validateTrack,
    showError,
    errorMsg,
    location: { pathname: url }
  } = props

  const id = props.match.params.id

  const urlSanitized = sanitizeUrl(url)

  useEffect(() => {
    getTrack(id)
    validateTrack()
  }, [])

  return (
    <S.Container>
      <S.ContentHeading>
        <S.Heading>Edit Track</S.Heading>

        <Navigation url={urlSanitized} />
      </S.ContentHeading>

      {!!showError && <ErrorLog msg={errorMsg} show={showError} />}

      <TrackForm {...props} id={id} />
    </S.Container>
  )
}

TracksEdit.propTypes = {
  getTrack: PropTypes.func.isRequired,
  validateTrack: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  errorMsg: PropTypes.string,
  showError: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired
}

export default TracksEdit

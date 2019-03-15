import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

import Track from '../Track'
import Navigation from '../../Navigation'

const TracksList = props => {
  const {
    getTracks,
    tracks,
    location: { pathname: url },
    clearTrack
  } = props

  useEffect(() => {
    getTracks()
    clearTrack()
  }, [])

  return (
    <S.Container>
      <S.ContentHeading>
        <S.Heading>Track list</S.Heading>
        <Navigation url={url} />
      </S.ContentHeading>

      {!tracks.length && <S.LogMessage>There are no tracks here!</S.LogMessage>}

      <S.Tracks>
        {tracks.map(track => (
          <Track {...track} key={track.id} />
        ))}
      </S.Tracks>
    </S.Container>
  )
}

TracksList.propTypes = {
  getTracks: PropTypes.func.isRequired,
  tracks: PropTypes.array,
  location: PropTypes.object.isRequired
}

export default TracksList

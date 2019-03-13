import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

import Track from '../Track'
import Navigation from '../../Navigation'

const TracksList = ({ tracks, location: { pathname: url } }) => (
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

TracksList.propTypes = {
  tracks: PropTypes.array,
  location: PropTypes.object.isRequired
}

export default TracksList

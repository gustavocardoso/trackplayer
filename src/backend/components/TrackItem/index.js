import React from 'react'
import PropTypes from 'prop-types'

import { Container, Icon, IconImage, Title, Meta, Info, StatusBadge } from './styles'
import AlbumImage from '../../../images/icons/music-album.svg'

const TrackItem = ({ id, title, artist, bpm, duration, volume }) => (
  <Container className='track'>
    <Icon>
      <IconImage image={AlbumImage} />
    </Icon>

    <Meta>
      <Title>{title}</Title>

      <Info>
        <strong>Artist:</strong> {artist}
      </Info>

      <Info>
        <strong>BPM:</strong> {bpm}
      </Info>

      <Info>
        <strong>Duration:</strong> {duration}
      </Info>

      <Info>
        <strong>Volume:</strong> {volume}
      </Info>
    </Meta>

    <StatusBadge status='active'>
      active
    </StatusBadge>
  </Container>
)

TrackItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  bpm: PropTypes.number.isRequired,
  duration: PropTypes.string.isRequired,
  volume: PropTypes.number.isRequired
}

export default TrackItem

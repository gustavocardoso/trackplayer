import React from 'react'
import PropTypes from 'prop-types'
import { MdDelete, MdEdit } from 'react-icons/md'

import {
  Container,
  Icon,
  IconImage,
  Title,
  Meta,
  Info,
  StatusBadge,
  ActionButton,
  ActionButtonsGroup
} from './styles'

import AlbumImage from '../../../images/icons/music-album.svg'

const TrackItem = ({ id, title, artist, bpm, duration, volume, status }) => {
  const statusText = status ? 'active' : 'inactive'

  return (
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

      <ActionButtonsGroup>
        <StatusBadge status={statusText}>{statusText}</StatusBadge>

        <ActionButton
          title='Edit track'
          action='edit'
          status='active'
          as='button'
        >
          <MdEdit size={13} />
        </ActionButton>

        <ActionButton
          title='Delete track'
          action='delete'
          status='active'
          as='button'
        >
          <MdDelete size={13} />
        </ActionButton>
      </ActionButtonsGroup>
    </Container>
  )
}

TrackItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  bpm: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  volume: PropTypes.number.isRequired,
  status: PropTypes.bool.isRequired
}

export default TrackItem

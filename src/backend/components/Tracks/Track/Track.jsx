import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { MdDelete, MdEdit } from 'react-icons/md'

import * as S from './styles'

import AlbumImage from '../../../../images/icons/music-album.svg'

const Track = ({ id, title, artist, bpm, duration, volume, status, handleDelete }) => {
  const statusText = status ? 'active' : 'inactive'

  return (
    <S.Container className='track'>
      <S.Icon>
        <S.IconImage image={AlbumImage} />
      </S.Icon>

      <S.Meta>
        <S.Title>{title}</S.Title>

        <S.Info>
          <strong>Artist:</strong> {artist}
        </S.Info>

        <S.Info>
          <strong>BPM:</strong> {bpm}
        </S.Info>

        <S.Info>
          <strong>Duration:</strong> {duration}
        </S.Info>

        <S.Info>
          <strong>Volume:</strong> {volume}
        </S.Info>
      </S.Meta>

      <S.ActionButtonsGroup>
        <S.StatusBadge status={statusText}>{statusText}</S.StatusBadge>

        <S.ActionButton as={Link} to={`/tracks/edit/${id}`} title='Edit track' action='edit'>
          <MdEdit size={13} />
        </S.ActionButton>

        <S.ActionButton
          title='Delete track'
          action='delete'
          as='button'
          onClick={event => handleDelete(event, id, title)}
        >
          <MdDelete size={13} />
        </S.ActionButton>
      </S.ActionButtonsGroup>
    </S.Container>
  )
}

Track.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  bpm: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  volume: PropTypes.number.isRequired,
  status: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired
}

Track.defaultProps = {
  id: 0
}

export default Track

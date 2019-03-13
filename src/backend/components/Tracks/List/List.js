import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { MdAddCircle } from 'react-icons/md'

import * as S from './styles'
import Track from '../Track'

const TracksList = ({ tracks }) => (
  <S.Container>
    <S.ContentHeading>
      <S.Heading>Track list</S.Heading>

      <S.Navigation as={Link} to='/tracks/new' title='Add new track' className='add-icon'>
        <S.IconContainer>
          <MdAddCircle className='action-icon' />
        </S.IconContainer>
      </S.Navigation>
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
  tracks: PropTypes.array
}

export default TracksList

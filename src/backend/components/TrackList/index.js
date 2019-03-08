import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { MdAddCircle } from 'react-icons/md'

import {
  ContentHeading,
  Heading,
  Navigation,
  IconContainer
} from '../../styles/base'
import { Container, Tracks, LogMessage } from './styles'
import TrackItem from '../TrackItem'

const TrackList = ({ tracks }) => (
  <div>
    <Container>
      <ContentHeading>
        <Heading>Track list</Heading>

        <Navigation
          as={Link}
          to='/tracks/add'
          title='Add new track'
          className='add-icon'
        >
          <IconContainer>
            <MdAddCircle className='action-icon' />
          </IconContainer>
        </Navigation>
      </ContentHeading>

      {!tracks.length && <LogMessage>There are no tracks here!</LogMessage>}

      <Tracks>
        {tracks.map(track => (
          <TrackItem {...track} key={track.id} />
        ))}
      </Tracks>
    </Container>
  </div>
)

TrackList.propTypes = {
  tracks: PropTypes.array
}

export default TrackList

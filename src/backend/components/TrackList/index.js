import React from 'react'

import { ContentHeading, Heading } from '../../styles/base'

import { Container, Tracks } from './styles'
import TrackItem from '../TrackItem'

const tracks = [
  {
    id: 1,
    title: 'Get Lucky',
    artist: 'Daft Punk',
    bpm: 120,
    duration: '04:56',
    observation: 'Count in eight tempos',
    volume: 5,
    file: null,
    status: 0
  },
  {
    id: 2,
    title: 'Locked Out of Heaven',
    artist: 'Bruno Mars',
    bpm: 100,
    duration: '03:45',
    observation: null,
    volume: 8,
    file: null,
    status: 0
  },

  {
    id: 3,
    title: 'Not a Lady',
    artist: 'Pieces of Hell',
    bpm: 80,
    duration: '05:20',
    observation: null,
    volume: 5,
    file: null,
    status: 1
  }
]

const TrackList = () => (
  <div>
    <Container>
      <ContentHeading>
        <Heading>Track list</Heading>
      </ContentHeading>
      
      <Tracks>
        {tracks.map(track => (
          <TrackItem {...track} key={track.id} />
        ))}
      </Tracks>
    </Container>
  </div>
)

export default TrackList

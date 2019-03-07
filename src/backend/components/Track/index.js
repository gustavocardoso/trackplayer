import React from 'react'
import { Link } from 'react-router-dom'
import { MdCancel, MdCheckBox } from 'react-icons/md'

import { ContentHeading, Heading, Navigation, IconContainer } from '../../styles/base'
import {
  Container,
  TrackForm,
  FormGroup,
  FormLabel,
  CheckBoxIconContainer,
  FormInput,
  Status,
  InsertButton,
  RangeDataList,
  DataListOption,
  RangeValue,
  RangeContainer
} from './styles'

const Track = ({ handleChange, isReady, title, artist, bpm, duration, volume, observations, status }) => (
  <Container>
    <ContentHeading>
      <Heading>New Track</Heading>

      <Navigation as={Link} to='/tracks' title='Cancel and return to track list' className='cancel-icon'>
        <IconContainer>
          <MdCancel className='action-icon' />
        </IconContainer>
      </Navigation>
    </ContentHeading>

    <TrackForm>
      <FormGroup>
        <FormLabel>Title</FormLabel>
        <FormInput
          type='text'
          name='title'
          id='track-title'
          size='60'
          maxLength='80'
          placeholder='Title of the track'
          className='flexible-input'
          value={title}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Artist</FormLabel>
        <FormInput
          type='text'
          name='artist'
          id='track-artist'
          size='60'
          maxLength='80'
          placeholder='Artist name'
          className='flexible-input'
          value={artist}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>BPM</FormLabel>
        <FormInput
          type='text'
          name='bpm'
          id='track-bpm'
          size='3'
          maxLength='3'
          placeholder='BPM'
          value={bpm}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Duration</FormLabel>
        <FormInput
          type='text'
          name='duration'
          id='track-duration'
          size='5'
          maxLength='5'
          placeholder='00:00'
          value={duration}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Initial volume</FormLabel>
        <RangeContainer>
          <FormInput
            type='range'
            min='0'
            max='10'
            step='0.5'
            name='volume'
            id='track-volume'
            placeholder='0'
            list='tickmarks'
            className='volume-range'
            value={volume || 5}
            onChange={handleChange}
          />
          <RangeDataList id='tickmarks' className='sliderticks'>
            <DataListOption value='0' label='0' />
            <DataListOption value='0.5' />
            <DataListOption value='1' label='1' />
            <DataListOption value='1.5' />
            <DataListOption value='2' label='2' />
            <DataListOption value='2.5' />
            <DataListOption value='3' label='3' />
            <DataListOption value='3.5' />
            <DataListOption value='4' label='4' />
            <DataListOption value='4.5' />
            <DataListOption value='5' label='5' />
            <DataListOption value='5.5' />
            <DataListOption value='6' label='6' />
            <DataListOption value='6.5' />
            <DataListOption value='7' label='7' />
            <DataListOption value='7.5' />
            <DataListOption value='8' label='8' />
            <DataListOption value='8.5' />
            <DataListOption value='9' label='9' />
            <DataListOption value='9.5' />
            <DataListOption value='10' label='10' />
          </RangeDataList>

          <RangeValue>{volume || 5}</RangeValue>
        </RangeContainer>
      </FormGroup>

      <FormGroup>
        <FormLabel>Observations</FormLabel>
        <FormInput
          name='observations'
          id='track-observations'
          as='textarea'
          cols='60'
          rows='4'
          className='flexible-input'
          value={observations}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup className='no-label'>
        <FormLabel className='check-label'>
          <Status
            type='checkbox'
            name='status'
            id='track-status'
            checked={status}
            onChange={handleChange}
          />
          <CheckBoxIconContainer className='icon-container'>
            <MdCheckBox
              size={26}
              className='check-icon'
              onChange={handleChange}
            />
          </CheckBoxIconContainer>
          active
        </FormLabel>
      </FormGroup>

      <FormGroup className='no-label'>
        <InsertButton
          as='button'
          disabled={!isReady}
          onClick={e => {
            e.preventDefault()
          }}
        >
          Add track
        </InsertButton>
      </FormGroup>
    </TrackForm>
  </Container>
)

export default Track

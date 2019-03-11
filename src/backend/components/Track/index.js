import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { MdCancel, MdCheckBox } from 'react-icons/md'

import {
  ContentHeading,
  Heading,
  Navigation,
  IconContainer
} from '../../styles/base'
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
  RangeContainer,
  RequiredField
} from './styles'
import ErrorLog from '../ErrorLog'

const Track = ({
  handleChange,
  handleSubmit,
  validateNewTrack,
  isReady,
  title,
  artist,
  bpm,
  duration,
  volume,
  observations,
  status,
  errorMsg,
  showError
}) => (
  <Container>
    <ContentHeading>
      <Heading>New Track</Heading>

      <Navigation
        as={Link}
        to='/tracks'
        title='Cancel and return to track list'
        className='cancel-icon'
      >
        <IconContainer>
          <MdCancel className='action-icon' />
        </IconContainer>
      </Navigation>
    </ContentHeading>

    {!!showError && <ErrorLog msg={errorMsg} show={showError} />}

    <TrackForm>
      <FormGroup>
        <FormLabel>
          Title
          <RequiredField text='(required)' />
        </FormLabel>
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
          onBlur={validateNewTrack}
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>
          Artist
          <RequiredField text='(required)' />
        </FormLabel>
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
          onBlur={validateNewTrack}
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>
          BPM
          <RequiredField text='(required)' />
        </FormLabel>
        <FormInput
          type='text'
          name='bpm'
          id='track-bpm'
          size='3'
          maxLength='3'
          placeholder='BPM'
          value={bpm}
          onChange={handleChange}
          onBlur={validateNewTrack}
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>
          Duration
          <RequiredField text='(required)' />
        </FormLabel>
        <FormInput
          type='text'
          name='duration'
          id='track-duration'
          size='5'
          maxLength='5'
          placeholder='00:00'
          value={duration}
          onChange={handleChange}
          onBlur={validateNewTrack}
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Volume</FormLabel>
        <RangeContainer>
          <FormInput
            type='range'
            min='0'
            max='1'
            step='0.1'
            name='volume'
            id='track-volume'
            list='tickmarks'
            className='volume-range'
            value={volume}
            onChange={handleChange}
            onBlur={validateNewTrack}
          />
          <RangeDataList id='tickmarks' className='sliderticks'>
            <DataListOption value='0' />
            <DataListOption value='0.1' />
            <DataListOption value='0.2' />
            <DataListOption value='0.3' />
            <DataListOption value='0.4' />
            <DataListOption value='0.5' />
            <DataListOption value='0.6' />
            <DataListOption value='0.7' />
            <DataListOption value='0.8' />
            <DataListOption value='0.9' />
            <DataListOption value='1' />
          </RangeDataList>

          <RangeValue>{volume * 10}</RangeValue>
        </RangeContainer>
      </FormGroup>

      <FormGroup>
        <FormLabel>Observations</FormLabel>
        <FormInput
          name='observations'
          id='track-observations'
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
        <InsertButton as='button' disabled={!isReady} onClick={handleSubmit}>
          Add track
        </InsertButton>
      </FormGroup>
    </TrackForm>
  </Container>
)

Track.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  validateNewTrack: PropTypes.func.isRequired,
  isReady: PropTypes.bool.isRequired,
  title: PropTypes.string,
  artist: PropTypes.string,
  bpm: PropTypes.string,
  duration: PropTypes.string,
  volume: PropTypes.number,
  observations: PropTypes.string,
  status: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string,
  showError: PropTypes.bool.isRequired
}

export default Track

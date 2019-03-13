import React from 'react'
import PropTypes from 'prop-types'
import { MdCheckBox } from 'react-icons/md'

import * as S from './styles'

import ErrorLog from '../../Error/Log'
import Navigation from '../../Navigation'

const TracksNew = ({
  location: { pathname: url },
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
  <S.Container>
    <S.ContentHeading>
      <S.Heading>New Track</S.Heading>

      <Navigation url={url} />
    </S.ContentHeading>

    {!!showError && <ErrorLog msg={errorMsg} show={showError} />}

    <S.TrackForm>
      <S.FormGroup>
        <S.FormLabel>
          Title
          <S.RequiredField text='(required)' />
        </S.FormLabel>
        <S.FormInput
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
      </S.FormGroup>

      <S.FormGroup>
        <S.FormLabel>
          Artist
          <S.RequiredField text='(required)' />
        </S.FormLabel>
        <S.FormInput
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
      </S.FormGroup>

      <S.FormGroup>
        <S.FormLabel>
          BPM
          <S.RequiredField text='(required)' />
        </S.FormLabel>
        <S.FormInput
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
      </S.FormGroup>

      <S.FormGroup>
        <S.FormLabel>
          Duration
          <S.RequiredField text='(required)' />
        </S.FormLabel>
        <S.FormInput
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
      </S.FormGroup>

      <S.FormGroup>
        <S.FormLabel>Volume</S.FormLabel>
        <S.RangeContainer>
          <S.FormInput
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
          <S.RangeDataList id='tickmarks' className='sliderticks'>
            <S.DataListOption value='0' />
            <S.DataListOption value='0.1' />
            <S.DataListOption value='0.2' />
            <S.DataListOption value='0.3' />
            <S.DataListOption value='0.4' />
            <S.DataListOption value='0.5' />
            <S.DataListOption value='0.6' />
            <S.DataListOption value='0.7' />
            <S.DataListOption value='0.8' />
            <S.DataListOption value='0.9' />
            <S.DataListOption value='1' />
          </S.RangeDataList>

          <S.RangeValue>{volume * 10}</S.RangeValue>
        </S.RangeContainer>
      </S.FormGroup>

      <S.FormGroup>
        <S.FormLabel>Observations</S.FormLabel>
        <S.FormInput
          name='observations'
          id='track-observations'
          cols='60'
          rows='4'
          className='flexible-input'
          value={observations}
          onChange={handleChange}
        />
      </S.FormGroup>

      <S.FormGroup className='no-label'>
        <S.FormLabel className='check-label'>
          <S.Status type='checkbox' name='status' id='track-status' checked={status} onChange={handleChange} />
          <S.CheckBoxIconContainer className='icon-container'>
            <MdCheckBox size={26} className='check-icon' onChange={handleChange} />
          </S.CheckBoxIconContainer>
          active
        </S.FormLabel>
      </S.FormGroup>

      <S.FormGroup className='no-label'>
        <S.InsertButton as='button' disabled={!isReady} onClick={handleSubmit}>
          Add track
        </S.InsertButton>
      </S.FormGroup>
    </S.TrackForm>
  </S.Container>
)

TracksNew.propTypes = {
  location: PropTypes.object.isRequired,
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

export default TracksNew

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, withRouter } from 'react-router-dom'
import filesize from 'filesize'

import GlobalStyle from './styles/global'
import { Container } from './styles/base'

import { api, fileApi } from './services/api'

import TopBar from './components/TopBar'
import TracksList from './components/Tracks/List'
import TracksNew from './components/Tracks/New'
import TracksEdit from './components/Tracks/Edit'
import Credits from './components/Credits'

class Admin extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isReady: false,
      title: '',
      artist: '',
      bpm: '',
      duration: '',
      volume: 0.5,
      observations: '',
      filename: '',
      status: false,
      tracks: [],
      errorMsg: '',
      showError: false,
      uploadProgress: 0,
      uploading: false,
      uploadError: false,
      uploaded: false,
      uploadErrorMessage: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateTrack = this.validateTrack.bind(this)
    this.getTracks = this.getTracks.bind(this)
    this.getTrack = this.getTrack.bind(this)
    this.clearTrack = this.clearTrack.bind(this)
    this.sharedProps = this.sharedProps.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  async getTracks () {
    const response = await api.get('tracks')
    const tracks = response.data

    this.setState({ tracks })
  }

  async getTrack (id) {
    const response = await api.get(`tracks/${id}`)
    const track = response.data

    const { title, artist, bpm, duration, volume, filename, observations, status } = track

    this.setState({
      title,
      artist,
      bpm,
      duration,
      volume,
      filename,
      observations,
      status
    })
  }

  sharedProps () {
    return {
      isReady: this.state.isReady,
      title: this.state.title,
      artist: this.state.artist,
      bpm: this.state.bpm,
      duration: this.state.duration,
      volume: this.state.volume,
      filename: this.state.filename,
      observations: this.state.observations,
      status: this.state.status,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
      validateTrack: this.validateTrack,
      errorMsg: this.state.errorMsg,
      showError: this.state.showError,
      clearTrack: this.clearTrack,
      getTrack: this.getTrack,
      uploadProgress: this.state.uploadProgress,
      uploading: this.state.uploading,
      uploadError: this.state.uploadError,
      uploaded: this.state.uploaded,
      uploadErrorMessage: this.state.uploadErrorMessage
    }
  }

  clearTrack () {
    this.setState({
      isReady: false,
      title: '',
      artist: '',
      bpm: '',
      duration: '',
      volume: 0.5,
      filename: '',
      observations: '',
      status: false,
      uploadProgress: 0,
      uploading: false,
      uploadError: false,
      uploaded: false,
      errorMsg: '',
      showError: false
    })
  }

  handleChange (event) {
    let target = event.target
    let value = target.type === 'checkbox' ? target.checked : target.value
    let name = target.name

    if (name === 'volume') {
      value = parseFloat(value)
    }

    if (name === 'trackfile') {
      const file = target.files[0]
      const fileData = {
        file,
        name: file.name,
        readableSize: filesize(file.size),
        error: false
      }

      this.setState({ uploading: true, uploadProgress: 0 })

      this.processUpload(fileData)
    }

    this.setState({ [name]: value })
  }

  processUpload (fileData) {
    this.setState({ uploadError: false, errorMsg: '', showError: false })

    window.setTimeout(() => {
      const { file, name } = fileData
      const data = new FormData()

      data.append('file', file, name)

      fileApi
        .post('files/upload', data, {
          onUploadProgress: event => {
            const progress = parseInt(Math.round((event.loaded * 100) / event.total))

            this.setState({ uploadProgress: progress })

            if (progress === 100) {
              this.setState({ uploading: false })
            }
          }
        })
        .then(response => {
          const { error, message } = response.data

          console.log(response.data)

          if (error) {
            this.setState({
              filename: '',
              uploadError: true,
              uploading: false,
              uploaded: false,
              uploadErrorMessage: message
            })
          } else {
            const { filename } = response.data

            this.setState({
              uploaded: true,
              filename,
              uploadError: false,
              uploading: false
            })
          }
        })
        .catch(err => {
          if (err) {
            this.setState({
              errorMsg: err.message,
              showError: true,
              uploadError: true,
              uploading: false,
              uploaded: false
            })
          }
        })
    }, 700)
  }

  async handleDelete (event, id, title) {
    event.preventDefault()

    this.setState({
      showError: false,
      errorMsg: ''
    })

    if (window.confirm(`Delete track ${title}?`)) {
      try {
        const response = await api.delete(`tracks/${id}`)

        if (response.statusText === 'OK') {
          this.props.history.push('/tracks')
          await this.getTracks()
        }
      } catch (error) {
        this.setState({
          showError: true,
          errorMsg: error.message
        })
      }
    } else {
      console.log('Cancel track deletion')
    }
  }

  async handleSubmit (event, id) {
    event.preventDefault()

    this.setState({
      showError: false,
      errorMsg: ''
    })

    if (this.state.isReady) {
      const { title, artist, bpm, duration, volume, observations, status } = this.state

      const track = {
        title,
        artist,
        bpm,
        duration,
        volume,
        filename: this.state.filename,
        observations,
        status
      }

      if (id === undefined) {
        try {
          const response = await api.post('tracks', track)

          if (response.statusText === 'Created') {
            this.props.history.push('/tracks')
            await this.getTracks()
          }
        } catch (error) {
          this.setState({
            showError: true,
            errorMsg: error.message
          })
        }
      } else {
        try {
          const response = await api.put(`tracks/${id}`, track)

          if (response.statusText === 'OK') {
            this.props.history.push('/tracks')
            await this.getTracks()
          }
        } catch (error) {
          this.setState({
            showError: true,
            errorMsg: error.message
          })
        }
      }
    }
  }

  validateTrack (action) {
    const { title, artist, bpm, duration } = this.state

    if (action === 'edit') {
      this.setState({ isReady: true })
    }

    if (title !== '' && artist !== '' && bpm !== '' && duration !== '') {
      this.setState({ isReady: true })
    } else {
      this.setState({ isReady: false })
    }
  }

  render () {
    return (
      <div>
        <GlobalStyle />
        <Container>
          <TopBar />

          <Switch>
            <Route
              exact
              path={this.props.match.url}
              render={props => (
                <TracksList
                  {...props}
                  getTracks={this.getTracks}
                  tracks={this.state.tracks}
                  clearTrack={this.clearTrack}
                  handleDelete={this.handleDelete}
                  errorMsg={this.state.errorMsg}
                  showError={this.state.showError}
                />
              )}
            />

            <Route
              path={`${this.props.match.url}/new`}
              render={props => (
                <TracksNew {...props} {...this.sharedProps()} action='new' />
              )}
            />

            <Route
              path='/tracks/edit/:id'
              exact
              render={props => (
                <TracksEdit {...props} {...this.sharedProps()} action='edit' />
              )}
            />
          </Switch>

          <Credits />
        </Container>
      </div>
    )
  }
}

Admin.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default withRouter(Admin)

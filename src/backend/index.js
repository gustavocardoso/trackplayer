import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, withRouter } from 'react-router-dom'

import GlobalStyle from './styles/global'
import { Container } from './styles/base'

import api from './services/api'

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
      status: false,
      tracks: [],
      errorMsg: '',
      showError: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateTrack = this.validateTrack.bind(this)
    this.getTracks = this.getTracks.bind(this)
    this.getTrack = this.getTrack.bind(this)
    this.clearTrack = this.clearTrack.bind(this)
    this.sharedProps = this.sharedProps.bind(this)
  }

  async getTracks () {
    const response = await api.get('tracks')
    const tracks = response.data

    this.setState({ tracks })
  }

  async getTrack (id) {
    const response = await api.get(`tracks/${id}`)
    const track = response.data

    const { title, artist, bpm, duration, volume, observations, status } = track

    this.setState({
      title,
      artist,
      bpm,
      duration,
      volume,
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
      observations: this.state.observations,
      status: this.state.status,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
      validateTrack: this.validateTrack,
      errorMsg: this.state.errorMsg,
      showError: this.state.showError,
      clearTrack: this.clearTrack,
      getTrack: this.getTrack
    }
  }

  clearTrack () {
    this.setState({
      title: '',
      artist: '',
      bpm: '',
      duration: '',
      volume: 0.5,
      observations: '',
      status: false
    })
  }

  handleChange (event) {
    let target = event.target
    let value = target.type === 'checkbox' ? target.checked : target.value
    let name = target.name

    if (name === 'volume') {
      value = parseFloat(value)
    }

    this.setState({ [name]: value })
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

  validateTrack () {
    const { title, artist, bpm, duration } = this.state

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
                />
              )}
            />
            <Route
              path={`${this.props.match.url}/new`}
              render={props => <TracksNew {...props} {...this.sharedProps()} action='new' />}
            />
            <Route
              path='/tracks/edit/:id'
              exact
              render={props => <TracksEdit {...props} {...this.sharedProps()} action='edit' />}
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

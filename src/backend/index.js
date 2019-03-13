import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, withRouter } from 'react-router-dom'

import GlobalStyle from './styles/global'
import { Container, TopBar, Logo, Title, Credits } from './styles/base'

import api from './services/api'

import TracksList from './components/Tracks/List'
import TracksNew from './components/Tracks/New'
import TracksEdit from './components/Tracks/Edit'

import LogoImage from '../images/icons/wave.svg'

class Admin extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isReady: false,
      track: {
        title: '',
        artist: '',
        bpm: '',
        duration: '',
        volume: 0.5,
        observations: '',
        status: false,
        createdAt: Date.now()
      },
      tracks: [],
      errorMsg: '',
      showError: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateNewTrack = this.validateNewTrack.bind(this)
  }

  async componentDidMount () {
    await this.getTracks()
  }

  async getTracks () {
    const response = await api.get('tracks')
    const tracks = response.data

    this.setState({ tracks })
  }

  handleChange (event) {
    let target = event.target
    let value = target.type === 'checkbox' ? target.checked : target.value
    let name = target.name

    if (name === 'volume') {
      value = parseFloat(value)
    }

    this.setState(prevState => {
      return {
        track: {
          ...prevState.track,
          [name]: value
        }
      }
    })
  }

  async handleSubmit (event) {
    event.preventDefault()

    this.setState({
      showError: false,
      errorMsg: ''
    })

    if (this.state.isReady) {
      const { title, artist, bpm, duration, volume, observations, status, createdAt } = this.state.track

      try {
        const response = await api.post('tracks', {
          title,
          artist,
          bpm,
          duration,
          volume,
          observations,
          status,
          createdAt
        })

        if (response.statusText === 'Created') {
          this.props.history.push('/tracks')
        }
      } catch (error) {
        this.setState({
          showError: true,
          errorMsg: error.message
        })
      }
    }
  }

  validateNewTrack () {
    const { title, artist, bpm, duration } = this.state.track

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
          <TopBar>
            <Logo icon={LogoImage} />
            <Title>
              Track<span>Player</span>
            </Title>
          </TopBar>

          <Switch>
            <Route
              exact
              path={this.props.match.url}
              render={props => <TracksList {...props} tracks={this.state.tracks} />}
            />
            <Route
              path={`${this.props.match.url}/new`}
              render={props => (
                <TracksNew
                  {...props}
                  isReady={this.state.isReady}
                  title={this.state.track.title}
                  artist={this.state.track.artist}
                  bpm={this.state.track.bpm}
                  duration={this.state.track.duration}
                  volume={this.state.track.volume}
                  observations={this.state.track.observations}
                  status={this.state.track.status}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  validateNewTrack={this.validateNewTrack}
                  errorMsg={this.state.errorMsg}
                  showError={this.state.showError}
                />
              )}
            />
            <Route path='/tracks/edit/:id' exact render={props => <TracksEdit {...props} />} />
          </Switch>
        </Container>

        <Credits>
          <div>
            <p>
              Desenvolvido por <strong>Gustavo Cardoso</strong>
            </p>
            <p>
              Icons made by{' '}
              <a href='https://www.flaticon.com/authors/kiranshastry' title='Kiranshastry'>
                Kiranshastry
              </a>{' '}
              and{' '}
              <a href='https://www.freepik.com/' title='Freepik'>
                Freepik
              </a>{' '}
              from{' '}
              <a href='https://www.flaticon.com/' title='Flaticon'>
                www.flaticon.com
              </a>{' '}
              is licensed by{' '}
              <a
                href='http://creativecommons.org/licenses/by/3.0/'
                title='Creative Commons BY 3.0'
                target='_blank'
                rel='noopener noreferrer'
              >
                CC 3.0 BY
              </a>
            </p>
          </div>
        </Credits>
      </div>
    )
  }
}

Admin.propTypes = {
  match: PropTypes.object.isRequired
}

export default withRouter(Admin)

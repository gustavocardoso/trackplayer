import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

import GlobalStyle from './styles/global'
import { Container, TopBar, Logo, Title, Credits } from './styles/base'

import TrackList from './components/TrackList'
import Track from './components/Track'

import LogoImage from '../images/icons/wave.svg'

const Admin = ({ match }) => (
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
        <Route exact path={match.url} component={TrackList} />
        <Route path={`${match.url}/add`} component={Track} />
      </Switch>
    </Container>

    <Credits>
      <div>
        <p>
          Desenvolvido por <strong>Gustavo Cardoso</strong>
        </p>
        <p>
          Icons made by{' '}
          <a
            href='https://www.flaticon.com/authors/kiranshastry'
            title='Kiranshastry'
          >
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

Admin.propTypes = {
  match: PropTypes.object.isRequired
}

export default Admin

import React from 'react'
import GlobalStyle from './styles/global'
import { Container, TopBar, Logo, Title } from './styles/base'

import TrackList from './components/TrackList'
import LogoImage from '../images/icons/wave.svg'

const Admin = () => (
  <div>
    <GlobalStyle />
    <Container>
      <TopBar>
        <Logo icon={LogoImage} />
        <Title>TrackPlayer</Title>
      </TopBar>

      <TrackList />
    </Container>

    <footer>
      <div>Icons made by <a href='https://www.flaticon.com/authors/kiranshastry' title='Kiranshastry'>Kiranshastry</a> from <a href='https://www.flaticon.com/' title='Flaticon'>www.flaticon.com</a> is licensed by <a href='http://creativecommons.org/licenses/by/3.0/' title='Creative Commons BY 3.0' target='_blank'>CC 3.0 BY</a></div>
    </footer>
  </div>
)

export default Admin

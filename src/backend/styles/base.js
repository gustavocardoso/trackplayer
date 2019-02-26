import styled from 'styled-components'
import config from './variables'

export const Container = styled.div`
  padding-top: 6em;
`

export const TopBar = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  height: 4em;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 101;
  background: ${config.colors.bg.topBar};
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, .2);
  padding: 0 2em;

  @media screen and (min-width: ${config.sizes.large}) {
    padding: 0 4em;
  }
`

export const Logo = styled.div`
  width: 70px;
  height: 3em;
  background: url(${props => props.icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`

export const Title = styled.h1`
  font-size: 1.4em;
  font-weight: 700;
  line-height: 0;
  color: ${config.colors.text.topBarTitle};
`

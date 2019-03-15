import styled from 'styled-components'

import { colors, layout, media } from '../../styles/config'

export const TopBar = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 101;
  background-color: ${colors.bg.topBar};
  background-image: -webkit-linear-gradient(left, ${colors.bg.topBar}, ${colors.bg.topBarLight});
  background-image: linear-gradient(90deg, ${colors.bg.topBar} 0, ${colors.bg.topBarLight});
  background-repeat: repeat-x;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.2);
  padding: ${layout.padding.basic};

  @media screen and (${media.large}) {
    padding: ${layout.padding.large};
  }

  @media screen and (${media.xLarge}) {
    padding: ${layout.padding.xLarge};
  }
`

export const Logo = styled.div`
  width: 50px;
  height: 3rem;
  background: url(${props => props.icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin-right: 0.5rem;
`

export const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 0;
  color: ${colors.text.topBarTitle};

  span {
    font-weight: 400;
  }
`

import styled from 'styled-components'

import { layout, media, colors } from '../styles/config'

export const Container = styled.div`
  padding-top: 4.03rem;
`

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
  background-image: -webkit-linear-gradient(
    left,
    ${colors.bg.topBar},
    ${colors.bg.topBarLight}
  );
  background-image: linear-gradient(
    90deg,
    ${colors.bg.topBar} 0,
    ${colors.bg.topBarLight}
  );
  background-repeat: repeat-x;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.2);
  padding: ${layout.padding.basic};

  @media screen and (${media.large}) {
    padding: ${layout.padding.large};
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

export const Navigation = styled.div`
  padding: ${layout.padding.basic};

  @media screen and (${media.large}) {
    padding: ${layout.padding.large};
  }
`

export const ContentHeading = styled.header`
  background-color: ${colors.bg.contentHeading};
  border-bottom: 1px solid #cfdbe2;
  padding: 0 calc(2 * ${layout.padding.element});
  padding-bottom: ${layout.padding.element};
  margin: 0 calc(${layout.padding.element} * -1);
  margin-bottom: calc(2 * ${layout.padding.element});
`

export const Heading = styled.h2`
  font-size: 1.5rem;
  line-height: 1.1;
  color: ${colors.text.heading};
  font-weight: 400;
`

export const Credits = styled.footer`
  color: ${colors.text.credits};
  margin: ${layout.margin.basic};
  /* margin-top: -3rem; */
  padding: ${layout.padding.element};
  border-radius: 0.25rem;

  @media screen and (${media.large}) {
    margin: ${layout.margin.large};
  }

  a {
    color: ${colors.text.creditsLinks};

    &:hover {
      color: ${colors.text.creditsLinksHover};
    }
  }
`

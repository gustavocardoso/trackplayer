import styled from 'styled-components'
import { darken } from 'polished'

import { layout, media, colors } from '../styles/config'
import { basicButton } from './placeholders'

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

export const ContentHeading = styled.header`
  display: flex;
  background-color: ${colors.bg.contentHeading};
  border-bottom: 1px solid #cfdbe2;
  padding: 0 calc(2 * ${layout.padding.element});
  padding-bottom: ${layout.padding.element};
  margin: 0 calc(${layout.padding.element} * -1);
  margin-bottom: calc(2 * ${layout.padding.element});
`

export const Heading = styled.h2`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-size: 1.5rem;
  color: ${colors.text.heading};
  font-weight: 400;
`

export const Navigation = styled(basicButton)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
  text-align: right;
  text-decoration: none;
  transition: all .3s ease-in-out;

  &.add-icon {
    color: ${colors.text.navigationAddButton};
    background: ${colors.bg.navigationAddButton};
    border-color: ${colors.border.navigationAddButton};
  }

  &.cancel-icon {
    color: ${colors.text.navigationCancelButton};
    background: ${colors.bg.navigationCancelButton};
    border-color: ${colors.border.navigationCancelButton};
  }

  &:hover {
    &.add-icon {
      background: ${colors.bg.navigationAddButtonHover};
      border-color: ${colors.border.navigationAddButtonHover};
    }

    &.cancel-icon {
      background: ${darken(0.15, colors.bg.navigationCancelButton)};
      border-color: ${darken(0.15, colors.border.navigationCancelButton)};
    }
  }

  &:active {
    color: ${colors.text.navigationActive};
    background: initial;
    border-color: ${colors.border.basicButton};
  }
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .action-icon {
    font-size: 2em;
    border-radius: 0.1875rem 0 0 0.1875rem;
  }
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

  @media screen and (${media.xLarge}) {
    margin: ${layout.margin.xLarge};
  }

  a {
    color: ${colors.text.creditsLinks};

    &:hover {
      color: ${colors.text.creditsLinksHover};
    }
  }
`

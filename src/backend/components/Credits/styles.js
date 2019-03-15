import styled from 'styled-components'

import { colors, layout, media } from '../../styles/config'

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

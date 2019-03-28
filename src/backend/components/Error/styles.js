import styled, { css, keyframes } from 'styled-components'

import { layout } from '../../styles/config'

export const Container = styled.div`
  padding: ${layout.padding.element};

  ${props =>
    props.show &&
    css`
      animation: ${show} 0.3s linear;
    `}
`

export const ErrorMsg = styled.p`
  font-size: 1.2rem;
  color: red;
`

const show = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

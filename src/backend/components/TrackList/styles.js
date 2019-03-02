import styled from 'styled-components'
import { colors, layout } from '../../styles/config'
import { basicContainer, basicButton } from '../../styles/placeholders'

export const Container = styled(basicContainer)`
  margin: ${layout.margin.basic};
  margin-bottom: 0;
`

export const Tracks = styled.ul`
  list-style: none;
`

export const Navigation = styled(basicButton)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 168px;
  align-self: flex-end;
  text-align: right;
  text-decoration: none;

  &:hover {
    color: ${colors.text.navigationHover};
    background: ${colors.bg.navigationHover};
    border-color: ${colors.border.navigationHover};
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

  .add-icon {
    font-size: 2em;
    border-radius: 0.1875rem 0 0 0.1875rem;
  }
`

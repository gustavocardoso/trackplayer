import styled from 'styled-components'
import { darken } from 'polished'

import { layout, colors } from '../styles/config'
import { basicButton } from './placeholders'

export const Container = styled.div`
  padding-top: 4.03rem;
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
  transition: all 0.3s ease-in-out;

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

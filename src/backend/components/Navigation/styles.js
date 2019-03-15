import styled from 'styled-components'
import { darken, lighten } from 'polished'

import { colors } from '../../styles/config'
import { basicButton } from '../../styles/placeholders'

export const Navigation = styled(basicButton)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
  text-align: right;
  text-decoration: none;
  transition: all 0.1s ease-in-out;

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
    &.add-icon {
      color: ${colors.text.navigationActive};
      border-color: ${darken(0.1, colors.border.navigationAddButtonHover)};
      background: ${darken(0.1, colors.bg.navigationAddButtonHover)};
    }

    &.cancel-icon {
      color: ${colors.text.navigationActive};
      border-color: ${darken(0.3, colors.border.navigationCancelButton)};
      background: ${darken(0.3, colors.bg.navigationCancelButton)};
    }
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

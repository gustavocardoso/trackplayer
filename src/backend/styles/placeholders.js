import styled from 'styled-components'

import { layout, media, colors } from '../styles/config'

export const basicContainer = styled.div`
  background: ${colors.bg.basicContainer};
  word-wrap: break-word;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-top-width: 3px;
  border-radius: 0.25rem;
  border-color: ${colors.border.basicContainer};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  padding: ${layout.padding.element};

  @media screen and (${media.large}) {
    margin: ${layout.margin.large};
  }

  @media screen and (${media.xLarge}) {
    margin: ${layout.margin.xLarge};
  }
`

export const basicTrackContainer = styled.li`
  border-bottom: 1px solid ${colors.border.basicTrackContainer};
  margin-bottom: ${layout.margin.element};
  padding: ${layout.padding.element};
  padding-bottom: calc(2 * ${layout.padding.element});

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`

export const basicButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8125rem;
  font-weight: 400;
  color: ${colors.text.basicButton};
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: ${colors.bg.basicButton};
  border: 1px solid ${colors.border.basicButton};
  line-height: 1.52857;
  -webkit-appearance: none;
  outline: none !important;
  padding: 0.375rem 1rem;
  border-radius: 0.1875rem;
`

export const ovalButton = styled(basicButton)`
  border-radius: 3rem;
`

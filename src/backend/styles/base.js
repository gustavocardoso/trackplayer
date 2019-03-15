import styled from 'styled-components'

import { layout, colors } from '../styles/config'

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

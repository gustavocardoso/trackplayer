import styled from 'styled-components'
import { colors, layout } from '../../styles/config'
import { basicContainer } from '../../styles/placeholders'

export const Container = styled(basicContainer)`
  margin: ${layout.margin.basic};
  margin-bottom: 0;
`

export const Tracks = styled.ul`
  list-style: none;
`

export const LogMessage = styled.p`
  font-size: 1em;
  color: ${colors.text.logMessage};
  /* font-weight: 700; */
  margin: 1rem;
`

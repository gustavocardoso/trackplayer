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

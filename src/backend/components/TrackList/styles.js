import styled from 'styled-components'

import { layout } from '../../styles/config'
import { basicContainer } from '../../styles/placeholders'

export const Container = styled(basicContainer)`
  margin: ${layout.margin.basic};
  margin-bottom: 0;
`

export const Tracks = styled.ul`
  list-style: none;
`

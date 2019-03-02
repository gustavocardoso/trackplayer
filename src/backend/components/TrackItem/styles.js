import styled from 'styled-components'
import { darken } from 'polished'

import { layout, colors } from '../../styles/config'
import { basicTrackContainer, basicButton, ovalButton } from '../../styles/placeholders'

export const Container = styled(basicTrackContainer)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const Icon = styled.div`
  width: 56px;
  height: 56px;
  background: ${colors.bg.trackIcon};
  border-radius: 0.5rem;
  margin-right: ${layout.margin.element};
`

export const IconImage = styled.div`
  width: 56px;
  height: 56px;
  background: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50%;
  opacity: 0.5;
`

export const Title = styled.h2`
  font-size: 1.2rem;
  color: ${colors.text.trackTitle};
`

export const Meta = styled.div`
  width: 100%;
`

export const Info = styled.span`
  display: inline-block;
  font-size: 1rem;
  color: ${colors.text.trackInfo};
  margin-right: ${layout.margin.element};
`

export const StatusBadge = styled(ovalButton)`
  color: ${colors.text.statusBadge};
  background: ${props => (props.status === 'active' ? `${colors.bg.activeButton}` : `${colors.bg.inactiveButton}`)};
  border-color: ${props => (props.status === 'active' ? `${colors.border.activeButton}` : `${colors.border.inactiveButton}`)};
  justify-self: flex-end;
`

export const ActionButton = styled(basicButton)`
  color: ${colors.text.statusBadge};
  background: ${props => (props.action === 'edit' ? `${colors.bg.editButton}` : `${colors.bg.deleteButton}`)};
  border-color: ${props => (props.action === 'edit' ? `${colors.border.editButton}` : `${colors.border.deleteButton}`)};
  display: flex;
  align-items: center;
  margin-left: calc(${layout.margin.element} / 2);
  justify-self: flex-end;
  cursor: pointer;

  &:hover {
    background: ${props => (props.action === 'edit' ? `${darken(0.15, colors.bg.editButtonHover)}` : `${darken(0.15, colors.bg.deleteButton)}`)};
    border-color: ${props => (props.action === 'edit' ? `${darken(0.15, colors.border.editButtonHover)}` : `${darken(0.15, colors.border.deleteButton)}`)};
  }
`

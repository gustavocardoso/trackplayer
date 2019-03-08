import styled from 'styled-components'
import { darken } from 'polished'

import { layout, colors } from '../../styles/config'
import {
  basicTrackContainer,
  basicButton,
  ovalButton
} from '../../styles/placeholders'

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
  color: ${props =>
    props.status === 'active'
      ? `${colors.text.statusBadgeActive}`
      : `${colors.text.statusBadgeInactive}`};
  border: 0;
  background: transparent;
  justify-self: flex-end;
  padding: 0;
`

export const ActionButton = styled(basicButton)`
  color: ${colors.text.actionButton};
  display: flex;
  align-items: center;
  margin-left: calc(${layout.margin.element});
  justify-self: flex-end;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${colors.text.actionButtonHover};
    background: ${props =>
    props.action === 'edit'
      ? `${colors.bg.editButtonHover}`
      : `${colors.bg.deleteButtonHover}`};
    border-color: ${props =>
    props.action === 'edit'
      ? `${colors.border.editButtonHover}`
      : `${colors.border.deleteButtonHover}`};
  }
`

export const ActionButtonsGroup = styled.div`
  display: flex;
`

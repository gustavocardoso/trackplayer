import styled from 'styled-components'
import { darken } from 'polished'

import { fonts, colors, layout, media } from '../../../styles/config'
import { basicContainer, basicButton } from '../../../styles/placeholders'

export { ContentHeading, Heading, Navigation, IconContainer } from '../../../styles/base'

export const Container = styled(basicContainer)`
  margin: ${layout.margin.basic};
  margin-bottom: 0;
`

export const TrackForm = styled.form`
  padding: ${layout.padding.element};
`

const basicInput = styled.input`
  display: block;
  padding: 0.375rem 1rem;
  font-family: ${fonts.mainFont};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.52857;
  color: ${colors.text.input};
  background-color: ${colors.bg.input};
  background-clip: padding-box;
  border: 1px solid ${colors.border.input};
  border-radius: 0.25rem;
  -webkit-transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:focus {
    outline: 0;
    border-color: ${colors.border.inputFocus};
  }

  &::placeholder {
    color: ${darken(0.1, '#cfdbe2')};
  }
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: calc(1.5 * ${layout.margin.element});

  @media screen and (${media.large}) {
    flex-direction: row;
    align-items: center;
  }

  &.no-label {
    padding-left: 0;

    @media screen and (${media.large}) {
      padding-left: 20%;
    }
  }
`

export const FormLabel = styled.label`
  width: 100%;
  max-width: 100%;
  font-size: inherit;
  font-weight: 700;
  line-height: 1.52857;
  padding-top: calc(0.375rem + 1px);
  padding-bottom: calc(0.375rem + 1px);
  margin-bottom: 0;

  @media screen and (${media.large}) {
    width: 20%;
  }

  &.check-label {
    width: auto;
    max-width: auto;
    display: flex;
    align-items: center;
    cursor: pointer;

    .check-icon {
      position: absolute;
      top: -3px;
      left: -3px;
      color: transparent;
      transition: all 0.3s ease-in-out;
    }
  }
`

export const CheckBoxIconContainer = styled.span`
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 22px;
  height: 22px;
  border-radius: 4px;
  border: 1px solid ${colors.border.input};
  margin-right: 5px;
  text-align: center;
  transition: all 0.3s ease-in-out;
`

export const FormInput = styled(basicInput)`
  &.flexible-input {
    width: 100%;

    @media screen and (${media.large}) {
      width: 80%;
    }
  }

  &.volume-range {
    width: 80%;
  }
`

export const Status = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;

  &:checked + .icon-container {
    border-color: ${colors.border.inputCheckboxActive};

    & .check-icon {
      color: ${colors.text.inputCheckboxActive};
    }
  }

  &:focus + .icon-container {
    border-color: ${colors.border.inputCheckboxActive};
  }
`

export const InsertButton = styled(basicButton)`
  cursor: pointer;
  color: ${colors.text.insertButtonEnabled};
  background: ${colors.bg.insertButtonEnabled};
  border-color: ${colors.border.insertButtonEnabled};
  padding: ${layout.padding.element};
  transition: all 0.3s ease-in-out;

  &:disabled {
    color: ${colors.text.insertButtonDisabled};
    background: ${colors.bg.insertButtonDisabled};
    border-color: ${colors.border.insertButtonDisabled};
  }
`

export const RangeDataList = styled.datalist``

export const DataListOption = styled.option``

export const RangeValue = styled(basicButton)`
  font-size: 1rem;
  font-weight: 700;
  color: ${colors.text.rangeValue};
  margin-left: 1rem;
  background: ${colors.bg.rangeValue};
`

export const RangeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 0;

  @media screen and (${media.large}) {
    padding-left: 2rem;
  }
`

export const RequiredField = styled.span`
  &:before {
    display: inline-block;
    content: '${props => props.text}';
    font-size: .8rem;
    font-weight: 400;
    color: ${colors.text.requiredField};
    margin-left: .5em;

    @media screen and (${media.large}) {
      display: block;
      margin-left: 0;
    }
  }
`

import styled from 'styled-components'

import { media } from '../../styles/config'

export const Container = styled.div`
  display: block;
  height: 24px;
  border-radius: 0.2rem;
  border: 1px solid #e9ecef;
  background-color: #fff;
  margin: 1rem 0 1rem 0;

  @media screen and (${media.large}) {
    margin-left: 20%;
  }
`

export const Progress = styled.div`
  width: ${props => props.progress}%;
  height: 24px;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: #23b7e5;
  background-image: linear-gradient(
    45deg,
    hsla(0, 0%, 100%, 0.15) 25%,
    transparent 0,
    transparent 50%,
    hsla(0, 0%, 100%, 0.15) 0,
    hsla(0, 0%, 100%, 0.15) 75%,
    transparent 0,
    transparent
  );
  background-size: 1rem 1rem;
  transition: width 0.3s ease;

  &.upload-error {
    background-color: red;
  }
`

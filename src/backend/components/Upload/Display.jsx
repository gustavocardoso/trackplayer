import React from 'react'
import { MdCheckCircle } from 'react-icons/md'

import * as S from './styles'

import LoadBar from '../Load/Bar'

const UploadDisplay = ({ filename, uploadProgress, uploadError, uploadErrorMessage }) => {
  console.log(filename)
  console.log('Prgress', uploadProgress)
  console.log(uploadError)
  const message = uploadError ? uploadErrorMessage : filename
  return (
    <>
      <S.UploadDisplay>
        <LoadBar progress={uploadProgress} error={uploadError} />
        <MdCheckCircle size={24} /> <S.UploadedFileName>{message}</S.UploadedFileName>
      </S.UploadDisplay>
    </>
  )
}

export default UploadDisplay

import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
})

export const fileApi = axios.create({
  baseURL: process.env.REACT_APP_FILE_API_BASE_URL
})

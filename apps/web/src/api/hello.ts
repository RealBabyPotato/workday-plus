import { apiGet } from './client'

export type HelloResponse = {
  message: string
  project: string
  frontend_hint: string
}

export function fetchHello() {
  return apiGet<HelloResponse>('/api/hello')
}

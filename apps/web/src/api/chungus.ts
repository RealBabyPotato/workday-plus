import { apiGet } from './client'

export type ChungusResponse = {
  msg: string
  description: string
  count: number
}

export function fetchChungus() {
  return apiGet<ChungusResponse>('/api/chungus')
}

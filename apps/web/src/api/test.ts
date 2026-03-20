import { apiGet } from './client'

export type TestResponse = {
    id: number
    title: string
}

export function fetchTest(postId: Number) {
    return apiGet<TestResponse>(`/api/test/${postId}`)
}
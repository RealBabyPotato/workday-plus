const defaultApiBaseUrl = 'http://127.0.0.1:8000'

export const apiBaseUrl =
  import.meta.env.VITE_API_BASE_URL?.trim() || defaultApiBaseUrl

export async function apiGet<T>(path: string): Promise<T> {
  const response = await fetch(`${apiBaseUrl}${path}`)

  if (!response.ok) {
    throw new Error(`request failed: ${response.status}`)
  }

  return (await response.json()) as T
}

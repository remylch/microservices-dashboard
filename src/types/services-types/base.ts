export type BaseApiResponseType<T> = {
  timestamp: string
  statusCode: number
  status: string
  message: string
  data: T
}

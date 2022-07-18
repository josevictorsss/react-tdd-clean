import { AxiosHttpClient } from '@/infra/http/axiosHttpClient/axiosHttpClient'

export const makeAxiosHttpClient = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

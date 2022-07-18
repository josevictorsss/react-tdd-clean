import { RemoteAuthentication } from '@/data/useCases/authentication/remoteAuthentication'
import { Authentication } from '@/domain/useCases'
import { makeApiUrl } from '@/main/factories/http/apiUrlFactory'
import { makeAxiosHttpClient } from '@/main/factories/http/axiosHttpClientFactory'

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(makeApiUrl('/login'), makeAxiosHttpClient())
}

import { LocalSaveAccessToken } from '@/data/useCases/saveAccessToken/localSaveAccessToken'
import { SaveAccessToken } from '@/domain/useCases'
import { makeLocalStorageAdapter } from '../../cache/localStorageAdapterFactory'

export const makeLocalSaveAccessToken = (): SaveAccessToken => {
  return new LocalSaveAccessToken(makeLocalStorageAdapter())
}

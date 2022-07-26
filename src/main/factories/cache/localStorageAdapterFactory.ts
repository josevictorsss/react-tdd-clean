import { SetStorage } from '@/data/protocols/cache/setStorage'
import { LocalStorageAdapter } from '@/infra/cache/localStorageAdapter'

export const makeLocalStorageAdapter = (): SetStorage => {
  return new LocalStorageAdapter()
}

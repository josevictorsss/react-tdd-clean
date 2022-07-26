import { SetStorage } from '@/data/protocols/cache/setStorage'

export class LocalStorageAdapter implements SetStorage {
  async set (key: string, value: any): Promise<void> {
    await localStorage.setItem(key, value)
  }
}

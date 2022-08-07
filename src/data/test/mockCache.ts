/* eslint-disable @typescript-eslint/require-await */
import { SetStorage } from '../protocols/cache/setStorage'

export class SetStorageMock implements SetStorage {
  key: string;
  value: any;

  async set (key: string, value: any): Promise<void> {
    this.key = key
    this.value = value
  }
}

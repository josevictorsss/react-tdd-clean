/* eslint-disable @typescript-eslint/require-await */
import { SaveAccessToken } from '@/domain/useCases/saveAccessToken'

export class SaveAccessTokenMock implements SaveAccessToken {
  accessToken: string

  async save (accessToken: string): Promise<void> {
    this.accessToken = accessToken
  }
}

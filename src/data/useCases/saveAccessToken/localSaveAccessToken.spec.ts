/* eslint-disable @typescript-eslint/require-await */
import { SetStorageSpy } from '@/data/test/mockStorage'
import { LocalSaveAccessToken } from './localSaveAccessToken'
import faker from 'faker'

describe('LocalSaveAccessToken', () => {
  test('Shoud call SetStorage with correct value', async () => {
    const setStorageSpy = new SetStorageSpy()
    const sut = new LocalSaveAccessToken(setStorageSpy)
    const accessToken = faker.random.uuid()
    await sut.save(accessToken)
    expect(setStorageSpy.key).toBe('accessToken')
    expect(setStorageSpy.value).toBe(accessToken)
  })
})

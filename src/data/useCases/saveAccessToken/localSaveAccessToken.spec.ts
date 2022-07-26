/* eslint-disable @typescript-eslint/require-await */
import { SetStorageMock } from '@/data/test/mockStorage'
import { LocalSaveAccessToken } from './localSaveAccessToken'
import faker from 'faker'

type SutTypes = {
  sut: LocalSaveAccessToken
  setStorageMock: SetStorageMock
}

const makeSut = (): SutTypes => {
  const setStorageMock = new SetStorageMock()
  const sut = new LocalSaveAccessToken(setStorageMock)
  return { sut, setStorageMock }
}

describe('LocalSaveAccessToken', () => {
  test('Shoud call SetStorage with correct value', async () => {
    const { sut, setStorageMock } = makeSut()
    const accessToken = faker.random.uuid()
    await sut.save(accessToken)
    expect(setStorageMock.key).toBe('accessToken')
    expect(setStorageMock.value).toBe(accessToken)
  })
})

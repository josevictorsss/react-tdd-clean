import { HttpPostClientSpy } from '../../test/mockHttpClient'
import { RemoteAuthentication } from './remoteAuthentication'
import faker from 'faker'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('Remote auth', () => {
  test('Shoud call HttpPostClient with correct Url', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut()
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})

import { HttpPostClientSpy } from '../../test/mockHttpClient'
import { RemoteAuthentication } from './remoteAuthentication'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
};

const makeSut = (url: string = 'anyUrl'): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('Remote auth', () => {
  test('Shoud call HttpPostClient with correct Url', async () => {
    const url = 'anyUrl'
    const { sut, httpPostClientSpy } = makeSut()
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})

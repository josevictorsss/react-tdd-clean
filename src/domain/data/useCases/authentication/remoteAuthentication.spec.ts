import { HttpPostClientSpy } from '../../test/mockHttpClient';
import { RemoteAuthentication } from './remoteAuthentication';

describe('Remote auth', () => {
  test('Shoud call HttpPostClient with correct Url', async () => {
    const url = 'any-url';
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});

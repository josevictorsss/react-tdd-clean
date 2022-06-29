import { HttpPostClient } from 'domain/data/protocols/http/httpPostClient';
import { RemoteAuthentication } from './remoteAuthentication';

describe('Remote auth', () => {
  test('Shoud call HttpPostClient with correct Url', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string;
      async post(url: string): Promise<void> {
        this.url = url;
        return Promise.resolve();
      }
    }
    const url = 'any-url';
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});

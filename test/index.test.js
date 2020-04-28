import { router } from '../src/routes';

const useSpy = jest.fn();
const listenSpy = jest.fn();

describe('should test server configuration', () => {
  beforeEach(() => {
    jest.doMock('express', () => {
      return () => ({
        use: useSpy,
        listen: listenSpy
      });
    });
  });

  test('should call get fn', () => {
    require('../src/index.js');
    expect(useSpy).toHaveBeenCalledWith(router);
  });

  test('should call listen fn', () => {
    require('../src/index.js');
    expect(listenSpy).toHaveBeenCalled();
  });
});

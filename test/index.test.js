const getSpy = jest.fn();
const listenSpy = jest.fn();

describe('should test server configuration', () => {
  beforeEach(() => {
    jest.doMock('express', () => {
      return () => ({
        get: getSpy,
        listen: listenSpy
      });
    });
  });

  test('should call get fn', () => {
    require('../src/index.js');
    expect(getSpy).toHaveBeenCalled();
  });

  test('should call listen fn', () => {
    require('../src/index.js');
    expect(listenSpy).toHaveBeenCalled();
  });
});

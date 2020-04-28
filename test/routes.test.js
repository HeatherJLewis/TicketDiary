const getSpy = jest.fn();

jest.doMock('express', () => {
  return {
    Router() {
      return {
        get: getSpy
      };
    }
  };
});

describe('should test router', () => {
  require('../src/routes.js');
  test('should test get POSTS', () => {
    expect(getSpy).toHaveBeenCalled();
  });
});

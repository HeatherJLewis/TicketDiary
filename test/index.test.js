import { router } from '../src/routes';

const mockUse = jest.fn();
const mockListen = jest.fn();

describe('Express server in index.js', () => {
	beforeEach(() => {
		jest.doMock('express', () => {
			return () => ({
				use: mockUse,
				listen: mockListen
			});
		});
	});

	it.only('should call use', () => {
		require('../src/index.js');
		expect(mockUse).toHaveBeenCalledWith(router);
	});

	it('should call listen', () => {
		require('../src/index.js');
		expect(mockListen).toHaveBeenCalled();
	});
});

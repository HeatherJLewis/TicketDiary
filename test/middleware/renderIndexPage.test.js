import renderIndexPage from '../../src/middleware/renderIndexPage';
const nodeMocksHttp = require('node-mocks-http');

describe('renderIndexPage', () => {
	let fakeRequest;
	let fakeResponse;
	let spyResponseRender;

	beforeEach(() => {
		fakeRequest = nodeMocksHttp.createRequest();
		fakeResponse = nodeMocksHttp.createResponse();
		spyResponseRender = jest.spyOn(fakeResponse, 'render');
	});

	it('should call response.render', () => {
		renderIndexPage(fakeRequest, fakeResponse);

		expect(spyResponseRender).toHaveBeenCalled();
	});

	it('should render expected template', () => {
		renderIndexPage(fakeRequest, fakeResponse);

		expect(spyResponseRender).toHaveBeenCalledWith('index');
	});
});

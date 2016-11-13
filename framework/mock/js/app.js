require.config({
	baseUrl: 'js',
	paths:{
		app:'app',
		mock:'../../static/mock/mock'
	}
});

require(['app/testMock'],function(testMock){
	testMock.test();
});
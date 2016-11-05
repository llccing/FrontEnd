define(['mock'], function(Mock) {
	var result = document.getElementById('result');
    function demo1() {
        var data = Mock.mock({
            'list|1-10': [{
                'id|+1': 1
            }]
        });
        result.innerHTML += JSON.stringify(data, null, 4);
    }

    function setImage(){
    	 Mock.Random.image('200x100', '#50B347', '#FFF', 'Mock.js')
    }

    return {
        test: demo1
    };
});

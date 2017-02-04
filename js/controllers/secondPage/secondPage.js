app.controller('secondPageController', function($rootScope, $scope, $http, $timeout, customService) {
    
    
    $scope.clock = {
        now: new Date()
    };

    var updateClock = function() {
        $scope.clock.now = new Date()
    };

    // setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
    // 由 setInterval() 返回的 ID 值可用作 clearInterval() 方法的参数。
    setInterval(function() {
        $scope.$apply(updateClock);
    }, 1000);

    updateClock();

});
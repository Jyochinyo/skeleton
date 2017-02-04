app.controller('filterController', function($rootScope, $scope, $http, $timeout, $filter, customService) {

    $scope.uppercaseText = "abcde";

    $scope.lowercaseText = $filter('lowercase')('ABcde');

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

    $scope.isCapitalized = function(str) {
        //toUpperCase() 将所有的小写字母转换成大写
        return str[0] == str[0].toUpperCase();
    };
});
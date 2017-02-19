app.controller('playGroundController', function($rootScope, $scope, $http, $timeout, apiKey, customService) {


    console.log("look here",apiKey);
    apiKey = 234;
    console.log("look here again",apiKey);

    $scope.testStr = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1#testPage";

    $scope.testArr =  $scope.testStr.split("#")

    

    for (var i = 0; i < $scope.testArr.length; i++) {
        console.log($scope.testArr[i]);
    }
    
    
});
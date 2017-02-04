app.controller('homePageController', function($rootScope, $scope, $http, $timeout, customService) {
    
    

});



app.controller('HeaderController', function ($rootScope, $scope, $http, $timeout, customService) {

    $scope.titleClick = function () {
        alert(123);
    };
});

app.controller('SidebarController', function ($rootScope, $scope, $http, $timeout,$state, customService) {
    
    $scope.goPageClick = function (tag) {
        if (tag == 1) {
            $state.go('homePage.firstPage');
        } else if (tag == 2) {
            $state.go('homePage.secondPage');
        } else if (tag == 3) {
            $state.go('homePage.filter');
        } else if (tag == 4) {
            $state.go('homePage.formCheck');
        }
        
    };
});
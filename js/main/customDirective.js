
app
    .directive('testDirective', function () {
        return { 
            restrict: "EA",
            templateUrl: 'tpl/directives/testDirective.html',
            replace: true,
            controller: function($scope,$http,$state,$timeout){
                $scope.directiveTitle = "我是一条指令";
            }
        }
    });


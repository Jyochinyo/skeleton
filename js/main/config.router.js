/**
 * Config for the router
 */
app
    .config(['$locationProvider', '$httpProvider', function ($locationProvider, $httpProvider) {
        // $httpProvider.defaults.cache = $cacheFactory('myCache',{capacity: 20})   
        // initialize get if not there
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};    
        }    
        // disable IE ajax request caching
        // 清除ie数据请求缓存
        $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
        // extra
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';     
        $httpProvider.interceptors.push(function ($q, $rootScope, $location) {
                return {
                    'request': function(config) {       //请求拦截
                        if(window.sessionStorage.userToken){
                            config.headers.tokenId = window.sessionStorage.userToken;
                        }
                        return config;
                    },
                    'responseError': function (rejection) {     //错误响应拦截
                        var status = rejection.status;
                        var config = rejection.config;
                        var method = config.method;
                        var url = config.url;

                        if (status == 401) {
                            ('您没有地址:' + url + "的权限.")
                        } else if (status == 911) {
                            // window.location = getRootPath() + "/index";//返回应用登录页面
                        } else {
                            $rootScope.error = method + " on " + url + " failed with status " + status;
                        }

                        return $q.reject(rejection);
                    },
                    'response': function (response) {   //成功响应拦截
                        return response;
                    }
                };
            }
        );
    }])
    
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // Redirect any unmatched url
    $urlRouterProvider.otherwise('/homePage.html');  
    
    $stateProvider

        // homePage
        .state('homePage', {
            url: "/homePage.html",
            templateUrl: "tpl/controllers/homePage/homePage.html",            
            data: {pageTitle: '首页'},
            controller: "homePageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'myApp',
                        files: [
                        	'js/controllers/homePage/homePage.js'
                        ] 
                    });
                }]
            }
        })

        // 第一页
        .state('homePage.firstPage', {
            url: "/firstPage.html",
            templateUrl: "tpl/controllers/firstPage/firstPage.html",            
            data: {pageTitle: '第一页'},
            controller: "firstPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'myApp',
                        files: [
                        	'js/controllers/firstPage/firstPage.js'
                        ] 
                    });
                }]
            }
        })

        // 第一页
        .state('homePage.secondPage', {
            url: "/secondPage.html",
            templateUrl: "tpl/controllers/secondPage/secondPage.html",            
            data: {pageTitle: '第二页'},
            controller: "secondPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'myApp',
                        files: [
                        	'js/controllers/secondPage/secondPage.js'
                        ] 
                    });
                }]
            }
        })

        // filter
        .state('homePage.filter', {
            url: "/filter.html",
            templateUrl: "tpl/controllers/filter/filter.html",            
            data: {pageTitle: '过滤器'},
            controller: "filterController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'myApp',
                        files: [
                        	'js/controllers/filter/filter.js'
                        ] 
                    });
                }]
            }
        })

        // 表单验证
        // formCheck
        .state('homePage.formCheck', {
            url: "/formCheck.html",
            templateUrl: "tpl/controllers/formCheck/formCheck.html",            
            data: {pageTitle: '表单验证'},
            controller: "formCheckController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'myApp',
                        files: [
                        	'js/controllers/formCheck/formCheck.js'
                        ] 
                    });
                }]
            }
        })

        // 指令
        // directive
        .state('homePage.directive', {
            url: "/directive.html",
            templateUrl: "tpl/controllers/directive/directive.html",            
            data: {pageTitle: '指令'},
            controller: "directiveController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'myApp',
                        files: [
                        	'js/controllers/directive/directive.js'
                        ] 
                    });
                }]
            }
        })

        // 服务
        // directive
        .state('homePage.service', {
            url: "/service.html",
            templateUrl: "tpl/controllers/service/service.html",            
            data: {pageTitle: '服务'},
            controller: "serviceController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'myApp',
                        files: [
                        	'js/controllers/service/service.js'
                        ] 
                    });
                }]
            }
        })

        // 游乐园
        // playGround
        .state('homePage.playGround', {
            url: "/playGround.html",
            templateUrl: "tpl/controllers/playGround/playGround.html",            
            data: {pageTitle: '游乐园'},
            controller: "playGroundController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'myApp',
                        files: [
                        	'js/controllers/playGround/playGround.js'
                        ] 
                    });
                }]
            }
        })

}]);

app.run(
        ['$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
                $rootScope.$on("$routeChangeStart", function (event, next, current) {
                    console.log(next.originalPath)
                });
            }
        ]
    )
    .run(['$rootScope', '$window', '$location', '$log', function ($rootScope, $window, $location, $log) {
        $rootScope.username = $window.username;
        $rootScope.previewUrl = $window.previewUrl;
        $rootScope.hasRole = function (role) {

            if (roles === undefined) {
                return false;
            }

            for (var i = 0; i < roles.length; i++) {
                if (roles[i] == role)
                    return true;
            }

            return false;
        };
    }]);

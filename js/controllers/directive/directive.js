app.controller('directiveController', function($rootScope, $scope, $http, $timeout, apiKey, customService) {


    console.log("look here",apiKey);
    apiKey = 234;
    console.log("look here again",apiKey);
    
    $scope.testArr = [
        // 一对一
        {company:["上海分公司1"],code:["a12345"],name:["张三1"],p09no:["a123"],p09name:["jay1"],tramCode:["a5657"],teamName:["团队名称1"],ship: ["一对一"],chanxian: ["产线中支1"],shouxian:["上海分公司本级5"],area:["职场1"]},
        // 一对多
        {company:["上海分公司2"],code:["b12345"],name:["张三2"],p09no:["b123"],p09name:["jay2"],tramCode:["b5657"],teamName:["团队名称2"],ship: ["一对多"],chanxian: ["产线中支2"],shouxian:["上海分公司本级6","上海分公司本级7"],area:["职场3","职场2"]},
        // 多对一
        {company:["上海分公司3","上海分公司4"],code:["c12345","d12345"],name:["张三3","张三4"],p09no:["c123","d123"],p09name:["jay3","jay4"],tramCode:["c5657","d5657"],teamName:["团队名称3","团队名称4"],ship: ["多对一","多对一"],chanxian: ["产线中支3","产线中支4"],shouxian:["上海分公司本级8"],area:["职场4"]},
    ];

    $scope.testList = [
            {
                salersBases: [
                    {
                        salerId: 123,
                        branchCode: "3010100",
                        salerCode: "SHHJC10038",
                        salerName: "明",
                        status: "20",
                        p09Code: "50",
                        p09Name: "蓝",
                        teamCode: "SHH10009",
                        teamName: "测试",
                        salerWorkspaceShip: "11",
                        deptgrpName: "总公司"
                    }
                ],
                salersWorkplaces: [
                    {
                        lifeDeptgrpName: "上海分公司本级",
                        lifeWorkplaceName: "上海分公司金山文化路营销服务部"
                    },
                    {
                        lifeDeptgrpName: "上海分公司本级",
                        lifeWorkplaceName: "上海分公司金山文化路营销服务部"
                    }
                ],
            },
            {
                salersBases: [
                    {
                        salerId: 123,
                        branchCode: "3010100",
                        salerCode: "SHHJC10038",
                        salerName: "明",
                        status: "20",
                        p09Code: "50",
                        p09Name: "蓝",
                        teamCode: "SHH10009",
                        teamName: "测试",
                        salerWorkspaceShip: "11",
                        deptgrpName: "总公司"
                    },
                    {
                        salerId: 123,
                        branchCode:"3010100",
                        salerCode: "SHHJC10038",
                        salerName: "明",
                        status: "20",
                        p09Code: "50",
                        p09Name: "蓝",
                        teamCode: "SHH10009",
                        teamName: "测试",
                        salerWorkspaceShip: "11",
                        deptgrpName: "总公司"
                    }
                ],
                salersWorkplaces: [
                    {
                        lifeDeptgrpName: "上海分公司本级",
                        lifeWorkplaceName: "上海分公司金山文化路营销服务部"
                    }
                ],
            }
        ]
});
var app = angular.module('app', ['ui.grid','ui.grid.pagination']);
 
app.controller('MainCtrl', ['$scope', 'uiGridConstants', function ($scope, uiGridConstants) {
    
    $scope.gridOptions = {
        enableSorting: true,
        paginationPageSizes: [25, 50, 100],
        paginationPageSize: 25,
        enableFiltering: true,
        columnDefs: [
            {
                name: 'Email',
                displayName: 'Email',
                cellTemplate: "<div class='ui-grid-cell-contents'><a href='Users/Index/{{row.entity.Email}}'>{{row.entity.Email}}</a></div>",
                sort: {
                  direction: uiGridConstants.ASC,
                  priority: 1
                }
            },
            {
                name: 'Status',
                displayName: 'Status',
                filter: {
                    type: uiGridConstants.filter.SELECT,
                    selectOptions: [
                        { value: 1, label: 'Active' },
                        { value: 2, label: 'Registered' },
                        { value: 3, label: 'Invited' }
                    ]
                }
            },
            {
                name: 'IsDisabled',
                displayName: 'Is Disabled',
                filter: {
                    type: uiGridConstants.filter.SELECT,
                    selectOptions: [
                        { value: 'true', label: 'Yes' },
                        { value: 'false', label: 'No' }
                    ]
                }
            }
        ]      
    };
 
    $scope.gridOptions.data = [
        {
            "Email": "robbie@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "moy@test.com",
            "Status": 2,
            "IsDisabled": true
        },
        {
            "Email": "andrew@test.com",
            "Status": 3,
            "IsDisabled": true
        },
        {
            "Email": "justin@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "beta@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "phil@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "patrick@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "mom@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "dad@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "xyz@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "123@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "asdfasdf@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "thanksandrew@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "youdabest@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "robbie@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "moy@test.com",
            "Status": 2,
            "IsDisabled": true
        },
        {
            "Email": "andrew@test.com",
            "Status": 3,
            "IsDisabled": true
        },
        {
            "Email": "justin@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "beta@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "phil@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "patrick@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "mom@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "dad@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "xyz@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "123@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "asdfasdf@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "thanksandrew@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "youdabest@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "robbie@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "moy@test.com",
            "Status": 2,
            "IsDisabled": true
        },
        {
            "Email": "andrew@test.com",
            "Status": 3,
            "IsDisabled": true
        },
        {
            "Email": "justin@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "beta@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "phil@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "patrick@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "mom@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "dad@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "xyz@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "123@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "asdfasdf@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "thanksandrew@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "youdabest@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "robbie@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "moy@test.com",
            "Status": 2,
            "IsDisabled": true
        },
        {
            "Email": "andrew@test.com",
            "Status": 3,
            "IsDisabled": true
        },
        {
            "Email": "justin@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "beta@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "phil@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "patrick@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "mom@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "dad@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "xyz@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "123@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "asdfasdf@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "thanksandrew@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "youdabest@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "robbie@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "moy@test.com",
            "Status": 2,
            "IsDisabled": true
        },
        {
            "Email": "andrew@test.com",
            "Status": 3,
            "IsDisabled": true
        },
        {
            "Email": "justin@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "beta@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "phil@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "patrick@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "mom@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "dad@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "xyz@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "123@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "asdfasdf@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "thanksandrew@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "youdabest@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "robbie@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "moy@test.com",
            "Status": 2,
            "IsDisabled": true
        },
        {
            "Email": "andrew@test.com",
            "Status": 3,
            "IsDisabled": true
        },
        {
            "Email": "justin@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "beta@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "phil@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "patrick@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "mom@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "dad@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "xyz@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "123@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "asdfasdf@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "thanksandrew@test.com",
            "Status": 1,
            "IsDisabled": true
        },
        {
            "Email": "youdabest@test.com",
            "Status": 1,
            "IsDisabled": true
        }
    ];
}]);
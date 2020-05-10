var app = angular.module('app', ['ui.grid', 'ui.grid.pagination']);

app.controller('FoodCtrl', ['$scope', '$http', 'uiGridConstants', function ($scope, $http, uiGridConstants) {

    var paginationOptions = {
        pageNumber: 1,
        pageSize: 25,
        sort: null
    };

    $scope.gridOptions = {
        paginationPageSizes: [25, 50, 75],
        paginationPageSize: 25,
        useExternalPagination: true,
        useExternalSorting: true,
        columnDefs: [
            { name: 'name' },
            { name: 'id', enableSorting: false }
        ],
        onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
            gridApi.pagination.on.paginationChanged($scope, function (newPage, pageSize) {
                paginationOptions.pageNumber = newPage;
                paginationOptions.pageSize = pageSize;
                getPage();
            });
        }
    };

    var getPage = function () {
        $http.get('foods?page=' + paginationOptions.pageNumber + '&size=' + paginationOptions.pageSize)
            .then(function (response) {
                var data = response.data;
                $scope.gridOptions.data = response.data;
            });
    };

    getPage();
}
]);
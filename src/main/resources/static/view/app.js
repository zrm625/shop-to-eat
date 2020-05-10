var app = angular.module('app', ['ui.grid', 'ui.grid.pagination']);

app.controller('FoodCtrl', ['$scope', 'FoodService',
    function ($scope, FoodService) {
        var paginationOptions = {
            pageNumber: 1,
            pageSize: 5,
            sort: null
        };

        FoodService.getFoods(
            paginationOptions.pageNumber,
            paginationOptions.pageSize).success(function (data) {
                $scope.gridOptions.data = data.content;
                $scope.gridOptions.totalItems = data.totalElements;
            });

        $scope.gridOptions = {
            paginationPageSizes: [5, 10, 20],
            paginationPageSize: paginationOptions.pageSize,
            enableColumnMenus: false,
            useExternalPagination: true,
            columnDefs: [
                { name: 'id' },
                { name: 'name' }
            ],
            onRegisterApi: function (gridApi) {
                $scope.gridApi = gridApi;
                gridApi.pagination.on.paginationChanged(
                    $scope,
                    function (newPage, pageSize) {
                        paginationOptions.pageNumber = newPage;
                        paginationOptions.pageSize = pageSize;
                        FoodService.getFoods(newPage, pageSize)
                            .success(function (data) {
                                $scope.gridOptions.data = data.content;
                                $scope.gridOptions.totalItems = data.totalElements;
                            });
                    });
            }
        };
    }]);

app.service('FoodService', ['$http', function ($http) {

    function getFoods(pageNumber, size) {
        pageNumber = pageNumber > 0 ? pageNumber - 1 : 0;
        return $http({
            method: 'GET',
            url: 'foods?page=' + pageNumber + '&size=' + size
        });
    }
    return {
        getFoods: getFoods
    };
}]);
angular.module('todoApp', [])
    .controller('TodoListController', function ($scope, $http) {
        
        // $scope.getFile = () => {
        //     $http.get('/api/file?filename=' + $scope.fileName)
        //         .success(function (data) {
        //            sendfile(data)
        //         })
        //         .error(function (data) {
        //             console.log('Error: ' + data);
        //         });
        // };
        $scope.createUser = function () {
            $http.post('/api/user', {email:$scope.email, phone:$scope.phone})
                .success(function (data) {
                    console.log(data)
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        };
        
        $scope.restore = function () {
            $http.get('/api/restore?email=' + $scope.restoreEmail)
                .success(function () {
                    console.log(data)
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        };

    });


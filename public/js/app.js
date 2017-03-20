(function () {
    var app = angular.module('search', []);

    app.controller('searchCtrl', function ($scope, $http) {
        $scope.users = {};
        $scope.searchDB = function (type) {

            if (type == 'username' && $scope.searchUsers != "") {
                $scope.users = $scope.getHTTPResut(type, $scope.searchUsers);

            } else if (type == 'skills' && $scope.searchUsers != "") {
                $scope.users = $scope.getHTTPResut(type, $scope.searchSkills);
            }

            $scope.searchUsers = '';
            $scope.searchSkills = '';
            $scope.users = {};

        };
        $scope.getHTTPResut = function (type, qry) {
            $http.get("/users/search/" + type + "/" + qry)
                .then(function (response) {
                    if (response.data['users'].length == "") {
                        alert("No data Found");
                    } else {
                        $scope.users = response.data['users'];
                    }
                });
        }
    });
})();
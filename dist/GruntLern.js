/*! GruntLern - v0.0.0 - 2014-09-08 */var myApp = angular.module('myApp', []);

    myApp.controller('myCtrl', ['$scope', function($scope) {

        $scope.name = "emil";

    }]);

describe('myApp test', function() {
    describe('isCurentUrl', function() {
        beforeEach(module('myApp'));

        it('shuld pass', function($scope) {
            expect($scope.name).toBe('emil');
        })
    })
});
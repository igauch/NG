/*
 * Created by twj94 on 2017/8/2.
 */
app.controller('directive', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.name = 'Tobias';
    $scope.message = '';
    $scope.hideDialog = function(message) {
        $scope.message = message;
        $scope.dialogIsHidden = true;
        $timeout(function() {
            $scope.message = '';
            $scope.dialogIsHidden = false;
        }, 2000);
    };
}])
    .directive('myDialog', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                'close': '&onClose'
            },
            template: '<div class="alert">\n' +
            '<a href class="close" ng-click="close({message: \'closing for now\'})">&times;</a>\n' +
            '<div ng-transclude></div>\n' +
            '</div>\n'
        };
    });
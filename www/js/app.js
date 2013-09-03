angular.module('app', ['app.finance.controllers', 'app.components'])
    .controller('AppCtrl', function ($scope) {
        $scope.name = 'App Controller';


        var menu = {
            menuState:false,
            toggle: function(){
                    if(!this.menuState){this.menuState = true;}else{this.menuState = false;}
            }
        };

        $scope.menu = menu;

        $scope.isActive = false;

        $scope.toggleMenu = function () {
            $scope.isActive = !$scope.isActive;
        };

    });
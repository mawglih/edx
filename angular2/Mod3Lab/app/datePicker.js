(function(){
    'use strict'
    angular.module('app')
    .controller('DatepickerDemoCtrl', [
        function ($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  $scope.options = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };
    }
    ]);
})();
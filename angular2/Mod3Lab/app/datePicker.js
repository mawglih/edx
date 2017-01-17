(function(){
    'use strict'
    angular.module('app')
    .controller('DatepickerDemoCtrl', [
        function ($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  

  $scope.clear = function() {
    $scope.dt = null;
  };
  $scope.minDate = date.setDate((new Date()).getDate());
  $scope.showWeeks= false;
  
  $scope.setDate = function(year, month, day) {
  $scope.dt = new Date(year, month, day);
  };
 
    }
    ]);
})();



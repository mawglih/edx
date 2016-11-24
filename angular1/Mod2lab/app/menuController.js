app.controller('menuController',[
  '$scope', 
  function($scope){
    $scope.model = {title:'Our menu'};
    $scope.$watch('model.mainDish', function (newValue, oldValue) {
      if (newValue === 'BBQ Chicken Pizza') {
        alert('You have selected the BBQ Chicken Pizza!');
      }
    });
    
    $scope.changeMainDish = function(itemName, itemPrice){
      itemPrice = '$3.99';
      var item = {
        name : itemName,
        price : itemPrice
      };
      $scope.model.mainDish = item;
  }
}
]);
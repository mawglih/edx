app.controller('pizzaController', [
    '$scope',
    function ($scope) {
        $scope.model = { 
          title: 'Pizza Builder',
          availableToppings: ['cheese', 'pepperoni', 'bacon', 'pineapple', 'sausage',
           'ham', 'chicken', 'mushroom', 'onion', 'olives', 'green pepper'] ,
           toppings: []
        };
        
        $scope.addToppings = function (topping) {
          $scope.model.toppings.push(topping);
          $scope.model.search = null;
        }
    }
]);
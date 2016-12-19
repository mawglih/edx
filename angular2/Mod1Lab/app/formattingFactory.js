angular.module('app')
.service('formattingFactory', ['$window','$filter', formattingFactory]);
function formattingFactory($window, $filter) {

  var input = function (input) {
      if(((input.trim().split(' ').length)%2)!=0){
     vm.formatted = $filter('uppercase')(input);
     return vm.formatted;
    }
  else{
    vm.formatted = $filter('lowercase')(input);
    return vm.formatted;
}
}
}
 
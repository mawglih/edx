(function(){
'use strict'

angular.module('app')
.controller('LabController', [ 
   function () { 
      var vm = this; 
      vm.show - show;
      vm.person={
        name: 'Oleg Markoff',
        penName:  'Oleg Ivanov'
      };
      function show(){
        alert(JSON.stringify(vm.person.name));
      }
   } 
]);
})();
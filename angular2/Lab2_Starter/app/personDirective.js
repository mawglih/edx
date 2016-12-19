(function(){
    'use strict'
angular.module('app')
.directive('person', Person);
function Person() {
    var ddo = {
        restrict:'AE',
        replace: 'true',
        // scope:{
        //         persons: '=',
        //         action: '&'
        //     },
        templateUrl:'app/person.template.html'
        };
    return ddo;
};

})();
(function(){
    'use strict'
angular.module('app')
.directive('staticMessageDirective', function () {
    return{
    restrict:'EA',
    template:'<h2>This is from directive</h2>'
};

});

})();

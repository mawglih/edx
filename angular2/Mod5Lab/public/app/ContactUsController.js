(function(){
    'use strict'
    angular.module('app')
    .controller('ContactUsController', function(){
        var vm = this;
        vm.contactUs =  function (){
            alert('Contact sent!');
        };
    })
})();
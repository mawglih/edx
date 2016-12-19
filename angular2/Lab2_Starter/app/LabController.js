(function (){
    'use strict'

angular.module('app').controller('LabController', [
    function () {
        var vm = this;
        vm.show = show;
        vm.persons = [
            {
              name:'Mark Twain',
              nationality: 'American',
              dates: '1835 - 1910'  
            },
            {
                name: 'A.A.Milne',
                nationality: 'English',
                dates: '1882 - 1956'
            },
            {
                name: 'Ernest Hemingway',
                nationality: 'American',
                dates: '1899 - 1961'
            },
            {
                name: 'Charles Dickens',
                nationality: 'English',
                dates: '1812 - 1870'
            },
            {
                name: 'Jane Austin',
                nationality: 'English',
                dates: '1775 - 1817'
            },
            {
                name: 'Leo Tolstoy',
                nationality: 'Russian',
                dates: '1828 - 1910'
            }
        ];
        function show(){
            alert('Show details for: '+ vm.persons.name);
        }
        
    }
]);
})();
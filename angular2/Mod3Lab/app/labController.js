(function (){
    angular.module('app')
    .controller('LabController',[ 
    function(labController){
        var vm=this;
        vm.alerts = [];

        vm.addDanger = addDanger;
        vm.addWarning = addWarning;
        vm.dismissAlert = dismissAlert;
        vm.today = function() {
        vm.dt = new Date();
        };
       

        
        vm.dateOptions={
            showWeeks:false,
            minDate:new Date()
        };
        
        function addDanger() {
        addAlert('danger', 'Danger, Will Robinson! Danger!');
        }

        function addWarning() {
        addAlert('warning', 'Warning! Warning! Alien approaching!');
        }

        function addAlert(type, text) {
        vm.alerts.push({ type: type, text: text });
        }

        function dismissAlert(index) {
        vm.alerts.splice(index, 1);
        }
    }
    ]);
     
})();

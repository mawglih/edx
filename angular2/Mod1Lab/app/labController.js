'use strict'

angular.module('app')
.controller('sessionController', ['sessionService', 'formattingFactory',
 function (sessionService, formattingFactory) {
            
            var vm = this;
            vm.getServiceSession = function () {
              vm.model = {
                  name: sessionService.get('name'),
                  nickname: sessionService.get('nickname'),
                  status: 'Retrieved by service on ' + new Date()

              };
              console.log(vm.model.name);
              vm.upper = function(){
                return $filter('uppercase')(vm.model.name);
              }
              vm.output = function(){
              formattingFactory(vm.model.name);
              console.log(vm.output);
            };
            }
            vm.setServiceSession = function () {
              sessionService.save('name', vm.model.name);
              sessionService.save('nickname', vm.model.nickname);
              vm.getServiceSession();
            }
            vm.clearServiceSession = function () {
              sessionService.clear();
              vm.getServiceSession();
            }

            // var mySessionFactory = new sessionFactory();
            // vm.getFactorySession = getFactorySession;

            // function getFactorySession() {
            //   vm.model = {
            //     name: mySessionFactory.get('name'),
            //     nickname: mySessionFactory.get('nickname'),
            //     status: 'Retrieved by Factory on ' + new Date()
            //   };
            // }
            // vm.setFactorySession = setFactorySession;
            // function setFactorySession() {
            //   mySessionFactory.save('name', vm.model.name);
            //   mySessionFactory.save('nickname', vm.model.nickname);
            //   getFactorySession();
            // }
            // vm.clearFactorySession = clearFactorySession;
            // function clearFactorySession(){
            //   mySessionFactory.clear();
            //   getFactorySession();
            // }

  
  }
]);
angular.module('app')
.service('sessionService', ['$window', sessionService]);
    function sessionService($window) {

  this.save = save;
  function save(key, value) {
    $window.sessionStorage.setItem(key, value);
  }

  this.get = get;
  function get(key, value) {
    return $window.sessionStorage.getItem(key);
  }

  this.clear = clear;
  function clear() {
    $window.sessionStorage.clear();
  }
}

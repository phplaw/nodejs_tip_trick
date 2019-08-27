// GETTING DATA FOR ALL CONTROLLER
var app = angular.module('plunker', []);
app.run(function($rootScope) {
  $rootScope.persons = [
     {
       name : "Houssem",
       role : "Developer Advocate"
     },
     {
       name: "Clark",
       role: "Developer"
     }
  ];
})

app.controller('MainCtrl', function($scope) {
  $scope.greetings = 'Hello World !';
});

angular.module('boundless.group-template', ['ionic'])


.controller('GroupCtrl', function($scope, $timeout, $ionicModal, $ionicSideMenuDelegate) {

  $scope.tasks = [];

  // Create and load the Modal
  $ionicModal.fromTemplateUrl('new-group.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  // Called when the form is submitted
  $scope.createTask = function(task) {
    $scope.tasks.push({
      title: task.title
    });
    $scope.taskModal.hide();
    task.title = "";
  };

  // Open our new task modal
  $scope.newTask = function() {
    $scope.taskModal.show();
  };

  // Close the new task modal
  $scope.closeNewTask = function() {
    $scope.taskModal.hide();
  };

});
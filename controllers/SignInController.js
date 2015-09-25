attendance.controller('SignInCtrl', function SignInCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.signInStudent = function(student) {
    student.signedIn = true;
  };

  $scope.signOutStudent = function(student) {
    student.signedIn = false;
  };
});

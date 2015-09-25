attendance.controller('TeachersCtrl', function TeachersCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.signInStudent = function(student) {
    student.signedIn = true;
  };
});

attendance.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.StudentsFactory = StudentsFactory;

  $scope.addStudent = function(student) {
    $scope.students.push({name: $scope.studentName, signedIn: false});
    $scope.studentName = null;
  }
});

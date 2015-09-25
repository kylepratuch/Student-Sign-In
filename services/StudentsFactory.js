attendance.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [{name:"George Michael Bluth", signedIn:false},
                      {name:"Maeby Fünke", signedIn:false},
                      {name:"Steve Holt", signedIn:false}];
  return factory;
});

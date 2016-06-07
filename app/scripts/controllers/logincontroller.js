/*login panel control*/
_innoApp.controller("loginStateCtrl", ["$scope", "$http", "$location", "authentication", function($scope, $http, $location, authentication){
  
  $scope.isValid = null;
  
  var userData = [
    {"name": "user1", "passw": "pass"},
    {"name": "admin", "passw": "admin"},
    {"name": "eswar", "passw": "eswar"}    
  ];
 /* //var userData = [];
  $http({
    url:'usersdata.json',
    method:'get',
  }).success(function(resp1){
    $scope.userData = resp1;        
  console.log(userData.name);
  })*/
  

  $scope.login = function(uVal, pVal){
    //console.log("User Name: "+uVal+", Password: "+pVal);
    for( var i=0;i<userData.length;i++){
      if(userData[i].name == uVal && userData[i].passw == pVal){
        $location.url("home/page-home");
        authentication.user = uVal;
        $scope.isValid = false;
        break;
      }else{
        $scope.isValid = true;
      }
    }
  };

}]);

_innoApp.factory("authentication", function(){
  return {
    isAuthenticated: false,
    user: null

  }


});
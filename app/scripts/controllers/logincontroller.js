/*login panel control*/
_innoApp.controller("loginStateCtrl", ["$scope", "$location", "$http",  function($scope, $location, $http, authentication){
  
  $scope.isValid = null;
     $http({
    url:'usersdata.json',
    method:'get',
  }).success(function(resp){
    $scope.userData = resp; 

  });

  $scope.login = function(uVal, pVal){
    //console.log("User Name: "+uVal+", Password: "+pVal);
    for(var i=0;i<$scope.userData.length;i++){
      if($scope.userData[i].name == uVal && $scope.userData[i].passw == pVal){
        $location.url("home/home-page");
        authentication.user = uVal;
        $scope.isValid = false;
        break;
      }else{
        $scope.isValid = true;
      }
    }
  }


}]);

_innoApp.factory("authentication", function(){
  return {
    isAuthenticated: false,
    user: null

  }


});

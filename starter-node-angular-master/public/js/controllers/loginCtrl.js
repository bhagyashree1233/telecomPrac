angular.module('Login', []).controller('LoginController', function($scope) {
$scope.login={};
$scope.loginValidate=function(){
    console.log($scope.login);
}
});
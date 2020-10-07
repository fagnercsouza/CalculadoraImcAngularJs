// Convenção utilizada para ter certeza que o scopo será usada apenas dentro da função.

(function(){
    "use stricr";
    angular
        .module('app', [])
        .controller('calculaImc', function($scope){
            console.log("no scopo")
            $scope.peso = '';
            $scope.altura =  '';
            $scope.resultado = '';
            $scope.info = '';
            $scope.calculo = function(){
                
                console.log("na função")
              $scope.resultado = $scope.peso / ($scope.altura * $scope.altura)
              if($scope.resultado < 18.5){
                  $scope.info = "Abaixo do peso"
              } else if($scope.resultado < 25){
                $scope.info = "Peso normal"
              }else if($scope.resultado > 25 && $scope.resultado < 30){
                    $scope.info = "Sobrepeso"
              } else if($scope.resultado > 30){
                $scope.info = "Obesidade"
              } else{
                  $scope.resultado = "Nenhum dado informado"
              }
          }
        })



})();


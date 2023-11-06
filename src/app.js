var app = angular.module('myApp', []);

app.controller('postController', function($scope, $http) {
    $scope.posts = []; // Inicializa a variável que armazenará as postagens

    // Faz uma solicitação GET à API JSONPlaceholder para buscar postagens
    $http.get('http://marcoaraujo16-001-site1.ftempurl.com/api/section/getall')
        .then(function(response) {
            $scope.posts = response.data; // Atribui os dados recebidos à variável de escopo $scope.posts
        });
});

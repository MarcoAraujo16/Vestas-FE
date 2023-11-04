var app = angular.module('myApp', []);

app.controller('postController', function($scope, $http) {
    $scope.posts = []; // Inicializa a variável que armazenará as postagens

    // Faz uma solicitação GET à API JSONPlaceholder para buscar postagens
    $http.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(response) {
            $scope.posts = response.data; // Atribui os dados recebidos à variável de escopo $scope.posts
        });
});

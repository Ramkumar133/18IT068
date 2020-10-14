var app = angular
            .module("myModule", [])
            .controller("myController", function ($scope) {

                var technologies = [
                    { name:"BMW 310", likes:0, dislikes:0 },
                    { name: "RE Interceptor", likes: 0, dislikes: 0 },
                    { name: "RE Himalayan", likes: 0, dislikes: 0 },
                    { name: "Indianmotorcycle", likes: 0, dislikes: 0 }
                ];

                $scope.technologies = technologies;

                $scope.incrementLikes = function (technology) {
                    technology.likes++;
                };

                $scope.incrementDislikes = function (technology) {
                    technology.dislikes++;
                };
            });

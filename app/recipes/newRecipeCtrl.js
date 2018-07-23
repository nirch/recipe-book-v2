
app.controller("newRecipeCtrl", function($scope, recipes, user, $location) {

    $scope.createRecipe = function() {
        recipes.createRecipe({name: $scope.name, description: $scope.description, duration: $scope.duration, 
            ingrediants: $scope.ingrediants, steps: $scope.steps, imageUrl: $scope.image, userId: user.getActiveUser().id} ).then(function() {
                $location.path("/recipes")
            }, function(err) {
                console.log(err);
            })
    }
})
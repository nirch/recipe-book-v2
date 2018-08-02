
app.controller("newRecipeCtrl", function ($scope, recipes, user, $location) {

    // Checking if the user is logged in, if not navigating back to home page
    if (!user.isLoggedIn()) {
        $location.path("/");
        return;
    }


    $scope.createRecipe = function () {
        recipes.createRecipe({
            name: $scope.name, description: $scope.description, duration: $scope.duration,
            ingrediants: $scope.ingrediants, steps: $scope.steps, imageUrl: $scope.image.dataURL, userId: user.getActiveUser().id
        }).then(function () {
            $location.path("/recipes")
        }, function (err) {
            console.log(err);
        })
    }
})
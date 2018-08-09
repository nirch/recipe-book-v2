
app.controller('recipeGalleryCtrl', function($scope, user, $location, recipes) {

    // Checking if the user is logged in, if not navigating back to home page
    if (!user.isLoggedIn()) {
        $location.path("/");
        return;
    }

    recipes.getActiveUserRecipes().then(function(recipes) {
        $scope.recipes = recipes;
        $scope.$apply();    // Using apply only becuase getActiveUserRecipes uses async keyword
    }, function(err) {
        console.log(err);
    });
})
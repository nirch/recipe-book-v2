
app.controller('recipeGalleryCtrl', function($scope, user, $location) {

    // Checking if the user is logged in, if not navigating back to home page
    if (!user.isLoggedIn()) {
        $location.path("/");
    }

    $scope.test = "dkdkd";

    $scope.arr = [1,2,2,3,3,3,2,2,2,2,2,2,2,2,2,2,2];
})
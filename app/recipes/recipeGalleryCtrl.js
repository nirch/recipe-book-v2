
app.controller('recipeGalleryCtrl', function($scope, user, $location) {

    // Checking if the user is logged in, if not navigating back to home page
    if (!user.isLoggedIn()) {
        $location.path("/");
    }

    $scope.test = "dkdkd";

    $scope.arr = [1,2,2,3,3,3,2,2,2,2,2,2,2,2,2,2,2];


    $scope.recipes = [{
        "id": 1,
        "name": "Shakshuka",
        "description": "An amazing egg dish",
        "duration": 40,
        "ingrediants": "Eggs, Tomattos, Garlic",
        "steps": "Heat the pan, put the eggs",
        "imageUrl": "https://www.onceuponachef.com/images/2017/06/Shakshuka_-2.jpg",
        "userId": 1
    },
    {
        "id": 2,
        "name": "Shakshuka",
        "description": "An amazing egg dish",
        "duration": 40,
        "ingrediants": "Eggs, Tomattos, Garlic",
        "steps": "Heat the pan, put the eggs",
        "imageUrl": "https://www.onceuponachef.com/images/2017/06/Shakshuka_-2.jpg",
        "userId": 1
    },
    {
        "id": 3,
        "name": "Shakshuka",
        "description": "An amazing egg dish",
        "duration": 40,
        "ingrediants": "Eggs, Tomattos, Garlic",
        "steps": "Heat the pan, put the eggs",
        "imageUrl": "https://www.onceuponachef.com/images/2017/06/Shakshuka_-2.jpg",
        "userId": 1
    },
    {
        "id": 4,
        "name": "Shakshuka",
        "description": "An amazing egg dish",
        "duration": 40,
        "ingrediants": "Eggs, Tomattos, Garlic",
        "steps": "Heat the pan, put the eggs",
        "imageUrl": "https://www.onceuponachef.com/images/2017/06/Shakshuka_-2.jpg",
        "userId": 1
    }];
})
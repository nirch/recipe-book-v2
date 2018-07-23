
app.factory("recipes", function($http, $q, user) {

    function Recipe(plainRecipe) {
        this.id = plainRecipe.id;
        this.name = plainRecipe.name;
        this.description = plainRecipe.description;
        this.duration = plainRecipe.duration;
        this.ingrediants = plainRecipe.ingrediants;
        this.steps = plainRecipe.steps;
        this.imageUrl = plainRecipe.imageUrl;
        this.userId = plainRecipe.userId;
    }

    function getActiveUserRecipes() {
        var async = $q.defer();
        
        var recipesUrl = "http://my-json-server.typicode.com/nirch/recipe-book-v2/recipes?userId=" + user.getActiveUser().id;
        $http.get(recipesUrl).then(function(response) {
            var recipes = [];
            response.data.forEach(function(recipe) {
                recipes.push(new Recipe(recipe));
            })
            async.resolve(recipes);
        }, function(err) {
            async.reject(err);
        });

        return async.promise;
    }

    return {
        getActiveUserRecipes: getActiveUserRecipes
    }


})
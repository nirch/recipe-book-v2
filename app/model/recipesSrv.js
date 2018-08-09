
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


    // function getActiveUserRecipes() {
    //     var async = $q.defer();
        
    //     var recipesUrl = "https://json-server-heroku-jourxcdhlf.now.sh/recipes?userId=" + user.getActiveUser().id;
    //     $http.get(recipesUrl).then(function(response) {
    //         var recipes = [];
    //         response.data.forEach(function(recipe) {
    //             recipes.push(new Recipe(recipe));
    //         })
    //         async.resolve(recipes);
    //     }, function(err) {
    //         async.reject(err);
    //     });

    //     return async.promise;
    // }


    // NOTE: this function uses advnaced ES7 functionallity: async and await. See above function version without this functionality
    async function getActiveUserRecipes() {
        
        var recipesUrl = "https://json-server-heroku-jourxcdhlf.now.sh/recipes?userId=" + user.getActiveUser().id;
        var response = await $http.get(recipesUrl);
        var recipes = [];
        response.data.forEach(function(recipe) {
            recipes.push(new Recipe(recipe));
        })

        return recipes;
    }

    function createRecipe(recipe) {
        var async = $q.defer();
        
        var recipesUrl = "https://json-server-heroku-jourxcdhlf.now.sh/recipes"
        $http.post(recipesUrl, recipe).then(function(response) {
            var recipe = new Recipe(response.data);
            async.resolve(recipe);
        }, function(err) {
            async.reject(err);
        });

        return async.promise;

    }

    return {
        getActiveUserRecipes: getActiveUserRecipes,
        createRecipe: createRecipe
    }


})
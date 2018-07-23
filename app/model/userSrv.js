
app.factory('user', function($http, $q) {

    var activeUser = null;

    function User(plainUser) {
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.email = plainUser.email;
    } 


    function isLoggedIn() {
        return activeUser ? true : false;
    }

    function logout() {
        activeUser = null;
    }

    function login(email, password) {
        var async = $q.defer();

        var loginURL = "http://my-json-server.typicode.com/nirch/recipe-book-v2/users?email=" + email + "&password=" + password;
        $http.get(loginURL).then(function(response) {
            if (response.data.length > 0) {
                activeUser = new User(response.data[0]);
                async.resolve(activeUser);
            } else {
                async.reject("invalid credentials");
            }
        }, function(err) {
            async.reject(err);
        });

        return async.promise;
    }

    return {
        login: login,
        isLoggedIn: isLoggedIn,
        logout: logout
    }


})
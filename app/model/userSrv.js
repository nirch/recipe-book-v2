
app.factory('user', function($http, $q) {

    var activeUser = null;

    function User(plainUser) {
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.email = plainUser.email;
    } 


    function login(email, password) {
        var async = $q.defer();

        if (email === "nir@nir.com" && password === "123") {
            activeUser = new User({fname:"Nir", lname:"Channes", email:email})
            async.resolve(activeUser);
        } else {
            async.reject();
        }

        return async.promise;
    }

    return {
        login: login
    }


})
angular.module('app', [])
    .controller('mainCtrl', mainCtrl)


function mainCtrl($scope) {
    $scope.posts = [];
    $scope.addPic = function(user) {
        if (typeof user.url !== 'undefined') {
            console.log("user.url")
            $scope.imagePath = user.url;

        }
    }

    $scope.addPost = function() {
        $scope.posts.push({ title: $scope.formContent });
        $scope.formContent = '';
    };

    $scope.enterInfo = function() {
        var txt;
        var person = window.prompt("Please enter your desired Bio:", "Welcome to my life");
        if (person == null || person == "") {
            txt = "No bio submitted";
        }
        else {
            txt = person;
        }
        $scope.myBio = txt;
    }

}
mainCtrl.$inject = ['$scope'];

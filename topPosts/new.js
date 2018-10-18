angular.module('News', [])
    .controller('mainCtrl', ctrl)

function ctrl($scope, $https) {
    $scope.posts = [];
    $scope.addUser = function() 
    {
        $scope.name = $scope.user;
        $scope.user = '';
        console.log($scope.name);
    }
    $scope.addPost = function() {
        if (typeof $scope.name == 'undefined')
        {
            alert("You must be logged in to post");
        }
        else
        {
        $scope.posts.push({ title: $scope.formContent, upvotes: 0 });
        $scope.formContent = '';
        }
    };
    $scope.incrementUpvotes = function(post) {
        post.upvotes += 1;
    };
    $scope.decrementUpvotes = function(post) {
        console.log("yes")
        post.upvotes -= 1;
    };
    
}
ctrl.$inject = ['$scope', '$http'];

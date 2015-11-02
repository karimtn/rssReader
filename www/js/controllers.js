angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})
.controller("resultsController", function($http, $scope) {

    $scope.init = function() {
            
$http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0", "q": "http://www.matchendirect.fr/rss/foot-france-p76.xml" } })
            .success(function(data) {
                $scope.rssTitle = data.responseData.feed.title;
                $scope.rssUrl = data.responseData.feed.feedUrl;
                $scope.rssSiteUrl = data.responseData.feed.link;
                $scope.entries = data.responseData.feed.entries;
            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });
    }
    $scope.browse = function(v) {
        window.open(v, '_self');
    }

})
.controller("FeedNewsController", function($http, $scope) {

    $scope.init = function() {
$http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0", "q": "http://www.matchendirect.fr/rss/info.xml" } })
            .success(function(data) {
                $scope.rssTitle = data.responseData.feed.title;
                $scope.rssUrl = data.responseData.feed.feedUrl;
                $scope.rssSiteUrl = data.responseData.feed.link;
                $scope.entries = data.responseData.feed.entries;
            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });
    }

})

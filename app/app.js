'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])
.controller('controller', function($scope, service) {
    
    function getNext() {
        $scope.image = service.getImage(true);
    }
    
    function getPrevious() {
        $scope.image = service.getImage(false);
    }

    $scope.getNext = getNext;
    $scope.getPrevious = getPrevious;
    $scope.image = service.initialize();
})
.factory('service', function($log) {
    var imageIndex = 0;
    var images = [
            {
                name: "appleRed",
                path: "http://icons.iconarchive.com/icons/bingxueling/fruit-vegetables/256/apple-red-icon.png"
            },
            {
                name: "appleGreen",
                path: "http://icons.iconarchive.com/icons/fi3ur/fruitsalad/256/apple-icon.png" 
            }
        ];
        
    function getImage(previousOrNext) {
        if (previousOrNext) {
            if (imageIndex<images.length-1) {
                imageIndex++;
            }
        } else {
            if (imageIndex>0) {
                imageIndex--;
            }
        }
        $log.debug("Providing image");
        return images[imageIndex];
    }
    
    function initialize() {
        var image = images[imageIndex];
        imageIndex++;
        return image;
    }
    
    return {
        getImage: getImage,
        initialize: initialize
    };
});

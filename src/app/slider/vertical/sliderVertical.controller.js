'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class sliderVertical
 * @interface slider-vertical.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 17:36:01 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('sliderVertical', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "slider-vertical";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);
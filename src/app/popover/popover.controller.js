'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class popover
 * @interface popover.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:07:48 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('popover', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "popover";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);
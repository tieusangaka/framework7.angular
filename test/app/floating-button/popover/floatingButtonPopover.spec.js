/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class floatingButtonPopover
 * @interface popover.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 16:27:15 GMT+0530 (IST)
 */

describe('Unit: floatingButtonPopover', function() {

    beforeEach(module('f7.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('floatingButtonPopover', {
            $scope: scope,
            $rootScope: rootScope,
            $stateParams: stateParams,
            $log: log,
            $q: q
        });
    }));

    it('this is the sample test', function() {
        
    });

})
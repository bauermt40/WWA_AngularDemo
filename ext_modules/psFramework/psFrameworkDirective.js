(function() {
    'use strict';
    
    angular.module('psFramework')
        .directive('psFramework', psFramework);
    
    function psFramework() {
        return {
            transclude: true,
            scope: {
                
            },
            controller: 'psFrameworkController',
            templateUrl: 'ext_modules/psFramework/psFrameworkTemplate.html'
        };
    }
})();
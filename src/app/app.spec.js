/**
 * Created by emil on 14-9-8.
 */
describe('myApp test', function() {
    describe('isCurentUrl', function() {
        beforeEach(module('myApp'));

        it('shuld pass', function($scope) {
            expect($scope.name).toBe('emil');
        })
    })
});
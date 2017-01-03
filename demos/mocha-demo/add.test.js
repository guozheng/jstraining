var add = require('./add.js');
var expect = require('chai').expect;

describe('testing add', function() {
    it('1+1=2', function() {
        expect(add(1, 1)).to.be.equals(2);
    });
});

const expect = require("chai").expect;
const isOddOrEven = require('./isOddOrEven');

describe("Odd / Even Tests", function () {
        
    it('return undef for not number', () => {
        expect(isOddOrEven(2)).to.be.an('undefined');
    });
    it('return undef for not array', () => {
        expect(isOddOrEven([1,2])).to.be.an('undefined');
    });

    it('return Even correct', () => {
        expect(isOddOrEven('ivan')).to.equal('even');
    });
    it('return Odd correct', () => {
        expect(isOddOrEven('ivan4')).to.equal('odd');
    });

    it('return Multiple correct', () => {
        expect(isOddOrEven('ivan4')).to.equal('odd');
        expect(isOddOrEven('ivanrr')).to.equal('even');
            });    
});

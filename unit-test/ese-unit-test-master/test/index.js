import { describe, it } from 'mocha'
import { expect } from 'chai'
import { sumArray } from '../src/thisFunctions.js'
import m from 'moment'

describe("Verify sum of two numbers", function () {
    it("sum array verified", function () {
        const array = [1,2,3,5];
        const result = 11;
        expect(sumArray(array)).to.be.equal(result)
    });
    it("sum array with a negative verified", function () {
        const array = [1,2,-3,5];
        const result = 5;
        expect(sumArray(array)).to.be.equal(result)
    });
    it("sum array with a null element", function () {
        const array = [1,2,null,5];
        const msg = "Error, array is filled with not-number parameters";
        try {
            const result = sumArray(array);
        } catch (error) {
            expect(error).is.not.null
        }
    });
    it("sum array with a not number element", function () {
        const array = [1,2,'ciao',5];
        const msg = "Error, array is filled with not-number parameters";
        try {
            const result = sumArray(array);
        } catch (error) {
            expect(error).is.not.null
        }
    });
    it("sum with a null array", function () {
        const array = null;
        const result = "Array is null";
        expect(sumArray(array)).to.be.equal(result)
    });
    it("sum with an empty array", function () {
        const array = [];
        const result = "Array is empty";
        expect(sumArray(array)).to.be.equal(result)
    });
    it("sum with an empty array", function () {
        const array = undefined;
        const result = "Array is undefined";
        expect(sumArray(array)).to.be.equal(result)
    });
})

describe

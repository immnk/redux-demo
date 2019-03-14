import chai from "chai";
let redux = require("../src/js/redux").redux;
let NumberReducer = require("../src/js/number-reducer").NumberReducer;

const expect = chai.expect;

describe("ReduxModule", function () {
    it('should expect an object', function () {
        const ReduxModule = redux(NumberReducer);
        expect(ReduxModule).to.be.a("object");
    });
    describe('ReduxModule#getState', function () {
        it('should give me zero', function () {
            const ReduxModule = redux(NumberReducer);
            expect(ReduxModule.getState()).to.equal(0);
        });

        it('should give me one', function () {
            const ReduxModule = redux(NumberReducer);
            ReduxModule.dispatch({ type:"INCREMENT" });
            expect(ReduxModule.getState()).to.equal(1);
        });

        it('should give me two', function () {
            const ReduxModule = redux(NumberReducer);
            ReduxModule.dispatch({ type:"INCREMENT" });
            ReduxModule.dispatch({ type:"INCREMENT" });
            ReduxModule.dispatch({ type:"INCREMENT" });
            ReduxModule.dispatch({ type:"DECREMENT" });
            expect(ReduxModule.getState()).to.equal(2);
        });
    });
});
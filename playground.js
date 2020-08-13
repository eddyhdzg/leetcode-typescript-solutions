var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Runtime: 108 ms, faster than 100.00% of TypeScript online submissions for Iterator for Combination.
// Memory Usage: 46.7 MB, less than 100.00% of TypeScript online submissions for Iterator for Combination.
var CombinationIterator = /** @class */ (function () {
    function CombinationIterator(characters, combinationLength) {
        this.characters = characters;
        this.combinationLength = combinationLength;
        this.current = 0;
        this.combinations = [];
        this.generateCombinations([], this.characters.split(''));
        this.size = this.combinations.length;
    }
    CombinationIterator.prototype.generateCombinations = function (have, stack) {
        if (have === void 0) { have = []; }
        if (stack === void 0) { stack = []; }
        if (have.length >= this.combinationLength) {
            this.combinations.push(have.join(''));
            return;
        }
        var _loop_1 = function (i) {
            var newStack = stack.filter(function (_, index) { return index > i; });
            this_1.generateCombinations(__spreadArrays(have, [stack[i]]), newStack);
        };
        var this_1 = this;
        for (var i = 0; i < stack.length; i++) {
            _loop_1(i);
        }
    };
    CombinationIterator.prototype.next = function () {
        return this.combinations[this.current++];
    };
    CombinationIterator.prototype.hasNext = function () {
        return this.current < this.size;
    };
    return CombinationIterator;
}());

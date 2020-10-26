"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Lint = require("tslint");
var ts = require("typescript");
var tsutils = require("tsutils");
function isUpperCase(str) {
    return str === str.toUpperCase();
}
// checks if the passed name is PascalCased
function isPascalCased(name) {
    return isUpperCase(name[0]) && !name.includes("_") && !name.includes("-");
}
// A class name with Rule must be exported by Rule files, and it must extend `Lint.Rules.AbstractRule`. 
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // This is the method every Rule must implement.
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new ClassNamePascalCaseWalker(sourceFile, Rule.metadata.ruleName, void this.getOptions()));
    };
    // This provides configuration and information about what the Rule does and the settings to expect.
    Rule.metadata = {
        // The name of the Rule in kebab-case, this is what users will provided in tslint.json at the "rules" section to add this Rule to the project.
        ruleName: "class-name-pascal-case",
        // Describes what the Rule does.
        description: "Enforces PascalCased class and interface names.",
        optionsDescription: "Not configurable.",
        options: null,
        type: "style",
        typescriptOnly: false
    };
    // This provides the text description to be displayed when the lint Rule is failed by the class.
    Rule.FAILURE_STRING = "Class name must be in pascal case";
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var ClassNamePascalCaseWalker = /** @class */ (function (_super) {
    __extends(ClassNamePascalCaseWalker, _super);
    function ClassNamePascalCaseWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassNamePascalCaseWalker.prototype.walk = function (sourceFile) {
        var _this = this;
        var cb = function (node) {
            if ((tsutils.isClassLikeDeclaration(node) && node.name !== undefined) ||
                tsutils.isInterfaceDeclaration(node)) {
                if (!isPascalCased(node.name.text)) {
                    _this.addFailureAtNode(node.name, Rule.FAILURE_STRING);
                }
            }
            return ts.forEachChild(node, cb);
        };
        return ts.forEachChild(sourceFile, cb);
    };
    return ClassNamePascalCaseWalker;
}(Lint.AbstractWalker));

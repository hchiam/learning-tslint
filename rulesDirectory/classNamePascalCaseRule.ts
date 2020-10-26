import * as Lint from "tslint";
import * as ts from "typescript";
import * as tsutils from "tsutils";

function isUpperCase(str) {
  return str === str.toUpperCase();
}

function isPascalCased(name) {
  return isUpperCase(name[0]) && !name.includes("_") && !name.includes("-");
}

// A class name with Rule must be exported by Rule files, and it must extend `Lint.Rules.AbstractRule`.
export class Rule extends Lint.Rules.AbstractRule {
  // This provides configuration and information about what the Rule does and the settings to expect.
  public static metadata: Lint.IRuleMetadata = {
    // The name of the Rule in kebab-case, this is what users will provided in tslint.json at the "rules" section to add this Rule to the project.
    ruleName: "class-name-pascal-case",

    // Describes what the Rule does.
    description: "Enforces PascalCased class and interface names.",
    optionsDescription: "Not configurable.",
    options: null,
    type: "style",
    typescriptOnly: false,
  };

  // This provides the text description to be displayed when the lint Rule is failed by the class.
  public static FAILURE_STRING = "Class name must be in pascal case";

  // This is the method every Rule must implement.
  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return this.applyWithWalker(
      new ClassNamePascalCaseWalker(
        sourceFile,
        Rule.metadata.ruleName,
        void this.getOptions()
      )
    );
  }
}

class ClassNamePascalCaseWalker extends Lint.AbstractWalker {
  public walk(sourceFile: ts.SourceFile) {
    const cb = (node: ts.Node): void => {
      if (
        (tsutils.isClassLikeDeclaration(node) && node.name !== undefined) ||
        tsutils.isInterfaceDeclaration(node)
      ) {
        if (!isPascalCased(node.name.text)) {
          this.addFailureAtNode(node.name, Rule.FAILURE_STRING);
        }
      }
      return ts.forEachChild(node, cb);
    };

    return ts.forEachChild(sourceFile, cb);
  }
}

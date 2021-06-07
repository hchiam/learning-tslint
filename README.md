# Learning TSLint

Just one of the things I'm learning. <https://github.com/hchiam/learning>

Followed this tutorial: <https://blog.bitsrc.io/extending-tslint-to-add-custom-rules-b30ca96158ee?gi=31845781f87c>

Another example for reference: <https://github.com/JKillian/tslint-custom-rule-example/blob/master/src/noNumberPremadeRule.ts>

Example: <https://www.npmjs.com/package/learning-tslint>

```bash
npm install -g tslint typescript
npm install --save-dev learning-tslint
tslint -c tslint.json code-to-compile.ts
```

## From scratch

```bash
npm init -y
npm install typescript tslint tsutils jest ts-jest @types/jest @types/node
```

And then:

```bash
touch index.js # and add in code to refer to files inside /rulesDirectory
mkdir rulesDirectory
cd rulesDirectory
touch classNamePascalCaseRule.ts
tsc classNamePascalCaseRule.ts
```

And finally:

```bash
npm publish
```

And then to use it (in another folder):

```bash
npm install -g tslint typescript # or: yarn global add tslint typescript
touch tslint.json # or touch tsconfig.json
# then see the folder /try-using-it
tslint -c tslint.json code-to-compile.ts
```

## Starting by testing out this repo

Triple-click the following to select all:

```bash
git clone https://github.com/hchiam/learning-tslint.git; cd learning-tslint; npm install;
```

## Notes

- Rule identifier `ruleName`: kebab-case, and correspond to rule file name (minus "Rule" at the end).
- Rule file name: camelCase, end name with "Rule".
- Exported class: just named `Rule`.
- Exported class: `extends Lint.Rules.AbstractRule`.

## Test example

<https://github.com/JKillian/tslint-custom-rule-example/blob/master/test/no-number-premade/test.ts.lint>

## You might also like

https://github.com/hchiam/learning-lint-staged

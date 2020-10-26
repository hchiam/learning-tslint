# Learning TSLint

Just one of the things I'm learning. <https://github.com/hchiam/learning>

Followed this tutorial: <https://blog.bitsrc.io/extending-tslint-to-add-custom-rules-b30ca96158ee?gi=31845781f87c>

Another example for reference: <https://github.com/JKillian/tslint-custom-rule-example/blob/master/src/noNumberPremadeRule.ts>

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

## Starting by testing out this repo <!-- Replace "template"s and "# and then ..."s in this section -->

Triple-click the following to select all:

```bash
git clone https://github.com/hchiam/learning-tslint.git; cd learning-tslint; npm install; # and then ...
```

## Notes

- Rule identifier `ruleName`: kebab-case, and correspond to rule file name (minus "Rule" at the end).
- Rule file name: camelCase, end name with "Rule".
- Exported class: just named `Rule`.
- Exported class: `extends Lint.Rules.AbstractRule`.

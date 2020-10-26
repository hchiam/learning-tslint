# Try using the npm package `learning-tslint`

```bash
npm init
npm install -g tslint typescript # or: yarn global add tslint typescript
npm i --save-dev learning-tslint # will install it and tslint from package.json
touch tslint.json # and fill it in
```

```bash
tslint -c tslint.json code-to-compile.ts
```

Which outputs this:

```text
code-to-compile.ts:1:14
ERROR: 1:14  class-name  Class name must be in pascal case
```

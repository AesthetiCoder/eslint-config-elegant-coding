<img src="./asset/illustration/wave_header.svg" alt="wave" width="100%" align="center"/>

<h1 id="eslint-config-elegant-coding">
  <img src="./asset/icon/gear.svg" alt="Gear icon" width="20px" />
  Eslint elegant coder configuration
</h1>

---

<pre align="center">
  <a href="#instalation">📦 SETUP</a> • <a href="#configuration">⚙️ CONFIGURATION</a> • <a href="#features">️️️🛰️ FEATURES</a>
</pre>

---

<img src="./asset/icon/cover.svg" alt="cover" width="100%" align="center" />

<br />

<div align="center">
  <img src="./asset/badget/eslint_badget.svg" height="32px" />
</div>

---

<h2 id="about">
  <img src="./asset/icon/information.svg" alt="Information icon" width="20px" />
  About
</h2>

<table border>
<tr>
<td>

This GitHub repository offers a powerful ESLint configuration to elevate your coding experience.  Proactively identify and fix potential errors before they cause issues, preventing runtime failures and streamlining your development workflow.

The configuration enforces consistent coding style and best practices, making your codebase easier to understand, modify, and collaborate on in the long run. It's built to be adaptable, allowing you to fine-tune the rules to your project's specific needs. Leverage a curated set of pre-configured ESLint rules, easily add or remove rules for further customization, and benefit from clear documentation that explains the reasoning behind each rule.

<p align="right">(<a href="#eslint-config-elegant-coding">⬆️ back to top</a>)</p>
</td>
</tr>
</table>

---

<h2>
  <img src="./asset/icon/book.svg" alt="Book icon" width="20px" />
  Table of content
</h2>

- [<img src="./asset/icon/information.svg" width="12px" /> About](#about)
- [<img src="./asset/icon/satellite.svg" width="12px" /> Features](#features)
- [<img src="./asset/icon/thunder.svg" width="12px" /> Requirements](#requirements)
- [<img src="./asset/icon/package.svg" width="12px" /> Installation](#installation)
- [<img src="./asset/icon/rocket.svg" width="12px" /> Usage](#usage)
- [<img src="./asset/icon/gear.svg" width="12px" /> Configuration](#configuration)

<p align="right">(<a href="#eslint-config-elegant-coding">back to top</a>)</p>

---

<h2 id="features">
  <img src="./asset/icon/satellite.svg" alt="Satellite icon" width="20px" />
  Features
</h2>

- <img src="./asset/icon/eslint.svg" width="20px"/> `Eslint` - Eslint linter
- <img src="./asset/icon/astro.svg" width="20px"/> `Astro` - Catch errors and write awesome Astro components!
- <img src="./asset/icon/github.svg" width="20px"/> `Github` - Github rules for javascript errors
- <img src="./asset/icon/html.svg" width="20px"/> `Html` - Keep your HTML files tidy and consistent.
- <img src="./asset/icon/import.svg" width="20px"/> `Import` - Make your imports easy to find and manage.
- <img src="./asset/icon/javascript.svg" width="20px"/> `Javascript` - Write clean and maintainable JavaScript code.
- <img src="./asset/icon/json.svg" width="20px"/> `Json` - Ensure your JSON data is well-structured.
- <img src="./asset/icon/a11y.svg" width="20px"/> `Jsx a11y` -  Write code that's accessible to everyone.
- <img src="./asset/icon/node.svg" width="20px"/> `Node` - Follow recommended practices for Node.js environments.
- <img src="./asset/icon/perfectionist.svg" width="20px"/> `Perfectionist` -  Go beyond the basics with stricter code quality checks.
- <img src="./asset/icon/promise.svg" width="20px"/> `Promise` - Write clear and easy-to-understand promises.
- <img src="./asset/icon/qwik.svg" width="20px"/> `Qwik` - Build high-quality Qwik components.
- <img src="./asset/icon/regex.svg" width="20px"/> `Regex` - Craft powerful and maintainable regular expressions.
- <img src="./asset/icon/security.svg" width="20px"/> `Security` - Identify potential security vulnerabilities.
- <img src="./asset/icon/solid.svg" width="20px"/> `Solid` -  Write robust Solid components with confidence.
- <img src="./asset/icon/sonar.svg" width="20px"/> `Sonar` - Sonar eslint rules for javascript
- <img src="./asset/icon/stylistic.svg" width="20px"/> `Stylistic` - Improve readability and maintainability with stylistic rules.
- <img src="./asset/icon/typescript.svg" width="20px"/> `Typescript` -  Enforce type safety and keep your code clear.
- <img src="./asset/icon/unicorn.svg" width="20px"/> `Unicorn` - Leverage advanced rules for an extra quality boost.
- <img src="./asset/icon/yml.svg" width="20px"/> `Yaml` - Keep your YAML files clean and consistent.

---

<h2 id="requirements">
  <img src="./asset/icon/thunder.svg" alt="Thunder icon" width="20px" />
  Requirements
</h2>

- <img src="./asset/icon/node.svg" width="12px"/> node >= **18.16.0**
- <img src="./asset/icon/eslint.svg" width="12px"/> eslint >= **8.40**

<p align="right">(<a href="#eslint-config-elegant-coding">back to top</a>)</p>

---

<h2 id="installation">
  <img src="./asset/icon/package.svg" alt="Package icon" width="20px" />
  Installation
</h2>

Run this command to install eslint and the plugin.

<h3><img src="./asset/icon/bun.svg" width="20px"/> Bun</h3>

```bash
bun i -D eslint eslint-config-elegant-coding
```

<h3><img src="./asset/icon/pnpm.svg" width="20px"/> Pnpm</h3>

```bash
pnpm i -D eslint eslint-config-elegant-coding
```

<h3><img src="./asset/icon/yarn.svg" width="20px"/> Yarn</h3>

```bash
yarn i -D eslint eslint-config-elegant-coding
```

<h3><img src="./asset/icon/npm.svg" width="20px"/> Npm</h3>

```bash
npm i -D eslint eslint-config-elegant-coding
```

<p align="right">(<a href="#eslint-config-elegant-coding">back to top</a>)</p>

---

<h2 id="usage">
  <img src="./asset/icon/rocket.svg" alt="Rocket icon" width="20px" />
  Usage
</h2>

To use this plugin put in your repositorie you need to create an `eslint.config.js` file and add this lines of code.

```ts
  import elegantCoding from 'eslint-config-elegant-coding';

  export default elegantCoding();
```

<p align="right">(<a href="#eslint-config-elegant-coding">back to top</a>)</p>

---

<h2 id="configuration">
  <img src="./asset/icon/gear.svg" alt="Gear icon" width="20px" />
  Configuration
</h2>

Extra settings that can be added.

```ts
  import elegantCoding from 'eslint-config-elegant-coding';

  export default elegantCoding({
    // This line enables ESLint rules for YAML files.
    yml: true,

    // This line enables ESLint rules for Qwik components.
    qwik: true,

    // This line enables ESLint rules for HTML files.
    html: true,

    // This line enables ESLint rules for JSON files.
    json: true,

    // This line enables ESLint rules for Solid components.
    solid: true,

    // This line enables ESLint rules for Astro components.
    astro: true,

    // This line specifies a file to ignore from linting.
    // In this case, 'postcss.config.cjs' will not be processed by ESLint.
    ignore: [ 'postcss.config.cjs' ],

    // This line enables ESLint rules for accessibility in JSX code.
    jsxA11y: true,

    // This line enables ESLint rules for stylistic concerns in your code.
    stylistic: true,

    // This line enables ESLint rules for TypeScript files.
    typescript: true,
  });
```

<p align="right">(<a href="#eslint-config-elegant-coding">back to top</a>)</p>


<img src="./asset/illustration/wave_footer.svg" alt="wave" width="100%" align="center"/>
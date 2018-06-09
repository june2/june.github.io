## React-bootstrap4-sass

**[Adding a CSS Preprocessor (Sass, Less etc.)](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)**


1. Install the command-line interface for Sass, the package to run tasks in parallel and Bootstrap 4.
```
$ yarn add node-sass-chokidar npm-run-all bootstrap
```

2. Create folder Inside your project
```
  $ mkdir src/styles
```

3. Add the new tasks in the package.json
```
"scripts": {
  "build-css": "node-sass-chokidar --include-path ./src/styles --include-path ./node_modules src/styles/ -o src/styles/",
  "watch-css": "npm run build-css && node-sass-chokidar --include-path ./src/styles --include-path ./node_modules src/styles/ -o src/styles --watch --recursive",
  "start-js": "react-scripts start",
  "start": "npm-run-all -p watch-css start-js",
  "build": "npm run build-css && react-scripts build",
  "test": "react-scripts test --env=jsdom",
  "eject": "react-scripts eject"
}
```

4. Create sass files
```
// My Bootstrap configuration
@import 'custom_bootstrap';

// Bootstrap library
@import 'bootstrap/scss/bootstrap';

// Here you can import more .scss files or write scss code.
```

5. Add custom variables
```
// New color
$new-color: #ad9a5b;

// Array of colors from _variables.scss
$theme-colors: (
  primary: $new-color,
  secondary: $gray-600,
  success: $green,
  info: $cyan,
  warning: $yellow,
  danger: $red,
  light: $gray-100,
  dark: $gray-800
) !default;
```

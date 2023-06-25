# Angular 7 and Bootstrap 4 source (scss)

[Test online (Stackblitz)](https://stackblitz.com/github/FrontEndNotes/angular-bootstrap-scss)

- Generate new project choosing `scss` as default

```
> ng g angular-bootstrap
```

- Install bootstrap as a node dependency

```
> npm i bootstrap@latest
```

- Go to the `node_modules/bootstrap/scss/bootstrap.scss` file and copy all the content inside
- Go to `src/styles.scss` and paste
- Prepend every `@import` string with `~bootstrap/scss/` i.e.

```CSS
// before
@import "functions";
...

// after
@import "~bootstrap/scss/functions";
...
```

- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Simplify `@import` statements by using preprocessor options (optional)

- Open `angular.json` file
- Append `"stylePreprocessorOptions"` after `"architect" > "build" > "options" > "styles"`

```json
"styles": [
    "src/styles.scss"
],
"stylePreprocessorOptions": {
    "includePaths": [
        "node_modules/bootstrap/scss"
    ]
},
```

- Stop the server `[Ctrl]+[C]` then run again `ng serve` to apply changes. Navigate to `http://localhost:4200/`.

## Remarks

### Default bootstrap settings

To override Bootstrap settings (variables) put code before Bootstrap's `@import` statements - examples provided in `styles.scss`

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

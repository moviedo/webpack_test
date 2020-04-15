# Frontend Development Process

List and description of tools used for the frontend development proces.

## Tools

1. Webpack - asset build tool
1. [laravel-mix](https://laravel-mix.com/) - webpack wrapper that allows for easier/simplier webpack configuration setup.

    1. Comes with babel transpiler, just add .babelrc.json for customization.
    1. Postcss and autoprefixer, just add .browserslistrc for customization.
    1. Less/Sass/Scss/Css support.
    1. Allows for easily extending base webpack config for more customization, checkout the eslint setup.
    1. Easy browser reload, on changes, with browser sync. Makes working with non-node backends super easy.
1. angularjs - older frontend library.
# AngularComponents

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.

This project use the [Bootstrap Grid v4.3.0](https://getbootstrap.com/docs/4.3/layout/grid/) and [Bootstrap Reboot v4.3.0](https://getbootstrap.com/docs/4.3/content/reboot/).

# Start playground

This project have a components playground for test, only is required `clone repository`, run `npm install` and `npm start`.

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Use lib in other repository

For use the library in other repository you should copy the folder `dist/components-lib` to your repository. 

> TODO: The coping process will not be necessary when the project is published in a npm repository.

In your module/s you should import and export the `ComponentsModule` from the `components-lib`.

Also you need include the commons styles in the `angular.json` on your build `"styles": ["components-lib/src/scss/styles.scss"]`.

# Internal use and development

## Development server 

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build components lib

Run `npm run build-lib` to build the components library on `dist/components-lib`.

> TODO: Publish this lib to npm repository.

## Build playground

Run `npm run build` to build the project in production mode, this instruction also compile the components library.

Run `npm run build-dev` to build the project in development mode.

The build artifacts will be stored in the `dist/components-playground` directory.

Run `npm run serve-dist` to serve the compiled source of `dist/components-playground` folder.

## Lint

Run `npm run lint` to linting source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). ONLY INITIAL BOOTSTRAP APP IS TESTED

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

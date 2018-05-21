# Proxima

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## dependencies for merging firebase with angular
npm install  <br>
Run npm install angularfire2 firebase --save <br>
npm start <br>

## Technologies

Angularjs,  Chrome extension, firebase, AWS

##How it works
A website that allows users to choose a apartment with the shortest commute distance to workplace, school, supermarket, gym, etc. User can select multiple locations he often visits and visualize it on our platform. go to chrome browser, type chrome://extensions in the url bar, click LOAD UNPACKED, upload the Chrome extension we created, go to https://www.zillow.com/ and choose a apartment you like, click the house icon(our chrome extensions) in the top right of the browser, save address prompt button pop up, click it to save the address of that apartment to our firebase database. you also need to add your school address and work address on our website and our web app will calculate and show you the distance and the time cost from that apartment to your school and work place. It will help you choose the most convenient

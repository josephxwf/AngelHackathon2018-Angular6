# Smalltown2_Angular6_PHP_MySQL  
(http://www.josephxwf.com/smalltown/)

![alt tag](/smalltown.gif)

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


## Install bootstrap
https://stackoverflow.com/questions/43557321/angular-4-how-to-include-bootstrap

## Fix bootstrap include error
https://stackoverflow.com/questions/45683192/angular-4-bootstrap-4-not-rendering-properly


## When deploy it, need add the code below to app.module.ts to switch to product mode

import {enableProdMode} from '@angular/core';
enableProdMode();


## Dependencies:
ngx-scroll-to:
https://www.npmjs.com/package/@nicky-lenaers/ngx-scroll-to

googleMaps JavaScript API:

1. add the script below to index page
<script type="text/javascript" src="//maps.googleapis.com/maps/api/js?key=AIzaSyAeSvY7QHVsmknYveEWBjWv3ZrPcGfnBr4"></script>

Maps JavaScript API:
https://developers.google.com/maps/documentation/javascript/tutorial
2. in component which use this api, add line:
   declare var google; https://stackoverflow.com/questions/42173662/typescript-error-cannot-find-name-google-in-ionic2-when-using-googlemaps-javas

install bootstrap
   https://stackoverflow.com/questions/43557321/angular-4-how-to-include-bootstrap
fix bootstrap include error
   https://stackoverflow.com/questions/45683192/angular-4-bootstrap-4-not-rendering-properly

## Technologies

   Angular6, PHP, MySQL, Chrome extension, googleMaps JavaScript API, LAMP

## How it works
   A website that allows users to choose a apartment with the shortest commute distance to workplace, school, supermarket, gym, etc. User can select multiple locations that he often visits and visualize it on our platform. go to chrome browser, type chrome://extensions in the url bar, click LOAD UNPACKED, upload the Chrome extension we created, go to https://www.zillow.com/ and click on an apartment in the rent section on zillow, and then click the house icon(our chrome extensions) in the top right of the browser, a save address prompt button will pop up, click it to save the address of that apartment to our MySQL database. You also need to add your school address or work address on our website when you create a new user account and our web app will calculate and show you the distance and the time cost from that apartment to your school and work place. It will help you to compare and choose the most convenient apartment based on commute time.

## Commands to deploy angular app to server
   1. ng build --prod --build-optimizer
   2. after step 1, a dist folder will be generated, upload all files in dist folder to S3, make sure index.php is in the root directory.
   3. change the execution right of index.html to executable and change the base tag to point to the directory you want it to be the root of your website.

## Chrome Extension
This Chrome Extension is used for our customers to get information of a perspective apartment he/she likes and show that info on our web application. It will save customers a lot of time by only one click.

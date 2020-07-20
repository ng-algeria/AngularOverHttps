# Générer les Certifs

`openssl req -newkey rsa:2048 -nodes -keyout privkey.pem -x509 -days 36500 -out certificate.csr`

`ng serve --ssl --ssl-cert certificate.pem --ssl-key privkey.pem`

`"start": "ng serve --proxy-config  --ssl --ssl-key privkey.pem --ssl-cert certificate.pem",`

proxy.json
----------
` {
  "/api": {
    "target": "https://localhost:9000",
    "secure": false
  }

}
`


# Verification du cert et la clé.

`openssl x509 -noout -modulus -in certificate.csr | openssl md5`

openssl rsa -noout -modulus -in privkey.pem| openssl md5

## Development server


Run `npm install` to install all dependencies.

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

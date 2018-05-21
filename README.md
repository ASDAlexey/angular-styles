# AngularStyles

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


#lodash 70Kb

### source-map-explorer
- node_modules/.bin/source-map-explorer dist/angular-styles/vendor.js

- ng build --prod --source-map=true
- node_modules/.bin/source-map-explorer dist/angular-styles/main.e2900f60b4ab5c17f367.js

- ng build --prod
- ng build --prod --aot

После того как браузер загрузит ваши пакеты приложений, компилятор Angular (упакованный внутри vendor.bundle.js) выполняет компиляцию шаблонов из main.bundle.js. Это называется компиляцией Just-in-Time. Этот термин означает, что компиляция происходит во время поступления пакетов в браузер.

Недостатками компиляции JIT являются:

Существует промежуток времени между пакетами загрузки и отображением пользовательского интерфейса. Это время затрачено на компиляцию JiT. В маленьком приложении это время минимально, но в больших приложениях компиляция JiT может занять несколько секунд, поэтому пользователю нужно подождать дольше, просто увидев ваше приложение.

Компилятор Angular должен быть включен в файл vendor.bundle.js, который добавляет размер вашего приложения.

Использование компиляции JiT в prod не рекомендуется, и мы хотим, чтобы шаблоны были предварительно скомпилированы в JavaScript до создания пакетов. Это то, что компиляция "Вперед" (AoT).

Преимущества компиляции AoT заключаются в следующем:

Браузер может отображать пользовательский интерфейс сразу после загрузки приложения. Нет необходимости ждать компиляции кода.

Компилятор ngc не входит в состав vendor.bundle.js, и в результате размер вашего приложения может быть меньше.

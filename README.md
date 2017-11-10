# Redux-Saga-vs-Redux-Observable
Redux-Saga-vs-Redux-Observable simple app

### Вимоги:
npm: 5.4.2

node: 8.1.2

Використовується [cancelable fetch](https://developer.mozilla.org/en-US/docs/Web/API/AbortController), тому вимоги по браузерах:

firefox 57/edge 16

щоб перевірити доступність цього методу у браузері:
[сервіс](https://fetch-abort-demo.glitch.me/)

### Вітки
Master: всі необхідні файли для Saga та Rx, демонструє роботу Saga.
Якщо цікаво побачити роботу Rx - необхідно переключитись на одноіменну вітку. Або ж просто:

Закоментувати saga middleweare і розкоментувати Observable.
src/app.js

#### p.s. даний приклад має на меті лише показати відмінності між:

-saga

-rx

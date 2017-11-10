# Redux-Saga-vs-Redux-Observable
Redux-Saga-vs-Redux-Observable simple app

Вимоги:
npm: 5.4.2

node: 8.1.2

Використовується canceleble fetch, тому вимоги по браузерах:
https://developer.mozilla.org/en-US/docs/Web/API/AbortController

firefox 57/edge 16

щоб перевірити доступність цього методу у браузері:
https://fetch-abort-demo.glitch.me/

Master: всі необхідні файли для Saga та Rx, демонструє роботу Saga.
Якщо цікаво побачити роботу Rx - необхідно переключитись на одноіменну вітку. Або ж просто:

Закоментувати saga middleweare і розкоментувати Observable.
src/app.js
p.s. даний приклад має на меті лише показати відмінності між:

-thunk

-saga

-rx

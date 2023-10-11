---
routeAlias: sdk_for_three_js
---

<svg class="float-right" width="300" height="300" fill="none" stroke-linecap="square" stroke-miterlimit="10" version="1.1" viewBox="0 0 226.77 226.77" xmlns="http://www.w3.org/2000/svg">
 <g transform="translate(8.964 4.2527)" fill-rule="evenodd" stroke="#fff" stroke-linecap="butt" stroke-linejoin="round" stroke-width="4">
  <path d="m63.02 200.61-43.213-174.94 173.23 49.874z"/>
  <path d="m106.39 50.612 21.591 87.496-86.567-24.945z"/>
  <path d="m84.91 125.03-10.724-43.465 43.008 12.346z"/>
  <path d="m63.458 38.153 10.724 43.465-43.008-12.346z"/>
  <path d="m149.47 62.93 10.724 43.465-43.008-12.346z"/>
  <path d="m84.915 125.06 10.724 43.465-43.008-12.346z"/>
 </g>
</svg>

# [AR SDK for Three.js](https://zap.works/universal-ar/threejs/)

Вы можете выбрать любой фреймвок который вам захочется, но я расскажу только о [Three.js](https://threejs.org/)

В чём плюс Three.js Во первых это большая и хорошая документация в которой вы всё рано ничего не поймёте потому что мир webGL примерно, полностью отличается от привычной web разработки). А так же у Three.js огромное комьюнити за счёт чего можно [найти решения почти любого вопроса](https://stackoverflow.com/questions/tagged/three.js). Ну и отличная поддержка фреймворка и развитие.

<br/>

-   [Документация для SDK Three.js](https://docs.zap.works/universal-ar/threejs/)
-   [Документация Three.js](https://threejs.org/docs/index.html#manual/en/introduction/Installation)
-   [Примеры проектов](https://docs.zap.works/universal-ar/threejs/example-projects/)

---

# Старт проекта

Самый простой и быстрый способ

Можно конечно и самому сделать свою сборку мечты накатить туда пакет `npm install --save @zappar/zappar-threejs` но в этом случаи вы сталкнётесь с огромным количеством проблем. Проще всего в примерах найти подходящий для задачи и уже на его основе делать то что нужно

## Возьмём к примеру [glTF Loader](https://github.com/zappar-xr/threejs-example-instant-tracking-gltf-loader/)

Тут у нас ссылка на гит хаб где находится полностью готовая сборка с примером работы SDK на Three.js Её можно без препятственно скачать, установить модули `npm i` и пользоваться сколько влезет, но только локально. Всё это гавно зачем то работает на [parcel.js](https://parceljs.org/) что тоже может вызвать ряд проблем. Но к сожалению это самый удобный вариант на сегодня.

---

# Структура проекта

Не должна у вас вызвать вопросов, но если вызывает то у меня для вас плохие новость))

Самым не понятным для вас тут будет файл [/src/index.ts](https://github.com/zappar-xr/threejs-example-instant-tracking-gltf-loader/blob/master/src/index.ts) И я бы конечно мог описать что в нём происходит, но, но в этом нет смысла если вы не знаете Three.js А если знаете то и так всё будет понятно))

И тут мы приходим к самому неожиданному, что бы делать AR нужно разбираться в Three.js Потому что из Zap вы скопируете и вставите 10 строк кода и забудете о нём. А вот остальные 70-85% кода и мучений будут связаны с Three.js

<img 
    src="/img/zap_three.svg"
    width="500" />

<br/>

> ## Вывод, учите Three.js

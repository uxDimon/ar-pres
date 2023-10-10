---
layout: center
clicks: 3
preload: false
routeAlias: what_is_ar
---

# Что такое AR

Эффект дополненной реальности достигается с помощью наложения 2х изображений.

<ul>
    <li v-click="1">Формируется кадр из камеры устройства</li>
    <li v-click="2">Затем рендерится кадр с 3d сценой</li>
    <li v-click="3">Потом на кадр из камеры накладывается кадр из 3d сцены</li>
</ul>

<div class="relative flex justify-center gap-8 mt-4">
    <img 
        v-click="[1, 3]"
         v-if="$clicks <= 2"
        src="/img/scrin.png"
        width="300" 
        height="300" />
    <img 
        v-click="[2, 3]"
        v-if="$clicks <= 2"
        src="/img/scene.png" 
        width="300" 
        height="300" />
    <img 
        v-if="$clicks >= 3"
        v-motion
        :initial="{ x: 0 }"
        :enter="{ x: 166,
            transition: {
                duration: 1200,
                type: 'keyframes',
                ease: 'easeIn',
            },
        }"
        src="/img/scrin.png"
        width="300" 
        height="300" />
    <img 
        v-if="$clicks >= 3"
        v-motion
        :initial="{ x: 0 }"
        :enter="{ x: -166,
            transition: {
                duration: 1200,
                type: 'keyframes',
                ease: 'easeIn',
            },
            }"
        src="/img/scene.png" 
        width="300" 
        height="300" />
</div>

---

# Магия дополнений реальности

Как это работает

Для создания ощущения того что наша сцена находится в реальном мире её нужно правильно позиционировать. И по сути AR это инструмент который умеет ориентироваться в пространстве и исходя из этого задаёт координаты сцене.

<br/>
<br/>

<v-clicks>

### Как AR ориентируется

</v-clicks>

<br/>

<v-clicks depth="2">

-   С помощью железа. Это доступ к специальной железке в телефоне которая сама обрабатывает все данные с гироскопов, компасов, лидеров, камер и выдаёт нормальные координаты.
-   С помощью софта. Пытается получить данные к гироскопу, компасу, геолокации, камере и т.д.

</v-clicks>

---

<img
    class="float-right"
    src="/qr/threejs_ar.png"
    width="300"
    height="300" />

# С помощью железа

Мифический [WebXR](https://immersiveweb.dev/)

Мы работаем с web а она работает через браузеры. И вот для этих браузеров создали восхитительный WebXR Device API который решить почти все наши проблемы с AR. За счет того что он получает все данные напрямую с устройства качество позиционирования очень хорошая, плюс производительность.

<br/>
<br/>
<br/>

<v-clicks>

Но тут ключевое слово браузер и [поддержка данного API](https://caniuse.com/webxr) есть только на Chrome и только в Android

### Когда нибудь но не сейчас(((

</v-clicks>

---
routeAlias: zap_ar
---

<iframe 
    v-if="$clicks <= 2"
    class="float-right"
    sandbox="allow-scripts" 
    src="https://fast.wistia.net/embed/iframe/d8rx572951" 
    frameborder="0" 
    scrolling="no"
    name="wistia_embed" 
    width="420" 
    height="250" 
    allow="fullscreen">
    </iframe>
<iframe 
    v-if="$clicks == 3"
    class="float-right"
    sandbox="allow-scripts" 
    src="https://fast.wistia.net/embed/iframe/t8ucwq40xj" 
    frameborder="0" 
    scrolling="no"
    name="wistia_embed" 
    width="420" 
    height="250" 
    allow="fullscreen">
    </iframe>
<iframe 
    v-if="$clicks >= 4"
    class="float-right"
    sandbox="allow-scripts" 
    src="https://fast.wistia.net/embed/iframe/gu9qea3z51" 
    frameborder="0" 
    scrolling="no"
    name="wistia_embed" 
    width="420" 
    height="250" 
    allow="fullscreen">
    </iframe>

# [Zap AR](https://zap.works/)

А вот это то с чем вы будете много работать)

Это платный инструмент, достаточно хорошо работающий. Имеет не плохой функционал и в принципе закрывает 100% задач которые есть у нас. Но самый большой минус он платный.

<br/>
<br/>

<v-clicks>

### Функционал

</v-clicks>

<v-clicks>

-   World tracking (Сцену можно поставить в любом месте и она будет привязана к точке в пространстве)
-   Image Tracking (Отслеживает определённое изображения и располагает сцену на нём)
-   Face Tracking (Отслеживает лицо и на нём размещает сцену)

</v-clicks>

---

# [Zapworks Studio](https://zap.works/studio/)

Сам не пробовал, пацаны рассказывали)

Так же в zap есть специальная программа с интерфейсом в который можно вполне полноценно работать. Как вариант особо упоротые дизайнеры смогут полноценно создавать ar, с возможностью полностью настроить 3d сцену, свет и выпиливать всякий функционал.

<iframe 
    class="mx-auto"
    sandbox="allow-scripts" 
    src="https://fast.wistia.net/embed/iframe/hl2xvtvm2o" 
    frameborder="0" 
    scrolling="no"
    name="wistia_embed" 
    width="530" 
    height="300" 
    allow="fullscreen">
    </iframe>

---

# [Universal AR SDK](https://zap.works/universal-ar/)

Истинный путь самурая

Программы и интересы это кончено здоров, но истина power это создавать всё на js. AR SDK это набор js библиотек с помощью которых можно взаимодействовать с 3d сценой с помощью разных [WebGL фреймворков](https://en.wikipedia.org/wiki/List_of_WebGL_frameworks).

Как говорилось раньше Zap AR это всего лишь инструмент для позиционирования сцены в пространстве. А уже рендер сцены, взаимодействие, логика, интерфейсы это всё делаем мы сами. Хотя Zap и предоставляет некоторые возможности но в основном всё придётся делать руками.

<img
    class="mx-auto"
    src="https://zapworks-home-static.s3.eu-west-1.amazonaws.com/static/v-a17814c1/img/uar/headers/uar-hero.png.r.w2160.webp"
    width="440" />

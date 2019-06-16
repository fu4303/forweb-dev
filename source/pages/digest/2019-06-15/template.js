const layout = require('../../../partials/layout/template');
const article = require('../../../partials/article/template');

const renderArticleContent = () => `
<p class="paragraph paragraph--lead">Важные новости и материалы первой половины июня 2019</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://jasonformat.com/enabling-modern-js-on-npm/">Enabling Modern JavaScript on&nbsp;npm</a></h3>
<p class="paragraph">Джейсон Миллер рассуждает о&nbsp;проблеме избыточной транспиляции кода NPM-пакетов и&nbsp;призывает сообщество к&nbsp;обсуждению возможных решений.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://web.dev/layout-instability-api/">The Layout Instability API</a></h3>
<p class="paragraph">Введение в&nbsp;Layout Instability API, позволяющий отслеживать сдвиги элементов на&nbsp;странице, вызванные внезапным появлением картинок, рекламы или динамически загружаемых виджетов.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://medium.com/p/727a856d1443">Нужны&nbsp;ли препроцессоры в&nbsp;2019 году?</a></h3>
<p class="paragraph">Людмила Мжачих сравнивает возможности и&nbsp;проблемы препроцессоров и&nbsp;нативного&nbsp;CSS.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://csswizardry.com/2019/05/self-host-your-static-assets/">Self-Host Your Static Assets</a></h3>
<p class="paragraph">Гарри Робертс рассказывает, почему статические ресурсы лучше хранить у&nbsp;себя, а&nbsp;не&nbsp;на&nbsp;публичных&nbsp;CDN.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="http://2ality.com/2019/05/unpacking-hoisting.html">Unpacking hoisting</a></h3>
<p class="paragraph">Аксель Раушмайер предлагает отказаться от&nbsp;устаревшего термина &laquo;всплытие переменных&raquo; и&nbsp;детально объясняет механизм работы объявлений переменных и&nbsp;функций в&nbsp;современном стандарте&nbsp;ES.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://mxb.dev/blog/the-css-mindset/">The CSS Mindset</a></h3>
<p class="paragraph">Для вёрстки нужен особый образ мышления, утверждает Макс Бок и&nbsp;делится идеями, ставшими для него ключом к&nbsp;пониманию&nbsp;CSS.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://youtu.be/MO8hZlgK5zc">The economics of&nbsp;open source</a></h3>
<p class="paragraph">Что не&nbsp;так с&nbsp;NPM и&nbsp;что с&nbsp;этим делать? Бывшая техдир NPM с&nbsp;объяснением и&nbsp;анонсом нового менеджера пакетов Entropic, призванного решить озвученные проблемы.</p>
`;

module.exports = (context) =>
  layout(context, article(context, renderArticleContent()));

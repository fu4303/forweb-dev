const layout = require('../../../partials/layout/template');
const article = require('../../../partials/article/template');

const renderArticleContent = () => `
<p class="paragraph paragraph--lead">Важные новости и материалы второй половины июня 2019</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://2019.stateofcss.com/">The State of&nbsp;CSS 2019</a></h3>
<p class="paragraph">Результаты опроса The State of&nbsp;CSS 2019: демография, используемые фичи/технологии/методологии, мнения и&nbsp;многое другое.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://habr.com/ru/company/ivi/blog/456854/">От&nbsp;UI-kit до&nbsp;дизайн-системы</a></h3>
<p class="paragraph">Дизайнеры онлайн-кинотеатра ivi поделились опытом реализации дизайн-системы для всех платформ.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://microsoft.github.io/just/">Just</a></h3>
<p class="paragraph">Библиотека от&nbsp;Microsoft для организации задач сборки в&nbsp;JS-проектах (по&nbsp;сути аналог Gulp) с&nbsp;возможностью скаффолдинга.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://web.dev/google-search-sw/">Bringing service workers to&nbsp;Google Search</a></h3>
<p class="paragraph">Подробный рассказ инженеров Google о&nbsp;мотивации, процессе и&nbsp;сложностях внедрения сервис-воркера на&nbsp;страницу поисковой выдачи.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://every-layout.dev/">Every Layout</a></h3>
<p class="paragraph">Практический учебник по&nbsp;вёрстке композируемых и&nbsp;надёжных UI-компонентов: от&nbsp;примитивов до&nbsp;сложных раскладок с&nbsp;примерами и&nbsp;объяснениями задач и&nbsp;решений.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://github.com/lydiahallie/javascript-questions">List of&nbsp;(Advanced) JavaScript Questions</a></h3>
<p class="paragraph">Список вопросов на&nbsp;знание JavaScript для собеседований, ответы и&nbsp;объяснения прилагаются.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://v8.dev/features/promise-combinators">Promise combinators</a></h3>
<p class="paragraph">Promise.all, Promise.race, Promise.any и&nbsp;Promise.allSettled: обзор существующих комбинаторов промисов в&nbsp;блоге V8.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://v8.dev/blog/cost-of-javascript-2019">The cost of&nbsp;JavaScript in&nbsp;2019</a></h3>
<p class="paragraph">Эдди Османи о&nbsp;том, как JS&nbsp;влияет на&nbsp;перформанс и&nbsp;где основные узкие места.</p>
`;

module.exports = (context) =>
  layout(context, article(context, renderArticleContent()));
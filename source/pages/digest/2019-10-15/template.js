const layout = require('../../../partials/layout/template');
const article = require('../../../partials/article/template');

const renderArticleContent = () => `
<p class="paragraph paragraph--lead">Важные новости и материалы первой половины октября 2019</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://davidwalsh.name/pornhub-interview">Interview with a&nbsp;Pornhub Web Developer</a></h3>
<p class="paragraph">Интервью с&nbsp;фронтендером из&nbsp;Pornhub о&nbsp;специфике работы, используемых технологиях и&nbsp;экспериментах с&nbsp;новыми браузерными&nbsp;API.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://snyk.io/blog/why-npm-lockfiles-can-be-a-security-blindspot-for-injecting-malicious-modules/">Why npm lockfiles can be&nbsp;a&nbsp;security blindspot for injecting malicious modules</a></h3>
<p class="paragraph">Лиран Тал демонстрирует атаку через локфайл и&nbsp;делится линтером локфайлов для защиты от&nbsp;таких атак.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://slack.engineering/the-gradual-design-system-how-we-built-slack-kit-8a2830484259">The Gradual Design System: How We&nbsp;Built Slack Kit</a></h3>
<p class="paragraph">Инженеры Slack о&nbsp;предпосылках и&nbsp;истории создания своей дизайн-системы.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://instagram-engineering.com/making-instagram-com-faster-part-3-cache-first-6f3f130b9669">Making Instagram.com faster: Part 3&nbsp;&mdash; cache first</a></h3>
<p class="paragraph">Как ускоряли веб-версию Instagram, часть третья: описание подхода cache-first и&nbsp;механизма слияния старых данных с&nbsp;новыми.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://habr.com/en/company/tinkoff/blog/468589/">Как организовать работу над библиотекой общих компонентов</a></h3>
<p class="paragraph">Инженеры Tinkoff поделились опытом развития библиотеки общих компонентов.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://philipwalton.com/articles/cascading-cache-invalidation/">Cascading Cache Invalidation</a></h3>
<p class="paragraph">Филип Уолтон демонстрирует неочевидную проблему в&nbsp;популярном подходе к&nbsp;кешированию и&nbsp;предлагает три решения.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://evilmartians.com/chronicles/images-done-right-web-graphics-good-to-the-last-byte-optimization-techniques">Images done right: Web graphics, good to&nbsp;the last byte</a></h3>
<p class="paragraph">Подробнейшая статья Полины Гуртовой и&nbsp;Риты Клубочкиной из&nbsp;&laquo;Злых марсиан&raquo; о&nbsp;форматах и&nbsp;оптимизации графики для веба.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://www.ishadeed.com/article/clickable-area/">Enhancing The Clickable Area Size</a></h3>
<p class="paragraph">Увеличиваем кликабельную область: Ахмад Шадид на&nbsp;примерах показывает, как избежать распространённой ошибки, портящей&nbsp;UX.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://phoboslab.org/log/2019/09/voidcall-making-of">Voidcall&nbsp;&mdash; Making of</a></h3>
<p class="paragraph">Подробный рассказ Доминика Саблевского о&nbsp;технических деталях реализации стратегии реального времени Voidcall для конкурса js13kGames, в&nbsp;котором размер игр не&nbsp;должен превышать 13&nbsp;КБ.</p>
`;

module.exports = (context) =>
  layout(context, article(context, renderArticleContent()));
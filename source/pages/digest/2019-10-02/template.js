const layout = require('../../../partials/layout/template');
const article = require('../../../partials/article/template');

const renderArticleContent = () => `
<p class="paragraph paragraph--lead">Важные новости и материалы второй половины сентября 2019</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://phabricator.wikimedia.org/phame/post/view/175/wikipedia_s_javascript_initialisation_on_a_budget/">Wikipedia&rsquo;s JavaScript initialisation on&nbsp;a&nbsp;budget</a></h3>
<p class="paragraph">Как инженеры Wikipedia добились экономии 4.3 ТБ&nbsp;трафика ежедневно: подробный рассказ об&nbsp;оптимизации основного JS-бандла сервиса.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://youtu.be/Xg-oZp0EcYc?t=25572">42</a></h3>
<p class="paragraph">Новый доклад Вадима Макишвили (автора легендарного доклада &laquo;36&raquo;) о&nbsp;том, почему и&nbsp;как личную эффективность нужно восстанавливать, а&nbsp;не&nbsp;повышать.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://slack.engineering/service-workers-at-slack-our-quest-for-faster-boot-times-and-offline-support-3492cf79c88">Service Workers at&nbsp;Slack: Our Quest for Faster Boot Times and Offline Support</a></h3>
<p class="paragraph">Инженеры Slack о&nbsp;применении сервис-воркеров для быстрой инициализации приложения и&nbsp;его работы в&nbsp;офлайне.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://slack.engineering/building-dark-mode-on-desktop-811508b5d15f">Building Dark Mode on&nbsp;Desktop</a></h3>
<p class="paragraph">Ещё один материал от&nbsp;разработчиков Slack об&nbsp;истории и&nbsp;деталях реализации тёмной темы.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://v8.dev/features/nullish-coalescing">Nullish coalescing</a></h3>
<p class="paragraph">Введение в&nbsp;новый оператор nullish coalescing, позволяющий задать альтернативу null или undefined.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://nolanlawson.com/2019/09/22/the-joy-and-challenge-of-developing-for-kaios/">The joy and challenge of&nbsp;developing for KaiOS</a></h3>
<p class="paragraph">Нолан Лоусон делится опытом разработки для второй по&nbsp;популярности в&nbsp;Индии ОС&nbsp;после Android.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://cloudfour.com/thinks/an-html-attribute-potentially-worth-4-4m-to-chipotle/">An&nbsp;HTML attribute potentially worth $4.4M to&nbsp;Chipotle</a></h3>
<p class="paragraph">История сломанной формы, демонстрирующая важность корректной поддержки автозаполнения.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://codepen.io/nlwilliams/full/JjPJewp">Fonts&nbsp;&mdash; a&nbsp;dish best served variable</a></h3>
<p class="paragraph">В&nbsp;Google Fonts появилась экспериментальная поддержка вариативных шрифтов.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://tobiasahlin.com/blog/layered-smooth-box-shadows/">Smoother & sharper shadows with layered box-shadows</a></h3>
<p class="paragraph">Обзор новой техники, позволяющей сделать тени более реалистичными.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://habr.com/en/company/yandex/blog/468165/">Как рисует браузер</a></h3>
<p class="paragraph">Запись и&nbsp;расшифровка доклада Константина Крамлиха из&nbsp;Яндекс.Браузера о&nbsp;том, что у&nbsp;браузера под капотом и&nbsp;как он&nbsp;превращает страницы в&nbsp;пиксели на&nbsp;экране.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://blog.cloudflare.com/http3-the-past-present-and-future/">HTTP/3: the past, the present, and the future</a></h3>
<p class="paragraph">Какие проблемы решает новый стандарт HTTP, где он&nbsp;поддерживается и&nbsp;как начать его использовать.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://about.gitlab.com/2019/09/30/why-we-chose-echarts/">Why we&nbsp;chose ECharts for data visualizations</a></h3>
<p class="paragraph">Инженеры GitLab о&nbsp;причинах отказа от&nbsp;D3 и&nbsp;опыте перехода на&nbsp;ECharts.</p>
`;

module.exports = (context) =>
  layout(context, article(context, renderArticleContent()));

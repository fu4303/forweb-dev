const layout = require('../../partials/layout/template');
const pagePublicationDate = require('../../partials/page-publication-date/template');

const renderPage = (context) => `
<h2 class="heading heading--1">Дайджест Форвеба</h2>

<p class="paragraph paragraph--lead">
  Новости фронтенда без шума
</p>

<p class="paragraph">
  Во&nbsp;фронтенде много хайпа и&nbsp;информационного шума. Соцсети и&nbsp;медиа перегружают нас информацией и&nbsp;вызывают <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BD%D0%B4%D1%80%D0%BE%D0%BC_%D1%83%D0%BF%D1%83%D1%89%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D1%8B%D0%B3%D0%BE%D0%B4%D1%8B">синдром упущенной выгоды</a>.
</p>

<p class="paragraph">
  Дайджест Форвеба помогает бороться с&nbsp;этим: выходит раз в&nbsp;две недели и&nbsp;содержит только стоящие внимания события и&nbsp;материалы.
</p>

<form
  class="form"
  action="https://forwebdev.us19.list-manage.com/subscribe/post?u=1e420147ab39ab295d24b7876&amp;id=3308e73dc7"
  method="post"
  target="_blank"
>
  <div class="form__row">
    <label class="label" for="email">
      Эл. почта *
    </label>

    <input class="input" type="email" name="EMAIL" id="email" required />
    <div
      style="position: absolute; left: -5000vw;"
      aria-hidden="true"
    >
      <input
        type="text"
        name="b_1e420147ab39ab295d24b7876_3308e73dc7"
        tabIndex="-1"
        value=""
      />
    </div>
  </div>

  <div class="form__row">
    <button class="button" type="submit">
      Подписаться
    </button>
  </div>
</form>

<h3 class="heading heading--2">Архив выпусков</h3>

${Array.from(context.currentPage.children)
  .map(
    ([, page]) => `
    <section style="margin: 2em 0">
      ${pagePublicationDate(page)}
      <h4 class="heading heading--3">
        <a href="${page.url}">${page.metadata.title}</a>
      </h4>
      <p class="paragraph">${page.metadata.description}</p>
    </section>
    `,
  )
  .join('<hr />')}
`;

module.exports = (context) => layout(context, renderPage(context));

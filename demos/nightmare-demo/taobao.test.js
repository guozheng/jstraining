var Nightmare = require('nightmare');
var nightmare = Nightmare({
  show: true,
  waitTimeout: 3000,
  gotoTimeout: 3000,
  loadTimeout: 4000,
  executionTimeout: 3000,
});

nightmare
  .useragent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/602.3.12 (KHTML, like Gecko) Version/10.0.2 Safari/602.3.12')
  .goto('https://world.taobao.com/')
  .type('#q', 'apple tv')
  .click('form[action*="/search"] [type=submit]')
  .wait('#spulist-grid')
  .evaluate(function () {
    return document.querySelector('#spulist-grid .grid-item .info-cont')
      .textContent.trim();
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });

const assert = require('assert');

Feature('Adding New Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Adding one riview for one restaurant', async ({ I }) => {
  I.seeElement('.restaurant__title a');

  const firstResto = locate('.restaurant__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.wait(2);
  I.scrollTo('.review__add a');
  I.click('.review__add a');

  I.wait(2);
  I.seeElement('#review-form');

  I.fillField('name', 'Agus');
  I.fillField('review', 'Tempatnya mantap');

  I.seeElement('.btn__field button');

  I.amAcceptingPopups();
  I.click('.btn__field button');

  I.wait(2);
  I.seeInPopup('Thank you! Your review has recevied');
  I.acceptPopup();

  const feedbackResto = await I.grabTextFrom('.restaurant__name');
  assert.strictEqual(feedbackResto, firstRestoTitle);
});

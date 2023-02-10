const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.content');

  I.see('No Favorite Restaurants', '.restaurant__not__found');
});

Scenario('liking and unliking one restaurant', async ({ I }) => {
  I.see('No Favorite Restaurants', '.restaurant__not__found');

  I.amOnPage('/');

  I.wait(2);
  I.scrollTo('.restaurant__title a');

  I.seeElement('.restaurant__title a');

  const firstResto = locate('.restaurant__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);

  I.click(firstResto);

  I.wait(2);
  I.scrollTo('#likeButton');
  I.seeElement('#likeButton');

  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-list');
  const likedRestoTitle = await I.grabTextFrom('.restaurant__title a');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  const firstFavoriteResto = locate('.restaurant__title a').first();
  I.click(firstFavoriteResto);

  I.seeElement('#likeButton');

  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('No Favorite Restaurants', '.restaurant__not__found');
});

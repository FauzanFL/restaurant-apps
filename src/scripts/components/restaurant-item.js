import CONFIG from '../globals/config';

class RestaurantItem extends HTMLElement {
  constructor() {
    super();
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
    <p tabindex="0" class="restaurant__rate">⭐️ ${this._restaurant.rating}</p>
    <h3 tabindex="0" class="restaurant__title skeleton"><a class="resto__link" href="/#/detail/${
      this._restaurant.id
    }">${this._restaurant.name}</a></h3>
    <div class="skeleton">
      <img class="lazyload" tabindex="0" data-src="${`${CONFIG.BASE_IMG_URL}small/${this._restaurant.pictureId}`}" alt="gambar dari ${
      this._restaurant.name
    }">
    </div>
    <p tabindex="0" class="restaurant__city skeleton">Di kota: ${
      this._restaurant.city
    }</p>
    <p tabindex="0" class="restaurant__description skeleton">${
      this._restaurant.description
    }</p>
    `;
    this.classList.add('restaurant__item');
  }
}

customElements.define('restaurant-item', RestaurantItem);

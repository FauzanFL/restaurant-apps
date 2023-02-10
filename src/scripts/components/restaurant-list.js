import './restaurant-item';

class RestaurantList extends HTMLElement {
  constructor() {
    super();
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this._restaurants.forEach((restaurant) => {
      const restaurantItemEl = document.createElement('restaurant-item');
      restaurantItemEl.restaurant = restaurant;
      this.appendChild(restaurantItemEl);
    });
    this.classList.add('restaurant__inner');
  }

  renderError(message) {
    this.innerHTML = `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('restaurant-list', RestaurantList);

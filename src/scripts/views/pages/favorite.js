import '../../components/restaurant-list';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Favorite = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Your Liked Restaurant</h2>
      <restaurant-list></restaurant-list>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    if (restaurants.length > 0) {
      const restaurantList = document.querySelector('restaurant-list');
      restaurantList.restaurants = restaurants;
    } else {
      const content = document.querySelector('.content');
      const notFoundEl = document.createElement('span');
      notFoundEl.innerText = 'No Favorite Restaurants';
      notFoundEl.classList.add('restaurant__not__found');
      content.style.textAlign = 'center';
      content.appendChild(notFoundEl);
    }

    const allSkeleton = document.querySelectorAll('.skeleton');
    allSkeleton.forEach((item) => {
      item.classList.remove('skeleton');
    });

    const linkItem = document.querySelectorAll('.resto__link');
    linkItem.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        location.assign(item.href);
      });
    });

    const loaderContainer = document.querySelector('.loader-container');
    loaderContainer.remove();
  },
};

export default Favorite;

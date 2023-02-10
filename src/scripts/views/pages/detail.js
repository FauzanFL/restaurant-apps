import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import RestaurantSource from '../../data/restaurants-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div tabindex="0" id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant,
    });

    const reviewNav = document.querySelector('.review__add a');
    reviewNav.addEventListener('click', (event) => {
      event.preventDefault();
      location.assign(reviewNav.href);
    });

    const allSkeleton = document.querySelectorAll('.skeleton');
    allSkeleton.forEach((item) => {
      item.classList.remove('skeleton');
    });

    const loaderContainer = document.querySelector('.loader-container');
    loaderContainer.remove();
  },
};

export default Detail;

import '../../components/app-bar';
import '../../components/hero-element';
import '../../components/restaurant-list';
import '../../components/contact-form';
import RestaurantSource from '../../data/restaurants-source';

const Home = {
  async render() {
    return `
      <section>
        <hero-element></hero-element>
      </section>
      <section class="content">
        <article class="restaurants">
          <h2 class="skeleton" tabindex="0">Explore Restaurants</h2>
          <restaurant-list></restaurant-list>
        </article>
      </section>
      <section class="contact-us">
        <h2 class="skeleton" tabindex="0">Contact Us</h2>
        <contact-form></contact-form>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.home();
    const restaurantList = document.querySelector('restaurant-list');
    restaurantList.restaurants = restaurants;

    const linkItem = document.querySelectorAll('.resto__link');
    linkItem.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        location.assign(item.href);
      });
    });

    const allSkeleton = document.querySelectorAll('.skeleton');
    allSkeleton.forEach((item) => {
      item.classList.remove('skeleton');
    });

    const loaderContainer = document.querySelector('.loader-container');
    loaderContainer.remove();
  },
};

export default Home;

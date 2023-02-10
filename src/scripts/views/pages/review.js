import RestaurantSource from '../../data/restaurants-source';
import UrlParser from '../../routes/url-parser';
import { createAddReviewTemplate } from '../templates/template-creator';

const Review = {
  async render() {
    return `
      <div id="review" class="review"></div>
    `;
  },
  async afterRender() {
    const reviewContainer = document.querySelector('#review');
    reviewContainer.innerHTML = createAddReviewTemplate();

    const allSkeleton = document.querySelectorAll('.skeleton');
    allSkeleton.forEach((item) => {
      item.classList.remove('skeleton');
    });

    const loaderContainer = document.querySelector('.loader-container');
    loaderContainer.remove();

    const form = document.querySelector('#review-form');
    const formBtn = document.querySelector('.btn__field button');

    formBtn.addEventListener('click', async (event) => {
      event.preventDefault();
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const newReviewer = {
        id: url.id,
        name: form.elements.name.value,
        review: form.elements.review.value,
      };
      const response = await RestaurantSource.reviewRestaurant(newReviewer);
      if (!response.error) {
        alert('Thank you! Your review has recevied');
        location.replace(`/#/detail/${url.id}`);
      } else {
        alert('Error! Cannot add review');
        location.reload();
      }
    });
  },
};

export default Review;

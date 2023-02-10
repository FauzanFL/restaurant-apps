import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__name skeleton">${restaurant.name}</h2>
  <img class="restaurant__img skeleton lazyload" src="${`${CONFIG.BASE_IMG_URL}medium/${restaurant.pictureId}`}" alt="${
  restaurant.name
}">
  <div class="restaurant__info skeleton">
    <h3>Information</h3>
    <h4>Description</h4>
    <p>${restaurant.description}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Categories</h4>
    <ul class="restaurant__categories">
    ${restaurant.categories
    .map(
      (category) => `
      <li class="category__item">${category.name}</li>
    `,
    )
    .join('\n')}
    </ul>
    <h4>Menus</h4>
    <div class="restaurant__menus">
      <div class="restaurant__foods">
        <h5>Foods</h5>
        <ul>
        ${restaurant.menus.foods
    .map(
      (food) => `
        <li>- ${food.name}</li>
        `,
    )
    .join('\n')}
        </ul>
      </div>
      <div class="restaurant__drinks">
        <h5>Drinks</h5>
        <ul>
        ${restaurant.menus.drinks
    .map(
      (drink) => `
        <li>- ${drink.name}</li>
        `,
    )
    .join('\n')}
        </ul>
      </div>
    </div>
    <h4>Rating</h4>
    <p class="restaurant__rating">⭐️ ${restaurant.rating}</p>
    <h4>Customer Reviews</h4>
    <div class="customer__review">
    ${restaurant.customerReviews
    .map(
      (customer) => `
    <div class="reviewer">
      <h5 class="review__name">${customer.name}</h5>
      <p class="review__val">${customer.review}</p>
      <span class="review__date">${customer.date}</span>
    </div>
    `,
    )
    .join('\n')}
      <div class="review__add">
        <a href="/#/review/${restaurant.id}">Berikan Review</a>
      </div>
    </div>
  </div>
`;

const createAddReviewTemplate = () => `
  <h2 class="skeleton" >Add New Review</h2>
  <form id="review-form" method="post">
  <div class="review__item">
    <label class="skeleton" for="name">Nama</label>
    <input class="skeleton" name="name" type="text" placeholder="Tuliskan nama" required>
  </div>
  <div class="review__item sekeleton">
    <label class="skeleton" for="review">Review</label>
    <textarea class="skeleton" name="review" cols="20" rows="10" placeholder="Tuliskan komentarmu..." required></textarea>
  </div>
  <div class="btn__field">
    <button class="skeleton" type="submit">Submit</button>
  </div>
  </form>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
   <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
  createAddReviewTemplate,
};

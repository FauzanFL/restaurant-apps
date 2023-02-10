class HeroElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
      <div class="hero__inner">
        <div class="hero__title skeleton">
          <p>Selamat Datang! Anda berhasil mengakses website Pinggir Jurang Resto.</p>
        </div>
        <div class="hero__tagline skeleton">
          <p>Kami menyediakan informasi dari beberapa restoran yang pasti anda sukai. Cobalah beberapa restoran yang telah
            kami sediakan!</p>
        </div>
        <picture>
          <source class="skeleton" media="(max-width: 420px)" srcset="./images/hero-image_3-small.webp" type="image/webp">
          <source class="skeleton" media="(max-width: 420px)" srcset="./images/hero-image_3-small.jpg" type="image/jpeg">
          <source class="skeleton" media="(max-width: 700px)" srcset="./images/hero-image_3-medium.webp" type="image/webp">
          <source class="skeleton" media="(max-width: 700px)" srcset="./images/hero-image_3-medium.jpg" type="image/jpeg">
          <img class="skeleton" src='./images/hero-image_3-large.jpg' 
              alt="Hero image dark">
        </picture>
      </div>
    </div>
    `;
  }
}

customElements.define('hero-element', HeroElement);

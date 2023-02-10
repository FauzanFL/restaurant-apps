class AppBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="header">
    <div class="header__inner">
      <div class="header__title">
        <h1>Pinggir Jurang Resto</h1>
      </div>

      <div class="header__nav">
        <div class="hamburger">
          <a id="hamburger" href="#" aria-label="menu">☰</a>
        </div>
        <nav id="drawer" class="nav">
          <ul class="nav__list">
            <li class="nav__item"><a href="#/home">Home</a></li>
            <li class="nav__item"><a href="#/favorite">Favorite</a></li>
            <li class="nav__item"><a href="https://www.linkedin.com/in/fauzanfl" target="_blank"
                rel="noreferrer noopener">About
                Us</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
    `;
  }
}

customElements.define('app-bar', AppBar);

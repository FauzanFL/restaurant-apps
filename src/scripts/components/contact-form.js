class ContactForm extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <form action="" class="form">
      <div class="form__item">
        <label class="skeleton" for="email">Email</label>
        <input class="skeleton" type="email" name="email" placeholder="example@gmail.com">
         </div>
      <div class="form__item">
        <label class="skeleton" for="pesan">Pesan</label>
        <textarea class="skeleton" name="pesan" id="pesan" cols="30" rows="10" placeholder="Tuliskan pesanmu.."></textarea>
      </div>
      <button class="button skeleton" name="kirim">Kirim</button>
    </form>    
    `;
  }
}

customElements.define('contact-form', ContactForm);

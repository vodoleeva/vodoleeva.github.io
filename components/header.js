class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
          <style>
            header {
                // background-image: linear-gradient(maroon, orange);
            }
          </style>
          <header>
            <h1>Adventure Addicts</h1>
            <p class="subheader">First rule of the club: talk about the club.</p>
          </header>
        `;
      }
}


customElements.define('header-component', Header);
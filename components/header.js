class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
          <style>
            
          </style>
          <header>
            <h1>Adventure Addicts</h2>
            <p>First rule of the club: talk about the club.</p>
          </header>
        `;
      }
}


customElements.define('header-component', Header);
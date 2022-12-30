class ComingTrips extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
          <style>
            
          </style>
          <div>
            
            <a href="https://vodoleeva.github.io/2023-04-07-zugspitze.html">Zugspitze</a>
            <a href="https://vodoleeva.github.io/2023-05-16-madeira.html">Madeira</a>
          </div>

        `;
      }
}


customElements.define('coming-trips', ComingTrips);
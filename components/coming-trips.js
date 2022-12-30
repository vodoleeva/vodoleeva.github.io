class ComingTrips extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
          <style>
            
          </style>
          <div>
            
            <a href="https://vodoleeva.github.io/zugspitze/2023-04-07.html">Zugspitze</a>
            <a href="https://vodoleeva.github.io/madeira/2023-05-16.html">Madeira</a>
          </div>

        `;
      }
}


customElements.define('coming-trips', ComingTrips);
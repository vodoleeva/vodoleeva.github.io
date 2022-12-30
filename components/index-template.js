class IndexTemplate extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <link rel="stylesheet" href="styles.css">
            <title>Adventure Addicts</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
        
            <script src="components/header.js" type="text/javascript" defer></script>
            <script src="components/coming-trips.js" type="text/javascript" defer></script>
        
        </head>
        
        <body>
        
            <div class="content">
                <header-component></header-component>

                123
    
        
        
            </div>
        
        </body>
        </html>
        

        `;
      }
}


customElements.define('index-template', IndexTemplate);
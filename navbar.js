// navbar.js
class AppNavbar extends HTMLElement {
  connectedCallback() {
    // This defines the shared HTML layout structure
    this.innerHTML = `    <div id="navbar">
        <a id="logo" class="nav">E-comerce.in</a>
        <a href="" class="nav">account</a>
        <a href="" class="nav">location</a>
        <a href="" class="nav">returns & order</a>
        <a href="" class="nav">cart</a>
        <input type="search" name="" id="search" placeholder="search amazon.in">
        <button id="button" type="button">search</button>
     
    </div>`;
  }
}

// Tells the browser that <app-navbar> corresponds to the code block above
customElements.define('app-navbar', AppNavbar);


class logoplz extends HTMLElement {
  connectedCallback() {
    // This defines the shared HTML layout structure
    this.innerHTML = `    <div>
        <a id="logo" class="nav">E-comerce.in</a>
    </div>`;
  }
}

// Tells the browser that <app-navbar> corresponds to the code block above
customElements.define('app-logo', logoplz);
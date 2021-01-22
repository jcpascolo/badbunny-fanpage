/* Import the LitElement base class and html helper function */
import {LitElement, html, css} from 'lit-element';

/* Create the class of the element  and extends the LitElement base class */
class Album3D extends LitElement {
  static get properties() {
    return {
      message: { type: String },
      isActive: { type: Boolean },
      songs: { type: Array }
    };
  }

  static get styles() {
    return css `
      p {
        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
      }

      .red {
        color: red;
      }

      .blue {
        color: blue;
      }
    `
  }

  constructor() {
    super();
    this.message = 'Creating my first LitElement';
    this.isActive = false;
    this.songs = ['La Noche de Anoche', 'Eso', 'Booker T'];
  }

  render() {
    return html `
      <p class="${this.isActive?'red':'blue'}">styled paragraph</p>
      <div>${this.message}</div>
      <ul>${this.songs.map(song => html`<li>${song}</li>`)}</ul>
      ${
        this.isActive ? html `Songs` : 'Nothing'
      }

      <button @click=${this.clickHandler}>Click</button>
    `;
  }

  clickHandler(event) {
    console.log(event.target);
    this.isActive = !this.isActive;
  }
}

/* Register the new element with the browser */
customElements.define('album-3d', Album3D);

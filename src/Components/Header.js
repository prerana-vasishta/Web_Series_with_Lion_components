import { html, css, LitElement } from "lit-element";
import '../lion_comp/Tabs'

export class Header extends LitElement {
  static get styles() {
    return css`
      div {
        border-radius: 30px;
        width: 100%;
        height: 70px;
        background-color: #fd5f2b;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        margin:0px 10px 30px 10px;
        h1{
        padding-top: 5px;
        }
      }
    `;
  }

  constructor() {
    super();
    this.header = "~ WEB SERIES ~";
  }

  render() {
    return html` <div>
    <h1>${this.header}</h1>
    </div> 
    
    `

  }
}

customElements.define("header-1", Header);

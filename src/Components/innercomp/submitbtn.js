import { html, css, LitElement } from "lit-element";
import "@lion/button/define"

export class Submitbtn extends LitElement {
  static get styles() {
    return css`
      lion-button {
        background-color: #f7b733;
        font-size: large;
        font-family: "Times New Roman", Times, sans-serif;
        color: rgb(0, 0, 0);
        padding: 20px 25px;
        padding-bottom: 15px;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        float: right;
        font-family: "Style Script", cursive;
        font-weight: 600;
      }
    `;
  }

  constructor() {
    super();
    this.submitbtn = "ADD";
  }

  render() {
    return html`
      <div>
        <lion-button>${this.submitbtn}</lion-button>
      </div>
    `;
  }
}
customElements.define("submit-btn", Submitbtn);

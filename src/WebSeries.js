import { html, css, LitElement } from "lit-element";
import "./Components/Header";
import './Components/InpDiv';
import './Components/DisDiv';
import './lion_comp/Tabs'

export class WebSeries extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--web-series-text-color, #000);
        margin: 0px 0px;
      }

      .grid{
        display:grid;
        grid-template-columns:2fr 3fr;
      }

      .container {
        border-radius: 25px;
        width: 90%;
        height: 620px;
        background-color: #4abdac;
        padding: 20px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        margin-left: 50px;
      }

      #wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = "click";
    this.header = "~ WEB SERIES ~";
    this.test = "sdf";
  }

  __increment() {
    this.counter += 1;
  }

  __getInput() {
    console.log(inp);
  }



  render() {
    return html`

    <lion-comp>
    
    <header-1></header-1>
    <div class = "grid">
    <inp-comp @click = ${()=> this.test = "working"} class = "container"></inp-comp>

    <dis-comp test = ${this.test} id= "wrapper"></dis-comp>
    </div>
    </lion-comp>
    `;
  }
}

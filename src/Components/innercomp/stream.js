import { html, css, LitElement } from "lit-element";
import '@lion/select/define';


export class Stream extends LitElement {
  static get styles() {
    return css`
      div {
        width: 70%;
        margin-top: 6px;
        margin-left: 40px;
        color: black;
      }

      p {
        font-size: 35px;
        font-family: "Style Script", cursive;
        margin-top: 15px;
        margin-left: 10px;
        margin-bottom:20px;
      }
      select{
        width: 60%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 20px;
        resize: vertical;
      font-size:1rem;
  
      }
    `;
  }

  constructor() {
    super();
    this.stream = "Streaming :";
    this.value = "";
  }

  render() {
    return html`
      <div>
        <p>${this.stream}</p>
        <lion-select @input = ${(e)=> this.value = e.target.value}>
            <select slot = "input">
                <option selected hidden value>Please Select</option>
                <option value="netflix">NETFLIX</option>
                <option value="amazon prime">AMAZON PRIME</option>
                <option value="hotstar">HOTSTAR</option>
                <option value="hbo">HBO</option>
            </select>
        </lion-select>
      </div>
    `;
  }
}
customElements.define("stream-inp", Stream);

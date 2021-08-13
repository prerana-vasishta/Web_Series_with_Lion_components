import { html, css, LitElement } from "lit-element";

export class Overview extends LitElement {
    static get styles() {
      return css`
      p{
          width:100%;
          fontsize:100px;
          text-align:center;
          color: black;
          border-radius: 25px;
          font-family: "Style Script", cursive;
          font-size:  35px;
        width: 90%;
        height: 300px;
        background-color: #4abdac;
        padding: 30px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        margin-left: 50px;
      }
      `;
    }
    constructor(){
        super();
    }

    render(){
        return html`
        <p><strong><i>Web-Series</i></strong> Allows you to add your favourite Tv shows, series and list them to access them any-time, any-where !</p>`;
    }

}
customElements.define("over-comp", Overview);
    
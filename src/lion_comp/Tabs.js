import '@lion/tabs/define';
import {html,css, LitElement } from 'lit-element';
import '../Components/Header'
import '../Components/InpDiv'
import './overView'


//  const selectedIndex = () => ;

export class Tabs extends LitElement {
  constructor(){
    super();
  }
  static get styles() {
    return css`
      button {
        background-color: #f7b733;
        font-size: 30px;
        color: rgb(0, 0, 0);
        padding:20px;
        margin: 0px 10px;
        border: none;
        border-radius: 20px;
        text-align: center;
        cursor: pointer;        
        font-family: "Style Script", cursive;
        font-weight: 600
        display:grid;
        width:100%;
        grid-template-columns:100px auto;
      }
      
    `;
  }
  


  render(){
    return html`
    <header-1></header-1>
    <lion-tabs .selectedIndex=${1}>
      <button slot="tab"> Over View </button>
      <p slot="panel"><over-comp></over-comp></p>
      <button slot="tab"> Web series </button>
      <p slot = 'panel'><inp-comp></inp-comp></p>
      <button slot="tab"> List </button>
      <p slot = 'panel'><dis-comp ></dis-comp></p>
      </lion-tabs>
  ` ;
  }
}

customElements.define("lion-comp", Tabs)
import { html, css, LitElement } from "lit-element";
import '@lion/form/define';
import '@lion/input/define';
import { Required, Validator } from '@lion/form-core';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';

class MyValidator extends Validator {
  
  static get validatorName() {
    return `Required`;
  }

  static async getMessage({ fieldName }) {
    return `hello` ;
  }
}

export class Stars extends LitElement {
  static get styles() {
    return css`
    div {
      width: 70%;
      fontsize: 100px;
      margin-left: 40px;
      color: black;
    }

    input {
      width: 100%;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 25px;
      text-align: center;
      resize: vertical;
      font-size:1.4rem;
      
    }

    input:focus {
      outline: none;
    }

    p {
      font-size: 35px;
      font-family: "Style Script", cursive;
      margin-top: 15px;
      margin-left: 10px;
      margin-bottom:20px;
    }

    lion-input {
      font-size: 25px;
      color: red;
      font-family: "Style Script", cursive;
    }
    `;
  }

  constructor() {
    super();
    this.stars = "Stars :";
    this.value = "";
  }

  render() {
    return html`
      <div>
        <p>${this.stars}</p>
        <lion-input type="text" onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
        .validators="${[new Required(0 , { getMessage: () => ('Please enter stars !' )})]}"
    .modelValue="${''}"
     @input = ${(e)=> 
      this.value = e.target.value
      
    
    } placeholder = 'Stars'></lion-input>
      </div>
    `;
  }
}
customElements.define("stars-inp", Stars);

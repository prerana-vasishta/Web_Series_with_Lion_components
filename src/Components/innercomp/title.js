import { html, css, LitElement } from "lit-element";
import '@lion/input/define';
import { localize } from '@lion/localize';
import { Required, Validator,IsString, IsNumber  } from '@lion/form-core';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';


class MyValidator extends Validator {
  
  static get validatorName() {
    return `Required`;
  }

  static async getMessage({ fieldName }) {
    return `Please enter ${fieldName}` ;
  }
}

export class Title extends LitElement {
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
        margin-top: 8px;
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
    this.title = "Title :";
    this.value = "";
  }

  render() {
    return html`

    <div>
    <p>${this.title}</p>
    <lion-input type="text" onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
    .validators="${[new Required("" , { getMessage: () => ('Please enter title !' )})]}"
    .modelValue="${''}",
     @input = ${(e)=> 
      this.value = e.target.value
    } placeholder = 'Title'></lion-input>

    </div>
   `;
  }
  
}


customElements.define("title-inp", Title);

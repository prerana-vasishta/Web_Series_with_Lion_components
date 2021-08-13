import { ajax } from "@lion/ajax";
import { html, css, LitElement } from "lit-element";

export class OutDiv extends LitElement {
  static get styles() {
    return css`
      .dataCont {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
        width: 95%;
        margin: auto;
      }

      .container {
        height: 200px;
        position: relative;
        
      }
      
      .center {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }

      button {
        background-color: #f7b733;
        font-size: large;
        font-family: "Times New Roman", Times, sans-serif;
        color: rgb(0, 0, 0);
        padding: 20px;
        margin-bottom: 10px;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        font-family: "Style Script", cursive;
        font-weight: 600;
        vertical-center:margin 0;
      }

      .dataCont div {
        /* outline: 1px solid black; */
        text-align: center;
        background-color: #4abdac;
        border-radius: 30px 0px;
        font-family: "Style Script", cursive;
        font-size: 20px;
        
      }

     
    `;
  }

  constructor() {
    super();

    

    
  }

  render() {
    return html`
      <div  class="container">
      <div class="center">
      <button @click=${this.disp} >SHOW</button>
      </div>
      </div>
      <div class='dataCont'></div>
    `;
  }

  


  disp() {
   
    var dataCont = this.shadowRoot.querySelector(".dataCont")

    dataCont.innerHTML=null

    var data;

    let url = 'http://localhost:3000/data'
     ajax.fetch(url).then(res => res.json()).then(result => {
       data = result
     })
     .then(()=>{

      
    for (let i = data.length - 1; i >= 0; i--) {
     

      let div = document.createElement("div");
      div.setAttribute("id", `dataDiv${i}`);

      let title = document.createElement("p");
      title.innerHTML = ` Title : ${data[i].title}`;
      title.style.color = "#fff";
      title.style.fontSize = "1.5rem";
      title.style.marginBottom = "-2px";
      title.style.textDecoration = "underline";

      let director = document.createElement("p");
      director.innerText = ` Director : ${data[i].director}`;

      let stars = document.createElement("p");
      stars.innerText = `Starring : ${data[i].stars}`;

      let streaming = document.createElement("p");
      streaming.innerText = `Streaming on : ${data[i].streaming}`;

      div.append(title, director, stars, streaming);

      dataCont.append(div);
      this.shadowRoot.append(dataCont);
      
    }
     })
    .catch(err => console.error(err));

    
  
   

    // let dataCont = document.createElement("div");
    // dataCont.setAttribute("class", "dataCont");

  }


}




customElements.define("dis-comp", OutDiv);

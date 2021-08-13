import { html, css, LitElement } from "lit-element";
import "../Components/innercomp/title";
import "../Components/innercomp/director";
import "../Components/innercomp/stars";
import "../Components/innercomp/stream";
import "../Components/innercomp/submitbtn";
import { shadyTemplateFactory } from "lit-html/lib/shady-render";
import { ajax } from '@lion/ajax';
import { localize } from '@lion/localize';


export class InpDiv extends LitElement {
  static get styles() {
    return css`
  div{
    border-radius: 25px;
        width: 90%;
        height: 620px;
        background-color: #4abdac;
        padding: 30px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        margin-left: 50px;
  }
  `;
  
  }

  constructor() {
    super();
    this.title = "";
    this.stars  = "";
    this.director = "";
    this.stream  = "";
  }

  render() {
    return html`
    <div>
      <title-inp  @input = ${(e)=> this.title = e.target.value} ></title-inp>
      <director-inp @input = ${(e)=> this.director = e.target.value}></director-inp>
      <stars-inp  @input = ${(e)=> this.stars = e.target.value}></stars-inp>
      <stream-inp @input = ${(e)=> this.stream = e.target.value}></stream-inp>
      <submit-btn  @click  = ${this._add}></submit-btn>
      
      </div>
    `;
  }

  getData1(){
    console.log('valled')
    const greeting = localize.msg('my-hello-component:test');
  this.shadowRoot.querySelector('#greeting').innerText = greeting;
  }

  /*_test(){
    console.log("trigered")
    localize.loadNamespace({
      'submit-btn': async locale => {
        // resolves to a module with the module.default `{ greeting: 'Hallo {name}!' }`
        console.log('local',locale)
        import(`./translations/${locale}.js`)
        await getData1()
        
      },
    });
  }*/


  _add(){
     

     

     var  intervalId;
 

     if(this.title == "" || this.director == "" || this.stars == "" || this.streaming == ""){
       return
     }

         
         let movData = {
             title:this.title,
             director:this.director,
             stars: this.stars,
             streaming: this.stream
         }
             

         let url = "http://localhost:3000/data"

         const { response, body } =  ajax.fetchJson(url, {
          method: 'POST',
          body: movData
        }).then(res => console.log(res))
        .catch(err => console.error(err));

        
 
        
        
         
        
     let reload = setTimeout(()=>{

      location.reload();
     }, 1000)
     
  }
}



customElements.define("inp-comp", InpDiv);

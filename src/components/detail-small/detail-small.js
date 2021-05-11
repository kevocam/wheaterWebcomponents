

class detailSmall extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:'open'});		
    }
	static get observedAttributes(){
		return ['mtemp','mitemp','date','type'];
	}
    getTemplate(){
		const template = document.createElement('template')
		template.innerHTML = `
			<section class="main">
                <div class="main__title">
                    ${this.date}
                </div>
                <div class="main__img">
                    <img src="../src/img/Shower.png" alt="">
                </div>
                <div class="main__temp">
                    <div class="main__temp--max">
                        ${this.mtemp}<span>°C</span>
                    </div>  - 
                    <div class="main__temp--min">
                        ${this.mitemp}<span>°C</span>
                    </div>
                </div>							
			</section>
            ${this.getStyles()} 
		`;
	return template;	//return template
	}
	attributeChangedCallback(attr,oldVal, newVal) {//recibe 3 parametros
		if(attr === "mtemp"){
			this.mtemp = newVal;
		}
		if(attr === "mitemp"){
			this.mitemp = newVal
		}
		if(attr === "date"){
			this.date =newVal
		}
		if(attr === "type"){
			this.type =newVal
		}
		
	}

    getStyles(){ //método para manejar los estilos
        return `
		
            <style>
                .main{
                    width: 100%;
                    height: 150px;
                    background:#1E213A;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    color:white;
                    padding:12px;
                    box-sizing: border-box;

                }
                .main__title{
                    font-size: 1.6rem;
                }
                .main__img{
                    max-height: 62px;
                    max-width: 56px;
                }
                .main__img img{
                    width: 100%;
                    height: 100%;                    
                }
                .main__temp{
                    width: 100%;
                    display: flex;
                    justify-content: space-around;
                    font-size: 1.6rem;
                }


           
            </style>
        `
    }
	render(){ 
		this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
		
	}

	connectedCallback(){ // Conectado -> Inicialice ene l DOM el metodo de render
		this.render();
	}
}
customElements.define("detail-small", detailSmall)

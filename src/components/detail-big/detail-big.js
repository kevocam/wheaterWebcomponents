

class detailBig extends HTMLElement {
    static get observedAttributes(){
		return ['title','content','footer','type'];
	}
    constructor(){
        super();
        this.attachShadow({mode:'open'});		
    }
	
    getTemplate(){
		const template = document.createElement('template')
		template.innerHTML = `
			<section class="main">
                <div class="main__title">
                    ${this.title}
                </div>
                <div class="main__content">
                    ${this.content}

                </div>						
                <div class="main__footer">
                    ${this.footer}

                </div>
			</section>
            ${this.getStyles()} 
		`;
	return template;	//return template
	}
	attributeChangedCallback(attr,oldVal, newVal) {
		if(attr == "title"){
			this.title = newVal;
		}
		if(attr == "content"){
			this.content = newVal
		}
		if(attr == "footer"){
			this.footer =newVal
		}
		if(attr == "type"){
			this.type =newVal
		}
		
	}

    getStyles(){ //método para manejar los estilos
        return `
		
            <style>
                .main{
                    width:100%;
                    min-height: 140px;
                    max-height: 204px;
                    background-color: #1E213A;
                    color:white;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    padding: 2.2rem;
                    box-sizing: border-box;


                }
                .main__title{
                    font-size: 1.6rem;
                }
                .main__content{
                    font-size: 4.4rem;
                    font-weight: 700;
                }
                .main__footer{
                    font-size: 1.4rem;
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
customElements.define("detail-big", detailBig)



class navMain extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:'open'});		
    }
	static get observedAttributes(){
		return ['title','content','footer','type'];
	}
    getTemplate(){
		const template = document.createElement('template')
		template.innerHTML = `
			<section class="main">
                <div class="main__header">
                    <div class="main__header--title">

                    </div>
                    <div class="main__header--buttom">

                    </div>
                </div>    
                <div class="main__content">
                    <ul>
                        <li>London</li>
                        <li>Barcelona</li>
                        <li>Long Beach</li>
                    </ul>
                </div>
			</section>
            ${this.getStyles()} 
		`;
	return template;	
	}
	attributeChangedCallback(attr,oldVal, newVal) {
		if(attr === "title"){
			this.title = newVal;
		}
		if(attr === "content"){
			this.content = newVal
		}
		if(attr === "footer"){
			this.footer =newVal
		}
		if(attr === "type"){
			this.type =newVal
		}
		
	}

    getStyles(){ 
        return `
		
            <style>
                .main{
                    width:100%;
                    min-height: 160px;
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
               


           
            </style>
        `
    }
	render(){ 
		this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
		
	}

	connectedCallback(){ 
		this.render();
	}
}
customElements.define("nav-main", navMain)



class detailMain extends HTMLElement {
	static get observedAttributes(){
		return ['temp','type', 'date','ubication'];
	}
    constructor(){
        super();
        this.attachShadow({mode:'open'});	        
    }	
	
    getTemplate(){
		const template = document.createElement('template')
		template.innerHTML = `
			<section class="main">
				<div class="main__header">
					<div class="main__header--button">
					<!-- <button>Search for places</button>  -->
					</div>
					<div class="main__header--btnmenu">
						<span class="material-icons">
							gps_fixed
							</span>
					</div>
				</div>
				<div class="main__img">
					<img src="./img/Shower.png" alt="">
				</div>
				<div class="main__temp">
					<h2 class="main__temp--gps">
						<span class="material-icons">
							location_on
						</span>${this.ubication} 
					</h2>
					<p class="main__temp--title"> ${this.temp}<span>°C</span> </p>
					<p class="main__temp--about">${this.type}</p>
					<p class="main__temp--date">${this.date}</p>
					
				</div>				
			</section>
            ${this.getStyles()} 
		`;
	return template;	//return template
	}
	attributeChangedCallback(attr,oldVal, newVal) {//recibe 3 parametros
		if(attr === "temp"){
			this.temp = newVal;
		}
		if(attr === "type"){
			this.type = newVal
		}
		if(attr === "date"){
			this.date =newVal
		}
		if(attr === "ubication"){
			this.ubication =newVal
		}
		
	}

    getStyles(){ //método para manejar los estilos
        return `
		
            <style>
				.material-icons {
						font-family: 'Material Icons';
						font-weight: normal;
						font-style: normal;
						font-size: 24px;  /* Preferred icon size */
						display: inline-block;
						line-height: 1;
						text-transform: none;
						letter-spacing: normal;
						word-wrap: normal;
						white-space: nowrap;
						direction: ltr;

						/* Support for all WebKit browsers. */
						-webkit-font-smoothing: antialiased;
						/* Support for Safari and Chrome. */
						text-rendering: optimizeLegibility;

						/* Support for Firefox. */
						-moz-osx-font-smoothing: grayscale;

						/* Support for IE. */
						font-feature-settings: 'liga';
						}
				.main{
					background:#1E213A;
					color:white;
/* 					max-height: 810px;
 */					padding:10px;

				}
				.main__header{
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding:10px;
				}
				.main__header--button button{
					background:#6E707A;
					color:white;
					max-width: 161px;
					padding:10px 18px;

				}
				.main__img{
					width: 100%;
					display: flex;
					justify-content: center;
					background-position: center;
					background-size: cover;
					
					}
				/* .main__img::after{
					position:absolute;
					background-image: url("./img/Cloud-background.png");
					background-position: center;
					background-size: cover;
					content: "";
					top: 104px;
					left: 0;
					bottom: 0;
					right: 0;
					
					opacity: 0.2;
				} */
				.main__temp{
					display: flex;
					flex-direction: column;
					align-items: center;

				}
				.main__temp--title{
					font-size: 8.4rem;
 					margin:0; 
					font-weight: 500;
				}
				.main__temp--title p{
					
 					margin:0; 
					
				}
				.main__temp--title span{
					font-size: 3.8rem;
					margin:0;
					font-weight: 100;
				}
				.main__temp--about{
					font-size: 3.6rem;
					font-weight: 500;
					margin:23px 0 48px 0;
					color:#A09FB1;
				}
				.main__temp--date{
					font-size: 1.8rem;
					font-weight: 500;
					margin:0 0 33px 0;
					color:#88869D ;

				}
				.main__temp--gps{
					font-size: 2.8rem;
					margin:20px 0;
					display: flex;
					color:#88869D ;

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
customElements.define("detail-main", detailMain)

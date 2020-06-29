/**
 * Sidebar control the sidebar.
 * @export
 * @class Sidebar
 */
export class Sidebar{
    /**
     * Creates an instance of Sidebar.
     * @param {string} position - The Sidebar's position.
     * @memberof Sidebar
     */
    constructor(position){
        if(this.hasHTMLElement(position)){
            this.position = position;
            this.btnOpener = document.querySelector('.nav-menu .sidebar-btn.open-btn.' + this.position);
            this.btnCloser = document.querySelector('.nav-menu .sidebar-btn.close-btn.' + this.position);
            this.links = document.querySelectorAll('.nav-menu .sidebar.' + this.position + ' .sidebar-content .nav-link');

            this.btnOpener.addEventListener("click", function(e){
                e.preventDefault();
                Sidebar.open(position);
            });

            this.btnCloser.addEventListener("click", function(e){
                e.preventDefault();
                Sidebar.close(position);
            });
    
            for(let i = 0; i< this.links.length; i++){
                if(!this.links[i].parentNode.classList.contains('collapsable')){
                    this.links[i].addEventListener('click', function(e){
                        Sidebar.close(position);
                    });
                }
            }
        }
    }
    
    /**
     * Check if there is Sidebar.
     * @param {string} position - The Sidebar's position.
     * @returns
     * @memberof Sidebar
     */
    hasHTMLElement(position){
        this.html = document.querySelector('.nav-menu .sidebar.' + position);
        if(this.html){
            return true;
        }else{
            return false;
        }
    }
    
	/**
     * Open the Sidebar
     * @param {string} position - The Sidebar's position.
     * @static
     * @memberof Sidebar
     */
    static open(position){
        document.querySelector('.nav-menu .sidebar.' + position).classList.add('opened');
        document.querySelector('.nav-menu .sidebar.' + position).classList.remove('closed');
    }
    
    /**
     * Close the Sidebar
     * @param {string} position - The Sidebar's position.
     * @static
     * @memberof Sidebar
     */
    static close(position){
        document.querySelector('.nav-menu .sidebar.' + position).classList.remove('opened');
        document.querySelector('.nav-menu .sidebar.' + position).classList.add('closed');
    }
}
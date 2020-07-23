/**
 * Dropdown control the dropdown buttons.
 * @export
 * @class Dropdown
 */
export class Dropdown{
    /**
     * Creates an instance of Dropdown.
     * @param {object} properties - The Dropdown properties.
     * @param {string} id - The Dropdown id.
     * @param {HTMLElement} html - The Dropdown HTML Element.
     * @memberof Dropdown
     */
    constructor(properties = {}, id, html){
        try{
            this.setId(id);
            this.setProperties(properties);
            this.setHTML(html);
            this.setButtons();
        }catch(error){
            throw error;
        }
    }

    /**
     * * Set the Dropdown properties.
     * @param {object} properties - The Dropdown properties.
     * @memberof Dropdown
     */
    setProperties(properties = {}){
        try{
            this.properties = {};
            this.status = false;
        }catch(error){
            throw error;
        }
    }

    /**
     * * Set the Dropdown id.
     * @param {string} id - The Dropdown id.
     * @memberof Dropdown
     */
    setId(id){
        this.id = 'dropdown-' + id;
    }

    /**
     * * Set the Dropdown HTMLElement.
     * @param {HTMLElement} html - The Dropdown HTML Element.
     * @memberof Dropdown
     */
    setHTML(html){
        if(!html.hasAttribute('id')){
            html.id = this.id;
            this.html = html;
        }else{
            throw new Error({
                status: 409,
                message: 'The Dropdown html has an attribute id.',
                display: true,
            });
        }
    }

    /**
     * * Set the opener & the closer buttons.
     * @memberof Sidebar
     */
    setButtons(){
        let parent = this;
        if(!document.querySelector('.dropdown#' + this.id + ' .dropdown-btn')){
            throw new Error({
                status: 404,
                message: 'There are no Dropdown button, in the dropdown with the id: ' + this.id + '.',
                display: true,
            });
        }
        this.btn = document.querySelector('.dropdown#' + this.id + ' .dropdown-btn');
        this.btn.addEventListener("click", function(e){
            e.preventDefault();
            if(parent.status){
                Dropdown.close(parent, this);
            }else{
                Dropdown.open(parent, this);
            }
        });
    }

    /**
     * * Get all the Dropdowns HTML Element.
     * @static
     * @return {object}
     * @memberof Dropdown
     */
    static getAllHTMLElement(){
        let htmls = document.querySelectorAll('.dropdown');
        if(htmls.length){
            return htmls;
        }else{
            throw new Error({
                status: 404,
                message: 'There are no Dropdowns HTML Element.',
                display: true,
            });
        }
    }

    /**
     * * Open the Dropdown.
     * @param {Dropdown} dropdown - The Dropdown.
     * @param {HTMLElement} button - The dropdown button.
     * @static
     * @memberof Dropdown
     */
    static open(dropdown, button){
        button.children[0].classList.remove('fa-sort-down');
        button.children[0].classList.add('fa-sort-up');
        dropdown.status = true;
        dropdown.html.classList.remove('closed');
        dropdown.html.classList.add('opened');
    }

    /**
     * * Close the Dropdown.
     * @param {Dropdown} dropdown - The Dropdown.
     * @param {HTMLElement} button - The dropdown button.
     * @static
     * @memberof Dropdown
     */
    static close(dropdown, button){
        button.children[0].classList.remove('fa-sort-up');
        button.children[0].classList.add('fa-sort-down');
        dropdown.status = false;
        dropdown.html.classList.remove('opened');
        dropdown.html.classList.add('closed');
    }
}
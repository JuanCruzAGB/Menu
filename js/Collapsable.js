/**
 * Collapsable control the collapsable buttons.
 * @export
 * @class Collapsable
 */
export class Collapsable{
    /**
     * Creates an instance of Collapsable.
     * @param {object} properties - The Collapsable properties.
     * @param {string} id - The Collapsable id.
     * @param {HTMLElement} html - The Collapsable HTML Element.
     * @memberof Collapsable
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
     * * Set the Collapsable properties.
     * @param {object} properties - The Collapsable properties.
     * @memberof Collapsable
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
     * * Set the Collapsable id.
     * @param {string} id - The Collapsable id.
     * @memberof Collapsable
     */
    setId(id){
        this.id = 'collapsable-' + id;
    }

    /**
     * * Set the Collapsable HTMLElement.
     * @param {HTMLElement} html - The Collapsable HTML Element.
     * @memberof Collapsable
     */
    setHTML(html){
        if(!html.hasAttribute('id')){
            html.id = this.id;
            this.html = html;
        }else{
            throw new Error({
                status: 409,
                message: 'The Collapsable html has an attribute id.',
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
        if(!document.querySelector('.collapsable#' + this.id + ' .collapsable-btn')){
            throw new Error({
                status: 404,
                message: 'There are no Collapsable button, in the collapsable with the id: ' + this.id + '.',
                display: true,
            });
        }
        this.btn = document.querySelector('.collapsable#' + this.id + ' .collapsable-btn');
        this.btn.addEventListener("click", function(e){
            e.preventDefault();
            if(parent.status){
                Collapsable.close(parent, this);
            }else{
                Collapsable.open(parent, this);
            }
        });
    }

    /**
     * * Get all the Collapsables HTML Element.
     * @static
     * @return {object}
     * @memberof Collapsable
     */
    static getAllHTMLElement(){
        let htmls = document.querySelectorAll('.collapsable');
        if(htmls.length){
            return htmls;
        }else{
            throw new Error({
                status: 404,
                message: 'There are no Collapsables HTML Element.',
                display: true,
            });
        }
    }

    /**
     * * Open the Collapsable.
     * @param {Collapsable} collapsable - The Collapsable.
     * @param {HTMLElement} button - The collapsable button.
     * @static
     * @memberof Collapsable
     */
    static open(collapsable, button){
        button.children[0].classList.remove('fa-sort-down');
        button.children[0].classList.add('fa-sort-up');
        collapsable.status = true;
        collapsable.html.classList.remove('closed');
        collapsable.html.classList.add('opened');
    }

    /**
     * * Close the Collapsable.
     * @param {Collapsable} collapsable - The Collapsable.
     * @param {HTMLElement} button - The collapsable button.
     * @static
     * @memberof Collapsable
     */
    static close(collapsable, button){
        button.children[0].classList.remove('fa-sort-up');
        button.children[0].classList.add('fa-sort-down');
        collapsable.status = false;
        collapsable.html.classList.remove('opened');
        collapsable.html.classList.add('closed');
    }
}
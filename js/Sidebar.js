/**
 * Sidebar control the sidebar.
 * @export
 * @class Sidebar
 */
export class Sidebar{
    /**
     * * Creates an instance of Sidebar.
     * @param {object} properties - The Sidebar properties.
     * @param {string} position - The Sidebar position.
     * @memberof Sidebar
     */
    constructor(properties = {}, position = 'left'){
        try{
            this.setPosition(position);
            this.setProperties(properties);
            this.setHTML();
            this.setButtons();
            this.setLinks();
        }catch(error){
            throw error;
        }
    }

    /**
     * * Set the Sidebar properties.
     * @param {object} properties - The Sidebar properties.
     * @memberof Sidebar
     */
    setProperties(properties = {position: ['left', 'right'],}){
        try{
            this.properties = {};
        }catch(error){
            throw error;
        }
    }

    /**
     * * Set the Sidebar position.
     * @param {string} position - The Sidebar position.
     * @memberof Sidebar
     */
    setPosition(position = 'left'){
        if(typeof position != 'string'){
            throw new Error({
                status: 415,
                message: 'The Sidebar position must be a valid string.',
                display: true,
            });
        }else if(position != 'left' && position != 'right' && position != 'Left' && position != 'Reft' && position != 'l' && position != 'r' && position != 'L' && position != 'R'){
            throw new Error({
                status: 415,
                message: 'The Sidebar position is not correct.',
                display: true,
            });
        }
        this.position = position;
    }

    /**
     * * Set the Sidebar HTMLElement.
     * @memberof Sidebar
     */
    setHTML(){
        if(!document.querySelector('.nav-menu .sidebar.' + this.position)){
            throw new Error({
                status: 404,
                message: 'There are no ' + this.position + 'Sidebar HTML Element.',
                display: true,
            });
        }
        this.html = document.querySelector('.nav-menu .sidebar.' + this.position);
    }

    /**
     * * Set the opener & the closer buttons.
     * @memberof Sidebar
     */
    setButtons(){
        let errors = [], position = this.position;
        if(!document.querySelector('.nav-menu .sidebar-btn.open-btn.' + this.position)){
            errors.push(new Error({
                status: 200,
                message: 'There are no ' + this.position + 'Sidebar button opener.',
                display: true,
            }));
        }
        if(!document.querySelector('.nav-menu .sidebar-btn.close-btn.' + this.position)){
            errors.push(new Error({
                status: 200,
                message: 'There are no ' + this.position + 'Sidebar button closer.',
                display: true,
            }));
        }
        if(errors.length){
            for(const error of errors){
                error.report();
            }
        }else{
            this.btnOpener = document.querySelector('.nav-menu .sidebar-btn.open-btn.' + this.position);
            this.setEvent(this.btnOpener, 'button', 'open', this.position);

            this.btnCloser = document.querySelector('.nav-menu .sidebar-btn.close-btn.' + this.position);
            this.setEvent(this.btnCloser, 'button', 'close', this.position);
        }
    }

    /**
     * * Set the links insdide the Sidebar.
     * @memberof Sidebar
     */
    setLinks(){
        let links = [], position = this.position;
        if(document.querySelectorAll('#' + this.properties.id + ' .collapsable-link')){
            let colllinks = document.querySelectorAll('#' + this.properties.id + ' .collapsable-link');
            for(const link of colllinks){
                links.push(link);
            }
        }
        let navlinks = document.querySelectorAll('#' + this.properties.id + ' .nav-link');
        if(navlinks.length){
            for(const link of navlinks){
                links.push(link);
            }
            for(const link of links){
                this.links.push(new Link(link));
                this.setEvent(link, 'link', 'close', this.position);
            }
        }
    }

    /**
     * * Set a the HTML Element event.
     * @param {HTMLElement} html - The HTML Element.
     * @param {string} type - The HTML Element type.
     * @param {string} event - The event name.
     * @param {string} position - The Sidebar position.
     * @memberof Sidebar
     */
    setEvent(html, type, event, position){
        switch(event){
            case 'open':
                html.addEventListener("click", function(e){
                    if(type == 'button'){
                        e.preventDefault();
                    }
                    Sidebar.open(position);
                });
            break;
            case 'close':
                html.addEventListener("click", function(e){
                    if(type == 'button'){
                        e.preventDefault();
                    }
                    Sidebar.close(position);
                });
            break;
        }
    }

    /**
     * * Get the Sidebar positions.
     * @static
     * @param {object} properties - The Sidebar properties.
     * @return {object}
     * @memberof Sidebar
     */
    static getPositions(properties = {position: ['left', 'right'],}){
        if(typeof properties.position != 'object'){
            throw new Error({
                status: 415,
                message: 'The Sidebar properties position must be a valid object.',
                display: true,
            });
        }
        let positions = [];
        for(const position of properties.position){
            positions.push(position);
        }
        return positions;
    }
    
	/**
     * * Open the Sidebar
     * @param {string} position - The Sidebar position.
     * @static
     * @memberof Sidebar
     */
    static open(position){
        document.querySelector('.nav-menu .sidebar.' + position).classList.add('opened');
        document.querySelector('.nav-menu .sidebar.' + position).classList.remove('closed');
    }
    
    /**
     * * Close the Sidebar
     * @param {string} position - The Sidebar position.
     * @static
     * @memberof Sidebar
     */
    static close(position){
        document.querySelector('.nav-menu .sidebar.' + position).classList.remove('opened');
        document.querySelector('.nav-menu .sidebar.' + position).classList.add('closed');
    }
}
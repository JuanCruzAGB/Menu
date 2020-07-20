import {Collapsable} from './Collapsable.js';
import {Error} from './Error.js';
import {Sidebar} from './Sidebar.js';
import {Link} from './Link.js';

/**
 * * NavMenu makes an excellent navigation bar.
 * @export
 * @class NavMenu
 */
export class NavMenu{
    /**
     * * Creates an instance of NavMenu.
     * @param {object} properties - NavMenu properties.
     * @memberof NavMenu
     */
    constructor(properties = {id: 'nav-1', fixed: false, sidebar: {position: ['left', 'right']}, collapsable:{}}){
        try{
            this.error = new Error();
            this.setProperties(properties);
            this.setHTML();
            this.setLinks();
            this.setCollapsable(properties);
            this.setSidebar(properties);
            this.checkCurrentPage();
        }catch(error){
            this.error = error;
            this.error.report();
        }
    }

    /**
     * * Set the NavMenu properties.
     * @param {object} properties - NavMenu properties.
     * @memberof NavMenu
     */
    setProperties(properties = {fixed: false, id: 'nav-1'}){
        try{
            this.properties = {};
            this.setId(properties);
            this.setFixed(properties);
        }catch(error){
            throw error;
        }
    }

    /**
     * * Set the NavMenu ID.
     * @param {object} properties - NavMenu properties.
     * @memberof NavMenu
     */
    setId(properties = {id: 'nav-1',}){
        if(typeof properties.id != 'string'){
            throw new Error({
                status: 415,
                message: 'The id must be a valid string.',
                display: true,
            });
        }else if(!document.querySelector('#' + properties.id)){
            throw new Error({
                status: 404,
                message: 'The id do not match with the id attribute.',
                display: true,
            });
        }
        this.properties.id = properties.id;
    }

    /**
     * * Set the NavMenu fixed property.
     * @param {object} properties - NavMenu properties.
     * @memberof NavMenu
     */
    setFixed(properties = {fixed: false,}){
        if(typeof properties.fixed != 'boolean'){
            throw new Error({
                status: 415,
                message: 'The fixed property must be a valid boolean.',
                display: true,
            });
        }
        this.properties.fixed = properties.fixed;
    }

    /**
     * * Set the NavMenu HTMLElement.
     * @memberof NavMenu
     */
    setHTML(){
        let navmenus = document.querySelectorAll('.nav-menu');
        if(navmenus.length){
            for(const nav of navmenus){
                if(nav.id == this.properties.id){
                    this.html = nav;
                }
            }
        }else{
            throw new Error({
                status: 404,
                message: 'There are no NavMenus.',
                display: true,
            });
        }
    }

    /**
     * * Set all the nav-link buttons.
     * @memberof NavMenu
     */
    setLinks(){
        let htmls = [];
        if(this.collapsable){
            let colllinks = document.querySelectorAll('#' + this.properties.id + ' .collapsable-link');
            for(const html of colllinks){
                htmls.push(html);
            }
        }
        let navlinks = document.querySelectorAll('#' + this.properties.id + ' .nav-link');
        if(navlinks.length){
            for(const html of navlinks){
                htmls.push(html);
            }
            this.links = [];
            for(const html of htmls){
                this.links.push(new Link(html));
            }
        }else{
            throw new Error({
                status: 404,
                message: 'There are no NavMenus Links.',
                display: true,
            });
        }
    }

    /**
     * * Set the Collapsables.
     * @memberof NavMenu
     */
    setCollapsable(properties = {collapsable: {}}){
        if(!properties.collapsable){
            let error = new Error({
                status: 200,
                message: 'There are no Collapsable.',
            });
            error.report();
            this.collapsables = false;
        }else if(typeof properties.collapsable != 'object'){
            throw new Error({
                status: 415,
                message: 'The Collapsable properties must be a valid object.',
                display: true,
            });
        }else{
            try{
                this.collapsables = [];
                let collapsablesHTMLElement = Collapsable.getAllHTMLElement();
                for(let index = 0; index < collapsablesHTMLElement.length; index++){
                    this.collapsables.push(new Collapsable(properties.collapsable, index + 1, collapsablesHTMLElement[index]));
                }
            }catch(error){
                this.collapsables = false;
                if(error.status == 200){
                    throw error;
                }
            }
        }
    }

    /**
     * * Set the Sidebars
     * @param {object} properties - Sidebar properties.
     * @memberof NavMenu
     */
    setSidebar(properties = {sidebar: {position: ['left', 'right'],}}){
        if(!properties.sidebar){
            let error = new Error({
                status: 200,
                message: 'There are no Sidebar.',
                display: true,
            });
            error.report();
            this.sidebars = [];
        }else if(typeof properties.sidebar != 'object'){
            throw new Error({
                status: 415,
                message: 'The Sidebar properties must be a valid object.',
                display: true,
            });
        }else{
            try{
                this.sidebars = [];
                let positions = Sidebar.getPositions(properties.sidebar);
                for(const position of positions){
                    this.sidebars.push(new Sidebar(properties.sidebar, position));
                }
            }catch(error){
                this.sidebars = false;
                if(error.status == 200){
                    throw new Error(error);
                }
            }
        }
    }

    /**
     * * Check if should be a current nav-link button active.
     * @memberof NavMenu
     */
    checkCurrentPage(){
        if(this.html.hasAttribute('data-current')){
            this.current = this.html.dataset.current;
            Link.active(this.current, this.links);
        }else{
            throw new Error({
                status: 200,
                message: 'There is no current page.',
            });
        }
    }
}
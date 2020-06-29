import {Collapsable} from './Collapsable.js';
import {Error} from './Error.js';
import {Sidebar} from './Sidebar.js';
import {Link} from './Link.js';

/**
 * NavMenu makes an excellent navigation bar.
 * @export
 * @class NavMenu
 */
export class NavMenu{
    /**
     * * Creates an instance of NavMenu.
     * @param {json} properties - NavMenu Properties.
     * @memberof NavMenu
     */
    constructor(properties = {sidebar: ['left', 'right'], fixed: false, id: 'nav-1'}){
        try{
            this.properties = properties;
            this.error = new Error();
            this.loadCollapsable();
            this.loadSidebar();
            this.getHTML();
            this.getLinks();
            this.checkCurrentPage();
        }catch(error){
            if(this.error.status == 200){
                this.error = new Error(error);
                this.error.report();
            }
        }
    }

    /**
     * * Load the Collapsables.
     * @memberof NavMenu
     */
    loadCollapsable(){
        try{
            this.collapsable = new Collapsable();
        }catch(error){
            if(error.status == 200){
                this.collapsable = false;
            }
            throw new Error(error);
        }
    }

    /**
     * * Load the Sidebars.
     * @memberof NavMenu
     */
    loadSidebar(){
        try{
            this.sidebars = [];
            for(let position of this.properties.sidebar){
                position = position.toLowerCase();
                this.sidebars.push(new Sidebar(position));
            }
        }catch(error){
            if(error.status == 200){
                this.sidebars = false;
            }
            throw new Error(error);
        }
    }

    /**
     * * Get the NavMenu's HTMLElement.
     * @memberof NavMenu
     */
    getHTML(){
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
                message: 'NavMenuJS: There are no NavMenus.',
                display: true,
            });
        }
    }

    /**
     * * Get all the nav-link buttons.
     * @memberof NavMenu
     */
    getLinks(){
        let links = [];
        if(this.collapsable){
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
            this.links = [];
            for(const link of links){
                this.links.push(new Link(link));
            }
        }else{
            throw new Error({
                status: 404,
                message: 'NavMenuJS: There are no NavMenus Links.',
                display: true,
            });
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
                message: 'NavMenuJS: There is no current page.',
            });
        }
    }
}
import {CollapsableClass as Collapsable} from './Collapsable.js';
import {SidebarClass as Sidebar} from './Sidebar.js';
import {LinkClass as Link} from './Link.js';

/**
 * NavMenu makes an excellent navigation bar.
 * @class NavMenu
 */
class NavMenu{
    /**
     * Creates an instance of NavMenu.
     * @param {json} properties - NavMenu Properties.
     * @memberof NavMenu
     */
    constructor(properties = {sidebar: ['left', 'right'], fixed: false, id: 'nav-1'}){
        this.properties = properties;
        this.loadCollapsable();
        this.loadSidebar();
        this.getHTML();
        this.getLinks();
        this.checkCurrentPage();
    }

    /**
     * Load the Collapsables.
     * @memberof NavMenu
     */
    loadCollapsable(){
        try{
            this.collapsable = new Collapsable();
        }catch(error){
            if(error.stats != 200){
                console.error(error.message);
            }else{
                this.collapsable = false;
            }
        }
    }

    /**
     * Load the Sidebars.
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
            if(error.stats != 200){
                console.error(error.message);
            }else{
                this.sidebars = false;
            }
        }
    }

    /**
     * Get the NavMenu's HTMLElement.
     * @memberof NavMenu
     */
    getHTML(){
        let navmenus = document.querySelectorAll('.nav-menu');
        for(const nav of navmenus){
            if(nav.id == this.properties.id){
                this.html = nav;
            }
        }
    }

    /**
     * Get all the nav-link buttons.
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
        for(const link of navlinks){
            links.push(link);
        }
        this.links = [];
        for(const link of links){
            this.links.push(new Link(link));
        }
    }

    /**
     * Check if should be a current nav-link button active.
     * @memberof NavMenu
     */
    checkCurrentPage(){
        if(this.html.hasAttribute('data-current')){
            this.current = this.html.dataset.current;
            Link.active(this.current, this.links);
        }
    }
}

export const NavMenuJS = NavMenu
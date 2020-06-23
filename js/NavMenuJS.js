import {CollapsableClass as Collapsable} from './Collapsable.js';
import {SidebarClass as Sidebar} from './Sidebar.js';

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
    constructor(properties = {sidebar: ['left', 'right'], fixed: false}){
        this.properties = properties;
        this.loadCollapsable();
        this.loadSidebar();
    }

    /**
     * Load the Collapsables.
     * @memberof NavMenu
     */
    loadCollapsable(){
        this.collapsable = new Collapsable();
    }

    /**
     * Load the Sidebars.
     * @memberof NavMenu
     */
    loadSidebar(){
        this.sidebars = [];
        for(let position of this.properties.sidebar){
            position = position.toLowerCase();
            this.sidebars.push(new Sidebar(position));
        }
    }
}

export const NavMenuJS = NavMenu
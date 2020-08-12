// * NavMenu repository.
import { Link } from './Link.js';

// * External repositories.abnf
import { Sidebar } from '../../SidebarJS/js/Sidebar.js';

/**
 * * NavMenu makes an excellent navigation bar.
 * @export
 * @class NavMenu
 */
export class NavMenu{
    /**
     * * Creates an instance of NavMenu.
     * @param {object} properties - NavMenu properties.
     * @param {object} states - NavMenu states.
     * @memberof NavMenu
     */
    constructor(properties = {
        id: 'nav-1',
        sidebar: {
            id: ['menu', 'filters'],
            position: ['left', 'right'],
        }, dropdown:{
            //
        },
    }, states = {
        fixed: false,
        current: false,
    }){
        // TODO Edit custom errors.
        // TODO Create fixed state.
        // TODO Edit active state.
        // try{
            this.error = new Error();
            this.setProperties(properties);
            this.setStates(states);
            this.setHTML();
            this.setLinks();
            this.checkDropdowns(properties);
            this.checkSidebars(properties);
            this.checkCurrentPage();
        // }catch(error){
        //     this.error = error;
        //     this.error.report();
        // }
    }

    /**
     * * Set the NavMenu properties.
     * @param {object} properties - NavMenu properties.
     * @memberof NavMenu
     */
    setProperties(properties = {
        id: 'nav-1',
    }){
        // try{
            this.properties = {};
            this.setId(properties);
        // }catch(error){
        //     throw error;
        // }
    }

    /**
     * * Set the NabMenu states.
     * @param {object} states - NabMenu states.
     * @memberof NabMenu
     */
    setStates(states = {
        fixed: false,
        current: false,
    }){
        this.states = {};
        this.setFixed(states);
        this.setCurrent(states);
    }

    /**
     * * Set the NavMenu ID.
     * @param {object} properties - NavMenu properties.
     * @memberof NavMenu
     */
    setId(properties = {
        id: 'nav-1',
    }){
        // if(typeof properties.id != 'string'){
        //     throw new Error({
        //         status: 415,
        //         message: 'The id must be a valid string.',
        //         display: true,
        //     });
        // }else if(!document.querySelector('#' + properties.id)){
        //     throw new Error({
        //         status: 404,
        //         message: 'The id do not match with the id attribute.',
        //         display: true,
        //     });
        // }
        this.properties.id = properties.id;
    }

    /**
     * * Set the NavMenu fixed state.
     * @param {object} states - NavMenu states.
     * @memberof NavMenu
     */
    setFixed(states = {
        fixed: false,
    }){
        // if(typeof states.fixed != 'boolean'){
        //     throw new Error({
        //         status: 415,
        //         message: 'The fixed property must be a valid boolean.',
        //         display: true,
        //     });
        // }
        this.states.fixed = states.fixed;
    }

    /**
     * * Set the NavMenu current state.
     * @param {object} states - NavMenu states.
     * @memberof NavMenu
     */
    setCurrent(states = {
        current: false,
    }){
        this.states.current = states.current;
    }

    /**
     * * Set the NavMenu HTML Element.
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
        }
        // }else{
        //     throw new Error({
        //         status: 404,
        //         message: 'There are no NavMenus.',
        //         display: true,
        //     });
        // }
    }

    /**
     * * Set the NavMenu Links.
     * @memberof NavMenu
     */
    setLinks(){
        let htmls = [];
        // if(this.dropdown){
        //     let dropdown_links = document.querySelectorAll('#' + this.properties.id + ' .dropdown-link');
        //     for(const html of dropdown_links){
        //         htmls.push(html);
        //     }
        // }
        let navlinks = document.querySelectorAll('#' + this.properties.id + ' .nav-link');
        if(navlinks.length){
            for(const html of navlinks){
                htmls.push(html);
            }
            this.links = [];
            for(const html of htmls){
                this.links.push(new Link(html));
            }
        }
        // }else{
        //     throw new Error({
        //         status: 404,
        //         message: 'There are no NavMenus Links.',
        //         display: true,
        //     });
        // }
    }

    /**
     * * Check if should be a Dropdown.
     * @param {object} properties - NavMenu properties.
     * @memberof NavMenu
     */
    checkDropdowns(properties = {
        dropdown: {
            //
        },
    }){
        // ? Dropdown creation.
    }

    /**
     * * Check if should be a Sidebar.
     * @param {object} properties - NavMenu properties.
     * @memberof NavMenu
     */
    checkSidebars(properties = {
        sidebar: {
            id: ['menu', 'filters'],
            position: ['left', 'right'],
        },
    }){
        if(properties.sidebar && properties.sidebar.id && properties.sidebar.id.length){
            this.sidebars = [];
            for (let i = 0; i < properties.sidebar.id.length; i++) {
                const id = properties.sidebar.id[i];
                const position = properties.sidebar.position[i];
                this.sidebars.push(new Sidebar({
                    id: id,
                    position: position,
                }, {
                    open: false,
                }));
            }
        }
    }

    /**
     * * Check if should be a current NavMenu Link active.
     * @memberof NavMenu
     */
    checkCurrentPage(){
        if(this.states.current){
            Link.active(this.states.current, this.links);
        }
        // }else{
        //     throw new Error({
        //         status: 200,
        //         message: 'There is no current page.',
        //     });
        // }
    }
}
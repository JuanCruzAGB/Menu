// ? NavMenu repository.
import { Link } from './Link.js';
import { Substitute } from './Substitute.js';

// ? External repositories.
import { Sidebar } from '../../SidebarJS/js/Sidebar.js';
import { ScrollDetection } from '../../ScrollDetectionJS/js/ScrollDetection.js';

/**
 * * NavMenu makes an excellent navigation bar.
 * @export
 * @class NavMenu
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class NavMenu{
    /**
     * * Creates an instance of NavMenu.
     * @param {Object} properties NavMenu properties:
     * @param {String} properties.id NavMenu ID.
     * @param {Object} properties.sidebar NavMenu Sidebar properties:
     * @param {Object} properties.sidebar.id Sidebar ID.
     * @param {String[]} properties.sidebar.position Sidebar position.
     * @param {Object} [states] NavMenu states:
     * @param {Boolean} [states.current] NavMenu current status.
     * @param {Boolean} [states.fixed] NavMenu fixed status.
     * @param {Boolean} [states.hideOnScrollDown] NavMenu hide on scroll down status.
     * @memberof NavMenu
     */
    constructor(properties = {
        id: 'nav-1',
        sidebar: {
            id: ['menu', 'filters'],
            position: ['left', 'right'],
        },
    }, states = {
        fixed: false,
        hideOnScrollDown: false,
        current: false,
    }){
        this.setProperties(properties);
        this.setStates(states);
        this.setHTML();
        this.setLinks();
        this.checkCurrentStatus();
        this.checkFixedStatus();
    }

    /**
     * * Set the NavMenu properties.
     * @param {Object} properties NavMenu properties:
     * @param {String} properties.id NavMenu ID.
     * @param {Object} properties.sidebar NavMenu Sidebar properties:
     * @param {Object} properties.sidebar.id Sidebar ID.
     * @param {String[]} properties.sidebar.position Sidebar position.
     * @memberof NavMenu
     */
    setProperties(properties = {
        id: 'nav-1',
        sidebar: {
            id: ['menu', 'filters'],
            position: ['left', 'right'],
        },
    }){
        this.properties = {};
        this.setIdProperty(properties);
        this.setSidebars(properties);
    }

    /**
     * * Returns the NavMenu properties or an specific property.
     * @param {String} [property] Property name.
     * @returns {Object|*}
     * @memberof NavMenu
     */
    getProperties(property = ''){
        if (property && property != '') {
            return this.properties[property];
        } else {
            return this.properties;
        }
    }

    /**
     * * Check if there is a property.
     * @param {String} property Property name.
     * @returns {Boolean}
     * @memberof NavMenu
     */
    hasProperty(property = ''){
        if (this.properties.hasOwnProperty(property)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * * Change a property value.
     * @param {String} property Property name.
     * @param {*} value Property value.
     * @memberof NavMenu
     */
    changeProperty(property = '', value = ''){
        if (this.hasProperty(property)) {
            this.properties[property] = value;
        }
        switch (property) {
            default:
                break;
        }
    }

    /**
     * * Set the NavMenu ID.
     * @param {Object} properties NavMenu properties:
     * @param {String} properties.id NavMenu ID.
     * @memberof NavMenu
     */
    setIdProperty(properties = {
        id: 'nav-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'nav-1';
        }
    }

    /**
     * * Returns the NavMenu ID.
     * @returns {String}
     * @memberof NavMenu
     */
    getIdProperty(){
        return this.properties.id;
    }

    /**
     * * Set the NabMenu states.
     * @param {Object} [states] NavMenu states:
     * @param {Boolean} [states.current] NavMenu current status.
     * @param {Boolean} [states.fixed] NavMenu fixed status.
     * @param {Boolean} [states.hideOnScrollDown] NavMenu hide on scroll down status.
     * @memberof NabMenu
     */
    setStates(states = {
        current: false,
        fixed: false,
        hideOnScrollDown: false,
    }){
        this.states = {};
        this.setCurrentStatus(states);
        this.setFixedStatus(states);
        this.setScrollingToStatus(states);
        this.setHideOnScrollDownStatus(states);
    }

    /**
     * * Returns the Link states or an specific states.
     * @param {String} [property] States name.
     * @returns {Object|*}
     * @memberof NavMenu
     */
    getStates(property = ''){
        if (property && property != '') {
            return this.states[property];
        } else {
            return this.states;
        }
    }

    /**
     * * Check if there is a status.
     * @param {String} name Status name.
     * @returns {Boolean}
     * @memberof NavMenu
     */
    hasStates(name = ''){
        if (this.states.hasOwnProperty(name)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * * Change a status value.
     * @param {String} name Status name.
     * @param {*} value Status value.
     * @memberof NavMenu
     */
    changeStatus(name = '', value = ''){
        if (this.hasStates(name)) {
            this.states[name] = value;
        }
        switch (name) {
            case 'current':
                this.checkCurrentStatus();
                if (this.getStates('fixed')) {
                    this.changeStatus('fixed', false);
                }
                NavMenu.breakFix({navmenu: this});
                break;
            case 'fixed':
                if (this.getHTML()) {
                    if (this.getStates('fixed')) {
                        if (this.getStates('hideOnScrollDown')) {
                            if (this.getStates('scrollingTo')) {
                                this.getHTML().classList.remove('unfixed');
                                this.getHTML().classList.add('fixed');
                            } else {
                                this.getHTML().classList.add('unfixed');
                                this.getHTML().classList.remove('fixed');
                            }
                            this.setSubstitute();
                        } else if (!this.getHTML().classList.contains('fixed')) {
                            this.getHTML().classList.add('fixed');
                            this.setSubstitute();
                        }
                    } else {
                        this.getHTML().classList.remove('fixed');
                        this.removeSubstitute();
                        this.getHTML().classList.remove('unfixed');
                    }
                }
                break;
        }
    }

    /**
     * * Set the NavMenu current status.
     * @param {Object} [states] NavMenu states:
     * @param {Boolean} [states.current] NavMenu current status.
     * @memberof NavMenu
     */
    setCurrentStatus(states = {
        current: false,
    }){
        if (states.hasOwnProperty('current')) {
            this.states.current = states.current;
        } else {
            this.states.current = false;
        }
    }

    /**
     * * Returns the NavMenu current status.
     * @returns {Boolean}
     * @memberof NavMenu
     */
    getCurrentStatus(){
        return this.states.current;
    }

    /**
     * * Check the NavMenu current active Link status.
     * @memberof NavMenu
     */
    checkCurrentStatus(){
        if(this.getStates('current')){
            Link.active(this.getStates('current'), this.getLinks());
        }
    }

    /**
     * * Set the NavMenu fixed status.
     * @param {Object} [states] NavMenu states:
     * @param {Boolean} [states.fixed] NavMenu fixed status.
     * @memberof NavMenu
     */
    setFixedStatus(states = {
        fixed: false,
    }){
        if (states.hasOwnProperty('fixed')) {
            this.states.fixed = states.fixed;
        } else {
            this.states.fixed = false;
        }
    }

    /**
     * * Returns the NavMenu fixed status.
     * @returns {Boolean}
     * @memberof NavMenu
     */
    getFixedStatus(){
        return this.states.fixed;
    }

    /**
     * * Check if the NavMenu should be fixed.
     * @memberof NavMenu
     */
    checkFixedStatus(){
        if(this.getStates('fixed')){
            let height = this.getHTML().offsetHeight;
            if (document.querySelector('body').offsetHeight - height > (Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) + 100)) {
                let scrolldetection = new ScrollDetection({
                    location: {
                        min: 0, max: height
                    }, direction: 'Y',
                }, {
                    success: {
                        function: NavMenu.breakFix,
                        params: {navmenu: this}
                    }, error: {
                        function: NavMenu.fix,
                        params: {navmenu: this}
                }});
                if (ScrollDetection.currentLocation('Y') > height) {
                    NavMenu.fix({scrolldetection: scrolldetection, navmenu: this});
                }
            }
        }
    }

    /**
     * * Set the NavMenu hide on scroll down status.
     * @param {Object} [states] NavMenu states:
     * @param {Boolean} [states.fixed] NavMenu fixed status.
     * @param {Boolean} [states.hideOnScrollDown] NavMenu hide on scroll down status.
     * @param {Boolean} [states.current] NavMenu current status.
     * @memberof NavMenu
     */
    setHideOnScrollDownStatus(states = {
        hideOnScrollDown: false,
    }){
        if (states.hasOwnProperty('hideOnScrollDown')) {
            this.states.hideOnScrollDown = states.hideOnScrollDown;
        } else {
            this.states.hideOnScrollDown = false;
        }
    }

    /**
     * * Returns the NavMenu hide on scroll down status.
     * @returns {Boolean}
     * @memberof NavMenu
     */
    getHideOnScrollDownStatus(){
        return this.states.hideOnScrollDown;
    }

    /**
     * * Set the NavMenu scrolling to status.
     * @param {Object} [states] NavMenu states:
     * @param {Boolean} [states.scrollingTo] NavMenu scrolling to status.
     * @memberof NavMenu
     */
    setScrollingToStatus(states = {
        scrollingTo: null,
    }){
        if (states.hasOwnProperty('scrollingTo')) {
            this.states.scrollingTo = states.scrollingTo;
        } else {
            this.states.scrollingTo = null;
        }
    }

    /**
     * * Returns the NavMenu scrolling to status.
     * @returns {Boolean}
     * @memberof NavMenu
     */
    getScrollingToStatus(){
        return this.states.scrollingTo;
    }

    /**
     * * Set the NavMenu HTML Element.
     * @memberof NavMenu
     */
    setHTML(){
        this.html = document.querySelector(`#${ this.getProperties('id') }.nav-menu`);
    }

    /**
     * * Returns the NavMenu HTML Element.
     * @returns {HTMLElement}
     * @memberof NavMenu
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Set the NavMenu Sidebars.
     * @param {Object} properties NavMenu properties:
     * @param {Object} properties.sidebar NavMenu Sidebar properties:
     * @param {Object} properties.sidebar.id Sidebar ID.
     * @param {String[]} properties.sidebar.position Sidebar position.
     * @memberof NavMenu
     */
    setSidebars(properties = {
        sidebar: {
            id: ['menu', 'filters'],
            position: ['left', 'right'],
        },
    }){
        this.sidebars = [];
        if (properties.hasOwnProperty('sidebar')) {
            for (const key in properties.sidebar.id) {
                this.sidebars.push(new Sidebar({
                    id: properties.sidebar.id[key],
                    position: properties.sidebar.position[key],
                }, {
                    open: false,
                }));
            }
        }
    }

    /**
     * * Returns the NavMenu Sidebars.
     * @returns {Sidebar[]}
     * @memberof NavMenu
     */
    getSidebars(){
        return this.sidebars;
    }

    /**
     * * Set the NavMenu Links.
     * @memberof NavMenu
     */
    setLinks(){
        this.links = Link.getDomHTML(this);
    }

    /**
     * * Returns the NavMenu Links.
     * @returns {Link[]}
     * @memberof NavMenu
     */
    getLinks(){
        return this.links;
    }

    /**
     * * Set the NavMenu Subsitute.
     * @memberof NavMenu
     */
    setSubstitute(){
        if (!this.hasOwnProperty('substitute')) {
            this.substitute = new Substitute({}, this);
        } else {
            this.substitute.appendDomHTML(this);
        }
    }

    /**
     * * Returns the NavMenu Subsitute.
     * @returns {Substitute}
     * @memberof NavMenu
     */
    getSubsitute(){
        return this.substitute;
    }

    /**
     * * Remove the NavMenu Subsitute.
     * @memberof NavMenu
     */
    removeSubstitute(){        
        if (this.hasOwnProperty('substitute')) {
            this.getSubsitute().removeDomHTML(this);
        }
    }

    /**
     * * Fix the NavMenu.
     * @static
     * @param {Object} data ScrollDetection auxiliar data.
     * @memberof NavMenu
     */
    static fix(data){
        if (data.hasOwnProperty('scrolldetection') && data.navmenu.getStates('hideOnScrollDown')) {
            data.navmenu.changeStatus('scrollingTo', data.scrolldetection.getDirectionScrolled());
            data.navmenu.changeStatus('fixed', true);
        } else {
            data.navmenu.changeStatus('fixed', true);
        }
    }

    /**
     * * Delete the NavMenu fix property.
     * @static
     * @param {Object} data ScrollDetection auxiliar data.
     * @memberof NavMenu
     */
    static breakFix(data){
        if (data.navmenu.getStates('fixed')) {
            data.navmenu.changeStatus('fixed', false);
        }
    }
}
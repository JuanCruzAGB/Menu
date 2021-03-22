// ? JuanCruzAGB repository
import Class from "../../JuanCruzAGB/Class.js";

// ? NavMenu repository.
import Link from './Link.js';
import Substitute from './Substitute.js';

// ? External repositories.
import Sidebar from '../../SidebarJS/js/Sidebar.js';
import ScrollDetection from '../../ScrollDetectionJS/js/ScrollDetection.js';

/**
 * * NavMenu makes an excellent navigation bar.
 * @export
 * @class NavMenu
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Class
 */
export class NavMenu extends Class {
    /**
     * * Creates an instance of NavMenu.
     * @param {object} [props] NavMenu properties:
     * @param {string} [props.id='nav-1'] NavMenu primary key.
     * @param {object} [props.sidebar] NavMenu Sidebar properties:
     * @param {string[]} [props.sidebar.id=string[]] Sidebar primary key.
     * @param {string[]} [props.sidebar.position=string[]] Sidebar position.
     * @param {object} [states] NavMenu states:
     * @param {string} [states.current=false] NavMenu current state.
     * @param {boolean} [states.fixed=false] NavMenu fixed state.
     * @param {boolean} [states.hideOnScrollDown=false] NavMenu hide on scroll down state.
     * @memberof NavMenu
     */
    constructor (props = {
        id: 'nav-1',
        sidebar: {
            id: ['menu', 'filters'],
            position: ['left', 'right'],
        },
    }, states = {
        fixed: false,
        hideOnScrollDown: false,
        current: false,
    }) {
        super(props, states);
        if (props.hasOwnProperty('sidebar')) {
            this.setSidebars(props);
        }
        this.setHTML(`#${ this.props.id }.nav-menu`);
        this.setLinks();
        this.checkStates();
    }

    /**
     * * Check the NavMenu states values.
     * @memberof NavMenu
     */
    checkStates () {
        this.checkCurrentState();
        this.checkFixedState();
    }

    /**
     * * Check the NavMenu current state value.
     * @memberof NavMenu
     */
    checkCurrentState () {
        if(this.states.current){
            Link.active(this.states.current, this.links);
        }
    }

    /**
     * * Check NavMenu fixed state value.
     * @memberof NavMenu
     */
    checkFixedState () {
        if (this.html) {
            if (this.states.fixed) {
                if (this.states.hideOnScrollDown) {
                    if (this.states.scrollingTo) {
                        this.html.classList.remove('unfixed');
                        this.html.classList.add('fixed');
                    } else {
                        this.html.classList.add('unfixed');
                        this.html.classList.remove('fixed');
                    }
                    this.setSubstitute();
                } else if (!this.html.classList.contains('fixed')) {
                    this.html.classList.add('fixed');
                    this.setSubstitute();
                }
            } else {
                this.html.classList.remove('fixed');
                this.removeSubstitute();
                this.html.classList.remove('unfixed');
            }
        }
        if (this.states.fixed) {
            let height = this.html.offsetHeight;
            if (document.querySelector('body').offsetHeight - height > (Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) + 100)) {
                let scrolldetection = new ScrollDetection({
                    location: {
                        min: 0, max: height
                    }, direction: 'Y',
                }, {
                    success: {
                        function: NavMenu.breakFix,
                        params: { navmenu: this }
                    }, error: {
                        function: NavMenu.fix,
                        params: { navmenu: this }
                }});
                if (ScrollDetection.currentLocation('Y') > height) {
                    NavMenu.fix({
                        scrolldetection: scrolldetection,
                        navmenu: this
                    });
                }
            }
        }
    }

    /**
     * * Set the NavMenu Sidebars.
     * @param {object} [props] NavMenu properties:
     * @param {string} [props.id='nav-1'] NavMenu primary key.
     * @param {object} [props.sidebar] NavMenu Sidebar properties:
     * @param {string[]} [props.sidebar.id=string[]] Sidebar primary key.
     * @param {string[]} [props.sidebar.position=string[]] Sidebar position.
     * @memberof NavMenu
     */
    setSidebars (props = {
        sidebar: {
            id: ['menu', 'filters'],
            position: ['left', 'right'],
        },
    }) {
        if (!this.hasOwnProperty('sidebars')) {
            this.sidebars = [];
        }
        if (props.hasOwnProperty('sidebar')) {
            let sidebarProps;
            for (const key in props.sidebar.id) {
                if (props.sidebar.id.hasOwnProperty(key)) {
                    sidebarProps = {
                        id: props.sidebar.id[parseInt(key)],
                        position: props.sidebar.position[parseInt(key)],
                    };
                    this.sidebars.push(new Sidebar(sidebarProps, {
                        open: false,
                    }));
                }
            }
        }
    }

    /**
     * * Set the NavMenu Links.
     * @memberof NavMenu
     */
    setLinks () {
        this.links = Link.getDomHTML(this);
    }

    /**
     * * Set the NavMenu Subsitute.
     * @memberof NavMenu
     */
    setSubstitute () {
        if (!this.hasOwnProperty('substitute')) {
            this.substitute = new Substitute({}, this);
        } else {
            this.substitute.appendDomHTML(this);
        }
    }

    /**
     * * Remove the NavMenu Subsitute.
     * @memberof NavMenu
     */
    removeSubstitute () {        
        if (this.hasOwnProperty('substitute')) {
            this.subsitute.removeDomHTML(this);
        }
    }

    /**
     * * Fix the NavMenu.
     * @static
     * @param {object} data ScrollDetection auxiliar data.
     * @memberof NavMenu
     */
    static fix (data) {
        if (data.hasOwnProperty('scrolldetection') && data.navmenu.states.hideOnScrollDown) {
            data.navmenu.setStates({
                scrollingTo: data.scrolldetection.props.direction.scrolledTo,
                fixed: true,
            });
        } else {
            data.navmenu.setStates('fixed', true);
        }
    }

    /**
     * * Delete the NavMenu fix property.
     * @static
     * @param {object} data ScrollDetection auxiliar data.
     * @memberof NavMenu
     */
    static breakFix (data) {
        if (data.navmenu.states.fixed) {
            data.navmenu.setStates('fixed', false);
        }
    }
}

// ? NavMenu childs
NavMenu.Link = Link;
NavMenu.Substitute = Substitute;

// ? Default export
export default NavMenu;
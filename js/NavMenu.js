// ? JuanCruzAGB repository
import Class from "../../JuanCruzAGB/js/Class.js";

// ? NavMenu repository.
import Link from './Link.js';

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
     * @param {object} [state] NavMenu state:
     * @param {string} [state.current=false] NavMenu current state.
     * @param {boolean} [state.fixed=false] NavMenu fixed state.
     * @param {boolean} [state.hideOnScrollDown=false] NavMenu hide on scroll down state.
     * @memberof NavMenu
     */
    constructor (props = {
        id: 'nav-1',
        sidebar: {
            id: ['menu', 'filters'],
            position: ['left', 'right'],
        },
    }, state = {
        fixed: false,
        hideOnScrollDown: false,
        current: false,
    }) {
        super(props, state);
        if (props.hasOwnProperty('sidebar')) {
            this.setSidebars(props);
        }
        this.setHTML(`#${ this.props.id }.nav-menu`);
        this.setLinks();
        this.checkState();
    }

    /**
     * * Check the NavMenu state values.
     * @memberof NavMenu
     */
    checkState () {
        this.checkCurrentState();
        this.checkFixedState();
    }

    /**
     * * Check the NavMenu current state value.
     * @memberof NavMenu
     */
    checkCurrentState () {
        if(this.state.current){
            Link.active(this.state.current, this.links);
        }
    }

    /**
     * * Check NavMenu fixed state value.
     * @memberof NavMenu
     */
    checkFixedState () {
        let height = this.html.offsetHeight;
        document.querySelector('body').style.setProperty('--nav-height', `${ height }px`);
        if (this.state.fixed) {
            if (!this.scrolldetection) {
                this.scrolldetection = new ScrollDetection({
                    location: {
                        min: 0, max: height
                    }, direction: {
                        scrollbar: 'Y',
                }}, {
                    success: {
                        function: NavMenu.breakFix,
                        params: { navmenu: this }
                    }, error: {
                        function: NavMenu.fix,
                        params: { navmenu: this }
                }});
            }
            if (ScrollDetection.currentLocation('Y') > height) {
                this.html.classList.add('fixed');
                document.querySelector('body').classList.add('substitute');
                if (this.state.hideOnScrollDown) {
                    if (this.state.scrollingTo === true) {
                        this.html.classList.remove('unfixed');
                    } else if (this.state.scrollingTo === false) {
                        console.log('unfixed');
                        this.html.classList.add('unfixed');
                    }
                }
            } else {
                this.html.classList.remove('fixed');
                document.querySelector('body').classList.remove('substitute');
                if (this.state.hideOnScrollDown) {
                    this.html.classList.remove('unfixed');
                }
            }
        } else {
            if (this.scrolldetection) {
                this.html.classList.remove('fixed');
                document.querySelector('body').classList.remove('substitute');
                if (this.state.hideOnScrollDown) {
                    this.html.classList.remove('unfixed');
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
     * * Fix the NavMenu.
     * @static
     * @param {object} data ScrollDetection auxiliar data.
     * @memberof NavMenu
     */
    static fix (data) {
        if (data.navmenu.hasOwnProperty('scrolldetection') && data.navmenu.state.hideOnScrollDown) {
            data.navmenu.setState({
                scrollingTo: data.navmenu.scrolldetection.props.direction.scrolledTo,
                fixed: true,
            });
        } else {
            data.navmenu.setState('fixed', true);
        }
        data.navmenu.checkFixedState();
    }

    /**
     * * Delete the NavMenu fix property.
     * @static
     * @param {object} data ScrollDetection auxiliar data.
     * @memberof NavMenu
     */
    static breakFix (data) {
        if (data.navmenu.state.fixed) {
            data.navmenu.setState('fixed', false);
            data.navmenu.checkFixedState();
        }
    }
}

// ? NavMenu childs
NavMenu.Link = Link;

// ? Default export
export default NavMenu;
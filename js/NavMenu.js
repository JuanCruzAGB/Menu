// ? JuanCruzAGB repository
import Class from "../../JuanCruzAGB/js/Class.js";

// ? NavMenu repository.
import Link from "./Link.js";

// ? External repositories.
import Sidebar from "../../SidebarJS/js/Sidebar.js";

/**
 * * NavMenu makes an excellent navigation bar.
 * @export
 * @class NavMenu
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 * @extends Class
 */
export default class NavMenu extends Class {
    /**
     * * Creates an instance of NavMenu.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id="nav-1"] NavMenu primary key.
     * @param {object} [data.props.sidebar] NavMenu Sidebar data.
     * @param {object} [data.state]
     * @param {string} [data.state.current=false] NavMenu current Link state.
     * @param {object} [data.callbacks]
     * @param {object} [data.callbacks.active]
     * @param {function} [data.callbacks.active.function]
     * @param {object} [data.callbacks.active.params]
     * @memberof NavMenu
     */
    constructor (data = {
        props: {
            id: "nav-1",
            sidebar: {
                // TODO
            },
        }, state: {
            current: false,
        }, callbacks: {
            active: {
                function: (params) => { /* console.log(params); */ },
                params: {},
            },
        },
    }) {
        super({
            props: {
                ...NavMenu.props,
                ...(data && data.hasOwnProperty("props")) ? data.props : {},
            }, state: {
                ...NavMenu.state,
                ...(data && data.hasOwnProperty("state")) ? data.state : {},
            },
        });
        this.setCallbacks({ ...NavMenu.callbacks, ...((data && data.hasOwnProperty("callbacks")) ? data.callbacks: {}) });
        if (this.props.hasOwnProperty("sidebar")) {
            this.setSidebars();
        }
        this.setHTML(`#${ this.props.id }.nav-menu`);
        this.setLinks();
        this.checkState();
    }

    /**
     * * Set the NavMenu Links.
     * @memberof NavMenu
     */
    setLinks () {
        this.links = Link.generate(this);
    }

    /**
     * * Set the NavMenu Sidebars.
     * @memberof NavMenu
     */
    setSidebars () {
        if (!this.sidebars) {
            this.sidebars = [];
        }
        if (this.props.hasOwnProperty("sidebar")) {
            if (this.props.sidebar instanceof Array) {
                for (const sidebar of this.props.sidebar) {
                    if (sidebar instanceof Object) {
                        this.sidebars.push(new Sidebar(sidebar));
                    }
                }
            } else if (this.props.sidebar instanceof Object) {
                this.sidebars.push(new Sidebar(this.props.sidebar));
            }
        }
    }

    /**
     * * Check the NavMenu state values.
     * @memberof NavMenu
     */
    checkState () {
        this.checkCurrentState();
    }

    /**
     * * Check the NavMenu current state value.
     * @memberof NavMenu
     */
    checkCurrentState () {
        if (this.state.current) {
            this.active(this.state.current);
        }
    }

    /**
     * * Change the NavMenu Link active.
     * @param {string} current
     * @param {object} params Active callback function params.
     * @returns {boolean}
     * @memberof NavMenu
     */
    active (current = false, params = {}) {
        if (current) {
            this.setState("current", current);
            let found = false;
            for (const link of this.links) {
                if (link.props.target == this.state.current) {
                    link.active();
                    found = link;
                }
                if (link.props.target != this.state.current) {
                    link.inactive();
                }
            }
            this.execute("active", {
                ...params,
                ...this.callbacks.active.params,
                current: current,
                link: found,
                NavMenu: this,
            });
            return found;
        }
        if (!current) {
            console.error("Current param is required to active a Link");
            return false;
        }
    }

    /**
     * @static
     * @var {object} props Default properties.
     */
    static props = {
        id: "nav-1",
        sidebar: {
            // TODO
        },
    }
    
    /**
     * @static
     * @var {object} state Default state.
     */
    static state = {
        current: false,
        // TODO: generate: false,
    }
    
    /**
     * @static
     * @var {object} callbacks Default callbacks.
     */
    static callbacks= {
        active: {
            function: (params) => { /* console.log(params); */ },
            params: {},
        },
    }

    /** 
     * @static
     * @var {Link} Link
     */
    static Link = Link

    /** 
     * @static
     * @var {Sidebar} Sidebar
     */
    static Sidebar = Sidebar
}
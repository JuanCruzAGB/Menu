// ? JuanCruzAGB repository
import Class from "@juancruzagb/src/js/Class.js";

// ? External repository.
import Button from "@juancruzagb/htmlcreator/js/Buttons/Button.js";
import Link from "@juancruzagb/htmlcreator/js/Buttons/Link.js";

/**
 * * Menu makes an excellent navigation menu.
 * @export
 * @class Menu
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 * @extends Class
 */
export default class Menu extends Class {
    /**
     * * Creates an instance of Menu.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id="nav-1"] Menu primary key.
     * @param {object} [data.props.sidebar] Menu Sidebar data.
     * @param {object} [data.state]
     * @param {string} [data.state.current=false] Menu current Link state.
     * @param {object} [data.callbacks]
     * @param {object} [data.callbacks.active]
     * @param {function} [data.callbacks.active.function]
     * @param {object} [data.callbacks.active.params]
     * @memberof Menu
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
                function: params => { /* console.log(params); */ },
                params: {},
            },
        },
    }) {
        super({
            props: {
                ...Menu.props,
                ...(data && data.hasOwnProperty("props")) ? data.props : {},
            }, state: {
                ...Menu.state,
                ...(data && data.hasOwnProperty("state")) ? data.state : {},
            },
        });
        this.setCallbacks({
            ...Menu.callbacks,
            ...(data && data.hasOwnProperty("callbacks")) ? data.callbacks: {},
        });
        if (this.props.hasOwnProperty("sidebar")) {
            this.setSidebars();
        }
        this.setHTML(`#${ this.props.id }.nav-menu`);
        this.setLinks();
        this.checkState();
    }

    /**
     * * Set the Menu Links.
     * @memberof Menu
     */
    setLinks () {
        if (!this.links) {
            this.links = [];
        }
        let htmls = document.querySelectorAll(`#${ id }.nav-menu :where(.nav-link, .nav-button)`);
        for (const key in htmls) {
            if (Object.hasOwnProperty.call(htmls, key)) {
                let link;
                if (htmls[key].nodeName == "A") {
                    link = new Link({
                        props: {
                            id: `${ this.props.id }-link-${ key }`,
                            url: htmls[key].hasAttribute("href") ? htmls[key].href : "#",
                        }, state: {
                            active: htmls[key].classList.contains("active"),
                        }, html: htmls[key],
                    });
                } else if (htmls[key].nodeName == "BUTTON") {
                    link = new Button({
                        props: {
                            id: `${ this.props.id }-link-${ key }`,
                        }, state: {
                            active: htmls[key].classList.contains("active"),
                        }, html: htmls[key],
                    });
                    link.setProps('url', htmls[key].hasAttribute("href") ? htmls[key].href : "#");
                }
                link.addEventListener("click", (e) => {
                    if (link.props.nodeName == "BUTTON") {
                        e.preventDefault();
                    }
                    this.active(link.props.url);
                });
                this.links.push(link);
            }
        }
    }

    /**
     * * Set the Menu Sidebars.
     * @memberof Menu
     */
    async setSidebars () {
        const Sidebar = await import("@juancruzagb/sidebar/js/Sidebar.js");
        
        if (!this.sidebars) {
            this.sidebars = [];
        }
        if (this.props.hasOwnProperty("sidebar")) {
            if (this.props.sidebar instanceof Array) {
                for (const data of this.props.sidebar) {
                    if (data instanceof Object) {
                        this.sidebars.push(new Sidebar.default(data));
                    }
                }
            } else if (this.props.sidebar instanceof Object) {
                this.sidebars.push(new Sidebar.default(this.props.sidebar));
            }
        }
    }

    /**
     * * Check the Menu state values.
     * @memberof Menu
     */
    checkState () {
        this.checkCurrentState();
    }

    /**
     * * Check the Menu current state value.
     * @memberof Menu
     */
    checkCurrentState () {
        if (this.state.current) {
            this.active(this.state.current);
        }
    }

    /**
     * * Change the Menu Link active.
     * @param {string} current
     * @param {object} params Active callback function params.
     * @returns {boolean}
     * @memberof Menu
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
                ...this.callbacks.active.params,
                ...params,
                current: current,
                link: found,
                Menu: this,
            });
            return found;
        }
        if (!current) {
            throw new Error("Current param is required to active a Link");
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
    }
    
    /**
     * @static
     * @var {object} callbacks Default callbacks.
     */
    static callbacks= {
        active: {
            function: params => { /* console.log(params); */ },
            params: {},
        },
    }

    /** 
     * @static
     * @var {Link} Link
     */
    static Link = Link
}
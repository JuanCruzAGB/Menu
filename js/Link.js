// ? JuanCruzAGB repository
import Class from "../../JuanCruzAGB/js/Class.js";

/**
 * * Link controls the NavMenu Links.
 * @export
 * @class Link
 * @extends Class
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export default class Link extends Class {
    /**
     * * Creates an instance of Link.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id="link-1"] Link primary key.
     * @param {string} [data.props.target="#"]
     * @param {string} [data.props.type="link"]
     * @param {object} [data.state]
     * @param {boolean} [data.state.active=false] If the Link should be active.
     * @param {string} html Link HTML Element.
     * @param {NavMenu} NavMenu Link NavMenu parent.
     * @memberof Link
     */
    constructor (data = {
        props: {
            id: "link-1",
            target: "#",
            type: "link",
        }, state: {
            active: false,
        }, html,
        NavMenu,
    }) {
        super({ ...Link.props, ...((data && data.hasOwnProperty("props")) ? data.props : {}) }, { ...Link.state, ...((data && data.hasOwnProperty("state")) ? data.state : {}) });
        this.setHTML(data.html);
        this.html.addEventListener("click", (e) => {
            if (this.props.type == "button") {
                e.preventDefault();
            }
            data.NavMenu.active(this.props.target);
        });
        this.checkState();
    }

    /**
     * * Check the Link state values.
     * @memberof Link
     */
    checkState () {
        this.checkActiveState();
    }

    /**
     * * Check the Link active state value.
     * @memberof Link
     */
    checkActiveState () {
        switch (this.state.active) {
            case true:
                this.active();
                break;
            case false:
                this.inactive();
                break;
        }
    }

    /**
     * * Active the Link.
     * @memberof Link
     */
    active () {
        this.setState("active", true);
        this.html.classList.add("active");
    }

    /**
     * * Inactive the Link.
     * @memberof Link
     */
    inactive () {
        this.setState("active", true);
        this.html.classList.remove("active");
    }

    /**
     * * Returns all the NavMenu Links.
     * @static
     * @param {NavMenu} NavMenu
     * @returns {Link[]}
     * @memberof Link
     */
    static generate (NavMenu) {
        let links = [];
        let htmls = this.querySelector(NavMenu.props.id);
        for (const key in htmls) {
            if (Object.hasOwnProperty.call(htmls, key)) {
                links.push(new this({
                    props: {
                        id: `link-${ key }`,
                        target: (htmls[key].hasAttribute("href") ? htmls[key].href : "#"),
                        type: (htmls[key].classList.contains("nav-link") ? "link" : "button"),
                    }, state: {
                        active: htmls[key].classList.contains("active"),
                    }, html: htmls[key],
                    NavMenu: NavMenu,
                }));
            }
        }
        return links;
    }

    /**
     * * Returns all the NavMenu Links HTMLElements.
     * @static
     * @param {string} id NavMenu primary key.
     * @returns {HTMLElement[]}
     * @memberof Link
     */
    static querySelector (id = false) {
        if (id) {
            return document.querySelectorAll(`#${ id }.nav-menu :where(.nav-link, .nav-button)`);
        }
        if (!id) {
            console.error("ID param is required to get the NavMenu Links");
            return [];
        }
    }

    /**
     * @static
     * @var {object} props Default properties.
     */
    static props = {
        id: "link-1",
        target: "#",
        type: "link",
    }
    
    /**
     * @static
     * @var {object} state Default state.
     */
    static state = {
        active: false,
    }
}
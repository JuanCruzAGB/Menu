// ? JuanCruzAGB repository
import Class from "../../JuanCruzAGB/js/Class.js";

// ? NavMenuJS repository
import NavMenu from "./NavMenu.js";

/** @var {object} defaultProps Default properties. */
let defaultProps = {
    id: 'link-1',
    target: '#',
};

/** @var {object} defaultState Default state. */
let defaultState = {
    active: false,
};

/**
 * * Link controls the NavMenu links.
 * @export
 * @class Link
 * @extends Class
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class Link extends Class{
    /**
     * * Creates an instance of Link.
     * @param {object} [props] Link properties
     * @param {string} [props.id='link-1'] Link primary key.
     * @param {string} [props.target='#'] Link target.
     * @param {object} [state] Link state:
     * @param {boolean} [state.active=false] Link active status.
     * @param {string} html Link HTML Element.
     * @param {NavMenu} nav Link NavMenu parent.
     * @memberof Link
     */
    constructor (props = {
        id: 'link-1',
        target: '#',
    }, state = {
        active: false,
    }, html, nav) {
        super({ ...defaultProps, ...props }, { ...defaultState, ...state });
        this.setHTML(html);
        let instance = this;
        this.html.addEventListener('click', function (e) {
            nav.setState({
                current: instance.props.target,
            });
            nav.checkCurrentState();
        });
    }

    /**
     * * Check the Link active state value.
     * @memberof Link
     */
    checkActiveState () {
        if (this.state.active) {
            this.html.classList.add('active');
        } else {
            this.html.classList.remove('active');
        }
    }

    /**
     * * Get all the NavMenu Links.
     * @static
     * @param {NavMenu} nav Link NavMenu parent.
     * @returns {Link[]}
     * @memberof Link
     */
    static getDomHTML (nav) {
        let links = [];
        let htmls = document.querySelectorAll(`#${ nav.props.id }.nav-menu .nav-link`);
        let key = 0;
        for (const html of htmls) {
            let props = Link.generateProperties(html);
            let state = Link.generateState(html);
            props.id = `link-${ key }`;
            links.push(new this(props, state, html, nav));
            key++;
        }
        return links;
    }

    /**
     * * Returns the Link props genereted from a HTML Element.
     * @static
     * @param {HTMLElement} html Link HTML Element
     * @returns {object}
     * @memberof Link
     */
    static generateProperties (html) {
        let props = {};
        if (html.nodeName == 'A' && html.classList.contains('nav-link')) {
            props.target = html.href;
        }
        return props;
    }

    /**
     * * Returns the Link state genereted from a HTML Element.
     * @static
     * @param {HTMLElement} html Link HTML Element
     * @returns {object}
     * @memberof Link
     */
    static generateState (html) {
        let state = {
            active: html.classList.contains('active'),
        };
        return state;
    }

    /**
     * * Active a Link.
     * @static
     * @param {string} current Current Link active.
     * @param {Links[]} links Links to activate.
     * @memberof Link
     */
    static active(current, links){
        for (const link of links) {
            if (link.props.target === current) {
                link.setState('active', true);
            } else {
                link.setState('active', false);
            }
        }
    }
}

// ? Default export
export default Link;
// ? JuanCruzAGB repository
import Class from "../../JuanCruzAGB/Class.js";

/**
 * * Substitute controls the NavMenu substitute.
 * @export
 * @class Substitute
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Class
 */
export class Substitute extends Class {
    /**
     * * Creates an instance of Substitute.
     * @param {Object} [props] Substitute properties:
     * @param {String} [props.id] Substitute primary key.
     * @param {NavMenu} nav
     * @memberof Substitute
     */
    constructor (props = {
        id: 'substitute-1',
    }, nav) {
        super(props);
        this.createHTML(nav);
    }

    /**
     * * Creates the Substitute HTML Element.
     * @param {NavMenu} nav
     * @memberof Substitute
     */
    createHTML (nav) {
        this.html = document.createElement('aside');
        this.html.classList.add('substitute');
        nav.html.parentNode.appendChild(this.html);
    }

    /**
     * * Appends the Substitute HTML Element from the document.
     * @param {NavMenu} nav
     * @memberof Substitute
     */
    appendDomHTML (nav) {
        nav.html.parentNode.appendChild(this.html);
    }

    /**
     * * Removes the Substitute HTML Element from the document.
     * @param {NavMenu} nav
     * @memberof Substitute
     */
    removeDomHTML (nav) {
        nav.html.parentNode.removeChild(this.html);
    }
}

// ? Default export
export default Substitute;
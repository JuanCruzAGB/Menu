/**
 * * Substitute controls the NavMenu substitute.
 * @export
 * @class Substitute
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class Substitute{
    /**
     * * Creates an instance of Substitute.
     * @param {Object} [properties] Substitute properties:
     * @param {String} [properties.id] Substitute ID.
     * @param {NavMenu} nav
     * @memberof Substitute
     */
    constructor(properties = {
        id: 'substitute-1',
    }, nav){
        this.setProperties(properties);
        this.createHTML(nav);
    }

    /**
     * * Set the Substitute properties.
     * @param {Object} [properties] Substitute properties:
     * @param {String} [properties.id] Substitute ID.
     * @memberof Substitute
     */
    setProperties(properties = {
        id: 'substitute-1',
    }){
        this.properties = {};
        this.setIdProperty(properties);
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
     * * Set the Substitute ID.
     * @param {Object} [properties] Substitute properties:
     * @param {String} [properties.id] Substitute ID.
     * @memberof Substitute
     */
    setIdProperty(properties = {
        id: 'substitute-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'substitute-1';
        }
    }

    /**
     * * Returns the Substitute ID.
     * @returns {String}
     * @memberof Substitute
     */
    getIdProperty(){
        return this.properties.id;
    }

    /**
     * * Returns the Substitute HTML Element.
     * @returns {HTMLElement}
     * @memberof Substitute
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Creates the Substitute HTML Element.
     * @param {NavMenu} nav
     * @memberof Substitute
     */
    createHTML(nav){
        this.html = document.createElement('aside');
        this.html.classList.add('substitute');
        nav.getHTML().parentNode.appendChild(this.html);
    }

    /**
     * * Appends the Substitute HTML Element from the document.
     * @param {NavMenu} nav
     * @memberof Substitute
     */
    appendDomHTML(nav){
        nav.getHTML().parentNode.appendChild(this.getHTML());
    }

    /**
     * * Removes the Substitute HTML Element from the document.
     * @param {NavMenu} nav
     * @memberof Substitute
     */
    removeDomHTML(nav){
        nav.getHTML().parentNode.removeChild(this.getHTML());
    }
}
/**
 * * Link controls the NavMenu links.
 * @export
 * @class Link
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class Link{
    /**
     * * Creates an instance of Link.
     * @param {Object} [properties] Link properties:
     * @param {String} [properties.id] Link ID.
     * @param {String} [properties.target] Link target.
     * @param {Object} [states] Link states:
     * @param {Boolean} [states.active] Link active status.
     * @param {HTMLElement} html Link HTML Element.
     * @param {NavMenu} nav Link NavMenu parent.
     * @memberof Link
     */
    constructor(properties = {
        id: 'link-1',
        target: '#',
    }, states = {
        active: false,
    }, html, nav){
        this.setProperties(properties);
        this.setStates(states);
        this.setHTML(html, nav);
    }

    /**
     * * Set the Link properties.
     * @param {Object} [properties] Link properties:
     * @param {String} [properties.id] Link ID.
     * @param {String} [properties.target] Link target.
     * @memberof Link
     */
    setProperties(properties = {
        id: 'link-1',
        target: '#',
    }){
        this.properties = {};
        this.setIDProperty(properties);
        this.setTargetProperty(properties);
    }

    /**
     * * Returns the Link properties or an specific property.
     * @param {String} [property] Property name.
     * @returns {Object|*}
     * @memberof Link
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
     * @memberof Link
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
     * @memberof Link
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
     * * Set the Link ID.
     * @param {Object} [properties] Link properties:
     * @param {String} [properties.id] Link ID.
     * @memberof Link
     */
    setIDProperty(properties = {
        id: 'link-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'link-1';
        }
    }

    /**
     * * Returns the Link ID.
     * @returns {String}
     * @memberof Link
     */
    getIDProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Link target.
     * @param {Object} [properties] Link properties:
     * @param {String} [properties.target] Link target.
     * @memberof Link
     */
    setTargetProperty(properties = {
        target: '#',
    }){
        if (properties.hasOwnProperty('target')) {
            this.properties.target = properties.target;
        } else {
            this.properties.target = '#';
        }
    }

    /**
     * * Returns the Link target.
     * @returns {String}
     * @memberof Link
     */
    getTargetProperty(){
        return this.properties.id;
    }

    /**
     * * Set the NabMenu states.
     * @param {Object} [states] Link states:
     * @param {Boolean} [states.active] Link active status.
     * @memberof NabMenu
     */
    setStates(states = {
        active: false,
    }){
        this.states = {};
        this.setActiveStatus(states);
    }

    /**
     * * Returns the Link states or an specific states.
     * @param {String} [property] States name.
     * @returns {Object|*}
     * @memberof Link
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
     * @memberof Link
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
     * @memberof Link
     */
    changeStatus(name = '', value = ''){
        if (this.hasStates(name)) {
            this.states[name] = value;
        }
        switch (name) {
            case 'active':
                if (this.getStates('active')) {
                    this.getHTML().classList.add('active');
                } else {
                    this.getHTML().classList.remove('active');
                }
                break;
        }
    }

    /**
     * * Set the Link active state.
     * @param {Object} [states] Link states:
     * @param {Boolean} [states.active] Link active status.
     * @memberof Link
     */
    setActiveStatus(states = {
        active: false,
    }){
        if (states.hasOwnProperty('active')) {
            this.states.active = states.active;
        } else {
            this.states.active = false;
        }
    }

    /**
     * * Returns the Link active status.
     * @returns {Boolean}
     * @memberof Link
     */
    getActiveStatus(){
        return this.states.active;
    }

    /**
     * * Set the Link HTML Element.
     * @param {HTMLElement} html Link HTML Element.
     * @memberof Link
     */
    setHTML(html, nav){
        let instance = this;
        this.html = html;
        this.html.addEventListener('click', function(e){
            nav.changeStatus('current', instance.getProperties('target'));
        });
    }

    /**
     * * Returns the Link HTML Element.
     * @returns {HTMLElement}
     * @memberof Link
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Get all the NavMenu Links.
     * @static
     * @param {NavMenu} nav Link NavMenu parent.
     * @returns {Link[]}
     * @memberof Link
     */
    static getDomHTML(nav){
        let links = [];
        let htmls = document.querySelectorAll(`#${ nav.getProperties('id') }.nav-menu .nav-link`);
        let key = 0;
        for (const html of htmls) {
            let properties = Link.generateProperties(html);
            let states = Link.generateStates(html);
            properties.id = `link-${ key }`;
            links.push(new this(properties, states, html, nav));
            key++;
        }
        return links;
    }

    /**
     * * Returns the Link properties genereted from a HTML Element.
     * @static
     * @param {HTMLElement} html Link HTML Element
     * @returns {Object}
     * @memberof Link
     */
    static generateProperties(html){
        let properties = {};
        if (html.nodeName == 'A' && html.classList.contains('nav-link')) {
            properties.target = html.href;
        }
        return properties;
    }

    /**
     * * Returns the Link states genereted from a HTML Element.
     * @static
     * @param {HTMLElement} html Link HTML Element
     * @returns {Object}
     * @memberof Link
     */
    static generateStates(html){
        let states = {
            active: html.classList.contains('active'),
        };
        return states;
    }

    static active(current, links){
        for (const link of links) {
            if (link.getProperties('target') == current) {
                link.changeStatus('active', true);
            } else {
                link.changeStatus('active', false);
            }
        }
    }
}
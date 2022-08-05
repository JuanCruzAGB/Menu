// ? JuanCruzAGB repository
import Class from '@juancruzagb/src';

/**
 * * Button controls the tab button.
 * @export
 * @class Button
 * @extends {Class}
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 */
export class Button extends Class {
    /**
     * * Creates an instance of Button.
     * @param {object} [data]
     * @param {HTMLElement} [data.html]
     * @param {object} [data.props]
     * @param {string} [data.props.id='tab-1'] Button primary key.
     * @param {string} [data.props.target=undefined]
     * @param {string} [data.props.type='button']
     * @param {object} [data.state]
     * @param {boolean} [data.state.open=false]
     * @param {Tab} [data.Tab]
     * @memberof Button
     */
    constructor (data = {
        html,
        props: {
            id: 'tab-1',
            target: false,
            type: 'button',
        },
        state: {
            open: false,
        },
        Tab,
    }) {
        super({
            props: {
                ...Button.props(),
                ...(data && data.hasOwnProperty("props")) ? data.props : {},
            },
            state: {
                ...Button.state(),
                ...(data && data.hasOwnProperty("state")) ? data.state : {},
            },
        });

        this.setHTMLs([ data.html, ], data.Tab);
    }

    /**
     * * Set the Button HTML Elements.
     * @param {HTMLElement[]} htmls
     * @param {Tab} Tab Button Tab parent.
     * @memberof Button
     */
    setHTMLs (htmls = [], Tab) {
        if (!this.htmls) this.htmls = [];

        for (const html of htmls) {
            html.addEventListener('click', e => {
                this.state.add('clicked', html);
                Tab.open(this.props.target);
            });

            this.htmls.push(html);
        }
    }

    /**
     * * Close the Button.
     * @memberof Button
     */
    close () {
        this.state.add('open', false);

        for (const html of this.htmls) html.classList.remove('opened');
    }

    /**
     * * Open the Button.
     * @memberof Button
     */
    open () {
        this.state.add('open', true);

        for (const html of this.htmls) html.classList.add('opened');
    }

    /**
     * * Default properties.
     * @static
     * @returns {object}
     */
    static props () {
        return {
            id: 'tab-1',
            target: false,
            type: 'button',
        };
    }
    
    /**
     * * Default state.
     * @static
     * @returns {object}
     */
    static state () {
        return {
            open: false,
        };
    }
}

/**
 * * Controls the Button methods.
 * @export
 * @class Methods
 * @author JuanCruzAGB <juan.cruz.armentia@gmail.com>
 */
export default class Methods {
    /**
     * * Creates an instance of Methods.
     * @memberof Methods
     */
    constructor () {
        this.list = [];
    }

    /**
     * * Add a Button.
     * @param {array|object} data
     * @param {Tab} [Tab=false]
     * @throws {Error}
     * @returns
     * @memberof Methods
     */
    add (btn, Tab = false) {
        if (Tab) this.Tab = Tab;

        if (!btn) throw new Error('Button is required');

        if (Array.isArray(btn) || btn instanceof NodeList) {
            for (const btnInside of btn) this.add(btnInside);

            return;
        }

        this.list.push(new Button({
            html: btn,
            props: {
                id: `tab-${ this.list.length + 1 }`,
                target: btn.hasAttribute('href')
                    ? btn.href.split('#').pop().split('?').shift()
                    : btn.querySelector('a.button, a.link').href.split('#').pop().split('?').shift(),
                type: btn.classList.contains('button') || btn.classList.contains('link')
                    ? btn.classList.contains('button')
                        ? 'button' : 'link'
                    : btn.querySelector('a.button')
                        ? 'button' : 'link',
            },
            state: {
                open: btn.classList.contains('opened'),
            },
            Tab: this.Tab,
        }));
    }

    /**
     * * Returns a Button.
     * @param {string} target
     * @throws {Error}
     * @returns {object}
     * @memberof Methods
     */
    get (target) {
        if (!target) throw new Error('Tab Button target is required');

        if (!target instanceof String) throw new Error('Tab Button target must be a string');

        if (!this.has(target)) return undefined;

        for (const btn of this.list) {
            if (btn.props.target == target) return btn;
        }
    }

    /**
     * * Check if there is a Button.
     * @param {array|string} target
     * @throws {Error}
     * @returns {boolean}
     * @memberof Methods
     */
    has (target) {
        if (target == undefined) throw new Error('Tab Button target is required');

        if (Array.isArray(target)) {
            for (const btnTarget of target) {
                if (!this.has(btnTarget)) return false;
            }

            return true;
        }

        if (!target instanceof String) throw new Error('Tab Button target must be a string');

        for (const btn of this.list) {
            if (btn.props.target == target) return true;
        }

        return false;
    }

    /**
     * * Remove a Button.
     * @param {string} name
     * @throws {Error}
     * @memberof Methods
     */
    remove (name) {
        console.warn('Remove Tab Button is not supported yet');
    }
}
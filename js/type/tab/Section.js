// ? JuanCruzAGB repository
import Class from '@juancruzagb/src';

/**
 * * Section controls the tab button.
 * @export
 * @class Section
 * @extends {Class}
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 */
export class Section extends Class {
    /**
     * * Creates an instance of Section.
     * @param {object} [data]
     * @param {HTMLElement} [data.html]
     * @param {object} [data.props]
     * @param {string} [data.props.id='section-1'] Section primary key.
     * @param {string} [data.props.target=undefined]
     * @param {string} [data.props.type='button']
     * @param {object} [data.state]
     * @param {boolean} [data.state.open=false]
     * @memberof Section
     */
    constructor (data = {
        html,
        props: {
            id: 'section-1',
        },
        state: {
            open: false,
        },
    }) {
        super({
            props: {
                ...Section.props(),
                ...(data && data.hasOwnProperty("props")) ? data.props : {},
            },
            state: {
                ...Section.state(),
                ...(data && data.hasOwnProperty("state")) ? data.state : {},
            },
        });

        this.html = data.html;
    }

    /**
     * * Close the Section.
     * @memberof Section
     */
    close () {
        this.state.add('open', false);
        this.html.classList.remove('opened');
    }

    /**
     * * Open the Section.
     * @memberof Section
     */
    open () {
        this.state.add('open', true);
        this.html.classList.add('opened');
    }

    /**
     * * Default properties.
     * @static
     * @returns {object}
     */
    static props () {
        return {
            id: 'section-1',
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
 * * Controls the Section methods.
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
     * * Add a Section.
     * @param {array|object} data
     * @throws {Error}
     * @returns
     * @memberof Methods
     */
    add (section) {
        if (!section) throw new Error('Section is required');

        if (Array.isArray(section) || section instanceof NodeList) {
            for (const sectionInside of section) this.add(sectionInside);

            return;
        }

        this.list.push(new Section({
            html: section,
            props: {
                id: section.hasAttribute('id')
                    ? section.id
                    : `tab-${ this.list.length + 1 }`,
            },
            state: {
                open: section.classList.contains('opened'),
            },
        }));
    }

    /**
     * * Returns a Section.
     * @param {string} id
     * @throws {Error}
     * @returns {object}
     * @memberof Methods
     */
    get (id) {
        if (!id) throw new Error('Tab Section id is required');

        if (!id instanceof String) throw new Error('Tab Section id must be a string');

        if (!this.has(id)) return undefined;

        for (const btn of this.list) {
            if (btn.props.id == id) return btn;
        }
    }

    /**
     * * Check if there is a Section.
     * @param {array|string} id
     * @throws {Error}
     * @returns {boolean}
     * @memberof Methods
     */
    has (id) {
        if (id == undefined) throw new Error('Tab Section id is required');

        if (Array.isArray(id)) {
            for (const sectionTarget of id) {
                if (!this.has(sectionTarget)) return false;
            }

            return true;
        }

        if (!id instanceof String) throw new Error('Tab Section id must be a string');

        for (const section of this.list) {
            if (section.props.id == id) return true;
        }

        return false;
    }

    /**
     * * Remove a Section.
     * @param {string} name
     * @throws {Error}
     * @memberof Methods
     */
    remove (name) {
        console.warn('Remove Tab Section is not supported yet');
    }
}
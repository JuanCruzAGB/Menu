// ? JuanCruzAGB | Source package
import Class from "@juancruzagb/src";

// ? JuanCruzAGB | Menu package
import { ButtonMethods as Button, SectionMethods as Section, } from "@juancruzagb/menu";

/**
 * * Tab makes an excellent tabulation menu.
 * @export
 * @class Tab
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 * @extends Class
 */
export default class Tab extends Class {
    constructor (data = {
        callbacks: {
            close: {
                function: params => { /* console.log(params); */ },
                params: {},
            },
            open: {
                function: params => { /* console.log(params); */ },
                params: {},
            },
        },
        props: {
            id: "menu-1",
            type: "TAB",
        },
        state: {
            current: false,
            open: false,
        },
    }) {
        super({
            callbacks: {
                ...Tab.callbacks(),
                ...((data && data.hasOwnProperty("callbacks")) ? data.callbacks : {}),
            },
            props: {
                ...Tab.props(),
                ...((data && data.hasOwnProperty("props")) ? data.props : {}),
            },
            state: {
                ...Tab.state(),
                ...((data && data.hasOwnProperty("state")) ? data.state : {}),
            },
        });

        this.html = document.querySelector(`#${ this.props.id }.menu.tab`);
        this.sections = new Section;
        this.tabs = new Button;

        this.sections.add(document.querySelectorAll(`.${ this.props.id }.section`));
        this.tabs.add(document.querySelectorAll(`.${ this.props.id }.tab`), this);
        
        if (this.state.open) this.open(this.state.open);
    }

    /**
     * * Close the Tab Sections.
     * @param {object} [params]
     * @memberof TabMenu
     */
    close (params = {}) {
        for (const section of this.sections) section.close();

        for (const tab of this.tabs) tab.close();

        if (this.callbacks.has('close')) {
            this.callbacks.execute("close", {
                ...params,
                Tab: this,
            });
        }
    }

    /**
     * * Open a Tab Section.
     * @param {string} target Section target
     * @param {object} [params]
     * @memberof Tab
     */
    open (target = false, params = {}) {
        this.state.add("open", target);
        let found = {
            button: this.tabs.get(this.state.open),
            section: this.sections.get(this.state.open),
        };

        for (const section of this.sections.list) section.close();

        for (const button of this.tabs.list) button.close();

        if (found.section) found.section.open();

        if (found.button) found.button.open();

        if (this.callbacks.has('open')) {
            this.callbacks.execute("open", {
                ...params,
                current: found,
                open: this.state.open,
                Tab: this,
            });
        }

        return found;
    }

    /**
     * * Returns default callbacks.
     * @static
     * @returns {object}
     * @memberof Sidebar
     */
    static callbacks () {
        return {
            // 
        };
    }

    /**
     * * Returns default properties.
     * @static
     * @returns {object}
     * @memberof Sidebar
     */
    static props () {
        return {
            id: "menu-1",
            type: "TAB",
        };
    }
    
    /**
     * * Returns default state.
     * @static
     * @returns {object}
     * @memberof Sidebar
     */
    static state () {
        return {
            current: false,
        };
    }
}